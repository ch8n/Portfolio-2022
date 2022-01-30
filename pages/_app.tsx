import React from 'react'
import { AppProps } from 'next/app'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/index.css'

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return  <Component {...pageProps} />
}

export default MyApp