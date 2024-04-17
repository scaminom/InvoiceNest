import { Customer } from 'src/customer/entities/customer.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvoiceDetail } from './detail-invoice.entity';

@Entity('invoice')
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => InvoiceDetail, (detail) => detail.invoice)
  details: InvoiceDetail[];

  @Column()
  isActive: boolean;

  @BeforeInsert()
  setDate() {
    this.date = new Date();
  }
}
