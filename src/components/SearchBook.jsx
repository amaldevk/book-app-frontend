import React, { useState } from 'react'
import NavBook from './NavBook'
import axios from 'axios'

const SearchBook = () => {
    const [input,setInput] = useState({
        bookName:""
    })
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const [out,setOutput] =  useState([])
    const readValues=()=>{
        axios.post("http://localhost:3001/api/book/search",input).then(
            (response)=>{
                setOutput(response.data)
            }
        )
    }
  return (
    <div>
        <NavBook/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <   div className="card">
  
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <label htmlFor="" className="form-label">Book name</label>
                                    <input type="text" className="form-control" name="bookName" value={input.bookName} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readValues}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
              <thead>
                <tr>
                  <th scope="col">book name</th>
                  <th scope="col">book id</th>
                  <th scope="col">author name</th>
                  <th scope="col">book publication</th>
                </tr>
              </thead>
              <tbody>
               
               {
                out.map(
                    (value,index)=>{
                        return  <tr>
                        <td>{value.bookName}</td>
                        <td>{value.bookId}</td>
                        <td>{value.bookAuthor}</td>
                        <td>{value.bookPublication}</td>
                      </tr>
                    }
                )
               }
              </tbody>
            </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBook