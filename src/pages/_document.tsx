import { AppProvider } from '@/context/appProvider'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <AppProvider>
          <Main />
          <NextScript />
        </AppProvider>
      </body>
    </Html>
  )
}
