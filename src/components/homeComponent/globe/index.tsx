import * as S from './style'



export default () => {
  
  return (
    <S.ContainerAll>
      <S.ContainerText>
        <S.Text>
          {`Esteja `} <span className='pictonBlue'>{`conectado`}</span>
          {` com o `} <span className='celery'>{`mundo todo`}</span>
          {` e `} <span className='paleGoldenRod'>{`gere valor`}</span>
          {` da tecnologia`}
        </S.Text>
      </S.ContainerText>
      <S.ContainerGlobeAndCircles>
        <S.ContainerCircles> <img src='circles.svg' alt='' /> </S.ContainerCircles>
        <S.ContainerGlobe> <img src='globe.svg' alt='' /> </S.ContainerGlobe>
      </S.ContainerGlobeAndCircles>
      <S.Ornament_01 />
    </S.ContainerAll>
  )
}