import { useContext } from 'react'
import { HeaderCtx } from '../../../../contexts/ctxHeader'
import * as S from './style'


export default () => {


  const {isMenuOpen, handleToggleMenuOpen} = useContext(HeaderCtx)
  
  return (
  <>
    <S.ContainerButtonMenu>
      <S.ButtonMenu isOpen={isMenuOpen} onClick={handleToggleMenuOpen}>
        <S.DrawItemButton isOpen={isMenuOpen} />
      </S.ButtonMenu>
    </S.ContainerButtonMenu>
  </>
)}