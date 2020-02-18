import React from 'react';
import FilterForm from './FilterForm';

const styles = {
    header: {
        height: '10rem',
        backgroundColor: 'darkgrey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default function() {
    return(
        <div style={styles.header}>
            <h1>Employee Directory</h1>
        </div>
    )
}