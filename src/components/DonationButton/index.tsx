import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Rodal from 'rodal';

import { Donation } from '../Donation';

import { ButtonDonation, Coffee, TextBlack, TextCoffee } from './styles';

export const DonationButton = () => {
  const [isDonation, setIsDonation] = useState<boolean>(false);

  const rodal = (
    <Rodal
      visible={isDonation}
      onClose={() => {
        setIsDonation(false);
      }}
      animation="door"
      closeOnEsc
      closeMaskOnClick={true}
      showCloseButton={false}
      duration={300}
      width={365}
      height={450}
    >
      <Donation />
    </Rodal>
  );

  return (
    <>
      {rodal}
      <ButtonDonation onClick={() => setIsDonation(true)}>
        <Coffee>
          <TextBlack>
            <FormattedMessage id="donation.buy-me-a" />
          </TextBlack>
          <TextCoffee variant="title-xs">☕️</TextCoffee>
          <TextBlack>?</TextBlack>
        </Coffee>
      </ButtonDonation>
    </>
  );
};
