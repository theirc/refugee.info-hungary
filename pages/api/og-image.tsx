import { ImageResponse } from '@vercel/og';
import Image from 'next/image';

export const config = {
  runtime: 'nodejs',
};

const generateOGImage = async () => {
  const image = await fetch(
    'https://hungary.refugee.info/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frefugeeinfo-hungary-logo.0be5b900.png&w=3840&q=75'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          width: '1200px',
          height: '630px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          alt="og image"
          width="256"
          height="256"
          src={`data:image/png;base64,${Buffer.from(image).toString('base64')}`}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};

export default async function handler() {
  const imageResponse = await generateOGImage();
  return imageResponse;
}
