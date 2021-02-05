import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

// 192.168.99.100 usar para conectar ao docker caso nao reconheça o hostlocal
@Entity()
export class Tasks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        default: false
    })
    finished: boolean;
    
    @CreateDateColumn()
    createad_at: Date;
    
    @CreateDateColumn()
    updated_at: Date;

}
