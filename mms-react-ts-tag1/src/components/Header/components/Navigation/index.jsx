import { navData } from "../../../../utils/data/navData"
import NavItem from "./NavItem"

export default function Navigation (){

console.log("nav", navData)

const NavLinks = navData.map((item)=>{

    return <NavItem 
                key={item.id} 
                href={item.href} 
                title={item.title}
            />

})

console.log("nav", NavLinks)

    return <nav>
        <ul>
            {NavLinks}
        </ul>
    </nav>
}