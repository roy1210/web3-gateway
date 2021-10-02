import { Dropdown } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  /* Avoid Bug: can't transparent color after theme change */
  button {
    background: transparent;
  }
`;

export const CustomDropDown = styled(Dropdown)`
  padding-left: ${({ theme }) => rem(theme.comet.size.box)};
  padding-right: ${({ theme }) => rem(theme.comet.size.box)};
`;
