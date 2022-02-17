import 'dotenv/config';

if (process.env.NAME === 'Bobby') console.log('Good Day, Sir Bobby!');
else console.log(`Hello ${process.env.NAME || 'stranger'}!`);

