import { useContext } from 'react'
import * as S from './style'
import { HeaderCtx } from '../../../contexts/ctxHeader'
import TestScrollComponent from '../../ui/utils/testScrollComponent'


export default () => {

  const {isMenuOpen} = useContext(HeaderCtx)
  
  return (
  <S.Nav isOpen={isMenuOpen}>
    <S.ContainerAll isOpen={isMenuOpen} />
    <S.GlassBehind isOpen={isMenuOpen} />
    <S.ContainerLinksMenu isOpen={isMenuOpen}>
      <TestScrollComponent />
      <TestScrollComponent />
      <TestScrollComponent />
    </S.ContainerLinksMenu>
  </S.Nav>
)}