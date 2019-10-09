import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

//Example without proptypes

 const Counter = () => {
    const [mils,setMils] = useState(0)
    const [secs,setSecs] = useState(0)
    const [tens,setTens] = useState(0)
    const [huns,setHuns] = useState(0)


    useEffect(() => {
        setTimeout(()=> setMils(mils+1),100)
        setTimeout(()=> setSecs(secs+1),1000)
        setTimeout(()=> setTens(tens+1),10000)
        setTimeout(()=> setHuns(huns+1),100000)

        if (mils === 10){
            setMils(0)
        }
        if (secs === 10){
            setSecs(0)
        }
        if (tens === 10){
            setTens(0)
        }
    },[mils])

    return (
<>
<div className="container mx-auto text-center">
    <div className="row">

        <div className="col">
            <h1 className="text-primary">COUNT--></h1>
        </div>

        <div className="col huns">
            <h1 className="text-primary">{huns}</h1>
        </div>

        <div className="col tens">
            <h1 className="text-primary">{tens}</h1>
        </div>
        <div className="col sec">
            <h1 className="text-primary">{secs}</h1>
        </div>
        <div className="col mils">
            <h1 className="text-primary">{mils}</h1>
        </div>
    </div>
</div>
    </>
             )
 }

//Example using proptypes

// function Counter(props){
//     return(
//     <div className="container">
//         <div className="row">
//             <div className="clock col">Clock</div>
//             <div className="four col">{props.four}</div>
//             <div className="three col"> {props.three} </div>
//             <div className="two col"> {props.two} </div>
//             <div className="one col"> {props.one} </div>
//         </div>
//     </div>
//     )
// }

//  Counter.propTypes={
//      four: PropTypes.number,
//      three: PropTypes.number,
//      two: PropTypes.number,
//      one: PropTypes.number
//  };

// let counter = 0
// setInterval(function(){
//     const four = Math.floor(counter/1000)
//     const three = Math.floor(counter/100)
//     const two = Math.floor(counter/10)
//     const one = Math.floor(counter/1)

// counter++;
// ReactDOM.render(<Counter one={one} two={two} three={three} four={four}/>, document.getElementById('root'));
// },1000);


// serviceWorker.unregister();
//End proptype example

export default Counter;