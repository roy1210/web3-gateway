import { em, transitions, transparentize } from 'polished';
import styled, { css } from 'styled-components';

const COLOR_TESTNET = '#8892b5';
const COLOR_MAINNET = '#f0b90b';
const COLOR_BSC = '#f0b90b';
const COLOR_POLYGON = '#8248e5';
const COLOR_FANTOM = '#196ecf';
// const COLOR_AVALANCHE = '#e84142';
const COLOR_AVALANCHE = '#972243';
const COLOR_SHIDEN = `-webkit-linear-gradient(
-45deg, #c94de8 0%, #703ccc 50%, #2db8e2 100%)`;
const COLOR_ARBITRUM = `-webkit-linear-gradient(
-45deg, #8892b5 0%, #fff  50%, #007bff 100%)`;
const COLOR_THETA = `-webkit-linear-gradient(
-45deg, #54B4E8 0%, #55C2CF  50%, #5EE1BE 100%)`;

const COLOR_ASTAR = `-webkit-linear-gradient(
  -45deg, #c94de8 20%, #2db8e2 60%, #0959af 100%)`;

const testnet = css`
  background: ${transparentize(0.5, COLOR_TESTNET)};
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 5px,
    ${COLOR_TESTNET} 5px,
    ${COLOR_TESTNET} 10px
  );
  color: ${({ theme }) => theme.comet.color.danger.text};
`;

const mainnet = css`
  background: ${COLOR_MAINNET};
  color: ${({ theme }) => theme.comet.color.warning.text};
`;

const bsc = css`
  background: ${COLOR_BSC};
  color: ${({ theme }) => theme.comet.color.warning.text};
`;

const shiden = css`
  background: #703ccc;
  background: ${COLOR_SHIDEN};
  color: ${({ theme }) => theme.comet.color.danger.text};
`;

const astar = css`
  background: #703ccc;
  background: ${COLOR_ASTAR};
  color: ${({ theme }) => theme.comet.color.danger.text};
`;

const polygon = css`
  background: ${COLOR_POLYGON};
  color: ${({ theme }) => theme.comet.color.danger.text};
`;

const arbitrum = css`
  background: ${COLOR_ARBITRUM};
  color: ${({ theme }) => theme.comet.color.warning.text};
`;

const avalanche = css`
  background: ${COLOR_AVALANCHE};
  color: ${({ theme }) => theme.comet.color.danger.text};
`;

const fantom = css`
  background: ${COLOR_FANTOM};
  color: ${({ theme }) => theme.comet.color.danger.text};
`;

const theta = css`
  background: ${COLOR_THETA};
  color: ${({ theme }) => theme.comet.color.warning.text};
`;

export const Container = styled.div<{ chain: string; isActive: boolean; isMainnet: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => em(theme.comet.size.street, theme.comet.size.closet)};
  border-radius: ${({ theme }) => em(theme.comet.size.street / 2, theme.comet.size.closet)};
  padding: 0 ${({ theme }) => em(theme.comet.size.closet, theme.comet.size.closet)};
  background: ${(props) =>
    props.theme.comet.id === 'CometLight'
      ? props.theme.comet.color.bg.hover
      : props.theme.comet.color.bg.accent};
  color: ${({ theme }) => theme.comet.color.text.normal};
  font-size: ${({ theme }) => em(theme.comet.size.closet)};
  font-weight: 600;
  user-select: none;
  cursor: auto;
  word-break: keep-all;
  white-space: nowrap;
  box-shadow: 1px 2px ${({ theme }) => theme.comet.color.bg.masked};
  transition: all 0.3s ease 0s;
  :hover {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    transform: scale(1.05);
  }

  ${({ theme }) => transitions(['color', 'background'], theme.comet.duration.normal)};
  ${({ chain, isActive }) => chain === 'Testnet' && isActive && testnet};
  ${({ chain, isActive }) => chain === 'Mainnet' && isActive && mainnet};
  ${({ chain, isActive }) => chain === 'Shiden' && isActive && shiden};
  ${({ chain, isActive }) => chain === 'Polygon' && isActive && polygon};
  ${({ chain, isActive }) => chain === 'BSC' && isActive && bsc};
  ${({ chain, isActive }) => chain === 'Arbitrum' && isActive && arbitrum};
  ${({ chain, isActive }) => chain === 'Avalanche' && isActive && avalanche};
  ${({ chain, isActive }) => chain === 'Optimism' && isActive && avalanche};
  ${({ chain, isActive }) => chain === 'Fantom' && isActive && fantom};
  ${({ chain, isActive }) => chain === 'Theta' && isActive && theta};
  ${({ chain, isActive }) => chain === 'Astar' && isActive && astar};

  ${({ isMainnet, isActive }) => !isMainnet && isActive && testnet};
`;
