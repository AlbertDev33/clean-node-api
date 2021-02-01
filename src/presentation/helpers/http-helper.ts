import { IHttpResponse } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';

export const badRequest = (error: MissingParamError): IHttpResponse => ({
  statusCode: 400,
  body: error,
});
