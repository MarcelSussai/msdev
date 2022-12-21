// este import está desse jeito para resolver um problema de highlight
import styled, * as S from "styled-components"


// --------
interface fncTransitionProps {
  duration?: string | undefined
  easing?: string | undefined
  target?: string | undefined
  delay?: string | undefined
}
// --------
export const fontMuseo = `font-family: 'MuseoModerno', cursive;`
export const fontGeorama = `font-family: 'Georama', sans-serif;`
export const mediaQueryMinW = (size: string) => `@media (min-width: ${size}px)`

export const minWidthForAdjustMenu = '960'

export const fncTransition = (props: fncTransitionProps) => {
  const { duration, easing, target, delay} = props
  return `
    transition:
      ${ target   || ' all ' }
      ${ duration || ' .3s ' }
      ${ easing   || ' ease-in-out '}
      ${ delay    || ''};
  `
}

export const fncTransitionPart = (props: fncTransitionProps) => {
  const { duration, easing, target, delay} = props
  return `
      ${ target   || ' all ' }
      ${ duration || ' .3s ' }
      ${ easing   || ' ease-in-out '}
      ${ delay    || ''}
  `
}

export const ScrollStyle_01 = S.css`
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 16px;
  }
  &::-webkit-scrollbar-button  {
    display: none;
  }
  &::-webkit-scrollbar-track-piece {
    background: ${({theme}) => theme.colors.riverBed.c200};
    border-radius: 16px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.riverBed.c600};
    border-radius: 16px;
  }
  scrollbar-width: thin;
  scrollbar-color: ${({theme}) => theme.colors.riverBed.c600} ${({theme}) => theme.colors.riverBed.c200};
  
`



export const animation_01 = S.keyframes`
  from {
    width: 0;
    opacity: 0;
    padding: 0;
    overflow: hidden;
  }
  to {
    width: 100%;
    padding: 8px;
    opacity: 1;
    overflow: visible;
  }
`

export const animation_02 = S.keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const animation_03 = S.keyframes`
  from {
    opacity: 0;
    width: 0%;
  }
  to {
    opacity: 1;
    width: 288px;
  }
`

export const animation_04 = S.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const animation_05 = S.keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const animation_06 = S.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const animation_07 = S.keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export const animation_08 = S.keyframes`
  from {
    transform: translate3d(calc(-100% - 32px), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export const animation_09 = S.keyframes`
  from {
    transform: translate3d(calc(-100% - 32px), 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`

export const animation_10 = S.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
