import { useContext } from 'react'
import styled from 'styled-components'
import { AppCtx } from '../../contexts/ctxGlobal'

const Svg = styled.svg`
  margin: 0;
`

const PostsIcon = () => {
  
  const {theme} = useContext(AppCtx)
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path
        d="M15.5557 15.5554H4.44458V14.4443H15.5557V15.5554ZM15.5557
          13.3332H4.44458V12.2221H15.5557V13.3332ZM15.5557
          9.99989H4.44458V4.44434H15.5557V9.99989Z"
        fill={theme.colors?.paleGoldenRod?.c200}
      />
      <path
        d="M17.7778 2.22222V17.7778H2.22222V2.22222H17.7778ZM20 0H0V20H20V0Z"
      fill={theme.colors?.paleGoldenRod?.c500}
      />
    </Svg>
  )
}

export default PostsIcon