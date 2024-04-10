import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateInvoiceDto {
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
