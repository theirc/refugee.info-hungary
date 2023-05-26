// A module for handling social media.
import { SocialMediaProps } from '@ircsignpost/signpost-base/dist/src/header-banner';

import facebookImage from '../public/facebook.svg';
import messengerImage from '../public/messenger.svg';
import telegramImage from '../public/telegram.svg';
import telephoneImage from '../public/telephone.svg';
import viberImage from '../public/viber.svg';

export interface SocialMediaLink {
  title: string;
  href: string;
}

// Serializable social media links
export interface SocialMediaLinks {
  facebookLink: SocialMediaLink;
  telegramLink: SocialMediaLink;
  messengerLink: SocialMediaLink;
  telephoneLink: SocialMediaLink;
  viberLink: SocialMediaLink;
}

/**
 * Provides data for Social Media buttons, e.g. Facebook, Whatsapp, etc.
 */
export function getSocialMediaProps(
  socialMediaLinks: SocialMediaLinks
): SocialMediaProps[] {
  return [
    {
      ...socialMediaLinks.facebookLink,
      image: facebookImage,
    },
    {
      ...socialMediaLinks.telegramLink,
      image: telegramImage,
    },
    {
      ...socialMediaLinks.messengerLink,
      image: messengerImage,
    },
    {
      ...socialMediaLinks.telephoneLink,
      image: telephoneImage,
    },
    {
      ...socialMediaLinks.viberLink,
      image: viberImage,
    },
  ];
}
