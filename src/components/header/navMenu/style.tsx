import styled from 'styled-components'
import {
  fncTransition,
  GlassEffect_01,
  GlassEffect_02,
  GlassEffect_03,
  GlassEffect_04,
  GlassEffect_08,
  ScrollStyle_01
} from '../../../styles/theme/snippetsCSS'
import { IIsOpen } from '../../ui/buttons/menuButton/style'
// --------

interface INav extends IIsOpen {}
interface IContainerLinksMenu extends IIsOpen {
  delay?: string
}
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
  ${fncTransition({duration: '.8s'})}
  ${ScrollStyle_01}
  // --
  width: 256px;
  overflow-y: auto;
  scroll-behavior: smooth;
  height: 52%;
  margin-top: 136px;
  z-index: 800;
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 8px;
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
  width: 200px;
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

export const Alink = styled.a`
  // --
  ${fncTransition({duration: '.2s'})}
  ${GlassEffect_08}
  // --
  width: 100%;
  /* width: calc(100% - 8px); */
  height: 48px;
  padding: 6px 16px 6px 16px;
  line-height: 1;
  color: ${ ({theme}) => theme.colors.riverBed.c850 };
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 }24;
  border-left: none;
  /* border-right: none; */
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 8px;
  position: relative;
  line-height: 1;
  font-weight: 700;
  font-size: 18px;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  text-shadow:
    2px 2px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0,
    0px 0px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0,
    -4px 2px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0,
    2px -4px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0,
    -2px -2px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0
  ;
  // --
  // --
  // --
`

export const ContainerIcon = styled.div`
  // --
  --size-01: 44px;
  --border-radius: 44px;
  ${fncTransition({duration: '.4s'})}

  // --
  width: var(--size-01);
  height: var(--size-01);
  /* height: 100%; */
  padding: 0px 8px 0px 8px;
  /* padding: 8px; */
  position: absolute;
  background: ${ ({theme}) => theme.colors.riverBed.c950 }D0;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius); */
  border-radius: var(--border-radius);
  /* border-left: solid 2px ${ ({theme}) => theme.colors.paleGoldenRod.c500 }; */
  border: solid 2px ${ ({theme}) => theme.colors.riverBed.c050 }E0;
  /* border-radius: 80px; */
  /* margin: 4px; */
  // --
  // --
  // --
`