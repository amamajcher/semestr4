import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";
import './styles.scss';

export const Page = ({label, children}) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="container">
            <div className="headerContent">
            <h2>{label}</h2>
            <img src="logo192.png" alt="logo" width={100} height={100}/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}