import { useRef, useState } from "react";

const Form = (props) => {
    // const item = useRef();
    const [item, setItem] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        props.addHandler(item);
    }

    return (
        // <div className="p-3">            
        //     <div className="relative">
        //         <input ref={item} type="text" id="default-search" className="block w-full p-4 pl-2 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you need to do ?"/>
        //         <button onClick={() => {props.addHandler(item.current.value); item.current.value = ""}} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1.5 pt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button>
        //     </div>
        // </div>

        <div className="p-3">            
            <div className="relative">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        id="default-search" 
                        className="block w-full p-4 pl-2 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="What do you need to do ?"
                        onChange={event => setItem(event.target.value)}
                        value={item}
                        required
                    />
                    <button
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1.5 pt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >+</button>
                </form>
            </div>
        </div>
    );
};

export default Form;