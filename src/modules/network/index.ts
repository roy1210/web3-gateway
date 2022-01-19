import logoBsc from '../../../public/icons/binance-smart-chain.svg';
import logoShiden from '../../../public/icons/shiden.svg';
import logoPolygon from '../../../public/icons/polygon.svg';
import logoAvalanche from '../../../public/icons/avalanche.svg';
import logoArbitrum from '../../../public/icons/arbitrum.svg';
import logoFantom from '../../../public/icons/fantom.svg';
import logoOp from '../../../public/icons/op.svg';
import logoTheta from '../../../public/icons/theta.svg';
import logoAstar from '../../../public/icons/astar.png';

export { getChainData, setupNetwork } from './utils';

export const metamaskRes = {
  undefined: "Can't setup the network on metamask because window.ethereum is undefined",
  alreadyConnected: 'Your MetaMask is already connected this network!',
};

export enum CHAIN {
  ARBITRUM_MAINNET = '42161',
  ARBITRUM_TESTNET = '421611',
  OPTIMISTIC_MAINNET = '10',
  OPTIMISTIC_TESTNET = '69',
  BSC_MAINNET = '56',
  BSC_TESTNET = '97',
  ASTAR_MAINNET = '592',
  ASTAR_TESTNET = '81',
  SHIDEN_MAINNET = '336',
  SHIDEN_TESTNET = '81',
  POLYGON_MAINNET = '137',
  POLYGON_TESTNET = '80001',
  AVALANCH_MAINNET = '43114',
  AVALANCH_TESTNET = '43113',
  FANTOM_MAINNET = '250',
  FANTOM_TESTNET = '4002',
  THETA_MAINNET = '361',
  THETA_TESTNET = '365',
}

export const logo = {
  [CHAIN.ARBITRUM_MAINNET]: logoArbitrum,
  [CHAIN.ARBITRUM_TESTNET]: logoArbitrum,
  [CHAIN.OPTIMISTIC_MAINNET]: logoOp,
  [CHAIN.OPTIMISTIC_TESTNET]: logoOp,
  [CHAIN.BSC_MAINNET]: logoBsc,
  [CHAIN.BSC_TESTNET]: logoBsc,
  [CHAIN.POLYGON_MAINNET]: logoPolygon,
  [CHAIN.POLYGON_TESTNET]: logoPolygon,
  [CHAIN.ASTAR_MAINNET]: logoAstar,
  [CHAIN.ASTAR_TESTNET]: logoAstar,
  [CHAIN.SHIDEN_MAINNET]: logoShiden,
  [CHAIN.SHIDEN_TESTNET]: logoAstar,
  [CHAIN.AVALANCH_MAINNET]: logoAvalanche,
  [CHAIN.AVALANCH_TESTNET]: logoAvalanche,
  [CHAIN.FANTOM_MAINNET]: logoFantom,
  [CHAIN.FANTOM_TESTNET]: logoFantom,
  [CHAIN.THETA_MAINNET]: logoTheta,
  [CHAIN.THETA_TESTNET]: logoTheta,
};

export const chainNameTitle = {
  [CHAIN.ARBITRUM_MAINNET]: 'Arbitrum',
  [CHAIN.ARBITRUM_TESTNET]: 'Arbitrum',
  [CHAIN.OPTIMISTIC_MAINNET]: 'Optimistic Ethereum',
  [CHAIN.OPTIMISTIC_TESTNET]: 'Optimistic Ethereum',
  [CHAIN.BSC_MAINNET]: 'Binance Smart Chain',
  [CHAIN.BSC_TESTNET]: 'Binance Smart Chain',
  [CHAIN.POLYGON_MAINNET]: 'Polygon',
  [CHAIN.POLYGON_TESTNET]: 'Polygon',
  [CHAIN.ASTAR_MAINNET]: 'Astar Network',
  [CHAIN.ASTAR_TESTNET]: 'Astar Network',
  [CHAIN.SHIDEN_MAINNET]: 'Shiden Network',
  [CHAIN.SHIDEN_TESTNET]: 'ASTAR / Shiden',
  [CHAIN.AVALANCH_MAINNET]: 'Avalanche Network',
  [CHAIN.AVALANCH_TESTNET]: 'Avalanche Network',
  [CHAIN.FANTOM_MAINNET]: 'Fantom',
  [CHAIN.FANTOM_TESTNET]: 'Fantom',
  [CHAIN.THETA_MAINNET]: 'Theta',
  [CHAIN.THETA_TESTNET]: 'Theta',
};

export const chainNameShort = {
  [CHAIN.ARBITRUM_MAINNET]: 'Mainnet',
  [CHAIN.ARBITRUM_TESTNET]: 'Rinkby Testnet',
  [CHAIN.OPTIMISTIC_MAINNET]: 'Mainnet',
  [CHAIN.OPTIMISTIC_TESTNET]: 'Kovan Testnet',
  [CHAIN.BSC_MAINNET]: 'Mainnet',
  [CHAIN.BSC_TESTNET]: 'Testnet',
  [CHAIN.POLYGON_MAINNET]: 'Mainnet',
  [CHAIN.POLYGON_TESTNET]: 'Mumbai Testnet',
  [CHAIN.ASTAR_MAINNET]: 'Mainnet',
  [CHAIN.ASTAR_TESTNET]: 'Shibuya Testnet',
  [CHAIN.SHIDEN_MAINNET]: 'Mainnet',
  [CHAIN.SHIDEN_TESTNET]: 'Shibuya Testnet',
  [CHAIN.AVALANCH_MAINNET]: 'Mainnet',
  [CHAIN.AVALANCH_TESTNET]: 'Fuji Testnet',
  [CHAIN.FANTOM_MAINNET]: 'Mainnet',
  [CHAIN.FANTOM_TESTNET]: 'Testnet',
  [CHAIN.FANTOM_MAINNET]: 'Mainnet',
  [CHAIN.FANTOM_TESTNET]: 'Testnet',
  [CHAIN.THETA_MAINNET]: 'Mainnet',
  [CHAIN.THETA_TESTNET]: 'Testnet',
};

// Memo: MetaMask property
export const chainName = {
  [CHAIN.ARBITRUM_MAINNET]: 'Arbitrum Mainnet',
  [CHAIN.ARBITRUM_TESTNET]: 'Arbitrum Rinkeby Testnet',
  [CHAIN.OPTIMISTIC_MAINNET]: 'Optimistic Ethereum Mainnet',
  [CHAIN.OPTIMISTIC_TESTNET]: 'Optimistic Ethereum Kovan Testnet',
  [CHAIN.BSC_MAINNET]: 'Binance Smart Chain Mainnet',
  [CHAIN.BSC_TESTNET]: 'Binance Smart Chain Testnet',
  [CHAIN.POLYGON_MAINNET]: 'Polygon Mainnet',
  [CHAIN.POLYGON_TESTNET]: 'Mumbai Testnet',
  [CHAIN.ASTAR_MAINNET]: 'Astar Network Mainnet',
  [CHAIN.ASTAR_TESTNET]: 'Shibuya Testnet',
  [CHAIN.SHIDEN_MAINNET]: 'Shiden Network Mainnet',
  [CHAIN.SHIDEN_TESTNET]: 'Shibuya Testnet',
  [CHAIN.AVALANCH_MAINNET]: 'Avalanche Network Mainnet',
  [CHAIN.AVALANCH_TESTNET]: 'Fuji Testnet',
  [CHAIN.FANTOM_MAINNET]: 'Fantom Opera',
  [CHAIN.FANTOM_TESTNET]: 'Fantom Testnet',
  [CHAIN.THETA_MAINNET]: 'Theta Mainnet',
  [CHAIN.THETA_TESTNET]: 'Theta Testnet',
};

// Memo: MetaMask property
export const nativeCurrency = {
  [CHAIN.ARBITRUM_MAINNET]: {
    name: 'ETH',
    symbol: 'eth',
    decimals: 18,
  },
  [CHAIN.ARBITRUM_TESTNET]: {
    name: 'ETH',
    symbol: 'eth',
    decimals: 18,
  },
  [CHAIN.OPTIMISTIC_MAINNET]: {
    name: 'ETH',
    symbol: 'eth',
    decimals: 18,
  },
  [CHAIN.OPTIMISTIC_TESTNET]: {
    name: 'ETH',
    symbol: 'eth',
    decimals: 18,
  },
  [CHAIN.BSC_MAINNET]: {
    name: 'BNB',
    symbol: 'bnb',
    decimals: 18,
  },
  [CHAIN.BSC_TESTNET]: {
    name: 'BNB',
    symbol: 'bnb',
    decimals: 18,
  },
  [CHAIN.POLYGON_MAINNET]: {
    name: 'MATIC',
    symbol: 'matic',
    decimals: 18,
  },
  [CHAIN.POLYGON_TESTNET]: {
    name: 'MATIC',
    symbol: 'matic',
    decimals: 18,
  },
  [CHAIN.ASTAR_MAINNET]: {
    name: 'ASTR',
    symbol: 'astr',
    decimals: 18,
  },
  [CHAIN.ASTAR_TESTNET]: {
    name: 'SBY',
    symbol: 'sby',
    decimals: 18,
  },
  [CHAIN.SHIDEN_MAINNET]: {
    name: 'SDN',
    symbol: 'sdn',
    decimals: 18,
  },
  [CHAIN.SHIDEN_TESTNET]: {
    name: 'SBY',
    symbol: 'sby',
    decimals: 18,
  },
  [CHAIN.AVALANCH_MAINNET]: {
    name: 'AVAX',
    symbol: 'avax',
    decimals: 18,
  },
  [CHAIN.AVALANCH_TESTNET]: {
    name: 'AVAX',
    symbol: 'avax',
    decimals: 18,
  },
  [CHAIN.FANTOM_MAINNET]: {
    name: 'FTM',
    symbol: 'ftm',
    decimals: 18,
  },
  [CHAIN.FANTOM_TESTNET]: {
    name: 'FTM',
    symbol: 'ftm',
    decimals: 18,
  },
  [CHAIN.THETA_MAINNET]: {
    name: 'TFUEL',
    symbol: 'tfuel',
    decimals: 18,
  },
  [CHAIN.THETA_TESTNET]: {
    name: 'TFUEL',
    symbol: 'tfuel',
    decimals: 18,
  },
};

// Memo: MetaMask property
export const rpcUrls = {
  [CHAIN.ARBITRUM_MAINNET]: ['https://arb1.arbitrum.io/rpc'],
  [CHAIN.ARBITRUM_TESTNET]: ['https://rinkeby.arbitrum.io/rpc'],
  [CHAIN.OPTIMISTIC_MAINNET]: ['https://mainnet.optimism.io'],
  [CHAIN.OPTIMISTIC_TESTNET]: ['https://kovan.optimism.io'],
  [CHAIN.BSC_MAINNET]: ['https://bsc-dataseed.binance.org'],
  [CHAIN.BSC_TESTNET]: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  [CHAIN.POLYGON_MAINNET]: ['https://rpc-mainnet.maticvigil.com'],
  [CHAIN.POLYGON_TESTNET]: ['https://rpc-mumbai.maticvigil.com'],
  [CHAIN.ASTAR_MAINNET]: ['https://rpc.astar.network:8545'],
  [CHAIN.ASTAR_TESTNET]: ['https://rpc.shibuya.astar.network:8545'],
  [CHAIN.SHIDEN_MAINNET]: ['https://rpc.shiden.astar.network:8545'],
  [CHAIN.SHIDEN_TESTNET]: ['https://rpc.shibuya.astar.network:8545'],
  [CHAIN.AVALANCH_MAINNET]: ['https://api.avax.network/ext/bc/C/rpc'],
  [CHAIN.AVALANCH_TESTNET]: ['https://api.avax-test.network/ext/bc/C/rpc'],
  [CHAIN.FANTOM_MAINNET]: ['https://rpc.ftm.tools'],
  [CHAIN.FANTOM_TESTNET]: ['https://rpc.testnet.fantom.network'],
  [CHAIN.THETA_MAINNET]: ['https://eth-rpc-api.thetatoken.org/rpc'],
  [CHAIN.THETA_TESTNET]: ['https://eth-rpc-api-testnet.thetatoken.org/rpc'],
};

// Memo: MetaMask property
export const blockExplorerUrls = {
  [CHAIN.ARBITRUM_MAINNET]: ['https://arbiscan.io'],
  [CHAIN.ARBITRUM_TESTNET]: ['https://rinkeby-explorer.arbitrum.io/#/'],
  [CHAIN.OPTIMISTIC_MAINNET]: ['https://optimistic.etherscan.io'],
  [CHAIN.OPTIMISTIC_TESTNET]: ['https://kovan-optimistic.etherscan.io'],
  [CHAIN.BSC_MAINNET]: ['https://bscscan.com'],
  [CHAIN.BSC_TESTNET]: ['https://testnet.bscscan.com'],
  [CHAIN.POLYGON_MAINNET]: ['https://explorer.matic.network'],
  [CHAIN.POLYGON_TESTNET]: ['https://mumbai-explorer.matic.today'],
  [CHAIN.ASTAR_MAINNET]: ['https://astar.subscan.io'],
  [CHAIN.ASTAR_TESTNET]: ['https://shibuya.subscan.io'],
  [CHAIN.SHIDEN_MAINNET]: ['https://shiden.subscan.io'],
  [CHAIN.SHIDEN_TESTNET]: ['https://shibuya.subscan.io'],
  [CHAIN.AVALANCH_MAINNET]: ['https://cchain.explorer.avax.network'],
  [CHAIN.AVALANCH_TESTNET]: ['https://cchain.explorer.avax-test.network'],
  [CHAIN.FANTOM_MAINNET]: ['https://ftmscan.com'],
  [CHAIN.FANTOM_TESTNET]: ['https://testnet.ftmscan.com'],
  [CHAIN.THETA_MAINNET]: ['https://explorer.thetatoken.org'],
  [CHAIN.THETA_TESTNET]: ['https://testnet-explorer.thetatoken.org'],
};

export const CHAIN_INFORMATION = {
  chainNameShort,
  chainNameTitle,
  chainName,
  nativeCurrency,
  rpcUrls,
  blockExplorerUrls,
  logo,
};
