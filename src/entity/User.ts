import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;
    
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
