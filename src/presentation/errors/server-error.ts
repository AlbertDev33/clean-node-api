export class ServerError extends Error {
  constructor(stack?: string) {
    super('Internal srver error');
    this.name = 'ServerError';
    this.stack = stack;
  }
}
