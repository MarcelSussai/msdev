import { useContext } from "react"
import styled from "styled-components"
import { AppCtx } from "../../../contexts/ctxGlobal"
import { colors } from "../../../styles/theme"
import { fncTransition } from "../../../styles/theme/snippetsCSS"
import ConfigMenuLanguage from "./configMenuLanguage"
import NavMenu from "./navMenu"



const ContainerMenu = styled.div`
${fncTransition({})}
position: relative;
width: 232px;
background: ${colors.riverBed.x800};
height: 100%;
padding: 56px 0 0 8px;
display: flex;
flex-direction: column;
z-index: 200;

@media (max-height: 440px) {
  height: 600px;
}

&::after {
  z-index: 201;
  content: '';
  position: absolute;
  width: 8px;
  background: ${colors.paleGoldenRod.x500};
  height: 100%;
  top: 0;
  right: 0;
}
`
const ContainerConfigMenu = styled.div`
  ${fncTransition({})}
  position: absolute;
  top: 8px;
  right: 0;
  height: 40px;
  width: 224px;
  border-bottom: solid 1px ${colors.paleGoldenRod.x500};
  border-top: solid 1px ${colors.paleGoldenRod.x500};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-left: 8px;
`
const ContainerCloseButton = styled.button`
  ${fncTransition({})}
  position: absolute;
  top: 8px;
  right: -40px;
  background: ${colors.paleGoldenRod.x500};
  width: 48px;
  height: 40px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-right: solid 4px ${colors.paleGoldenRod.x200};
  display: flex;
  padding: 0 0 0 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 202;
  &:hover {
    background: ${colors.ripeMango.x500};
  }
`
const DivDetailCloseOpenMenu = styled.div`
  ${fncTransition({dur: '.8s'})}
  width: 24px;
  height: 4px;
  position: relative;
  background-color: ${colors.richLilac.x800};
  &::before {
    ${fncTransition({dur: '1.4s'})}
    content: '';
    width: 16px;
    height: 4px;
    position: absolute;
    top: -8px;
    left: 0;
    background-color: ${colors.richLilac.x800};
    transform: rotate(-395deg) translateX(-7px);
  }
  &::after {
    ${fncTransition({dur: '1.4s'})}
    content: '';
    width: 16px;
    height: 4px;
    position: absolute;
    top: 8px;
    left: 0;
    background-color: ${colors.richLilac.x800};
    transform: rotate(395deg) translateX(-7px);
  }
  &.hide {
    &::after, &::before {
      width: 24px;
      transform: rotate(0) translateX(0);
    }
  }
`

const Menu = (props: any) => {

  const {
    onCloseCLick,
    pageIndexActive
  } = props

  
  const context = useContext(AppCtx)
  const {isHide} = context

  return (
  <ContainerMenu>
    <ContainerConfigMenu> <ConfigMenuLanguage /> </ContainerConfigMenu>
    <ContainerCloseButton onClick={onCloseCLick}>
      <DivDetailCloseOpenMenu className={isHide ? 'hide' : ''} />
    </ContainerCloseButton>
    <NavMenu pageIndexActive={pageIndexActive} />
  </ContainerMenu>
)

}

export default Menu;