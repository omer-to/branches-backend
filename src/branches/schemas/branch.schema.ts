import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'


@Schema({ timestamps: true })
export class Branch {
      @Prop({ required: true })
      latitude: number;

      @Prop({ required: true })
      longitude: number;

      @Prop({ required: true })
      name: string;

      @Prop({ required: true })
      address: string;

      @Prop({ required: true })
      phone: string;
}

export type BranchDocument = Branch & Document;
export const BranchSchema = SchemaFactory.createForClass(Branch);
