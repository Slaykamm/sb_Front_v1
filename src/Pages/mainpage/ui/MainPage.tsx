import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import Menu from '../../../components/menu/Menu'
import NavPanel from '../../../components/NavPanel/NavPanel'
import Products from '../../../components/Products/Products'
import cl from './MainPage.module.css'





export default function MainPage() {


  return (
    <>
      <Header/>
        <div
          className={cl.MainLayer}
        >
          <NavPanel/>
          <div className={cl.container}>
            <div className={cl.containerMenu}>
              <Menu/>
            </div>

            <div>
            </div>
            <div className={cl.containerContent}>
              <Products/>

            </div>
          </div>
        </div>
      <Footer/>
    </>

  )
}
