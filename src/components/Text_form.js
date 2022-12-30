import React,{useState} from 'react'

export default function Text_form(props) {
    const[text,setText]= useState('Enter your text here')
    const[textlength,settextlength]= useState(0)
   let onclick_func = ()=>{
        
        let newtext = text.toUpperCase();
        setText(newtext);
        {props.showalert("Converted to Uppercase","success")}

    }

    let onchangefunc = (event)=>{
      
        setText(event.target.value)
    }

    let onclickLower_func = ()=> {

      let newtext = text.toLowerCase()
      setText(newtext)
      {props.showalert("Converted to Lowercase","success")}
    }
    
    // new function learned....this is the function to copy your text..
    const handlecopy = () => {  
    
      let select_item = document.getElementById('exampleFormControlTextarea1')
      select_item.select()
      navigator.clipboard.writeText(select_item.value)
      {props.showalert("Text copied","success")}

    }
    
    // this will help to remove the extra space
    let removeExtraSpaces = () => {
    
      let present_text = text.split(/[" "] + /)
      setText(present_text.join(" "))
  

    }
    return (
  
        <>
    <div className = "container"style = {{color: props.mode === 'light'?'black':'white'}}>

    <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value = {text} onChange = {onchangefunc} id="exampleFormControlTextarea1" rows="8" style = {{
    backgroundColor: props.mode=='light'?'white':'grey',
    color: props.mode == 'light'? 'black':'white'
  }

 }></textarea>
</div>

<br/>
<button className = 'btn btn-primary'  onClick = {onclick_func} >Convert to Uppercase</button>
<button className = 'btn btn-primary mx-2'  onClick = {onclickLower_func} >Convert to lowercase</button>
<button className = 'btn btn-primary mx-2'  onClick = {handlecopy} >Copy your text here!</button>
<button className = 'btn btn-primary mx-2'  onClick = {removeExtraSpaces} >Remove Extra Spaces</button>
</div>

 <div className="container my-5" style = {{color: props.mode == 'light'?'black':'white'}}>
   
   <h2 >Your Summary is here</h2>
   <p>{text.length} characters and {text.split(" ").length} words</p>

 </div>

    </>
  )
}
