import React from 'react';
import { useTheme } from 'styled-components';
import { ScaleLoader } from 'react-spinners';

import { LoaderAnimationContainer } from './styled';

export const ScaleLoaderAnimation = () => {
  const theme = useTheme();
  return (
    <LoaderAnimationContainer>
      <ScaleLoader
        height={40}
        width={6}
        radius={2}
        margin={3}
        color={theme.comet.color.primary.normal}
      />
    </LoaderAnimationContainer>
  );
};
