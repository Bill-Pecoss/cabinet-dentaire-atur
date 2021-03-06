import { Link } from 'gatsby';
import * as React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-links'>
          <div>
            <h5 className='footer-links__title'>Plan du site</h5>
            <ul>
              <li>
                <Link to='/'>Accueil</Link>
              </li>
              <li>
                <a href='/#cabinet'>Le cabinet</a>
              </li>
              <li>
                <a href='/#nous-trouver'>Nous trouver</a>
              </li>
              <li>
                <a href='/#nous-contacter'>Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='footer-links__title'>Liens utiles</h5>
            <ul>
              <li>
                <a href='https://www.ameli.fr/' rel='noreferrer' target='_blank'>
                  Ameli
                </a>
              </li>
              <li>
                <a href='https://www.oncd-24.fr/' rel='noreferrer' target='_blank'>
                  ONCD-24
                </a>
              </li>
              <li>
                <a href='https://www.oncd-24.fr/chirurgiens-dentistes-de-garde/' rel='noreferrer' target='_blank'>
                  En cas d'urgence
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-legal'>
          <p>
            Copyright &copy; 2021{' '}
            <a href='mailto:contact@billetpecoss.com' className='footer-legal__brand'>
              Bill &amp; Pecoss
            </a>
          </p>
          <p>Tous droits réservés</p>
        </div>
      </div>
      <div className='footer__location'>
        <a href='https://goo.gl/maps/XB8JUBFmaseNFa1r6' target='_blank' rel='noreferrer'>
          5 Impasse Édouard Glissant 24750 Atur Boulazac Isle Manoire
        </a>
      </div>
    </footer>
  );
};

export default Footer;
