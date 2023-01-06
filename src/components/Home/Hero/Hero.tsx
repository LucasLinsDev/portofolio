import { Button } from '../../Button';
import styles from './Hero.module.scss';
import hero from '../../../assets/img/hero/hero.png'
export function Hero(){
    return(
        <section className={`${styles.hero} container`}>
            <div className={styles.hero__left}>
                <h5>Gabriel Pires</h5>
                <h1>The Simple, Clean Design</h1>
                <p>Agency provides a full service range including technical skills, design, business understanding.</p>
                <Button/>
            </div>
            <div className={styles.hero__right}>
                <img src={hero} alt=""/>
            </div>
        </section>
    )
}