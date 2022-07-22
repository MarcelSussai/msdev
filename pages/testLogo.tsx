import styled from "styled-components";
import MainStyledTest from "../src/styles/mainStyledTest";
import LogoContainer from '../src/components/logo/logoContainer';
import Logotype from "../src/components/logo/logotype";
import { AppCtx } from "../src/contexts/ctxGlobal";
import { useContext } from "react";

const DivContainerOfLogo = styled.div<any>`
  width: 240px;
  padding: 0;
`

const TestLogo = () => {

  const context = useContext(AppCtx)
  const { ctx_Test, setCtx_Test, texts } = context


  return (
    <MainStyledTest>
      <DivContainerOfLogo>
        <LogoContainer />
      </DivContainerOfLogo>
      <Logotype />
        <p>{ ctx_Test }</p>
    </MainStyledTest>
  )
}

export default TestLogo