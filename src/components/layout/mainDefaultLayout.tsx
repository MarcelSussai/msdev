import { Main } from '../../styles/MainStyled'
import Header from '../header'
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
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default MainDefaultLayout