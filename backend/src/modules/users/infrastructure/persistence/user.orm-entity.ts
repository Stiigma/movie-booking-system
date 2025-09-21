import { Entity , Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('users')
@Index('uq_users_email', ['email'], { unique: true })

export class UserOrmEntity {
    @PrimaryColumn('uuid')
    uuid!: string;
    
    @Column({ type: 'varchar', length: 255 })
    email!: string;

    @Column({ type: 'varchar', length: 50 })
    userName!: string;

    @Column({ type: 'varchar', length: 255 })
    password!: string;

    @Column({ type: 'enum', enum: ['PENDING_VERIFICATION', 'ACTIVE', 'SUSPENDED'], default: 'PENDING_VERIFICATION' })
    state!: 'PENDING_VERIFICATION' | 'ACTIVE' | 'SUSPENDED';

    @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
    createdAt!: Date;
    
    @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updated_at' })
    updatedAt!: Date;
}



