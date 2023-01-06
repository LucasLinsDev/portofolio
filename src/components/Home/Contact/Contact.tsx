import { Button } from '../../Button';
import { Input } from '../../Form/Input';
import styles from './Contact.module.scss';
import location from '../../../assets/img/location.svg'
import email from '../../../assets/img/email.svg'
import phone from '../../../assets/img/phone.svg'
export function Contact(){
    return(
        <section className={` ${styles.contact} container`}>
                <div className={styles.contact__left}>
                    <div className={styles.contact__left_form}>
                        <h2>Get In Touch</h2>
                        <Input/>
                        <Input/>
                        <textarea>

                        </textarea>
                        <Button/>
                    </div>
                </div>
                <div className={styles.contact__right}>
                    <h5>CONTACT</h5>
                    <h2>Contact Me</h2>
                    <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <ul>
                        <li><img src={phone}/> 2247 Lunetta Street, TX 76301</li>
                        <li><img src={phone}/>+1 (234) 567-89-00</li>
                        <li><img src={phone}/> info@agency.com</li>
                    </ul>
                </div>
        </section>
    )
}