import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MqttPersonController } from './mqtt-person.controller';
import { Person } from './person.entity';
import { MqttPersonService } from './mqtt-person.service';

@Module({
  imports:[TypeOrmModule.forFeature([Person])],
  controllers: [MqttPersonController],
  providers: [MqttPersonService]
})
export class MqttPersonModule {}
