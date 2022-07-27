import styled from 'styled-components'
import Link from 'next/link'
import { colors } from '../../styles/theme'
import { fncTransition } from '../../styles/theme/snippetsCSS'
import { useContext } from 'react'
import { AppCtx } from '../../contexts/ctxGlobal'



const ContainerAll = styled.a<any>`
  ${({pInd2}) => fncTransition({dur: '.3s'})}
  width: 248px;
  margin-left: 16px;
  height: 40px;
  padding: 8px 64px 8px 24px;
  position: relative;
  /* border-left: solid 1px ${colors.riverBed.x100}; */
  /* border: solid 1px ${colors.riverBed.x500}; */
  border-left: solid 2px ${colors.riverBed.x900};
  border-right: none;
  background: linear-gradient(
    to right,
    ${colors.riverBed.x050}08,
    ${colors.riverBed.x050}32
  );
  backdrop-filter: blur(4px);
  border-radius: 16px;
  border-top-left-radius: 48px;
  border-bottom-left-radius: 32px;
  box-shadow: inset 0 0 8px ${colors.riverBed.x600}80 ;
  
  display: flex;
  align-items: center;
  gap: 8px;
  /* justify-content: stretch; */

  &.active {
    background: linear-gradient(
      to right,
      ${colors.ripeMango.x050}08,
      ${colors.ripeMango.x050}48
    );
    /* border: solid 1px ${colors.riverBed.x250}; */
    border-left: solid 2px ${colors.ripeMango.x300};
    border-right: none;
    span {
      font-weight: 800;
      color: ${colors.ripeMango.x300};
    }
    div {
      background: ${colors.richLilac.x800};
      box-shadow:
        inset 0 0 8px ${colors.richLilac.x700}BB;
    }
  }

  span {
    ${fncTransition({dur: '.3s'})}
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    /* text-align: right; */
    color: ${colors.riverBed.x050};
    line-height: 1;
    margin-top: 4px;
  }

  &:hover {
    box-shadow: inset 16px 0 32px ${colors.riverBed.x300}aa ;
    /* border: solid 1px ${colors.riverBed.x500}; */
    border-left: solid 2px ${colors.paleGoldenRod.x400};
    border-right: none;
    span {
      color: ${colors.paleGoldenRod.x300};
    }
    div {
      background: ${colors.richLilac.x600};
      box-shadow:
        /* 4px 4px 4px ${colors.richLilac.x900}40, */
        inset 0 0 16px ${colors.richLilac.x900}BB;
    }
  }
  &.hide {
    ${({pInd}) => fncTransition({dur: '.3s', dly: pInd})}
    transform: translate3d(-64px,0,0);
  }
`

const ContainerIcon = styled.div`
  ${fncTransition({dur: '.3s'})}
  width: 44px;
  height: 40px;
  background: ${colors.riverBed.x700};
  /* border: solid 1px ${colors.riverBed.x700}; */
  border-left: solid 4px ${colors.riverBed.x500};
  color: ${colors.ripeMango.x300};
  padding: 8px 12px 8px 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  /* box-shadow: */
    /* 4px 4px 4px ${colors.richLilac.x900}40, */
    /* inset 0 0 8px ${colors.richLilac.x800}80; */
`

const ButtonLinkMenu = (props: any) => {

  const {
    text,
    icon,
    className,
    pageIndex,
    href
  } = props

  let pIndex = parseInt(pageIndex) + 2
  
  const context = useContext(AppCtx)
  const {isHide} = context

  return (
    <Link href={href || '/testColors'} passHref>
      <ContainerAll
        className={isHide ? className + ' hide' : className}
        pInd={`1.${pIndex}s`}
      >
        <span>{text}</span>
        <ContainerIcon> { icon || '!' } </ContainerIcon>
      </ContainerAll>
    </Link>
  )
}

export default ButtonLinkMenu