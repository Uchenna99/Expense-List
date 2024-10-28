


export const ExForm =()=>{
    return(
        <>
            <div className="form-wrap">
                <form >
                    <div className="input-wrap">
                        <label htmlFor="description">Description</label>
                        <input id="description" type="text" />
                    </div>

                    <div className="input-wrap">
                        <label htmlFor="amount">Amount</label>
                        <input id="amount" type="text" />
                    </div>

                    <div className="input-wrap">
                        <label htmlFor="category">Category</label>
                        <select name="" id="category">
                            <option value="">Select Category</option>
                            <option value="">Groceries</option>
                            <option value="">Entertainment</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}