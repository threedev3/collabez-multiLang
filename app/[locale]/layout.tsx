import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { ThemeProvider } from "../provider";
import Image from "next/image";
import { LocaleProvider } from "@/context/LocaleContext";

export const metadata: Metadata = {
  title: "CollabEZ- Let's Create Extraordinary",
  description:
    "CollabEZ - Leading web & mobile app development company in GCC. Specializing in WordPress, Shopify, custom development & ecommerce solutions across UAE, KSA, Qatar, Oman & Bahrain.",
};

const satoshiRegular = localFont({
  src: "../fonts/Satoshi-Regular.otf",
  variable: "--font-satoshi",
  weight: "100 900",
});
const satoshiBold = localFont({
  src: "../fonts/Satoshi-Regular.otf",
  variable: "--font-satoshi-bold",
  weight: "100 900",
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;
  const hubspotId = process.env.NEXT_PUBLIC_HUBSPOT_ID;

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />

        <link rel="preload" href="/heroBg.png" as="image" />
        <link rel="preload" href="/logo.png" as="image" />
        {gaId && (
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
        )}
        {gaId && (
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `,
            }}
          />
        )}
        {pixelId && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `,
            }}
          />
        )}

        {pixelId && (
          <noscript>
            <Image
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        {hotjarId && (
          <Script
            id="hotjar-tracking"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${hotjarId},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
            }}
          />
        )}

        {hubspotId && (
          <Script
            id="hubspot-tracking"
            strategy="afterInteractive"
            src={`//js-eu1.hs-scripts.com/${hubspotId}.js`}
            async
            defer
          />
        )}
      </head>
      <body className={`${satoshiRegular.variable} ${satoshiBold.variable}`}>
        <LocaleProvider locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
