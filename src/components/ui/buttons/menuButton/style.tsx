import styled from 'styled-components'
import {
  animation_05,
  fncTransition,
  mediaQueryMinW,
} from '../../../../styles/theme/snippetsCSS'

// --------
export interface IIsOpen {
  isOpen: boolean
}
interface IDrawItemButton extends IIsOpen {}
interface IButtonMenu extends IIsOpen {}
// --------
export const ContainerButtonMenu = styled.div`
  // --
  --size-radius-01: 0px;
  --color-01: ${ ({theme}) => theme.colors.riverBed.c500 }64;
  --color-02: ${ ({theme}) => theme.colors.riverBed.c050 }00;
  // --
  ${fncTransition({})}
  // --
  width: 88px;
  height: 88px;
  
  position: fixed;
  right: 0px;
  bottom: 12px;
  z-index: 900;
  opacity: 0;

  padding: 12px 8px 8px 6px;

  backdrop-filter: blur(1.4px);
  background:
    linear-gradient(-160deg, var(--color-01), var(--color-02), var(--color-01))
  ;
  
  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 }48;
  border-right: none;
  border-radius: 80px;
  border-top-right-radius: var(--size-radius-01);
  border-bottom-right-radius: var(--size-radius-01);

  box-shadow: 2px 2px 8px ${ ({theme}) => theme.colors.riverBed.c850 }48;

  transform: translate3d(100%, 0, 0);
  animation: ${animation_05} .8s .8s ease-in-out forwards;
  // --
  // --
  ${mediaQueryMinW('400')} {
    bottom: unset;
    top: 24px;
  }
  ${mediaQueryMinW('600')} {
    display: none;
  }
  // --
`

export const ButtonMenu = styled.button<IButtonMenu>`
  // --
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c500 }00;
  --shadow-color-02: ${ ({theme}) => theme.colors.riverBed.c400 }80;
  --size-01: 48px;
  --radius-01: 4px;
  --color-01: ${
    ({theme, isOpen}) => !isOpen ?
      theme.colors.grape.c100 :
      theme.colors.wine.c100
  }F0;
  // --
  ${fncTransition({})}
  // --
  outline: 0;
  /* width: 48px; */
  width: var(--size-01);
  height: var(--size-01);
  align-self: center;
  border-radius: var(--radius-01);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  background: var(--color-01);
  border-radius: 80px;
  transform: translate3d(100%, 0, 0);
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c200 }96;
  box-shadow:
    2px 4px 4px 4px var(--shadow-color-01),
    inset -0px -0px 8px 2px var(--shadow-color-02)
  ;
  animation: ${animation_05} 1s 1s ease-in-out forwards;
  cursor: pointer;
  // --
  &:hover {
    --color-01: ${ ({theme}) => theme.colors.cream.c300 }FF;
    --shadow-color-02: ${ ({theme}) => theme.colors.cream.c800 }80;
  }
  // --
  // --
`

export const DrawItemButton = styled.div<IDrawItemButton>`
  // --
  --size-height: 3px;
  --size-width: 20px;
  --border-radius: 8px;
  ${fncTransition({})}
  // --
  width: var(--size-width);
  height: var(--size-height);
  border-radius: var(--border-radius);
  background: ${ ({theme, isOpen}) => isOpen ? theme.colors.grape.c500 + '00' : theme.colors.grape.c500 };
  position: relative;
  // --
  &::after, &::before {
    // -
    ${fncTransition({duration: '.4s'})}
    // -
    content: '';
    width: var(--size-width);
    height: var(--size-height);
    border-radius: var(--border-radius);
    background: ${ ({theme}) => theme.colors.grape.c500 };
    position: absolute;
    left: 0;
    transform-origin: center;
  }
  &::before {
    ${
      ({theme, isOpen}) => isOpen ?
        `
          transform: rotate(-45deg) translateY(7px);
          background: ${ theme.colors.wine.c550 };
          /* width: 28px; */
          /* height: 4px; */
          left: -4px;
        ` :
        `
          transform: rotate(0) translate3d( 0, 0, 0 );
        `
    }
    
    top: -5px;
  }
  &::after {
    ${
      ({theme, isOpen}) => isOpen ?
        `
          transform: rotate(45deg) translateY(-7px);
          background: ${ theme.colors.wine.c550 };
          /* width: 28px; */
          /* height: 4px; */
          left: -4px;
        ` :
        `
          transform: rotate(0) translate3d( 0, 0, 0 );
        `
    }
    bottom: -5px;
  }
  // --
  // --
`