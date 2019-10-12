import React from 'react';

export function Dashboard(props) {
    const handleBalls = () => {
        props.balls < 3 ? props.setBalls(props.balls + 1) : props.setBalls(0)
     }
     const handleStrikes = () => {
         props.strikes < 2 ? props.setStrikes(props.strikes + 1) : props.setStrikes(0)
     }
    return (
        <>
        <button onClick={(e) => {
                e.preventDefault()
                 handleStrikes()
            }}>Strike</button>
            <button onClick={(e) => {
                e.preventDefault()
                 handleBalls()
            }}>Ball</button>
            <button onClick={(e) => {
                e.preventDefault()
                props.strikes < 2 && handleStrikes() 
            }}>Foul</button>
            <button onClick={(e) => {
                e.preventDefault()
                 props.setBalls(0)
                 props.setStrikes(0)
            }}>Hit</button>

        </>
    )
}