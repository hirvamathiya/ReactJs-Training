import React, {useState} from 'react';
import Todolist from './Todolist';
const App =()=>
{
    
    const [inputList, setInputList] = useState("");
    const [items, setItems] =useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    };
    
    const listOfItems = () =>{
         setItems((oldItems) =>{
           return [...oldItems,inputList];
         });
         
         setInputList('');
      
    };

    const deleteItems = (id) =>{
      
      setItems((oldItems) =>{
          return oldItems.filter((arrElem,index)=>{
              return index!==id;
          })
      })
  };

    return(
      <>
      <div className="app">
        <div className="centerDiv">
           <br/>

           <h1>Todo List</h1>
           <br/>
           <input type="text" placeholder="Add your todo here"  value={inputList} onChange={itemEvent}/>
           <button onClick={listOfItems}>+</button>
         
          <ol>
            {
              items.map((itemval,index)=>{
                return <Todolist key={index} id={index} text={itemval}  onSelect={deleteItems}    />;
              })
            }
          </ol>
           <div>
               
          </div> 
        </div>
      </div>
      </>
    );
    
};

export default App;
