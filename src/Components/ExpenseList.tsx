export interface ExpObject {
    description: string;
    amount: number;
    category: string;
}

export interface Props {
    expenses: ExpObject[];
    onDelete: (item: string)=> void;
}

export const ExList =({expenses, onDelete} : Props)=>{
    if(expenses.length === 0){return null}

    const sumTotal =(expenses: ExpObject[]): string=>{
        let total = 0
        expenses.forEach((expense)=> {
            total += expense.amount
        })
        return `₦ ${total}`;
    }

    
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th style={{width:'120px'}}></th>
                    </tr>
                </thead>
                
                <tbody>
                    {expenses.map((expense)=> (
                        <tr key={expense.description} >
                            <td> {expense.description} </td>
                            <td> {expense.amount} </td>
                            <td> {expense.category} </td>
                            <td>
                                <button id="del" onClick={()=>onDelete(expense.description)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td> {sumTotal(expenses)} </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}