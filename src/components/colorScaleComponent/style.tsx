import styled from 'styled-components'
import {
  fncTransition,
  GlassEffect_07,
  mediaQueryMinW,
  ShadowEffect_04,
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
  ${fncTransition({})}
  ${ShadowEffect_04}
  // --
  width: calc(100% - 48px);
  margin: 24px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${ ({theme}) => theme.colors.white };
  // --
  // --
`

export const MainColorsOfTheme = styled.section`
  // --
  ${fncTransition({})}
  // --
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 12px;
  // --
  // --
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
  // --
`

export const MainColorPiece = styled.div<IMainColorPiece>`
  // --
  ${fncTransition({})}
  // --
  width: ${ ({isMainColor}) => isMainColor ? '48px' : '100%' };
  height: 68px;
  border: ${ ({borderColor, isBorded}) => isBorded ? `1px solid ${borderColor}` : `unset` };
  background: ${({theme, color}) => color !== undefined ? color : theme.colors.riverBed.c100};
  color: ${ ({theme, colorText}) => colorText || theme.colors.black };
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  // --
  // --
`

export const TextMainColorInside = styled.div`
  // --
  ${fncTransition({})}
  // --
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px 4px 8px;
  background-color: ${ ({theme}) => theme.colors.white }A8;
  font-size: 13px;
  font-weight: 500;
  border-radius: 24px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  // --
  // --
`

export const TitleH2 = styled.h2`
  // --
  ${fncTransition({})}
  // --
  font-weight: 700;
  font-size: 14px;
  padding: 8px;
  width: 100%;
  background: ${ ({theme}) => theme.colors.riverBed.c100 };
  text-align: center;
  line-height: 1.2;
  color: ${ ({theme}) => theme.colors.riverBed.c450};
  // --
  // --
  ${mediaQueryMinW('352')} {
    font-size: 16px;
  }
  ${mediaQueryMinW('400')} {
    font-size: 20px;
  }
  ${mediaQueryMinW('480')} {
    font-size: 24px;
    
  }
  // --
`

export const TitleH3 = styled.h3`
  // --
  ${fncTransition({})}
  ${GlassEffect_07}
  // --
  font-size: 24px;
  font-weight: 300;
  width: 100%;
  padding: 8px;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c100 };
  text-align: center;
  color: ${ ({theme}) => theme.colors.riverBed.c600 };
  /* background: ${ ({theme}) => theme.colors.riverBed.c100 }; */
  // --
  // --
  // --
`

export const ContainerGradientAll = styled.section`
  // --
  ${fncTransition({})}
  // --
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  // --
  // --
  // --
`

export const ContainerGradient = styled.div`
  // --
  ${fncTransition({})}
  // --
  width: 100%;
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  // --
  // --
  // --
  `

export const ExplainGradient = styled.div`
  // --
  ${fncTransition({})}
  // --
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  // --
  // --
  ${mediaQueryMinW('400')} {
    grid-template-columns: repeat(9, 1fr);
  } 
  ${mediaQueryMinW('640')} {
    grid-template-columns: repeat(10, 1fr);
  } 
  ${mediaQueryMinW('1296')} {
    grid-template-columns: repeat(19, 1fr);
  } 
  // --
`

export const ContainerExplainAll = styled.div`
  // --
  // --
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  width: 100%;
  // --
  // --
  // --
`

export const ContainerExplain = styled.div`
  // --
  // --
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding-right: 12px;
  border-right: solid 1px ${ ({theme}) => theme.colors.riverBed.c200 };
  // --
  // --
  // --
`

export const CubeColor = styled.div<ICubeColor>`
  // --
  // --
  background: ${ ({color}) => color };
  min-width: ${ ({isMain}) => isMain ? '80px' : '4px' };
  ${ ({isMain}) => isMain ? `border: solid 2px #FFFFFF96;` : '' }
  height: 32px;
  // --
  // --
  // --
`

export const TipsTones = styled.div<ITipsTones>`
  // --
  // --
  font-size: 12px;
  line-height: 1;
  font-weight: ${ ({isMain}) => isMain ? '600' : '300' };
  width: 100%;
  color: ${ ({theme}) => theme.colors.riverBed.c600 };
  // --
  // --
  // --
`
// --------