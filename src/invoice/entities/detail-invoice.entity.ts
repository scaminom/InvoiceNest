import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Invoice } from './invoice.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity('invoice_detail')
export class InvoiceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isActive: boolean;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.details)
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;

  @ManyToOne(() => Product, (product) => product.invoiceDetails)
  @JoinColumn({ name: 'poduct_id' })
  product: Product;
}
