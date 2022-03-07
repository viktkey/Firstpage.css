import React from 'react';
import './Firstpage.css'
import {Link} from "react-router-dom";
const Firstpage = () => {
    return (
        <div className="first_page">
            <div className="menu_container">
                <div className="main_menu">
                    <Link className="menu" to="/">Home</Link>
                    <Link className="menu" to="/about">About</Link>
                    <Link className="menu" to="/Contacts">Contacts</Link>
                    <Link className="menu" to="/about">About</Link>
                    <Link className="menu" to="/Contacts">Contacts</Link>
                </div>
                <div className="phonenumber">
                    <p className="f_p_phonenumber">+7 495 123-45-67</p>
                </div>
            </div>
            <div className="container_frstp">
                <div className="t_theatre">
                <div className="t_theatre_container">
                    <p className="theatre">Большой Театр</p>
                    <p className="theatre_t">Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с 1886 года — Петербургская консерватория. Первое постоянное в Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных зданий в Европе XVIII.</p>
                        <button className="but">Афиша</button>
                </div>
            </div>
                <div className="picture_container"> </div>
            </div>

            <div className="secondpage">
            <h2 className="name_teee">О театре</h2>
            <div className="theatre_two">

                <p className="twoo">Самый лучший театр СПБ</p>
                <p className="twoooo">Как свидетельствуют архивные документы, первое каменное здание Большого театра начали возводить в 1775 году по проекту Антонио Ринальди. В дальнейшем, после того как Ринальди упал с лесов и не мог лично наблюдать за ходом работ, Екатерина II поручила немецкому театральному декоратору и архитектору Людвигу Филиппу Тишбейну создать новый проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А. Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на других свидетельствах, годом открытия можно считать 1784 год.</p>

                <p className="numb">Немного о цифрах</p>


                <div className="vector">
                    <div className="vec1"></div>
                    <p className="chair">1600</p>
                    <p className="chair1">посадочных мест</p>
                    <div className="vec2"></div>
                    <p className="history">350</p>
                    <p className="history1">лет истории</p>

                    <div className="imggg"></div>

                </div>
            </div>
                <div className="third">
                    <h2 className="zglv">Наши постановки</h2>
                    <div className="thirdpic">

                        <div className="sen"></div>
                        <div className="oth"></div>
                        <div className="jul"></div>
                        <div className="may"></div>

                        <div className="lst"></div>
                    </div>
                    <div className="txt">
                        <p className="sen1">сентябрь 2020</p>
                        <p className="jun">июнь 2020</p>
                        <p className="jul1">июль 2020</p>
                        <p className="may1">май 2020</p>

                        <p className="year">2018 2019 2020</p>
                        <p className="tccl">Лучший театр по мнению театральных критиков Парижа</p>

                            <p className="emmm">???в процессе разработки и понимания языка???</p>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Firstpage;