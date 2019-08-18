import {
  globalUrls
} from "urls.js"

const network = {
  getMovieList: function(params) {
    params.type = "movie";
    this.getItemList(params)
  },
  getTvlist: function(params) {
    params.type = "tv";
    this.getItemList(params)
  },
  getShowList: function(params) {
    params.type = "show";
    this.getItemList(params)
  },
  getItemList: function(params) {
    var url = "";
    if (params.type === "movie") {
      url = globalUrls.moviesList
    } else if (params.type === "tv") {
      url = globalUrls.Tvlist;
    } else {
      url = globalUrls.ShowList;
    }
    var count = params.count ? params.count : 7;
    wx.request({
      url: url,
      data: {
        count: count
      },
      success: function(res) {
        var items = res.data.subject_collection_items;
        var itemCount = items.length;
        var left = itemCount % 3;
        if(left  === 2){
          items.push(null)
        }
        if (params && params.success) {
          params.success(items);
        }
        console.log(items)
      }
    })
  }
}

export {
  network
}