import React, { Fragment } from 'react'
import Style from '../src/todo.module.css'

const TodoList = (props) => {

  // console.log(props);

  let {items,deleteItem,updateItem,clearAll}=props
  return (
    <>
    <section id={Style.box2}>
      <table>
        <thead>
          <tr>
            <th>COURSE</th>
            <th>TRAINER</th>
            <th>More Options</th>
          </tr>
        </thead>
        <tbody>
          {items.length >0 && items.map((val)=>{
            // console.log("array values", val)
            let {id,course,trainer}=val

            return(
              <Fragment key={id}>
                <tr>
                  <td>{course}</td>
                  <td>{trainer}</td>
                  <td >
                    <button className={Style.b3} onClick={()=>{deleteItem(id)}}>DELETE</button>
                    <button className={Style.b3} onClick={()=>{updateItem(id)}}>EDIT</button>
                  </td>
                </tr>
              </Fragment>
            )
          })}
        </tbody>
      </table>
      <div>
        <button id={Style.b2} onClick={clearAll}>CLEAR-ALL</button>
      </div>
      </section>
    </>
  )
}

export default TodoList