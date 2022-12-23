import styled from 'styled-components'
import {
  animation_10,
  animation_11,
  animation_12,
  fncTransition,
  mediaQueryMinW,
  minWidthForAdjustMenu,
} from '../../../styles/theme/snippetsCSS'

export const ContainerAll = styled.section`
  // --
  ${fncTransition({})}
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  opacity: 0;
  animation: ${animation_10} 1s 1.4s ease-in-out forwards;
  
  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    padding: 0px;
  }
`

export const ContainerText = styled.div`
  // --
  ${fncTransition({})}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.h2`
  // --
  ${fncTransition({})}
  color: ${ ({theme}) => theme.colors.riverBed.c600 };
  font-size: 16px;
  line-height: 1.3;
  text-align: start;
  .pictonBlue, .celery, .paleGoldenRod { font-weight: 800; }
  .pictonBlue    { color: ${ ({theme}) => theme.colors.pictonBlue.c600 }; }
  .celery        { color: ${ ({theme}) => theme.colors.celery.c650 }; }
  .paleGoldenRod { color: ${ ({theme}) => theme.colors.paleGoldenRod.c650 }; }
  
  ${mediaQueryMinW('372')}  { font-size: 20px; }
  ${mediaQueryMinW('400')}  { font-size: 22px; }
  ${mediaQueryMinW('480')}  { font-size: 24px; }
  ${mediaQueryMinW('600')}  { font-size: 30px; }
  ${mediaQueryMinW('720')}  { font-size: 40px; }
  ${mediaQueryMinW('920')}  { font-size: 40px; }
  ${mediaQueryMinW('1216')} { font-size: 48px; }
  ${mediaQueryMinW('1360')} { font-size: 52px; }
  ${mediaQueryMinW('1600')} { font-size: 56px; }
  ${mediaQueryMinW('1712')} { font-size: 64px; }
  ${mediaQueryMinW('1800')} { font-size: 72px; }
  ${mediaQueryMinW('2160')} { font-size: 80px; }
`

export const ContainerGlobeAndCircles = styled.div`
  // --
  ${fncTransition({})}
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerGlobe = styled.div`
  // --
  ${fncTransition({})}
  width: 80px;
  position: absolute;
  transform: translate3d(0, 0, 0);
  animation: ${animation_12} 4s ease-in-out infinite;
  
  ${mediaQueryMinW('372')}  { width: 100px; }
  ${mediaQueryMinW('400')}  { width: 120px; }
  ${mediaQueryMinW('480')}  { width: 160px; }
  ${mediaQueryMinW('720')}  { width: 240px; }
  ${mediaQueryMinW('1216')} { width: 320px; }
`

export const ContainerCircles = styled.div`
  // --
  --size: 128px;
  ${fncTransition({})}
  width: var(--size);
  height: var(--size);
  transform: rotate(360deg);
  animation: ${animation_11} 16s linear infinite;
  
  ${mediaQueryMinW('372')}  { --size: 160px; }
  ${mediaQueryMinW('400')}  { --size: 192px; }
  ${mediaQueryMinW('480')}  { --size: 240px; }
  ${mediaQueryMinW('720')}  { --size: 320px; }
  ${mediaQueryMinW('1216')} { --size: 480px; }
`

export const Ornament_01 = styled.div`
  // --
  ${fncTransition({})}
  position: absolute;
  z-index: -1;
  left: -8px;
  width: calc(100% + 8px);
  /* width: 100%; */
  /* height: 64px; */
  /* height: 16%; */
  height: 72%;
  background: ${ ({theme}) => theme.colors.riverBed.c050 }64;
  border: solid 8px ${ ({theme}) => theme.colors.riverBed.c050 }80;
  border-left: none;
  border-right: none;

  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    left: -280px;
    width: calc(100% + 280px);
  }
`