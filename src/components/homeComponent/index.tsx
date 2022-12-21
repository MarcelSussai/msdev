import * as S from './style'
import TestScrollComponent from '../../components/ui/utils/testScrollComponent'



export default () => {
  
  return (
    <S.ContainerAll>
      <S.ContainerTitleHome>
        <S.OrnamentDiv_01 />
        <S.TitleHome>
          {'Olá, seja '} <span className='bold'>{`bem-vind@`}</span> <br />
          {'Sou desenvolvedor web '} <span className='pictonBlue'>{`fullstack`}</span>
          {' e especialista '} <span className='celery'>{`front-end`}</span>
        </S.TitleHome>
      </S.ContainerTitleHome>
      <S.CanvasContainer>
        <S.ContainerOrnament>
          <img src='test_01.svg' alt='' />
        </S.ContainerOrnament>
      </S.CanvasContainer>
    </S.ContainerAll>
  )
}