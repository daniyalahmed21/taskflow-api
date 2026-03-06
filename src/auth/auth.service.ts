import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto.ts';
import bcrypt from 'node_modules/bcryptjs/umd/types.js';
import { LoginDto } from './dto/login.dto.ts.js';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service.js';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) { }

    async register(registerDto: RegisterDto) {
        const { email, password } = registerDto;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userService.create({
            email,
            password: hashedPassword
        })

        return this.userService.create(user);
    }

    async login(LoginDto: LoginDto) {
        const { email, password } = LoginDto;

        const user = await this.userService.findOneEmail(email);

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        const payload = {
            email: user.email,
            sub: user.id
        }

        return { token: this.jwtService.sign(payload) };
    }
}
