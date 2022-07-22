import { ThemeProvider } from 'styled-components'
import CtxProvider from '../src/contexts/ctxGlobal'
import GlobalStyle from '../src/styles/globalStyle'
import theme from '../src/styles/theme'
import Head from './../src/components/head'




export default function App({ Component, pageProps }) {
  return (
    <>
      <Head title="MS dev web fullStack" />
      <GlobalStyle />
      <CtxProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CtxProvider>
    </>
  )
}
