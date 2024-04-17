import { InvoiceDetail } from "src/invoice/entities/detail-invoice.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'money', name: 'unit_price' })
  unitPrice: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @OneToMany(() => InvoiceDetail, (invoiceDetail) => invoiceDetail.product)
  invoiceDetails: InvoiceDetail[];
}
