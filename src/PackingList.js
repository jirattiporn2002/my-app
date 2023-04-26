import {useState} from 'react';
function Item({name,isPacked}){
    return (<li>{name} {isPacked && '✔'}</li>);
}
export default function PackingList(){
    const [search,setSearch]=useState("");
    const items=[
        {id:1,
        name:"Macbook Pro",
        price:30000},
        {id:2,
         name:"Macbook Air",
        price:22000},
        {id:3,
         name:"Mac Mini",
         price:24000},
    ];
    const filterList= items.filter(item=> item.name.includes(search));
    const itemList=items.map(item=>
                        <li key={item.id}>
                            id:{item.id+" "}
                            name:{item.name+" "}
                            price:{item.price}
                        </li>);
    const filterList2=filterList.map(item=>
                        <li key={item.id}>
                            id:{item.id+" "}
                            name:{item.name+" "}
                            price:{item.price}
                        </li>);
    const onTextChange=(event)=>{
        setSearch(event.target.value);
    }
    return (<>
        Search:
        <input
            type="text"
            onChange={event=>onTextChange(event)}
        />
        <h1>My Shop</h1>
        <ul>
          {itemList}
        </ul>
        <h1>Search Result:</h1>
        <ul>
          {filterList2}
        </ul>
    </>);
}