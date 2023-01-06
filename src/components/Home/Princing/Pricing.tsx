import styles from './Pricing.module.scss';
import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai'
import { Button } from '../../Button';
export function Pricing(){
    return(
        <section className={`${styles.pricing} container`}>
            <div className={styles.pricing__header}>
                <h5>Pricing</h5>
                <h2>Explore Pricing Plans</h2>
            </div>
            <div className={styles.pricing__content}>
                {[1,2,3].map(()=>(
                        <div className={styles.pricing__content_card}>
                            <span>Popular</span>
                        <h5>Consultation</h5>
                        <h3>Free</h3>
                        <p>Your digital marketing efforts, instead of handling in-house.</p>
                        <ul>
                            <li> <AiFillPlusCircle size={16} color="EF6D58" /> Brand Design</li>
                            <li> <AiFillMinusCircle size={16} color="F6DACA" /> Market Analysis</li>
                            <li> <AiFillMinusCircle size={16} color="F6DACA" /> Production</li>
                        </ul>
                        <Button/>
                    </div>
                ))}
            </div>
        </section>
    )
}