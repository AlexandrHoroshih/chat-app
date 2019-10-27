import React from 'react';
import { observer } from 'mobx-react';
import { chatStore } from '../stores/chatStore';
import { Message } from './Message';
import classes from './chat.module.css';

const Chat: React.FC = observer(() => {
  const store = React.useContext(chatStore);

  return (
    <div className={classes.chatWrapper}>
      <Message
        isMyMessage={false}
        userName={'Sasha'}
        message={'message message message'}
        datetime={'5 minutes ago'}
      />
      <Message
        isMyMessage={true}
        userName={'Not Sasha'}
        message={
          'aldksmdgsldgkmsdlgkmsdlgm skdgskdgsdhjsd sdhbsjhbsdfjh sds jhsbdfjhbdjhs  shd sjdhsdjh'
        }
        datetime={'2 minutes ago'}
      />
    </div>
  );
});

export { Chat };
