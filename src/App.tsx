import Header from './assets/components/header'
import Greeting from './assets/components/greeting'
import Tech from './assets/components/tech'
import Footer from './assets/components/footer'
import Featured from './assets/components/featured'

function App() {

  return (
    <>
      <div className='flex justify-self-center'>
        <div className='flex flex-col w-dvw min-w-[25rem] max-w-[60rem] pl-5 pr-5 pb-5'>
          <Header />
          <Greeting />
          <Tech />
          <Featured />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
