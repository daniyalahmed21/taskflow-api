import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import Redis from 'ioredis';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const key = request.url; 

    return new Observable(observer => {
      this.redis.get(key).then(cached => {
        if (cached) {
          observer.next(JSON.parse(cached));
          observer.complete();
        } else {
          next.handle().pipe(
            tap(response => {
              this.redis.set(key, JSON.stringify(response), 'EX', 60); // 60s TTL
            }),
          ).subscribe(observer);
        }
      });
    });
  }
}