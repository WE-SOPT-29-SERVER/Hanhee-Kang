const members = require("./member");

const getOnline = (members) => {
  // logic
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "online");
      resolve(data);
    }, 500);
  });
};

const getOffline = (members) => {
  // logic
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "offline");
      resolve(data);
    }, 500);
  });
};

const getYB = (members) => {
  // logic
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "YB");
      resolve(data);
    }, 500);
  });
};

const getOB = (members) => {
  // logic
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "OB");
      resolve(data);
    }, 500);
  });
};

getOnline(members)
  .then((x) => getOB(x))
  .then(console.log);
getYB(members).then(getOffline).then(console.log);

const asyncFunc = async (members) => {
  const onlineMembers = await getOnline(members);
  const onlineObMembers = await getOB(onlineMembers);
  console.log(onlineObMembers);
};

asyncFunc(members);
