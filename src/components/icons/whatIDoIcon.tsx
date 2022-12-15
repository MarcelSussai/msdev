import { useContext } from 'react'
import styled from 'styled-components'
import { AppCtx } from '../../contexts/ctxGlobal'

const Svg = styled.svg`
  margin: 0;
`

const WhatIDoIcon = (props: any) => {
  
  const {theme} = useContext(AppCtx)
  return (
    <Svg
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.6667 0C17.5833 0 18.3333 0.741667 18.3333 1.66667V10C18.3333
          10.925 17.5917 11.6667 16.6667 11.6667H20V13.3333H0V11.6667H3.33333C2.41667
          11.6667 1.66667 10.925 1.66667 10V1.66667C1.66667 0.741667 2.40833 0 3.33333
          0H16.6667ZM16.6667 1.66667H3.33333V10H16.6667V1.66667Z"
        fill="black"
      />
      <path
        d="M13.3334 9.60693H5.83344V8.85693H13.3334V9.60693ZM13.3334
          8.10693H5.83344V7.35693H13.3334V8.10693ZM13.3334
          5.85693H5.83344V2.10693H13.3334V5.85693Z"
        fill="black"
      />
    </Svg>
  )
}

export default WhatIDoIcon