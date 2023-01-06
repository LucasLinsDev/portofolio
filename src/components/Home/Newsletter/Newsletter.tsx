import { Button } from '../../Button';
import styles from './Newsletter.module.scss';

export function Newsletter(){
    return(
        <div className={`${styles.newsletter} container`}>
            <div className={styles.newsletter__left}>
                <h3>Newsletter</h3>
            </div>
            <div className={styles.newsletter__right}>
                <input type="text" placeholder="Your email"/>
                <Button/>
            </div>
        </div>
    )
}