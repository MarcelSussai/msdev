import { ReactNode } from 'react'
import * as S from './style'


interface IToolsTitle {
  children?: ReactNode
}
export default ({
  children
}: IToolsTitle) => {
  
  return (
    <S.ContainerToolTitle>
      {children}
    </S.ContainerToolTitle>
  )
}