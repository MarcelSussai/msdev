import { useContext } from 'react'
import Link from 'next/link'
import * as S from './style'
import { HeaderCtx } from '../../../contexts/ctxHeader'
import HomeIcon from '../../icons/homeIcon'
import PeopleIcon from '../../icons/peopleIcon'
import { menuItemsArray } from './configLinks'


export default () => {

  const {isMenuOpen, handleToggleMenuOpen} = useContext(HeaderCtx)
  
  return (
  <S.Nav isOpen={isMenuOpen}>
    <S.ContainerAll isOpen={isMenuOpen} />
    <S.GlassBehind isOpen={isMenuOpen} />
    <S.ContainerLinksMenu isOpen={isMenuOpen}>
      {
        menuItemsArray.map((item, i) => {
          return (
            <Link href={item.link} passHref>
              <S.Alink onClick={handleToggleMenuOpen}>
                <S.SpanText>{item.name}</S.SpanText>
                <S.ContainerIcon>
                  <item.Icon />
                </S.ContainerIcon>
              </S.Alink>
            </Link>
          )
        })
      }
      
    </S.ContainerLinksMenu>
  </S.Nav>
)}