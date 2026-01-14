import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';



@Injectable()  // Marks this class as a provider
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super ({
            // 
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),    
            // ignoreExpiration: false,
            secretOrKey: 'SECRET_KEY_EXAMPLE',  // In a real system this would be in .env
        })
    }

    async validate(payload: any) {
        // What is returned here is injected into request.user
        return { userId: payload.sub, username: payload.username };
    }
}