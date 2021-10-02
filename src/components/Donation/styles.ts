import { Text } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

export const DonationContainer = styled.div`
  color: ${({ theme }) => theme.comet.color.text.normal};
  display: flex;
  flex-direction: column;
  align-items: center;

  .react-tabs {
    width: ${rem(350)};
    text-align: center;
  }
  span {
    color: black;
  }
`;

export const TextBlack = styled(Text)`
  color: black;
`;

export const RowTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-top: ${({ theme }) => rem(theme.comet.size.box)};
  margin-bottom: ${({ theme }) => rem(theme.comet.size.closet)};
`;

export const ColumnLightning = styled.div`
  display: flex;
  align-items: center;
`;

export const Lightning = styled.div`
  margin-bottom: ${({ theme }) => rem(theme.comet.size.box / 2)};
`;
