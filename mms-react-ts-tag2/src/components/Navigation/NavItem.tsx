import { NavLink } from 'react-router-dom'
import styles from '../../styles/Navigation.module.css'

function NavItem({href, title}:{href: string, title: string}) {
  return (
    <NavLink className={styles.navItem} to={href}>{title}</NavLink>
  )
}

export default NavItem