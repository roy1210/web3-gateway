import { rem } from 'polished';
import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => rem(theme.comet.size.street)};
`;

export const Right = styled.div`
  margin-left: auto;
  display: grid;
  align-items: center;
  grid-column-gap: ${({ theme }) => rem(theme.comet.size.house)};
  grid-template-columns: auto auto auto;
`;
