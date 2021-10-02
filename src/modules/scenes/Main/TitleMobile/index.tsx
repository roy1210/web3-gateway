import { Text, useMatchMedia } from 'comet-ui-kit';
import Image from 'next/image';
import { rem } from 'polished';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import logoMetamask from '../../../../../public/icons/metamask-fox.svg';
import { StylingConstants } from '../../../styles';

import { TitleColumn, TitleContainer } from './styled';

export const TitleMobile = () => {
  const { media } = StylingConstants;
  const xs = useMatchMedia({ query: `(min-width: ${rem(media.xs)})` });
  const width = xs ? 80 : 120;
  const height = xs ? 100 : 140;

  return (
    <TitleContainer>
      <Image src={logoMetamask} width={width} height={height} alt={'metamask-logo'} />

      <TitleColumn>
        <Text variant="title-xs">
          <FormattedMessage id="title.add-custom-network" />
        </Text>
      </TitleColumn>
    </TitleContainer>
  );
};
