import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum CompanyType {
  technology = 'Tecnología',
  food = 'Alimentos',
  health = 'Salud',
  transportation = 'Transporte',
  services = 'Servicios',
}

@Schema()
export class Company extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  fiscal_id: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  website: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  name_representative: string;

  @Prop()
  phone_representative: string;

  @Prop()
  address_representative: string;

  @Prop()
  email_representative: string;

  @Prop({ required: true, enum: CompanyType })
  type: CompanyType;

  @Prop({ type: [{ type: 'ObjectId', ref: 'Employee' }] })
  employees: string[];
}
export const CompanySchema = SchemaFactory.createForClass(Company);
