import { model, Schema, Model, Document } from 'mongoose';
import { IRole } from './Role';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: IRole['_id'];
}

const userSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 't_role',
    required: true,
  },
});

export const User: Model<IUser> = model<IUser>('t_user', userSchema);