import CtxProvider from '../src/contexts/ctxGlobal'
import GlobalStyle from '../src/styles/GlobalStyle'
import Head from './../src/components/head'




export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head title="MS dev web fullStack" />
      <GlobalStyle />
      <CtxProvider>
        <Component {...pageProps} />
      </CtxProvider>
    </>
  )
}
