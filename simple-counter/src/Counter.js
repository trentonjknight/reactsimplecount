import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

//Example without proptypes

//  const Counter = () => {
//     const [mils,setMils] = useState(0)
//     const [secs,setSecs] = useState(0)
//     const [tens,setTens] = useState(0)
//     const [huns,setHuns] = useState(0)


//     useEffect(() => {
//         setTimeout(()=> setMils(mils+1),100)
//         setTimeout(()=> setSecs(secs+1),1000)
//         setTimeout(()=> setTens(tens+1),10000)
//         setTimeout(()=> setHuns(huns+1),100000)

//         if (mils === 10){
//             setMils(0)
//         }
//         if (secs >9){
//             setSecs(0)
//         }
//         if (tens >9){
//             setTens(0)
//         }
//         if (huns > 9){
//             setHuns(0)
//         }
//     },[mils])


const Counter = () => {
    const [mils,setMils] = useState(0);
    const secs = Math.floor((mils /10 ) % 10);
    const tens = Math.floor((mils/100) % 10);
    const huns = Math.floor((mils/1000) % 10)
    useEffect(() => {
        setTimeout(()=> setMils(mils+1),100)
    },[mils])

    return (
<>
<div className="container text-center">
    <div className="row">

        <div className="col mt-5">
            <p className="text-primary">COUNT-></p>
        </div>

        <div className="col huns mt-5">
            <p className="text-primary">{huns} ---></p>
        </div>

        <div className="col tens mt-5">
            <p className="text-primary">{tens} ---></p>
        </div>
        <div className="col sec mt-5">
            <p className="text-primary">{secs} ---></p>
        </div>
        <div className="col mils mt-5">
            <p className="text-primary">{mils % 10}</p>
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