import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class MqttPersonService {

    constructor(
        @InjectRepository(Person)
        private readonly repoPedido:Repository<Person>
    ){}
    
    // TODO CREA REGISTRO NUEVO
    async crear(persona:Person){
        return await this.repoPedido.save(persona);
    }

    // TODO ACTUALIZAR EL PRODUCTO
    async update(persona:Person) {
        // var persona = await this.repoPedido.findOneBy({id: pedido.id})
        // persona=pedido;
        return await this.repoPedido.update(persona.id, persona);
    }

    // TODO ELIMINAR UN PRODUCTO
    remove(id:number){
        return this.repoPedido.delete(id);
    }

    // TODO OBTENER EL DETALLE DEL PRODUCTO
    async findById(idPerson:number){
        return await this.repoPedido.findOneBy({id: idPerson,})
        //return await this.repoPedido.findOne({where: {id:idPerson}});
    }

    // TODO OBTENER TODOS LOS PRODUCTOS
    async findAll(){
        return await this.repoPedido.find();
    }

}
