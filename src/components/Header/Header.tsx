import { Button } from './Button';
import styles from './Header.module.scss';
import { Icon } from './IconMenu';
import { Logo } from './Logo';
import { Menu } from './Menu';

export function Header(){
    return(
        <header className={styles.header}>
            <Logo/>
            <Menu/>
            <Button/>
            <Icon/>
        </header>
    )
}
