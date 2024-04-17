import { IPayMethod } from 'src/invoice/interfaces/pay-method.interface';

export class CreditPay implements IPayMethod {
  tax: number = 1.1;
  getTotalWithTax(total: number): number {
    return total * this.tax;
  }
}
