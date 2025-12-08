import { registerAs } from '@nestjs/config';

export default registerAs('trello', () => ({
  apiKey: process.env.TRELLO_API_KEY,
  token: process.env.TRELLO_TOKEN,
  boardId: process.env.TRELLO_BOARD_ID,
  webhookUrl: process.env.TRELLO_WEBHOOK_URL,
}));