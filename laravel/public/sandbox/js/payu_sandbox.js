
var endpoint = '/sandbox/payu_sandbox_pay';

var products = [
    {id:1, code:"FP0001", name: "Ferari 812 superfast"    , price: 250000000 },
    {id:2, code:"FP0002", name: "Harley Davidson Roadster", price: 64000000  },
    {id:3, code:"FP0003", name: "XLT Marine Nordic Star"  , price: 560000000 },
    {id:4, code:"FP0004", name: "Bun and Coke"            , price: 3500      },
];

var cctypes = [
    {code: 'VISA'      , name: 'Visa'},
    {code: 'MASTERCARD', name: 'Master Card'},
    {code: 'AMEX'      , name: 'American Express'},
];

var creditcards = [
    {id:1, t:1, type: 'VISA'      , name: 'MARIA OSBORNE'   , number: '4532739549565275', cvv:'701', yr: '2018', mn:'07' },
    {id:2, t:2, type: 'MASTERCARD', name: 'MICHELLE TIMMONS', number: '5203379600770251', cvv:'181', yr: '2018', mn:'11' },
    {id:3, t:3, type: 'AMEX'      , name: 'ELIJAH EVANS'    , number: '376978660957773' , cvv:'011', yr: '2020', mn:'02' },

    {id:4, t:1, type: 'VISA'      , name: 'AUSTIN ERICKSON' , number: '4466710755416115', cvv:'421', yr: '2018', mn:'09' },
    {id:5, t:2, type: 'MASTERCARD', name: 'CHARLES ATTWOOD' , number: '5430550554876766', cvv:'477', yr: '2018', mn:'05' },
    {id:6, t:3, type: 'AMEX'      , name: 'ETHAN DOUGLAS'   , number: '377022411451452' , cvv:'746', yr: '2018', mn:'10' },
];

var addresses = [
    {id:1, fname: 'Brad', lname:'Pitt'  , address1:'Calle 123 #45-67', address2: 'Barrio Santo', email:'marcohern+bpitt@gmail.com'  , city:'Bogota'     , state: 'Bogota D.C.', zip:'123456', phone: '333 555 5555'},
    {id:2, fname: 'Tom' , lname:'Cruise', address1:'Calle 89 #1-23'  , address2: 'Barrio Largo', email:'marcohern+tcruise@gmail.com', city:'Santa Marta', state: 'Magdalena'  , zip:'234567', phone: '333 666 6666'},
];

var product = null;
var creditcard = null;


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

function fillCreditCardTypes() {
    var selCCTypes = document.getElementById('cctype');
    for (var type of cctypes) {
        var option = document.createElement('option');
        option.text = type.name;
        option.value = type.code;
        selCCTypes.add(option);
    }
}

function fillCreditCards() {
    var selCC = document.getElementById('ccs');
    for (var i in creditcards) {
        var cc = creditcards[i];
        var option = document.createElement('option');
        option.text = cc.name;
        option.value = i;
        selCC.add(option);
    }
}

function onSelectCreditCard() {
    var selCC     = document.getElementById('ccs');
    var selCCType = document.getElementById('cctype');
    var txtCCNum  = document.getElementById('ccnum');
    var txtCCV    = document.getElementById('ccv');
    var txtCCName = document.getElementById('ccname');
    var txtCCYear = document.getElementById('ccyear');
    var txtCCMonth = document.getElementById('ccmonth');

    var i = selCC.selectedIndex;
    if (i>0) {
        creditcard = creditcards[i-1];
        selCCType.selectedIndex = creditcard.t;
        txtCCName.value = creditcard.name;
        txtCCNum.value = creditcard.number;
        txtCCV.value = creditcard.cvv;
        txtCCYear.value = creditcard.yr;
        txtCCMonth.value = creditcard.mn;
        
        console.log(creditcard);
    } else {
        selCCType.selectedIndex = 0;
        txtCCName.value = '';
        txtCCNum.value = '';
        txtCCV.value = '';
        txtCCYear.value = '';
        txtCCMonth.value = '';
        
        console.log("clear cc");
    }
}

function fillAddresses() {
    var selAddresses = document.getElementById('addresses');
    for (var a of addresses) {
        var option = document.createElement('option');
        option.text = a.fname + ' ' + a.lname;
        option.value = a.id;
        selAddresses.add(option);
    }
}

function onSelectAddress() {
    console.log("onSelectAddress");
    var selAddresses = document.getElementById('addresses');
    var txtFName = document.getElementById('fname');
    var txtLName = document.getElementById('lname');
    var txtEmail = document.getElementById('email');
    var txtAddr1 = document.getElementById('address1');
    var txtAddr2 = document.getElementById('address2');
    var txtCity   = document.getElementById('city');
    var txtState  = document.getElementById('state');
    var txtZip    = document.getElementById('zip');
    var txtPhone  = document.getElementById('phone');
    var i = selAddresses.selectedIndex;
    if (i>0) {
        var address = addresses[i-1];
        txtFName.value = address.fname;
        txtLName.value = address.lname;
        txtEmail.value = address.email;
        txtAddr1.value = address.address1;
        txtAddr2.value = address.address2;
        txtCity.value  = address.city;
        txtState.value = address.state;
        txtZip.value   = address.zip;
        txtPhone.value = address.phone;
    } else {
        txtFName.value = '';
        txtLName.value = '';
        txtEmail.value = '';
        txtAddr1.value = '';
        txtAddr2.value = '';
        txtCity.value  = '';
        txtState.value = '';
        txtZip.value   = '';
        txtPhone.value = '';
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pay() {
    console.log("pay");
    var notifyUrl = "/sandbox/payu_sandbox_notify";
    var sessionId = 'MRCSESS-' + getRandomInt(10000,99999);
    var cookie = 'MRCCOOKIE-' + getRandomInt(10000,99999);
    var apiKey = '4Vj8eK4rloUd272L48hsrarnUA';
    var apiLogin = 'pRRXKOl8ikMmt9u'
    var merchantId = '508029';
    var txValue = (product) ? product.price : 10000;
    var currency = 'COP';

    var date = (new Date()).toISOString().replace(/-/g, '').replace(/T/g,'').replace(/:/g, '').replace(/\./g, '').replace(/Z$/g, '');
    console.log("date", date);

    var refCode = 'MRCSB-' + date + '-' + getRandomInt(100,999);

    var source = apiKey + '~' + merchantId + '~' + refCode + '~' + txValue + '~' + currency;
    var signature = md5(source);
    console.log("source", source);
    console.log("signature", signature);

    var values = {
        TX_VALUE: {value:txValue, currency: currency}
    };

    var merchant = {apiKey:apiKey, apiLogin:'pRRXKOl8ikMmt9u'};

    var order = {
        accountId: '512321',
        referenceCode: refCode,
        description:"Sandbox Payment Test",
        language: 'es',
        signature: signature,
        notifyUrl: notifyUrl,
        additionalValues: values
    };

    var payerAddress = {
        street1: "Calle 123 #45-67",
        street2: "Barrio Acme",
        city: "Medellin",
        state: "Antioquia",
        country: "CO",
        postalCode: "1234567",
        phone: '3005555555'
    };

    var payer = {
        merchantPayerId: 1,
        fullName: 'John Doe',
        emailAddress: 'marcohern+jdoe@gmail.com',
        contactPhone: '3005555555',
        dniNumber: '12345678',
        billingAddress: payerAddress
    };

    var ccx = {
        number: creditcard.number,
        securityCode: creditcard.cvv,
        expirationDate: creditcard.yr + '/' + creditcard.mn,
        name: "APPROVED"
    };

    var transaction = {
        order: order,
        payer: payer,
        creditCard: ccx,
        type: "AUTHORIZATION_AND_CAPTURE",
        paymentMethod: creditcard.type,
        paymentCountry: "CO",
        deviceSessionId: sessionId,
        ipAddress: "127.0.0.1",
        cookie: cookie,
        userAgent: navigator.userAgent
    };

    var body = {
        language:"es",
        command:"SUBMIT_TRANSACTION",
        merchant: merchant,
        transaction: transaction,
        test: true
    };

    var req = new XMLHttpRequest();
    req.open('POST', endpoint, true); 
    req.setRequestHeader('Content-type','application/json; charset=utf-8');
    req.setRequestHeader('Accept','application/json');
    req.setRequestHeader('Access-Control-Allow-Origin','application/json');
    req.send(body);
    return false;
}

function start() {
    console.log("start");
    fillProducts();
    fillCreditCardTypes();
    fillCreditCards();
    fillAddresses();
}
