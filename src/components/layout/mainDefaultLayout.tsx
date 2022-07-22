import { Main } from './../../styles/mainStyled'
import Head from './../head'
import Header from './../header'



const MainDefaultLayout = (props: any) => {

  const {
    children,
    title,
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