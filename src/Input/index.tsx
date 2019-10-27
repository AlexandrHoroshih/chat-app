import React from 'react';
import { observer } from 'mobx-react';
import { chatStore } from '../stores/chatStore';
import { Button } from 'reakit/Button';
import classes from './input.module.css';
import { ReactComponent as SendIcon } from './input.svg';

const Input: React.FC = observer(() => {
  const store = React.useContext(chatStore);
  const [registred, setRegistred] = React.useState(false);
  const placeholder = registred ? 'Write a message' : 'Introduce yourself';
  return (
    <div className={classes.inputGridWrapper}>
      <input className={classes.input} placeholder={placeholder} />
      <Button className={classes.button}>
        <SendIcon className={classes.sendIcon} />
      </Button>
    </div>
  );
});

export { Input };
