import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer } from './entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
  imports: [
    TypeOrmModule.forFeature([Customer]),
  ],
})
export class CustomerModule { }
