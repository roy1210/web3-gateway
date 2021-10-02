import { rem } from 'polished';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => rem(theme.comet.size.street)};
  margin-bottom: ${({ theme }) => rem(theme.comet.size.street)};
  width: 100%;
  height: ${rem(100)};
`;

export const TitleColumn = styled.div`
  text-align: center;
  margin-left: ${({ theme }) => rem(theme.comet.size.drawer)};
`;
