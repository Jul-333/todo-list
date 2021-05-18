import { useState } from 'react';
import './App.css';
import { ItemElementInterface } from './utils/interfaces';
import List from './components/List/List';
import Form from './components/Form/Form';
import Settings from './components/Settings/Settings'
import { ThemeContext, Theme } from './utils/themeContext';

const App = () => {
  const [todos, setToDos] = useState<ItemElementInterface[]>([]);
  const [theme, setTheme] = useState<Theme>(Theme.Pink)


  const handleTodoCreate = (todo: ItemElementInterface) => {
    const newToDo: ItemElementInterface[] = [...todos]
    newToDo.push(todo);
    setToDos(newToDo)
  }

  const handleTodoComplete = (id: number) => {
    const newToDo: ItemElementInterface[] = [...todos];
    newToDo.forEach((item) => { if (item.id === id) { item.isCompleted = !item.isCompleted } })
    setToDos(newToDo)
  }

  const handleTodoDelete = (id: number) => {
    const filteredNewTodo: ItemElementInterface[] = todos.filter(item => item.id !== id)
    setToDos(filteredNewTodo)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">

        <h1 className="h1">ToDoList</h1>
        <div className="wrapper">
          <div className="table">
            <Form handleTodoCreate={handleTodoCreate} />
            <List
              todos={todos}
              handleTodoComplete={handleTodoComplete}
              handleTodoDelete={handleTodoDelete}
            />
          </div>
          <Settings />

        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
