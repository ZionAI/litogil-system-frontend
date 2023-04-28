import React from 'react';

export default function Input ({placeholder, className, value, onChange, type}) {
    return (
        <input className={className} placeholder={placeholder} value={value} onChange={onChange} type={type}/>
    );
};