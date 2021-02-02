import { IHttpResponse } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';
import ServerError from '../errors/server-error';

export const badRequest = (error: MissingParamError): IHttpResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (): IHttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});
