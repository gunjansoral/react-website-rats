const admin = require('firebase-admin');
const serviceAccount = require('./rats-store-a1b4f-firebase-adminsdk-6cjh1-f14b301a56.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://rats-store-a1b4f.firebaseio.com'
});

module.exports = admin;
