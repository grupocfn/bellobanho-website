import Router from 'next/router';
import { useState, useEffect } from 'react';
import '../styles/globals.scss'
import 'mapbox-gl/dist/mapbox-gl.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps}/>
  );
}

export default MyApp
