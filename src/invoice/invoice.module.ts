import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { Invoice } from './entities/invoice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceDetailService } from './invoice-detail.service';
import { InvoiceDetail } from './entities/detail-invoice.entity';
import { InvoiceDetailController } from './invoice-detail.controller';

@Module({
  controllers: [InvoiceController, InvoiceDetailController],
  providers: [InvoiceService, InvoiceDetailService],
  exports: [InvoiceService, InvoiceDetailService],
  imports: [
    TypeOrmModule.forFeature([Invoice, InvoiceDetail])
  ]
})
export class InvoiceModule { }

