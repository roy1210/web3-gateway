import { useMatchMedia } from 'comet-ui-kit';
import { rem } from 'polished';
import React, { useMemo } from 'react';

import { Star } from '../../../components/Star';
import { useThemeSettings } from '../../store/settings';
import { StylingConstants } from '../../styles';

export const useMakeTwinkleStars = () => {
  const { media } = StylingConstants;
  const xl = useMatchMedia({ query: `(min-width: ${rem(media.xl)})` });
  const [theme] = useThemeSettings();

  const isValidCondition = xl && typeof window !== 'undefined' && theme === 'dark';

  const starElements = useMemo(() => {
    if (isValidCondition) {
      const delay = 1;
      const randomize = (pos: number) => Math.random() * pos;
      const windowDimension = window;
      const windowSize = { x: windowDimension.innerWidth, y: windowDimension.innerHeight };

      const contentElement = document.body;
      const currentContentHeight = contentElement.offsetHeight;
      const createElements = (num: number) => [...Array(num)];
      return createElements(250).map((el, i) => (
        <Star
          key={i}
          scale={randomize(1)}
          delay={randomize(delay)}
          xPos={randomize(windowSize.x)}
          yPos={randomize(currentContentHeight)}
        />
      ));
    }
    return <></>;
  }, [isValidCondition]);

  return useMemo(() => ({ starElements }), [starElements]);
};
