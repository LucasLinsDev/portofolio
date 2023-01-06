import { Button } from '../../Button';
import styles from './Portofolio.module.scss';
import bg from '../../../assets/img/bg.png';
export function Portofolio(){
    return(
        <section className={`${styles.portofolio} container`}>
            <div className={styles.portofolio__header}>
                <h5>Portfolio</h5>
                <h3>Latest Work</h3>
                <div className={styles.portofolio__header_filter}>
                    <span>Show All</span>
                    <span>Design</span>
                    <span>Branding</span>
                    <span>Illustration</span>
                    <span>Motion</span>
                </div>
            </div>
            <div className={styles.portofolio__grid}>
                {[1,2,3,4,5,6].map(()=>(
                <div className={styles.portofolio__grid_card} style={{backgroundImage:`url(${bg})`}}>
                     <span>Design</span>
                     <h3>SOFA</h3>
                 </div>
                ))}
            </div>
            <Button/>
        </section>
    )
}