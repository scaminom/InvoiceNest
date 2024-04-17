import { IPayMethod } from 'src/invoice/interfaces/pay-method.interface';
import { CashPay } from './cash-pay';
import { CreditPay } from './credit-pay';
import { DebitPay } from './debit-pay';

export class PayMethodFactory {
  private payMethods: Map<string, IPayMethod> = new Map();

  constructor() {
    this.initPayMethods();
  }

  private initPayMethods(): void {
    this.payMethods.set('cash', new CashPay());
    this.payMethods.set('credit', new CreditPay());
    this.payMethods.set('debit', new DebitPay());
  }

  public getPayMethod(method: string): IPayMethod | undefined {
    return this.payMethods.get(method);
  }
}
