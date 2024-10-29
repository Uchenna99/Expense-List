import { selectItems } from "./Select"

interface Select {
    selectCategory: (category: string)=> void;
}

export const CategoryFilter = ({selectCategory}: Select) => {

    return (
    <>
        <div className="input-wrap" style={{width:'700px'}} >
            <select id="select" onChange={(e)=> selectCategory(e.target.value)} >
                <option value=''>Select Category</option>
                {selectItems.map((item)=>( 
                    <option key={item} value={item} >
                        {item}
                    </option>
                ))}
            </select>
        </div>
    </>
  )
}
