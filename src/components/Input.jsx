import React , {useId}from 'react'

const Input = React.forwardRef(function Input ({
    label , 
    type = 'text',
    className = '',
    ...props,

}, ref){
    return (
        <div className='w-full'>
        {label && <lable 
            className ="inline-block mb-1 pl-1"
        htmlfor = {id}>
        {label}
        </lable>
        }
        <input
        type ={type}
        className = {` ${className}`}
        ref = {ref}
        {...props}
        id = {id}
        />
        </div>
    )
})

export default Input
