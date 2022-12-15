import styled from 'styled-components'
import { Main } from '../../styles/MainStyled'
import Head from './../head'

const StyledMain = styled(Main)`
  padding: 16px;
`

const MainDefaultToolsLayout = (props: any) => {

  const {
    children,
    title,
  } = props



  return (
    <>
      <Head title={title} />
      <StyledMain>
        {children}
      </StyledMain>
    </>
  )
}

export default MainDefaultToolsLayout