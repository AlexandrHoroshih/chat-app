import React from 'react';
import './app.css';

const App: React.FC = () => {
  return (
    <>
      <main className="layout">
        <aside className="sidebar">Users</aside>
        <section className="chat">message</section>
        <section className="input">input</section>
      </main>
    </>
  );
};

export default App;
