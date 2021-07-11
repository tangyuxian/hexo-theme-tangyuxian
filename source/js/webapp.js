function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
function runtimeApp() {
    window.onload = function () {
        $("body").css("opacity",1)
        if(getQueryVariable('from') && getQueryVariable('from') == "app"){
            $("a").each(function () {
                $(this).attr("href", "#");
                $(this).attr("onClick", "return false");
            })
            $("#daodream-container").css("display","none")
            $("#nexmoe-header").css("display","none")
            $("#nexmoe-background").css("display","none")
        }else{
            $("#daodream-container").css("display","block")
            $("#nexmoe-header").css("display","block")
            $("#nexmoe-background").css("display","block")
        }
        // let doc = document;
        // let link = doc.createElement("link");
        // link.setAttribute("rel", "stylesheet");
        // link.setAttribute("type", "text/css");
        // link.setAttribute("href", url);
        // let heads = doc.getElementsByTagName("head");
        // if (heads.length) {
        //     heads[0].prepend(link);
        // } else {
        //     doc.documentElement.prepend(link);
        // }
    }
}
console.log("来源",getQueryVariable('from'))
runtimeApp();



