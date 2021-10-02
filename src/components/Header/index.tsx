import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';

import { useThemeSettings } from '../../modules/store/settings';
import { DonationButton } from '../DonationButton';
import { LocaleSwitcher } from '../LocaleSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher';

import { HeaderContainer, Right } from './styles';

export const Header = () => {
  const { push, asPath, locales } = useRouter();
  const { locale } = useIntl();
  const [theme, setTheme] = useThemeSettings();
  const changeLocale = useCallback(
    (locale: string) => push(asPath, null, { locale }),
    [push, asPath],
  );

  const left = <></>;

  const right = (
    <>
      <Right>
        <DonationButton />
        <ThemeSwitcher theme={theme as any} onChange={setTheme} />
        <LocaleSwitcher locale={locale} locales={locales} onChange={changeLocale} />
      </Right>
    </>
  );

  return (
    <HeaderContainer>
      {left}
      {right}
    </HeaderContainer>
  );
};
