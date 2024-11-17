import React from 'react'
import Style from '../src/todo.module.css'

const FormComponent = (props) => {

    // console.log(props)
    let {handleSubmit,course,trainer,handleChange}=props;

  return (
    <>
        <section id={Style.box}>
            <form onSubmit={handleSubmit}>
                <div><label htmlFor="cname">Course:</label> 
                <input type="text" id='cname' value={course} name='course' onChange={handleChange}/></div>
                <div><label htmlFor="tname">Trainer:</label>
                <input type="text" id='tname' value={trainer} name='trainer' onChange={handleChange}/></div>
                <div>
                    <button id={Style.b1}>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default FormComponent