import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gruezh AG",
  description: "Sanitär / Heizung / Planung",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
                    {/* Load Google Analytics script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BTY18TPN5B"
          strategy="afterInteractive"
          async
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-BTY18TPN5B');
          `}
        </Script>
        {/* Google Tag Manager - Static script part */}
        <Script id="gtagscript" dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NH3RKG42');`
          }}>
        </Script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
