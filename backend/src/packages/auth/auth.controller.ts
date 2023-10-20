import { APIPath, ExceptionMessage } from '#libs/enums/enums.js';
import { AuthError } from '#libs/exceptions/exceptions.js';
import {
  type APIHandlerOptions,
  type APIHandlerResponse,
  BaseController,
} from '#libs/packages/controller/controller.js';
import { HTTPCode } from '#libs/packages/http/http.js';
import { type Logger } from '#libs/packages/logger/logger.js';
import {
  type UserAuthResponseDto,
  type UserService,
  type UserSignInRequestDto,
  userSignInValidationSchema,
  type UserSignUpRequestDto,
  userSignUpValidationSchema,
} from '#packages/users/users.js';

import { type AuthService } from './auth.service.js';
import { AuthApiPath } from './libs/enums/enums.js';

type Constructor = {
  logger: Logger;
  authService: AuthService;
  userService: UserService;
};

class AuthController extends BaseController {
  private authService: AuthService;

  private userService: UserService;

  public constructor({ logger, authService, userService }: Constructor) {
    super(logger, APIPath.AUTH);

    this.authService = authService;
    this.userService = userService;

    this.addRoute({
      path: AuthApiPath.SIGN_UP,
      method: 'POST',
      validation: {
        body: userSignUpValidationSchema,
      },
      handler: (options) =>
        this.signUp(
          options as APIHandlerOptions<{
            body: UserSignUpRequestDto;
          }>,
        ),
    });
    this.addRoute({
      path: AuthApiPath.SIGN_IN,
      method: 'POST',
      validation: {
        body: userSignInValidationSchema,
      },
      handler: (options) =>
        this.signIn(
          options as APIHandlerOptions<{
            body: UserSignInRequestDto;
          }>,
        ),
    });
    this.addRoute({
      path: AuthApiPath.AUTHENTICATED_USER,
      method: 'GET',
      handler: (options) => {
        return this.getAuthenticatedUser(
          options as APIHandlerOptions<{
            user: UserAuthResponseDto;
          }>,
        );
      },
    });
  }

  /**
   * @swagger
   * /auth/sign-up:
   *    post:
   *      description: Sign up user into the system
   *      requestBody:
   *        description: User auth data
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                email:
   *                  type: string
   *                  format: email
   *                password:
   *                  type: string
   *      responses:
   *        201:
   *          description: Successful operation
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  message:
   *                    type: object
   *                    $ref: '#/components/schemas/User'
   */
  private async signUp(
    options: APIHandlerOptions<{
      body: UserSignUpRequestDto;
    }>,
  ): Promise<APIHandlerResponse> {
    return {
      status: HTTPCode.CREATED,
      payload: await this.authService.signUp(options.body),
    };
  }

  /**
   * @swagger
   * /auth/sign-in:
   *    post:
   *      description: Sign in user with credentials
   *      requestBody:
   *        description: User login credentials
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                email:
   *                  type: string
   *                  format: email
   *                password:
   *                  type: string
   *      responses:
   *        200:
   *          description: Successful operation
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  message:
   *                    type: object
   *                    $ref: '#/components/schemas/User'
   */
  private async signIn(
    options: APIHandlerOptions<{
      body: UserSignInRequestDto;
    }>,
  ): Promise<APIHandlerResponse> {
    const user = await this.authService.verifyLoginCredentials(options.body);

    return {
      status: HTTPCode.OK,
      payload: await this.authService.signIn(user),
    };
  }

  /**
   * @swagger
   * /auth/authenticated-user:
   *    get:
   *      description: Returns an authenticated user
   *      security:
   *       - bearerAuth: []
   *      responses:
   *        200:
   *          description: Successful operation
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/User'
   */
  private async getAuthenticatedUser(
    options: APIHandlerOptions<{ user: UserAuthResponseDto }>,
  ): Promise<APIHandlerResponse> {
    const user = await this.userService.findById(options.user.id);

    if (!user) {
      throw new AuthError({
        message: ExceptionMessage.USER_NOT_FOUND,
        status: HTTPCode.UNAUTHORIZED,
      });
    }

    return {
      status: HTTPCode.OK,
      payload: await this.userService.findById(options.user.id),
    };
  }
}

export { AuthController };
