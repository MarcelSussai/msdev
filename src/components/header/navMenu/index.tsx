import { useContext } from 'react'
import Link from 'next/link'
import * as S from './style'
import { HeaderCtx } from '../../../contexts/ctxHeader'
import { menuItemsArray } from './configLinks'


export default () => {

  const {isMenuOpen, handleToggleMenuOpen} = useContext(HeaderCtx)
  
  return (
  <S.Nav isOpen={isMenuOpen}>
    <S.DivStyle_01 isOpen={isMenuOpen} />
    <S.DivStyle_02 isOpen={isMenuOpen} />
    <S.GlassBehind isOpen={isMenuOpen} />
    <S.ContainerLinksMenu isOpen={isMenuOpen}>
      {menuItemsArray.map((item, i) => {
        return (
          <Link key={i} href={item.link} passHref>
            <S.Alink delay={`.${item.pageIndex}s`} onClick={handleToggleMenuOpen} isOpen={isMenuOpen}>
              <S.SpanText>{item.name}</S.SpanText>
              <S.ContainerIcon>
                <S.Img src={item.image} />
              </S.ContainerIcon>
            </S.Alink>
          </Link>
        )
      })}
    </S.ContainerLinksMenu>
  </S.Nav>
)}