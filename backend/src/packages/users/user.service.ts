import { type Config } from '#libs/packages/config/config.js';
import { type Encrypt } from '#libs/packages/encrypt/encrypt.js';
import { type JWTService } from '#libs/packages/jwt/jwt.service.js';
import { type Service } from '#libs/types/types.js';
import { UserEntity } from '#packages/users/user.entity.js';
import { type UserRepository } from '#packages/users/user.repository.js';

import {
  type UserGetAllResponseDto,
  type UserSignUpRequestDto,
  type UserSignUpResponseDto,
} from './libs/types/types.js';

type UserServiceDependencies = {
  userRepository: UserRepository;
  jwtService: JWTService;
  encryptService: Encrypt;
  config: Config;
};

class UserService implements Service {
  private userRepository: UserRepository;
  private jwtService: JWTService;

  private encryptService: Encrypt;
  private config: Config;

  public constructor({
    userRepository,
    jwtService,
    encryptService,
    config,
  }: UserServiceDependencies) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
    this.encryptService = encryptService;
    this.config = config;
  }

  public find(): ReturnType<Service['find']> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<UserGetAllResponseDto> {
    const items = await this.userRepository.findAll();

    return {
      items: items.map((item) => item.toObject()),
    };
  }

  public async create(
    payload: UserSignUpRequestDto,
  ): Promise<UserSignUpResponseDto> {
    const passwordSalt = await this.encryptService.generateSalt(
      this.config.ENV.ENCRYPT.NUMBER_OF_ROUNDS,
    );

    const passwordHash = await this.encryptService.generateHash(
      payload.password,
      passwordSalt,
    );

    const item = await this.userRepository.create(
      UserEntity.initializeNew({
        email: payload.email,
        name: payload.name,
        passwordSalt,
        passwordHash,
      }),
    );

    const user = item.toObject();
    const token = await this.jwtService.signJWT({ userId: user.id });

    return {
      user,
      token,
    };
  }

  public update(): ReturnType<Service['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<Service['delete']> {
    return Promise.resolve(true);
  }
}

export { UserService };
