import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcryptjs';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ required: true })
  role: string;

  @Prop()
  password: string;

  @Prop({ type: Boolean, default: false })
  verified: boolean;

  @Prop({ type: String, unique: true })
  verificationToken: string;

  @Prop({ default: null })
  profilePic: string;

  @Prop({ default: null })
  coverPic: string;

  @Prop({ type: [String], default: [] })
  followers: string[];

  @Prop({ type: [String], default: [] })
  followings: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

async function generateHash(password: string) {
  return bcrypt.hash(password, 12);
}

UserSchema.pre('save', function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (user.isNew || user.isModified('password')) {
    return generateHash(user.password)
      .then((hash) => {
        user.password = hash;
        return next();
      })
      .catch((error) => {
        return next(error);
      });
  }
  return next();
});
