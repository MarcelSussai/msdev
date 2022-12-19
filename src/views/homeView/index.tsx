import HomeComponent from '../../components/homeComponent'
import MainDefaultLayout from '../../components/layout/mainDefaultLayout'



export default () => {


  
  return (
    <MainDefaultLayout title='Home' pageIndexActive={'0'}>
      <HomeComponent />
    </MainDefaultLayout>
  )
}