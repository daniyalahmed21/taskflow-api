import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.ts';
import { RegisterDto } from './dto/register.dto.ts';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
