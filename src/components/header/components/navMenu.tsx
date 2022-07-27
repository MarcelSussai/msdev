import { useContext } from "react"
import styled from "styled-components"
import { AppCtx } from "../../../contexts/ctxGlobal"
import { colors } from "../../../styles/theme"
import { fncTransition } from "../../../styles/theme/snippetsCSS"
import AbilityIcon from "../../icons/abilityIcon"
import AreaOfClientIcon from "../../icons/areaOfClientIcon"
import ContactIcon from "../../icons/contactIcon"
import HomeIcon from "../../icons/homeIcon"
import PeopleIcon from "../../icons/peopleIcon"
import PortfolioIcon from "../../icons/portfolioIcon"
import PostsIcon from "../../icons/postsIcon"
import WhatIDoIcon from "../../icons/whatIDoIcon"
import ButtonLinkMenu from "../../ui/buttonLinkMenu"


const ContainerLinks = styled.nav`
  ${fncTransition({})}
  width: 264px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 202;
  margin-bottom: 16px;

  svg {
    ${fncTransition({})}
    width: 20px;
  }
`
const ContainerIndicatePage = styled.div<any>`
  ${fncTransition({})}
  position: absolute;
  top: 56px;
  right: 0px;
  width: 48px;
  height: 32px;
  background: ${colors.riverBed.x500};
  z-index: 100;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 16px;
  display: flex;
  justify-content: center;
  opacity: 0;
  padding-left: 4px;
  &.hide {
    ${fncTransition({dly: '1.4s'})}
    right: -40px;
    opacity: 1;
  }
  svg {
    width: 16px;
  }
`

const menuItems = [
  { pInd: '0', text: 'Home',            icon: <HomeIcon />,         href: '/' },
  { pInd: '1', text: 'Quem sou',        icon: <PeopleIcon />,       href: '' },
  { pInd: '2', text: 'Habilidades',     icon: <AbilityIcon />,      href: '' },
  { pInd: '3', text: 'Artigos',         icon: <PostsIcon />,        href: '' },
  { pInd: '4', text: 'O que faço',      icon: <WhatIDoIcon />,      href: '' },
  { pInd: '5', text: 'Portifólio',      icon: <PortfolioIcon />,    href: '' },
  { pInd: '6', text: 'Contato',         icon: <ContactIcon />,      href: '' },
  { pInd: '7', text: 'Área do Cliente', icon: <AreaOfClientIcon />, href: '' },
]

const NavMenu = (props: any) => {

  const {pageIndexActive} = props
  
  const context = useContext(AppCtx)
  const {isHide} = context

  return (
    <>
      <ContainerLinks>
        {
          menuItems.map((value, index) => {
            return (
              <ButtonLinkMenu key={index}
                text={value.text}
                className={value.pInd === pageIndexActive ? 'active' : ''}
                icon={value.icon}
                pageIndex={value.pInd}
                href={value.href}
              />
            )
          })
        }
      </ContainerLinks>
      {
        menuItems.map((value, index) => {
          if(value.pInd === pageIndexActive) return (
            <ContainerIndicatePage key={index} className={isHide ? 'hide' : ''}>
              {value.icon}
            </ContainerIndicatePage>
          )
        })
      }
    </>
  )
}

export default NavMenu