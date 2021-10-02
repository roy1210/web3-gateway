import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants } from '../../../styles';
const { media } = StylingConstants;

export const ChainCardsContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  margin-bottom: ${({ theme }) => rem(theme.comet.size.city)};
  grid-row-gap: ${({ theme }) => rem(theme.comet.size.city)};
  grid-column-gap: ${({ theme }) => rem(theme.comet.size.city)};
  @media (min-width: ${rem(media.md)}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${rem(media.xl)}) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 0;
  }
`;
