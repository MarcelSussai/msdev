import styled from 'styled-components'
import {
  fncTransition,
  fncTransitionPart,
  GlassEffect_04,
  GlassEffect_08,
  mediaQueryMinW,
  ScrollStyle_01
} from '../../../styles/theme/snippetsCSS'
import { IIsOpen } from '../../ui/buttons/menuButton/style'
// --------

interface INav extends IIsOpen {}
interface IContainerLinksMenu extends IIsOpen {}
interface IDivStyle_01 extends IIsOpen {}
interface IDivStyle_02 extends IIsOpen {}
interface IGlassBehind extends IIsOpen {}
interface IAlink extends IIsOpen { delay: string}

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
  /* ${({isOpen}) => !isOpen ?
    fncTransition({duration: '.4s'}) :
    fncTransition({duration: '1.2s'})
  } */
  ${ScrollStyle_01}
  // --
  overflow-y: auto;

  width: 264px;
  height: 70%;

  position: fixed;
  z-index: 800;

  margin-top: 136px;
  padding: 0 6px 0 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  // --
  // --
  @media (min-height: 592px) { height: 72%; }
  @media (min-height: 664px) { height: 408px; }
  // --
`

export const DivStyle_01 = styled.div<IDivStyle_01>`
  // --
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 };
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 };
  ${fncTransition({duration: '.6s'})}
  // --
  height: 100%;
  width: 170px;

  position: fixed;
  left: 0;
  z-index: 300;

  background: ${ ({theme}) => theme.colors.riverBed.c850 };

  ${ ({isOpen}) => !isOpen ?
    `
      transform: translate3D(calc(-100% - 32px), 0, 0);
    ` :
    `
      transform: translate3D(0, 0, 0);
    `
  };

  box-shadow: 4px 0 4px ${ ({theme}) => theme.colors.riverBed.c850 }96;
  // --
  /* &:after {
    content: '';
    position: absolute;
    background: linear-gradient(0deg, var(--bg-color-02), var(--bg-color-03));
    width: 40px;
    height: 100%;
    top: 0;
    right: -24px;
    z-index: -3;
  } */
  // --
  // --
`

export const DivStyle_02 = styled.div<IDivStyle_02>`
  // --
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 }EA;
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 }EA;
  ${({isOpen}) => isOpen ?
    fncTransition({duration: '.6s'}) :
    fncTransition({duration: '.8s', delay: '.1s'})
  }
  // --
  background: linear-gradient(160deg, var(--bg-color-02), var(--bg-color-03));
  width: 184px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  ${ ({isOpen}) => !isOpen ?
    `
      transform: translate3D(calc(-100% - 32px), 0, 0);
    ` :
    `
      transform: translate3D(0, 0, 0);
    `
  };
  // --
  // --
`

export const GlassBehind = styled.div<IGlassBehind>`
  // --
  ${fncTransition({duration: '.6s'})}
  ${GlassEffect_04}
  // --
  height: 100%;
  width: 238px;

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

export const Alink = styled.a<IAlink>`
  // --
  --border-radius: 80px;
  ${GlassEffect_08}
  transition: ${({isOpen, delay}) => !isOpen ?
    fncTransitionPart({duration: '.4s',}) :
    fncTransitionPart({duration: '1.2s', delay: delay})
  }, background .2s ease-in-out;
  // --
  width: calc(100% - 8px);
  min-height: 44px;
  max-height: 44px;

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
  right: 2px;

  padding: 0px 8px 0px 8px;
  
  background: ${ ({theme}) => theme.colors.riverBed.c950 }E0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: var(--border-radius);
  border-top: solid 2px ${ ({theme}) => theme.colors.celery.c400 }FF;
  border-left: solid 2px ${ ({theme}) => theme.colors.celery.c400 }FF;
  border-right: solid 2px ${ ({theme}) => theme.colors.pictonBlue.c400 }FF;
  border-bottom: solid 2px ${ ({theme}) => theme.colors.pictonBlue.c400 }FF;

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
  width: calc(100% - 86px);
  height: 100%;

  padding: 10px 6px 8px 0;

  background: ${ ({theme}) => theme.colors.riverBed.c950 }EA;
  color: ${ ({theme}) => theme.colors.riverBed.c050 };

  line-height: 1;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 2px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  // --
  // --
  // --
`

export const Img = styled.img`
  
`