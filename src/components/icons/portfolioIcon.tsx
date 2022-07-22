import styled from "styled-components"
import { colors } from "../../styles/theme"

const Svg = styled.svg`
  margin: 0;
`

const PortfolioIcon = (props: any) => (
  <Svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.00006 12H1.00006V18C1.00006 18.5304 1.21077
        19.0391 1.58585 19.4142C1.96092 19.7893 2.46963 20
        3.00006 20H17.0001C17.5305 20 18.0392 19.7893 18.4143
        19.4142C18.7893 19.0391 19.0001 18.5304 19.0001
        18V12H11.0001V14H9.00006V12Z"
      fill={colors.ripeMango.x200}
    />
    <path
      d="M9 11H0V5C0 3.9 0.9 3 2 3H6V2C6 1.46957 6.21071
        0.960859 6.58579 0.585786C6.96086 0.210714 7.46957
        0 8 0H12C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893
        0.960859 14 1.46957 14 2V3H18C18.5304 3 19.0391 3.21071
        19.4142 3.58579C19.7893 3.96086 20 4.46957 20
        5V11H11V9H9V11ZM12 3V2H8V3H12Z"
      fill={colors.ripeMango.x500}
    />
  </Svg>
)

export default PortfolioIcon