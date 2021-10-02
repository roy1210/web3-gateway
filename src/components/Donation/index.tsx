import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import iconBnb from '../../../public/icons/binance-smart-chain.svg';
import iconBtc from '../../../public/icons/btc.svg';
import iconDot from '../../../public/icons/dot.svg';
import iconEth from '../../../public/icons/eth.svg';
import iconLightining from '../../../public/icons/lightning.svg';
import iconMatic from '../../../public/icons/polygon.svg';
import iconSdn from '../../../public/icons/shiden.svg';
import iconDoge from '../../../public/icons/doge.svg';
import { DONATION_ADDRESS } from '../../modules/env';

import { DonationDetails } from './DonationDetails';
import { ColumnLightning, DonationContainer, RowTitle, TextBlack } from './styles';

export const Donation = () => {
  const iconWidth = 20;
  const iconHeight = 20;
  return (
    <DonationContainer>
      <RowTitle>
        <TextBlack variant="title-xs">
          <FormattedMessage id="donation.thank-you" />
        </TextBlack>
      </RowTitle>
      <Tabs>
        <TabList>
          <Tab>
            <Image src={iconBtc} width={iconWidth} height={iconHeight} alt={'btc'} />
          </Tab>
          <Tab>
            <ColumnLightning>
              <Image
                src={iconLightining}
                width={iconWidth * 2}
                height={iconHeight}
                alt={'lightning'}
              />
            </ColumnLightning>
          </Tab>
          <Tab>
            <Image src={iconDoge} width={iconWidth} height={iconHeight} alt={'doge'} />
          </Tab>
          <Tab>
            <Image src={iconDot} width={iconWidth} height={iconHeight} alt={'dot'} />
          </Tab>
          <Tab>
            <Image src={iconSdn} width={iconWidth} height={iconHeight} alt={'sdn'} />
          </Tab>
          <Tab>
            <div>
              <Image src={iconEth} width={iconWidth} height={iconHeight} alt={'eth'} />
              <Image src={iconMatic} width={iconWidth} height={iconHeight} alt={'matic'} />
              <Image src={iconBnb} width={iconWidth} height={iconHeight} alt={'bnb'} />
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <DonationDetails address={DONATION_ADDRESS.BTC} walletFormat="BTC" qrColor="#F7931A" />
        </TabPanel>
        <TabPanel>
          <TextBlack>Under Construction</TextBlack>
        </TabPanel>
        <TabPanel>
          <DonationDetails address={DONATION_ADDRESS.DOGE} walletFormat="DOGE" qrColor="#e1b303" />
        </TabPanel>
        <TabPanel>
          <DonationDetails address={DONATION_ADDRESS.DOT} walletFormat="DOT" qrColor="#E6007A" />
        </TabPanel>
        <TabPanel>
          <DonationDetails address={DONATION_ADDRESS.SDN} walletFormat="SDN" qrColor="#a370ff" />
        </TabPanel>
        <TabPanel>
          <DonationDetails
            address={DONATION_ADDRESS.ERC20}
            walletFormat="ERC20/BEP20"
            qrColor="#ecf0f1"
          />
        </TabPanel>
      </Tabs>
    </DonationContainer>
  );
};
