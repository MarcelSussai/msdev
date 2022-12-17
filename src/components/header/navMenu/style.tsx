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
  ${fncTransition({duration: '.2s',})}
  // --
  width: 0;
  ${ ({isOpen}) => !isOpen ? `width: 0;` : `width: 288px;` }
  height: 100%;
  z-index: 0;
  position: fixed;
  // --
  // --
`

export const ContainerLinksMenu = styled.div<IContainerLinksMenu>`
  // --
  ${({isOpen}) => !isOpen ? fncTransition({duration: '.3s'}) : fncTransition({duration: '1.6s'})}
  ${ScrollStyle_01}
  // --
  width: 240px;
  overflow-y: auto;
  scroll-behavior: smooth;
  height: 64%;
  margin-top: 136px;
  z-index: 800;
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 8px;
  transform: ${ ({isOpen}) => !isOpen ? `translate3D(calc(-100% - 32px), 0, 0)` : `translate3D(0, 0, 0)` };
  // --
  // --
`

export const ContainerAll = styled.div<IContainerAll>`
  // --
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 };
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 };
  ${fncTransition({duration: '.8s'})}
  // --
  height: 100%;
  width: 160px;
  position: fixed;
  left: 0;
  z-index: 2;
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
  ${fncTransition({duration: '.6s'})}
  ${GlassEffect_04}
  // --
  height: 100%;
  z-index: 1;
  left: 0px;
  top: 0px;
  position: fixed;
  width: 220px;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 }48;
  border-left: none;
  border-top: none;
  border-bottom: none;
  ${ ({isOpen}) => !isOpen ? `transform: translate3D(-100%, 0, 0);` : `transform: translate3D(0, 0, 0);` }
  // --
  // --
`

export const Alink = styled.a`
  // --
  --border-radius: 80px;
  ${fncTransition({duration: '.4s'})}
  ${GlassEffect_08}
  // --
  width: calc(100% - 8px);
  /* width: 100%; */
  height: 44px;
  margin-left: 8px;
  padding: 2px 2px 2px 3px;
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
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  /* text-shadow:
    2px 2px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0,
    0px 0px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0,
    -4px 2px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0,
    2px -4px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0,
    -2px -2px 6px ${ ({theme}) => theme.colors.riverBed.c250 }A0
  ; */
  // --
  // --
  // --
`

export const ContainerIcon = styled.div`
  // --
  --size-01: 40px;
  --border-radius: 64px;
  ${fncTransition({duration: '.4s'})}

  // --
  width: var(--size-01);
  height: var(--size-01);
  /* height: 100%; */
  padding: 0px 8px 0px 8px;
  /* padding: 8px; */
  position: absolute;
  
  background: ${ ({theme}) => theme.colors.riverBed.c950 }E0;
  right: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius); */
  border-radius: var(--border-radius);
  /* border-left: solid 2px ${ ({theme}) => theme.colors.paleGoldenRod.c500 }; */
  border-top: solid 2px ${ ({theme}) => theme.colors.celery.c300 }FF;
  border-left: solid 2px ${ ({theme}) => theme.colors.celery.c300 }FF;
  border-right: solid 2px ${ ({theme}) => theme.colors.pictonBlue.c300 }FF;
  border-bottom: solid 2px ${ ({theme}) => theme.colors.pictonBlue.c300 }FF;
  box-shadow: -4px 0 8px ${ ({theme}) => theme.colors.riverBed.c750 }80;
  /* border-radius: 80px; */
  /* margin: 4px; */
  // --
  // --
  // --
`

export const SpanText = styled.span`
  // --
  --border-radius: 64px;
  ${fncTransition({duration: '.4s'})}
  // --
  width: calc(100% - 80px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px 8px 0;
  height: 100%;
  background: ${ ({theme}) => theme.colors.riverBed.c950 }D0;
  color: ${ ({theme}) => theme.colors.riverBed.c150 };
  line-height: 1;
  font-weight: 300;
  font-size: 16px;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  // --
  // --
  // --
`