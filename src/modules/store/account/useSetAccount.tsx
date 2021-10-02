import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { logger } from '../../logger';

import { actionSetAddress } from './reducer';

export const useSetAccount = () => {
  const dispatch = useDispatch();
  const getData = useCallback(async () => {
    try {
      if (typeof window !== 'undefined') {
        const provider = window.ethereum;
        // Memo: Required in production
        const addresses = await provider.enable();
        const address = addresses[0];
        dispatch(actionSetAddress({ address }));
        provider.on('accountsChanged', async (it: string[]) => {
          await provider.enable();
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
