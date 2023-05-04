// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
    {
      "name" : "Closed Door",
      "image" : "static/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js",
      "type" : "7"
    }, 
    {
      "name" : "Open Door",
      "image" : "static/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/174/open_door.js",
      "type" : "7"
    }, 
    {
      "name" : "Window",
      "image" : "static/models/thumbnails/thumbnail_window.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/165/whitewindow.js",
      "type" : "3"
    }, 
    {
      "name" : "Red Chair",
      "image" : "static/models/thumbnails/thumbnail_tn-orange.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/723/ik-ekero-orange_baked.js",
      "type" : "1"
    }, 
    {
      "name" : "Bed",
      "image" : "static/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/39/ik_nordli_full.js",
      "type" : "1"
    }, 
    {
      "name" : "Blue_chair",
      "image" : "static/models/thumbnails/thumbnail_ik-ekero-orange_baked.png",
      "model" : "static/models/js/Blue_chair.js",
      "type" : "1"
    }, 
    {
      "name" : "Wood_table",
      "image" : "static/models/thumbnails/thumbnail_Wood_table.png",
      "model" : "static/models/js/Wood_table.js",
      "type" : "1"
    },
    {
      "name" : "Piano_chair",
      "image" : "static/models/thumbnails/thumbnail_Piano_chair.png",
      "model" : "static/models/js/Piano_chair.js",
      "type" : "1"
    },
    {
      "name" : "Accent_chest",
      "image" : "static/models/thumbnails/thumbnail_Accent_chest.png",
      "model" : "static/models/js/Accent_chest.js",
      "type" : "1"
    },
    {
      "name" : "Modern_bed",
      "image" : "static/models/thumbnails/thumbnail_Modern_bed.png",
      "model" : "static/models/js/Modern_bed.js",
      "type" : "1"
    },
    {
      "name" : "Modern_table",
      "image" : "static/models/thumbnails/thumbnail_Modern_table.png",
      "model" : "static/models/js/Modern_table.js",
      "type" : "1"
    },
    {
      "name" : "Modern_table2",
      "image" : "static/models/thumbnails/thumbnail_Modern_table2.png",
      "model" : "static/models/js/Modern_table2.js",
      "type" : "1"
    },
    {
      "name" : "Nature_Nightstand",
      "image" : "static/models/thumbnails/thumbnail_Nature_Nightstand.png",
      "model" : "static/models/js/Nature_Nightstand.js",
      "type" : "1"
    },
    {
      "name" : "Industrial_style_table",
      "image" : "static/models/thumbnails/thumbnail_Industrial_style_table.png",
      "model" : "static/models/js/Industrial_style_table.js",
      "type" : "1"
    },
    {
      "name" : "Black_chair_ikea",
      "image" : "static/models/thumbnails/thumbnail_Black_chair_ikea.png",
      "model" : "static/models/js/Black_chair_ikea.js",
      "type" : "1"
    },
    {
      "name" : "Wooden_closet",
      "image" : "static/models/thumbnails/thumbnail_Wooden_closet.png",
      "model" : "static/models/js/Wooden_closet.js",
      "type" : "1"
    },
    {
      "name" : "Wooden_closet2",
      "image" : "static/models/thumbnails/thumbnail_Wooden_closet2.png",
      "model" : "static/models/js/Wooden_closet2.js",
      "type" : "1"
    },
    {
      "name" : "Nature_bed",
      "image" : "static/models/thumbnails/thumbnail_Nature_bed.png",
      "model" : "static/models/js/Nature_bed.js",
      "type" : "1"
    },
   /*     
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "type" : "1"
    }, 
    */
  ]



  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' + 
                item.name + 
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type + 
                '"><img src="' +
                item.image + 
                '" alt="Add Item"> '+
                item.name +
                '</a></div>';
    itemsDiv.append(html);
  }
});