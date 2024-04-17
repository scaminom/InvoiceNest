import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import { PersonModule } from './person/person.module';
import { DatabaseModule } from './db/db.module';

@Module({
  imports: [DatabaseModule, InvoiceModule, CustomerModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
