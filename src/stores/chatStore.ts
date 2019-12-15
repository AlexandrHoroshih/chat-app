import { observable, action, computed, configure } from 'mobx';
import { createContext } from 'react';
import io from 'socket.io-client';

configure({ enforceActions: 'observed' });

enum Events {
  CONNECTION = 'connection',
  MESSAGE = 'message',
  DISCONNECT = 'disconnect',
}

interface UserStored {
  id: number;
  username: string;
}
export interface IUser {
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

class Store {
  idCounter: number = 0;
  socket: any = null;

  @observable myUser: UserStored = { id: -1, username: '' };
  @observable registred: boolean = false;
  @observable isLoading: boolean = false;
  @observable users: UserStored[] = [];
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
    this.registred = true;
    this.socket = io();
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

  @action removeUser = (user: UserStored): void => {
    this.users = this.users.filter(item => item.id !== user.id);
  };
}

export const chatStore = createContext(new Store());
