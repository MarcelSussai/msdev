import styled from 'styled-components'
import { colors } from '../styles/theme'
import Logotype from './logo/logotype'
import ButtonLinkMenu from './ui/buttonLinkMenu'




const ContainerHeader = styled.header`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: fit-content;
  padding: 0 0 0 0;

  color: ${colors.riverBed.x050};

`

const ContainerMenu = styled.div`
  position: relative;
  width: 232px;
  background: ${colors.riverBed.x800};
  height: 100%;
  padding: 16px 0 0 8px;
  display: flex;
  flex-direction: column;
  z-index: 200;
  
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

const ContainerLinks = styled.nav`
  width: 264px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 202;
`

const Header = () => {



  return (
    <ContainerHeader>
      <Logotype />
      <ContainerMenu>
        <ContainerLinks>
          <ButtonLinkMenu text='Home' />
          <ButtonLinkMenu text='Quem Sou' />
          <ButtonLinkMenu text='Habilidades' />
          <ButtonLinkMenu text='Artigos' />
          <ButtonLinkMenu text='O que faço' />
          <ButtonLinkMenu text='Portifólio' />
          <ButtonLinkMenu text='Contato' />
          <ButtonLinkMenu text='Área do Cliente' />
        </ContainerLinks>
        <div style={{alignSelf: 'flex-end',}}>!</div>
      </ContainerMenu>
    </ContainerHeader>
  )
}

export default Header;
