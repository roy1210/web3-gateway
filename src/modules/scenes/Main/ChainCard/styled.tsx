import { CoinIcon } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants } from '../../../styles';

const { media } = StylingConstants;

export const ChainCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  width: ${rem(350)};
  background: ${(props) =>
    props.theme.comet.id === 'CometLight' ? '#ffff' : props.theme.comet.color.bg.hover};

  border-radius: ${({ theme }) => rem(theme.comet.size.room)};
  box-shadow: 0px 15px 25px -10px rgb(43 55 74 / 15%);
  @media (min-width: ${rem(media.xl)}) {
    width: ${rem(370)};
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => rem(theme.comet.size.room)};
`;

export const RowNetwork = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ColumnNetworkTags = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${rem(70)} ${rem(70)};
  grid-column-gap: ${({ theme }) => rem(theme.comet.size.drawer)};
  justify-content: end;
  padding-left: ${({ theme }) => rem(theme.comet.size.room)};
  padding-right: ${({ theme }) => rem(theme.comet.size.room)};
`;

export const CustomLogo = styled(CoinIcon)`
  font-size: ${({ theme }) => rem(theme.comet.size.town)};
`;

export const Network = styled.div`
  justify-self: center;
`;

export const Information = styled.div`
  padding-top: ${({ theme }) => rem(theme.comet.size.box)};
  padding-bottom: ${({ theme }) => rem(theme.comet.size.house)};
  display: grid;
  grid-row-gap: ${({ theme }) => rem(theme.comet.size.box)};
  padding-left: ${({ theme }) => rem(theme.comet.size.room)};
  padding-right: ${({ theme }) => rem(theme.comet.size.room)};
  height: ${rem(174)};
`;

export const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${rem(120)} auto;
`;

export const RowUrl = styled(Row)`
  height: ${rem(40)};
  align-items: start;
`;

export const Top = styled(Row)`
  padding-top: ${({ theme }) => rem(theme.comet.size.drawer)};
  padding-left: ${({ theme }) => rem(theme.comet.size.room)};
  padding-right: ${({ theme }) => rem(theme.comet.size.room)};
`;

export const Left = styled.div`
  text-align: center;
`;

export const Right = styled.div`
  text-align: center;
`;

export const ColumnUrl = styled.div`
  overflow-wrap: anywhere;
  text-decoration: none;
`;

export const Bottom = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${({ theme }) => rem(theme.comet.size.street)};
  padding-bottom: ${({ theme }) => rem(theme.comet.size.street)};
  background: ${(props) =>
    props.theme.comet.id === 'CometLight' ? 'whitesmoke' : props.theme.comet.color.bg.masked};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-end;
  border-bottom-left-radius: ${({ theme }) => rem(theme.comet.size.closet)};
  border-bottom-right-radius: ${({ theme }) => rem(theme.comet.size.closet)};
`;

export const WalletBal = styled.div`
  padding-left: ${rem(30)};
  width: 100%;
  display: grid;
  grid-template-columns: ${rem(38)} auto;
`;
