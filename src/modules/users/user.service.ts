import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StatusResponse } from '../../common/enums/StatusResponse.enum';
import { CreateUserDto } from './dto/create-user';
import { User, UserDocument } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async loginUser(createUserDto: CreateUserDto) {
    try {
      const newData = await this.userModel.create({ ...createUserDto });

      console.log('newData: ', newData);

      const user = await this.userModel.findById(newData._id);

      return {
        status: StatusResponse.SUCCESS,
        message: 'Create New User successfully',
        data: user,
      };
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new HttpException(
        {
          status: StatusResponse.FAIL,
          err,
        },
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
