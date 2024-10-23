// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Input, InputT } from './input.js';
import { InputSetOp } from './input-set-op.js';


export class InputSetOpV1 implements flatbuffers.IUnpackableObject<InputSetOpV1T> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):InputSetOpV1 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsInputSetOpV1(bb:flatbuffers.ByteBuffer, obj?:InputSetOpV1):InputSetOpV1 {
  return (obj || new InputSetOpV1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsInputSetOpV1(bb:flatbuffers.ByteBuffer, obj?:InputSetOpV1):InputSetOpV1 {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new InputSetOpV1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

op():InputSetOp {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : InputSetOp.Create;
}

mutate_op(value:InputSetOp):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint8(this.bb_pos + offset, value);
  return true;
}

inputs(index: number, obj?:Input):Input|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Input()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

inputsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startInputSetOpV1(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static addOp(builder:flatbuffers.Builder, op:InputSetOp) {
  builder.addFieldInt8(1, op, InputSetOp.Create);
}

static addInputs(builder:flatbuffers.Builder, inputsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, inputsOffset, 0);
}

static createInputsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startInputsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endInputSetOpV1(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishInputSetOpV1Buffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedInputSetOpV1Buffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createInputSetOpV1(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset, op:InputSetOp, inputsOffset:flatbuffers.Offset):flatbuffers.Offset {
  InputSetOpV1.startInputSetOpV1(builder);
  InputSetOpV1.addId(builder, idOffset);
  InputSetOpV1.addOp(builder, op);
  InputSetOpV1.addInputs(builder, inputsOffset);
  return InputSetOpV1.endInputSetOpV1(builder);
}

unpack(): InputSetOpV1T {
  return new InputSetOpV1T(
    this.id(),
    this.op(),
    this.bb!.createObjList<Input, InputT>(this.inputs.bind(this), this.inputsLength())
  );
}


unpackTo(_o: InputSetOpV1T): void {
  _o.id = this.id();
  _o.op = this.op();
  _o.inputs = this.bb!.createObjList<Input, InputT>(this.inputs.bind(this), this.inputsLength());
}
}

export class InputSetOpV1T implements flatbuffers.IGeneratedObject {
constructor(
  public id: string|Uint8Array|null = null,
  public op: InputSetOp = InputSetOp.Create,
  public inputs: (InputT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const id = (this.id !== null ? builder.createString(this.id!) : 0);
  const inputs = InputSetOpV1.createInputsVector(builder, builder.createObjectOffsetList(this.inputs));

  return InputSetOpV1.createInputSetOpV1(builder,
    id,
    this.op,
    inputs
  );
}
}
