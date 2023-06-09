import { Model, Schema, model, Document } from 'mongoose';
import { IBaseModel } from './BaseModel';
import { ICliente } from './Cliente';
import { IVisita } from './Visita';
import { StatusOrcamentoEnum } from './enums/StatusOrcamentoEnum';

export interface IOrcamento extends Document, IBaseModel {
  cliente: ICliente['_id'];
  visita?: IVisita['_id'];
  status: string;
  observacao?: string;
  endereco: string;
  valor: number;
  descricao?: string;
  tipoPagamento?: string;
}

const orcamentoSchema: Schema = new Schema<IOrcamento>({
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 't_cliente',
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: StatusOrcamentoEnum.PENDENTE,
  },
  visita: {
    type: Schema.Types.ObjectId,
    ref: 't_visita',
    required: false,
  },
  observacao: {
    type: String,
    required: false,
  },
  endereco: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: false,
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
  tipoPagamento: {
    type: String,
    required: false,
  },
});

export const Orcamento: Model<IOrcamento> = model<IOrcamento>('t_orcamento', orcamentoSchema);