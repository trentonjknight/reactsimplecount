// const Counter = () => {
//     const [be, setBe] = useState('no');

//     return (
//         <>
//             <div className="row mx-auto text-center">
//              
//                 <h1 className="text-primary">{be}</h1>
//             

//                 <button onClick={()=> {
//                     setBe('yes');
//                 }}>
//                     YES
//                 </button>
//                 <button onClick={()=> {
//                     setBe('no');
//                 }}>
//                     NO
//                 </button>

//                 {be === 'yes' ? (<h2>Yes</h2>) : (<><div className="col">
//                 <p>H</p>
//                 </div>

//                 <div className="col">
//                 <p>E</p>
//                 </div>

//                 <div className="col">
//                 <p>L</p>
//                 </div>

//                 <div className="col">
//                 <p>L</p>
//                 </div>

//                 <div className="col">
//                 <p>O</p>
//                 </div></>)}
//         
//             </div>