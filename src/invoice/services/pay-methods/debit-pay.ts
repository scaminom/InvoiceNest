import { IPayMethod } from 'src/invoice/interfaces/pay-method.interface';

export class DebitPay implements IPayMethod {
  tax = 0.05;
  getTotalWithTax(total: number): number {
    return total * (1 + this.tax);
  }
}
