import React from 'react';

import { ChainCard } from '../ChainCard';

import { ChainCardsContainer } from './styled';

export const ChainCards = ({
  chains,
}: {
  chains: {
    mainnet: string;
    testnet: string;
    tag: { mainnet: string; testnet: string };
  }[];
}) => {
  return (
    <>
      <ChainCardsContainer>
        {chains.map((chain) => (
          <ChainCard
            mainnetId={chain.mainnet}
            testnetId={chain.testnet}
            tag={chain.tag}
            key={chain.mainnet}
          />
        ))}
      </ChainCardsContainer>
    </>
  );
};
