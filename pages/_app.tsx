import type { AppProps } from 'next/app'
import "../styles/global.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <>
            <Head>
                <title>Top App</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp