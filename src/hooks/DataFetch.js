import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetch = () => {

  const [post, setPost] = useState([])
  const [limit, setLimit] = useState(8)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className='container-fluid'>
        <div className='row p-2'>
          {post.slice(0, limit).map(item => (
            <div className='col-md-3 shadow-lg mt-2' key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}

          {limit < post.length && (
            <center><button className='btn btn-warning mt-3 p-3' onClick={() => setLimit(limit + 1)}>
              Load More</button></center>
          )}

        </div>
      </div>
    </>
  )
}

export default DataFetch
