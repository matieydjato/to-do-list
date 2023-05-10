import { useState } from "react";
import {BsTrash} from "react-icons/bs"

const Item = (props) => {
    const [done, setDone] = useState(false);

    return (
        <div className="select-none w-full border-b p-3 flex justify-between">
            <div className={` cursor-pointer`}>
                <span>
                    <input type="checkbox" onClick={() => setDone(!done)} className="mr-3"/>
                </span>
                <span className="pr-2 text-[12px] text-slate-400">
                    {props.item.time}
                </span>

                <span className={`${done === true ? 'line-through' : ''} text-[16px]`}>
                    {props.item.value}
                </span>
            </div>

            <div onClick={() => props.removeHandler(props.id)}>
                <BsTrash className="cursor-pointer text-red-500"/>
            </div>
        </div>
    );
};

export default Item;