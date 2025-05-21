import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styles from './TodoPage.module.sass';

function TodoPage() {
  return (
    <div className={styles.page}>
        <h1>Todo List</h1>
        <TodoForm/>
        <TodoList/>
    </div>
  )
}

export default TodoPage;