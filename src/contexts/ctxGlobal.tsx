import React, { useState, createContext } from 'react'

const texts = {
  txt0001: 'Texto 0001',
  txt0002: 'Texto 0002',
  txt0003: 'Texto 0003',
  txt0004: 'Texto 0004',
}
interface PropsAppCtx {
  ctx_Test: string
  setCtx_Test: React.Dispatch<React.SetStateAction<string>>
  texts: any
}

const DEFAULT_VALUE = {
  ctx_Test: 'DEFAULT_VALUE',
  setCtx_Test: () => {},
  texts: {}
}

export const AppCtx = createContext<PropsAppCtx>(DEFAULT_VALUE)

export default function CtxProvider({ children }) {

  const [ctx_Test, setCtx_Test] = useState('Opa tá testado!')

  return (
    <>      
      <AppCtx.Provider value={{ 
        ctx_Test, setCtx_Test, texts
      }} >
        { children }
      </AppCtx.Provider>
    </>
  )
}