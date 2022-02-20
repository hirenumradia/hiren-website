import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
                <link href='https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,400;1,600;1,700&display=swap' rel="stylesheet" crossOrigin="anonymous"></link>
            </Head>
            <body>
                <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}