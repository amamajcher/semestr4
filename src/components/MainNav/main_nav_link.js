import { NavLink } from "react-router-dom";

export const MainNavLink = ({href, label}) => {
    return (
        <NavLink className='main-nav-item' to={href}>{label}</NavLink>
    )
}