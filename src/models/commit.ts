export class Commit {
  id: number;
  author: string;
  message: string;
  date: string;
  email: string;

  constructor(id: number, author: string, message: string) {
    this.id = 0;
    this.author = "";
    this.message = "";
    this.date = "";
    this.email = "";
  }
}
