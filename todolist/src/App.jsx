import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const handleSbumit = (e) => {
    e.preventDefault();
    setTask([...task, { title, desc }]);
    setTitle("");
    setDesc("");
  }

  const handleDelete= (index) =>{
    let copyTask = [...task]
    copyTask.splice(index,1);
    setTask(copyTask);
  }
  let renderTask = <h2>No Task Available</h2>
  if(task.length > 0)
  {
    renderTask = task.map((task, index) => {
      return (
        <li key={index} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between w-2/3'>
            <h5 className='text-2xlfont-semibold'>{task.title}</h5>
            <h6 className='text-2xlfont-semibold'>{task.desc} </h6>
          </div>
          <button onClick={()=> handleDelete(index)} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
  
      )
    })
  }
  
  return (
    <>
      <h1 className='bg-black text-white p-5
       text-5xl font-bold text-center'>Raghav's Todo List</h1>
      <form onSubmit={handleSbumit}>
        <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-5 py-2 '
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-5 py-2 '
          placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'></div>
      <ul>
        {renderTask}
      </ul>
    </>
  )
}

export default App;
