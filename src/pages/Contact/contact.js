import { PageHeader } from "../../components/PageHeader/page_header"
import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";

export const ContactPage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="container">
            <PageHeader />
            <h1 style={{ backgroundColor: theme.background, color: theme.foreground }}>Contact</h1>
        </div>
    )
}