import { Button } from '../../Button';
import styles from './ContactMe.module.scss';
import hero from '../../../assets/img/hero/hero.png'
export function ContactMe(){
    return(
        <div className={`${styles.contactme} container`}>
            <div className={styles.contactme__left}>
                <h1>Help To Build Your Dream Project</h1>
                <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                <Button/>
            </div>
            <div className={styles.contactme__right}>
                <img src={hero}/>
            </div>
        </div>
    )
}