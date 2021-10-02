import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Web3 from 'web3';

import { logger } from '../../logger';

export const useWalletHandler = (rpc: string) => {
  const [bal, setBal] = useState<number>(0);
  const address = useSelector((state) => state.account.address);

  const updateBalance = useCallback(async (address: string, rpc: string) => {
    try {
      const web3 = new Web3(rpc);
      const rawBal = await web3.eth.getBalance(address);
      const balance = Number(web3.utils.fromWei(rawBal));
      setBal(balance);
    } catch (error) {
      logger.error(error);
      setBal(0);
    }
  }, []);

  useEffect(() => {
    if (address) {
      updateBalance(address, rpc);
    }
  }, [address, updateBalance, rpc]);

  return useMemo(() => ({ bal, address }), [address, bal]);
};
