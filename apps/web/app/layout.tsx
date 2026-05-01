import type { ReactNode } from 'react';

export const metadata = {
  title: 'totem-bot',
  description: 'DART 공시 텔레그램 봇',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
