import React, { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  function fSetTitle(e) {
    setTitle(e.target.value);
  }
  function fSetDes(e) {
    setDes(e.target.value);
  }

  function onHandlerSubmit(){
    const task = {
      id: props.length+1,
      title: title,
      des: des
    }
    props.submitTask(task);
    setTitle('');
    setDes('');
  }

  return (
    <>
        <div className="card">
          <div className="card-body">
            <h1>Log Your Goals For This Bootcamp</h1>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Title</label>
              <input 
                type="text" 
                onChange={(e) => fSetTitle(e)}
                value={title} 
                className="form-control" id="exampleFormControlInput1" placeholder="Enter your title" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea 
                onChange={(e) => fSetDes(e)}
                value={des}
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"></textarea>
            </div>
            <button type="button"  onClick={onHandlerSubmit} className="btn btn-primary btn-lg">Save</button>
          </div>
        </div>
    </>
  );
}

export default Form;
