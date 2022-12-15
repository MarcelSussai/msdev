import styled from 'styled-components'
import {
  fncTransition,
  mediaQueryMinW,
  ShadowEffect_03
} from '../../styles/theme/snippetsCSS'

export const ContainerToolTitle = styled.h1`
  // --
  ${fncTransition({})}
  ${ShadowEffect_03}
  // --
  line-height: 1.2;
  font-size: 24px;
  text-align: center;
  color: ${ ({theme}) => theme.colors.riverBed.c750 };
  font-weight: 900;
  width: 100%;
  padding: 24px;
  background: ${ ({theme}) => theme.colors.riverBed.c300 };
  border-radius: 8px;
  // --
  ${mediaQueryMinW('412')} {
    font-size: 32px;
  }
  ${mediaQueryMinW('520')} {
    font-size: 40px;
  }
  ${mediaQueryMinW('632')} {
    font-size: 48px;
  }
  // --
`