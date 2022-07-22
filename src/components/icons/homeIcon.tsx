import styled from "styled-components"
import { colors } from "../../styles/theme"

const Svg = styled.svg`
  margin: 0;
`

const HomeIcon = (props: any) => (
  <Svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 0L0 10.1L1.1 11.2L10 2.25L18.9 11.25L20 10.15L10 0Z"
      fill={colors.ripeMango.x500}
    />
    <path
      d="M9.99993 3.59961L3.04993 10.5996V19.1496C3.04993 19.5996
        3.39993 19.9496 3.84993
        19.9496H9.49993V13.4996H12.6499V19.9996H15.5999C16.4499
        19.9996 17.1499 19.2996 17.1499 18.3996V10.8496L9.99993 3.59961Z"
      fill={colors.ripeMango.x200}
    />
  </Svg>
)

export default HomeIcon