import React from 'react';
import { observer } from 'mobx-react';
import { chatStore } from '../stores/chatStore';
import classes from './user-list.module.css';

const UserList: React.FC = observer(() => {
  const store = React.useContext(chatStore);

  return (
    <div className={classes.list}>
      <h2 className={classes.listTitle}>Now in the chat:</h2>
      <ul className={classes.listContent}>
        {store.userList.map((username: string) => {
          return <li className={classes.listItem}>{username}</li>;
        })}
      </ul>
    </div>
  );
});

export { UserList };
