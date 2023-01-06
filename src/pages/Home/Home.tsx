
import { Footer } from '../../components/Footer'
import { About } from '../../components/Home/About'
import { Blog } from '../../components/Home/Blog'
import { Contact } from '../../components/Home/Contact'
import { ContactMe } from '../../components/Home/ContactMe'
import { Faq } from '../../components/Home/Faq'
import { Features } from '../../components/Home/Features'
import { Hero } from '../../components/Home/Hero'
import { Newsletter } from '../../components/Home/Newsletter'
import { Portofolio } from '../../components/Home/Portofolio'
import { Pricing } from '../../components/Home/Princing'
import { Service } from '../../components/Home/Service'
import { Testmonial } from '../../components/Home/Testmonial'
import { WorkFlow } from '../../components/Home/Workflow'
import styles from './Home.module.scss'

export function Home(){
    return(
        <div className={styles.home}>
            <Hero/>
            <Features/>
            <WorkFlow/>
            <Service/>
            <Portofolio/>
            <About/>
            <Testmonial/>
            <Pricing/>
            <Faq/>
            <Blog/>
            <Newsletter/>
            <Contact/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}