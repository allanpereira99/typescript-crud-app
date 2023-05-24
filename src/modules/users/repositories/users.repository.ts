import { CreateUserDto, User } from "../dtos/create-user.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class UserRepository {
  async create(user: CreateUserDto): Promise<User> {
    const newUser = await prisma.user.create({ data: { ...user } });
    return newUser;
  }
  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }
  async findById(id: number): Promise<User | null> {
    return (await prisma.user.findUnique({ where: { id: id } })) || null;
  }
}
