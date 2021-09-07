import React from 'react'

export const Button = ({children, onClick}) => {
    return (
        <>
            <button onClick={onClick}>
                {children}
            </button>
            <style jsx>{`
                button {
                    align-items: center;
                    background: var(--black);
                    border-radius: 9999px;
                    border: 0;
                    color: var(--white);
                    cursor: pointer;
                    display: flex;
                    font-weight: 800;
                    padding: 8px 24px;
                    transition: opacity .3s ease;
                }
                button:hover {
                    opacity: .7;
                }
            `}</style>
        </>
    )
}
