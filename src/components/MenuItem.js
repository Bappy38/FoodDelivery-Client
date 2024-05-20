const MenuItem = (props) => {
    const {name, price, imageUrl} = props.menuItem;

    return (
        <div className="menu-item-card">
            <img className="menu-item-card-img"
                alt="item-image"
                src={imageUrl}
            />
            <h4>{name}</h4>
            <h4>{price} TK</h4>
        </div>
    )
}

export default MenuItem;