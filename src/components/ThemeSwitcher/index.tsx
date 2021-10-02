import React, { useCallback } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

type Theme = 'auto' | 'light' | 'dark';

type Props = { theme: Theme; onChange?: (theme: Theme) => void };

export const ThemeSwitcher = ({ theme, onChange }: Props) => {
  const change = useCallback(() => {
    onChange?.(theme === 'light' ? 'dark' : 'light');
  }, [theme, onChange]);

  return <DarkModeSwitch checked={theme === 'dark'} onChange={change} size={24} />;
};
