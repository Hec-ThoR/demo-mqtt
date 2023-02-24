import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('persona')
export class Person{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string;

    @Column()
    primerApellido: string;

    @Column()
    segundoApellido: string;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    createAt:Date;
}