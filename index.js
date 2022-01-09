function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'master react',
      isCompleted: false,
    },
    {
      text: 'learn the MERN',
      isCompleted: false,
    },
   
    {
      text: 'order pizza',
      isCompleted: false,
    },
    {
      text: 'watch a movie',
      isCompleted: false,
    } 

  ]);
  

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <> 
    <div className="header">
    <h1>To-Do List</h1>
    </div>
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
    <footer><p>Sean Barr &copy; 2022</p></footer>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
