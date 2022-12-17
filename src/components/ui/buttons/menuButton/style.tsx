import styled from 'styled-components'
import {
  animation_05,
  fncTransition, GlassEffect_02, GlassEffect_03, GlassEffect_06, mediaQueryMinW, ShadowEffect_02
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
  ${fncTransition({})}
  ${GlassEffect_06}
  // --
  position: fixed;
  width: 88px;
  height: 88px;
  right: 0px;
  bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 900;
  /* padding: 8px; */
  padding: 12px 8px 8px 10px;
  transform: translate3d(100%, 0, 0);
  animation: ${animation_05} 2s 1.2s ease-in-out forwards;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 }48;
  border-right: none;
  border-radius: 80px;
  border-top-right-radius: var(--size-radius-01);
  border-bottom-right-radius: var(--size-radius-01);
  // --
  // --
  ${mediaQueryMinW('400')} {
    bottom: unset;
    top: 24px;
  }
  // --
`

export const ButtonMenu = styled.button<IButtonMenu>`
  // --
  --size-01: 48px;
  --radius-01: 4px;
  --color-01: ${
    ({theme, isOpen}) => !isOpen ?
      theme.colors.grape.c100 :
      theme.colors.wine.c100
  }F0;
  ${fncTransition({})}
  ${ShadowEffect_02}
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
  animation: ${animation_05} 2s 1.8s ease-in-out forwards;
  cursor: pointer;
  // --
  &:hover {
    --color-01: ${ ({theme}) => theme.colors.cream.c300 }FF;
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