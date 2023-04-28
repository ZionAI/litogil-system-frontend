import React from 'react';

export default function Button ({title, style, onClick, className, disabled}) {
    return (
        <button className={className} style={style} onClick={onClick} disabled={disabled}>{title}</button>
    );
};