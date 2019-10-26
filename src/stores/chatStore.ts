import { observable, action, computed } from 'mobx';

type User = {
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
}
