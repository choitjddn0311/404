import './globals.css';
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer';

export const metadata = {
  title: '404 town',
  description: "404 town에 오신것을 환영합니다!",
};

export default function RootLayout({children}) {
  return (
    <html lang='ko'>
      <body style={{fontFamily: "Freesentation"}}>
        <Header/>
        <Footer/>
      </body>
    </html>
  )
}