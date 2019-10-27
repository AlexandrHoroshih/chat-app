import { observable, action, computed } from 'mobx';
import { createContext } from 'react';

export interface IUser {
  id: number;
  name: string;
}

export interface IMessage {
  userId?: number;
  username: string;
  text: string;
  datetime: string;
}

class Store {
  idCounter: number = 0;
  @observable myUser: IUser = { id: -1, name: '' };
  @observable isLoading: boolean = false;
  @observable users: IUser[] = [];
  @observable messages: IMessage[] = [];

  @computed get userCount(): number {
    return this.users.length;
  }

  @action setMyUser = (username: string): void => {
    this.myUser = {
      id: this.idCounter + 1,
      name: username,
    };
    this.users.push(this.myUser);
    this.idCounter = this.idCounter + 1;
  };

  @action addUser = (username: string): void => {
    this.users.push({
      id: this.idCounter + 1,
      name: username,
    });
    this.idCounter = this.idCounter + 1;
  };

  @action addMessage = (message: IMessage): void => {
    this.messages.push(message);
  };

  @action removeUser = (user: IUser): void => {
    this.users = this.users.filter(item => item.id !== user.id);
  };
}

export const chatStore = createContext(new Store());
