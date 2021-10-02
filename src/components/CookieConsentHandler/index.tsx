import Head from 'next/head';
import { rem } from 'polished';
import React, { useCallback, useEffect, useState } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { FormattedMessage, useIntl } from 'react-intl';
import { useTheme } from 'styled-components';

import { GA_TAG } from '../../modules/env';

const ANALYTICS_ID = GA_TAG;
const ANALYTICS_STORAGE_KEY = 'ANALYTICS_CONSENT';

export const CookieConsentHandler = () => {
  const theme = useTheme();
  const { formatMessage } = useIntl();
  const [cookiePermission, setCookiePermission] = useState(false);
  const handleCookieAccept = useCallback(() => {
    setCookiePermission(true);
  }, []);

  useEffect(() => {
    const storedPermission = Cookies.get(ANALYTICS_STORAGE_KEY);
    setCookiePermission(storedPermission === 'true');
  }, [setCookiePermission]);

  return (
    <>
      <Head>
        {cookiePermission && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ANALYTICS_ID}');
                `,
              }}
            />
          </>
        )}
      </Head>

      {!cookiePermission && (
        <CookieConsent
          location="bottom"
          cookieName={ANALYTICS_STORAGE_KEY}
          buttonText={formatMessage({ id: 'common.cookies.continue' })}
          style={{
            background: theme.comet.color.bg.transparent,
            color: theme.comet.color.text.normal,
          }}
          buttonStyle={{
            color: theme.comet.color.text.normal,
            fontSize: rem(theme.comet.size.room),
            background: theme.comet.color.primary.normal,
            borderRadius: '0.75em',
            paddingLeft: rem(theme.comet.size.closet),
            paddingRight: rem(theme.comet.size.closet),
            paddingTop: rem(theme.comet.size.drawer),
            paddingBottom: rem(theme.comet.size.drawer),
          }}
          expires={150}
          onAccept={handleCookieAccept}
          debug={true}
        >
          <FormattedMessage id="common.cookies" />
        </CookieConsent>
      )}
    </>
  );
};
