import * as S from './style'
import TestScrollComponent from '../ui/utils/testScrollComponent'
import { Fragment, useContext, useEffect, useState } from 'react'
import { AppCtx } from '../../contexts/ctxGlobal'



export default () => {

  const { theme } = useContext(AppCtx)
  const { colors } = theme
  const [arrayColors, setArrayColors] = useState([])
  const [arrayNameColors, setArrayNameColors] = useState<any>()
  useEffect(() => {
    setArrayColors(Object.values(colors))
    setArrayNameColors(Object.keys(colors))
  }, [])
  // useEffect(() => { console.log('arrayNameColors', arrayNameColors) }, [arrayNameColors])
  
  return (
    <S.ContainerAll>
      <S.TitleH2> {'Esquema de cores desse site'} </S.TitleH2>
      <S.MainColorsOfTheme>
        {arrayColors.map((item: any, i: number) => {
          return (
          <Fragment key={i}>
            {
              (typeof item !== 'string') &&
              <>
                <S.MainColorPiece
                  colorText={item.c750}
                  color={item.c500}
                  isBorded borderColor={item.c600}
                >
                  <S.TextMainColorInside> { item.c500.toUpperCase() } </S.TextMainColorInside>
                  <S.TextMainColorInside> { arrayNameColors[i] } </S.TextMainColorInside>
                </S.MainColorPiece>
              </>
            }
            {
              (typeof item === 'string') &&
              <>
                <S.MainColorPiece color={item} isBorded borderColor='#E0E0E0'>
                  <S.TextMainColorInside>{item.toUpperCase()}</S.TextMainColorInside>
                  <S.TextMainColorInside> { arrayNameColors[i] } </S.TextMainColorInside>
                </S.MainColorPiece>
              </>
            }
          </Fragment>
        )})}
      </S.MainColorsOfTheme>
      <S.TitleH2> {'Tonalidades das cores'} </S.TitleH2>
      <S.ContainerExplainAll>
        <S.ContainerExplain>
          <S.TipsTones> {`c050 <- mais clara`} </S.TipsTones>
          <S.TipsTones isMain> {`c500 <- principal`} </S.TipsTones>
          <S.TipsTones> {`c950 <- mais escura`} </S.TipsTones>
        </S.ContainerExplain>
        <S.ExplainGradient>
          <S.TipsTones> {`c050`} </S.TipsTones>
          <S.TipsTones> {`c100`} </S.TipsTones>
          <S.TipsTones> {`c150`} </S.TipsTones>
          <S.TipsTones> {`c200`} </S.TipsTones>
          <S.TipsTones> {`c250`} </S.TipsTones>
          <S.TipsTones> {`c300`} </S.TipsTones>
          <S.TipsTones> {`c350`} </S.TipsTones>
          <S.TipsTones> {`c400`} </S.TipsTones>
          <S.TipsTones> {`c450`} </S.TipsTones>
          <S.TipsTones isMain> {`c500`} </S.TipsTones>
          <S.TipsTones> {`c550`} </S.TipsTones>
          <S.TipsTones> {`c600`} </S.TipsTones>
          <S.TipsTones> {`c650`} </S.TipsTones>
          <S.TipsTones> {`c700`} </S.TipsTones>
          <S.TipsTones> {`c750`} </S.TipsTones>
          <S.TipsTones> {`c800`} </S.TipsTones>
          <S.TipsTones> {`c850`} </S.TipsTones>
          <S.TipsTones> {`c900`} </S.TipsTones>
          <S.TipsTones> {`c950`} </S.TipsTones>
        </S.ExplainGradient>
      </S.ContainerExplainAll>
      <S.ContainerGradientAll>
        {
          arrayColors.map((item: any, i: number) => {
            let arrayItem = Object.values(item)
            return (
              <Fragment key={i}>
                {
                  typeof item !== 'string' &&
                  <>
                    <S.TitleH3> { arrayNameColors[i] } </S.TitleH3>
                    <S.ContainerGradient>
                      {
                        arrayItem.map((item2: any, i2: any) => {
                          
                          return (
                            <Fragment key={i2}>
                              { item2.length >= 7 &&
                                <S.CubeColor
                                  color={item2}
                                  isMain={item2 === item.c500 ? true : false}
                                />
                              }
                            </Fragment>
                          )
                        })
                      }
                    </S.ContainerGradient>
                  </>
                }
              </Fragment>
            )
          })
        }
        
      </S.ContainerGradientAll>
    </S.ContainerAll>
  )
}