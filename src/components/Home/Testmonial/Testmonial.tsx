import { Button } from '../../Button';
import styles from './Testmonial.module.scss';
import star from '../../../assets/img/icon/star.png'
import avatar from '../../../assets/img/icon/avatar.png'
export function Testmonial(){
    return(
        <section className={`${styles.testmonial} container`}>
            <div className={styles.testmonial__header}>
                <h5>Testimonials</h5>
                <h2>What My <br/> Clients Saying</h2>
            </div>
            <div className={styles.testmonial__content}>
                {[1,2,3,4].map(()=>(
                  <div className={styles.testmonial__content_card}>
                      <div className={styles.testmonial__content_star}>
                        {[1,2,3,4,5].map(()=>(
                            <img src={star}/>
                        ))}
                      </div>
                      <p>Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.</p>
                      <div className={styles.testmonial__content_card_avatar}>
                          <div>
                          <img src={avatar}/>
                          </div>
                          <div>
                          <h4>Graham Griffiths</h4>
                          <p>Twitor</p>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
            <Button/>
        </section>
    )
}