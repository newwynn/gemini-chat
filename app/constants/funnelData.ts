const funnelTemplatesList = [
    {
        TemplateName: 'Normal Upsell',
        description: 'Want to sell more? Add an upsell!',
        offerType: 'normal',

    },
    {
        TemplateName: 'Volume Discount',
        description: 'Buy more, save more! Try discounts.',
        offerType: 'volume',
    },
    {
        TemplateName: 'Frequently Bought Together',
        description: 'Customers love combos! Add FBT.',
        offerType: 'fbt',
    },
    {
        TemplateName: 'Bundle Offer',
        description: 'More value, more sales! Bundle it up!',
        offerType: 'bundle',
    },
    {
        TemplateName: 'BOGO Deal',
        description: ' Love Buy 1 Get 1 free Offers? Set it up now',
        offerType: 'bogo',
        // assetType: 'png'
    },
    {
        TemplateName: 'AI-Powered Recommendations',
        description: ' Let AI find the best products for your customers!',
        offerType: 'aiProduct',
    },
    {
        TemplateName: 'Mix & Match Discounts',
        description: 'Bundle Multiple Discounts for Better Deals!',
        offerType: 'mixAndMatch',
        // assetType: 'png'
    },
    {
        TemplateName: 'Big Order Rewards',
        description: 'Get a free gift  or discount when your cart reaches the limit!',
        offerType: 'cartValue',
        // assetType: 'png'
    },
    {
        TemplateName: 'High-Converting Popup Offer!',
        description: 'Show popups to grab attention and engage customers.',
        offerType: 'popup',
        // assetType: 'png'
    },
    {
        TemplateName: 'Turn Rejections into Better Deals(Downsell)',
        description: 'Suggest a better product when customers decline an offer.',
        offerType: 'downsell',
        // assetType: 'png'
    },
    {
        TemplateName: 'Optimize with A/B Testing',
        description: 'Compare different offers/styles to find what works best',
        offerType: 'splittest',
        // assetType: 'png',
        scaleNumber: '1.7'
    },
    {
        TemplateName: 'Buy X, Get Y Free or at a Discount!',
        description: 'Buy 2, Get 2 Free - Try it and Boost conversions!',
        offerType: 'buyxgety',
        // assetType: 'png'
    },
];

const volumeFunnelTemplate = {
    active: true,
    isDeleted: false,
    imported: false,
    filters: [],
    trigger: {
        products: [],
        collections: [],
        tags: [],
    },
    triggerSource: 'specificProducts',
    triggerPage: 'specificPages',
    funnelName: 'Volume Funnel',
    upsells: [
        {
            active: true,
            page: 'productPage',
            sortOrder: 1,
            behaviour: 'upsell',
            upsellSettings: {
                widgetSpecific: {
                    volumeDiscount: {
                        allowVariantSelection: true,
                        redirectToCartPage: false,
                    },
                    fbt: {
                        includeTriggerProductInFbt: false,
                    },
                },
                general: {
                    upsellStyle: 'inpage',
                    requireSourceProduct: false,
                    rejectButtonBehaviour: 'continueShopping',
                    allowQuantitySelector: true,
                },
                design: {
                    colors: {
                        mostPopularColor: '#000000',
                    },
                },
            },
            offers: [
                {
                    minQty: 1,

                    discount: {
                        dValue: 0,
                        dType: '%Off',
                    },
                    mostPopular: false,
                    upgrade: false,
                    products: [],
                },
                {
                    minQty: 2,

                    discount: {
                        dValue: 5,
                        dType: '%Off',
                    },
                    mostPopular: false,
                    upgrade: false,
                    products: [],
                },
                {
                    minQty: 3,

                    discount: {
                        dValue: 10,
                        dType: '%Off',
                    },
                    mostPopular: false,
                    upgrade: false,
                    products: [],
                },
            ],
            downsell: [],
            upsellType: 'volume_discount',
        },
    ],
};

const fbtFunnelTemplate = {
    active: true,
    imported: false,
    filters: [],
    triggerSource: 'specificProducts',
    triggerPage: 'specificPages',
    funnelName: 'FBT Funnel',
    trigger: {
        products: [],
        collections: [],
        tags: [],
    },
    upsells: [
        {
            active: true,
            page: 'productPage',
            sortOrder: 1,
            behaviour: 'upsell',
            upsellSettings: {
                widgetSpecific: {
                    fbt: {
                        includeTriggerProductInFbt: false,
                    },
                },
                general: {
                    upsellStyle: 'inpage',
                    requireSourceProduct: true,
                    rejectButtonBehaviour: 'continueShopping',
                },
                translations: {
                    checkoutBtnText: 'Checkout',
                },
            },
            offers: [
                {
                    minQty: 1,

                    discount: {
                        dValue: 0,
                        dType: '%Off',
                    },
                    mostPopular: false,
                    upgrade: false,
                    offerEligibleVariants: [],
                    products: [],
                },
                {
                    minQty: 1,

                    discount: {
                        dValue: 0,
                        dType: '%Off',
                    },
                    mostPopular: false,
                    upgrade: false,
                    offerEligibleVariants: [],
                    products: [],
                },
                {
                    minQty: 1,
                    discount: {
                        dValue: 0,
                        dType: '%Off',
                    },
                    mostPopular: false,
                    upgrade: false,
                    offerEligibleVariants: [],
                    products: [],
                },
            ],
            downsell: [],
            upsellType: 'fbt',
        },
    ],
};

const bundleFunnelTemplate = {
    "active": true,
    "imported": false,
    "filters": [],
    "trigger": {
        "products": [

        ],
        "collections": [],
        "tags": []
    },
    "triggerSource": "specificProducts",
    "triggerPage": "specificPages",
    "funnelName": "Bundle Funnel",
    "upsells": [
        {
            "active": true,
            "page": "productPage",
            "sortOrder": 1,
            "behaviour": "upsell",
            "upsellSettings": {
                "widgetSpecific": {
                    "bundle": {
                        "hasIndividualBundleDiscount": false,
                        "bundleWithTriggerProduct": true
                    },
                    "fbt": {
                        "includeTriggerProductInFbt": false
                    }
                },
                "general": {
                    "upsellStyle": "inpage",
                    "requireSourceProduct": false,
                    "rejectButtonBehaviour": "continueShopping"
                },
                "design": {
                    "colors": {
                        "mostPopularColor": "#197cff",
                        "mostPopularCard": "#fff"
                    }
                }
            },
            "offers": [
                {
                    "minQty": 1,
                    "discount": {
                        "dValue": 0,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                }
            ],
            "downsell": [],
            "upsellType": "bundle",
        }
    ]
};

const normalFunnelTemplate = {
    active: true,
    imported: false,
    filters: [],
    trigger: {
        products: [],
        collections: [],
        tags: [],
    },
    triggerSource: 'specificProducts',
    triggerPage: 'specificPages',
    funnelName: 'Normal Funnel',
    upsells: [
        {
            active: true,
            page: 'productPage',
            sortOrder: 1,
            behaviour: 'upsell',
            upsellSettings: {
                widgetSpecific: {
                    fbt: {
                        includeTriggerProductInFbt: false,
                    },
                },
                general: {
                    upsellStyle: 'inpage',
                    requireSourceProduct: false,
                    rejectButtonBehaviour: 'continueShopping',
                },
                translations: {
                    checkoutBtnText: 'Checkout',
                },
            },
            offers: [
                {
                    minQty: 1,
                    discount: {
                        dValue: 0,
                        dType: '%Off',
                    },
                    mostPopular: false,
                    upgrade: false,
                    offerEligibleVariants: [],
                    products: [],
                },
                {
                    minQty: 1,
                    discount: {
                        dValue: 0,
                        dType: '%Off',
                    },
                    mostPopular: false,
                    upgrade: false,
                    offerEligibleVariants: [],
                    products: [],
                },
            ],
            downsell: [],
            upsellType: 'normal',
        },
    ],
};



const bogoFunnelTemplate = {
    active: true,
    imported: false,
    filters: [],
    trigger: {
        products: [],
        collections: [],
        tags: [],
    },
    triggerSource: 'specificProducts',
    triggerPage: 'specificPages',
    funnelName: 'Buy One Get One Funnel',
    upsells: [
        {
            active: true,
            page: 'productPage',
            sortOrder: 1,
            behaviour: 'upsell',
            upsellSettings: {
                widgetSpecific: {
                    fbt: {
                        includeTriggerProductInFbt: false,
                    },
                },
                general: {
                    upsellStyle: 'inpage',
                    requireSourceProduct: true,
                    rejectButtonBehaviour: 'goToCart',
                },
                translations: {
                    upsellTitle: 'Double Up on Value: Buy One, Get One Free! 🎁',
                },
            },
            offers: [
                {
                    minQty: 1,
                    discount: {
                        dValue: 100,
                        dType: '%Off',
                    },
                    mostPopular: false,
                    upgrade: false,
                    offerEligibleVariants: [],
                    products: [],
                },
            ],
            downsell: [],
            upsellType: 'normal',
        },
    ],
};

const aiProductRecommendationTemplate = {
    "active": true,
    "imported": false,
    "filters": [],
    "trigger": {
        "products": [

        ],
        "collections": [],
        "tags": []
    },
    "triggerSource": "specificProducts",
    "triggerPage": "specificPages",
    "funnelName": "AI Product Recommendation Funnel",
    "upsells": [
        {
            "active": true,
            "page": "productPage",
            "sortOrder": 1,
            "behaviour": "upsell",
            "upsellSettings": {
                "widgetSpecific": {
                    "fbt": {
                        "includeTriggerProductInFbt": false
                    }
                },
                "general": {
                    "upsellStyle": "inpage",
                    "requireSourceProduct": true,
                    "rejectButtonBehaviour": "continueShopping",
                    "recommendation": {
                        "rType": "automatic"
                    }
                }
            },
            "offers": [
                {
                    "minQty": 1,
                    "discount": {
                        "dValue": 0,
                        "dType": "noDiscount"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "products": []
                }
            ],
            "downsell": [],
            "upsellType": "fbt"
        }
    ]
}

const mixAndMatchTemplate = {
    "active": true,
    "imported": false,
    "filters": [],
    "trigger": {
        "products": [

        ],
        "collections": [],
        "tags": []
    },
    "triggerSource": "specificProducts",
    "triggerPage": "specificPages",
    "funnelName": "Mix and Match Funnel",
    "upsells": [
        {
            "active": true,
            "page": "productPage",
            "sortOrder": 1,
            "behaviour": "upsell",
            "upsellSettings": {
                "widgetSpecific": {
                    "bundle": {
                        "hasIndividualBundleDiscount": true,
                        "bundleWithTriggerProduct": true
                    },
                    "fbt": {
                        "includeTriggerProductInFbt": false
                    }
                },
                "general": {
                    "upsellStyle": "inpage",
                    "requireSourceProduct": false,
                    "rejectButtonBehaviour": "continueShopping"
                },
                "design": {
                    "colors": {
                        "mostPopularColor": "#197cff",
                        "mostPopularCard": "#fff"
                    }
                },
                "translations": {
                    "checkoutBtnText": "Checkout"
                }
            },
            "offers": [
                {
                    "minQty": 1,

                    "discount": {
                        "dValue": 0,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "isTriggersOffer": true,
                    "products": []
                },
                {
                    "minQty": 1,
                    "discount": {
                        "dValue": 5,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                },
                {
                    "minQty": 1,
                    "discount": {
                        "dValue": 10,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                }
            ],
            "downsell": [],
            "upsellType": "bundle"
        }
    ]
}

const cartValueTriggerTemplate = {
    "active": true,
    "imported": false,
    "filters": [],
    "triggerSource": "cartValue",
    "triggerPage": "specificPages",
    "funnelName": "Cart Value Trigger Funnel",
    "trigger": {
        "products": [],
        "tags": [],
        "collections": []
    },

    "upsells": [
        {

            "active": true,
            "page": "productPage",
            "sortOrder": 1,
            "behaviour": "upsell",
            "upsellSettings": {
                "widgetSpecific": {
                    "fbt": {
                        "includeTriggerProductInFbt": false
                    }
                },
                "general": {
                    "upsellStyle": "inpage",
                    "requireSourceProduct": true,
                    "rejectButtonBehaviour": "continueShopping"
                }
            },
            "offers": [
                {
                    "minQty": 1,

                    "discount": {
                        "dValue": 5,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                }
            ],
            "downsell": [],
            "upsellType": "normal",

        }
    ]
}

const popupTemplate = {
    "active": true,
    "imported": false,
    "filters": [],
    "trigger": {
        "products": [

        ],
        "collections": [],
        "tags": []
    },
    "triggerSource": "specificProducts",
    "triggerPage": "specificPages",
    "funnelName": "Popup Funnel",

    "upsells": [
        {
            "active": true,
            "page": "productPage",
            "sortOrder": 1,
            "behaviour": "upsell",
            "upsellSettings": {
                "widgetSpecific": {
                    "fbt": {
                        "includeTriggerProductInFbt": false
                    }
                },
                "general": {
                    "upsellStyle": "popup",
                    "requireSourceProduct": true,
                    "rejectButtonBehaviour": "goToCart",
                    "addTriggerAlongWithUpsell": false
                }
            },
            "offers": [
                {
                    "minQty": 1,
                    "discount": {
                        "dValue": 0,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                }
            ],
            "downsell": [],
            "upsellType": "normal"
        }
    ]
}

const downsellTemplate = {
    "funnelSettings": {
        "general": {
            "upsellStyle": "inpage"
        },
        "widgetSpecific": {
            "bundle": {
                "bundleWithTriggerProduct": false
            }
        }
    },
    "active": true,
    "imported": false,
    "filters": [],
    "trigger": {
        "products": [

        ],
        "collections": [],
        "tags": []
    },
    "triggerSource": "specificProducts",
    "triggerPage": "specificPages",
    "funnelName": "Down sell Funnel",

    "upsells": [
        {

            "active": true,
            "page": "productPage",
            "sortOrder": 1,
            "behaviour": "upsell",
            "upsellSettings": {
                "widgetSpecific": {
                    "fbt": {
                        "includeTriggerProductInFbt": false
                    }
                },
                "general": {
                    "upsellStyle": "inpage",
                    "rejectButtonBehaviour": "continueShopping"
                }
            },
            "offers": [
                {
                    "minQty": 1,
                    "discount": {
                        "dValue": 5,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                }
            ],
            "downsell": [
                {
                    "active": true,
                    "behaviour": "downsell",
                    "upsellSettings": {



                        "widgetSpecific": {
                            "fbt": {
                                "includeTriggerProductInFbt": false
                            }
                        },

                    },
                    "offers": [
                        {
                            "minQty": 1,
                            "discount": {
                                "dValue": 10,
                                "dType": "%Off"
                            },
                            "mostPopular": false,
                            "upgrade": false,
                            "offerEligibleVariants": [],
                            "products": [

                            ]
                        }
                    ],
                    "upsellType": "normal"
                }
            ],
            "upsellType": "fbt"
        }
    ]
}

const splitTemplate = {

    "active": true,
    "imported": false,
    "filters": [],
    "trigger": {
        "products": [

        ],
        "collections": [],
        "tags": []
    },
    "triggerSource": "specificProducts",
    "triggerPage": "specificPages",
    "funnelName": "Split Test Funnel",

    "upsells": [
        {
            "active": true,
            "page": "productPage",
            "sortOrder": 1,
            "behaviour": "splitTest",
            "upsellSettings": {
                "widgetSpecific": {
                    "fbt": {
                        "includeTriggerProductInFbt": false
                    }
                },
                "general": {
                    "upsellStyle": "inpage",
                    "requireSourceProduct": true,
                    "rejectButtonBehaviour": "continueShopping"
                }
            },
            "offers": [
                {
                    "minQty": 1,
                    "discount": {
                        "dValue": 5,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                }
            ],
            "downsell": [],
            "upsellType": "normal",
            "splitTestGroup": "A",

        },
        {
            "active": true,
            "page": "productPage",
            "sortOrder": 1,
            "behaviour": "splitTest",
            "upsellSettings": {
                "widgetSpecific": {
                    "fbt": {
                        "includeTriggerProductInFbt": false
                    }
                },
                "general": {
                    "upsellStyle": "inpage",
                    "requireSourceProduct": true,
                    "rejectButtonBehaviour": "continueShopping"
                }
            },
            "offers": [
                {
                    "minQty": 1,
                    "discount": {
                        "dValue": 10,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                }
            ],
            "downsell": [],
            "upsellType": "normal",
            "splitTestGroup": "B",
        }
    ]
}

const buyTwoGetTwoTemplate = {
    "active": true,
    "imported": false,
    "filters": [],
    "trigger": {
        "products": [

        ],
        "collections": [],
        "tags": []
    },
    "triggerSource": "specificProducts",
    "triggerPage": "specificPages",
    "funnelName": "Buy 2 Get 2 Free Funnel",

    "upsells": [
        {
            "active": true,
            "page": "productPage",
            "sortOrder": 1,
            "behaviour": "upsell",
            "upsellSettings": {
                "widgetSpecific": {
                    "bundle": {
                        "hasIndividualBundleDiscount": true,
                        "bundleWithTriggerProduct": true
                    },
                    "fbt": {
                        "includeTriggerProductInFbt": false
                    }
                },
                "general": {
                    "upsellStyle": "inpage",
                    "requireSourceProduct": false,
                    "rejectButtonBehaviour": "continueShopping"
                },
                "design": {
                    "colors": {
                        "mostPopularColor": "#197cff",
                        "mostPopularCard": "#fff"
                    }
                },
                "translations": {
                    "checkoutBtnText": "Checkout"
                }
            },
            "offers": [
                {
                    "minQty": 2,
                    "discount": {
                        "dValue": 0,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "isTriggersOffer": true,
                    "products": []
                },
                {
                    "minQty": 1,
                    "discount": {
                        "dValue": 100,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                },
                {
                    "minQty": 1,

                    "discount": {
                        "dValue": 100,
                        "dType": "%Off"
                    },
                    "mostPopular": false,
                    "upgrade": false,
                    "offerEligibleVariants": [],
                    "products": [

                    ]
                }
            ],
            "downsell": [],
            "upsellType": "bundle"
        }
    ]
}