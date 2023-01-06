import styles from './Icon.module.scss';
import {AiOutlineMenu} from 'react-icons/ai'
export function Icon(){
    return(
        <div className={styles.icon}><AiOutlineMenu color="white" size={16}/></div>
    )
}