import styled from "styled-components"
import Head from '../src/components/head'
import AbilityIcon from "../src/components/icons/abilityIcon"
import AreaOfClientIcon from "../src/components/icons/areaOfClientIcon"
import ContactIcon from "../src/components/icons/contactIcon"
import HomeIcon from "../src/components/icons/homeIcon"
import PeopleIcon from "../src/components/icons/peopleIcon"
import PortfolioIcon from "../src/components/icons/portfolioIcon"
import PostsIcon from "../src/components/icons/postsIcon"
import WhatIDoIcon from "../src/components/icons/whatIDoIcon"
import MainStyledTest from "../src/styles/mainStyledTest"
import { colors } from "../src/styles/theme"


const ContainerIcon = styled.div<any>`
  width: 40px;
  height: 40px;
  padding: 8px;
  background: ${colors.riverBed.x650};
  display: flex;
  justify-content: center;
  align-items: center;
`


const TestIcons = (props: any) => {
  const {} = props
  return (
    <>
      
      <Head title="Testando Icones" />
      <MainStyledTest>
        <ContainerIcon> <HomeIcon /> </ContainerIcon>
        <ContainerIcon> <PeopleIcon /> </ContainerIcon>
        <ContainerIcon> <AbilityIcon /> </ContainerIcon>
        <ContainerIcon> <PostsIcon /> </ContainerIcon>
        <ContainerIcon> <WhatIDoIcon /> </ContainerIcon>
        <ContainerIcon> <PortfolioIcon /> </ContainerIcon>
        <ContainerIcon> <ContactIcon /> </ContainerIcon>
        <ContainerIcon> <AreaOfClientIcon /> </ContainerIcon>
      </MainStyledTest>
    </>
  )
}

export default TestIcons