import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

 const Counter = () => {
    const [mils,setMils] = useState(0)
    const [sec,setSec] = useState(0)
    const [tens,setTens] = useState(0)
    const [huns,setHuns] = useState(0)

    useEffect(() => {
        setTimeout(()=> setMils(mils+1),100)
        setTimeout(()=> setSec(sec+1),1000)
        setTimeout(()=> setTens(tens+1),10000)
        setTimeout(()=> setHuns(huns+1),100000)

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
            <h1 className="text-primary">{sec}</h1>
        </div>
        <div className="col mils">
            <h1 className="text-primary">{mils}</h1>
        </div>
    </div>
</div>
    </>
             )
 }
//  Counter.propTypes={
//      hundreds: PropTypes.number,
//      tens: PropTypes.number,
//      ones: PropTypes.number,
//      mils: PropTypes.number
//  }

export default Counter;