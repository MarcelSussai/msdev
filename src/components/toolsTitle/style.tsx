import styled from 'styled-components'
import {
  fncTransition,
  GlassEffect_01,
  GlassEffect_02,
  GlassEffect_03,
  GlassEffect_04,
  GlassEffect_05,
  mediaQueryMinW,
  ShadowEffect_03
} from '../../styles/theme/snippetsCSS'

// --------
// --------
export const ContainerAll = styled.div`
  // --
  ${fncTransition({})}
  ${GlassEffect_01}
  // --
  padding: 24px;
  margin: 16px;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c100 }80;
  position: fixed;
  width: calc(100% - 32px);
  // --
  // --
  ${mediaQueryMinW('496')} {
    /* max-width: 480px; */
  }

  // --
`

export const ContainerToolTitle = styled.h1`
  // --
  --color: ${ ({theme}) => theme.colors.riverBed.c550 };
  --border-style: solid;
  --border-size: 1px;
  --border-color-01: ${ ({theme}) => theme.colors.riverBed.c250 };
  --border-color-02: ${ ({theme}) => theme.colors.riverBed.c100 };
  --bg-color-01: ${ ({theme}) => theme.colors.riverBed.c200 };
  ${fncTransition({})}
  ${ShadowEffect_03}
  // --
  line-height: 1;
  text-align: center;
  color: var(--color);
  font-weight: 900;
  width: 100%;
  padding: 8px ;
  background: var(--bg-color-01);
  border-radius: 8px;
  border-left: var(--border-style) var(--border-size) var(--border-color-01);
  border-top: var(--border-style) var(--border-size) var(--border-color-01);
  border-bottom: var(--border-style) var(--border-size) var(--border-color-02);
  border-right: var(--border-style) var(--border-size) var(--border-color-02);
  font-size: 18px;
  // --
  // --
  ${mediaQueryMinW('336')} {
    font-size: 20px;
  }
  ${mediaQueryMinW('412')} {
    font-size: 26px;
  }
  ${mediaQueryMinW('496')} {
    padding: 8px 16px;
    font-size: 32px;
    max-width: fit-content;
  }
  // --
`
// --------