import Header from '../assets/components/header'
import PrivacyInfo from "../assets/components/privacyinfo"
import Footer from '../assets/components/footer'

export default function Privacy() {
  return (
    <>
        <div className='flex justify-self-center'>
            <div className='flex flex-col w-dvw min-w-[25rem] max-w-[60rem] pl-5 pr-5 pb-5'>
                <Header />
                <PrivacyInfo />
                <Footer />
            </div>
        </div>
    </>
  )
}
