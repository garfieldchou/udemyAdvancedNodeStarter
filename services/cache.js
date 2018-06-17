const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {
  console.log('IM ABOUT TO RUN A QUERY');

  console.log(this.getQuery());
  console.log(this.mongooseCollection.name);

  return exec.apply(this, arguments);
};
