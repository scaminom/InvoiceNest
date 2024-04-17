export interface IPayMethod {
  tax: number;

  getTotalWithTax(total: number): number;
}
