import { Button } from '../../Button';
import styles from './Blog.module.scss';
import blog from '../../../assets/img/blog.png'
export function Blog(){
    return(
        <section className={`${styles.blog} container`}>
            <div className={styles.blog__header}>
                <div className={styles.blog__header_left}>
                    <h5>OUR BLOG</h5>
                    <h2>Latest Blog Articles</h2>
                </div>
                <Button/>
            </div>
            <div className={styles.blog__content}>
               {[1,2,3].map(()=>(
                 <div className={styles.blog__content_card}>
                 <img src={blog}/>
                 <span>Stories</span>
                 <h4>Agency is a business you hire to outsource</h4>
                 <p>5 Nov, 2021</p>
             </div>
               ))}
            </div>
        </section>
    )
}