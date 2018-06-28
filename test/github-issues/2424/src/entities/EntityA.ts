import {Column, Entity, Index, JoinColumn, ManyToOne, RelationId} from 'typeorm';
import EntityB from "./EntityB";
import EntityC from "./EntityC";
import AbstractEntity from "./AbstractEntity";

@Entity('entitya')
@Index('idx_entitya_multi', ['columnB', 'columnC'], {unique: true})
export default class EntityA extends AbstractEntity {

    @Index("idx_entitya_entityb")
    @JoinColumn({name: "entityb"}) @ManyToOne(type => EntityB, {nullable: true})
    entityB: EntityB;

    @RelationId((entity: EntityA) => entity.entityB)
    entityBId: number;

    @Index("idx_entitya_entityc")
    @JoinColumn({name: "entityc"}) @ManyToOne(type => EntityC, {nullable: true})
    entityC: EntityC;

    @RelationId((entity: EntityA) => entity.entityC)
    entityCId: number;

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
