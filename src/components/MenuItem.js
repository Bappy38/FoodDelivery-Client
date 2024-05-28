const MenuItem = (props) => {
    const {name, price, description, imageUrl} = props.item;

    return (
        <div className="flex justify-between border-b-2 py-2">
            <div className="text-left w-9/12">
                <div className="mt-2 text-lg">
                    <span>{name} - BDT {price}</span>
                </div>
                <p className="text-sm mt-2">{description}</p>
            </div>
            <div className="w-3/12 h-full relative">
                <button 
                    className="
                        absolute
                        bg-slate-600
                        text-white 
                        font-semibold 
                        p-2 rounded-md
                        shadow-lg
                        bottom-0
                        left-1/2
                        transform
                        -translate-x-1/2">Add +</button>
                <img
                    className="rounded-lg max-h-28 w-full" 
                    alt="item-image" 
                    src={imageUrl}/>
            </div>
        </div>
    )
}

export default MenuItem;