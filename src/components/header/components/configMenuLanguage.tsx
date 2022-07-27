import styled from "styled-components"
import { colors } from "../../../styles/theme"
import { fncTransition } from "../../../styles/theme/snippetsCSS"


const ContainerLanguageSettings = styled.div`
  ${fncTransition({})}
  width: 80px;
  height: 100%;
  background: ${colors.riverBed.x500};
`

const Language = styled.button<any>`
  ${fncTransition({})}
  width: 40px;
  height: 100%;
  background: ${
    ({on}) =>
    on === 'true' ?
    colors.riverBed.x400 :
    colors.riverBed.x600
  };
  border: solid 1px ${
    ({on}) =>
    on === 'true' ?
    colors.riverBed.x400 :
    colors.riverBed.x600
  };
  font-size: 12px;
  font-weight: 900;
  color: ${
    ({on}) =>
    on === 'true' ?
    colors.ripeMango.x500 :
    colors.riverBed.x200
  };
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 8px ${colors.paleGoldenRod.x500}40;
    color: ${colors.paleGoldenRod.x500};
    border-left: solid 1px ${colors.paleGoldenRod.x500};
    border-right: solid 1px ${colors.paleGoldenRod.x500};
  }
`

const ConfigMenuLanguage = (props: any) => {
  return (
  <ContainerLanguageSettings>
    <Language on={'true'}>BR</Language>
    <Language on={'false'}>EN</Language>
  </ContainerLanguageSettings>
)

}

export default ConfigMenuLanguage;