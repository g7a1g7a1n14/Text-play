import {useState} from 'react'

const Form = (props) => {
  
  const REAL = () =>{
    let newOne = text.toUpperCase();
    setText(newOne)
  }
  const real = () =>{
    let newOne = text.toLowerCase();
    setText(newOne)
  }
  const Xspace = () =>{
    let res = text.split(/[ ]+/);
    setText(res.join(" "));
  }
  const exercise = () =>{
    let res = "";
    setText(res)
  }
  const ch1 = () =>{
    let newOne = "";
    for (let i = 0; i < text.length; i++) {
      if(i&1){
        let str = "";
        str += text[i];
        let res = str.toUpperCase();
        newOne += res;
      }
      else{
        let str = "";
        str += text[i];
        let res = str.toLowerCase();
        newOne += res;
      }
    }
    setText(newOne);
  }
  const challenge2 = () =>{
    let person = prompt("Please enter the text u want to change:", "Enter here");
    let person2 = prompt("Please enter the text u want:", "Enter here");
    let newOne = text.replaceAll(person,person2)
    setText(newOne);
  }
  const canChange = (element) =>{
    setText(element.target.value);
  }
  const[text,setText] = useState("Enter the text here");
  return (
    <>
      <div className='container'>
        <div class="mb-3 my-5">
          <label for="myBox" class="form-label" style = {{color : props.mode === 'dark'?'white':'#131516'}}><h1>{props.heading}</h1></label>
          <textarea className='form-control' value={text} onChange = {canChange} style = {{backgroundColor : props.mode === 'dark'?'#131516':'white',color : props.mode === 'dark'?'white':'#131516'}} id="myBox" rows="8"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mx-2" onClick={REAL}>Uppercase</button>
        <button type="submit" class="btn btn-primary mx-2" onClick={real}>Lowercase</button>
        <button type="submit" class="btn btn-primary mx-2" onClick={Xspace}>Remove Extra Spaces</button>
        <button type="submit" class="btn btn-primary mx-2" onClick={ch1}>Alternate casing</button>
        <button type="submit" class="btn btn-primary mx-2" onClick={challenge2}>Replace text</button>
        <button type="submit" class="btn btn-primary mx-2" onClick={exercise}>Clear</button>

      </div>
      <div className="container my-5" style = {{color : props.mode === 'dark'?'white':'#131516'}}>
        <h1>Your Text Summary</h1>
        <p>
          Words: 
          {text.length > 0 &&
            text.split(/\s+/).length
          } 
          {text.length === 0 &&
            0
          } 
          <br />
          Characters: {text.length} <br />
          Time to read:
          {text.length > 0 &&
            0.34* text.split(/\s+/).length
          }
          {text.length === 0 &&
            0
          }
          sec 
        </p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Form