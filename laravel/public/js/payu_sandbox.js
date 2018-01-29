var products = [
    {id:1, code:"FP0001", name: "Ferari 812 superfast"    , price: 250000 },
    {id:2, code:"FP0002", name: "Harley Davidson Roadster", price: 64000  },
    {id:3, code:"FP0003", name: "XLT Marine Nordic Star"  , price: 560000 },
    {id:4, code:"FP0004", name: "Bun and Coke"            , price: 3.49   },
];
var product = null;


function fillProducts() {
    console.log("fillProducts");
    var selProducts = document.getElementById('products');
    for (var p of products) {
        var option = document.createElement('option');
        option.text = p.name;
        option.value = p.code;
        selProducts.add(option);
    }
}

function onSelectProduct() {
    console.log("onSelectProduct");
    var selProducts = document.getElementById('products');
    var pPrice = document.getElementById('price');
    var i = selProducts.selectedIndex;
    if (i>0) {
        product = products[i-1];
        pPrice.innerText = product.price.format(2);
        console.log(product);
    } else {
        product = null;
        pPrice.innerText = '';
    }
}

function start() {
    console.log("start");
    fillProducts();
}
