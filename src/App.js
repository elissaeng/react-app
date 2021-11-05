import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'blah',
      day: 'friday',
      reminder: true,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App;
