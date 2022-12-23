import styled from 'styled-components'
import {
  animation_10,
  animation_11,
  animation_12,
  animation_13,
  fncTransition,
  mediaQueryMinW,
  minWidthForAdjustMenu,
} from '../../styles/theme/snippetsCSS'

export const ContainerAll = styled.section`
  // --
  ${fncTransition({})}
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  z-index: -1;
  position: relative;
  
  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    gap: 40px;

  }
`

export const ContainerTitleHome = styled.article`
  // --
  ${fncTransition({})}
  width: 100%;
  min-height: 44px;
  position: relative;
  padding: 0;
`

export const OrnamentDiv_01 = styled.div`
  // --
  ${fncTransition({})}
  width: calc(100% + 8px);
  height: 100%;
  position: absolute;
  left: -8px;
  z-index: -2;
  /* background: ${ ({theme}) => theme.colors.white }FF; */
  background: ${ ({theme}) => theme.colors.riverBed.c050 }AE;
  border: solid 4px ${ ({theme}) => theme.colors.riverBed.c050 };
  border-left: none;
  border-right: none;
  box-shadow: 0 2px 4px 2px ${ ({theme}) => theme.colors.riverBed.c950 }16;
  
  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    width: calc(100% + 280px);
    left: -280px;

  }
`

export const TitleHome = styled.h1`
  // --
  ${fncTransition({})}
  padding: 12px 0px 12px 8px;
  color: ${ ({theme}) => theme.colors.riverBed.c600 };
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;

  .bold { font-weight: 800; }
  .pictonBlue {
    font-weight: 800;
    color: ${ ({theme}) => theme.colors.pictonBlue.c600 };
  }
  .celery {
    font-weight: 800;
    color: ${ ({theme}) => theme.colors.celery.c700 };
  }

  ${mediaQueryMinW('400')} {
    font-size: 20px;
  }
  ${mediaQueryMinW('480')} {
    font-size: 20px;
  }
  ${mediaQueryMinW('1076')} {
    font-size: 24px;
  }
  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    padding: 12px 0px 12px 0px;
  }
`
