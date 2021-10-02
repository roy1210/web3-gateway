import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { logger } from '../../logger';

import { actionSetAddress } from './reducer';

export const useSetAccount = () => {
  const dispatch = useDispatch();
  const getData = useCallback(async () => {
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        const provider = window.ethereum;
        const addresses = await provider.request({ method: 'eth_requestAccounts' });
        const address = addresses[0];
        dispatch(actionSetAddress({ address }));
        provider.on('accountsChanged', async (it: string[]) => {
          await provider.request({ method: 'eth_requestAccounts' });
          const address = it[0];
          dispatch(actionSetAddress({ address }));
        });
      }
    } catch (error) {
      logger.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);
};
