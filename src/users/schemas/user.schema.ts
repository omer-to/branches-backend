import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { UserRole } from 'src/enums/UserRole';

@Schema({ timestamps: true })
export class User {
      @Prop({ required: true })
      email: string;

      @Prop({ required: true })
      password: string;

      @Prop({ required: true, enum: UserRole })
      role: UserRole;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
