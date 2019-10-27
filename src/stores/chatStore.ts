import { observable, action, computed } from 'mobx';
import { createContext } from 'react';

export type User = {
  id?: number;
  name: string;
};

export type Message = {
  userId?: number;
  username: string;
  text: string;
  datetime: string;
};

class Store {
  @observable isLoading: boolean = false;
  @observable users: User[] = [];
  @observable messages: Message[] = [];

  @computed userList: string[] = this.users.map(user => user.name);

  @action addUser = (user: User): void => {
    this.users.push(user);
  };

  @action addMessage = (message: Message): void => {
    this.messages.push(message);
  };

  @action removeUser = (user: User): void => {
    this.users = this.users.filter(item => item.id !== user.id);
  };
}

export const chatStore = createContext(new Store());
