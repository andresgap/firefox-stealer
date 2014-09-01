
Cu.import("resource://stealer/common.js");
Cu.import("resource://stealer/passwordService.js");

StealerUI.Overlay = {
  init: function() {
    //document.getElementById("stealer-panel-label").value = StealerBG.PasswordService.test();
  },

  togglePanel: function() {
    let panel = document.getElementById("stealer-panel");

    if (panel.state == "open" || panel.state == "showing") {
      this.closePanel()
    } else {
      this.openPanel();
    }
  },

  openPanel: function() {
    let panel = document.getElementById("stealer-panel");
    let anchor = document.getElementById("stealer-toolbar-button");
    let position = "after_start";
    if (!anchor) {
      anchor = document.getElementById("browser-bottombox");
      position = "before_end";
    }
    panel.openPopup(anchor, position, 0, 0, false, false);
  },

  closePanel: function() {
    document.getElementById("stealer-panel").hidePopup();
  },

  toggleSidebar: function() {
    toggleSidebar("stealer-sidebar-broadcaster");
  }
};

window.addEventListener("load", function() {
  StealerUI.Overlay.init();
}, false);