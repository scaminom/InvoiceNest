import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Customer } from 'src/customer/entities/customer.entity';
import { InvoiceDetail } from 'src/invoice/entities/detail-invoice.entity';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import { Person } from 'src/person/entities/person.entity';

@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'accounting_system',
      entities: [Invoice, Person, InvoiceDetail, Customer],
      synchronize: true,
    };
  }
}
