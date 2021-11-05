import Task from './Task'

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks
      