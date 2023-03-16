import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert(" Converted to uppercase","Success")
    } 
    const handleClear = () => {
        let newText = '';
        setText(newText);
    } 
    const handleLowerClick = () => {
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert(" Converted to lowercase","Success")
    } 
    const handleOnChange = (event) => {
        setText(event.target.value);
        console.log(text)
        const spaceCount = (text.split(" ").length - 1);
        const chars = (text.length-spaceCount)+1;
        let preview = "Your text contains "+text.split(" ").length+" words and "+chars+" characters."
        setPreviewText(preview);
    }
    const handleCopy = (event) => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = (event) => {
       let newtext=text.split(/[ ]+/);
       setText(newtext.join(" "));
    }
    const [text,setText] = useState('');
    const [previewText,setPreviewText] = useState('');
  return (
    <div style={{color : props.mode === 'dark'? 'white' : 'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark'? 'grey' : 'light'}} 
  onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    <div className="container my-3">
        <h2>Preview</h2>
        <p>{text.length>0 ? text :"Enter something in above text box to preview it here"}</p>
        <h2>Your text summary</h2>
        <p>{text.length > 0 ? previewText 
        : "Enter something in above text box to have summary here"}</p>
        {/* <p>Your text has {text.split(" ").length} words and {text.length} characters.</p> */}
        {/* <p>It takes {0.008 * text.split(" ").length} minutes to read above text.</p>
 */}    </div>
    </div>
  )
}
