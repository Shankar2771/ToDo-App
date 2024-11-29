import React, { Fragment, useState } from 'react'
import Style from '../modulecss/todo.module.css'

const TodoApp = () => {

    let [inputData,setInputData]=useState("")

    let[items, setItems]=useState([])

    let [editIndex,setEditIndex]=useState(null)

    let addItems=()=>{
        if(inputData===""){
            alert("Please fill te data")
        }
        else if(editIndex !==null){
            items[editIndex]=inputData;
            setEditIndex(null)
        }
        else{
            setItems([...items,inputData]);
            setInputData("")
        }
    }

    let deleteItems=(id)=>{
        console.log("index of item to delete", id, "item", items[id])
        let filteredData=items.filter((val,index)=>{
            return id!==index
        })
        setItems(filteredData)
    }

    let editItems= id =>{
        console.log("index of item to delete",id, "items", items[id])
        setInputData(items[id])
        setEditIndex(id);
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
    }

  return (
    <>
    <section id={Style.abc}>
        <h1>Welcome to To Do</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter a item' 
            value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>
            <button onClick={addItems}>ADD</button>
        </form>
        <article>
            {items.map((val,ind)=>{
                return(
                    <Fragment key={ind}>
                        <div>
                        <span>{val}</span>
                        <button onClick={()=>{editItems(ind)}}>Edit</button>
                        <button onClick={()=>{deleteItems(ind)}}>Delete</button>
                        </div>
                    </Fragment>
                )
            })}
            
        </article>
        <article>
            <button onClick={()=>{setItems([])}}>Delete All</button>
        </article>

        </section>
    </>
  )
}

export default TodoApp