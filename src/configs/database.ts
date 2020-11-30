import mongoose from 'mongoose';
import config from './config';

const USER = config.db.user;
const PASSWORD = config.db.password;
const HOST = config.db.host;
const DATABASE = config.db.database;

(async () => {
   try {
      const URL = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DATABASE}?retryWrites=true&w=majority`;
      await mongoose.connect(URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
         useFindAndModify: false,
      });
      console.log('Database is connected');
   } catch (e) {
      console.error(e.message);
   }
})();
