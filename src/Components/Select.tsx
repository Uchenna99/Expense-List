import { useState } from "react";
import "../Stylesheets/Select.css"
import { HiOutlineChevronDown } from "react-icons/hi2";

export const selectItems: string[] = ['Groceries', 'Entertainment', 'Utilities'];


export const Select =()=>{


    const [dropDown, setDropDown] = useState(false)
    const [selected, setSelected] = useState('Select Category')

    return(
        <>
            <div className="select" onClick={()=>{setDropDown(!dropDown)}} >

                {selected}

                <HiOutlineChevronDown id="chev" />

                <div className="select-options" style={{display: dropDown? 'block' : 'none'}} >
                    {selectItems.map((item)=>(
                        <div className="options" onClick={()=>{setSelected(item)}} > 
                            {item} 
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}