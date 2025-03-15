var menuicon=document.querySelector(".menu-icon");
      var sidebar=document.querySelector(".sidebar");
      var buttoncompose=document.querySelector(".buttoncompose");
      var shortcutlink=document.querySelector(".shortcutlink");
      var shortcutlink1=document.querySelector(".shortcutlink1");
      var shortcutlink2=document.querySelector(".shortcutlink2");
      var shortcutlink3=document.querySelector(".shortcutlink3");
      var shortcutlink4=document.querySelector(".shortcutlink4");
      var shortcutlinkactive=document.querySelector(".shortcutlinkactive");
      var labelicon=document.querySelector(".labelicon");
      var emailList=document.querySelector(".emailList");
      menuicon.onclick=function(){
        sidebar.classList.toggle("small-sidebar");
        buttoncompose.classList.toggle("button-compose");
        shortcutlink.classList.toggle("shortcut-link");
        shortcutlink1.classList.toggle("shortcut-link");
        shortcutlink2.classList.toggle("shortcut-link");
        shortcutlink3.classList.toggle("shortcut-link");
        shortcutlink4.classList.toggle("shortcut-link");
        shortcutlinkactive.classList.toggle("shortcut-link-active");
        labelicon.classList.toggle("label-icon");
        emailList.classList.toggle("email-list");
      }

