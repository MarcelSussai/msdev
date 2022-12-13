import { Main } from '../../styles/MainStyled'
import LogoComponent from '../logo/logo'
import Head from './../head'


const MainDefaultLayout = (props: any) => {

  const {
    children,
    title,
    pageIndexActive
  } = props



  return (
    <>
      <Head title={title} />
      <LogoComponent />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default MainDefaultLayout