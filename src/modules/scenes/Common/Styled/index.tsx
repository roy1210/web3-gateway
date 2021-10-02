import { Button, Icon, Text } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants } from '../../../styles';

interface LoadingProps {
  isLoading: boolean;
}

const { media } = StylingConstants;

export const IconInfo = styled(Icon.InfoCircle)`
  font-size: ${({ theme }) => rem(theme.comet.size.house)};
  color: ${({ theme }) => theme.comet.color.text.masked};
  cursor: pointer;
`;

export const Atag = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const IconArrowLeft = styled(Icon.ArrowLeft)`
  font-size: ${({ theme }) => rem(theme.comet.size.house)};
  cursor: pointer;
`;

export const LineBox = styled.div<LoadingProps>`
  opacity: ${(props) => props.isLoading && 0.1};
  transition: all 1s ease 0s;
`;

export const TextPrimary = styled(Text)`
  color: ${({ theme }) => theme.comet.color.primary.normal};
`;

export const TextSecondary = styled(Text)`
  color: ${({ theme }) => theme.comet.color.secondary.normal};
`;

export const TextDanger = styled(Text)`
  color: ${({ theme }) => theme.comet.color.danger.normal};
`;

export const TextBlock = styled(Text)`
  display: block;
`;

export const TextRoom = styled(Text)`
  font-size: ${({ theme }) => rem(theme.comet.size.room)};
`;

export const TextEllipsis = styled(TextBlock)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SizeS = styled.div`
  display: none;
  @media (min-width: ${rem(media.sm)}) {
    display: block;
  }
`;

export const SizeM = styled.div`
  display: none;
  @media (min-width: ${rem(media.md)}) {
    display: block;
  }
`;

export const SizeL = styled.div`
  display: none;
  @media (min-width: ${rem(media.lg)}) {
    display: block;
  }
`;

export const ButtonScale = styled(Button)`
  transition: all 0.3s ease 0s;
  :hover {
    transition: all 0.3s ease 0s;
    transform: scale(1.05);
  }
`;

export const IconBack = styled(IconArrowLeft)`
  align-self: flex-start;
`;

export const TextEstimated = styled(Text)`
  border-bottom: 1px solid ${({ theme }) => theme.comet.color.text.placeholder};
  cursor: pointer;
`;

export const TextChosenFilter = styled(Text)`
  padding-right: ${({ theme }) => rem(theme.comet.size.box)};
`;

export const AddressLinkP = styled.p`
  color: #3799da;
  font-weight: bold;
  font-size: ${({ theme }) => rem(theme.comet.size.room)};
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;
