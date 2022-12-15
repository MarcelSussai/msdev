import React, {
  useState, createContext, ReactNode, Dispatch, SetStateAction
} from 'react'

interface IAppCtx {
  isMenuOpen: boolean
  handleToggleMenuOpen: () => void
}

const DEFAULT_VALUE = {
  isMenuOpen: false,
  handleToggleMenuOpen: () => {}
}

export const HeaderCtx = createContext<IAppCtx>(DEFAULT_VALUE)

interface ICtxProvider {
  children?: ReactNode
}
export default function CtxHeaderProvider({ children }: ICtxProvider) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleToggleMenuOpen = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>      
      <HeaderCtx.Provider value={{
        isMenuOpen, handleToggleMenuOpen
      }} >
          { children }
      </HeaderCtx.Provider>
    </>
  )
}