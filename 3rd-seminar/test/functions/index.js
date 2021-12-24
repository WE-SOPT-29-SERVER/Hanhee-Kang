const admin = require("firebase-admin");
const serviceAccount = require("./wesopt29-899e9-firebase-adminsdk-o7l5i-5e8e020ece.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};
