import { Invoice } from 'src/invoice/entities/invoice.entity';
import { Person } from 'src/person/entities/person.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({
    name: 'email',
    type: 'varchar',
  })
  email: string;

  @Column({
    name: 'address',
    type: 'varchar',
  })
  address: string;

  @Column({
    name: 'phone',
    type: 'varchar',
    length: 13,
    nullable: true,
  })
  phone: string | null;

  @CreateDateColumn({
    name: 'register_date',
    type: 'timestamp',
  })
  registerDate: Date;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @OneToOne(() => Person, (person) => person.customer)
  @JoinColumn({ name: 'person_id' })
  person: Person;

  @OneToMany(() => Invoice, (invoice) => invoice.customer)
  invoices: Invoice[];
}
