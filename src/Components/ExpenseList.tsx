export interface ExpObject {
    description: string;
    amount: number;
    category: string;
}

export interface Props {
    expenses: ExpObject[];
}

export const ExList =({expenses} : Props)=>{
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
                                <button id="del">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td> Total amount </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}