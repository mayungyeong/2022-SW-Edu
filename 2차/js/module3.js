//module3.js문서작성 
var user = {
  userid: 'sky',
  pwd: '1234',

  info: function () {
    console.log(`아이디: ${user.userid}`);
    console.log(`비번: ${user.pwd}`);
  }
};

module.exports = user; 