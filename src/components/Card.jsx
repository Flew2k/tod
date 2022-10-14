import React from 'react'
import TrashIcon from '../assets/Trash'


export const Card = (props) => {
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            height: 50,
            width: 730,
            border: '2px solid black',
            paddingRight: 20,
            justifyContent: 'space-between'
        },
        left: {
            display: 'flex',
            alignItems: 'center',
            width: 200,
            gridGap: 40,
            paddingLeft: 20,
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.left}>
                <input type={'checkbox'}/>
                <div>{props.task}</div>
            </div>
            <TrashIcon />            
        </div>
    )
}
