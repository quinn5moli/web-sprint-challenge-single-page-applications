import React, {useEffect, useState} from 'react';
import Response from './Response';
import * as yup from 'yup';
import axios from 'axios';

const Form = () => {
    const [foodOrder, setFoodOrder] = useState({
        name:'',
        size:'',
        pepperoni: false,
        pesto: false,
        sausage: false,
        pineapple: false,
        canadianBacon: false,
        jalapeno: false,
        specialText:'',
    })

    const { name, size, pepperoni, pesto, sausage, pineapple, canadianBacon, jalapeno, specialText} = foodOrder;

    const [disabled, setDisabled]= useState(true)

    const [submitOrder, setSubmitOrder] = useState(false)

    const changeHandler = evt => {
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        setFoodOrder({...foodOrder, [evt.target.name]: value});
    }

    const schema = yup.object().shape({
        name: yup
            .string()
            .required('Name required')
            .min(2, 'name must be at least 2 characters'),
        size: yup.string(),
        pepperoni: yup.string(),
        sausage: yup.string(),
        canadianBacon: yup.string(),
        greenPepper: yup.string(),
        dicedTomatoes: yup.string(),
        roastedGarlic: yup.string(),
        pineapple: yup.string(),
        specialText: yup.string(),
    })

    const submitHandler = evt=> {
        evt.preventDefault();
        console.log(foodOrder);
        setSubmitOrder(true);
    }

    useEffect(() => {
        schema
        .isValid(foodOrder)
        .then(valid => setDisabled(!valid))
    }, [foodOrder])

    return(
        <div>
            <h3>Build Your Own Pie</h3>
            {disabled && <p>* Name must be at least 2 characters</p>}
            {!submitOrder && <form id= 'pizza-form' onSubmit={submitHandler}>
                <label htmlFor='name'>
                    Name
                    <input type='text' name='name' id='name-input' value={name} onChange={changeHandler} />
                </label>
                <label htmlFor='size'>
                    Select a Size 
                    <select name = 'size' id= 'size-dropdown' value={size} onChange={changeHandler}>
                            <option value='small'> Small(9") </option>
                            <option value='regular'>Regular (12")</option>
                            <option value='large'>Large (16")</option>
                        </select>  
                </label>
                <hr/>
                <label htmlFor='toppings'>
                    Add Toppings (pick up to 4)
                </label>
                    <label htmlFor='pepperoni'>
                        <input 
                        checked={pepperoni} 
                        type='checkbox' 
                        name='pepperoni' 
                        value = 'pepperoni' 
                        onChange={changeHandler}/>
                        Pepperoni
                </label>
                <label htmlFor='pesto'>
                        <input 
                        checked={pesto} 
                        type='checkbox' 
                        name='pesto' 
                        value = 'pesto' 
                        onChange={changeHandler}/>
                        Pesto
                </label>
                <label htmlFor='sausage'>
                        <input 
                        checked={sausage} 
                        type='checkbox' 
                        name='sausage' 
                        value = 'sausage' 
                        onChange={changeHandler}/>
                        Sausage
                </label>
                <label htmlFor='pineapple'>
                        <input 
                        checked={pineapple} 
                        type='checkbox' 
                        name='pineapple' 
                        value = 'pineapple' 
                        onChange={changeHandler}/>
                        Pineapple
                </label>
                <label htmlFor='canadianBacon'>
                        <input 
                        checked={canadianBacon} 
                        type='checkbox' 
                        name='canadianBacon' 
                        value = 'canadianBacon' 
                        onChange={changeHandler}
                        />
                        Canadian Bacon
                </label>
                <label htmlFor='jalapeno'>
                        <input 
                        checked={jalapeno} 
                        type='checkbox' 
                        name='jalapeno' 
                        value = 'jalapeno' 
                        onChange={changeHandler}
                        />
                        Jalapeno
                </label>
                <label htmlFor='special-text'>
                    Special Instructions
                    <input
                    typ='text'
                    name='special-text'
                    placeholder='Anything you would like to add?'
                    value={specialText}
                    onChange={changeHandler}
                    />
                </label>
                <hr/>
                <button id='order-button' type ='submit' disabled={disabled}>Add to Order?</button>
            </form>}
            {submitOrder && <Response foodOrder = {foodOrder}/>}
        </div>
    )

}

export default Form;