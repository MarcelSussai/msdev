import styled from "styled-components"
import LogoComponent from "./logo"

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
`


const LogoContainer = (props: any) => {

  const {isHide} = props

  return (
    <Container>
      <LogoComponent isHide={isHide} />
    </Container>
  )
}

export default LogoContainer