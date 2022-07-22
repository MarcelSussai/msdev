import colors from "../src/styles/theme/colors"
import styled from 'styled-components'
import Head from '../src/components/head'
import MainStyledTest from "../src/styles/mainStyledTest"

const {
  pictonBlue,
  celery,
  riverBed,
  paleGoldenRod,
  eucalyptus,
  majorelleBlue,
  fireOpal,
  richLilac,
  ripeMango,
} = colors


const ContainerColorsAll = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
`

const ContainerColor = styled.div<any>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(14, 48px);
  justify-content: flex-start;
  border: solid 2px #000;
  position: relative;
  color: ${riverBed.x050};

  &:before {
    ${({text}) => `content: '${text}';`}
    position: absolute;
    top: -48px;
    left: 0;
    font-weight: 900;
    line-height: 1;
  }
`

const Color = styled.div<any>`
  width: 100%;
  height: 24px;
  background-color: ${({cor}) => cor};
  ${
    ({main}) => main ? `
      border-left: solid 3px #000 ;
      border-right: solid 2px #000 ;
    ` : `
      border-left: solid 1px #000 ;
    `
  }
  position: relative;
  &:before {
    ${({text}) => `content: '${text}';`}
    position: absolute;
    top: -24px;
    line-height: 1;
  }
`

const ColorComponent = (props: any) => {
  const {
    cor,
    nameColor
  } = props

  return (
    <ContainerColor text={nameColor}>
      <Color cor={cor.x900} text={'x900'} />
      <Color cor={cor.x800} text={'x800'} />
      <Color cor={cor.x700} text={'x700'} />
      <Color cor={cor.x650} text={'x650'} />
      <Color cor={cor.x600} text={'x600'} />
      <Color cor={cor.x550} text={'x550'} />
      <Color cor={cor.x500} text={'x500'} main />
      <Color cor={cor.x400} text={'x400'} />
      <Color cor={cor.x300} text={'x300'} />
      <Color cor={cor.x250} text={'x250'} />
      <Color cor={cor.x200} text={'x200'} />
      <Color cor={cor.x150} text={'x150'} />
      <Color cor={cor.x100} text={'x100'} />
      <Color cor={cor.x050} text={'x050'} />
    </ContainerColor>
  )
}

const TestColors = () => {
  return (
    <>
      <Head title="Testando Cores" />

      <MainStyledTest>
        <ContainerColorsAll>
          <ColorComponent cor={pictonBlue}    nameColor={"pictonBlue"} />
          <ColorComponent cor={celery}        nameColor={"celery"} />
          <ColorComponent cor={riverBed}      nameColor={"riverBed"} />
          <ColorComponent cor={paleGoldenRod} nameColor={"paleGoldenRod"} />
          <ColorComponent cor={eucalyptus}    nameColor={"eucalyptus"} />
          <ColorComponent cor={majorelleBlue} nameColor={"majorelleBlue"} />
          <ColorComponent cor={fireOpal}      nameColor={"fireOpal"} />
          <ColorComponent cor={richLilac}     nameColor={"richLilac"} />
          <ColorComponent cor={ripeMango}     nameColor={"ripeMango"} />
        </ContainerColorsAll>
      </MainStyledTest>

    </>
  )
}

export default TestColors