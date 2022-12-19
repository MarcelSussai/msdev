import styled from 'styled-components'
import {
  fncTransition,
  mediaQueryMinW,
} from '../../styles/theme/snippetsCSS'
// --------

interface IMainColorPiece {
  isMainColor?: boolean
  color?: string
  borderColor?: string
  isBorded?: boolean
  colorText?: string
}

interface ICubeColor {
  color?: string
  isMain?: boolean
  borderColor?: string
}

interface ITipsTones { isMain?: boolean }
// --------

export const ContainerAll = styled.section`
  // --
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c350 }A0;
  --shadow-color-02: ${ ({theme}) => theme.colors.white }96;
  --shadow-color-03: ${ ({theme}) => theme.colors.riverBed.c350 }A0;
  --bg-color: ${ ({theme}) => theme.colors.white };
  --border-color: ${ ({theme}) => theme.colors.riverBed.c050 };

  ${fncTransition({})}
  width: calc(100% - 48px);
  margin: 24px;
  padding: 12px;
  background: var(--bg-color);
  border: solid 1px var(--border-color);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow:
    4px 4px 6px 2px var(--shadow-color-01),
    -4px -4px 6px 2px var(--shadow-color-02),
    inset -0px -0px 4px 2px var(--shadow-color-03)
  ;
`

export const MainColorsOfTheme = styled.section`
  // --
  ${fncTransition({})}
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 12px;

  ${mediaQueryMinW('464')} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQueryMinW('664')} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mediaQueryMinW('864')} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${mediaQueryMinW('1080')} {
    grid-template-columns: repeat(6, 1fr);
  }
  ${mediaQueryMinW('1408')} {
    grid-template-columns: repeat(8, 1fr);
  }
  ${mediaQueryMinW('2200')} {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const MainColorPiece = styled.div<IMainColorPiece>`
  // --
  ${fncTransition({})}
  width: ${ ({isMainColor}) => isMainColor ? '48px' : '100%' };
  height: 68px;
  padding: 4px;
  background: ${
    ({theme, color}) => color !== undefined ? color :
    theme.colors.riverBed.c100
  };
  color: ${ ({theme, colorText}) => colorText || theme.colors.black };
  border: ${
    ({borderColor, isBorded}) => isBorded ?
    `1px solid ${borderColor}` : `unset`
  };
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
`

export const TextMainColorInside = styled.div`
  // --
  ${fncTransition({})}
  padding: 4px 16px 4px 8px;
  background-color: ${ ({theme}) => theme.colors.white }A8;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

export const TitleH2 = styled.h2`
  // --
  ${fncTransition({})}
  width: 100%;
  padding: 8px;
  background: ${ ({theme}) => theme.colors.riverBed.c100 };
  color: ${ ({theme}) => theme.colors.riverBed.c450};
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  font-size: 14px;

  ${mediaQueryMinW('352')} { font-size: 16px; }
  ${mediaQueryMinW('400')} { font-size: 20px; }
  ${mediaQueryMinW('480')} { font-size: 24px; }
`

export const TitleH3 = styled.h3`
  // --
  --bg-color-01: ${ ({theme}) => theme.colors.riverBed.c100 }80;
  --bg-color-02: ${ ({theme}) => theme.colors.riverBed.c100 }80;
  --color-01: ${ ({theme}) => theme.colors.riverBed.c600 };
  --border-color: ${ ({theme}) => theme.colors.white };
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c350 }64;

  ${fncTransition({})}
  width: 100%;
  padding: 8px;
  background: linear-gradient(160deg, var(--bg-color-01), var(--bg-color-02));
  color: var(--color-01);
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  border: solid 4px var(--border-color);
  box-shadow: 0 0 8px 2px var(--shadow-color-01);
`

export const ContainerGradientAll = styled.section`
  // --
  ${fncTransition({})}
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`

export const ContainerGradient = styled.div`
  // --
  ${fncTransition({})}
  width: 100%;
  display: grid;
  grid-template-columns: repeat(19, 1fr);
`

export const ExplainGradient = styled.div`
  // --
  ${fncTransition({})}
  width: 100%;
  flex: 1;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(6, 1fr);

  ${mediaQueryMinW('400')} {
    grid-template-columns: repeat(9, 1fr);
  } 
  ${mediaQueryMinW('640')} {
    grid-template-columns: repeat(10, 1fr);
  } 
  ${mediaQueryMinW('1296')} {
    grid-template-columns: repeat(19, 1fr);
  }
`

export const ContainerExplainAll = styled.div`
  // --
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`

export const ContainerExplain = styled.div`
  // --
  padding-right: 12px;
  border-right: solid 1px ${ ({theme}) => theme.colors.riverBed.c200 };
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`

export const CubeColor = styled.div<ICubeColor>`
  // --
  height: 32px;
  min-width: ${ ({isMain}) => isMain ? '80px' : '4px' };
  background: ${ ({color}) => color };
  ${ ({isMain}) => isMain ? `border: solid 2px #FFFFFF96;` : '' }
`

export const TipsTones = styled.div<ITipsTones>`
  // --
  --color-01: ${ ({theme}) => theme.colors.riverBed.c600 };

  width: 100%;
  color: var(--color-01);
  font-size: 14px;
  line-height: 1;
  font-weight: ${ ({isMain}) => isMain ? '600' : '300' };
`