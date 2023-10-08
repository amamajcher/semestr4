export const ListItem = ({item}) => {

    const handleClick = () => {
        console.log(item);
    };

    return (
        <li onClick={handleClick}>
            {item}
        </li>
    );
  }