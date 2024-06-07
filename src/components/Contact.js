const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-3xl p-4 m-4">Contact Us</h1>

            <form className="p-2 m-2 flex flex-col w-6/12">
                <input 
                    type="text" 
                    className="border border-black p-2 my-2 rounded-sm" 
                    placeholder="Name"
                />

                <textarea 
                    type="text" 
                    className="border border-black p-2 my-2 rounded-sm" 
                    placeholder="Write your message"
                    rows="3"
                />

                <button 
                    className="border border-black font-semibold p-2 my-2 text-sm bg-gray-400 text-white rounded hover:bg-gray-700 transition duration-500"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;