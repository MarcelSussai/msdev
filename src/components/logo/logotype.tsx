import styled from "styled-components"
import { useContext, useState } from 'react'
import {
  fncTransition,
  fontMuseo,
} from "../../styles/theme/snippetsCSS"
import LogoContainer from "./logoContainer"
import { colors } from "../../styles/theme"
import { AppCtx } from "../../contexts/ctxGlobal"



const ContainerAllButton = styled.a<any>`
  ${fncTransition({})}
  cursor: pointer;
  /* background: ${colors.riverBed.x150}; */
  background: transparent;
  box-shadow: -24px 4px 8px ${colors.riverBed.x200}AA;
`

const ContainerAll = styled.div<any>`
  ${fncTransition({})}
  display: flex ;
  padding: 4px 16px 4px 8px;
  width: 272px;
  height: 120px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 200;
  /* background: ${colors.riverBed.x150}; */
  background: transparent;
  
  
  
  &::before {
    content: '';
    ${fncTransition({dur: '.4s'})}
    width: 272px;
    height: 120px;
    background: ${colors.riverBed.x700};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 201;
  }

  &::after {
    content: '';
    ${fncTransition({dur: '.4s'})}
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
    z-index: 203;
  }

  &.hide {
    &::before {
      ${fncTransition({dur: '.4s', dly: '1s'})}
      width: 248px;
    }
    &::after {
      ${fncTransition({dur: '.4s', dly: '1s'})}
      right: 20px;
    }
  }
`

const ContainerLogo = styled.div<any>`
  ${fncTransition({dur: '.4s', dly: '.6s'})}
  width: 160px;
  z-index: 204;
  &.hide {
    ${fncTransition({dur: '.4s', dly: '.8s'})}
    transform: translate3d(224px, 0, 0);
    width: 48px;

  }
`

const ContainerType = styled.div<any>`
  ${fncTransition({})}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  position: relative;
  z-index: 202;
  
  &::after {
    content: '';
    ${fncTransition({ dur: '.8s', dly: '.2s' })}
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
    ${fncTransition({ dur: '.8s', dly: '.2s' })}
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
        ${fncTransition({ dur: '.8s', dly: '.4s' })}
        width: 0%;
    }
  }

`

const fontConfig = `
  font-size: 40px;
  line-height: .88;
`

const SpanMarcel = styled.span<any>`
  ${fncTransition({ dur: '.8s', dly: '.5s' })}
  ${fontMuseo}
  ${fontConfig}
  color: ${ colors.pictonBlue.x500 };
  margin: 8px 0 0 0;
  
  &.hide {
    ${fncTransition({ dur: '.8s', dly: '.1s' })}
    transform: translateX(112%);
  }
`

const SpanSussai = styled.span<any>`
  ${fncTransition({ dur: '.8s', dly: '.6s' })}
  ${fontMuseo}
  ${fontConfig}
  color: ${ colors.celery.x500 };
  
  &.hide {
    ${fncTransition({ dur: '.8s', dly: '.2s' })}
    transform: translateX(112%);
  }
`

const Span = styled.span<any>`
  ${fncTransition({ dur: '.8s', dly: '.7s' })}
  font-size: 16px;
  line-height: 1.6;
  color: ${ colors.paleGoldenRod.x500 };
  
  &.hide {
    ${fncTransition({ dur: '.8s', dly: '.3s' })}
    transform: translateX(112%);
  }
`



const Logotype = (props: any) => {

  const {} = props
  
  const context = useContext(AppCtx)
  const {isHide} = context

  return (
    <ContainerAllButton>
      <ContainerAll className={isHide ? 'hide' : ''}>
        <ContainerLogo className={isHide ? 'hide' : ''}>
          <LogoContainer isHide={isHide} />
        </ContainerLogo>
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