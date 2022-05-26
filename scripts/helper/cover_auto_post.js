
const postCover = require('../../source/js/postcover.js')
function coverAutoPost(tags) {
    if(!tags) return;
    let coverUrl = "";
    for(let i=0;i<tags.data.length;i++){
        if(Reflect.has(postCover,tags.data[i].name)){
            coverUrl = postCover[tags.data[i].name]
            break;
        }
    }
    return coverUrl
}

hexo.extend.helper.register('cover_auto_post', coverAutoPost);
