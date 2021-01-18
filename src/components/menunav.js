import { Link } from 'gatsby'
import React from 'react'
import style from "./menunav.module.css"

const MenuNav = ({menulinks}) =>{
    console.log(menulinks)
    return(
        <div className={style.menubar}>
            {menulinks.map((link, idx) =>{
                return(
                    <Link key={idx} to={link.link}>{link.title} </Link>
                )
            })}
        </div>
    )
}
export default MenuNav