export default class SignUpController {
  handle(httpRequest: any): any {
    return {
      httpRequest,
      statusCode: 400,
      body: new Error('Missing param: name'),
    };
  }
}
