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
export const mediaQueryMinW = (size: string) => `@media (min-width: ${size}px)`

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

export const GlassEffect_01 = S.css`
  --color-01: ${ ({theme}) => theme.colors.riverBed.c550 }40;
  --color-02: ${ ({theme}) => theme.colors.riverBed.c050 }40;
  backdrop-filter: blur(1.6px);
  background: linear-gradient(160deg, var(--color-01), var(--color-02));
  box-shadow: 0 0 8px ${ ({theme}) => theme.colors.riverBed.c850 }32;
`

export const GlassEffect_02 = S.css`
  ${fncTransition({})}
  --color-01: ${ ({theme}) => theme.colors.riverBed.c150 }E0;
  backdrop-filter: blur(2px);
  background: var(--color-01);
  &:hover {
    --color-01: ${ ({theme}) => theme.colors.cream.c500 }FF;
  }
`

export const GlassEffect_03 = S.css`
  --color-01: ${ ({theme}) => theme.colors.riverBed.c750 }40;
  --color-02: ${ ({theme}) => theme.colors.riverBed.c050 }40;
  backdrop-filter: blur(2px);
  background: linear-gradient(-160deg, var(--color-01), var(--color-02));
  box-shadow: 0 0 8px ${ ({theme}) => theme.colors.riverBed.c850 }32;
`

export const GlassEffect_04 = S.css`
  --color-01: ${ ({theme}) => theme.colors.riverBed.c350 }64;
  --color-02: ${ ({theme}) => theme.colors.riverBed.c050 }40;
  backdrop-filter: blur(2px);
  background: linear-gradient(0deg, var(--color-01), var(--color-02));
  box-shadow: 0 0 8px ${ ({theme}) => theme.colors.riverBed.c850 }32;
`

export const GlassEffect_05 = S.css`
  --color-01: ${ ({theme}) => theme.colors.riverBed.c400 }64;
  --color-02: ${ ({theme}) => theme.colors.riverBed.c350 }64;
  backdrop-filter: blur(2px);
  background: linear-gradient(45deg, var(--color-01), var(--color-02));
  box-shadow: 0 0 8px ${ ({theme}) => theme.colors.riverBed.c850 }32;
`

export const GlassEffect_06 = S.css`
  --color-01: ${ ({theme}) => theme.colors.riverBed.c450 }B0;
  --color-02: ${ ({theme}) => theme.colors.riverBed.c050 }56;
  backdrop-filter: blur(3px);
  background: linear-gradient(160deg, var(--color-01), var(--color-02));
  box-shadow: 0 0 8px ${ ({theme}) => theme.colors.riverBed.c850 }32;
`

export const ShadowEffect_01 = S.css`
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c950 }64;
  box-shadow: 2px 2px 8px 8px var(--shadow-color-01), -2px -2px 8px 8px #FFFFFF72;
`

export const ShadowEffect_02 = S.css`
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c500 }64;
  box-shadow:
    2px 4px 4px 4px var(--shadow-color-01),
    -2px -4px 4px 4px #FFFFFFA0,
    inset -0px -0px 8px 2px ${ ({theme}) => theme.colors.greyPurple.c400 }A0
  ;
  &:hover {
    box-shadow:
      2px 4px 4px 4px var(--shadow-color-01),
      -2px -4px 4px 4px #FFFFFFA0,
      inset -0px -0px 8px 2px ${ ({theme}) => theme.colors.cream.c800 }A0
    ;

  }
`

export const ShadowEffect_03 = S.css`
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c600 }A0;
  box-shadow:
    8px 8px 8px 4px var(--shadow-color-01),
    -4px -4px 8px 6px #FFFFFF80
  ;
`

export const ShadowEffect_04 = S.css`
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c350 }A0;
  box-shadow:
    8px 8px 4px 2px var(--shadow-color-01),
    -2px -2px 6px 2px #FFFFFF96,
    inset -0px -0px 4px 2px ${ ({theme}) => theme.colors.riverBed.c350 }A0
  ;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 };
  border-radius: 8px;
`

export const fontMuseo = `
  font-family: 'MuseoModerno', cursive;
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
    transform: translate3d(0, 100%, 0);
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
// --------
