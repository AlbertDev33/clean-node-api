import {
  IAddAccount,
  IAddAccountModel,
  IAccountModel,
  IEncrypter,
  IAddAccountRepository,
} from './db-add-account-protocols';

export class DbAddAccount implements IAddAccount {
  constructor(
    private encrypter: IEncrypter,

    private addAccountRepository: IAddAccountRepository,
  ) {}

  async add(accountData: IAddAccountModel): Promise<IAccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password);

    const account = await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword,
    });

    return account;
  }
}
