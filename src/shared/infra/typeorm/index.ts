import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async(host = "localhost"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    // console.log(defaultOptions);

    return createConnection(defaultOptions);
        // Object.assign(defaultOptions, {
        //     host
        // })
    // )
}