import { useContext } from 'react'
import * as S from './style'
import { HeaderCtx } from '../../../contexts/ctxHeader'


export default () => {

  const {isMenuOpen} = useContext(HeaderCtx)
  
  return (
  <S.Nav isOpen={isMenuOpen}>
    <S.ContainerAll isOpen={isMenuOpen} />
    <S.GlassBehind isOpen={isMenuOpen} />
    <S.ContainerLinksMenu isOpen={isMenuOpen}>
      teste teste teste teste teste teste teste teste
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      teste teste teste teste teste teste teste teste
    </S.ContainerLinksMenu>
  </S.Nav>
)}