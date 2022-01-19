import { createToast, Text } from 'comet-ui-kit';
import Image from 'next/image';
import React, { useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import { NetworkTag } from '../../../../components/NetworkTag';
import { useWalletHandler } from '../../../hooks';
import { logger } from '../../../logger';
import { getChainData, metamaskRes, setupNetwork } from '../../../network';
import { Atag, ButtonScale } from '../../Common';

import {
  Bottom,
  ChainCardContainer,
  ColumnUrl,
  Container,
  Information,
  Left,
  Network,
  Right,
  Row,
  ColumnNetworkTags,
  RowUrl,
  Top,
  RowNetwork,
  WalletBal,
} from './styled';

export const ChainCard = ({
  mainnetId,
  testnetId,
  tag,
}: {
  mainnetId: string;
  testnetId: string;
  tag: { mainnet: string; testnet: string };
}) => {
  const [activeNetwork, setActiveNetwork] = useState<'mainnet' | 'testnet'>('mainnet');
  const mainnet = getChainData(mainnetId);
  const testnet = getChainData(testnetId);
  const network = activeNetwork === 'mainnet' ? mainnet : testnet;
  const networkId = activeNetwork === 'mainnet' ? mainnetId : testnetId;
  const explorer = network.blockExplorerUrls[0];
  const rpc = network.rpcUrls[0];
  const logo = network.logo;

  const { bal } = useWalletHandler(rpc);

  const infos = [
    {
      key: <FormattedMessage id="card.network" />,
      value: network.chainNameShort,
    },
    {
      key: <FormattedMessage id="card.chain-id" />,
      value: networkId,
    },
    {
      key: <FormattedMessage id="card.coin-symbol" />,
      value: network.nativeCurrency.name,
    },
  ];

  return (
    <ChainCardContainer>
      <Container>
        <RowNetwork>
          <WalletBal>
            <Text variant="label">
              <FormattedMessage id="card.bal" />
            </Text>
            <Text variant="label">
              <FormattedNumber value={bal} maximumFractionDigits={2} />
              &nbsp;
              {network.nativeCurrency.name}
            </Text>
          </WalletBal>
          <ColumnNetworkTags>
            <NetworkTag
              chain={tag.mainnet}
              isActive={activeNetwork === 'mainnet'}
              isMainnet={true}
              onClick={() => setActiveNetwork('mainnet')}
            />
            <NetworkTag
              chain={tag.testnet}
              isActive={activeNetwork === 'testnet'}
              isMainnet={false}
              onClick={() => setActiveNetwork('testnet')}
            />
          </ColumnNetworkTags>
        </RowNetwork>
        <Top>
          <Left>
            <Image src={logo} width={70} height={70} alt={network.chainNameShort} />
          </Left>
          <Network>
            <h3>{network.chainNameTitle}</h3>
          </Network>
        </Top>
        <Information>
          {infos.map((info) => (
            <Row key={info.value}>
              <Left>
                <Text variant="normal">{info.key}</Text>
              </Left>
              <Right>
                <Text variant="accent">{info.value}</Text>
              </Right>
            </Row>
          ))}
          <Row>
            <Left>
              <Text variant="normal">
                <FormattedMessage id="card.block-explorer" />
              </Text>
            </Left>
            <Right>
              <ColumnUrl>
                <Atag href={explorer} rel="noopener noreferrer" target="_blank">
                  <Text variant="menu">{explorer}</Text>
                </Atag>
              </ColumnUrl>
            </Right>
          </Row>
          <RowUrl>
            <Left>
              <Text variant="normal">
                <FormattedMessage id="card.rpc" />
              </Text>
            </Left>
            <Right>
              <ColumnUrl>
                <Text variant="menu">{rpc}</Text>
              </ColumnUrl>
            </Right>
          </RowUrl>
        </Information>
        <Bottom>
          <ButtonScale
            variant="tertiary"
            size="city"
            shape="fit"
            onClick={() => {
              (async () => {
                try {
                  const result = await setupNetwork(networkId);

                  if (result === metamaskRes.alreadyConnected) {
                    createToast({
                      content: <FormattedMessage id="toast.metamask-is-selected-same-network" />,
                      type: 'info',
                      toastId: `Metamask-has-connected-selected-network-${networkId}`,
                      autoClose: true,
                    });
                  }

                  if (result === metamaskRes.undefined) {
                    createToast({
                      content: <FormattedMessage id="toast.metamask-undefined" />,
                      type: 'danger',
                      toastId: `Metamask-is-not-connected-${networkId}`,
                      autoClose: true,
                    });
                  }
                  if (!result) {
                    createToast({
                      content: <FormattedMessage id="toast.failed-connection" />,
                      type: 'danger',
                      toastId: `Failed-connection-${networkId}`,
                      autoClose: true,
                    });
                  }
                } catch (error) {
                  logger.error(error);
                }
              })();
            }}
          >
            <FormattedMessage id="card.add-to-metamask" />
          </ButtonScale>
        </Bottom>
      </Container>
    </ChainCardContainer>
  );
};
