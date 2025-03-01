import Header from './assets/components/header'
import Greeting from './assets/components/greeting'

function App() {

  return (
    <>
      <div className='flex justify-self-center'>
        <div className='flex flex-col w-dvw min-w-[40rem] max-w-[80rem]'>
          <Header />
          <Greeting />
        </div>
      </div>
    </>
  )
}

export default App
