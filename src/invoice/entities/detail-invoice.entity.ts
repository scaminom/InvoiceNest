import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Invoice } from './invoice.entity';

@Entity('invoice_detail')
export class InvoiceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_name' })
  product: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'unit_price' })
  unitPrice: number;

  @Column()
  isActive: boolean;

  @ManyToOne(() => Invoice, (invoice) => invoice.details)
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;
}
