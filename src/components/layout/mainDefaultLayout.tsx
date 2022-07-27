import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { AppCtx } from '../../contexts/ctxGlobal'
import { Main } from './../../styles/mainStyled'
import Head from './../head'


const MainDefaultLayout = (props: any) => {

  const {
    children,
    title,
  } = props

  const context = useContext(AppCtx)
  const {isHide, setIsHide} = context


  useEffect(() => {
    
  })



  return (
    <>
      <Head title={title} />
      <Main className={isHide ? 'hide' : ''}>
        {children}
      </Main>
    </>
  )
}

export default MainDefaultLayout