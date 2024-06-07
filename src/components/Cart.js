import { useDispatch, useSelector } from "react-redux";
import { clearCart } from '../store/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => (store.cart.items));

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    if (cartItems.length === 0) {

        return (
            <div className="flex flex-col items-center p-4">
                <img className="rounded-md w-56 h-60" alt="empty cart image" src="https://img.freepik.com/free-vector/cartoon-character-sticker-with-chef-girl-cooking_1308-63960.jpg"/>
                <h1 className="font-semibold text-2xl mt-4">Hungry?</h1>
                <span className="mt-2">You haven't added anything to your cart!</span>
            </div>
        )
    }

    return (
        <div className="flex py-4 px-12">
            <div className="text-center w-6/12">

                {/* <button className="bg-slate-400 p-2 rounded-md" onClick={
                    handleClearCart
                }>Clear Cart</button> */}

                <h1 className="text-2xl">Your Items</h1>

                {cartItems.map((item) => (
                    <div key={item.id} className="p-2 m-2 border-b-2 text-left flex justify-between">

                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.name}</span>
                                <span> - BDT {item.price}</span>
                            </div>

                            <p className="text-xs">{item.description}</p>
                        </div>

                        <div className="w-3/12">
                            <img className="rounded-md" src={item.imageUrl} alt={item.name}/>
                        </div>

                    </div>
                ))}
            </div>

            <div class="mx-auto mt-8 p-4 h-auto w-3/12 bg-white shadow-md rounded-lg">
                <div class="text-center py-2 mb-2">
                    <span class="font-semibold">Bill Details</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <span>Item Total</span>
                    <span>1200</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <span>Delivery Fee</span>
                    <span>40</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <span>Platform Fee</span>
                    <span>15</span>
                </div>
                <div class="flex justify-between border-b-2 py-2">
                    <span>VAT</span>
                    <span>15</span>
                </div>
                <div class="flex justify-between py-2">
                    <span class="font-semibold">Total</span>
                    <span class="font-semibold">1500</span>
                </div>
            </div>


        </div>
    )
}

export default Cart;