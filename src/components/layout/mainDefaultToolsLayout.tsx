import styled from 'styled-components'
import { Main } from '../../styles/MainStyled'
import { animation_10, mediaQueryMinW } from '../../styles/theme/snippetsCSS'
import ToolsTitle from '../toolsTitle'
import Head from './../head'

const StyledMain = styled(Main)`
  // --
  padding: 112px 0px 0px 0px;
  gap: 32px;
  opacity: 1;
  animation: unset;

  ${mediaQueryMinW('336')} {
    padding: 116px 0px 0px 0px;
  }
  ${mediaQueryMinW('412')} {
    padding: 122px 0px 0px 0px;
  }
  ${mediaQueryMinW('496')} {
    padding: 132px 0px 0px 0px;
  }
`

const MainDefaultToolsLayout = (props: any) => {

  const {
    children,
    title,
    text
  } = props



  return (
    <>
      <Head title={title} />
      <ToolsTitle>{text}</ToolsTitle>
      <StyledMain>
        {children}
      </StyledMain>
    </>
  )
}

export default MainDefaultToolsLayout