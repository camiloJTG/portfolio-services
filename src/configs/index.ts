import app from './server';
import config from './config';
import './database';

const main = () => {
   app.listen(config.server.port);
   console.log(`Server on port ${config.server.port}`);
};

main();
