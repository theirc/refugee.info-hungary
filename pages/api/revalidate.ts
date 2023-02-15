import {
  ZendeskArticleTranslation,
  getArticleTranslations,
  getLastArticlesEdited,
} from '@ircsignpost/signpost-base/dist/src/zendesk';
import type { NextApiRequest, NextApiResponse } from 'next';

import { ZENDESK_AUTH_HEADER } from '../../lib/constants';
import { getZendeskUrl } from '../../lib/url';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    let time = new Date();
    time.setHours(time.getHours() - 1);
    time.setSeconds(0, 0);
    const unixTime = Math.floor(time.getTime() - 1000)
      .toString()
      .slice(0, -3);

    const articles = await getLastArticlesEdited(
      getZendeskUrl(),
      unixTime,
      ZENDESK_AUTH_HEADER
    );

    let articlesToRevalidate: ZendeskArticleTranslation[] = [];

    const publishedArticles = articles.filter((x) => x.draft);

    if (!publishedArticles.length) {
      return res.status(200).json('nothing to revalidate');
    }

    for (let article of publishedArticles) {
      const translations = await getArticleTranslations(
        getZendeskUrl(),
        article.id
      );

      const publishedTranslations = translations.filter((x) => x.draft);
      if (!publishedTranslations.length) {
        return res.status(200).json('nothing to revalidate');
      }

      for (let translation of publishedTranslations) {
        if (new Date(translation.updated_at) >= time) {
          articlesToRevalidate.push(translation);
        }
      }
    }

    Promise.all(
      articlesToRevalidate.map(async (article) => {
        const pathToRevalidate = `/${article.locale}/articles/${article.source_id}`;
        await res.revalidate(pathToRevalidate);
      })
    );
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating ' + err);
  }
}
