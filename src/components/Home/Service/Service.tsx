import styles from './Service.module.scss';
import icon from '../../../assets/img/icon/icon-01.svg';
export function Service(){
    return(
        <section className={`${styles.service} container`}>
            <div className={styles.service__header}>
                <h5>SERVICE</h5>
                <h3>How Webflow  Expert Can Help</h3>
            </div>
            <div className={styles.service__row}>
               {[1,2,3].map(()=>(
                 <div className={styles.service__card}>
                    <img src={icon} />
                    <h4>Professional</h4>
                    <p>Full service range including technical skills, design.</p>
                    <a>Discover More</a>
                 </div>
               ))}
            </div>
        </section>
    )
}