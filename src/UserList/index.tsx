import React from 'react';
import classes from './user-list.module.css';

const UserList: React.FC = () => {
  return (
    <div className={classes.list}>
      <h2 className={classes.listTitle}>Now in the chat:</h2>
      <ul className={classes.listContent}>
        <li className={classes.listItem}>John Doe</li>
        <li className={classes.listItem}>John Doe</li>
        <li className={classes.listItem}>John Doe</li>
      </ul>
    </div>
  );
};

export { UserList };
