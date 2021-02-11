import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn} from "typeorm";

@Unique(['email'])
@Entity()

export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({ name: 'email' })
    email: string;
    
    @Column()
    password: string;

    @Column({
        default: false
    })
    active: boolean;

    @Column({
        default: false
    })
    removed: boolean;
    
    @CreateDateColumn()
    createad_at: Date;
    
    @CreateDateColumn()
    updated_at: Date;

}
