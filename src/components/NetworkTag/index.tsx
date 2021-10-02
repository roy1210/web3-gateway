import { Container } from './styled';

export function NetworkTag({
  chain,
  isActive,
  isMainnet,
  className,
  onClick,
}: {
  chain: string;
  isActive: boolean;
  isMainnet: boolean;
  className?: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <Container
      chain={chain}
      isMainnet={isMainnet}
      isActive={isActive}
      className={className}
      onClick={onClick}
    >
      {chain}
    </Container>
  );
}
