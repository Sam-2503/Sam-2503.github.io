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
        <link href="https://cdn.prod.website-files.com/697fef4d1b1e73b328ad49cd/css/playfight-staging.webflow.shared.bb9cccddf.min.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
      </head>
      <body data-page="home" className="u-theme-light">
        {children}
        {/* Load the original WebGL and visual effects script */}
        <Script src="https://playfight-2k26.vercel.app/main.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
