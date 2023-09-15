import { ReactElement } from 'react'
import Header from './header/Header'
import BottomHeader from './header/BottomHeader'
import Footer from './Footer'

interface props{
    children:ReactElement
}

const RootLayout = ({children}: props) => {

  return (
    <>
    <Header />
    <BottomHeader />
    {children}
    <Footer />
    </>
  )
}

export default RootLayout
