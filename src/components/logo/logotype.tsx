import styled from "styled-components"
import { useState } from 'react'
import {
  fncTransition,
  fontMuseo,
} from "../../styles/theme/snippetsCSS"
import LogoContainer from "./logoContainer"
import { colors } from "../../styles/theme"



const ContainerAllButton = styled.button<any>`
  ${fncTransition({})}
  cursor: pointer;
`

const ContainerAll = styled.div<any>`
  ${fncTransition({})}
  display: flex ;
  padding: 4px 16px 4px 8px;
  background: ${colors.riverBed.x700};
  width: 272px;
  height: 120px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 200;

  box-shadow: 0 4px 8px ${colors.riverBed.x900}AA;

  &::after {
    content: '';
    ${fncTransition({})}
    position: absolute;
    width: 8px;
    background: linear-gradient(
      to bottom,
      ${colors.pictonBlue.x500},
      ${colors.celery.x500}
    );
    height: 100%;
    top: 0;
    right: 0;
  }

`

const ContainerLogo = styled.div<any>`
  ${fncTransition({})}
  width: 160px;
`

const ContainerType = styled.div<any>`
  ${fncTransition({})}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  position: relative;
  
  &::after {
    content: '';
    ${fncTransition({ dur: '.8s' })}
    position: absolute;
    width: 100%;
    background: linear-gradient(
      to left,
      ${colors.pictonBlue.x500},
      ${colors.celery.x500}
    );
    height: 1px;
    top: 4px;
    right: -8px;
  }
  &::before {
    content: '';
    ${fncTransition({ dur: '.8s' })}
    position: absolute;
    width: 100%;
    background: linear-gradient(
      to right,
      ${colors.pictonBlue.x500},
      ${colors.celery.x500}
    );
    height: 1px;
    bottom: 4px;
    right: -8px;
  }
  &.hide {
    &::after, &::before {
      width: 0%;
    }
  }

`

const fontConfig = `
  font-size: 40px;
  line-height: .88;
`

const SpanMarcel = styled.span<any>`
  ${fncTransition({ dur: '.8s', dly: '.1s' })}
  ${fontMuseo}
  ${fontConfig}
  color: ${ colors.pictonBlue.x500 };
  margin: 8px 0 0 0;

  &.hide {
    transform: translateX(112%);
  }
`

const SpanSussai = styled.span<any>`
  ${fncTransition({ dur: '.8s', dly: '.2s' })}
  ${fontMuseo}
  ${fontConfig}
  color: ${ colors.celery.x500 };

  &.hide {
    transform: translateX(112%);
  }
`

const Span = styled.span`
  ${fncTransition({ dur: '.8s', dly: '.3s' })}
  font-size: 16px;
  line-height: 1.6;
  color: ${ colors.paleGoldenRod.x500 };

  &.hide {
    transform: translateX(112%);
  }
`



const Logotype = () => {

  const [isHide, setIsHide] = useState(false)

  const handleClickLogotype = () => setIsHide(!isHide)

  return (
    <ContainerAllButton onClick={handleClickLogotype}>
      <ContainerAll>
        <ContainerLogo><LogoContainer /></ContainerLogo>
        <ContainerType className={isHide ? 'hide' : ''}>
          <SpanMarcel className={isHide ? 'hide' : ''}>Marcel</SpanMarcel>
          <SpanSussai className={isHide ? 'hide' : ''}>Sussai</SpanSussai>
          <Span className={isHide ? 'hide' : ''}>fullstack web dev</Span>
        </ContainerType>
      </ContainerAll>
    </ContainerAllButton>
  )
}

export default Logotype