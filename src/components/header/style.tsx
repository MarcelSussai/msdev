import styled from 'styled-components'
import {
  fncTransition,
  fontMuseo,
  animation_01,
  animation_02,
  animation_03,
  animation_04,
} from '../../styles/theme/snippetsCSS'
// --------

// --------
export const Header = styled.header`
  // --
  position: relative;
  width: 100%;
  z-index: 900;
`

export const GlassBehindLogotype = styled.div`
  // --
  --size-radius-01: 4px;
  --color-01: ${ ({theme}) => theme.colors.riverBed.c550 }40;
  --color-02: ${ ({theme}) => theme.colors.riverBed.c050 }40;

  ${fncTransition({})}
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
  backdrop-filter: blur(1.6px);
  background: linear-gradient(160deg, var(--color-01), var(--color-02));
  box-shadow: 0 0 8px ${ ({theme}) => theme.colors.riverBed.c850 }32;
`

export const ContainerLogo = styled.div`
  // --
  --size: 72px;

  ${fncTransition({})}
  width: var(--size);
  height: var(--size);
  position: absolute;
  left: 4px;
  z-index: 600;
  transform: scale(0);
  animation: ${animation_02} 1s .8s ease-in-out forwards;
`

export const ContainerAllLogo = styled.div`
  // --
  --bg-color-01: ${ ({theme}) => theme.colors.riverBed.c900 };
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 };
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 };
  --shadow-color-01: ${ ({theme}) => theme.colors.riverBed.c950 }64;

  ${fncTransition({})}
  width: 0%;
  max-width: 264px;
  height: 56px;
  opacity: 0;
  position: relative;
  overflow: hidden;
  z-index: 900;
  margin-top: 22px;
  padding: 0px;
  background: var(--bg-color-01);
  border-image-source: linear-gradient(-180deg, var(--bg-color-02), var(--bg-color-03));
  border-image-slice: 1;
  border-right: solid 8px;
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 6px var(--shadow-color-01);
  animation: ${animation_01} 1s .6s ease-in-out forwards;

  &:after, &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--bg-color-02), var(--bg-color-03));
  }
  &:after {
    top: 0;
    background: linear-gradient(-90deg, var(--bg-color-02), var(--bg-color-03));
  }
`

export const ContainerLogotype = styled.h1`
  // --
  --margin-left: 76px;

  ${fncTransition({})}
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  transform-origin: left center;
  transform: scale(0);
  animation: ${animation_02} 1s 1s ease-in-out forwards;
`

export const ContainerMarcelSussai = styled.div`
  // --
  --font-size: 24px;

  ${fncTransition({})}
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 4px;
`

export const Marcel = styled.div`
  // --
  --color-text: ${ ({theme}) => theme.colors.pictonBlue.c500 };

  ${fncTransition({})}
  ${fontMuseo}
  color: var(--color-text);
  margin-left: var(--margin-left);
  line-height: 1;
  font-size: var(--font-size);
`

export const Sussai = styled.div`
  // --
  --color-text: ${ ({theme}) => theme.colors.celery.c500 };

  ${fncTransition({})}
  ${fontMuseo}
  color: var(--color-text);
  line-height: 1;
  font-size: var(--font-size);
`

export const DescriptionJob = styled.div`
  // --
  --color-text: ${ ({theme}) => theme.colors.paleGoldenRod.c500 };

  ${fncTransition({})}
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
`

export const AestheticsNav = styled.div`
  // --
  --bg-color-02: ${ ({theme}) => theme.colors.pictonBlue.c500 };
  --bg-color-03: ${ ({theme}) => theme.colors.celery.c500 };

  ${fncTransition({})}
  position: fixed;
  transform: translate3d(0, -100%, 0);
  width: 100%;
  height: 76px;
  background: ${ ({theme}) => theme.colors.riverBed.c850 };
  z-index: 1;
  animation: ${animation_04} .8s ease-in-out forwards;
  box-shadow: 0 2px 8px 2px ${ ({theme}) => theme.colors.riverBed.c600 }D0;

  &:after {
    content: '';
    z-index: 3;
    position: absolute;
    background: linear-gradient(-90deg, var(--bg-color-02), var(--bg-color-03));
    height: 12px;
    width: 100%;
    bottom: 0;
    left: 0px;
  }
`

