import styled from "styled-components"
import { colors } from "../../styles/theme"

const Svg = styled.svg`
  margin: 0;
`

const ContactIcon = (props: any) => (
  <Svg
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 0L9.97504 8.32925L19.9501 0H0Z"
      fill="black"
    />
    <path
      d="M0 13.7658L7.28183 8.37939L9.97504 11.0724L12.9176 8.37939L19.9501 13.7658H0Z"
      fill="black"
    />
    <path
      d="M0 13.7658L6.73315 6.73315L0 0V13.7658Z"
      fill="black"
    />
    <path
      d="M14.3143 6.73315L20 0V13.7658L14.3143 6.73315Z"
      fill="black"
    />
  </Svg>
)

export default ContactIcon