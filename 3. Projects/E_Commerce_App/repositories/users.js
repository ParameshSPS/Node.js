const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
    async comparePasswords(saved, supplied) {
        // Saved -> password saved in our database. 'hashed.salt'
        // Supplied -> password given to us by a user trying sign in
        // const result = saved.split('.');
        // const hashed = result[0];
        // const salt = result[1];

        // Single Line Code
        const [hashed, salt] = saved.split('.');
        const hashedSuppliedBuf = await scrypt(supplied, salt, 64);

        return hashed === hashedSuppliedBuf.toString('hex');
    }

    async create(attrs) {
        // { email: '', password: '' } 
        attrs.id = this.randomId();

        const salt = crypto.randomBytes(8).toString('hex');
        const buf = await scrypt(attrs.password, salt, 64);

        // { email: 'test@test.com', password: 'password' }
        const records = await this.getAll();
        const record = {
            ...attrs,
            password: `${buf.toString('hex')}.${salt}`
        };
        records.push(record);

        // Write the updated 'records' array back to this.filename
        // await fs.promises.writeFile(this.filename, JSON.stringify(records));
        await this.writeAll(records);

        return record;
    }
}

/*
const test = async () => {
    const repo = new UsersRepository('users.json');

    // 1
    // await repo.create({ email: 'test@test.com', password: 'password' });

    // const users = await repo.getAll();

    // console.log(users);

    // 2
    // const user = await repo.getOne('0ea58efc');
    // const user = await repo.getOne('1214152365'); undefined

    // console.log(user);

    // 3
    // await repo.delete('005c7bd8');

    // 4
    // await repo.create({ email: 'test@test.com' });

    // 5
    // await repo.update('3b42e50c', { password: 'mypassword' });
    // await repo.update('3b4125145252e50c', { password: 'mypassword' }); ----> error

    const user = await repo.getOneBy({ 
        // email: 'test@test.com',
        // password: 'mypassword', ------> any one out off 3
        id: '3b42e50c'
    });

    console.log(user);
};

test();
*/

module.exports = new UsersRepository('users.json');

/*
// Another file....
const repo = require('./users');
repo.getAll();
repo.getOne();

// Yet another file....
const repo = require('./users');
repo.getAll();
*/