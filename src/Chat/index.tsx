import React from 'react';
import { observer } from 'mobx-react';
import { chatStore, IMessage } from '../stores/chatStore';
import { Message } from './Message';
import classes from './chat.module.css';

const Chat: React.FC = observer(() => {
  const store = React.useContext(chatStore);

  return (
    <div className={classes.chatWrapper}>
      {store.messages.map((message: IMessage, i: number) => {
        const { id, username, text, datetime } = store.messages[
          store.messages.length - 1 - i
        ];
        return (
          <Message
            key={i}
            isMyMessage={store.myUser.id === id}
            userName={username}
            message={text}
            datetime={datetime}
          />
        );
      })}
    </div>
  );
});

export { Chat };
