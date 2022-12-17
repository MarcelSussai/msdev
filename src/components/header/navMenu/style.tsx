import styled from 'styled-components'
import {
  fncTransition,
  GlassEffect_04,
  ScrollStyle_01
} from '../../../styles/theme/snippetsCSS'
import { IIsOpen } from '../../ui/buttons/menuButton/style'
// --------

interface INav extends IIsOpen {}
interface IContainerLinksMenu extends IIsOpen {}
interface IContainerAll extends IIsOpen {}
interface IGlassBehind extends IIsOpen {}
// --------
export const Nav = styled.nav<INav>`
  // --
  ${fncTransition({duration: '1s',})}
  // --
  width: 0;
  ${ ({isOpen}) => !isOpen ? `width: 0;` : `width: 232px;` }
  height: 100%;
  z-index: 0;
  position: fixed;
  // --
  // --
`

export const ContainerLinksMenu = styled.div<IContainerLinksMenu>`
  // --
  ${fncTransition({duration: '.8s',})}
  ${ScrollStyle_01}
  // --
  width: 240px;
  overflow-y: auto;
  scroll-behavior: smooth;
  height: 64%;
  margin-top: 136px;
  z-index: 800;
  position: fixed;
  transform: translate3D(calc(-100% - 32px), 0, 0);
  transform: ${ ({isOpen}) => !isOpen ? `translate3D(calc(-100% - 32px), 0, 0)` : `translate3D(0, 0, 0)` };
  // --
  // --
`

export const ContainerAll = styled.div<IContainerAll>`
  // --
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 };
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 };
  ${fncTransition({duration: '.8s',})}
  // --
  height: 100%;
  width: 184px;
  position: fixed;
  left: 0;
  z-index: 2;
  transform: translate3D(calc(-100% - 32px), 0, 0);
  background: ${ ({theme}) => theme.colors.riverBed.c900 };
  transform: ${ ({isOpen}) => !isOpen ? `translate3D(calc(-100% - 32px), 0, 0)` : `translate3D(0, 0, 0)` };
  border-right: solid 4px;
  border-image-source: linear-gradient(0deg, var(--bg-color-02), var(--bg-color-03));
  border-image-slice: 1;
  box-shadow: 4px 0 16px 4px ${ ({theme}) => theme.colors.riverBed.c750 }80;
  
  // --
  // --
`

export const GlassBehind = styled.div<IGlassBehind>`
  // --
  ${fncTransition({duration: '.8s'})}
  ${GlassEffect_04}
  // --
  height: 100%;
  z-index: 1;
  left: 0px;
  top: 0px;
  position: fixed;
  width: 236px;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 }48;
  border-left: none;
  border-top: none;
  border-bottom: none;
  transform: translate3D(-100%, 0, 0);
  ${ ({isOpen}) => !isOpen ? `transform: translate3D(-100%, 0, 0);` : `transform: translate3D(0, 0, 0);` }
  // --
  // --
`

export const DivTest = styled.div`
`