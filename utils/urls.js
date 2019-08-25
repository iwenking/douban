const globalUrls = {
  moviesList:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  Tvlist:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  ShowList:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
  movieDetail:"https://m.douban.com/rexxar/api/v2/movie/",
  tvDetail:"https://m.douban.com/rexxar/api/v2/tv/",
  showDetail:"https://m.douban.com/rexxar/api/v2/tv/",
  movieTags:function(id){
    return "https://m.douban.com/rexxar/api/v2/movie/"+id+"/tags?count=8";
  },
  tvTages:function(id){
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8";
  },
  showTages:function(id){
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8";
  },
  movieComments:function(id,start=0,count=3){
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/interests?count=" + count + "&start=" + start
  },
  tvComments: function (id, start = 0, count = 3){
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/interests?count=" + count + "&start=" + start
  },
  showComments: function (id, start = 0, count = 3){
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/interests?count=" + count + "&start=" + start
  },
  searchUrl:function(q){
    return "https://m.douban.com/rexxar/api/v2/search?type=movie&q="+q
  }
}




export { globalUrls}