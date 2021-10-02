import { Icon, Text } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

export const DonationDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ColumnQrCode = styled.div`
  cursor: pointer;
  margin-top: ${({ theme }) => rem(theme.comet.size.city)};
`;

export const RowAddress = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => rem(theme.comet.size.town)};
`;

export const TextBlack = styled(Text)`
  color: black;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => rem(theme.comet.size.box)};
`;

export const IconCopy = styled(Icon.Paste)`
  font-size: ${({ theme }) => rem(theme.comet.size.house)};
  margin-left: ${({ theme }) => rem(theme.comet.size.box)};
  color: black;
  cursor: pointer;
`;
