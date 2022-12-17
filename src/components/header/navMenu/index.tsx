import { useContext } from 'react'
import Link from 'next/link'
import * as S from './style'
import { HeaderCtx } from '../../../contexts/ctxHeader'
import HomeIcon from '../../icons/homeIcon'


export default () => {

  const {isMenuOpen, handleToggleMenuOpen} = useContext(HeaderCtx)
  
  return (
  <S.Nav isOpen={isMenuOpen}>
    <S.ContainerAll isOpen={isMenuOpen} />
    <S.GlassBehind isOpen={isMenuOpen} />
    <S.ContainerLinksMenu isOpen={isMenuOpen}>
      <Link href='#' passHref>
        <S.Alink onClick={handleToggleMenuOpen}>
          <span>{`Home`}</span>
          <S.ContainerIcon>
            <HomeIcon />
          </S.ContainerIcon>
        </S.Alink>
      </Link>
      
    </S.ContainerLinksMenu>
  </S.Nav>
)}