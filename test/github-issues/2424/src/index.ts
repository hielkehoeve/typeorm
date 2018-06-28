import {Connection, createConnection} from 'typeorm';
import EntityA from './entities/EntityA';
import EntityD from "./entities/EntityD";
import EntityC from "./entities/EntityC";
import EntityB from "./entities/EntityB";

async function main(): Promise<any> {

    try {
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "hoeve",
            password: "hoeve",
            database: "hoeve",
            schema: "github-issue-new",
            logging: false,
            extra: {max: 10},
            entities: ["build/entities/*.js"]
        });
        console.log('DB Connected, isConnected:', connection.isConnected);

        await test(connection, EntityD, 100);
        await test(connection, EntityC, 100);
        await test(connection, EntityA, 100);
        await test(connection, EntityD, 1000);
        await test(connection, EntityC, 1000);
        await test(connection, EntityA, 1000);
        await test(connection, EntityD, 10000);
        await test(connection, EntityC, 10000);
        await test(connection, EntityA, 10000);
        await test(connection, EntityD, 100000);
        await test(connection, EntityC, 100000);
        await test(connection, EntityA, 100000);

    } catch (error) {
        console.log('Error:', error);
    }
}

async function test<Entity>(connection: Connection, entity: Entity, amount: number) {
    console.log(entity);

    let queryBuilder = connection.getRepository(EntityA).createQueryBuilder();
    await queryBuilder.orderBy("id", "ASC").limit(amount).getMany();

    var time: number[] = new Array();
    // for (var i = 0; i < 5; i++) {
        let startTime = Date.now();
        await queryBuilder.orderBy("id", "ASC").limit(amount).getMany();

        var _time = (Date.now() - startTime);
        time.push(_time);
        console.log(`Consumed ${amount} entities in ${_time}ms.`);
    // }

    console.log(`Mean time consumption: ${mean(time)}ms.`);
}

function mean(numbers) {
    // mean of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}

main().then(_ => _);
