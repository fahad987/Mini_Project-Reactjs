// // import React from 'react';
// // import './App.css';
 
// // function App() {

// // let currDate = new Date(2020, 8, 7, 23);
// // currDate = currDate.getHours();

// // let greeting = "";

// // const cssStyle =  {

// // }
// // if(currDate>= 1 && currDate < 12){
// //     greeting = "Good Morning"
// //     cssStyle.color= "Green"
// // }else if(currDate >= 12 && currDate < 20){
// //    greeting = "Good AfterNoon"
// //    cssStyle.color="Blue"
// // }else if (currDate >=20 && currDate < 24){
// //     greeting = "Good Night"
// //     cssStyle.color="Black"
// // }


// //   return (
// //     <div>
// //      <h1>Hello Sir,<span style={cssStyle}> {greeting} </span>
// //      </h1>
// //     </div>
// //   );
// // }

// // export default App;

// const name = "Abc"

// const fname = "sdf"

// function abc(){
//    let sname = "ali"
//     return sname;
// }
// function ndm(){
//     let lname = "khan"
//     return lname;
// }

// export default name;

// export {fname,abc,ndm};


function add(a,b){
  let add = a + b;
  return add;
}

function sub(a,b){
    let sub = a-b;
    return sub;
}

function mul (a,b){
    let mul = a * b;
    return mul;
}
function div (a, b){
   let div = a /b;
    return div.toFixed(2);
}

export default add;

export{sub,mul,div}












