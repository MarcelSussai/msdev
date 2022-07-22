import styled from 'styled-components'
import Link from 'next/link'
import { colors } from '../../styles/theme'
import { fncTransition } from '../../styles/theme/snippetsCSS'



const ContainerAll = styled.a`
  ${fncTransition({})}
  width: 264px;
  height: 40px;
  padding: 8px 64px 8px 16px;
  position: relative;
  /* border-left: solid 1px ${colors.riverBed.x100}; */
  border: solid 1px ${colors.riverBed.x500};
  border-right: none;
  background: linear-gradient(
    to right,
    ${colors.riverBed.x050}08,
    ${colors.riverBed.x050}32
  );
  backdrop-filter: blur(4px);
  border-radius: 32px;
  box-shadow: inset 0 0 8px ${colors.riverBed.x600}80 ;
  
  display: flex;
  align-items: center;
  gap: 8px;
  /* justify-content: stretch; */

  &.active {
    background: linear-gradient(
      to right,
      ${colors.riverBed.x050}08,
      ${colors.riverBed.x050}32
    );
  }

  span {
    ${fncTransition({})}
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    text-align: right;
    color: ${colors.riverBed.x050};
    
  }

  &:hover {
    box-shadow: inset 16px 0 16px ${colors.riverBed.x300}aa ;
    div {
      ${fncTransition({})}
      background: ${colors.richLilac.x600};
      box-shadow:
        /* 4px 4px 4px ${colors.richLilac.x900}40, */
        inset 0 0 16px ${colors.richLilac.x900}BB;
    }
  }
`

const ContainerIcon = styled.div`
  ${fncTransition({})}
  width: 44px;
  height: 40px;
  background: ${colors.riverBed.x700};
  /* border: solid 1px ${colors.riverBed.x700}; */
  border-left: none;
  color: ${colors.ripeMango.x300};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  /* box-shadow: */
    /* 4px 4px 4px ${colors.richLilac.x900}40, */
    /* inset 0 0 8px ${colors.richLilac.x800}80; */
`

const ButtonLinkMenu = (props: any) => {

  const {
    text,
    icon
  } = props

  return (
    <Link href='/testColors' passHref>
      <ContainerAll>
        <span>{text}</span>
        <ContainerIcon> { icon || '!' } </ContainerIcon>
      </ContainerAll>
    </Link>
  )
}

export default ButtonLinkMenu