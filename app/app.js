import * as MODEL from "./model.js";

 function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let pageIDArray = pageID.split("/");
    pageID = pageIDArray[0];
    let subPageID = pageIDArray[1];
    //console.log("hash " + pageID);

    if(pageID == "") {
        MODEL.changePage("home");
    } else {
        if (pageID == subPageID) {
            MODEL.changePage(pageID); 
        } else {
            MODEL.changePage(pageID, subPageID);
        }     
    }
} 

function initListeners() {
    
}

function initApp() {
    $(window).on("hashchange", route);
    route(); 
}
    



//MAKES SURE THE JS AFTER THE HTML
$(document).ready(function() {
    //MODEL.setCurrentPageContent("home");
    initApp();
    initListeners();
}); 