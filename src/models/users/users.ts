import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
   firstName: string;
   secondName: string;
   paternalSurname: string;
   maternalSurname: string;
   career: string;
   phoneNumber: number;
   aboutMe: string;
}

const userSchema: Schema = new Schema(
   {
      firstName: { type: String, required: true, trim: true },
      secondName: { type: String, required: true, trim: true },
      paternalSurname: { type: String, required: true, trim: true },
      maternalSurname: { type: String, required: true, trim: true },
      career: { type: String, required: true, trim: true },
      phoneNumber: { type: Number, required: true, unique: true },
      aboutMe: { type: String, required: true, trim: true },
   },
   { collection: 'users', timestamps: true }
);

userSchema.index({
   firstName: 1,
   secondName: 1,
   paternalSurname: 1,
   maternalSurname: 1,
   career: 1,
});

export default model<IUser>('user', userSchema);
