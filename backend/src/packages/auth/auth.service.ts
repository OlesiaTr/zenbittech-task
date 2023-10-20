import { type UserSignUpRequestDto } from '#packages/users/libs/types/types.js';
import { type UserService } from '#packages/users/user.service.js';

class AuthService {
  private userService: UserService;

  public constructor(userService: UserService) {
    this.userService = userService;
  }

  public signUp(
    userRequestDto: UserSignUpRequestDto,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    return this.userService.create(userRequestDto);
  }
}

export { AuthService };
