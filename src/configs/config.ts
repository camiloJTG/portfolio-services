export default {
   server: {
      port: process.env.PORT || 3000,
      dev: process.env.NODE_ENV !== 'production',
   },
   db: {
      user: process.env.USER || '',
      password: process.env.PASSWORD || '',
      database: process.env.DATABASE || '',
      host: process.env.HOST || '',
   },
   jwt: {
      secret: process.env.SECRET || '',
   },
   swagger: {
      pathFiles: process.env.PATH_FILES || '',
      serverDev: process.env.SERVER_DEV || '',
   },
   cloudinary: {
      apiKey: process.env.API_KEY || '',
      apiSecret: process.env.API_SECRET || '',
      apiName: process.env.API_NAME || '',
      apiSecure: process.env.API_SECURE || ''
   }
};
