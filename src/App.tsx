import React from 'react';
import { UserList } from './UserList';
import { Input } from './Input';
import { Chat } from './Chat';
import './app.css';

const App: React.FC = () => {
  return (
    <main className="layout">
      <aside className="sidebar">
        <UserList />
      </aside>
      <section className="chat">
        <Chat />
      </section>
      <section className="input">
        <Input />
      </section>
    </main>
  );
};

export default App;
