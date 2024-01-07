import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './Providers'
import { Toaster } from 'react-hot-toast';
import Header from '~/components/Header';
import AuthProvider from '~/components/AuthProvider';
import Footer from '~/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Title webtsite',
  description: 'this is the desciption',
  openGraph: {
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eMartiiin94',
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <Providers>
            <Header/>
            {children}
            <Footer/>
            <Toaster />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
