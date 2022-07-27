import styled from "styled-components"
import { colors } from "../../styles/theme"



const Svg = styled.svg`
  margin: 0;
`

const AbilityIcon = (props: any) => {

  

  return(
    <Svg
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1818 0H1.81818C0.818182 0 0 0.6 0 1.33333V12C0
          12.7333 0.818182 13.3333 1.81818 13.3333H18.1818C19.1818
          13.3333 20 12.7333 20 12V1.33333C20 0.6 19.1818 0 18.1818
          0ZM18.1818 12H1.81818V2.66667H18.1818V12Z"
        fill={colors.ripeMango.x200}
      />
      <path
        d="M4.54559
          3.99951V10.6662H8.18196V9.33285H6.36378V5.33285H8.18196V3.99951H4.54559ZM13.6365
          9.33285H11.8183V10.6662H15.4547V3.99951H11.8183V5.33285H13.6365V9.33285Z"
        fill={colors.ripeMango.x500}
      />
    </Svg>
  )
}

export default AbilityIcon