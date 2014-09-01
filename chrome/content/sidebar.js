const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource://stealer/common.js");
Cu.import("resource://stealer/passwordService.js");

StealerUI.Sidebar = {
  init: function() {
    this._loadPasswords();
  },

  _loadPasswords: function() {
    let logins = StealerBG.PasswordService.getPasswords();
    let box = document.getElementById("stealer-sidebar-passwords-box");
    let label;

    this._clearPasswords();
    for (let i = 0; i < logins.length; i++) {
      label = document.createElement("label");
      label.textContent = logins[i].host + ": " + logins[i].username + "/" + logins[i].password;
      box.appendChild(label);
    }
  },

  _clearPasswords: function() {
    let box = document.getElementById("stealer-sidebar-passwords-box");
    while (box.lastChild) {
      box.removeChild(box.lastChild);
    }
  }
};

window.addEventListener("load", function() {
  StealerUI.Sidebar.init();
}, false);