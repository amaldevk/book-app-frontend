import React, { useState } from 'react'
import NavBook from './NavBook'
import axios from 'axios';

const AddBook = () => {
    const [bk,setInput] = new useState({
        bookName: "",
        bookId: "",
        bookAuthor: "",
        bookPublication: "",
    });

    const inputHandler=(event)=>{
        setInput({...bk,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        axios.post("http://localhost:3001/api/book/add",bk).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("data uploaded")
                    setInput(
                        {
                            bookName: "",
                            bookId: "",
                            bookAuthor: "",
                            bookPublication: "",
                        }
                    )
                } else {
                    alert("failed")
                }
            }
        )
    }
  return (
    <div>
        <NavBook/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card">
  
                        <div class="card-body">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">book Name</label>
                                    <input type="text" className="form-control" name="bookName" value={bk.bookName} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">book id</label>
                                    <input type="text" className="form-control" name="bookId" value={bk.bookId} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">book author</label>
                                    <input type="text" className="form-control" name="bookAuthor" value={bk.bookAuthor} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">book publications</label>
                                    <input type="text" className="form-control" name="bookPublication" value={bk.bookPublication} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readValues}>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook