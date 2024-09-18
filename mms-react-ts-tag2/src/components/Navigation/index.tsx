
import { navData } from '../../utils/navData'
import NavItem from './NavItem'
import styles from '../../styles/Navigation.module.css'

function Navigation() {
    const NavList = navData.map((item: { id: string, title: string, href: string }) => {
        return <NavItem key={item.id} {...item} />
    })


    return (
        <div className={styles.navWrapper}>{NavList}</div>
    )
}

export default Navigation