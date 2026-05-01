import { Bot, webhookCallback } from 'grammy';

let handler: ((req: Request) => Promise<Response>) | null = null;

function getHandler(): (req: Request) => Promise<Response> {
  if (handler) return handler;
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) throw new Error('TELEGRAM_BOT_TOKEN is missing');
  const bot = new Bot(token);
  bot.command('start', (ctx) => ctx.reply('totem-bot 가동 중. 명령어 추가 예정.'));
  handler = webhookCallback(bot, 'std/http', {
    secretToken: process.env.TELEGRAM_WEBHOOK_SECRET,
  });
  return handler;
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request): Promise<Response> {
  return getHandler()(req);
}
