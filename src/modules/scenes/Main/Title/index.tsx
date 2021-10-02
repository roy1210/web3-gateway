import { Text } from 'comet-ui-kit';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { MetaMaskAnimation } from '../../../../components/MetaMaskAnimation';

import { TitleColumn, TitleContainer } from './styled';

export const Title = () => {
  return (
    <TitleContainer>
      <MetaMaskAnimation />
      <TitleColumn>
        <Text variant="title-xs">
          <FormattedMessage id="title.add-custom-network" />
        </Text>
      </TitleColumn>
    </TitleContainer>
  );
};
