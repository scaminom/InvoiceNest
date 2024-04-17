import { IPayMethod } from 'src/invoice/interfaces/pay-method.interface';

export class CashPay implements IPayMethod {
  tax: number = 1;

  getTotalWithTax(total: number): number {
    return total * this.tax;
  }
}
