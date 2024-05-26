const MenuItem = (props) => {
    const {name, price, imageUrl} = props.menuItem;

    return (
        <div className="flex m-2 p-5 h-[180px] w-[600px] border-dotted border-black border-t">
            <div className="w-[300px]">
                <h1 className="font-semibold text-2xl">{name}</h1>
                <h1 className="text-lg py-2">BDT {price}</h1>
            </div>
            <div className="ms-48 w-[200px]">
                <img
                    className="content-end rounded-lg h-full w-full"
                    alt="item-image"
                    src={imageUrl}
                />
            </div>
        </div>
    )
}

export default MenuItem;