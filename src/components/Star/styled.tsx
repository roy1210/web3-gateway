import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rem } from 'polished';

export const StyledStar = styled(motion.div)`
  position: absolute;
  top: 0;
  height: ${({ theme }) => rem(theme.comet.size.box)};
  width: ${({ theme }) => rem(theme.comet.size.box)};
  border-radius: 50%;
  background: white;
  z-index: -10;
`;
