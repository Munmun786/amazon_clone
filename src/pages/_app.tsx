import RootLayout from '@/components/RootLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from 'react-redux'
import {store,persistor} from "@/store/store"
import { SessionProvider } from "next-auth/react"
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return(
  <Provider store={store}>
<PersistGate persistor={persistor} loading={null}>
  <SessionProvider session={session}>
  <div className="font-bodyFont bg-gray-300 text-black p-4 border border-gray-300 rounded-lg group overflow-hidden ">
 <RootLayout>
 <Component {...pageProps} />
 </RootLayout>
  </div>
  </SessionProvider>
</PersistGate>


  </Provider>
  )
}
