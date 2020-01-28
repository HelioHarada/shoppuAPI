var express = require("express");
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// GET product
app.get("/product", (req, res, next) => {
    res.json(
        [
            {
                "id": 1,
                "title": "Tênis Freeway Steve 3722 Couro Off White",
                "images": [
                    {
                        "cover": "https://cd.shoppub.com.br/freeway/media/cache/ef/e0/efe0a7d4be5dd146f50a53a3ff67dac1.jpg",
                        "hover": "https://cd.shoppub.com.br/freeway/media/cache/77/0c/770ca84396390df25e7ccf07154eb099.jpg",
                        "is_highlight": true
                    }
                ],
                "availability": {
                    "is_available": true,
                    "quantity": 15
                },
                "attributes": [
                    {
                        "id": 1,
                        "label": "38"
                    },
                    {
                        "id": 2,
                        "label": "39"
                    },
                    {
                        "id": 3,
                        "label": "40"
                    },
                    {
                        "id": 4,
                        "label": "41"
                    },
                    {
                        "id": 5,
                        "label": "41"
                    },
                    {
                        "id": 6,
                        "label": "43"
                    },
                    {
                        "id": 7,
                        "label": "44"
                    }
                ],
                "tags": [
                    {
                        "label": "Novo",
                        "color": "#E05618"
                    },
                    {
                        "label": "10% OFF",
                        "color": "#FF8900"
                    }
                ],
                "campaign_tags": [
                    {
                        "label": "Frete grátis",
                        "color": "#F45400"
                    },
                    {
                        "label": "50% a vista",
                        "color": "#FF8900"
                    }
                ],
                "related_products": [
                    {
                        "id": 1,
                        "title": "Tênis Freeway Steve 3722 Couro Off White",
                        "image": "https://cd.shoppub.com.br/freeway/media/cache/ef/e0/efe0a7d4be5dd146f50a53a3ff67dac1.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Tênis Masculino Freeway Steve 2798 Couro Mascavo",
                        "image": "https://cd.shoppub.com.br/freeway/media/cache/7b/8c/7b8c701cda5ddb56ffb9055d80e4527c.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Tênis Masculino Freeway Steve 3124 Couro Pinhão",
                        "image": "https://cd.shoppub.com.br/freeway/media/cache/5b/7e/5b7eb5a375290ae178cf8332da1bebf5.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Tênis Freeway job 3722 Couro Off White",
                        "image": "https://cd.shoppub.com.br/freeway/media/cache/ef/e0/efe0a7d4be5dd146f50a53a3ff67dac1.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Tênis Masculino Freeway star 2798 Couro Mascavo",
                        "image": "https://cd.shoppub.com.br/freeway/media/cache/7b/8c/7b8c701cda5ddb56ffb9055d80e4527c.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Tênis Masculino Freeway cloud 3124 Couro Pinhão",
                        "image": "https://cd.shoppub.com.br/freeway/media/cache/5b/7e/5b7eb5a375290ae178cf8332da1bebf5.jpg"
                    }
                ],
                "pricing": {
                    "total_value": 50.00,
                    "total_value_from": 200.00,
                    "installments": {
                        "quantity": 10,
                        "installment_value": 10.00,
                        "total_value": 100.00
                    }
                }
            }
        ]
    );
});

// GET Setting
app.get("/setting", (req, res, next) => {
    res.json(

        {
            "title": "Loja Freeway | Loja Online Oficial da Marca de Calçados FREEWAY Easywear",
            "layout": {
                "product": {
                    "list": {
                        "attribute_widget_type": 1,
                        "show_related_products": true,
                        "show_availability_widget": true,
                        "show_favorite_widget": true,
                        "show_tags": true,
                        "show_campaign_tags": true
                    }
                }
            }
        }
    )
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
});

