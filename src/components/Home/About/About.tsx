import styles from './About.module.scss';
import image from '../../../assets/img/hero/hero.png'
import { Button } from '../../Button';
export function About(){
    return(
        <section className={`${styles.about} container`}>
            <div className={styles.about__left}>
                <img src={image}/>
            </div>
            <div className={styles.about__right}>
                <h5>ABOUT</h5>
                <h1>An Experience  Webflow Expert</h1>
                <p>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
                <Button/>
            </div>
        </section>
    )
}