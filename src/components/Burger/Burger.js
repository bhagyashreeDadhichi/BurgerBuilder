import React from 'react'
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_ , i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} /> 
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    
    console.log(transformedIngredients)
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type = "bread-top"></BurgerIngredients> 
            {transformedIngredients}
            <BurgerIngredients type = "bread-bottom"></BurgerIngredients>
        </div>
    );
};

export default burger;