import React, { useState, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { ItemElementInterface, FormInterface } from '../../utils/interfaces'
import { validation } from '../../utils/validation';
import Input from './Input';
import { ThemeContext, Theme } from '../../utils/themeContext';
import './Form.css';

const Form = (props: FormInterface) => {
  const { theme } = useContext(ThemeContext)!;
  const [error, setError] = useState<boolean | string>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valueInputRef: string | undefined = inputRef.current?.value;
    const value: string = valueInputRef ? valueInputRef : ""
    const isInvalid: string | boolean = validation(value);
    if (isInvalid) return setError(isInvalid);

    const newToDo: ItemElementInterface = {
      id: Date.now(),
      text: value,
      isCompleted: false
    }
    props.handleTodoCreate(newToDo);
    formRef.current!.reset();
    setError(false);
  }

  return (
    <div className="form-block">
      <form ref={formRef} className={"form " + (theme === Theme.Pink ? "pink" : "blue")} onSubmit={onSubmit}  >
        <Input ref={inputRef} error={error} />
        <button className="input-button" type="submit" >
          <FontAwesomeIcon className="icon-arrow" icon={faAngleDoubleRight} />
        </button>
      </form>
    </div>
  );
}

export default Form;

