import './style.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import telegram from './img/telegram.svg';
import instagram from './img/instagram.svg';
import viber from './img/viber.svg';
import whatsapp from './img/whatsapp.svg';
import vk from './img/vk.svg';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='col'>
          <Logo className="logo footer__logo" href="/catalogue" title="Логотип" />
          <p className="footer__copyright">© «Интернет-магазин DogFood.ru»</p>
        </div>
        <div className='col'>
          <nav className='menu'>
            <a href="/catalogue" className='menu__item'>
              Каталог
            </a>
            <a href="/catalogue" className='menu__item'>
              Акции
            </a>
            <a href="/catalogue" className='menu__item'>
              Новости
            </a>
            <a href="/catalogue" className='menu__item'>
              Отзывы
            </a>
          </nav>
        </div>
        <div className='col'>
          <nav className='menu'>
            <a href="/catalogue" className='menu__item'>
              Оплата и доставка
            </a>
            <NavLink to="/faq" style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : undefined)} className='menu__item'>
              Часто спрашивают
            </NavLink>
            <a href="/catalogue" className='menu__item'>
              Обратная связь
            </a>
            <a href="/catalogue" className='menu__item'>
              Контакты
            </a>
          </nav>
        </div>
        <div className='col'>
          <div className='contacts'>
            <p className='contacts__title'>Мы на связи</p>
            <a className={cn('contacts__tel', 'contacts__link')} href="tel:89177172179">
              8 (999) 00-00-00
            </a>
            <a className={cn('contacts__mail', 'contacts__link')} href="mailto:hordog.ru@gmail.com">
              dogfood.ru@gmail.com
            </a>
            <ul className={cn('socials', 'contacts__socials')}>
              <li className='socials__item'>
                <a className='socials__link' href="/#">
                  <img src={telegram} alt="telegram" className='socials__icon' />
                </a>
              </li>

              <li className='socials__item'>
                <a className='socials__link' href="/#">
                  <img src={whatsapp} alt="whatsapp" className='socials__icon' />
                </a>
              </li>
              <li className='socials__item'>
                <a className='socials__link' href="/#">
                  <img src={viber} alt="viber" className='socials__icon' />
                </a>
              </li>
              <li className='socials__item'>
                <a className='socials__link' href="/#">
                  <img src={instagram} alt="instagram" className='socials__icon' />
                </a>
              </li>
              <li className='socials__item'>
                <a className='socials__link' href="/#">
                  <img src={vk} alt="vk" className='socials__icon' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;