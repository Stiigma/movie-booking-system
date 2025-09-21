import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOrmEntity } from './modules/users/infrastructure/persistence/user.orm-entity';

@Module({
  imports: [
    // Carga .env al inicio y lo hace global
    ConfigModule.forRoot({ isGlobal: true }),

    // Lee DATABASE_URL con ConfigService (no dependas de process.env directo)
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        type: 'postgres',
        url: cfg.get<string>('DATABASE_URL'),
        entities: [UserOrmEntity],
        synchronize: false,
        autoLoadEntities: true,
      }),
    }),

    UsersModule,
  ],
})
export class AppModule {}