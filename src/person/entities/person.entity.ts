import { Customer } from 'src/customer/entities/customer.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
export class Person {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({
    name: 'dni',
    type: 'varchar',
    length: 13,
  })
  dni: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 30,
  })
  name: string;

  @Column({
    name: 'second_name',
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  secondName: string | null;

  @Column({
    name: 'lastname',
    type: 'varchar',
    length: 30,
  })
  lastname: string;

  @Column({
    name: 'second_lastname',
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  secondLastname: string | null;

  @Column({
    name: 'full_name',
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  fullName: string | null;

  @Column({
    name: 'birth_date',
    type: 'date',
  })
  birthDate: Date;

  @OneToOne(() => Customer, (customer) => customer.person)
  customer: Customer;

  private static person: Person;

  private constructor(
    id: number,
    dni: string,
    name: string,
    secondName: string | null,
    lastname: string,
    secondLastname: string | null,
    birthDate: Date,
  ) {
    this.id = id;
    this.dni = dni;
    this.name = name;
    this.secondName = secondName;
    this.lastname = lastname;
    this.secondLastname = secondLastname;
    this.birthDate = birthDate;
  }

  public static getPerson(
    id: number,
    dni: string,
    name: string,
    secondName: string | null,
    lastname: string,
    secondLastname: string | null,
    birthDate: Date,
  ) {
    if (!this.person) {
      this.person = new Person(
        id,
        dni,
        name,
        secondName,
        lastname,
        secondLastname,
        birthDate,
      );
    }

    return this.person;
  }
}
