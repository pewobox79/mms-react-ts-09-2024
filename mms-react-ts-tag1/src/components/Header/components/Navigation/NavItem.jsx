import { NavLink } from "react-router-dom";

function NavItem({ title, href }) {

    return <li>
        <NavLink to={href}>
        {title}
    </NavLink>
    </li>
}

export default NavItem