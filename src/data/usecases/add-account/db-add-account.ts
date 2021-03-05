import { Encrypter } from 'src/data/protocols/encrypter';
import { AccountModel } from 'src/domain/models/account';
import {
  AddAccount,
  AddAccountModel,
} from '../../../domain/usecases/add-account';

export class DbAddAccount implements AddAccount {
  constructor(private encrypter: Encrypter) {}

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password);

    return (new Promise(resolve => resolve(null)) as unknown) as AccountModel;
  }
}
