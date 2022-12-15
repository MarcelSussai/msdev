import React, {
  useState, createContext, ReactNode, Dispatch, SetStateAction
} from 'react'

interface IAppCtx {
  
}

const DEFAULT_VALUE = {
  
}

export const AppCtx = createContext<IAppCtx>(DEFAULT_VALUE)

interface ICtxProvider {
  children?: ReactNode
}
export default function CtxProvider({ children }: ICtxProvider) {

  

  return (
    <>      
      <AppCtx.Provider value={{ 
        
      }} >
          { children }
      </AppCtx.Provider>
    </>
  )
}