import { Suspense } from "react";
import "./globals.css";
export const fetchCache = 'force-no-store';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
