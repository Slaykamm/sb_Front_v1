import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Menu from '../../components/menu/Menu'
import NavPanel from '../../components/NavPanel/NavPanel'
import cl from './UserCabinet.module.css'
import userPhoto from './Assets/userPhoto.jpg'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserCabinet() {
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

            <div></div>

            <div className={cl.BacketMainContent}>

            <div className={cl.userInfoLayer}>
              <div className={cl.userInfoLayerPhotoSection}>
                <div className={cl.userInfoLayerPhotoSectionImgContainer}>
                  <img src={userPhoto} alt='photo Usera'/>
                </div>
                <div className={cl.userInfoLayerPhotoSectionChangeAvatarButton}>
                  <Button
                    variant="secondary" 
                    size="sm"
                  >Сменить аватар</Button>
                </div>
              </div>
              <div >
              </div>

              <div className={cl.userInfoLayerUserSection}>
                <p>Ваша страница Котофеич</p>
                <div className={cl.userInfoLayerUserSectionAccountInfo}>
                  <form>
                    <p>Ваш Логин</p>
                    <input value='cat@mail.ru'/>
                    <p>Ваш пароль</p>
                    <input placeholder='Ваш старый пароль'/>
                    <input placeholder='Ваш новый пароль'/>
                    <p></p>
                    <Button
                      variant="secondary" 
                      size="sm">
                        Сменить пароль
                    </Button>
                  </form>
                </div>
                <div style={{backgroundColor: 'red'}}>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Предыдущие заказы</Accordion.Header>
                      <Accordion.Body>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>№</th>
                              <th>Дата</th>
                              <th>Товар</th>
                              <th>Сумма</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>27.05.2021</td>
                              <td>Курица, яйца</td>
                              <td>560,00 руб</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>14.07.2021</td>
                              <td>Курица, перепела</td>
                              <td>1020,00 руб</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>02.09.2021</td>
                              <td>Тушенка</td>
                              <td>1560,00 руб</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>11.10.2021</td>
                              <td>Яйка</td>
                              <td>2220,00 руб</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>31.12.2021</td>
                              <td>Перепелки</td>
                              <td>4400,00 руб</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

              </div>


            </div>



            </div>
        </div>

    </div>
    <Footer/>
</>
  )
}
