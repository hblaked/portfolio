import Header from '../assets/components/header'
import Footer from '../assets/components/footer'
import Featured from '../assets/components/featured'

export default function Home() {
  return (
    <>
      <div className='flex justify-self-center'>
        <div className='flex flex-col w-dvw min-w-[25rem] max-w-[60rem] pl-5 pr-5 pb-5'>
            <Header />
            <Featured />
            <Footer />
        </div>
      </div>
    </>
  )
}
