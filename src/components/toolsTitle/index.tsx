import { ReactNode } from 'react'
import * as S from './style'


interface IToolsTitle {
  children?: ReactNode
}
export default ({
  children
}: IToolsTitle) => {
  
  return (
    <S.ContainerAll>
      <S.ContainerToolTitle>
        {children}
      </S.ContainerToolTitle>
    </S.ContainerAll>
  )
}