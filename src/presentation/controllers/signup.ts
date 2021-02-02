import { IHttpResponse, IHttpRequest } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';
import { badRequest, serverError } from '../helpers/http-helper';
import { IController } from '../protocols/controller';
import { IEmailValidator } from '../protocols/email-validator';
import InvalidParamError from '../errors/invalid-param-error';

export default class SignUpController implements IController {
  constructor(private emailValidator: IEmailValidator) {}

  handle(httpRequest: IHttpRequest): IHttpResponse {
    try {
      const requiredFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation',
      ];
      // eslint-disable-next-line no-restricted-syntax
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }
      const isValid = this.emailValidator.isValid(httpRequest.body.email);

      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }
    } catch (error) {
      return serverError();
    }
    return { statusCode: 400, body: '' };
  }
}
