import { observable, action, computed } from 'mobx';
import { createContext } from 'react';
import io from 'socket.io-client';

export interface IUser {
  id: number;
  username: string;
}

interface MessageStored {
  id: number;
  username: string;
  text: string;
  datetime: Date;
}

export interface IMessage {
  id: number;
  username: string;
  text: string;
}
// todo: refactor handling datetimes

class Store {
  idCounter: number = 0;

  @observable myUser: IUser = { id: -1, username: '' };
  @observable registred: boolean = false;
  @observable isLoading: boolean = false;
  @observable users: IUser[] = [];
  @observable messages: MessageStored[] = [];

  @computed get userCount(): number {
    return this.users.length;
  }

  @action setMyUser = (username: string): void => {
    this.myUser = {
      id: this.idCounter + 1,
      username,
    };
    this.users.push(this.myUser);
    this.idCounter = this.idCounter + 1;
    io();
    this.registred = true;
  };

  @action addUser = (username: string): void => {
    this.users.push({
      id: this.idCounter + 1,
      username,
    });
    this.idCounter = this.idCounter + 1;
  };

  @action addMessage = (message: IMessage): void => {
    this.messages.push({
      ...message,
      datetime: new Date(),
    });
  };

  @action removeUser = (user: IUser): void => {
    this.users = this.users.filter(item => item.id !== user.id);
  };
}

export const chatStore = createContext(new Store());
