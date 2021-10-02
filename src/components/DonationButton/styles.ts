import { Text } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

export const TextBlack = styled(Text)`
  font-size: ${({ theme }) => rem(theme.comet.size.room)};
  color: #000000;
`;

export const TextCoffee = styled(Text)`
  margin-right: ${({ theme }) => rem(theme.comet.size.box)};
  margin-left: ${({ theme }) => rem(theme.comet.size.box)};
`;

export const Coffee = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonDonation = styled.div`
  background: #ffcd00;
  border-radius: 8px;
  padding-right: ${({ theme }) => rem(theme.comet.size.room)};
  padding-left: ${({ theme }) => rem(theme.comet.size.room)};
  cursor: pointer;
  transition: all 0.3s ease 0s;
  :hover {
    transition: all 0.3s ease 0s;
    transform: scale(1.05);
  }
`;
