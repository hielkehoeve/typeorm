import {createConnection} from 'typeorm';
import EntityA from './entities/EntityA';
import EntityB from "./entities/EntityB";
import EntityC from "./entities/EntityC";
import EntityD from "./entities/EntityD";

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

        console.log(`Inserting 100000 entities`);

        const repositoryA = connection.getRepository(EntityA);
        const repositoryB = connection.getRepository(EntityB);
        const repositoryC = connection.getRepository(EntityC);
        const repositoryD = connection.getRepository(EntityD);

        repositoryA.delete({});
        repositoryB.delete({});
        repositoryC.delete({});
        repositoryD.delete({});

        let startTime = Date.now();
        console.log(`Start ${startTime}`);

        for (var i = 0; i < 100000; i++) {
            var d: EntityD = new EntityD();
            d.id = i;
            d.columnB = i;
            d.columnC = i + '';
            d.columnD = i;
            d.columnG = i;
            d.columnH = i;
            d = await repositoryD.save(d);

            var c: EntityC = new EntityC();
            c.id = i;
            c.entityD = d;
            c.columnB = i;
            c.columnC = i + '';
            c.columnD = i;
            c.columnG = i;
            c.columnH = i;
            c = await repositoryC.save(c);

            var b: EntityB = new EntityB();
            b.id = i;
            b.columnB = i;
            b.columnC = i + '';
            b.columnD = i;
            b.columnG = i;
            b.columnH = i;
            b = await repositoryB.save(b);

            var a: EntityA = new EntityA();
            a.id = i;
            a.entityB = b;
            a.entityC = c;
            a.columnB = i;
            a.columnC = i + '';
            a.columnD = i;
            // a.entityD = d;
            a.columnG = i;
            a.columnH = i;
            a = await repositoryA.save(a);
        }

        let endTime = Date.now();
        console.log(`End ${endTime}`);
        console.log('Ms consumed:', endTime - startTime);

    } catch (error) {
        console.log('Error:', error);
    }
}

main().then(_ => _);
