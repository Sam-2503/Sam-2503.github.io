import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Playfight | Independent Creative, Story & Production Studio',
  description: 'Founder-led creative, story, and production studio fighting for authenticity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-wf-domain="www.letsplayfight.com" data-wf-page="697fef4d1b1e73b328ad49be" data-wf-site="697fef4d1b1e73b328ad49cd">
      <head>
        <link href="/css/playfight.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
      </head>
      <body data-page="home" className="u-theme-light">
        {children}
        {/* Polyfill Webflow's push queue so the WebGL script initializes without needing Webflow's core JS */}
        <Script id="webflow-polyfill" strategy="beforeInteractive">
          {`
            window.Webflow = window.Webflow || [];
            const originalPush = window.Webflow.push.bind(window.Webflow);
            window.Webflow.push = function(fn) {
              originalPush(fn);
              if (typeof fn === 'function') fn();
            };
          `}
        </Script>
        {/* Load the local WebGL and visual effects script */}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
