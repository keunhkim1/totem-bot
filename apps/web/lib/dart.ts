const BASE = 'https://opendart.fss.or.kr/api';

export type CorpCls = 'Y' | 'K' | 'N' | 'E';

export interface Disclosure {
  corp_code: string;
  corp_name: string;
  stock_code: string;
  corp_cls: CorpCls;
  report_nm: string;
  rcept_no: string;
  flr_nm: string;
  rcept_dt: string;
  rm: string;
}

interface ListResponse {
  status: string;
  message: string;
  list?: Disclosure[];
}

export interface ListOptions {
  from: Date;
  to: Date;
  pageCount?: number;
}

export async function listDisclosures(apiKey: string, options: ListOptions): Promise<Disclosure[]> {
  const params = new URLSearchParams({
    crtfc_key: apiKey,
    bgn_de: ymd(options.from),
    end_de: ymd(options.to),
    page_no: '1',
    page_count: String(options.pageCount ?? 10),
  });
  const res = await fetch(`${BASE}/list.json?${params}`);
  if (!res.ok) throw new Error(`DART list.json HTTP ${res.status}`);
  const data = (await res.json()) as ListResponse;
  if (data.status !== '000') throw new Error(`DART error ${data.status}: ${data.message}`);
  return data.list ?? [];
}

function ymd(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}${m}${day}`;
}
