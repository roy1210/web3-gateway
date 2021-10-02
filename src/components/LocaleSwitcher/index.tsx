import React, { useMemo } from 'react';
import { Dropdown } from 'comet-ui-kit';

import { getLanguageName } from './getLanguageName';
import { CustomDropDown, Container } from './styled';

type Props = { locale: string; locales: string[]; onChange?: (locale: string) => void };

export const LocaleSwitcher = ({ locale, locales: localesParam, onChange }: Props) => {
  const locales = useMemo(
    () =>
      [...localesParam].sort((a, b) => {
        if (a === 'en') return -1;
        if (b === 'en') return 1;
        return getLanguageName(a).localeCompare(getLanguageName(b));
      }),
    [localesParam],
  );

  return (
    <Container>
      <CustomDropDown
        target={
          <Dropdown.DefaultTarget size="city">{getLanguageName(locale)}</Dropdown.DefaultTarget>
        }
      >
        {locales.map((it) => (
          <Dropdown.Item selected={locale === it} onClick={() => onChange?.(it)} key={it}>
            {getLanguageName(it)}
          </Dropdown.Item>
        ))}
      </CustomDropDown>
    </Container>
  );
};
