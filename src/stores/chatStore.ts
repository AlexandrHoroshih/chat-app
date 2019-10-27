import { observable, action, computed } from 'mobx';

type User = {
  id: number;
  name: string;
};

type Message = {
  userId: number;
  username: string;
  text: string;
  datetime: string;
};

export class chatStore {
  @observable isLoading: boolean = false;
  @observable users: User[] = [];
  @observable messages: Message[] = [];

  @computed get userList(): string[] {
    return this.users.map(user => user.name);
  }

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
