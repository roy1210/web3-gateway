import { NextSeo } from 'next-seo';
import React from 'react';

import { DEPLOYED_URL } from '../env';

export const SEO = () => {
  const url = DEPLOYED_URL;
  const content = 'Add custom networks to MetaMask with once click';
  const title = 'Web3 Gateway';
  const image = 'https://dl.dropboxusercontent.com/s/pdo3ngfcmclj62q/web3-gateway-og-dark.jpg';

  return (
    <NextSeo
      title={title}
      description={content}
      openGraph={{
        url,
        title,
        description: content,
        images: [
          {
            url: image,
            width: 1280,
            height: 672,
            alt: title,
          },
        ],
        site_name: title,
      }}
      twitter={{
        handle: '@roy_s_k',
        site: '@roy_s_k',
        cardType: 'summary_large_image',
      }}
    />
  );
};
