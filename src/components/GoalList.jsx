import React from "react";

function GoalList(props) {

  const onHandler = (id)=>{
    props.deleteTask(id);
  } 

  return (
    <div className="container">
      <div className="card w-75 mb-3">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.des}</p>
          <a href="#" onClick={()=>onHandler(props.id)} className="btn btn-danger">Delete</a>
        </div>
      </div>
    </div>
  );
}

export default GoalList;
