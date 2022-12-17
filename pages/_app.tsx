import CtxProvider from '../src/contexts/ctxGlobal'
import GlobalStyle from '../src/styles/GlobalStyle'




export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <CtxProvider>
        <Component {...pageProps} />
      </CtxProvider>
    </>
  )
}
