import styles from './Features.module.scss';
import icon from '../../../assets/img/icon/icon-01.svg';
export function Features(){
    return(
        <section className={`${styles.features} container`}>
            <div className={`${styles.features__left} `}>
                <h5>FEATURES</h5>
                <h2>Custom Web Design</h2>
                <a>Read more</a>
            </div>
            <div className={`${styles.features__right}`}>
                <div className={styles.features__card}>
                    <img src={icon} />
                    <h4>Professional</h4>
                    <p>Full service range including technical skills, design.</p>
                </div>
                 <div className={styles.features__card}>
                   
                    <h4>Accessibility</h4>
                    <p>Business understanding, ability to put themselves.</p>
                </div>
            </div>
        </section>
    )
}