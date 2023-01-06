import styles from './Footer.module.scss';
import facebook from '../../assets/img/facebook.png'
export function Footer(){
    return(
        <footer className={`${styles.footer} container`}>
            <div className={styles.footer__logo}>LOGO</div>
            <div className={styles.footer__menu}>
                <h2>MENU</h2>
                <ul>
                    <li>About</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={styles.footer__menu}>
                <h2>SERVICE</h2>
                <ul>
                    <li>Design</li>
                    <li>Developement</li>
                    <li>Marketing</li>
                    <li>See more</li>
                </ul>
            </div>
            <div className={styles.footer__social}>
              {[1,2,3].map(()=>(
                  <img src={facebook}/>
              ))}
            </div>
        </footer>
    )
}