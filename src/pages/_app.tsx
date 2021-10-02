import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider as ReduxProvider } from 'react-redux';

import { SEO } from '../modules/seo';
import { Globals } from '../components/Globals';
import { languages } from '../modules/i18n';
import { useStore } from '../modules/store';
import 'rodal/lib/rodal.css'; // eslint-disable-line
import '../../styles/globals.css'; // eslint-disable-line
import 'react-tabs/style/react-tabs.css'; // eslint-disable-line

const DEFAULT_LOCALE = 'en';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const store = useStore();

  const locale = useMemo(() => {
    if (Object.keys(languages).includes(router.locale)) {
      return router.locale;
    }

    return DEFAULT_LOCALE;
  }, [router.locale]);

  const messages = useMemo(
    () => ({ ...languages[DEFAULT_LOCALE], ...languages[locale] }),
    [locale],
  );

  return (
    <>
      <SEO />
      <IntlProvider messages={messages} locale={locale} defaultLocale={DEFAULT_LOCALE}>
        <ReduxProvider store={store}>
          <Globals>
            <Component {...pageProps} />
          </Globals>
        </ReduxProvider>
      </IntlProvider>
    </>
  );
}

export default MyApp;
