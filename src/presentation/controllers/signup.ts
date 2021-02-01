import { IHttpResponse, IHttpRequest } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import { IController } from '../protocols/controller';

export default class SignUpController implements IController {
  handle(httpRequest: IHttpRequest): IHttpResponse {
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
    return { statusCode: 400, body: '' };
  }
}
