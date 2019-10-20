import React from 'react';
import { Button } from 'reakit/Button';
import classes from './input.module.css';
import { ReactComponent as SendIcon } from './input.svg';

const Input: React.FC = () => {
  return (
    <div className={classes.inputGridWrapper}>
      <input className={classes.input} placeholder="Write a message..." />
      <Button className={classes.button}>
        <SendIcon className={classes.sendIcon} />
      </Button>
    </div>
  );
};

export { Input };
