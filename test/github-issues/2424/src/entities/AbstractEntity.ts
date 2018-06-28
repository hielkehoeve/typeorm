import {BeforeUpdate, Column, PrimaryColumn} from 'typeorm';

export default abstract class AbstractEntity {

    @PrimaryColumn({name: "id", type: "integer"})
    private _id: number;

    @Column({name: "createdat", type: "timestamp", nullable: false})
    private _createdAt: Date;

    @Column({name: "updatedat", type: "timestamp", nullable: false})
    private _updatedAt: Date;

    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    set updatedAt(value: Date) {
        this._updatedAt = value;
    }

    @BeforeUpdate()
    updateDates() {
        this.updatedAt = new Date();
    }
}
