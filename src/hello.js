import 'dotenv/config';

const name = process.env.NAME;

if (name) {
  console.log(`name is type ${typeof name}`);
  console.log(name);
}

if (name === 'Bobby') console.log('Good Day, Sir Bobby!');
else console.log(`Hello ${name || 'stranger'}!`);