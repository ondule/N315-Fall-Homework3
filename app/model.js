export function changePage(pageId, subPage) {
    console.log("sub" + subPage);
    console.log("page" + pageId);
    
    if (subPage == undefined) {
        console.log("hello");
        $.get(`pages/${pageId}/${pageId}.html`, function (data) {
            //console.log(data);
            $("#app").html(data);
        }) .fail((error) => {
            if(error.status == "404"){
                //alert("Page can not be found pls check url");
            }
            console.log("error", error.status);
        });
    } else {
        $.get(`pages/${pageId}/${subPage}.html`, function (data) {
            $("#app").html(data);
        });
    }
    
    //let page = pageID + "Content";
    //$("app").html(eval(page));
}