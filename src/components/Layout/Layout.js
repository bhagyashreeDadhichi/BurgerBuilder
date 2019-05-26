import React from 'react';
import Aux from '../../hoc/auxiliary';
import classes from './Layout.module.css'

const layout = (props) => {
    console.log(classes);
    return (
        <Aux>
            <div>Toolbar, Side Bar, Backdrop </div>
            <main className = {classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
    
    
}


export default layout;