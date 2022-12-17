import styled from 'styled-components'
import {
  fncTransition,
  GlassEffect_06,
  mediaQueryMinW,
  ShadowEffect_03
} from '../../styles/theme/snippetsCSS'

// --------
// --------
export const ContainerAll = styled.div`
  // --
  ${fncTransition({})}
  ${GlassEffect_06}
  // --
  padding: 24px;
  margin: 16px;
  border-radius: 80px;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c150 }80;
  position: fixed;
  width: calc(100% - 32px);
  z-index: 900;
  // --
  // --
  ${mediaQueryMinW('496')} {
    /* max-width: 480px; */
  }

  // --
`

export const ContainerToolTitle = styled.h1`
  // --
  --color: ${ ({theme}) => theme.colors.riverBed.c800 };
  --border-style: solid;
  --border-size: 2px;
  --border-color-01: ${ ({theme}) => theme.colors.riverBed.c050 };
  --border-color-02: ${ ({theme}) => theme.colors.riverBed.c100 };
  --bg-color-01: ${ ({theme}) => theme.colors.white }F0;
  ${fncTransition({})}
  ${ShadowEffect_03}
  // --
  line-height: 1;
  text-align: center;
  color: var(--color);
  font-weight: 800;
  /* text-shadow: 2px 2px 2px ${ ({theme}) => theme.colors.riverBed.c400 }FF; */
  width: 100%;
  padding: 8px ;
  background: var(--bg-color-01);
  border-radius: 48px;
  border-left: var(--border-style) var(--border-size) var(--border-color-01);
  border-top: var(--border-style) var(--border-size) var(--border-color-01);
  border-bottom: var(--border-style) var(--border-size) var(--border-color-02);
  border-right: var(--border-style) var(--border-size) var(--border-color-02);
  font-size: 20px;
  // --
  // --
  ${mediaQueryMinW('336')} {
    font-size: 20px;
  }
  ${mediaQueryMinW('412')} {
    font-size: 24px;
  }
  ${mediaQueryMinW('496')} {
    padding: 8px 16px;
    font-size: 28px;
    max-width: fit-content;
  }
  // --
`
// --------