import { Button } from '../../Button';
import styles from './WorkFlow.module.scss';
import work from '../../../assets/img/work.png';
export function WorkFlow(){
    return(
        <section className={`${styles.workflow} container`}>
            <div className={styles.workflow__left}>
                <img src={work}/>
            </div>
            <div className={styles.workflow__right}>
                <h5>About Webflow</h5>
                <h1>Website Without The Dev Time</h1>
                <p>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
                <Button/>
            </div>
        </section>
    )
}