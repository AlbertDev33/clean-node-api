import {
  IAddAccount,
  IAddAccountModel,
  IAccountModel,
  IEncrypter,
} from './db-add-account-protocols';

export class DbAddAccount implements IAddAccount {
  constructor(private encrypter: IEncrypter) {}

  async add(account: IAddAccountModel): Promise<IAccountModel> {
    await this.encrypter.encrypt(account.password);

    return new Promise(resolve => resolve(null));
  }
}
