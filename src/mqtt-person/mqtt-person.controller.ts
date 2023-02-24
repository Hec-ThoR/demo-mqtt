import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MqttPersonService } from './mqtt-person.service';
import { Person } from './person.entity';

const prefix="personas/";

@Controller()
export class MqttPersonController {
    constructor(private service:MqttPersonService){}

    @MessagePattern(`${prefix}create`)
    async registrar(@Payload() data:Person) {
        var creado= await this.service.crear(data);
        console.log('procesado', creado);
        return `Client nro: ${creado.id}`
    }
    

    @MessagePattern(`${prefix}update`)
    async actualizar(@Payload() data:Person) {
        console.log('updated', data);
        var updated=await this.service.update(data);
        return updated
    }

    @MessagePattern(`${prefix}remove`)
    remover(@Payload() data:Person) {
        console.log('removido', data);
        return this.service.remove(data.id);
    }

    @MessagePattern(`${prefix}find`)
    async buscarPersona(@Payload() data:number) {
        console.log('find', data);
        var persona= await this.service.findById(data);
        console.log('res', persona);
        return persona;
    }

    @MessagePattern(`${prefix}all`)
    async todo() {
        console.log('todo ');
        const res= await this.service.findAll();
        console.log('res',res);
        return res;
    }
}