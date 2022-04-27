import Start from "./Dices/Start";
import One from "./Dices/One";
import Two from "./Dices/Two";
import Three from "./Dices/Three";
import Four from "./Dices/Four";
import Five from "./Dices/Five";
import Six from "./Dices/Six";
import { useState } from 'react';

export default function GetDice() {
    const [value, getValue] = useState(0);


    function rollDice() {
        for (let i = 0; i <= 10; i++) {
            setTimeout(() => {
                getRandNum()
            }
                , 100 * i)
        }
    }

    function getRandNum() {
        let randNum = Math.floor(Math.random() * 6) + 1;
        getValue(randNum);
        return randNum;
    }


    function Dice() {
        if (value === 0) {
            return (
                <Start />
            )
        }
        if (value === 1) {
            return (
                <One />
            );
        }
        if (value === 2) {
            return (
                <Two />
            );
        } if (value === 3) {
            return (
                <Three />
            );
        } if (value === 4) {
            return (
                <Four />
            );
        } if (value === 5) {
            return (
                <Five />
            );
        } if (value === 6) {
            return (
                <Six />
            );
        }
    }
    return(
        <>
        <Dice/>
        <button onClick={rollDice}>Roll!</button>
        </>
    )
}