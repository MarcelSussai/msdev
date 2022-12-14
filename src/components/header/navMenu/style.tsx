import styled from 'styled-components'
import {
  animation_07,
  animation_08,
  animation_09,
  fncTransition,
  fncTransitionPart,
  mediaQueryMinW,
  minWidthForAdjustMenu,
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
  height: 100%;
  position: fixed;
  z-index: 0;
`

export const ContainerLinksMenu = styled.div<IContainerLinksMenu>`
  // --
  ${ScrollStyle_01}
  ${fncTransition({duration: '.6s'})}
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
  ${ ({isOpen}) => !isOpen ?
    `transform: translate3D(-100%, 0, 0);` :
    `transform: translate3D(0, 0, 0);`
  };

  @media (min-height: 592px) { height: 72%; }
  @media (min-height: 664px) { height: 408px; }
  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    transform: translate3d(-100%, 0, 0);
    animation: ${animation_07} .1s ease-in-out forwards;
  }
`

export const DivStyle_01 = styled.div<IDivStyle_01>`
  // --
  --bg-color-01: ${ ({theme}) => theme.colors.riverBed.c850 };
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c950 }96;

  ${fncTransition({duration: '.6s'})}
  height: 100%;
  width: 170px;
  position: fixed;
  left: 0;
  z-index: 300;
  background: var(--bg-color-01);
  ${ ({isOpen}) => !isOpen ?
    `transform: translate3D(calc(-100% - 32px), 0, 0);` :
    `transform: translate3D(0, 0, 0);`
  };
  box-shadow: 0 0 8px var(--shadow-color-01);

  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    transform: translate3D(calc(-100% - 32px), 0, 0);
    animation: ${animation_08} 1s .4s ease-in-out forwards;
  }
`

export const DivStyle_02 = styled.div<IDivStyle_02>`
  // --
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 }EA;
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 }EA;

  ${({isOpen}) => isOpen ?
    fncTransition({duration: '.6s'}) :
    fncTransition({duration: '.8s', delay: '.1s'})
  }
  background: linear-gradient(160deg, var(--bg-color-02), var(--bg-color-03));
  width: 184px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  ${ ({isOpen}) => !isOpen ?
    `transform: translate3D(calc(-100% - 32px), 0, 0);` :
    `transform: translate3D(0, 0, 0);`
  };

  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    /* ${fncTransition({duration: '.6s'})} */
    transform: translate3D(calc(-100% - 32px), 0, 0);
    animation: ${animation_08} 1s .4s ease-in-out forwards;
  }
`

export const GlassBehind = styled.div<IGlassBehind>`
  // --
  --color-01: ${ ({theme}) => theme.colors.riverBed.c350 }64;
  --color-02: ${ ({theme}) => theme.colors.riverBed.c050 }40;
  --border-color: ${ ({theme}) => theme.colors.riverBed.c050 }48;
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c850 }32;

  ${fncTransition({duration: '.6s'})}
  height: 100%;
  width: 238px;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;
  backdrop-filter: blur(1.6px);
  background: linear-gradient(45deg, var(--color-01), var(--color-02));
  border: solid 1px var(--border-color);
  border-left: unset;
  border-top: unset;
  border-bottom: unset;
  box-shadow: 0 0 8px var(--shadow-color-01);
  ${({isOpen}) => !isOpen ?
    `transform: translate3D(-100%, 0, 0);` :
    `transform: translate3D(0, 0, 0);`
  }

  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    /* transform: translate3D(-100%, 0, 0); */
    animation: ${animation_07} 1s .4s ease-in-out forwards;
  }
`

export const Alink = styled.a<IAlink>`
  // --
  --color-01: ${ ({theme}) => theme.colors.riverBed.c050 }20;
  --color-02: ${ ({theme}) => theme.colors.cream.c500 }EB;
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c500 }64;
  --shadow-color-02: ${ ({theme}) => theme.colors.cream.c300 }FA;
  --border-color: ${ ({theme}) => theme.colors.white }32;

  transition: ${({isOpen, delay}) => !isOpen ?
    fncTransitionPart({duration: '.4s',}) :
    fncTransitionPart({duration: '1.2s', delay: delay})
  }, background .2s ease-in-out, box-shadow .4s ease-in-out;
  width: calc(100% - 8px);
  min-height: 44px;
  max-height: 44px;
  position: relative;
  margin-left: 8px;
  padding: 2px 2px 2px 2px;
  background: var(--color-01);
  backdrop-filter: blur(2px);
  border: solid 1px var(--border-color);
  border-radius: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 8px;
  box-shadow: inset 0 0 16px 2px var(--shadow-color-01);
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

  &:hover {
    box-shadow: inset 0 0 16px 8px var(--shadow-color-02);
    background: var(--color-02);
  }

  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    opacity: 0;
    transform: translate3D(calc(-100% - 32px), 0, 0);
    animation:
      ${animation_09} .8s ${({delay}) => `calc(.4s + ${delay})`} ease-in-out forwards
    ;
  }
`

export const ContainerIcon = styled.div`
  // --
  --size-01: 38px;
  --border-radius: 64px;

  ${fncTransition({duration: '.4s'})}
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
  box-shadow: -3px 0px 6px ${ ({theme}) => theme.colors.riverBed.c850 }80;
`

export const SpanText = styled.span`
  // --
  --border-radius: 64px;

  ${fncTransition({duration: '.4s'})}
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
`

export const Img = styled.img`
  width: 100%;
`