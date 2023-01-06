import {useState} from 'react';
import styles from './Faq.module.scss';
import {BsArrowDownCircleFill} from 'react-icons/bs'
export function Faq(){
    const [active,setActive]=useState(false);
   
    return(
        <section className={`${styles.faq} container `}>
                <div className={styles.faq__left}>
                    <h5>Faq</h5>
                    <h3>Frequently Asked Questions</h3>
                    <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <a>Contact Us</a>
                </div>
                <div className={styles.faq__right}>
                 {[1,2].map((i)=>(
                    <div className={styles.faq__card}>
                       <div className={styles.faq__card_header} onClick={()=>{setActive(!active)}}>
                           <h4>A digital agency is a business</h4> <BsArrowDownCircleFill size={32} color="#EF6D58" />
                       </div>
                       {active && (
                       <div className={styles.faq__card_content}>
                           <p>  Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
                       </div> 
                       )}
                   </div>
                 ))}
                </div>
        </section>
    )
}