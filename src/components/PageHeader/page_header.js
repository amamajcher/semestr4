import './styles.scss';

import { MainNav } from "../MainNav/main_nav";
import { ThemeButton } from '../ThemeButton/theme_button';

export const PageHeader = () => {
    return (
        <header className="page-header">
            <MainNav />
            <ThemeButton />
        </header>
    )
}