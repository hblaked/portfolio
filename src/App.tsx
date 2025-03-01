import Header from './assets/components/header'
import Greeting from './assets/components/greeting'
import Tech from './assets/components/tech'

function App() {

  return (
    <>
      <div className='flex justify-self-center'>
        <div className='flex flex-col w-dvw min-w-[30rem] max-w-[60rem] p-5'>
          <Header />
          <Greeting />
          <Tech />
        </div>
      </div>
    </>
  )
}

export default App
