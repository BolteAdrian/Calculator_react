import './Calculator.css';
import { useState, useEffect } from 'react';
import React from 'react';

function Calculator() {

    const [calcul, setCalcul] = useState(0);
    const [result, setResult] = useState(0);
    //const istoric = new Array();
    const [istoric, setIstoric] = useState([])

    useEffect(
        () => {
            console.log("Result was modified", result);
            const data = istoric;
            data.push(result);
            setIstoric(data);
        }, [result]
    );

    function afisare_istoric()
    {
       var e = "<hr/>";   
        
       for (var y=0; y<istoric.length; y++)
       {
         e += "Rezultat " + y + " = " + istoric[y] + "<br/>";
       }
       document.getElementById("Result").innerHTML = e;
    }

    useEffect(
        () => {
            setIstoric([0]);
        }, []
    );



    function final_result() {
        if (calcul.indexOf('/0') > -1) {
            setResult("Nu se poate imparti cu 0");
            setCalcul("Nu se poate imparti cu 0");
            return 0;
        }
        //Function evalueaza expresia stringului si o executa 
        let final_result = Function("return " + calcul)();
        setCalcul(final_result);
        setResult(final_result);
    }

    function numar(valoare) {
        if (calcul !== 0) {//pentru numere de mai multe cifre
            setCalcul(calcul + valoare);
        } else {//pentru numere de o cifra
            setCalcul(valoare);
        }
    }

    function adunare() {
        setCalcul(calcul + "+");
    }

    function scadere() {
        setCalcul(calcul + "-");
    }

    function inmultire() {
        setCalcul(calcul + "*");
    }

    function impartire() {
        setCalcul(calcul + "/");
    }

    function stergere() {
        setCalcul(0);
    }

    function negare() {
        setCalcul(calcul + "*(-1)");
    }
    function stergere_element() {
        setCalcul(calcul.substring(0, calcul.length - 1));
    }

    return (
        <div>
        <div id="dimensiune_calculator">
            <div id="distanta_ecran_butoane">
                <div id="ecran">
                    <p>{calcul}</p>
                </div>
                <div>
                    <button onClick={stergere}>C</button>
                    <button onClick={stergere_element}>Backspace</button>
                    <button onClick={impartire}>/</button>
                </div>
                <div>
                    <button onClick={() => numar('1')}>1</button>
                    <button onClick={() => numar('2')}>2</button>
                    <button onClick={() => numar('3')}>3</button>
                    <button onClick={inmultire}>*</button>
                </div>
                <div>
                    <button onClick={() => numar('4')}>4</button>
                    <button onClick={() => numar('5')}>5</button>
                    <button onClick={() => numar('6')}>6</button>
                    <button onClick={scadere}>-</button>
                </div>
                <div>
                    <button onClick={() => numar('7')}>7</button>
                    <button onClick={() => numar('8')}>8</button>
                    <button onClick={() => numar('9')}>9</button>
                    <button onClick={adunare}>+</button>
                </div>
                <div align="center">
                    <button onClick={negare}>+/-</button>
                    <button onClick={() => numar('0')}>0</button>
                    <button onClick={final_result}>=</button>
                </div>
                <div align="center">
                    <button onClick={afisare_istoric}>Istoric</button>
                </div>
            </div>
        </div>
        <div id="Result"></div> 
        </div>
    )
}

export default Calculator