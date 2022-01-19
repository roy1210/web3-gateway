import { CHAIN_INFORMATION, metamaskRes } from '..';

export const getChainData = (chainId: string) => {
  const {
    chainName,
    chainNameTitle,
    chainNameShort,
    nativeCurrency,
    rpcUrls,
    blockExplorerUrls,
    logo,
  } = CHAIN_INFORMATION;

  return {
    chainName: chainName[chainId],
    nativeCurrency: nativeCurrency[chainId],
    rpcUrls: rpcUrls[chainId],
    blockExplorerUrls: blockExplorerUrls[chainId],
    logo: logo[chainId],
    chainNameTitle: chainNameTitle[chainId],
    chainNameShort: chainNameShort[chainId],
  };
};

export const setupNetwork = async (network: string): Promise<boolean | string> => {
  const provider = typeof window !== 'undefined' && window.ethereum;

  if (provider) {
    const chain = parseInt(network, 10);
    const chainId = `0x${chain.toString(16)}`;
    const { chainName, nativeCurrency, rpcUrls, blockExplorerUrls } = getChainData(network);
    try {
      const connectedId = await provider.request({ method: 'eth_chainId' });
      if (connectedId === chainId) {
        return metamaskRes.alreadyConnected;
      }

      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId,
            chainName,
            nativeCurrency,
            rpcUrls,
            blockExplorerUrls,
          },
        ],
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error(metamaskRes.undefined);
    return metamaskRes.undefined;
  }
};

// const timeout = async (mSec: number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(false);
//     }, mSec);
//   });
// };

// Timeout example
// export const setupNetwork = (network: string) => {
//   return Promise.race([timeout(15 * 1000), setupNetworkConfig(network)]);
// };
