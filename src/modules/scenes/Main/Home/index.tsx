import { useMatchMedia } from 'comet-ui-kit';
import { rem } from 'polished';
import React from 'react';

import { CHAIN } from '../../../network';
import { StylingConstants } from '../../../styles';
import { ChainCards } from '../ChainCards';
import { Title } from '../Title';
import { TitleMobile } from '../TitleMobile';

import { HomeBrowserContainer, Placeholder } from './styled';

export const Home = () => {
  const { media } = StylingConstants;
  const xl = useMatchMedia({ query: `(min-width: ${rem(media.xl)})` });

  const primaryChains = [
    {
      mainnet: CHAIN.ARBITRUM_MAINNET,
      testnet: CHAIN.ARBITRUM_TESTNET,
      tag: { mainnet: 'Arbitrum', testnet: 'Rinkby' },
    },
    {
      mainnet: CHAIN.OPTIMISTIC_MAINNET,
      testnet: CHAIN.OPTIMISTIC_TESTNET,
      tag: { mainnet: 'Optimism', testnet: 'Kovan' },
    },
    {
      mainnet: CHAIN.SHIDEN_MAINNET,
      testnet: CHAIN.SHIDEN_TESTNET,
      tag: { mainnet: 'Shiden', testnet: 'Shibuya' },
    },
  ];

  const chains = [
    {
      mainnet: CHAIN.AVALANCH_MAINNET,
      testnet: CHAIN.AVALANCH_TESTNET,
      tag: { mainnet: 'Avalanche', testnet: 'Fuji' },
    },
    {
      mainnet: CHAIN.POLYGON_MAINNET,
      testnet: CHAIN.POLYGON_TESTNET,
      tag: { mainnet: 'Polygon', testnet: 'Mumbai' },
    },
    {
      mainnet: CHAIN.BSC_MAINNET,
      testnet: CHAIN.BSC_TESTNET,
      tag: { mainnet: 'BSC', testnet: 'Testnet' },
    },
    {
      mainnet: CHAIN.FANTOM_MAINNET,
      testnet: CHAIN.FANTOM_TESTNET,
      tag: { mainnet: 'Fantom', testnet: 'Testnet' },
    },
    {
      mainnet: CHAIN.THETA_MAINNET,
      testnet: CHAIN.THETA_TESTNET,
      tag: { mainnet: 'Theta', testnet: 'Testnet' },
    },
  ];
  return (
    <>
      <HomeBrowserContainer>
        {!xl && <TitleMobile />}
        <ChainCards chains={primaryChains} />
        {/* Memo: Placeholder for waiting generate <Title /> components */}
        {xl ? <Title /> : <Placeholder />}
        <ChainCards chains={chains} />
      </HomeBrowserContainer>
    </>
  );
};
