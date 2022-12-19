import * as S from './style'
import TestScrollComponent from '../../components/ui/utils/testScrollComponent'



export default () => {
  
  return (
    <S.ContainerAll>
      <S.ContainerTitleHome>
        <S.OrnamentDiv_01 />
        <S.TitleHome>
          {'Olá, seja '} <span className='bold'>{`bem vind@`}</span> <br />
          {'Sou desenvolvedor web '} <span className='pictonBlue'>{`fullstack`}</span>
          {' e especialista '} <span className='celery'>{`front-end`}</span>
        </S.TitleHome>
      </S.ContainerTitleHome>
      <TestScrollComponent />
      <TestScrollComponent />
      <TestScrollComponent />
      <TestScrollComponent />
    </S.ContainerAll>
  )
}