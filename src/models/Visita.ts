import { model, Schema, Model, Document } from 'mongoose';
import { ICliente } from './Cliente';
import { IBaseModel } from './BaseModel';
import { StatusVisitaEnum } from './enums/statusVisitaEnum';

//TODO: Criar um status
export interface IVisita extends Document, IBaseModel {
  cliente: ICliente['_id'];
  status: string;
  dataVisita: Date;
  observacao: string;
  chegouSite: boolean;
  notificarWpp: boolean;
  endereco: string;
  descricao?: string;
}

const visitaSchema: Schema = new Schema<IVisita>({
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 't_cliente',
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: StatusVisitaEnum.PENDENTE,
  },
  dataVisita: {
    type: Date,
    required: true,
  },
  observacao: {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 255,
  },
  chegouSite: {
    type: Boolean,
    required: true,
  },
  notificarWpp: {
    type: Boolean,
    required: true,
    default: false,
  },
  endereco: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  descricao: {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 255,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const Visita: Model<IVisita> = model<IVisita>('t_visita', visitaSchema);