export const isDev = process.env.NODE_ENV !== 'production';

export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || (isDev ? 'trace' : 'debug');

export const DEPLOYED_URL = 'https://web3-gateway.pow.codes';

export const GITHUB_REPO_URL = 'https://github.com/roy1210/web3-gateway';

export const GA_TAG = process.env.NEXT_PUBLIC_GA_TAG;

export const DONATION_ADDRESS = {
  BTC: process.env.NEXT_PUBLIC_BTC_ADDRESS,
  ERC20: process.env.NEXT_PUBLIC_ERC20_ADDRESS,
  DOT: process.env.NEXT_PUBLIC_DOT_ADDRESS,
  SDN: process.env.NEXT_PUBLIC_SDN_ADDRESS,
  DOGE: process.env.NEXT_PUBLIC_DOGE_ADDRESS,
};

// Memo: Telegram bot
export const BOT_API = process.env.NEXT_PUBLIC_BOT_API;
export const CHAT_ID = Number(process.env.NEXT_PUBLIC_CHAT_ID);
