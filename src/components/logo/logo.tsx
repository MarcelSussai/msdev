import { useContext } from 'react'
import styled from 'styled-components'
import { AppCtx } from '../../contexts/ctxGlobal'
import { fncTransition } from '../../styles/theme/snippetsCSS'


const Svg = styled.svg`
  // --
  --color-shadow-filter: ${ ({theme}) => theme.colors.riverBed.c950 }64;

  ${fncTransition({})}
  margin: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(4px 4px 4px var(--color-shadow-filter));
`
const Circle = styled.circle`
  // --
  ${fncTransition({})}
  --color-stroke: ${ ({theme}) => theme.colors.paleGoldenRod.c500 };
  --color-fill: ${ ({theme}) => theme.colors.riverBed.c850 };

  /* fill: url('#gradient-circle'); */
  fill: var(--color-fill);
  stroke-width: 1px;
  stroke: var(--color-stroke);
`

const LogoComponent = () => {

  const {theme} = useContext(AppCtx)
  return (
    <Svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82 82"
    >
      {/* <defs>
        <linearGradient id="gradient-circle" gradientTransform='rotate(32)'>
          <stop offset={0} stopColor={theme.colors.riverBed.c950} />
          <stop offset={100} stopColor={theme.colors.riverBed.c800} />
        </linearGradient>
      </defs> */}
      <Circle cx={41} cy={41} r={40} />
      <path
        d="M45.2099 8.05079C42.7525 7.67771
          40.2402 7.97563 37.9376 8.91315C35.0382
          10.0896 32.4255 11.8777 30.277 14.156L5.14758
          39.3402L12.397 46.613L49.2687 9.63052C48.0365
          8.83377 46.6556 8.29632 45.2099 8.05079Z"
        fill={theme.colors.pictonBlue.c500}
      />
      <path
        d="M74.3376 37.1793C74.0161 35.0524 73.0247
          33.0826 71.5068 31.5548C69.9645 30.0359
          67.9802 29.0423 65.8376 28.7159C63.3753
          28.3473 60.8591 28.6335 58.5432 29.5455C55.6334
          30.7037 53.0114 32.4801 50.8596 34.7514L36.7667
          48.7935C36.3776 49.203 35.9073 49.527 35.3856
          49.7449C34.971 49.9263 34.5148 49.992 34.0656
          49.9352C33.6889 49.8884 33.3379 49.72 33.066
          49.4557C32.8201 49.2064 32.6736 48.8763 32.654
          48.5272C32.6256 48.0888 32.7041 47.65 32.8829
          47.2485C33.1042 46.7278 33.4316 46.2587 33.8443
          45.871L47.9449 31.8288C50.2251 29.6852 52.0066
          27.069 53.1639 24.1646C54.0783 21.8626 54.3704
          19.3614 54.0109 16.9114C53.7925 15.4652 53.2726
          14.0807 52.4848 12.8472L26.6796 38.5492C24.3784
          40.707 22.5787 43.3411 21.4071 46.2667C20.4962
          48.5596 20.2323 51.0576 20.6441 53.4895C21.0045
          55.6009 22.0127 57.5487 23.5296 59.0646C25.0466
          60.5804 26.9975 61.5895 29.1136 61.9528C31.5495
          62.3522 34.0483 62.0892 36.347 61.1917C39.2878
          60.036 41.9372 58.2482 44.1069 55.9554L58.3677
          41.7078C58.7189 41.3305 59.1486 41.0343 59.6267
          40.8401C60.022 40.6763 60.4541 40.6211 60.878
          40.6803C61.2547 40.7271 61.6058 40.8955 61.8776
          41.1598C62.1367 41.4185 62.2938 41.7616 62.3201
          42.1264C62.3551 42.5422 62.2978 42.9606 62.1523
          43.3517C61.9645 43.8351 61.6728 44.2716 61.2977
          44.6304L35.8434 70.0128L43.0768 77.2279L68.2564
          52.1119C70.5336 49.9613 72.3122 47.3404 73.4678
          44.4325C74.3899 42.1326 74.6899 39.6313 74.3376
          37.1793Z"
        fill={theme.colors.celery.c500}
      />
    </Svg>
  )
}

export default LogoComponent