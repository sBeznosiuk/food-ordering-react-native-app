export class User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: number;
  updatedAt: number;

  constructor(
    username: string,
    email: string,
    id: number,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: number,
    updatedAt: number,
  ) {
    this.username = username;
    this.email = email;
    this.id = id;
    this.provider = provider;
    this.confirmed = confirmed;
    this.blocked = blocked;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
