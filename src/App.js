import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Biking',
      day: 'Friday at 11:30am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Hair Appointment',
      day: 'Tuesday at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Monday at 10:30am',
      reminder: false,
    },
  ])

  // Add Task
  const addTask = () => {
    const id = Math.floor(Math.random() * 10000) + 1

    console.log(id)
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder:
        !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} /
        > 
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

export default App;
