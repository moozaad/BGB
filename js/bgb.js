function sub_timeout(sub_units, div) {
    var dfd = jQuery.Deferred();
        setTimeout(function() {
                dfd.resolveWith(div, [sub_units]);
                    }, 1200);
        return dfd.promise();
}

var my_uuid=0;

// IDs are manually generated and must remain static as they will be used for saving
// lists
var forces = [
    {
        "id":1,
        "name":"Panzer Division Battlegroup",
        "sections":[
            {
                "id":1, 
                "name":"Forward Headquarters Units",
                "allows":'[8,10]',
                "requires":false,
                "entries":[
                {
                    "id":1,
                    "name":"Forward Headquarters",
                    "cost":24,
                    "br":3,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"SdKfz 251/3","cost":0},
                                {"id":2,"text":"SdKfz 251/6","cost":0},
                                {"id":3,"text":"Panzer II/F","cost":0},
                                {"id":4,"text":"Panzer III/J","cost":6},
                                {"id":5,"text":"Panzer IV/G","cost":26},
                                {"id":6,"text":"Panzer IV/H","cost":32},
                                {"id":7,"text":"Tiger","cost":61}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Luftwaffe Air Control Officer",
                    "cost":26,
                    "br":1,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Kübelwagon","cost":0},
                                {"id":2,"text":"Medium Truck","cost":2},
                                {"id":3,"text":"SdKfz 250/3","cost":12},
                                {"id":4,"text":"SdKfz 251/3","cost":12}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Forward Signals Unit",
                    "br":1,
                    "cost":18,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Medium Radio Truck","cost":0},
                                {"id":2,"text":"SdKfz 251/3 Radio H.T.","cost":6},
                                {"id":3,"text":"SdKfz 250/3 Radio H.T.","cost":6},
                                {"id":4,"text":"SdKfz 236","cost":6},
                                {"id":5,"text":"SdKfz 223","cost":6},
                                {"id":6,"text":"Panzer III M","cost":42, "br":2},
                                {"id":7,"text":"Panzer IV H","cost":50, "br":2}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Comms Relay Team",
                    "br":0,
                    "cost":14,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Kübelwagon","cost":0},
                                {"id":2,"text":"Medium Truck","cost":2},
                                {"id":3,"text":"SdKfz 250/3","cost":12},
                                {"id":4,"text":"SdKfz 251/3","cost":12}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Wire Team",
                    "br":0,
                    "cost":7
                },
                {
                    "id":6,
                    "name":"Motorcycle Dispatch Rider",
                    "br":0,
                    "cost":12
                }
                ]

            },
            {
                "id":2, 
                "name":"Infantry Units",
                "allows":'[6,7,9]',
                "requires":false,
                "unique":true,
                "entries":[
                    {
                        "id":1,
                        "name":"Panzer Grenadier Platoon",
                        "cost":100,
                        "br":11,
                        'multiplier':4,
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0, "np":true},
                                            {"id":2,"text":"Medium truck","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":2,
                                "name":"Panzer Grenadier Squad",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"MG",
                                        "choices":[
                                            {"id":1,"text":"Bipod MG34","cost":0},
                                            {"id":2,"text":"Bipod MG42","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]

                            },
                            {
                                "id":3,
                                "name":"Combat Medic",
                                "cost":8,
                                "br":0,
                                "unique":true
                            },
                            {
                                "id":4,
                                "name":"Light Mortar Team",
                                "cost":12,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":5,
                                "name":"Heavy Machine Gun team",
                                "cost":18,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Machine Gun",
                                        "choices":[
                                            {"id":1,"text":"Tripod MG34","cost":0},
                                            {"id":2,"text":"Tripod MG42","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":6,
                                "name":"Anti-tank Rifle Team",
                                "cost":14,
                                "br":1,
                                "unique":true
                            },
                            {
                                "id":7,
                                "name":"Medium Mortar Team",
                                "cost":24,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":8,
                                "name":"Anti-tank Gun",
                                "cost":27,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"50mm PaK38","cost":0},
                                            {"id":2,"text":"75mm PaK40","cost":14}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck","cost":4},
                                            {"id":3,"text":"Opel Maultier","cost":8},
                                            {"id":4,"text":"SdKfz 6 half track","cost":8},
                                            {"id":5,"text":"SdKfz 251/1","cost":16}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Armoured Pioneer Platoon",
                        "cost":199,
                        "br":19,
                        "restricted":true,
                        "multiplier":4,
                        "options":[
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Veteran","cost":0},
                                    {"id":2,"text":"Elite","cost":55, "br":7}
                                ]
                            }
                        ],
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"SdKfz 251/16","cost":0}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":2,
                                "name":"Assault Pioneer Squad",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"SdKfz 251/1","cost":0}
                                        ]
                                    },
                                    {
                                        "name":"Flame-thrower",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Flame-thrower","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Mine sweeper",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Mine sweeper","cost":5}
                                        ]
                                    },
                                    {
                                        "name":"MG",
                                        "choices":[
                                            {"id":1,"text":"Bipod MG34","cost":0},
                                            {"id":2,"text":"Bipod MG42","cost":4}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"Combat Medic",
                                "cost":9,
                                "br":0,
                                "unique":true
                            },
                            {
                                "id":4,
                                "name":"Heavy Machine Gun team",
                                "cost":21,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Machine Gun",
                                        "choices":[
                                            {"id":1,"text":"Tripod MG34","cost":0},
                                            {"id":2,"text":"Tripod MG42","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":5,
                                "name":"Anti-tank Rifle Team",
                                "cost":16,
                                "br":1,
                                "unique":true
                            },
                            {
                                "id":6,
                                "name":"Anti-tank Gun",
                                "cost":30,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"50mm PaK38","cost":0},
                                            {"id":2,"text":"75mm PaK40","cost":14}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck","cost":4},
                                            {"id":3,"text":"Opel Maultier","cost":8},
                                            {"id":4,"text":"SdKfz 6 half track","cost":8},
                                            {"id":5,"text":"SdKfz 251/1","cost":16}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":7,
                                "name":"Self Propelled Infantry Gun",
                                "cost":26,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"SdkFz 251/9 Halftrack","cost":0},
                                            {"id":2,"text":"Grille","cost":16, "br":1}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":8,
                                "name":"Towed AA Gun",
                                "cost":31,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"20mm FlaK","cost":0},
                                            {"id":2,"text":"20mm FlaK vierling","cost":12}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                        {"id":1,"text":"None","cost":0},
                                        {"id":2,"text":"Medium Truck","cost":4},
                                        {"id":3,"text":"SdKfz 10 half track", "cost":8},
                                        {"id":4,"text":"SdKfz 11 half track", "cost":8}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Armoured Pzr Gren Platoon",
                        "cost":162,
                        "br":15,
                        'multiplier':4,
                        "options":[
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Veteran","cost":0},
                                    {"id":2,"text":"Elite","cost":55, "br":7}
                                ]
                            }
                        ],
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"SdKfz 251/10","cost":0}
                                        ]
                                    },
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":2,
                                "name":"Panzer Grenadier Squad",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"SdKfz 251/1","cost":0}
                                        ]
                                    },
                                    {
                                        "name":"MG",
                                        "choices":[
                                            {"id":1,"text":"Bipod MG34","cost":0},
                                            {"id":2,"text":"Bipod MG42","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"Combat Medic",
                                "cost":8,
                                "br":0,
                                "unique":true
                            },
                            {
                                "id":4,
                                "name":"Light Mortar Team",
                                "cost":14,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":5,
                                "name":"Heavy Machine Gun team",
                                "cost":21,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Machine Gun",
                                        "choices":[
                                            {"id":1,"text":"Tripod MG34","cost":0},
                                            {"id":2,"text":"Tripod MG42","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":6,
                                "name":"Anti-tank Rifle Team",
                                "cost":16,
                                "br":1,
                                "unique":true
                            },
                            {
                                "id":7,
                                "name":"Medium Mortar Team",
                                "cost":24,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"80mm mortar","cost":0},
                                            {"id":2,"text":"SdKfz 251/2 (80mm mortar)","cost":6}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":8,
                                "name":"Anti-tank Gun",
                                "cost":27,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"50mm PaK38","cost":0},
                                            {"id":2,"text":"75mm PaK40","cost":14}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck","cost":4},
                                            {"id":3,"text":"Opel Maultier","cost":8},
                                            {"id":4,"text":"SdKfz 6 half track","cost":8},
                                            {"id":5,"text":"SdKfz 251/1","cost":16}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":9,
                                "name":"Self Propelled Infantry Gun",
                                "cost":26,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"SdkFz 251/9 Halftrack","cost":0},
                                            {"id":2,"text":"Grille","cost":16, "br":1}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":10,
                                "name":"Towed AA Gun",
                                "cost":28,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"20mm FlaK","cost":0},
                                            {"id":2,"text":"20mm FlaK vierling","cost":12}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                        {"id":1,"text":"None","cost":0},
                                        {"id":2,"text":"Medium Truck","cost":4},
                                        {"id":3,"text":"SdKfz 10 half track", "cost":8},
                                        {"id":4,"text":"SdKfz 11 half track", "cost":8}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Panzer Grenadier Squad",
                        "cost":26,
                        "br":2,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium truck","cost":4}
                                ]
                            },
                            {
                                "name":"MG",
                                "choices":[
                                    {"id":1,"text":"Bipod MG34","cost":0},
                                    {"id":2,"text":"Bipod MG42","cost":4}
                                ]
                            },
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Armoured Pzr Gren Squad",
                        "cost":42,
                        "br":3,
                        "options":[
                            {
                                "name":"MG",
                                "choices":[
                                    {"id":1,"text":"Bipod MG34","cost":0},
                                    {"id":2,"text":"Bipod MG42","cost":4}
                                ]
                            },
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            },
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Veteran","cost":0},
                                    {"id":2,"text":"Elite","cost":12, "br":1}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Armoured Pioneer Squad",
                        "cost":54,
                        "br":3,
                        "restricted":true,
                        "options":[
                            {
                                "name":"MG",
                                "choices":[
                                    {"id":1,"text":"Bipod MG34","cost":0},
                                    {"id":2,"text":"Bipod MG42","cost":4}
                                ]
                            },
                            {
                                "name":"Flame-thrower",
                                "choices":[
                                    {"id":1,"text":"None","cost":0,"np":true},
                                    {"id":2,"text":"Flame-thrower","cost":10}
                                ]
                            },
                            {
                                "name":"Mine sweeper",
                                "choices":[
                                    {"id":1,"text":"None","cost":0,"np":true},
                                    {"id":2,"text":"Mine sweeper","cost":5}
                                ]
                            },
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Veteran","cost":0},
                                    {"id":2,"text":"Elite","cost":12, "br":1}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":3, 
                "name":"Tank Units",
                "allows":'[6,7,8,9]',
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"Panzer III Squadron",
                        "cost":85,
                        "multiplier":3,
                        "br":9,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Panzer III Js","cost":0},
                                    {"id":2,"text":"Upgrade to Ausf. Ls","cost":20},
                                    {"id":3,"text":"Upgrade to Ausf. Ms","cost":25}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Panzer IV Squadron",
                        "cost":135,
                        "multiplier":3,
                        "br":9,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Panzer IV Gs","cost":0},
                                    {"id":2,"text":"Upgrade to Ausf. Hs","cost":15, "restricted":true}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Panzer V Squadron",
                        "cost":220,
                        "multiplier":3,
                        "restricted":true,
                        "br":9,
                        "unique":true,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Panther Ds","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"StuG III Squadron",
                        "cost":110,
                        "multiplier":3,
                        "br":9,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Stug III Fs","cost":0},
                                    {"id":2,"text":"Upgrade to Ausf. Gs","cost":20}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Panzer Ace",
                        "multiplier":0,
                        "cost":20,
                        "br":0,
                        "unique":true
                    },
                    {
                        "id":6,
                        "name":"Panzer III",
                        "cost":30,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Panzer III J","cost":0, "restricted":true},
                                    {"id":2,"text":"Panzer III L","cost":9},
                                    {"id":3,"text":"Panzer III M","cost":10},
                                    {"id":4,"text":"Panzer III N","cost":8, "restricted":true}
                                ]
                            }
                        ]
                    },
                    {
                        "id":7,
                        "name":"Panzer IV",
                        "cost":44,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Panzer IV E","cost":0, "restricted":true},
                                    {"id":2,"text":"Panzer IV F1","cost":0, "restricted":true},
                                    {"id":3,"text":"Panzer IV G","cost":6},
                                    {"id":4,"text":"Panzer IV H","cost":12, "restricted":true}
                                ]
                            }
                        ]
                    },
                    {
                        "id":8,
                        "name":"Panzer V Panther",
                        "cost":85,
                        "restricted":true,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 Panther D","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":9,
                        "name":"StuG III",
                        "cost":24,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"StuG III A-E","cost":0, "restricted":true},
                                    {"id":2,"text":"StuG III F","cost":16},
                                    {"id":3,"text":"StuG III G","cost":24}
                                ]
                            }
                        ]
                    },
                    {
                        "id":10,
                        "name":"Panzer II",
                        "cost":24,
                        "restricted":true,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 Panzer II F","cost":0}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":4, 
                "name":"Artillery Units",
                "allows":[10],
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"Forward Observer Team",
                        "cost":16,
                        "br":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"Kübelwagon","cost":0},
                                    {"id":2,"text":"SdKfz 250/12 (as SdKfz 250/3)","cost":16},
                                    {"id":3,"text":"SdKfz 251/18 (as SdKfz 251/3)","cost":16}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Aerial Artillery Observer",
                        "cost":66,
                        "br":3,
                        "unique":true
                    },
                    {
                        "id":3,
                        "name":"Light Panzer Artillery Battery",
                        "cost":86,
                        "br":3
                    },
                    {
                        "id":4,
                        "name":"Medium Panzer Artillery Battery",
                        "cost":136,
                        "br":4,
                        "restricted":true
                    },
                    {
                        "id":5,
                        "name":"Nebelwerfer Artillery Battery",
                        "cost":86,
                        "br":2,
                        "restricted":true
                    },
                    {
                        "id":6,
                        "name":"Self-Propelled Artillery",
                        "cost":43,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Wespe","cost":0},
                                    {"id":2,"text":"Hummel","cost":25, "restricted":true},
                                    {"id":3,"text":"SdKfz Wurfrahmen","cost":0, "restricted":true}
                                ]
                            }
                        ]
                    },
                    {
                        "id":7,
                        "name":"Off-Table Artillery Fire",
                        "cost":90,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 105mm howitzer","cost":0},
                                    {"id":2,"text":"2 150mm howitzer","cost":45},
                                    {"id":3,"text":"2 100mm cannon","cost":36},
                                    {"id":4,"text":"2 170mm cannon","cost":108},
                                    {"id":5,"text":"2 150mm Nebelwerfer","cost":45},
                                    {"id":6,"text":"2 210mm Nebelwerfer","cost":118},
                                    {"id":7,"text":"2 280mm Nebelwerfer","cost":162}
                                ]
                            }
                        ]
                    },
                    {
                        "id":8,
                        "name":"Armoured Forward Observer",
                        "cost":29,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 Panzer II F","cost":0},
                                    {"id":2,"text":"1 Panzer III H","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":9,
                        "name":"Heavy Mortar Team",
                        "cost":29,
                        "br":1,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Mount",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck or Heavy Car","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":10,
                        "name":"105mm Howitzer",
                        "cost":36,
                        "br":2,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck","cost":4},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8}
                                ]
                            }
                        ]
                    },
                    {
                        "id":11,
                        "name":"150mm Howitzer",
                        "cost":54,
                        "br":2,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Heavy Truck","cost":6},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8}
                                ]
                            }
                        ]
                    },
                    {
                        "id":12,
                        "name":"100mm Cannon",
                        "cost":50,
                        "br":2,
                        "restricted":true,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck","cost":6},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8}
                                ]
                            }
                        ]
                    },
                    {
                        "id":13,
                        "name":"150mm Infantry Gun",
                        "cost":54,
                        "br":2,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck","cost":6},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8}
                                ]
                            }
                        ]
                    },
                    {
                        "id":14,
                        "name":"Off-Table Mortar Fire",
                        "cost":54,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 80mm mortars","cost":0},
                                    {"id":2,"text":"2 120mm mortars","cost":20}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":5, 
                "name":"Defences",
                "allows":null,
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"Improvised Barricades",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":2,
                        "name":"Machine Gun Dug-out",
                        "cost":32,
                        "br":1
                    },
                    {
                        "id":3,
                        "name":"Mortar Pit",
                        "cost":32,
                        "br":1
                    },
                    {
                        "id":4,
                        "name":"Fortified Building",
                        "cost":30,
                        "br":0
                    },
                    {
                        "id":5,
                        "name":"Foxholes",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":6,
                        "name":"Sniper Hideout",
                        "cost":15,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":7,
                        "name":"AT Gun Dug-out",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":8,
                        "name":"Booby Trapped Building",
                        "cost":25,
                        "br":0
                    },
                    {
                        "id":9,
                        "name":"Improvised Road Block",
                        "cost":5,
                        "br":0
                    }
                ]
            },
        {
            "id":6, 
            "name":"Reconnaissance Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Sniper",
                    "cost":10,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 sniper","cost":0},
                                {"id":2,"text":"1 sniper + 1 spotter","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Mounted Panzer Grenadier Patrol",
                    "cost":28,
                    "br":3,
                    "options":[
                        {
                            "name":"AT grenades",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Anti-tank grenades","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Motorcycle Reconnaissance Patrol",
                    "cost":18,
                    "br":1
                },
                {
                    "id":4,
                    "name":"Recon Platoon Command",
                    "cost":44,
                    "br":2,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"SdKfz 250/10","cost":0},
                                {"id":2,"text":"SdKfz 250/11","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Panzer Grenadier Foot Patrol",
                    "cost":36,
                    "br":3,
                    "options":[
                        {
                            "name":"MG",
                            "choices":[
                                {"id":1,"text":"Bipod MG34","cost":0},
                                {"id":2,"text":"Bipod MG42","cost":4}
                            ]
                        },
                        {
                            "name":"AT grenades",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Anti-tank grenades","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":6,
                    "name":"Armoured Car",
                    "cost":20,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"SdKfz 222","cost":0},
                                {"id":2,"text":"SdKfz 231 or 232","cost":4},
                                {"id":3,"text":"SdKfz 233","cost":14},
                                {"id":4,"text":"SdKfz 250/7","cost":10, restricted:"true"},
                                {"id":5,"text":"SdKfz 250/8","cost":4, restricted:"true"},
                                {"id":6,"text":"SdKfz 250/9","cost":4, restricted:"true"}
                            ]
                        }
                    ]
                },
                {
                    "id":7,
                    "name":"Aerial Reconnaissance",
                    "cost":50,
                    "br":2,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Hs-126","cost":0},
                                {"id":2,"text":"Fw-189A 'UHU'","cost":20, br:"1"}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id":7, 
            "name":"Engineer Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Light Bridging Unit",
                    "cost":18,
                    "br":2,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Heavy Truck & 6 men","cost":0},
                                {"id":2,"text":"SdKfz 251/7 & 6 men","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Heavy Bridging Unit",
                    "cost":36,
                    "br":3,
                    "restricted":true,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"2 Heavy Trucks & 12 men","cost":0},
                                {"id":2,"text":"3 Heavy Trucks & 18 men","cost":24},
                                {"id":3,"text":"4 Heavy Trucks & 24 men","cost":48},
                                {"id":4,"text":"5 Heavy Trucks & 30 men","cost":72}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Flammpanzer III",
                    "cost":50,
                    "br":3,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 Flammpanzer III Ausf. M","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Recovery Vehicle",
                    "cost":18,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"SdKfz 9 'Famo'","cost":0},
                                {"id":2,"text":"Bergpanther","cost":20, "br":1, "restricted":true}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Borgward Demolition Squadron",
                    "cost":74,
                    "br":5,
                    "officer":true,
                    "options":[
                        {
                            "name":"Command",
                            "choices":[
                                {"id":1,"text":"StuG III Ausf. F","cost":0},
                                {"id":2,"text":"Panzer III Ausf. L","cost":0}
                                ]
                        },
                        {
                            "name":"Borgwards",
                            "choices":[
                                {"id":1,"text":"1 Borgward B-IV","cost":0},
                                {"id":2,"text":"2 Borgward B-IV","cost":10, "br":1},
                                {"id":3,"text":"3 Borgward B-IV","cost":20, "br":2},
                                {"id":4,"text":"4 Borgward B-IV","cost":30, "br":3}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id":8, 
            "name":"Logistics Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Supply Column",
                    "cost":8,
                    "br":1,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 medium truck","cost":0},
                                {"id":2,"text":"2 medium trucks","cost":4},
                                {"id":3,"text":"3 medium trucks","cost":8},
                                {"id":4,"text":"4 medium trucks","cost":12}
                            ]
                        },
                        {
                            "name":"Armoured carriers",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Replace 1 truck","cost":6}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Stretcher Party",
                    "cost":10,
                    "br":1,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"2 men","cost":0}
                        ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Ambulance",
                    "cost":14,
                    "br":2,
                    "restricted":true,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"Kübelwagon Ambulance","cost":0},
                            {"id":2,"text":"Ambulance medium truck","cost":2},
                            {"id":3,"text":"SdKfz 251/8 Ambulance","cost":6}
                        ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Forward Aid Post",
                    "cost":20,
                    "br":5,
                    "restricted":true,
                    "unique":true,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"4 men with a tent","cost":0}
                        ]
                        }
                    ]
                }
            ]
        },
        {
            "id":9, 
            "name":"Specialist Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Heavy Anti-Tank Gun",
                    "cost":51,
                    "br":3,
                    "options":[
                        {
                            "name":"Loader team",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"3-man loader team","cost":10}
                            ]
                        },
                        {
                            "name":"Tow",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"SdkFz 7","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Self-Propelled Anti-Tank Gun",
                    "cost":30,
                    "br":1,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Marder II","cost":0},
                                {"id":2,"text":"Marder III H","cost":4},
                                {"id":3,"text":"Marder III M","cost":-2},
                                {"id":4,"text":"Marder 38t (36r)","cost":4}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Panzer VI Squadron",
                    "cost":223,
                    "br":12,
                    "multiplier":3,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"3 Tigers Is","cost":0, "restricted":true}
                        ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Heavy Tank Hunter",
                    "cost":136,
                    "br":5,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 Ferdinand","cost":0, "restricted":true},
                                {"id":2,"text":"1 Hornisse","cost":-80, "restricted":true, "br":-2}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Captured Tank",
                    "cost":42,
                    "br":3,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 Panzer T-34r","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":6,
                    "name":"Anti-Aircraft Vehicle",
                    "cost":16,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                            {"id":1,"text":"SdKfz 10 with 20mm","cost":0, "restricted":true},
                            {"id":2,"text":"SdKfz with 37mm","cost":4, "restricted":true},
                            {"id":3,"text":"SdKfz with 20mma Flakvierling","cost":20, "restricted":true}
                            ]
                        }
                    ]
                },
                {
                    "id":7,
                    "name":"Assault Howitzer",
                    "cost":44,
                    "br":3,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"StuH 42 F","cost":0, "restricted":true},
                                {"id":2,"text":"StuH 42 G","cost":6, "restricted":true},
                                {"id":3,"text":"Brummbär","cost":20, "restricted":true, "br":1}
                            ]
                        }
                    ]
                },
                {
                    "id":8,
                    "name":"Panzer VI",
                    "cost":85,
                    "br":4,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 Panzer VI Tiger","cost":0}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id":10, 
            "name":"Additional Fire Support",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Off-Table Artillery Request",
                    "cost":5,
                    "br":0,
                    "options":[
                        {
                            "name":"Target Priority",
                            "choices":[
                                {"id":1,"text":"3rd (5+)","cost":0},
                                {"id":2,"text":"2nd (4+)","cost":5},
                                {"id":3,"text":"1st (2+)","cost":15}
                            ]
                        }
                    ]
                },
            {
                "id":2,
                "name":"Pre-Registered Target Point",
                "cost":15,
                "br":0
            },
            {
                "id":3,
                "name":"Counter-Battery Fire Mission",
                "cost":10,
                "br":0
            },
            {
                "id":4,
                "name":"Timed 105mm Barrage",
                "cost":10,
                "br":0
            },
            {
                "id":5,
                "name":"Timed 150mm Barrage",
                "cost":20,
                "br":0
            },
            {
                "id":6,
                "name":"Timed FW-190 Air Strike",
                "cost":5,
                "br":0
            },
            {
                "id":7,
                "name":"Timed Ju-87 Air Strike",
                "cost":15,
                "br":0
            },
            {
                "id":8,
                "name":"Timed He-111 Air Strike",
                "cost":25,
                "restricted":true,
                "br":0
            }
            ]
        }
        ]
    },
    {
        "id":2,
        "name":"Infantry Division Battlegroup",
        "sections":[
            {
                "id":1, 
                "name":"Forward Headquarters Units",
                "allows":'[8,10]',
                "requires":false,
                "entries":[
                {
                    "id":1,
                    "name":"Forward Headquarters",
                    "cost":24,
                    "br":3,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Kübelwagon","cost":0},
                                {"id":2,"text":"Heavy Car","cost":0},
                                {"id":3,"text":"Schwimmwagen","cost":2}
                            ]
                        }
                        ]
                },
                {
                    "id":2,
                    "name":"Luftwaffe Air Control Officer",
                    "cost":26,
                    "br":1,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Kübelwagon","cost":0},
                                {"id":2,"text":"Medium Truck","cost":2},
                                {"id":3,"text":"SdKfz 250/3","cost":12},
                                {"id":4,"text":"SdKfz 251/3","cost":12}
                            ]
                        }
                        ]
                },
                {
                    "id":3,
                    "name":"Forward Signals Unit",
                    "br":1,
                    "cost":18,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Medium Radio Truck","cost":0},
                                {"id":2,"text":"Radio van","cost":0}
                            ]
                        }
                        ]
                },
                {
                    "id":4,
                    "name":"Comms Relay Team",
                    "br":0,
                    "cost":14
                },
                {
                    "id":5,
                    "name":"Wire Team",
                    "br":0,
                    "cost":7
                },
                {
                    "id":6,
                    "name":"Motorcycle Dispatch Rider",
                    "br":0,
                    "cost":12
                }
                ]
            },
            {
                "id":2, 
                "name":"Infantry Units",
                "allows":'[6,7,9]',
                "requires":false,
                "unique":true,
                "entries":[
                    {
                        "id":1,
                        "name":"Grenadier Platoon",
                        "cost":100,
                        "br":11,
                        'multiplier':4,
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck or heavy car","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":2,
                                "name":"Grenadier Squad",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"Heavy Machine Gun team",
                                "cost":18,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Machine Gun",
                                        "choices":[
                                            {"id":1,"text":"Tripod MG34","cost":0},
                                            {"id":2,"text":"Tripod MG42","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":4,
                                "name":"Combat Medic",
                                "cost":8,
                                "br":0,
                                "unique":true
                            },
                            {
                                "id":5,
                                "name":"Light Mortar Team",
                                "cost":12,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":6,
                                "name":"Anti-tank Rifle Team",
                                "cost":14,
                                "br":1,
                                "unique":true
                            },
                            {
                                "id":7,
                                "name":"Medium Mortar Team",
                                "cost":24,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":8,
                                "name":"Anti-tank Gun",
                                "cost":19,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"37mm PaK36","cost":0},
                                            {"id":2,"text":"50mm PaK38","cost":8},
                                            {"id":3,"text":"75mm PaK97/38","cost":12},
                                            {"id":4,"text":"76.2mm PaK36(r)","cost":14},
                                            {"id":5,"text":"75mm PaK40","cost":22}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Horse and limber","cost":2},
                                            {"id":3,"text":"Medium truck","cost":4}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":9,
                                "name":"75mm Infantry Gun",
                                "cost":19,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Horse and limber","cost":2},
                                            {"id":3,"text":"Medium truck","cost":4}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Assault Pioneer Platoon",
                        "cost":122,
                        "br":8,
                        "restricted":true,
                        "multiplier":4,
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Heavy car","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":2,
                                "name":"Assault Pioneer Squad",
                                "cost":0,
                                "count":2,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0,'np':true},
                                            {"id":2,"text":"Medium truck","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"Flame-thrower",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0,'np':true},
                                            {"id":2,"text":"Flame-thrower","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Mine sweeper",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0,'np':true},
                                            {"id":2,"text":"Mine sweeper","cost":5}
                                        ]
                                    },
                                    {
                                        "name":"MG",
                                        "choices":[
                                            {"id":1,"text":"Bipod MG34","cost":0},
                                            {"id":2,"text":"Bipod MG42","cost":4}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"Combat Medic",
                                "cost":9,
                                "br":0,
                                "unique":true
                            },
                            {
                                "id":4,
                                "name":"Light (50mm) Mortar Team",
                                "cost":12,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":5,
                                "name":"Heavy Machine Gun team",
                                "cost":18,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Machine Gun",
                                        "choices":[
                                            {"id":1,"text":"Tripod MG34","cost":0},
                                            {"id":2,"text":"Tripod MG42","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":6,
                                "name":"Anti-tank Gun",
                                "cost":19,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"37mm PaK36","cost":0},
                                            {"id":2,"text":"50mm PaK38","cost":8},
                                            {"id":3,"text":"75mm PaK40","cost":22}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Horse and limber","cost":2},
                                            {"id":3,"text":"Medium truck","cost":4},
                                            {"id":4,"text":"SdKfz 6 halftrack","cost":8}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":7,
                                "name":"Medium (80mm) Mortar Team",
                                "cost":12,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Grenadier Squad",
                        "cost":26,
                        "br":3,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium truck","cost":4}
                                ]
                            },
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Assault Pioneer Squad",
                        "cost":46,
                        "br":3,
                        "restricted":true,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium truck","cost":4}
                                ]
                            },
                            {
                                "name":"Flame-thrower",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Flame-thrower","cost":10}
                                ]
                            },
                            {
                                "name":"Mine sweeper",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Mine sweeper","cost":5}
                                ]
                            },
                            {
                                "name":"MG",
                                "choices":[
                                    {"id":1,"text":"Bipod MG34","cost":0},
                                    {"id":2,"text":"Bipod MG42","cost":4}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":3, 
                "name":"Tank Units",
                "allows":'[6,7,8,9]',
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"StuG III Squadron",
                        "cost":110,
                        "multiplier":3,
                        "br":9,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Stug III Fs","cost":0},
                                    {"id":2,"text":"Upgrade to Ausf. Gs","cost":20}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Panzer IV",
                        "cost":44,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Panzer IV E","cost":0, "restricted":true},
                                    {"id":2,"text":"Panzer IV F1","cost":0, "restricted":true},
                                    {"id":3,"text":"Panzer IV G","cost":6},
                                    {"id":4,"text":"Panzer IV H","cost":12}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"StuG III",
                        "cost":24,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"StuG III A-E","cost":0, "restricted":true},
                                    {"id":2,"text":"StuG III F","cost":16},
                                    {"id":3,"text":"StuG III G","cost":24}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Panzer III",
                        "cost":30,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Panzer III J","cost":0, "restricted":true},
                                    {"id":2,"text":"Panzer III L","cost":8},
                                    {"id":3,"text":"Panzer III M","cost":10},
                                    {"id":4,"text":"Panzer III N","cost":8, "restricted":true}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Self-Propelled Anti-Tank Gun",
                        "cost":30,
                        "br":1,
                        "restricted":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Marder II","cost":0},
                                    {"id":2,"text":"Marder III H","cost":4},
                                    {"id":3,"text":"Marder III M","cost":-2},
                                    {"id":4,"text":"Marder 38t (36r)","cost":4}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":4, 
                "name":"Artillery Units",
                "allows":[10],
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"Forward Observer Team",
                        "cost":16,
                        "br":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"Kübelwagon","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"105mm Howitzer",
                        "cost":36,
                        "br":2,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck","cost":4},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"150mm Howitzer",
                        "cost":54,
                        "br":2,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Heavy Truck","cost":6},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"100mm Cannon",
                        "cost":50,
                        "br":2,
                        "restricted":true,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck","cost":6},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"150mm Infantry Gun",
                        "cost":54,
                        "br":2,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck","cost":6},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Aerial Artillery Observer",
                        "cost":66,
                        "br":3,
                        "unique":true
                    },
                    {
                        "id":7,
                        "name":"Heavy Mortar Team",
                        "cost":29,
                        "br":1,
                        "options":[
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Mount",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck or Heavy Car","cost":4}
                                ]
                            }
                        ]
                    },
                    {
                        "id":8,
                        "name":"Off-Table Artillery Fire",
                        "cost":90,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 105mm howitzer","cost":0},
                                    {"id":2,"text":"2 150mm howitzer","cost":45},
                                    {"id":3,"text":"2 100mm cannon","cost":36},
                                    {"id":4,"text":"2 170mm cannon","cost":108},
                                    {"id":5,"text":"2 150mm Nebelwerfer","cost":45},
                                    {"id":6,"text":"2 210mm Nebelwerfer","cost":118},
                                    {"id":7,"text":"2 280mm Nebelwerfer","cost":162}
                                ]
                            }
                        ]
                    },
                    {
                        "id":9,
                        "name":"Off-Table Mortar Fire",
                        "cost":54,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 80mm mortars","cost":0},
                                    {"id":2,"text":"2 120mm mortars","cost":18}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":5, 
                "name":"Defences",
                "allows":null,
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"Improvised Barricades",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":2,
                        "name":"Machine Gun Dug-out",
                        "cost":32,
                        "br":1
                    },
                    {
                        "id":3,
                        "name":"Machine Gun Pillbox",
                        "cost":54,
                        "br":1,
                        "restricted":true
                    },
                    {
                        "id":4,
                        "name":"Mortar Pit",
                        "cost":32,
                        "br":1
                    },
                    {
                        "id":5,
                        "name":"Fortified Building",
                        "cost":30,
                        "br":0
                    },
                    {
                        "id":6,
                        "name":"Foxholes",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":7,
                        "name":"Trenches",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":8,
                        "name":"Sniper Hideout",
                        "cost":15,
                        "br":0
                    },
                    {
                        "id":9,
                        "name":"AT Gun Dug-out",
                        "cost":20,
                        "br":0
                    },
                    {
                        "id":10,
                        "name":"AT Gun Bunker",
                        "cost":30,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":11,
                        "name":"Minefield",
                        "cost":20,
                        "br":0
                    },
                    {
                        "id":12,
                        "name":"AT Gun Dug-out",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":13,
                        "name":"Command Bunker",
                        "cost":25,
                        "br":3,
                        "restricted":true,
                        "unique":true
                    },
                    {
                        "id":14,
                        "name":"Artillery Observation Point",
                        "cost":26,
                        "br":1
                    },
                    {
                        "id":15,
                        "name":"Booby Trapped Building",
                        "cost":25,
                        "br":0
                    },
                    {
                        "id":16,
                        "name":"Barbed Wire",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":17,
                        "name":"Improvised Road Block",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":18,
                        "name":"Anti-Tank Ditch/Embankment",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":19,
                        "name":"Off=table 88 Anti-Tank shot",
                        "cost":5,
                        "br":0
                    }
                ]
            },
        {
            "id":6, 
            "name":"Reconnaissance Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Sniper",
                    "cost":10,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 sniper","cost":0},
                                {"id":2,"text":"1 sniper + 1 spotter","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Motorcycle Reconnaissance Patrol",
                    "cost":18,
                    "br":1
                },
                {
                    "id":3,
                    "name":"Aerial Reconnaissance",
                    "cost":50,
                    "br":2,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Hs-126","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Armoured Car",
                    "cost":20,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"SdKfz 222","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Fusilier Foot Patrol",
                    "cost":36,
                    "br":3,
                    "options":[
                        {
                            "name":"MG",
                            "choices":[
                                {"id":1,"text":"Bipod MG34","cost":0},
                                {"id":2,"text":"Bipod MG42","cost":4}
                            ]
                        },
                        {
                            "name":"AT grenades",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Anti-tank grenades","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":6,
                    "name":"Recon Platoon Command",
                    "cost":35,
                    "br":2,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"SdKfz 222","cost":0}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id":7, 
            "name":"Engineer Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Recovery Vehicle",
                    "cost":18,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"SdKfz 9 'Famo'","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Light Bridging Unit",
                    "cost":18,
                    "br":2,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Heavy Truck & 6 men","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Heavy Bridging Unit",
                    "cost":36,
                    "br":3,
                    "restricted":true,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"2 Heavy Trucks & 12 men","cost":0},
                                {"id":2,"text":"3 Heavy Trucks & 18 men","cost":24},
                                {"id":3,"text":"4 Heavy Trucks & 24 men","cost":48},
                                {"id":4,"text":"5 Heavy Trucks & 30 men","cost":72}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id":8, 
            "name":"Logistics Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Supply Column",
                    "cost":8,
                    "br":1,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 medium truck","cost":0},
                                {"id":2,"text":"2 medium trucks","cost":4},
                                {"id":3,"text":"3 medium trucks","cost":8}
                            ]
                        },
                        {
                            "name":"Armoured carriers",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Replace 1 truck","cost":6}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Forward Aid Post",
                    "cost":20,
                    "br":5,
                    "restricted":true,
                    "unique":true,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"4 men with a tent","cost":0}
                        ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Stretcher Party",
                    "cost":10,
                    "br":1,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"2 men","cost":0}
                        ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Ambulance",
                    "cost":14,
                    "br":2,
                    "restricted":true,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"Kübelwagon Ambulance","cost":0},
                            {"id":2,"text":"Ambulance medium truck","cost":2}
                        ]
                        }
                    ]
                }
            ]
        },
        {
            "id":9, 
            "name":"Specialist Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Heavy Anti-Tank Gun",
                    "cost":51,
                    "br":3,
                    "options":[
                        {
                            "name":"Loader team",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"3-man loader team","cost":10}
                            ]
                        },
                        {
                            "name":"Tow",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"SdkFz 7","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Heavy Tank Hunter",
                    "cost":136,
                    "br":5,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 Ferdinand","cost":0, "restricted":true},
                                {"id":2,"text":"1 Hornisse","cost":-80, "restricted":true, "br":-2}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Assault Howitzer",
                    "cost":44,
                    "br":3,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"StuH 42 F","cost":0},
                                {"id":2,"text":"StuH 42 G","cost":6},
                                {"id":3,"text":"Brummbär","cost":20, "br":1}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Anti-Aircraft Vehicle",
                    "cost":16,
                    "br":1,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                            {"id":1,"text":"SdKfz 10 with 20mm","cost":0},
                            {"id":2,"text":"SdKfz with 37mm","cost":4},
                            {"id":3,"text":"SdKfz with 20mma Flakvierling","cost":20}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Towed 20mm AA Gun",
                    "cost":28,
                    "br":1,
                    "options":[
                        {
                            "name":"Loader team",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"3-man loader team","cost":10}
                                ]
                        },
                        {
                            "name":"Tow",
                            "choices":[
                            {"id":1,"text":"None","cost":0},
                            {"id":2,"text":"Medium Truck tow","cost":4},
                            {"id":3,"text":"SdKfz 10 halftrack", "cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":6,
                    "name":"Towed 37mm AA Gun",
                    "cost":36,
                    "br":1,
                    "options":[
                        {
                            "name":"Loader team",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"3-man loader team","cost":10}
                                ]
                        },
                        {
                            "name":"Tow",
                            "choices":[
                            {"id":1,"text":"None","cost":0},
                            {"id":2,"text":"Medium Truck tow","cost":4},
                            {"id":3,"text":"SdKfz halftrack", "cost":8}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id":10, 
            "name":"Additional Fire Support",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Off-Table Artillery Request",
                    "cost":5,
                    "br":0,
                    "options":[
                        {
                            "name":"Target Priority",
                            "choices":[
                                {"id":1,"text":"3rd (5+)","cost":0},
                                {"id":2,"text":"2nd (4+)","cost":5},
                                {"id":3,"text":"1st (2+)","cost":15}
                            ]
                        }
                    ]
                },
            {
                "id":2,
                "name":"Pre-Registered Target Point",
                "cost":15,
                "br":0
            },
            {
                "id":3,
                "name":"Counter-Battery Fire Mission",
                "cost":10,
                "br":0
            },
            {
                "id":4,
                "name":"Timed 105mm Barrage",
                "cost":10,
                "br":0
            },
            {
                "id":5,
                "name":"Timed 150mm Barrage",
                "cost":20,
                "br":0
            },
            {
                "id":6,
                "name":"Timed FW-190 Air Strike",
                "cost":5,
                "br":0
            },
            {
                "id":7,
                "name":"Timed Ju-87 Air Strike",
                "cost":15,
                "br":0
            },
            {
                "id":8,
                "name":"Timed He-111 Air Strike",
                "cost":25,
                "restricted":true,
                "br":0
            }
            ]
        }
        ]
    },
    {
        "id":3,
        "name":"Tank Corps Battlegroup",
        "sections":[
            {
                "id":1, 
                "name":"Forward Headquarters Units",
                "allows":'[8,10]',
                "requires":false,
                "officer":true,
                "entries":[
                {
                    "id":1,
                    "name":"Forward Headquarters",
                    "cost":22,
                    "br":3,
                    "unique":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Gaz Jeep","cost":0},
                                {"id":2,"text":"White Scout car","cost":18},
                                {"id":3,"text":"T-34/43","cost":27}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"VVS Air Control Officer",
                    "cost":26,
                    "br":1,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Gaz Jeep","cost":0},
                                {"id":2,"text":"Medium Truck","cost":2}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Motorcycle Dispatch Rider",
                    "br":0,
                    "cost":12
                },
                {
                    "id":4,
                    "name":"Forward Signals Unit",
                    "br":1,
                    "cost":18,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Medium Radio Truck","cost":0},
                                {"id":2,"text":"Radio Van","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Comms Relay Team",
                    "br":0,
                    "cost":14
                },
                {
                    "id":6,
                    "name":"Wire Team",
                    "br":0,
                    "cost":7
                },
                {
                    "id":7,
                    "name":"NKVD Officer",
                    "officer":true,
                    "br":0,
                    "cost":26
                }
                ]
            },
            {
                "id":2, 
                "name":"Infantry Units",
                "allows":'[6,7,9]',
                "requires":false,
                "unique":true,
                "entries":[
                    {
                        "id":1,
                        "name":"Motorised Rifle Platoon",
                        "cost":58,
                        "br":5,
                        'multiplier':4,
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Jeep","cost":2}
                                        ]
                                    },
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":2,
                                "name":"Rifle Squad",
                                "cost":0,
                                "count":4,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Transport",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"Maxim Machine Gun team",
                                "cost":18,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":4,
                                "name":"Light Mortar Team",
                                "cost":12,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":5,
                                "name":"Anti-tank Rifle Team",
                                "cost":14,
                                "br":1,
                                "unique":true
                            },
                            {
                                "id":6,
                                "name":"Anti-tank Gun",
                                "cost":18,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"45mm L46","cost":0},
                                            {"id":2,"text":"45mm L66","cost":8}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck","cost":4},
                                            {"id":3,"text":"Komsomolyets tractor","cost":8}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":7,
                                "name":"Infantry Gun",
                                "cost":19,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"76.2mm infantry gun","cost":0}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Horse and limber","cost":2},
                                            {"id":3,"text":"Medium truck","cost":4}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":8,
                                "name":"Anti-Aircraft DshK MG",
                                "cost":24,
                                "br":1,
                                "unique":true
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Motorised Rifle Squad",
                        "cost":14,
                        "br":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium truck","cost":4}
                                ]
                            },
                            {
                                "name":"Gun Type",
                                "choices":[
                                    {"id":1,"text":"Rifle","cost":0},
                                    {"id":2,"text":"SMG","cost":4}
                                ]
                            },
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Tank Rider Squad",
                        "cost":12,
                        "br":1,
                        "options":[
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":3, 
                "name":"Tank Units",
                "allows":'[6,7,8,9]',
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"T-34 Company",
                        "cost":350,
                        "multiplier":6,
                        "br":30,
                        "officer":true
                    },
                    {
                        "id":2,
                        "name":"T-34 Platoon",
                        "cost":100,
                        "multiplier":2,
                        "br":9
                    },
                    {
                        "id":3,
                        "name":"Light Tank Squadron",
                        "cost":50,
                        "multiplier":2,
                        "br":6
                    },
                    {
                        "id":4,
                        "name":"SU-76 Battery",
                        "cost":75,
                        "multiplier":2,
                        "br":6,
                        "restricted":true
                    },
                    {
                        "id":5,
                        "name":"T-34",
                        "cost":40,
                        "br":3
                    },
                    {
                        "id":6,
                        "name":"Light Tank",
                        "cost":20,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"T-60","cost":0},
                                    {"id":2,"text":"T-70","cost":5}
                                ]
                            }
                        ]
                    },
                    {
                        "id":7,
                        "name":"SU-76",
                        "cost":30,
                        "br":2
                    }
                ]
            },
            {
                "id":4, 
                "name":"Artillery Units",
                "allows":[10],
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"Forward Observer Team",
                        "cost":16,
                        "br":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"Gaz Jeep","cost":0},
                                    {"id":2,"text":"Bren Carrier","cost":2}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Guards Mortar Battery",
                        "cost":100,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 BM-13 Katyusha","cost":0},
                                    {"id":2,"text":"2 BM-8-13 Katyusha","cost":20}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Off-Table Artillery Fire",
                        "cost":125,
                        "br":0
                    },
                    {
                        "id":4,
                        "name":"Mortar Battery",
                        "cost":44,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 82mm mortars","cost":0},
                                    {"id":2,"text":"3 82mm mortars","cost":22, "br":1}
                                ]
                            },
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Loader team","cost":10},
                                    {"id":3,"text":"2 Loader teams","cost":20},
                                    {"id":4,"text":"3 Loader teams","cost":30}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Heavy Mortar Battery",
                        "cost":58,
                        "br":1,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 120mm mortars","cost":0},
                                    {"id":2,"text":"3 120mm mortars","cost":29, "br":1}
                                ]
                            },
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"2 Loader teams","cost":20},
                                    {"id":3,"text":"3 Loader teams","cost":30}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Off-Table Mortar Fire",
                        "cost":54,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 82mm mortars","cost":0},
                                    {"id":2,"text":"2 120mm mortars","cost":18}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":5, 
                "name":"Defences",
                "allows":null,
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"Improvised Barricades",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":2,
                        "name":"Machine Gun Dug-out",
                        "cost":32,
                        "br":1
                    },
                    {
                        "id":3,
                        "name":"Mortar Pit",
                        "cost":32,
                        "br":1
                    },
                    {
                        "id":4,
                        "name":"Foxholes",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":5,
                        "name":"Sniper Hideout",
                        "cost":15,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":6,
                        "name":"AT Rifle-Team Hide",
                        "cost":20,
                        "br":1
                    },
                    {
                        "id":7,
                        "name":"Dug-in T-34",
                        "cost":50,
                        "br":3
                    },
                    {
                        "id":8,
                        "name":"Dug-in T-34 Platoon",
                        "cost":125,
                        "br":9
                    },
                    {
                        "id":9,
                        "name":"Improvised Road Block",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":10,
                        "name":"Anti-Tank Ditch",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":11,
                        "name":"Counter Bombardment",
                        "cost":20,
                        "br":0,
                        "unique":true
                    },
                    {
                        "id":12,
                        "name":"For the Motherland!",
                        "cost":15,
                        "br":0,
                        "unique":true
                    }
                ]
            },
        {
            "id":6, 
            "name":"Reconnaissance Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Sniper",
                    "cost":10,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 sniper","cost":0},
                                {"id":2,"text":"1 sniper + 1 spotter","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Mechanised Infantry Patrol",
                    "cost":28,
                    "br":3,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"White Scout Car","cost":0},
                                {"id":2,"text":"M5 halftrack","cost":4}
                            ]
                        },
                        {
                            "name":"AT grenades",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Anti-tank grenades","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Jeep Reconnaissance Team",
                    "cost":18,
                    "br":2
                },
                {
                    "id":4,
                    "name":"Light Tank",
                    "cost":30,
                    "br":2,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"T-60","cost":0},
                                {"id":2,"text":"T-70","cost":5},
                                {"id":3,"text":"Valentine III","cost":14}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Aerial Reconnaissance",
                    "cost":50,
                    "br":2,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"PO-2","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":6,
                    "name":"Infantry Foot Patrol",
                    "cost":22,
                    "br":2,
                    "options":[
                        {
                            "name":"AT grenades",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Anti-tank grenades","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":7,
                    "name":"Motorcycle Reconnaissance Patrol",
                    "cost":18,
                    "br":1
                },
                {
                    "id":8,
                    "name":"Armoured Car",
                    "cost":26,
                    "br":1,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"BA-10","cost":0},
                                {"id":2,"text":"BA-64","cost":-6},
                                {"id":3,"text":"M3A1 White Scout Car","cost":-6}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id":7, 
            "name":"Engineer Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Repair Vehicle",
                    "cost":12,
                    "br":2,
                    "restricted":true
                },
                {
                    "id":2,
                    "name":"Sapper Squad",
                    "cost":21,
                    "br":2,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Medium Truck","cost":4}
                            ]
                        },
                        {
                            "name":"Flame-thrower",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Flame-thrower","cost":10}
                            ]
                        },
                        {
                            "name":"Mine sweeper",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Mine sweeper","cost":5}
                            ]
                        },
                        {
                            "name":"Demo charge",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Demo charge","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Heavy Bridging Unit",
                    "cost":36,
                    "br":4,
                    "restricted":true,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"2 Heavy Trucks & 12 men","cost":0},
                                {"id":2,"text":"3 Heavy Trucks & 18 men","cost":24},
                                {"id":3,"text":"4 Heavy Trucks & 24 men","cost":48},
                                {"id":4,"text":"5 Heavy Trucks & 30 men","cost":72}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Light Bridging Unit",
                    "cost":18,
                    "br":2
                },
                {
                    "id":5,
                    "name":"Anti-Tank Mine Dog",
                    "cost":10,
                    "br":0
                }
            ]
        },
        {
            "id":8, 
            "name":"Logistics Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Supply Column",
                    "cost":4,
                    "br":1,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 Horse drawn wagon","cost":0},
                                {"id":2,"text":"2 Horse drawn wagon","cost":4},
                                {"id":3,"text":"3 Horse drawn wagon","cost":8}
                            ]
                        },
                        {
                            "name":"Medium trucks",
                            "choices":[
                                {"id":1,"text":"Replace 1 wagon with truck","cost":0},
                                {"id":2,"text":"Replace 2 wagons with trucks","cost":4},
                                {"id":3,"text":"Replace 3 wagons with trucks","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Forward Aid Post",
                    "cost":20,
                    "br":5,
                    "restricted":true,
                    "unique":true,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"4 men with a tent","cost":0}
                        ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Combat Medic",
                    "cost":8,
                    "br":0
                },
                {
                    "id":4,
                    "name":"Stretcher Party",
                    "cost":10,
                    "br":1,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"2 men","cost":0}
                        ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Ambulance",
                    "cost":14,
                    "br":2,
                    "restricted":true,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"Jeep Ambulance","cost":0},
                            {"id":2,"text":"Ambulance medium truck","cost":2},
                            {"id":3,"text":"M5 halftrack Ambulance","cost":6}
                        ]
                        }
                    ]
                }
            ]
        },
        {
            "id":9, 
            "name":"Specialist Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Lend-Lease Tank",
                    "cost":48,
                    "br":3,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Churchill III or IV","cost":0},
                                {"id":2,"text":"M3 Grant","cost":-4},
                                {"id":3,"text":"Matilda II","cost":-20},
                                {"id":4,"text":"Valentine III","cost":-14, "br":-1},
                                {"id":5,"text":"M5 Stuart","cost":-10, "br":-1}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Heavy Assault Gun",
                    "cost":48,
                    "br":3,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 SU-122","cost":0},
                                {"id":2,"text":"1 SU-152","cost":4}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Anti-Aircraft Vehicle",
                    "cost":28,
                    "br":1,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Gaz truck with quad Maxim MGs","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Heavy Anti-Tank Gun",
                    "cost":43,
                    "br":2,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"76.2mm L54 Zis 3","cost":0},
                                {"id":2,"text":"57mm L73 Zis 2","cost":10}
                            ]
                        },
                        {
                            "name":"Loader team",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"3-man loader team","cost":10}
                            ]
                        },
                        {
                            "name":"Tow",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Medium truck","cost":4},
                                {"id":3,"text":"Komsomolyets tractor","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Towed Anti-Aircraft Gun",
                    "cost":36,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"37mm AA gun","cost":0}
                            ]
                        },
                        {
                            "name":"Loader team",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"3-man loader team","cost":10}
                            ]
                        },
                        {
                            "name":"Tow",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Medium truck","cost":4}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id":10, 
            "name":"Additional Fire Support",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Off-Table Artillery Request",
                    "cost":5,
                    "br":0,
                    "options":[
                        {
                            "name":"Target Priority",
                            "choices":[
                                {"id":1,"text":"3rd (5+)","cost":0},
                                {"id":2,"text":"2nd (4+)","cost":5},
                                {"id":3,"text":"1st (2+)","cost":15}
                            ]
                        }
                    ]
                },
            {
                "id":2,
                "name":"Pre-Registered Target Point",
                "cost":10,
                "br":0
            },
            {
                "id":3,
                "name":"Counter-Battery Fire Mission",
                "cost":10,
                "br":0
            },
            {
                "id":4,
                "name":"Timed 122mm Barrage",
                "cost":20,
                "br":0
            },
            {
                "id":5,
                "name":"Timed 152mm Barrage",
                "cost":30,
                "br":0
            },
            {
                "id":6,
                "name":"Timed Katyusha Barrage",
                "cost":25,
                "br":0
            },
            {
                "id":7,
                "name":"Timed IL-2 Air Strike",
                "cost":10,
                "br":0
            },
            {
                "id":8,
                "name":"Timed PE-2 Air Strike",
                "cost":20,
                "br":0
            },
            {
                "id":9,
                "name":"Timed IL-4 Air Strike",
                "cost":25,
                "restricted":true,
                "br":0
            }
            ]
        }
        ]
    },
    {
        "id":4,
        "name":"Rifle Division Battlegroup",
        "sections":[
            {
                "id":1, 
                "name":"Forward Headquarters Units",
                "allows":'[8,10]',
                "requires":false,
                "entries":[
                {
                    "id":1,
                    "name":"Forward Headquarters",
                    "cost":22,
                    "br":3,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Gaz Jeep","cost":0},
                                {"id":2,"text":"White Scout car","cost":18}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"VVS Air Control Officer",
                    "cost":26,
                    "br":1,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Gaz Jeep","cost":0},
                                {"id":2,"text":"Medium Truck","cost":2}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Motorcycle Dispatch Rider",
                    "br":0,
                    "cost":12
                },
                {
                    "id":4,
                    "name":"Forward Signals Unit",
                    "br":1,
                    "cost":18,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Medium Radio Truck","cost":0},
                                {"id":2,"text":"Radio Van","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Comms Relay Team",
                    "br":0,
                    "cost":14
                },
                {
                    "id":6,
                    "name":"Wire Team",
                    "br":0,
                    "cost":7
                },
                {
                    "id":7,
                    "name":"NKVD Officer",
                    "br":0,
                    "cost":26
                }
                ]
            },
            {
                "id":2, 
                "name":"Infantry Units",
                "allows":'[6,7,9]',
                "requires":false,
                "unique":true,
                "entries":[
                    {
                        "id":1,
                        "name":"Rifle Platoon",
                        "cost":58,
                        "br":5,
                        'multiplier':4,
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true,
                                "options":[
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":2,
                                "name":"Rifle Squad",
                                "cost":0,
                                "count":4,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"Maxim Machine Gun team",
                                "cost":18,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":4,
                                "name":"Light Mortar Team",
                                "cost":12,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":5,
                                "name":"Anti-tank Rifle Team",
                                "cost":14,
                                "br":1,
                                "unique":true
                            },
                            {
                                "id":6,
                                "name":"Anti-tank Gun",
                                "cost":18,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"45mm L46","cost":0},
                                            {"id":2,"text":"45mm L66","cost":8}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck","cost":4}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":7,
                                "name":"Infantry Gun",
                                "cost":19,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"76.2mm infantry gun","cost":0}
                                        ]
                                    },
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Tow",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Horse and limber","cost":2}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Rifle Squad",
                        "cost":14,
                        "br":1,
                        "options":[
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Rifle Company",
                        "cost":188,
                        "br":16,
                        'multiplier':12,
                        "sub_text":"Company Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Company Command Squad",
                                "cost":0,
                                "br":0,
                                "officer":true,
                                "mandatory":true
                            },
                            {
                                "id":2,
                                "name":"Rifle Platoon",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true,
                                "sub_text":"Platoon Components",
                                "sub_units":[
                                    {
                                        "id":1,
                                        "name":"Command Squad",
                                        "cost":0,
                                        "br":0,
                                        "mandatory":true,
                                        "officer":true,
                                        "options":[
                                            {
                                                "name":"AT grenades",
                                                "choices":[
                                                    {"id":1,"text":"None","cost":0},
                                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id":2,
                                        "name":"Rifle Squad",
                                        "cost":0,
                                        "count":4,
                                        "br":0,
                                        "mandatory":true,
                                        "options":[
                                            {
                                                "name":"AT grenades",
                                                "choices":[
                                                    {"id":1,"text":"None","cost":0},
                                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id":3,
                                        "name":"Maxim Machine Gun team",
                                        "cost":18,
                                        "br":1,
                                        "unique":true,
                                        "options":[
                                            {
                                                "name":"Loader team",
                                                "choices":[
                                                    {"id":1,"text":"None","cost":0},
                                                    {"id":2,"text":"3-man loader team","cost":10}
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id":4,
                                        "name":"Light Mortar Team",
                                        "cost":12,
                                        "br":1,
                                        "unique":true,
                                        "options":[
                                            {
                                                "name":"Loader team",
                                                "choices":[
                                                    {"id":1,"text":"None","cost":0},
                                                    {"id":2,"text":"3-man loader team","cost":10}
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id":5,
                                        "name":"Anti-tank Rifle Team",
                                        "cost":14,
                                        "br":1,
                                        "unique":true
                                    },
                                    {
                                        "id":6,
                                        "name":"Anti-tank Gun",
                                        "cost":18,
                                        "br":1,
                                        "unique":true,
                                        "options":[
                                            {
                                                "name":"Gun type",
                                                "choices":[
                                                    {"id":1,"text":"45mm L46","cost":0},
                                                    {"id":2,"text":"45mm L66","cost":8}
                                                ]
                                            },
                                            {
                                                "name":"Loader team",
                                                "choices":[
                                                    {"id":1,"text":"None","cost":0},
                                                    {"id":2,"text":"3-man loader team","cost":10}
                                                ]
                                            },
                                            {
                                                "name":"Tow",
                                                "choices":[
                                                    {"id":1,"text":"None","cost":0},
                                                    {"id":2,"text":"Medium truck","cost":4}
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id":7,
                                        "name":"Infantry Gun",
                                        "cost":19,
                                        "br":1,
                                        "unique":true,
                                        "options":[
                                            {
                                                "name":"Gun type",
                                                "choices":[
                                                    {"id":1,"text":"76.2mm infantry gun","cost":0}
                                                ]
                                            },
                                            {
                                                "name":"Loader team",
                                                "choices":[
                                                    {"id":1,"text":"None","cost":0},
                                                    {"id":2,"text":"3-man loader team","cost":10}
                                                ]
                                            },
                                            {
                                                "name":"Tow",
                                                "choices":[
                                                    {"id":1,"text":"None","cost":0},
                                                    {"id":2,"text":"Horse and limber","cost":2}
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":3, 
                "name":"Tank Units",
                "allows":'[6,7,8,9]',
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"T-34 Platoon",
                        "cost":100,
                        "multiplier":2,
                        "br":9
                    },
                    {
                        "id":2,
                        "name":"T-34",
                        "cost":40,
                        "br":3
                    },
                    {
                        "id":3,
                        "name":"KV-1 Platoon",
                        "cost":140,
                        "multiplier":2,
                        "br":6,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 KV-1Ss","cost":0},
                                    {"id":2,"text":"3 KV-1Es","cost":9}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"KV-1 Tank",
                        "cost":56,
                        "br":3,
                        "restricted":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"KV-1S","cost":0},
                                    {"id":2,"text":"KV-1E","cost":3}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Lend-Lease Light Tank Platoon",
                        "cost":84,
                        "br":6,
                        "multiplier":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Valentine IIIs","cost":0},
                                    {"id":2,"text":"3 M3 Stuarts","cost":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Lend-Lease Medium Tank Platoon",
                        "cost":70,
                        "br":9,
                        "multiplier":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Matilda IIs","cost":0},
                                    {"id":2,"text":"3 M3 Grants","cost":40},
                                    {"id":3,"text":"3 Churchill III or IVs","cost":56}
                                ]
                            }
                        ]
                    },
                    {
                        "id":7,
                        "name":"Lend-Lease Tank",
                        "cost":48,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Churchill III or IV","cost":0},
                                    {"id":2,"text":"M3 Grant","cost":-4},
                                    {"id":3,"text":"Matilda II","cost":-20},
                                    {"id":4,"text":"Valentine III","cost":-14,"br":-1},
                                    {"id":5,"text":"M3 Stuart","cost":-10,"br":-1}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":4, 
                "name":"Artillery Units",
                "allows":[10],
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"Forward Observer Team",
                        "cost":16,
                        "br":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"Gaz Jeep","cost":0},
                                    {"id":2,"text":"Bren Carrier","cost":2}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Guards Mortar Battery",
                        "cost":100,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 BM-13 Katyusha","cost":0},
                                    {"id":2,"text":"2 BM-8-13 Katyusha","cost":20}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Field Artillery Battery",
                        "cost":55,
                        "br":4,
                        "options":[
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"No tow","cost":0},
                                    {"id":2,"text":"1 horse & limber tow","cost":4},
                                    {"id":3,"text":"2 horse & limber tows","cost":4}
                                ]
                            },
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Loader team","cost":10},
                                    {"id":3,"text":"2 Loader teams","cost":20}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Off-Table Artillery Fire",
                        "cost":125,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 BM-13 Katyusha","cost":0},
                                    {"id":2,"text":"2 76.2mm Zis3","cost":-55},
                                    {"id":3,"text":"2 122mm howitzers","cost":-9},
                                    {"id":4,"text":"2 152mm howitzers","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Mortar Battery",
                        "cost":44,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 82mm mortars","cost":0},
                                    {"id":2,"text":"3 82mm mortars","cost":22, "br":1}
                                ]
                            },
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Loader team","cost":10},
                                    {"id":3,"text":"2 Loader teams","cost":20},
                                    {"id":4,"text":"3 Loader teams","cost":30}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Heavy Mortar Battery",
                        "cost":58,
                        "br":1,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 120mm mortars","cost":0},
                                    {"id":2,"text":"3 120mm mortars","cost":29, "br":1}
                                ]
                            },
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Loader team","cost":10},
                                    {"id":3,"text":"2 Loader teams","cost":20},
                                    {"id":4,"text":"3 Loader teams","cost":30}
                                ]
                            }
                        ]
                    },
                    {
                        "id":7,
                        "name":"Off-Table Mortar Fire",
                        "cost":80,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 82mm mortars","cost":0},
                                    {"id":2,"text":"3 120mm mortars","cost":28}
                                ]
                            }
                        ]
                    },
                    {
                        "id":8,
                        "name":"Heavy Artillery Battery",
                        "cost":86,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 122mm L23 howitzers","cost":0},
                                    {"id":2,"text":"2 122mm L24 howitzers","cost":8},
                                    {"id":3,"text":"2 122mm L46 cannons","cost":36}
                                ]
                            },
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Loader team","cost":10},
                                    {"id":3,"text":"2 Loader teams","cost":20}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"No tow","cost":0},
                                    {"id":2,"text":"1 horse & limber tow","cost":4},
                                    {"id":3,"text":"2 horse & limber tows","cost":4}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":5, 
                "name":"Defences",
                "allows":null,
                "requires":false,
                "entries":[
                    {
                        "id":1,
                        "name":"Improvised Barricades",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":2,
                        "name":"Machine Gun Dug-out",
                        "cost":32,
                        "br":1
                    },
                    {
                        "id":3,
                        "name":"Machine Gun Pillbox",
                        "cost":54,
                        "br":1,
                        "restricted":true
                    },
                    {
                        "id":4,
                        "name":"Mortar Pit",
                        "cost":32,
                        "br":1
                    },
                    {
                        "id":5,
                        "name":"Fortified Building",
                        "cost":30,
                        "br":0
                    },
                    {
                        "id":6,
                        "name":"Foxholes",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":7,
                        "name":"Trenches",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":8,
                        "name":"Sniper Hideout",
                        "cost":15,
                        "br":0
                    },
                    {
                        "id":9,
                        "name":"AT Rifle-Team Hide",
                        "cost":20,
                        "br":1
                    },
                    {
                        "id":10,
                        "name":"Barbed Wire",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":11,
                        "name":"AT Gun Dug-out",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":12,
                        "name":"AT Gun Bunker",
                        "cost":30,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":13,
                        "name":"Artillery Observation Point",
                        "cost":26,
                        "unique":true,
                        "br":1
                    },
                    {
                        "id":14,
                        "name":"Command Bunker",
                        "cost":30,
                        "br":3,
                        "restricted":true,
                        "officer":true,
                        "unique":true
                    },
                    {
                        "id":15,
                        "name":"Booby Trapped Building",
                        "cost":25,
                        "br":0
                    },
                    {
                        "id":16,
                        "name":"Minefield",
                        "cost":15,
                        "br":0
                    },
                    {
                        "id":17,
                        "name":"Improvised Road Block",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":18,
                        "name":"Dug-in T-34",
                        "cost":50,
                        "br":3
                    },
                    {
                        "id":19,
                        "name":"Dug-in T-34 Platoon",
                        "cost":125,
                        "br":9
                    },
                    {
                        "id":20,
                        "name":"Dug-in KV-1E",
                        "cost":69,
                        "br":3
                    },
                    {
                        "id":21,
                        "name":"Counter Bombardment",
                        "cost":20,
                        "br":0,
                        "unique":true
                    },
                    {
                        "id":22,
                        "name":"Off-table Zis 3 AT shot",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":23,
                        "name":"Anti-Tank Ditch/Embankment",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":24,
                        "name":"For the Motherland!",
                        "cost":15,
                        "br":0,
                        "unique":true
                    }
                ]
            },
        {
            "id":6, 
            "name":"Reconnaissance Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Sniper",
                    "cost":10,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 sniper","cost":0},
                                {"id":2,"text":"1 sniper + 1 spotter","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Armoured Car",
                    "cost":26,
                    "br":1,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"BA-10","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Cavalry Squadron",
                    "cost":30,
                    "br":2
                },
                {
                    "id":4,
                    "name":"Infantry Foot Patrol",
                    "cost":22,
                    "br":2,
                    "options":[
                        {
                            "name":"AT grenades",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Anti-tank grenades","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Motorcycle Reconnaissance Patrol",
                    "cost":18,
                    "br":1
                }
            ]
        },
        {
            "id":7, 
            "name":"Engineer Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Repair Vehicle",
                    "cost":12,
                    "br":2,
                    "restricted":true
                },
                {
                    "id":2,
                    "name":"Sapper Squad",
                    "cost":21,
                    "br":2,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Medium Truck","cost":4}
                            ]
                        },
                        {
                            "name":"Flame-thrower",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Flame-thrower","cost":10}
                            ]
                        },
                        {
                            "name":"Mine sweeper",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Mine sweeper","cost":5}
                            ]
                        },
                        {
                            "name":"Demo charge",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Demo charge","cost":5}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Heavy Bridging Unit",
                    "cost":36,
                    "br":3,
                    "restricted":true,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"2 Heavy Trucks & 12 men","cost":0},
                                {"id":2,"text":"3 Heavy Trucks & 18 men","cost":24},
                                {"id":3,"text":"4 Heavy Trucks & 24 men","cost":48},
                                {"id":4,"text":"5 Heavy Trucks & 30 men","cost":72}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Light Bridging Unit",
                    "cost":18,
                    "br":2
                },
                {
                    "id":5,
                    "name":"Anti-Tank Mine Dog",
                    "cost":10,
                    "br":0
                }
            ]
        },
        {
            "id":8, 
            "name":"Logistics Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Supply Column",
                    "cost":4,
                    "br":1,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 Horse drawn wagon","cost":0},
                                {"id":2,"text":"2 Horse drawn wagon","cost":4},
                                {"id":3,"text":"3 Horse drawn wagon","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Combat Medic",
                    "cost":8,
                    "br":0
                },
                {
                    "id":3,
                    "name":"Stretcher Party",
                    "cost":10,
                    "br":1,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"2 men","cost":0}
                        ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Ambulance",
                    "cost":14,
                    "br":2,
                    "restricted":true,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"Jeep Ambulance","cost":0},
                            {"id":2,"text":"Ambulance medium truck","cost":2}
                        ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Forward Aid Post",
                    "cost":20,
                    "br":5,
                    "restricted":true,
                    "unique":true,
                    "options":[
                        {
                        "name":"Composition",
                        "choices":[
                            {"id":1,"text":"4 men with a tent","cost":0}
                        ]
                        }
                    ]
                }
            ]
        },
        {
            "id":9, 
            "name":"Specialist Support Units",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Heavy Infantry Support Tank",
                    "cost":60,
                    "unique":true,
                    "br":3,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"KV-2","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Heavy Anti-Tank Gun",
                    "cost":33,
                    "br":2,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"76.2mm L54 Zis 3","cost":0},
                                {"id":2,"text":"85mm L53 AA gun","cost":51, "br":1}
                            ]
                        },
                        {
                            "name":"Loader team",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"3-man loader team","cost":10}
                            ]
                        },
                        {
                            "name":"Tow",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Horse & limber","cost":2},
                                {"id":3,"text":"Medium truck","cost":4},
                                {"id":4,"text":"Komsomolyets tractor","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"45mm AT Gun Battery",
                    "cost":48,
                    "br":3,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"3 45mm L46 guns","cost":0},
                                {"id":2,"text":"3 45mm L66 guns","cost":20}
                            ]
                        },
                        {
                            "name":"Loader team",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"1 Loader team","cost":10},
                                {"id":3,"text":"2 Loader teams","cost":20},
                                {"id":4,"text":"3 Loader teams","cost":30}
                            ]
                        },
                        {
                            "name":"Tow",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Horse & limber","cost":2},
                                {"id":3,"text":"Medium truck","cost":4}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Towed Anti-Aircraft Gun",
                    "cost":24,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"DshK HMG","cost":0},
                                {"id":2,"text":"37mm AA gun","cost":10}
                            ]
                        },
                        {
                            "name":"Loader team",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"3-man loader team","cost":10}
                            ]
                        },
                        {
                            "name":"Tow",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Medium truck","cost":4}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id":10, 
            "name":"Additional Fire Support",
            "allows":null,
            "requires":true,
            "entries":[
                {
                    "id":1,
                    "name":"Off-Table Artillery Request",
                    "cost":5,
                    "br":0,
                    "options":[
                        {
                            "name":"Target Priority",
                            "choices":[
                                {"id":1,"text":"3rd (5+)","cost":0},
                                {"id":2,"text":"2nd (4+)","cost":5},
                                {"id":3,"text":"1st (2+)","cost":15}
                            ]
                        }
                    ]
                },
            {
                "id":2,
                "name":"Pre-Registered Target Point",
                "cost":10,
                "br":0
            },
            {
                "id":3,
                "name":"Counter-Battery Fire Mission",
                "cost":10,
                "br":0
            },
            {
                "id":4,
                "name":"Timed 122mm Barrage",
                "cost":20,
                "br":0
            },
            {
                "id":5,
                "name":"Timed 152mm Barrage",
                "cost":30,
                "br":0
            },
            {
                "id":6,
                "name":"Timed Katyusha Barrage",
                "cost":25,
                "br":0
            },
            {
                "id":7,
                "name":"Timed IL-2 Air Strike",
                "cost":10,
                "br":0
            },
            {
                "id":8,
                "name":"Timed PE-2 Air Strike",
                "cost":20,
                "br":0
            },
            {
                "id":9,
                "name":"Timed IL-4 Air Strike",
                "cost":25,
                "restricted":true,
                "br":0
            }
            ]
        }
        ]
    }
];

function render_sub_units_to(sub) {
    $(this).html(render_entries(sub, true, false));
    update_selectable($(this));
    $('body').append($(this));
}

function perm(inArr, choose, callback, callback_arg) {
    var c = [];
    var found = false;
    var inner = function(tmpArray, choose_) {
        if ( found )
            return;
        if (choose_ == 0) {
            found = callback(c, callback_arg);
        } else {
            for (var i = 0; i < tmpArray.length; ++i) {
                c.push(tmpArray[i]);
                var newArray = tmpArray.slice(0);
                newArray.splice(i, 1);
                inner(newArray, choose_ - 1);
                c.pop();
            }
        }
    }
    inner(inArr, choose);
    return found;
}

function requires_match(item, requires) {
    for (var i=0; i<item.length; i++) {
        if ($.inArray(requires[i], item[i]) == -1)
            return false;
    }
    return true;
}


// maybe make it get which value from a select?
function render_name(force) {
    var text = "<div class='ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix'><div style='display:inline'><select id=forceChoice style='display:inline; float:left; margin-right:20px'>"; 
    for (var i=0; i<forces.length; i++) {
        text = text + "<option value=" + forces[i].id;
        if (force.id == forces[i].id)
            text = text + " selected";
        text=text+">"+forces[i].name+"</option>";
    }
    text = text +"</select>Officers:<p id='officer_count' style='display:inline; margin-right:20px;'>0</p>Restricted:<p style='display:inline' id='restricted_count'>0</p></div><div style='display:inline; float:right'><div style=' margin-right:12px; display:inline; float=left'><button id='print' class='save_button'>Print</button><button id='load' class='save_button'>Load</button><button id='save' class='save_button'>Save</button></div><span class='force_cost' id='force_cost'>0</span></div></div>"
    return(text);
}
function render_sections(force, async) {
    var text="";
    for(var i = 0; i < force['sections'].length; i++) {
        text = text + "<div class='group'><h3 class='section_title'>" + force['sections'][i].name+"</h3>";
        text = text + "<div data-allows='"+ force['sections'][i].allows +"' class='section ui-widget ";
        if (force.sections[i].requires)
            text = text + "ui-state-disabled' data-requires='true'";
        else
            text = text + "selectable ' data-requires='false'";
        text = text + " id=section_" + force['sections'][i].id + " data-section-no="+ force['sections'][i].id + ">";
        text = text+render_entries(force['sections'][i]['entries'], false, async);
        text = text + "</div></div>";
    }
    return text;
}

function get_allows() {
    var selected = $('.ui-selected').filter( function() {
        return ($(this).parent().data('allows')); //only entries with a data-allows field
    });
    var array = $.map(selected, function(a)
    { // take allows 'multiplier' into account when calculating allows
        var rv = [];
        for (var i=0; i<($(a).data('multiplier')); i++) {
            var allows = $(a).parent().data('allows');
            if ($.isArray(allows)) // use slice to copy by value
                rv.push(allows.slice());
                //rv.push($.extend(true, {}, allows));
            else
                rv.push([allows]);
        }
        return rv;
    });
    return array;
}
function count_allows() {
    var array = get_allows();
    var totals={};
    for (var i=0; i<array.length; i++){
        for (var j=0; j<array[i].length; j++){
            if (totals[array[i][j]])
                totals[array[i][j]]=totals[array[i][j]]+1;
            else
                totals[array[i][j]]=1;
        }
    }
    return totals;
}
function count_requires() {
    var selected = $('.ui-selected');
    var requires = {};
    var array = $.map(selected, function(a)
        { 
            if ($(a).parent().data('requires')) {
                var rv=[];
                for (var i=0; i<($(a).data('multiplier')); i++) {
                    rv.push($(a).parent().data('section-no'));
                }
                return rv;
            }
        });
    return array;
}
// if uniqueRequire is non-null then we will only remove this requirement
// rather than any that are in index
function reduce(allows, requires, index, max, uniqueRequire) {
    var indexArray = index.split(',');
    var localMax = max;
    for (var i=allows.length-1, localMax=max; i >= 0 && localMax > 0; i--){
        if (allows[i] == index) {
            allows.splice(i,1);
            localMax--;
        }
    }
    for (i=requires.length-1, localMax=max; i >= 0 && localMax > 0; i--){
        if ((uniqueRequire==null || requires[i] == uniqueRequire)
            && $.inArray(""+requires[i],indexArray) != -1) {
            requires.splice(i,1);
            localMax--;
        }
    }
}
// Remove any allows/requires pairs that have sufficient allows
function reduce_by_count(allows, requires) {
    var count = {};
    var requiresCount= {};
    var found = false;
    for (var i=0;i<allows.length; i++){
        if (!count[allows[i]])
            count[allows[i]]=1;
        else
            count[allows[i]] = count[allows[i]]+1;
    }
    for(var index in count) {
        var indexArray = index.split(',');
        for (var j=0; j<requires.length; j++)
            if ($.inArray(""+requires[j], indexArray) != -1) {
                if (!requiresCount[index])
                    requiresCount[index]=1;
                else
                    requiresCount[index]=requiresCount[index]+1;
            }
    }
    for (var index in count){
        if (requiresCount[index] <= count[index]) {
            found = true;
            reduce(allows, requires, index, count[index], null);
        } else if ( index.split(',').length == 1) {
            reduce(allows, requires, index, count[index], null);
            found = true;
        }
    }
        
    if (found) // reduced, so try to reduce again
        (reduce_by_count(allows, requires));
    /*alert(JSON.stringify(count));
    alert(JSON.stringify(requiresCount)); */
    return found;
}
// Reduce allow array entry to lowest common denominator
// by removing any sub-allows that are not required
function simplify_allows(allows, requires) {
    var changed = false;
    for (var i=allows.length-1; i>=0; i--) {
        for (var j=allows[i].length-1; j>=0; j--) {
            if ($.inArray(allows[i][j], requires) ==-1) {
                allows[i].splice(j,1);
                changed = true;
            }
        }
        if (allows[i].length == 0) {
            allows.splice(i,1);
        }
    }
    return changed;
}
// Check for a requires that exists in only 1 allows
function simplify_requires(allows, requires){
    var changed=false;
    var uniqueRequires={};
    var uniqueAllows={};
    var countRequires={};
    var countAllows={};
    for (var i=0; i<requires.length; i++){
        if (!uniqueRequires[requires[i]]) {
            uniqueRequires[requires[i]]=requires[i];
            countRequires[requires[i]]=1;
        } else {
            countRequires[requires[i]]++;
        }
    }
    for (i=0; i<allows.length; i++){
        if (!uniqueAllows[allows[i]]) {
            uniqueAllows[allows[i]]=allows[i];
            countAllows[allows[i]]=1;
        } else {
            countAllows[allows[i]]++;
        }
    }
    for (var rKey in uniqueRequires){
        var count=0;
        var index=null;
        for (var aKey in uniqueAllows){
            if ($.inArray(uniqueRequires[rKey], uniqueAllows[aKey]) != -1){
                count++;
                index=aKey;
            }
        }
        if (count <= 1){
            var howMany=countRequires[rKey];
            if (countAllows[aKey] < howMany)
                howMany = countAllows[aKey];

            changed=true;
            reduce(allows, requires, index, howMany, rKey); // only remove this rKey
            break;
        }
    }
    return changed;
}

function allow_requires() {
    var requires = count_requires();
    if (requires.length == 0) // no requirements, auto pass
        return true;
    var allows = get_allows();
    if (requires.length > allows.length)
        return false;

    for (var i=0; i<requires.length; i++) {
        var match = false;
        for (var j=0; j<allows.length && match==false; j++){
            if ($.inArray(requires[i], allows[j]) != -1)
                match = true;
        }
        if (match == false) {
            return false;
        }
    }
    // loop simplifying until it simplifies no more
    while ( requires.length > 0 && (simplify_allows(allows, requires) || simplify_requires(allows, requires) || reduce_by_count(allows, requires) )){
        ;
    }
    if (requires.length == 0)
        return true;
    if ( allows.length > 0 && requires.length <= allows.length ) {
        alert('Simplifaction process failed. If using the online (ie uptodate copy) then please report the following string to "quozl" on the guild gamers forum. Your feedback can help improve this builder!:' +JSON.stringify(allows) + " requires: " +JSON.stringify(requires));
        return perm(allows, requires.length, requires_match, requires);
    }
    return false;
}

function allow_removed() {
    var requires = $('.section').filter( function() { return $(this).data('requires'); } );
    $(requires).addClass('ui-state-disabled');
    $(requires).removeClass('selectable');
}

function allow_enables() {
    var allows = count_allows();
    for (var key in allows) {
        var section = $('#section_'+key);
        section.removeClass('ui-state-disabled');
        section.addClass('selectable');
        // greg section.css('background:EEE');
    }
    update_selectable();
    update_accordion();
}

function render_entries(entries, sub_entries, async) {
    var text="";
    for(var i = 0; i < entries.length; i++) {
        var count = 1;
        if (entries[i].count) {
            count = entries[i].count;
        }
        for (var count_loop=0; count_loop<count; count_loop++) {
            text = text + "<div data-multiplier='";
            if (entries[i].multiplier)
                text = text + entries[i].multiplier;
            else {
                if (entries[i].multiplier == 0)
                    text = text + "0";
                else
                    text = text + "1";
            }
            text = text + "' data-bg_id='" + entries[i].id;
            if ( entries[i]['sub_units'] ) {
                var id = my_uuid++;
                var div = $('<div>').addClass('selectable sub_div hidden');
                $(div).uniqueId();
                $(div).data('sub_parent','id'+id);
                text = text + "' data-sub='" + $(div).attr('id') + "' id='id"+id;
                // Do not populate sub panel asynchronously if async == false
                // This is important if we are loading a saved list as we will
                // need panel contents immediately
                if ( async )
                    jQuery.when( sub_timeout(entries[i]['sub_units'], div)).done(render_sub_units_to);
                else
                    render_sub_units_to.apply(div, [entries[i]['sub_units']]);
            }
            if (sub_entries)
                text = text + "' data-sub_entry='true";
            if (entries[i].officer)
                text = text + "' data-officer='true";
            if (entries[i].restricted)
                text = text + "' data-restricted='true";
            if (entries[i].unique)
                text = text + "' data-unique='true";
            text = text + "' class='entry ui-widget-content";
            if ( entries[i]['mandatory'] )
                text = text + ' ui-selected mandatory';
            text = text + "'><div><p class='entry_name'>"+entries[i].name+"</p><p id='cost' data-initial-cost='"+entries[i].cost+"' class='entry_cost'>"+entries[i].cost+"</p><p class='entry_cost' id='br' data-initial-br='"+entries[i].br+"'>"+entries[i].br+"<font size='1.2em'>BR</font></p></div>";
            if ( entries[i]['options'] ) {
                for(var j = 0; j < entries[i]['options'].length; j++) {
                    text = text + '<div class="choice ui-helper-clearfix"><p class="opt_text">'+entries[i]['options'][j]['name']+'</p><select class="opt_select" name="' + entries[i]['options'][j]['name']+ '" data-bg_id="' + (j+1) +  '">';
                    for (var k=0; k<entries[i].options[j].choices.length; k++) {
                        text = text + "<option data-cost='"+entries[i].options[j].choices[k].cost;
                        if (entries[i].options[j].choices[k].np)
                           text = text +"' data-np='"+entries[i].options[j].choices[k].br; 
                        if (entries[i].options[j].choices[k].br)
                           text = text +"' data-br='"+entries[i].options[j].choices[k].br; 
                        text = text + "' value='" + entries[i].options[j].choices[k].id +"'>"+entries[i].options[j].choices[k].text + "</option>"; 
                    }
                    text = text + "</select></div>";
                }
            }
            if ( entries[i]['sub_units'] )
                text = text + "<button class='sub_button'>"+entries[i]['sub_text']+"</button>";
            text = text + "</div>"
        }
    }
    return text;
}

function force_by_id(which) {
    for (var i=0; i<forces.length; i++)
        if (which == forces[i].id)
            return forces[i];
    return forces[0];
}
function render_force(which, async) {
    var text="";
    var force = force_by_id(which);
    text = render_name(force);
    text = text + "<div id='accordion'>" + render_sections(force, async) + "</div>";
    $('#main').data('bg_id', which);
    $('#main').html(text);
}

// return -1 on error character
function decode( character ) {
    if (typeof(character)==='undefined')
        return -1;

    var code = character.charCodeAt(0);

    if ( code >= 65 && code <= 90 )
        return character.charCodeAt(0) - 64;
    else if ( code >= 97 && code <= 122 )
        return character.charCodeAt(0) - 70;
    return -1;
}

function encode( integer ){
    if ( integer >= 0 && integer <= 26 )
        return String.fromCharCode(64+integer);
    if ( integer >= 27 && integer <= 52 )
        return String.fromCharCode(97+integer);
    return '!'
}

function split_and_load(items, depth, panel) {
    // Split on 0, then 1, then 2 etc as we go deeper
    var list = items.split(String.fromCharCode(depth+48));
    for (var i=0; i<list.length; i++) {
        if(typeof(panel)==='undefined') {
            var section_number = decode(list[i][0]);
            section = $('.section').filter( function() {
                if ($(this).data('section-no') == section_number){
                    return true;
                }
                return false;
            });
            // skip the first entry - the section code
            load_item(list[i].slice(1), depth, section[0]);
        } else {
            load_item(list[i], depth, panel);
        }
    }
}

function load_item(item, depth, panel) {
    var entry_count = 0; // is it instance N of this entry?
    var pointer=0; // index into item where current data coming from
    var sub_delim = String.fromCharCode(49+depth);
    var section = null;

    if(typeof(panel)==='undefined') {
        var section_number = decode(item[0]);
        pointer++;
        section = $('.section').filter( function() {
            if ($(this).data('section-no') == section_number){
                return true;
            }
            return false;
        });
    } else {
        section = panel;
    }
    var entry_number = decode(item[pointer]);
    var entries = $(section).children('.entry').filter( function() {
        if ($(this).data('bg_id') == entry_number) {
            return true;
        }
        return false;
    });
    if ( item[pointer+1] == '_' ) { // see if this refers to the Nth one of this entry
        pointer = pointer +2;
        var count = decode(item[pointer]);
        if ( count > 0 ) {
            entry_count = count-1; // zero-base
        }
    }
    enable_entry(entries[entry_count]);
    pointer ++;
    // check for any option selects
    while ( item[pointer] == '-' ) {
        var which = decode(item[pointer+1]);
        var value = decode(item[pointer+2]);
        pointer = pointer +3;
        $(entries[entry_count]).find('select').each( function() {
            if ($(this).data('bg_id') == which ) {
                $(this).val(value);
                $(this).change(); // triggers the update cost code
            }
        });
    }
    if ( item[pointer] == sub_delim ) { // sub entries
        var endPointer = item.indexOf(sub_delim, pointer+1);  // find the next sub-delim
        var sub = $('#'+$(entries[entry_count]).data('sub'));
        // If the parent has been rendered not duplicated then it will have
        // no subID. We need to set one so that we can count selected sub elements
        if (!$(entries[entry_count]).attr('id')) {
            $($(entries[entry_count])).uniqueId();
            $(sub).data('sub_parent', $(entries[entry_count]).attr('id'));
        }

        pointer++;

        var subArray = null;
        if ( endPointer > pointer ) {
            load_item(item.slice(pointer, endPointer), depth+1, sub);
            pointer = endPointer+1;
        } else {
            alert('sub div test endPointer>pointer failed');
        }
    }

    if (pointer < item.length)
        load_item(item.slice(pointer), depth, panel);
}

function load( string ) {
    render_force(decode(string[0]), false);
    split_and_load(string.slice(1), 0);
}

function render() {
    /* greg still have to note that a saved entry is the Nth of that type of entr
       possibly don't save mandatory items in sub fields unless they have non-standard select options */
    render_force(1, true);
    //load('AABCC_B0BA1ABB_BB_CCD1B1ABB_BB_C1DEE_B0CAE0');
    //    render_force(1);
    // B_B means entry type B (2) instance B (2)
    //load('ABA1ABB_B-BBB_C-ABCD-AB10');
    //AA-AG0B0C-ABA
}

// Function gets selected entries but excludes any sub entries whose parent entry
// is currently un-selected
function get_selected_entries() {
    return $('.ui-selected').filter( function() {
        // check if they are a sub entry - if so require all parent entries to be selected
        var which = $(this);
        while (which.data('sub_entry')) {
            if ( ! $(which).parents('.ui-selectable').data('sub_parent') || 
                ! $('#'+$(which).parents('.ui-selectable').data('sub_parent')).hasClass('ui-selected')) {
                    return false;
                    }
            which = $('#'+$(which).parents('.ui-selectable').data('sub_parent'));
        }
        return true; } );
}

function update_cost() {
    var cost = 0;
    var br=0;
    var entries = get_selected_entries();
    $(entries).each(function() {
            cost = cost + parseInt($(this).find('#cost').text());
            br = br + parseInt($(this).find('#br').text());});
    $('#force_cost').text(cost + ' / ' + br +'br');
    var officers = entries.filter( function() { if ($(this).data('officer')) return true; return false; } );
    $('#officer_count').text(officers.length);
    var restricted = entries.filter( function() { if ($(this).data('restricted')) return true; return false; } );
    $('#restricted_count').text(restricted.length);
}

function unselecting(event, ui){
    var abort = false;
    // If removing this would stop us meeting our requires, then prevent its removal
    if ($(ui.unselecting).hasClass('mandatory'))
        abort = true;
    else if ($(ui.unselecting).parents('.section').data('allows')) {
        if ( !allow_requires() ) {
            alert('Removing this item would result in you having more support choices than allowed.\nRemove those first.');
            abort=true;
        }
    }
    if (abort)
        $(ui.unselecting).addClass('ui-selected');

}
function unselected(event, ui){
    update_cost();
    allow_removed();
    allow_enables();
    update_accordion();
}

function duplicate_sub(dupe) {
    // If this dupe has sub units then also duplicate that sub div and
    // change the sub and parents reference to each others in the new clones
    var sub = $('#'+$(dupe).data('sub')).clone(false, false);
    $(sub).attr('id', null);
    $(sub).uniqueId();
    $(sub).data('sub_parent', $(dupe).attr('id'));
    $('body').append($(sub));
    $(dupe).data('sub', $(sub).attr('id'));
    // check if any of the duplicated sub-entries also have sub-entries
    $(sub).find('.entry').each( function( index ) {
            if ($(this).data('sub'))
                duplicate_sub(this);
    });
}
function duplicate_entry(entry) {
    if ($(entry).data('unique') || $(entry).hasClass('mandatory'))
        return;
    var dupe = $(entry).clone(true, false);
    // set uniqueID
    $(dupe).attr('id', null);
    $(dupe).uniqueId();
    dupe.removeClass('ui-selected');
    $(entry).after(dupe);
    //Clone any sub div
    if ($(dupe).data('sub')) {
        duplicate_sub(dupe);
        update_selectable();
    }
}

function enable_entry(entry) {
    duplicate_entry(entry);
    $(entry).addClass('ui-selected');
    update_cost();
    allow_enables();
}

function selected(event, ui){
    var abort=false;
    if ($(ui.selected).parents('.section').data('requires')) {
        if ( !allow_requires() ) {
            alert('Selecting this item would result in you having more support choices than allowed.');
            abort=true;
        }
    }
    if (abort) {
        $(ui.selected).removeClass('ui-selected');
    } else {
        enable_entry(ui.selected);
    }

}

function update_entry_cost(entry) {
    var cost_field = $(entry).find('p').filter( function() { return $(this).attr('id')=='cost'; });
    var br_field = $(entry).find('p').filter( function() { return $(this).attr('id')=='br'; });
    var selects = $(entry).find("select option").filter(':selected');
    var newCost = $(cost_field).data('initial-cost');
    var newBr = $(br_field).data('initial-br');

    for (var i=0; i<selects.length; i++) {
        newCost = newCost + $(selects[i]).data('cost');
        if ($(selects[i]).data('br')){
            newBr = newBr + $(selects[i]).data('br');
        }
    }
    $(cost_field).html(newCost);
    $(br_field).html(newBr+"<font size='1.2em'>BR</font>");
    update_cost();
}

function option_change(event) {
    update_entry_cost($(this).parents(".entry"));
}


function update_accordion(){
    $("#accordion").accordion({
        heightStyle: "content",
        header: '> div > h3'
        }).sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
            // IE doesn't register the blur when sorting
            // so trigger focusout handlers to remove .ui-state-focus
            ui.item.children( "h3" ).triggerHandler( "focusout" );
        }
    });
}
function update_selectable()
{
    $('.selectable').bind("mousedown", function(e) {
            e.metaKey = true;
            }).selectable({ filter: '.entry', tolerance: "fit", unselecting:unselecting, unselected:unselected, selected:selected }, 'refresh');
}

function sub_button_bind() {
    $('.sub_button').button();
    $('body').on('click', '.sub_button', function( event) {
        event.preventDefault();
        var parent = $(this).parent();
        var sub = $('#'+parent.data('sub'));
        sub.dialog({title:$(this).html(), modal:true, width:'950'});
    });

}

function save_entry(entry, depth, N) {
    var text=[];
    var sub;
    text.push(encode($(entry).data('bg_id')));
    if (N > 1) // Save if this is the Nth of this entry
        text.push('_', encode(N));
    $(entry).find('select').each( function() {
        var num_opts = $(this).children('option').length;
        // only bother saving ones with more than 1 possible choice
        // and which are not the default value
        if (num_opts > 1 && $(this).val() > 1) {
            text.push( '-', encode($(this).data('bg_id')), encode(parseInt($(this).val())));
        }
        });
    subID = $(entry).data('sub');
    if (subID) {
        var sub = $('#'+subID);
        text = text.concat(save_section( sub , depth+1));
    }
    return text;
}

function depth_seperator(depth) {
    return String.fromCharCode(48+depth);
}

function save_section(section, depth) {
    var entries = $(section).children('.ui-selected');
    // alert('entries length is ' + entries.length);
    var text = [];
    if ( entries.length > 0 ) {
        if (depth == 0) //only include section code for top level sections
            text.push(encode($(section).data('section-no')));
        else
            text.push(depth); // push sub section start marker for this depth
        for (var i=0; i<entries.length; i++) {
            var N=1;
            // need to determine if it's Nth instance of this entry and save that information
            if (i > 0 ) {
                var previous=0;
                var bg_id=$(entries[i]).data('bg_id');
                for (var j=0; j<i; j++){
                    if ($(entries[j]).data('bg_id') == bg_id)
                        previous++;
                }
                if (previous)
                    N = previous+1;
            }
            text = text.concat(save_entry(entries[i], depth, N));
        }
        text.push(depth);
    }
    return text;
}

function emptyPage() {
    $('#main').empty();
    $('.sub_div').remove();
}
function saveDialog(text){
    $('#save_div').html("<p>"+text+"</p>");
    $('#save_div').dialog({title:'Save String', modal:true,
        buttons: {
            Close: function () {
                $( this ).dialog( "close" );
            }
        }
    });
}
function loadDialog() {
    $('#load_div').dialog({title:"Load Force", modal:true,
    buttons: {
        Cancel: function() {
                    $( this ).dialog( "close" );
                },
        OK: function() {
                    $( this ).dialog( "close" );
                    emptyPage();
                    load($('#load_input').val());
                    $('.save_button, .load_button, .sub_button').button();
                }
        }
    });
}

function save(event) {
    var text = [];
    text.push(encode($('#main').data('bg_id')));
    var sections = $('.section').not('.ui-state-disabled');
    for (var i=0; i<sections.length; i++)
        text = text.concat(save_section(sections[i], 0));
    var saveText='';
    for (var j=0; j<text.length; j++)
        saveText = saveText + text[j];
    saveDialog(saveText);
}

function changeForce(event){
    emptyPage();
    render_force(parseInt($(this).val()), true);
    $('.save_button, .load_button, .sub_button').button();
    update_accordion();
}
function print_header(force) {
    var text = "<div style='margin:0px auto; width:30%;'><h3 class='p_title p_h3' style='display:inline; padding:auto;'>"+ force.name + "</h3><h4 class='p_+h4' style='display:inline; float:right; margin:0px;'>"+$('#force_cost').text()+"</h4></div>";
    return text;
}
function print_with_sub(entry){
    var sub=$('#'+$(entry).data('sub'));
    var entries = $(sub).children('.ui-selected');
    var text="";
    for (var i=0; i<entries.length; i++){
        text = text + "<div class='p_entry'>"+print_entry(entries[i]) + "</div>";
    }
    return text;
}
function print_entry_name(entry){
    return "<div><h4 class='p_h4'>" + $(entry).find('.entry_name').text() +"</h4><p class='p_h4 right'>"+$(entry).find('#cost').text() + "/" + $(entry).find('#br').text() + "</p></div>";
}
function print_entry_options(entry){
    var text="<div><h5 class='p_h5'>";
    var selects = $(entry).find('.opt_select');
    var printed = 0;
    if ($(selects).length > 0) {
        $(selects).each( function() {
            var selected = $(this).children("select option").filter(':selected')
            if (!$(selected).data('np') && $(this).children("select option").filter(':selected').text()!='None') {
                if (printed > 0)
                    text = text+', ';
                text=text+$(this).children("select option").filter(':selected').text();
                printed = printed +1;
            }
        });
    }
    return text + "</h5></div>";
}
function print_entry(entry){
    var text = print_entry_name(entry);
    text = text + print_entry_options(entry);
    if ($(entry).data('sub'))
        text = text + print_with_sub(entry);
    return text;
}
function print_section(section){
    var text="<div class='p_section'><h3 class='p_h3'>";
    text=text+$(section).parent('.group').find('.section_title').text()+"</h3>";
    var entries = $(section).children('.ui-selected');
    var withSub = $(entries).filter(function(){ if ($(this).data('sub')) return true; return false;});
    var withoutSub = $(entries).filter(function(){ if ($(this).data('sub')) return false; return true;});
    // print any with subs first for layout reasons
    for (var i=0; i<withoutSub.length; i++)
        text = text + "<div class='p_entry'>"+ print_entry(withoutSub[i]) +"</div>";
    for (i=0; i<withSub.length; i++)
        text = text + "<div class='p_parent'>"+ print_entry(withSub[i]) +"</div>";
    text=text+"</div>";
    return text;
}
function print_sections() {
    var sections = $('.section:has(.ui-selected)');
    var text="";
    for (var i=0; i<sections.length; i++) {
        text = text + print_section(sections[i]);
    }
/*
    return $('.ui-selected').filter( function() {
        print_render */
    return text;
}
function print_render(){
    var force = force_by_id($('#main').data('bg_id'));
    var text=print_header(force);
    var width=200;
    text = text + print_sections();
    $('body').append($('<div id="p_div" class="p_div clearfix"></div>').html(text));
    width=$('#p_div').children('.p_section').outerWidth();
    $('#p_div').show();

    $('p_div').children('.p_section').masonry({
        itemSelector:'.p_entry, p_parent',
        isFitWidth:true
    });
    $('p_div').masonry({
        itemSelector:'.p_section',
        isFitWidth:true
    });
    $('#main').hide();
}

$( document ).ready( function() {
    render();
    update_selectable();
    sub_button_bind();
    update_accordion();
    $('.save_button').button();
    $('body').on('click','#p_div', function () {
        $('#main').show(); $('#p_div').remove();});
    $('body').on('click', '#save', save);
    $('body').on('click', '#load', loadDialog);
    $('body').on('click', '#print', print_render);
    $('body').on('change', '#forceChoice', changeForce);
    $('body').on('change', '.opt_select', option_change);
});
