import styles from './Logo.module.scss';
import logo from '../../../assets/img/logo.svg';
export function Logo(){
    return(
        <div className={styles.logo}><img src={logo}/></div>
    )
}