import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { Invoice } from './entities/invoice.entity';
import { InvoiceDetail } from './entities/detail-invoice.entity';

import { CreateInvoiceDetailDto } from './dto/create-invoice-detail.dto';
import { UpdateInvoiceDetailDto } from './dto/update-invoice-detail.dto';

@Injectable()
export class InvoiceDetailService {

  constructor(
    @InjectRepository(InvoiceDetail)
    private readonly invoiceDetailRepository: Repository<InvoiceDetail>,
  ) { }

  async create(createInvoiceDetailDto: CreateInvoiceDetailDto) {
    const newInvoiceDetail = this.invoiceDetailRepository.create({
      product: createInvoiceDetailDto.product,
      quantity: createInvoiceDetailDto.quantity,
      unitPrice: createInvoiceDetailDto.unitPrice,
      isActive: createInvoiceDetailDto.isActive,
      invoice: createInvoiceDetailDto.invoiceId
    } as DeepPartial<InvoiceDetail>
    );
    return await this.invoiceDetailRepository.save(newInvoiceDetail);
  }

  async findAll() {
    const queryBuilder = this.invoiceDetailRepository.createQueryBuilder('invoiceDetail')
      .leftJoinAndSelect('invoiceDetail.invoice', 'invoice');
    return await queryBuilder.getMany();
  }

  async findOne(id: number) {
    const queryBuilder = this.invoiceDetailRepository.createQueryBuilder('invoiceDetail')
      .leftJoinAndSelect('invoiceDetail.invoice', 'invoice');
    return await queryBuilder.where('invoiceDetail.id = :id', { id }).getOne();
  }

  async update(id: number, updateInvoiceDetailDto: UpdateInvoiceDetailDto) {
    await this.invoiceDetailRepository.update(id, {
      product: updateInvoiceDetailDto.product,
      quantity: updateInvoiceDetailDto.quantity,
      unitPrice: updateInvoiceDetailDto.unitPrice,
      isActive: updateInvoiceDetailDto.isActive,
    } as DeepPartial<Invoice>);
    return await this.invoiceDetailRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const invoiceDetail = await this.invoiceDetailRepository.findOneBy({ id });
    if (!invoiceDetail) {
      throw new Error('Invoice not found');
    }
    invoiceDetail.isActive = false;
    return await this.invoiceDetailRepository.save(invoiceDetail);
  }
}
