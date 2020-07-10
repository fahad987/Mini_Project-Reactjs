import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Card from './Card'
import sdata from './sData';


ReactDOM.render(

 <div>
 <h1 className="heading_style">List of Top 5 Netflix Series </h1>
{sdata.map((val, index) => {
   console.log(index);
    return(
      <Card 
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}  
      sname={val.sname}
      link={val.link} />
    )
  
})};


  </div>,
  document.getElementById('root')
)