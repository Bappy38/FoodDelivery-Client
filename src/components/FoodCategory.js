import MenuItemList from "./MenuItemList";

const FoodCategory = (props) => {

    const {title, items} = props.category;
    const {isActive, expandAccordion, collapseAccordion}  = props;

    const onClickAccordionToggler = () => {
        isActive? collapseAccordion() : expandAccordion();
    }

    return (
        <div className="w-6/12 mx-auto my-6 bg-gray-100 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={onClickAccordionToggler}>
                <span className="font-bold">{title} ({items.length})</span>
                <span>⬇️</span>
            </div>

            {isActive && <MenuItemList items={items}/>}
        </div>
    )
}

export default FoodCategory;