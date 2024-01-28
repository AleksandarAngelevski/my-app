import {useState} from "react";

function ListElement({value}){

    return(<div className="container" style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}><li style={listElementStyle}className="task">{value}</li><button>del</button></div>)
}
let userInput = "";
export default function List(){
    function handleChange(e){
        changeValue(e.target.value);
        userInput=e.target.value;
    }

    const [value1,changeValue]=useState("");
    const [todo,changeTodo]=useState([]);
    function submitBtn(){
        changeTodo([...todo,userInput]);
        changeValue("");

    }
    return(
        <>
        <div style={{margin:"0",height:"80px",display:"flex",justifyContent: "center",alignItems: "center"}}><input value={value1} onChange={handleChange} style={inputFieldStyle} type={"text"}/><button onClick={submitBtn}  style={buttonStyle}>Add</button></div>
        <ul style={listStyle}>
            {todo.map((element)=>
                <ListElement value={element}/>
            )}
        </ul>
        </>
    )
}
const inputFieldStyle={
    cursor: "default",
    backgroundColor:"grey",
    width:"300px",
    border:"none",
    borderRadius:"50px",
    borderTopRightRadius:"0",
    borderBottomRightRadius:"0",
    height:"100%",
    margin:"0",
    padding:"1rem",
    fontSize:"1.5rem"
    
}
const buttonStyle={
    backgroundColor:"blue",
    width:"100px",
    border:"none",
    borderRadius:"50px",
    borderTopLeftRadius:"0",
    borderBottomLeftRadius:"0",
    height:"100%",
    padding:"1rem",
    fontSize:"1.5rem",
    margin:"0"
}
const listStyle ={
    display:"flex",
    flexDirection:"column",
    border:"2px black solid",   
    justifyContent:"center",
    alignItems:"center",
    listStyle:"none",
    fontFamily:"Arial",
    fontSize:"25px",
    margin:"0",
    padding:"1rem",
    width:"500px"
}
const listElementStyle ={
    marginTop:"1rem",
    marginBottom:"1rem",
    maxWidth:"400px",
    float:"left",
    overflowWrap:"break-word",

}