import { connect } from "react-redux";
import { deleteMessage, updateMessage } from "../../store/slices/TodoListSlice";
import classNames from "classnames";
import styles from './TodoList.module.sass';

function TodoList({messages, deleteMessageById, updateMessageById}) {
  const isDoneChangeHandler = (id, checked) => {
    updateMessageById(id, {isDone: checked});
  };

  return (
    <ul className={styles.list}>
      {messages.map(m => <li key={m.id} className={styles.containerItem}>
        <label className={classNames(styles.item, {[styles.done]: m.isDone, [styles.undone]: !m.isDone})}>
          <input type="checkbox" checked={m.isDone} onChange={({target: {checked}}) => {isDoneChangeHandler(m.id, checked)}} />
          {m.message}
        </label>
        <button className={styles.delBtn} onClick={() => deleteMessageById(m.id)}>Delete</button>
      </li>)}
    </ul>
  )
}

const mapStateToProps = (state) => state.todoList;

const mapDispatchToProps = dispatch => ({
  deleteMessageById: (id) => dispatch(deleteMessage(id)),
  updateMessageById: (id, data) => dispatch(updateMessage({id, data})),
})

export default connect (mapStateToProps, mapDispatchToProps) (TodoList);