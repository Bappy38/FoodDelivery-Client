import MenuItem from "./MenuItem";

const MenuItemList = (props) => {
    const {items} = props;

    return (
        <div>
            {items.map((item) => (
                <MenuItem key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default MenuItemList;