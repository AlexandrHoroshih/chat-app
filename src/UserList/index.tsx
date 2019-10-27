import React from 'react';
import { observer } from 'mobx-react';
import { chatStore, IUser } from '../stores/chatStore';
import classes from './user-list.module.css';

const UserList: React.FC = observer(() => {
  const store = React.useContext(chatStore);

  return (
    <div className={classes.list}>
      <h2
        className={classes.listTitle}
      >{`Now in the chat(${store.userCount}):`}</h2>
      <ul className={classes.listContent}>
        {store.users.map((user: IUser) => {
          return <li className={classes.listItem}>{user.username}</li>;
        })}
      </ul>
    </div>
  );
});

export { UserList };
