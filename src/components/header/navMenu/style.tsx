import styled from 'styled-components'
import {
  fncTransition,
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
  height: 100%;
  position: fixed;
  z-index: 0;
  // --
  // --
`

export const ContainerLinksMenu = styled.div<IContainerLinksMenu>`
  // --
  ${({isOpen}) => !isOpen ?
    fncTransition({duration: '.4s'}) :
    fncTransition({duration: '1.2s'})
  }
  ${ScrollStyle_01}
  // --
  overflow-y: auto;
  scroll-behavior: smooth;

  width: 240px;
  height: 64%;

  position: fixed;
  z-index: 800;

  margin-top: 136px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({isOpen}) => !isOpen ?
    `
      transform: translate3D(calc(-100% - 32px), 0, 0);
      opacity: 0;
    ` :
    `
      transform: translate3D(0, 0, 0);
      opacity: 1;
    `
  };
  // --
  // --
`

export const ContainerAll = styled.div<IContainerAll>`
  // --
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 };
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 };
  ${fncTransition({duration: '.6s'})}
  // --
  height: 100%;
  width: 164px;

  position: fixed;
  left: 0;
  z-index: 2;

  background: ${ ({theme}) => theme.colors.riverBed.c850 };

  ${ ({isOpen}) => !isOpen ?
    `
      transform: translate3D(calc(-100% - 32px), 0, 0);
    ` :
    `
      transform: translate3D(0, 0, 0);
    `
  };

  box-shadow: 4px 0 16px 4px ${ ({theme}) => theme.colors.riverBed.c750 }80;
  // --
  &:after {
    content: '';
    z-index: 3;
    position: absolute;
    background: linear-gradient(0deg, var(--bg-color-02), var(--bg-color-03));
    width: 6px;
    height: 100%;
    top: 0;
    right: -3px;
  }
  // --
  // --
`

export const GlassBehind = styled.div<IGlassBehind>`
  // --
  ${fncTransition({duration: '.6s'})}
  ${GlassEffect_04}
  // --
  height: 100%;
  width: 220px;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;

  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 }48;
  border-left: none;
  border-top: none;
  border-bottom: none;

  ${({isOpen}) => !isOpen ?
    `transform: translate3D(-100%, 0, 0);` :
    `transform: translate3D(0, 0, 0);`
  }
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
  height: 44px;

  position: relative;

  margin-left: 8px;
  padding: 2px 2px 2px 3px;
  
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 }24;
  border-left: none;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 8px;
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

  position: absolute;
  right: -1px;

  padding: 0px 8px 0px 8px;
  
  background: ${ ({theme}) => theme.colors.riverBed.c950 }E0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: var(--border-radius);
  border-top: solid 2px ${ ({theme}) => theme.colors.celery.c300 }FF;
  border-left: solid 2px ${ ({theme}) => theme.colors.celery.c300 }FF;
  border-right: solid 2px ${ ({theme}) => theme.colors.pictonBlue.c300 }FF;
  border-bottom: solid 2px ${ ({theme}) => theme.colors.pictonBlue.c300 }FF;

  box-shadow: -4px 0 8px ${ ({theme}) => theme.colors.riverBed.c750 }80;
  // --
  // --
  // --
`

export const SpanText = styled.span`
  // --
  --border-radius: 64px;
  ${fncTransition({duration: '.4s'})}
  // --
  width: calc(100% - 77px);
  height: 100%;

  padding: 8px 12px 8px 0;

  background: ${ ({theme}) => theme.colors.riverBed.c950 }D0;
  color: ${ ({theme}) => theme.colors.riverBed.c150 };

  line-height: 1;
  font-weight: 300;
  font-size: 16px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  // --
  // --
  // --
`