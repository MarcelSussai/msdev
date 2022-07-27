import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { AppCtx } from '../../contexts/ctxGlobal'
import { Main } from './../../styles/mainStyled'
import Head from './../head'
import Header from './../header'


const MainDefaultLayout = (props: any) => {

  const {
    children,
    title,
    pageIndexActive
  } = props

  const context = useContext(AppCtx)
  const {isHide, setIsHide} = context


  useEffect(() => {
    const haveItem = localStorage.getItem('isHide') === 'true'
    if(matchMedia('(max-width: 600px)').matches) {
      const tmo = setTimeout(() => {
        setIsHide(true)
        haveItem ? setIsHide(true) : setIsHide(false);
      }, 8000)
      return () => clearTimeout(tmo)
    } else {
      haveItem ? setIsHide(true) : setIsHide(false);
    }
  })



  return (
    <>
      <Head title={title} />
      <Header isHide={isHide} setIsHide={setIsHide} pageIndexActive={pageIndexActive} />
      <Main className={isHide ? 'hide' : ''}>
        {children}
      </Main>
    </>
  )
}

export default MainDefaultLayout