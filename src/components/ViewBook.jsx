import React, { useEffect, useState } from 'react'
import NavBook from './NavBook'
import axios from 'axios'

const ViewBook = () => {
    const [data,setData] = new useState([])
    const getData=()=>{
        axios.get("http://localhost:3001/api/book/view").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect( ()=>{getData()},[])
  return (
    <div>
        <NavBook/>
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
                data.map(
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

export default ViewBook