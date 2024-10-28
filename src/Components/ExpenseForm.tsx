import { useForm } from "react-hook-form"
import { selectItems } from "./Select"
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { ExList } from "./ExpenseList";


const schema = z.object({
    description: z.string().min(3, {message: 'Description should be at least 3 characters.'}).max(50),
    amount: z.number({invalid_type_error: 'Amount is required.'}).min(100, {message: 'Amount should be at least 100 Naira'}).max(5_000_000),
    select: z.enum(['Groceries', 'Entertainment', 'Utilities'], {errorMap: ()=>({message: 'Category is required'})})
})

type EformData = z.infer<typeof schema>;

export const ExForm =()=>{

    const { register, handleSubmit, formState: {errors} } = useForm<EformData>({ resolver: zodResolver(schema)})

    return(
        <>
            <div className="form-wrap">
                <form onSubmit={handleSubmit((data)=> console.log(data))} >
                    <div className="input-wrap">
                        <label htmlFor="description">Description</label>
                        <input id="description" type="text" {...register('description')} />
                        {errors.description && <p id="err"> {errors.description.message} </p> }
                    </div>

                    <div className="input-wrap">
                        <label htmlFor="amount">Amount</label>
                        <input id="amount" type="number" {...register('amount', {valueAsNumber: true})} />
                        {errors.amount && <p id="err"> {errors.amount.message} </p> }
                    </div>

                    <div className="input-wrap">
                        <label htmlFor="select" >Category</label>
                        <select id="select" {...register('select')} >
                            <option value="">Select category</option>
                            {selectItems.map((item)=> 
                                <option key={item}> {item} </option>
                            )}
                        </select>
                        {errors.select && <p id="err"> {errors.select.message} </p> }
                    </div>

                    <button type="submit" > Submit </button>
                </form>

                <ExList />

            </div>
        </>
    )
}