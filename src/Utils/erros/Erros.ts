export default class Errors extends Error {
  constructor(error: string, message: string) {
    super(message);
    this.stack = error;
  }
}