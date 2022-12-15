import styled from 'styled-components'
import {
  animation_05,
  fncTransition, GlassEffect_02, GlassEffect_03, ShadowEffect_02
} from '../../../../styles/theme/snippetsCSS'

// --------
export interface IIsOpen {
  isOpen: boolean
}
interface IDrawItemButton extends IIsOpen {}
// --------
export const ContainerButtonMenu = styled.div`
  // --
  --size-radius-01: 4px;
  ${fncTransition({})}
  ${GlassEffect_03}
  // --
  position: fixed;
  width: fit-content;
  height: 72px;
  right: 0;
  bottom: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0;
  z-index: 900;
  padding: 4px 16px 0px 20px;
  transform: translate3d(0, 100%, 0);
  animation: ${animation_05} 2s 1.2s ease-in-out forwards;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 }00;
  border-right: none;
  border-top-left-radius: var(--size-radius-01);
  border-bottom-left-radius: var(--size-radius-01);
  // --
  // --
`

export const ButtonMenu = styled.button`
  // --
  --size-01: 32px;
  --radius-01: 4px;
  ${fncTransition({})}
  ${GlassEffect_02}
  ${ShadowEffect_02}
  // --
  outline: 0;
  width: 48px;
  /* width: var(--size-01); */
  height: var(--size-01);
  align-self: center;
  border-radius: var(--radius-01);
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c200 }96;
  animation: ${animation_05} 2s 1.8s ease-in-out forwards;
  cursor: pointer;
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