export const Page = ({label, children}) => {
    return (
        <div>
            <h2>{label}</h2>
            <img src="logo192.png" alt="logo" width={100} height={100}/>
            <div>
                {children}
            </div>
        </div>
    );
}