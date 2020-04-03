import React from 'react';
import { useForm } from 'react-hook-form'
import axiosWithAuth from '../auth/axiosWithAuth';



const AddNewColor = () => {
    // ________________________SET USEFORM VALUES 
    const {register, handleSubmit} = useForm();

       

    const onSubmit = (data,e) => {
        const  NewColor = { 
            code: {hex: data.hex},
            color: data.color,
        };
        
        axiosWithAuth()
        .post('./colors', NewColor)
        .then((res) => {
            console.log(
                'src/components/AddNewColor.js: AddNewColor: axiosWithAuth: .then: RES:', 
                res
            )
        })
        .catch((err) => {
            console.log(
                'src/components/AddNewColor.js: AddNewColor: axiosWithAuth: .catch: ERROR: ',
                err
            )
        })

        
    }

        return(
            <div>

                <form onSubmit={ handleSubmit(onSubmit) }>
                <legend>Add New Color</legend>
                <label for='color'>Color Name: </label>
                <input type='text' name='color' id='color' ref={ register } />
               
                <label for='hex'>HEX CODE: </label>
                <input type='text' name='hex' id='hex' ref={ register } /> 
                <input type='submit' value='Submit' />
                </form>
            </div>
        );

        
};

export default AddNewColor;