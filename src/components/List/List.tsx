import { useContext } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './List.css';
import { ItemListInterface } from '../../utils/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext, Theme } from '../../utils/themeContext';

const List = (props: ItemListInterface) => {
  const { todos, handleTodoComplete, handleTodoDelete } = props;
  const { theme } = useContext(ThemeContext)!;
  const themeCLass: string = theme === Theme.Pink ? "pink" : "blue";

  return (
    <div className="list-block">
      <TransitionGroup component="ul">
        {todos.map((item) => {
          return (
            <CSSTransition key={item.id} classNames={"item"} timeout={800}  >
              <li className={"item " + themeCLass}>
                <FontAwesomeIcon
                  className={
                    item.isCompleted ? "icon-arrow done-completed" : "icon-arrow done"
                  }
                  icon={faCheckCircle}
                  onClick={() => handleTodoComplete(item.id)}
                />
                <p className={item.isCompleted ? "text text-completed" : "text"}>{item.text}</p>
                <FontAwesomeIcon
                  className="icon-arrow close"
                  icon={faTimesCircle}
                  onClick={() => handleTodoDelete(item.id)}
                />
              </li>
            </CSSTransition>)
        })}
      </TransitionGroup >
    </div>
  );
}

export default List;

