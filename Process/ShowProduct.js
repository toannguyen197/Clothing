
function DomId(id){
    return document.getElementById(id);
}

var Product = [
    { 
        imgFront: './IMG/Top/black1.jpg', 
        imgBack: './IMG/Top/black2.jpg', 
        name: 'VINTAGE BLACK WAFFLE LOGO T-SHIRT',
        brandName: 'REPRESENT',
        price: 450000,
    }
]

render(Product);

function render(arrContainer){

    var arrFilter = [];

    var str = "";

    for (let v of arrContainer) {
      str += '<div class="card fade"><div class="card-front effect"><img src="' + v.imgFront + '" height="300px" width="300px"></div>' +
        '<div class="card-front effect"><img src="' + v.imgBack + '" height="300px" width="300px"></div></div>' +
      '<div class="card-title">' +
      '<div class="product-title"><a href="#">' + v.name + '</a></div></br>' +
      '<a href="HomePage.html">' + v.brandName + '</a>'
      '<p class="money">' + v.price + "₫" + '</p></div>'
      arrFilter.push(str);
    }

    console.log(arrFilter);
    
    var renderHtml = arrFilter.join('');
    DomId('wapperSanPham').innerHTML = renderHtml;
}