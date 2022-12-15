import React, {
  useState, createContext, ReactNode, Dispatch, SetStateAction
} from 'react'

interface IModeloCtx {
  
}

const DEFAULT_VALUE = {
  
}

export const ModeloCtx = createContext<IModeloCtx>(DEFAULT_VALUE)

interface ICtxModeloProvider {
  children?: ReactNode
}
export default function CtxModeloProvider({ children }: ICtxModeloProvider) {

  

  return (
    <>      
      <ModeloCtx.Provider value={{ 
        
      }} >
          { children }
      </ModeloCtx.Provider>
    </>
  )
}