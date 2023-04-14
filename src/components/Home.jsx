import React from 'react'
import Form from './Form'
import GoalList from './GoalList'
import { useState } from "react";

function Home() {
    const [list, setList] = useState([]);


      const onSaveTheTask = (addTask)=>{
        setList([...list, addTask])
      }

      const deleteFromList = (id)=>{
        let tempList = [...list];
        tempList.splice(id-1 ,1);
        setList(tempList);
        console.log(tempList);
      }

  return (
    <div className="container">
        <Form submitTask = {onSaveTheTask} length={list.length} />
        <div className='container p-5'>
            <h1 className='text-justify'>Your Goal List</h1>
            {
                list.length > 0 ?
                list.map(element=>{
                    return(
                        <GoalList key={element.id} id={element.id} title={element.title} des={element.des} deleteTask={deleteFromList} />
                    )
                }) :
                <small className="text-muted">Please add your goals</small>
            }
        </div>
    </div>
  )
}

export default Home