import React, {
  useState, createContext, ReactNode, Dispatch, SetStateAction
} from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'
interface IAppCtx {
  ctx_Test: string
  setCtx_Test: Dispatch<SetStateAction<string>>
  isHide: Boolean
  setIsHide: Dispatch<SetStateAction<boolean>>
  theme: { colors?: any }
}

const DEFAULT_VALUE = {
  ctx_Test: 'DEFAULT_VALUE',
  setCtx_Test: () => {},
  isHide: false,
  setIsHide: () => {},
  theme: theme
}

export const AppCtx = createContext<IAppCtx>(DEFAULT_VALUE)

interface ICtxProvider {
  children?: ReactNode
}
export default function CtxProvider({ children }: ICtxProvider) {

  const [ctx_Test, setCtx_Test] = useState('Opa tá testado!')
  const [isHide, setIsHide] = useState(true)

  return (
    <>      
      <AppCtx.Provider value={{ 
        ctx_Test,
        setCtx_Test,
        isHide,
        setIsHide,
        theme
      }} >
        <ThemeProvider theme={theme}>
          { children }
        </ThemeProvider>
      </AppCtx.Provider>
    </>
  )
}