import './styles.scss';

import { MainNavLink } from "./main_nav_link";

export const MainNav = () => {
    return (
        <nav className="main-nav">
            <MainNavLink href="/" label="Homepage" />
            <MainNavLink href="/contact" label="Contact" />
            <MainNavLink href="/about" label="About" />
        </nav>
    )
}