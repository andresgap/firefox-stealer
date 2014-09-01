
Cu.import("resource://stealer/common.js");
Cu.import("resource://stealer/passwordService.js");

StealerUI.Overlay = {
  init: function() {
  },

  toggleSidebar: function() {
    toggleSidebar("stealer-sidebar-broadcaster");
  }
};

window.addEventListener("load", function() {
  StealerUI.Overlay.init();
}, false);