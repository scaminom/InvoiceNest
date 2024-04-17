import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = this.customerRepository.create({
      email: createCustomerDto.email,
      address: createCustomerDto.address,
      phone: createCustomerDto.phone,
      isActive: createCustomerDto.isActive,
      person: createCustomerDto.personId,
    } as DeepPartial<Customer>);
    return await this.customerRepository.save(newCustomer);
  }

  async findAll() {
    const queryBuilder = this.customerRepository
      .createQueryBuilder('customer')
      .leftJoinAndSelect('customer.invoices', 'invoices');
    return await queryBuilder.getMany();
  }

  async findOne(id: number) {
    const queryBuilder = this.customerRepository
      .createQueryBuilder('customer')
      .leftJoinAndSelect('customer.invoices', 'invoices');
    return await queryBuilder.where('customer.id = :id', { id }).getOne();
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    await this.customerRepository.update(id, updateCustomerDto);
    return await this.customerRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const customer = await this.customerRepository.findOneBy({ id });
    if (!customer) {
      throw new Error('Customer not found');
    }
    customer.isActive = false;
    return await this.customerRepository.save(customer);
  }
}
