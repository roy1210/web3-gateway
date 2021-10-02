import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import useCopy from '@react-hook/copy';
import { createToast } from 'comet-ui-kit';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

import { sendBot } from '../../../modules/telegram';
import { isDev } from '../../../modules/env';
import { logger } from '../../../modules/logger';

import {
  DonationDetailsContainer,
  ColumnQrCode,
  RowAddress,
  TextBlack,
  IconCopy,
  Row,
} from './styles';

export const DonationDetails = ({
  address,
  walletFormat,
  qrColor,
}: {
  address: string;
  walletFormat: string;
  qrColor: string;
}) => {
  const { copy } = useCopy(address);
  const copyAddress = async () => {
    copy();
    createToast({
      content: <FormattedMessage id="donation.toast-thank-you" />,
      type: 'success',
      toastId: address,
      autoClose: true,
    });
    if (!isDev) {
      try {
        const { data } = await axios.get<{ country_name: string }>(
          'https://geolocation-db.com/json/',
        );
        const message = `⚡️ Someone from ${data.country_name} copied ${walletFormat} address for donation!
        `;
        await sendBot(message);
      } catch (error) {
        logger.error(error);
      }
    }
  };
  return (
    <DonationDetailsContainer>
      <ColumnQrCode
        onClick={() => {
          (async () => {
            await copyAddress();
          })();
        }}
      >
        <QRCode
          size={140}
          value={address}
          bgColor="black"
          eyeRadius={1}
          fgColor={qrColor}
          qrStyle="dots"
        />
      </ColumnQrCode>
      <RowAddress>
        <Row>
          <TextBlack variant="normal">
            <FormattedMessage id="donation.address-format" values={{ value: walletFormat }} />
          </TextBlack>
          <IconCopy
            onClick={() => {
              (async () => {
                await copyAddress();
              })();
            }}
          />
        </Row>
        <TextBlack variant="label">{address}</TextBlack>
      </RowAddress>
    </DonationDetailsContainer>
  );
};
