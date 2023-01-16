import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProvideTheme } from '../utils/ThemeProvider'
import { useState, useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <ProvideTheme>
      {isMounted &&
        <Component {...pageProps} />
      }
    </ProvideTheme>
  )
}

export default MyApp
