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
    $("#live2d-widget").remove();
    $("a").each(function () {
        $(this).attr("href", "#");
        $(this).attr("onClick", "return false");

    })
    window.onload = function () {
        let url = '/css/webapp.css';
        let doc = document;
        let link = doc.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", url);
        let heads = doc.getElementsByTagName("head");
        if (heads.length) {
            heads[0].prepend(link);
        } else {
            doc.documentElement.prepend(link);
        }
    }
}
if(getQueryVariable('from') && getQueryVariable('from') == "app"){
    runtimeApp();
}


