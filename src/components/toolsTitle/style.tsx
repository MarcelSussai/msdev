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
  padding: 16px 20px;
  margin: 16px;
  border-radius: 80px;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c150 }80;
  position: fixed;
  width: calc(100% - 32px);
  z-index: 900;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // --
  // --
  ${mediaQueryMinW('496')} {
    /* max-width: 480px; */
  }

  // --
`

export const ContainerToolTitle = styled.h1`
  // --
  --color: ${ ({theme}) => theme.colors.riverBed.c600 };
  --border-style: solid;
  --border-size: 2px;
  --border-color-01: ${ ({theme}) => theme.colors.riverBed.c100 };
  --border-color-02: ${ ({theme}) => theme.colors.riverBed.c150 };
  --bg-color-01: ${ ({theme}) => theme.colors.white }F0;
  ${fncTransition({})}
  /* ${ShadowEffect_03} */
  // --
  line-height: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color);
  font-weight: 900;
  /* text-shadow: 2px 2px 2px ${ ({theme}) => theme.colors.riverBed.c400 }FF; */
  width: 100%;
  padding: 12px 16px;
  background: var(--bg-color-01);
  border-radius: 48px;
  border-left: var(--border-style) var(--border-size) var(--border-color-01);
  border-top: var(--border-style) var(--border-size) var(--border-color-01);
  border-bottom: var(--border-style) var(--border-size) var(--border-color-02);
  border-right: var(--border-style) var(--border-size) var(--border-color-02);
  font-size: 16px;
  height: 100%;
  // --
  // --
  ${mediaQueryMinW('336')} {
    font-size: 18px;
  }
  ${mediaQueryMinW('412')} {
    font-size: 24px;
  }
  ${mediaQueryMinW('496')} {
    padding: 16px 24px;
    font-size: 28px;
    max-width: fit-content;
  }
  // --
`
// --------