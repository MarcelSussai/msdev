import { useState } from 'react'
import LogoComponent from '../logo/logo'
import MenuButton from '../ui/buttons/menuButton'
import NavMenu from './navMenu'
import * as S from './style'
import CtxHeaderProvider from '../../contexts/ctxHeader';



export default () => {

  return (
  <CtxHeaderProvider>
    <S.Header>
      <S.GlassBehindLogotype>
        <S.ContainerAllLogo>
          <S.ContainerLogo> <LogoComponent /> </S.ContainerLogo>
          <S.ContainerLogotype>
            <S.ContainerMarcelSussai>
              <S.Marcel> {`Marcel`} </S.Marcel>
              <S.Sussai> {`Sussai`} </S.Sussai>
            </S.ContainerMarcelSussai>
            <S.DescriptionJob> {`fullstack web developer`} </S.DescriptionJob>
          </S.ContainerLogotype>
        </S.ContainerAllLogo>
      </S.GlassBehindLogotype>
      <S.AestheticsNav>

      </S.AestheticsNav>
      <NavMenu />
      <MenuButton />
    </S.Header>
  </CtxHeaderProvider>
)}