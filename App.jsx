import React, { useState } from 'react'
import FormComponent from './FormComponent'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import Style from '../src/todo.module.css'

const App = () => {

    let [state,setState]=useState({
        items:[],   // to store course and trainer set in the form of array of object
        course:"",
        trainer:"",
        id:uuidv4()
    })

    // ! to handle changes
    let handleChange=(e)=>{
        // console.log(e)
        let{name,value}=e.target
        setState({...state,[name]:value})

    }

    // ! to delete the particular data
    let deleteItem=(id)=>{
        // console.log("Id of item to be deleted",id)
        const filterData=state.items.filter((val)=>{
            // console.log("inside value",val)
            return val.id !==id
        })
        setState({...state,items:filterData})
    }


    // ! To edit the parrticular data
    // ? "ïd" --> id of item to be deleted
    let updateItem=(id)=>{
        // console.log("Id of item to be edited", id);
        // ? finding the value to update
        const itemToUpdate=state.items.find((val)=>{
            // console.log("Individual value of array", val)
            return val.id===id
        })
        // console.log("Item to edit", itemToUpdate); // obj

        // * Filtering items that we are not updating, and to display on UI
        let restItems=state.items.filter((val)=>{
            return val.id!==id
        })



        setState({
            items:restItems,
            course:itemToUpdate.course,
            trainer:itemToUpdate.trainer,
            id:itemToUpdate.id
        })
    }

    //! Clearing all data
    let clearAll=()=>{
        setState({
            items:"",
            course:"",
            trainer:""
        })

    }


    // ! to hanndle form
    let handleSubmit=(e)=>{
        e.preventDefault()
        // while submitting the form transferring the data into array
        setState({
            ...state,
            items:[
                ...state.items,
                {
                    course:state.course,
                    trainer:state.trainer,
                    id:state.id
                }
            ],
            course:"",
            trainer:"",
            id:uuidv4()
        })
    }
  return (
    <>
    <section>
        <h1>Welcome to To-Do</h1>
        <aside>
            <FormComponent handleSubmit={handleSubmit} course={state.course} trainer={state.trainer} handleChange={handleChange}/>
            <TodoList items={state.items} deleteItem={deleteItem} updateItem={updateItem} clearAll={clearAll}/>
        </aside>
    </section>
    </>
  )
}

export default App


// ! uuid --> library -- to generate id