import React,{useState} from "react"
const Counter =()=>{
    const [count,setCount] = useState(0);
    const [show,setShow]=useState(true);
    const [value,setvalue]=useState("Type here!");
    const onTextChange= event =>setvalue(event.target.value)
    return (<>
    <div>
       
        Test Mouse Event here</div>
    <button onClick={() => setCount(count + 1 )}>
        Click me
    </button> 
    <p>You Clicked {count} times </p>
    <button onClick={()=>setShow(!show)}>
    show/hide
    </button>
    {(show)?"Hello World":" "}
    <input
    type="text"
    value={value}
    onChange={event=>onTextChange(event)}
    />
    <h3>{value.length}</h3>

    </>)
}
export default Counter;