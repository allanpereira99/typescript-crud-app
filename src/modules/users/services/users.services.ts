import { CreateUserDto } from "../dtos/create-user.dto";
import { UserRepository } from "../repositories/users.repository";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }
  async getUsers() {
    return await this.userRepository.findAll();
  }
  async getUserById(id: number) {
    return await this.userRepository.findById(id);
  }
}
