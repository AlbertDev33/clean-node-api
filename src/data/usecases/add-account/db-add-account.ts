import {
  IAddAccount,
  IAddAccountModel,
} from '../../../domain/usecases/add-account';
import { IAccountModel } from '../../../domain/models/account';
import { IEncrypter } from '../../protocols/encrypter';

export class DbAddAccount implements IAddAccount {
  constructor(private encrypter: IEncrypter) {}

  async add(account: IAddAccountModel): Promise<IAccountModel> {
    await this.encrypter.encrypt(account.password);

    return new Promise(resolve => resolve(null));
  }
}
