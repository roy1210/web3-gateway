import { BOT_API, CHAT_ID } from '../env';

export const sendBot = async (text: string) => {
  const BOT_URL = `https://api.telegram.org/bot${BOT_API}/sendMessage`;

  const headers = {
    'Content-Type': 'application/json',
  };

  const chat_id = CHAT_ID;
  const body = JSON.stringify({
    chat_id,
    text,
  });

  try {
    await fetch(BOT_URL, {
      method: 'POST',
      body,
      headers,
    });
    return;
  } catch (error) {
    console.log(error);
  }
};
