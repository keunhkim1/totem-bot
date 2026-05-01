import { Bot, webhookCallback } from 'grammy';
import { type CorpCls, type Disclosure, listDisclosures } from '@/lib/dart';

let handler: ((req: Request) => Promise<Response>) | null = null;

const CORP_CLS_LABEL: Record<CorpCls, string> = {
  Y: '유가',
  K: '코스닥',
  N: '코넥스',
  E: '기타',
};

function ymdDot(s: string): string {
  return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
}

function formatDisclosures(items: Disclosure[]): string {
  return items
    .map((it, i) => {
      const cls = CORP_CLS_LABEL[it.corp_cls] ?? it.corp_cls;
      const url = `https://dart.fss.or.kr/dsaf001/main.do?rcpNo=${it.rcept_no}`;
      return `${i + 1}. ${it.corp_name} [${cls}]\n   ${it.report_nm.trim()} (${ymdDot(it.rcept_dt)})\n   ${url}`;
    })
    .join('\n\n');
}

function getHandler(): (req: Request) => Promise<Response> {
  if (handler) return handler;
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) throw new Error('TELEGRAM_BOT_TOKEN is missing');
  const bot = new Bot(token);

  bot.command('start', (ctx) =>
    ctx.reply('totem-bot 가동 중.\n\n명령어:\n/recent — 최근 공시 5건'),
  );

  bot.command('recent', async (ctx) => {
    const apiKey = process.env.DART_API_KEY;
    if (!apiKey) {
      await ctx.reply('DART_API_KEY가 설정되지 않았습니다.');
      return;
    }
    const to = new Date();
    const from = new Date(to.getTime() - 7 * 24 * 60 * 60 * 1000);
    try {
      const items = await listDisclosures(apiKey, { from, to, pageCount: 5 });
      if (items.length === 0) {
        await ctx.reply('최근 7일 공시가 없습니다.');
        return;
      }
      await ctx.reply(formatDisclosures(items), {
        link_preview_options: { is_disabled: true },
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await ctx.reply(`조회 실패: ${msg}`);
    }
  });

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
