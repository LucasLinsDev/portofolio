import styles from './Menu.module.scss';

export function Menu(){
    return(
        <nav className={styles.navbar}>
            <a>About</a>
            <a>Services</a>
            <a>Pricing</a>
            <a>Blog</a>
        </nav>
    )
}