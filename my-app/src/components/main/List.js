import { ListItem } from './ListItem';

export const List = ({items}) => {
    return (
        <ul>
            {items.map((item, index) => (
                <ListItem key={`user-${index}`} item={item} />
            ))} 
        </ul>
    );
  }
  