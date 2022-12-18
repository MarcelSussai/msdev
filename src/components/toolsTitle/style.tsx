import styled from 'styled-components'
import {
  fncTransition,
  mediaQueryMinW,
} from '../../styles/theme/snippetsCSS'

// --------


// --------
export const ContainerAll = styled.div`
  // --
  --color-01: ${ ({theme}) => theme.colors.riverBed.c500 }64;
  --color-02: ${ ({theme}) => theme.colors.riverBed.c050 }00;
  --border-color: ${ ({theme}) => theme.colors.riverBed.c150 }80;
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c850 }48;
  // --
  ${fncTransition({})}
  // --
  width: calc(100% - 32px);

  padding: 16px 20px;
  margin: 16px;

  position: fixed;
  z-index: 900;

  background:
    linear-gradient( -160deg, var(--color-01), var(--color-02), var(--color-01) )
  ;
  backdrop-filter: blur(1.4px);

  border-radius: 80px;
  border: solid 1px var(--border-color);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  box-shadow: 2px 2px 8px var(--shadow-color-01);
  // --
  // --
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
  // --
  ${fncTransition({})}
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