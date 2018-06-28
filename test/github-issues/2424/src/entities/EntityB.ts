import {Column, Entity, Index, PrimaryColumn} from 'typeorm';
import AbstractEntity from "./AbstractEntity";

@Entity('entityb')
@Index('idx_entityb_multi', ['columnB', 'columnC'], {unique: true})
export default class EntityB extends AbstractEntity{

    @Column({type: 'integer', name: 'column_b', nullable: false})
    columnB: number;

    @Column({type: 'varchar', length: 60, name: 'column_c', nullable: false})
    columnC: string;

    @Column({type: 'integer', name: 'column_d', default: 1, nullable: false})
    columnD: number;

    @Column({type: 'varchar', length: 60, name: 'column_e', nullable: true})
    columnE: string;

    @Column({type: 'integer', name: 'column_f', nullable: true})
    columnF: number;

    @Column({type: 'integer', name: 'column_g', nullable: false})
    columnG: number;

    @Column({type: 'integer', name: 'column_h', nullable: false})
    columnH: number;
}
