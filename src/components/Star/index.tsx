import React from 'react';

import { StyledStar } from './styled';

interface Props {
  scale: number;
  xPos: number;
  yPos: number;
  delay: number;
}

export const Star = (props: Props) => {
  const { scale, xPos, yPos, delay } = props;
  return (
    <StyledStar
      initial={{ scale, x: xPos, y: yPos, opacity: 1 }}
      animate={{ opacity: [1, 0.6, 1, 0.6] }}
      transition={{ duration: 5, delay, repeat: Infinity }}
    ></StyledStar>
  );
};
