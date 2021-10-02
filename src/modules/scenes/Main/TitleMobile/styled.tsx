import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants } from '../../../styles';
const { media } = StylingConstants;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => rem(theme.comet.size.street)};
  width: 100%;

  @media (min-width: ${rem(media.xl)}) {
    display: none;
  }
`;

export const TitleColumn = styled.div`
  text-align: center;
  margin-left: ${({ theme }) => rem(theme.comet.size.drawer)};
  width: ${rem(240)};
  @media (min-width: ${rem(media.sm)}) {
    width: 100%;
  }
`;
