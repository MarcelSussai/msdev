import styled from 'styled-components'
import {
  fncTransition,
  fontMuseo,
  animation_01,
  animation_02,
  animation_03,
  animation_04,
  GlassEffect_01,
  ShadowEffect_01,
} from '../../styles/theme/snippetsCSS'
// --------

// --------
export const Header = styled.header`
  // --
  // --
  position: relative;
  width: 100%;
  // --
  // --
`

export const GlassBehindLogotype = styled.div`
  // --
  --size-radius-01: 4px;
  ${fncTransition({})}
  ${GlassEffect_01}
  // --
  height: 104px;
  position: fixed;
  top: 16px;
  padding-top: 2px;
  z-index: 900;
  opacity: 0;
  width: 0%;
  animation: ${animation_03} 1s ease-in-out forwards;
  border: solid 1px ${ ({theme}) => theme.colors.riverBed.c050 }48;
  border-left: none;
  border-top-right-radius: var(--size-radius-01);
  border-bottom-right-radius: var(--size-radius-01);
  // --
  // --
`

export const ContainerLogo = styled.div`
  // --
  --size: 72px;
  ${fncTransition({})}
  // --
  width: var(--size);
  height: var(--size);
  position: absolute;
  left: 4px;
  z-index: 600;
  transform: scale(0);
  animation: ${animation_02} 1s .8s ease-in-out forwards;
  // --
  // --
`

export const ContainerAllLogo = styled.div`
  // --
  --bg-color-01: ${ ({theme}) => theme.colors.riverBed.c900 };
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 };
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 };
  ${fncTransition({})}
  ${ShadowEffect_01}
  // --
  position: relative;
  background: var(--bg-color-01);
  height: 56px;
  margin-top: 22px;
  padding: 0px;
  display: flex;
  width: 0%;
  opacity: 0;
  max-width: 264px;
  align-items: center;
  border: solid 2px;
  border-image-source: linear-gradient(90deg, var(--bg-color-02), var(--bg-color-03));
  border-image-slice: 1;
  border-left: none;
  border-right: none;
  overflow: hidden;
  animation: ${animation_01} 1s .6s ease-in-out forwards;
  z-index: 900;
  // --
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background:${ ({theme}) => theme.colors.paleGoldenRod.c500 };
  }
  // --
  // --
`

export const ContainerLogotype = styled.h1`
  // --
  --margin-left: 76px;
  ${fncTransition({})}
  // --
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  transform-origin: left center;
  transform: scale(0);
  animation: ${animation_02} 1s 1s ease-in-out forwards;
  // --
  // --
`

export const ContainerMarcelSussai = styled.div`
  // --
  --font-size: 24px;
  ${fncTransition({})}
  // --
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 4px;
  // --
  // --
`

export const Marcel = styled.div`
  // --
  --color-text: ${ ({theme}) => theme.colors.pictonBlue.c500 };
  ${fncTransition({})}
  ${fontMuseo}
  // --
  color: var(--color-text);
  margin-left: var(--margin-left);
  line-height: 1;
  font-size: var(--font-size);
  // --
  // --
`

export const Sussai = styled.div`
  // --
  --color-text: ${ ({theme}) => theme.colors.celery.c500 };
  ${fncTransition({})}
  ${fontMuseo}
  // --
  color: var(--color-text);
  line-height: 1;
  font-size: var(--font-size);
  // --
  // --
`

export const DescriptionJob = styled.div`
  // --
  --color-text: ${ ({theme}) => theme.colors.paleGoldenRod.c500 };
  ${fncTransition({})}
  // --
  color: var(--color-text);
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: end;
  justify-content: flex-end;
  // --
  // --
`

export const AestheticsNav = styled.div`
  // --
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 };
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 };
  ${fncTransition({})}
  // --
  position: fixed;
  transform: translate3d(0, -100%, 0);
  width: 100%;
  height: 72px;
  background: ${ ({theme}) => theme.colors.riverBed.c850 };
  z-index: 1;
  animation: ${animation_04} .8s ease-in-out forwards;
  box-shadow: 0 2px 12px 4px ${ ({theme}) => theme.colors.riverBed.c850 }D0;
  // --
  &:after {
    content: '';
    z-index: 3;
    position: absolute;
    background: linear-gradient(-90deg, var(--bg-color-02), var(--bg-color-03));
    height: 6px;
    width: 100%;
    bottom: 0;
    left: 0px;
  }
  // --
  // --
`

