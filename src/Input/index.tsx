import React from 'react';
import { observer } from 'mobx-react';
import { chatStore } from '../stores/chatStore';
import { Button } from 'reakit/Button';
import classes from './input.module.css';
import { ReactComponent as SendIcon } from './input.svg';
import { ReactComponent as AddUserIcon } from './add-user.svg';

const Input: React.FC = observer(() => {
  const store = React.useContext(chatStore);
  const [input, setInput] = React.useState('');
  const placeholder = store.registred
    ? 'Write a message'
    : 'Enter your name and send it';

  const onInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  };

  const onSend = (): void => {
    if (!store.registred) {
      store.setMyUser(input);
      setInput('');
    } else {
      const { id, username } = store.myUser;
      store.addMessage({
        id,
        username,
        text: input,
        datetime: 'datetime',
      });
      setInput('');
    }
  };
  return (
    <div className={classes.inputGridWrapper}>
      <input
        className={classes.input}
        onChange={onInput}
        placeholder={placeholder}
        value={input}
      />
      <Button onClick={onSend} className={classes.button}>
        {store.registred ? (
          <SendIcon className={classes.sendIcon} />
        ) : (
          <AddUserIcon className={classes.sendIcon} />
        )}
      </Button>
    </div>
  );
});

export { Input };
