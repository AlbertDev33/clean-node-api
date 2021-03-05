export class ServerError extends Error {
  constructor() {
    super('Internal srver error');
    this.name = 'ServerError';
  }
}
