/**
 * © Greg Farrell greg@gregfarrell.org 
 * Do as you wish with this code but please respect the IP of any authors for 
 * whose game you create a force builder using any of this code.
 * @license MIT
 */
var sizes = [350, 750, 1500, 3000,99999];
function sub_timeout(sub_units, div) {
    var dfd = jQuery.Deferred();
        setTimeout(function() {
                dfd.resolveWith(div, [sub_units]);
                    }, 1200);
        return dfd.promise();
}
function army_size_string() { // todo check this costs in the book!
    var cost =  parseInt($('#force_cost').text(),10);
    if (cost <= 350 )
        return 'Squad';
    if (cost <= 750 )
        return 'Platoon';
    if (cost <= 1500 )
        return 'Company';
    return 'Battalion';
}
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
var my_uuid=0;
var listVehicles = null;
var listWeapons = null;


var vehicles = [
{
    'name':'Blank'
},
{
    'id':1,
    'name':'Panzer III J',
    'armour':true,
    'weapons':[8],
    'mg':true
},
{
    'id':2,
    'name':'Panzer III L',
    'armour':true,
    'weapons':[9],
    'mg':true
},
{
    'id':3,
    'name':'Panzer III M',
    'armour':true,
    'weapons':[9],
    'mg':true
},
{
    'id':4,
    'name':'Panzer III N',
    'armour':true,
    'weapons':[11],
    'mg':true
},
{
    'id':5,
    'name':'Flammpanzer III',
    'armour':true,
    'weapons':[32],
    'mg':true
},
{
    'id':6,
    'name':'Panzer III H Observation Tank',
    'armour':true,
    'mg':true
},
{
    'id':7,
    'name':'Panzer IV E-F1',
    'armour':true,
    'weapons':[11],
    'mg':true,
    'ammo':true
},
{
    'id':8,
    'name':'Panzer IV G',
    'armour':true,
    'weapons':[13],
    'mg':true,
    'ammo':true
},
{
    'id':9,
    'name':'Panzer IV H',
    'armour':true,
    'weapons':[15],
    'mg':true,
    'ammo':true
},
{
    'id':10,
    'name':'Panzer V',
    'armour':true,
    'special':'Unreliable',
    'weapons':[16],
    'mg':true,
    'ammo':true
},
{
    'id':11,
    'name':'Panzer VI',
    'armour':true,
    'weapons':[19],
    'mg':true,
    'ammo':true
},
{
    'id':12,
    'name':'Panzer T-34(r)',
    'armour':true,
    'weapons':[44],
    'mg':true,
    'special':'T-34 Mobility',
    'weapons':[17],
    'ammo':true
},
{
    'id':13,
    'name':'Panzer II',
    'armour':true,
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':14,
    'name':'Borgward B-IV',
    'armour':true,
    'special':'Remote control',
    'weapons':[15],
    'ammo':true
},
{
    'id':15,
    'name':'StuG III A-E',
    'armour':true,
    'weapons':[11],
    'ammo':true
},
{
    'id':16,
    'name':'StuG III F',
    'armour':true,
    'weapons':[13],
    'mg':true,
    'ammo':true
},
{
    'id':17,
    'name':'StuH 42 F',
    'armour':true,
    'weapons':[22],
    'mg':true,
    'ammo':true
},
{
    'id':18,
    'name':'StuG III G',
    'armour':true,
    'weapons':[15],
    'mg':true,
    'ammo':true
},
{
    'id':19,
    'name':'StuH 42 G',
    'armour':true,
    'weapons':[22],
    'mg':true,
    'ammo':true
},
{
    'id':20,
    'name':'Marder II',
    'armour':true,
    'open':true,
    'weapons':[14],
    'ammo':true
},
{
    'id':21,
    'name':'Marder III H',
    'armour':true,
    'open':true,
    'weapons':[14],
    'mg':true,
    'ammo':true
},
{
    'id':22,
    'name':'Marder III M',
    'armour':true,
    'open':true,
    'weapons':[14],
    'mg':true,
    'ammo':true
},
{
    'id':23,
    'name':'Marder III (38t PaK 36r)',
    'armour':true,
    'open':true,
    'weapons':[18],
    'mg':true,
    'ammo':true
},
{
    'id':24,
    'name':'Ferdinand',
    'armour':true,
    'weapons':[20],
    'ammo':true
},
{
    'id':25,
    'name':'Hornisse',
    'armour':true,
    'open':true,
    'weapons':[20],
    'ammo':true
},
{
    'id':26,
    'name':'Brummbar',
    'armour':true,
    'weapons':[25],
    'ammo':true
},
{
    'id':27,
    'name':'Grille H',
    'armour':true,
    'open':true,
    'weapons':[25],
    'ammo':true
},
{
    'id':28,
    'name':'Grille K',
    'armour':true,
    'open':true,
    'weapons':[25],
    'mg':true,
    'ammo':true
},
{
    'id':29,
    'name':'Wespe',
    'armour':true,
    'open':true,
    'weapons':[22],
    'ammo':true
},
{
    'id':30,
    'name':'Hummel',
    'armour':true,
    'open':true,
    'weapons':[26],
    'ammo':true
},
{
    'id':31,
    'name':'Munitions Carrier',
    'armour':true
},
{
    'id':32,
    'name':'SdKfz 222',
    'armour':true,
    'weapons':[4],
    'ammo':true
},
{
    'id':33,
    'name':'SdKfz 223',
    'armour':true,
    'mg':true
},
{
    'id':34,
    'name':'SdKfz 232',
    'armour':true,
    'weapons':[4],
    'mg':true,
    'ammo':true
},
{
    'id':35,
    'name':'SdKfz 233',
    'armour':true,
    'open':true,
    'weapons':[11],
    'ammo':true
},
{
    'id':36,
    'name':'SdKfz 236',
    'armour':true,
    'mg':true
},
{
    'id':37,
    'name':'SdKfz 251/1',
    'armour':true,
    'open':true,
    'mg':true
},
{
    'id':38,
    'name':'SdKfz 251/2',
    'armour':true,
    'open':true,
    'weapons':[2],
    'ammo':true
},
{
    'id':39,
    'name':'SdKfz 251/3',
    'armour':true,
    'open':true,
    'mg':true
},
{
    'id':40,
    'name':'SdKfz 251/9',
    'armour':true,
    'open':true,
    'weapons':[11],
    'ammo':true,
    'mg':true
},
{
    'id':41,
    'name':'SdKfz 251/10',
    'armour':true,
    'open':true,
    'weapons':[7],
    'ammo':true,
    'mg':true
},
{
    'id':42,
    'name':'SdKfz 251/16',
    'armour':true,
    'open':true,
    'weapons':[32],
    'ammo':true,
    'mg':true
},
{
    'id':43,
    'name':'SdKfz 250/1',
    'armour':true,
    'open':true,
    'mg':true
},
{
    'id':44,
    'name':'SdKfz 250/3',
    'armour':true,
    'open':true,
    'mg':true
},
{
    'id':45,
    'name':'SdKfz 250/7',
    'armour':true,
    'open':true,
    'weapons':[2],
    'ammo':true,
    'mg':true
},
{
    'id':46,
    'name':'SdKfz 250/8',
    'armour':true,
    'open':true,
    'weapons':[11],
    'ammo':true,
    'mg':true
},
{
    'id':47,
    'name':'SdKfz 250/9',
    'armour':true,
    'open':true,
    'weapons':[4],
    'ammo':true,
    'mg':true
},
{
    'id':48,
    'name':'SdKfz 250/10',
    'armour':true,
    'open':true,
    'weapons':[7],
    'ammo':true,
    'mg':true
},
{
    'id':49,
    'name':'SdKfz 250/11',
    'armour':true,
    'open':true,
    'weapons':[6],
    'ammo':true,
    'mg':true
},
{
    'id':50,
    'name':'Motorcycle',
    'hits':true,
    'capacity':1
},
{
    'id':51,
    'name':'Motorcycle and sidecar',
    'hits':true,
    'capacity':2
},
{
    'id':52,
    'name':'Kettenkrad',
    'hits':true,
    'capacity':2
},
{
    'id':53,
    'name':'Staff car',
    'hits':true,
    'capacity':3
},
{
    'id':54,
    'name':'Kübelwagen',
    'hits':true,
    'capacity':3
},
{
    'id':55,
    'name':'Schwimmwagen',
    'hits':true,
    'capacity':3,
    'special':'amphibious'
},
{
    'id':56,
    'name':'Steyr Heavy car',
    'hits':true,
    'capacity':5
},
{
    'id':57,
    'name':'Krupp Protze',
    'hits':true,
    'capacity':8
},
{
    'id':58,
    'name':'Opel Blitz',
    'hits':true,
    'capacity':12
},
{
    'id':59,
    'name':'Opel Maultier',
    'hits':true,
    'capacity':12
},
{
    'id':60,
    'name':'RSO',
    'hits':true,
    'capacity':10
},
{
    'id':61,
    'name':'Heavy Truck',
    'hits':true,
    'capacity':24
},
{
    'id':62,
    'name':'1 tonne SdKfz 10',
    'hits':true,
    'capacity':5
},
{
    'id':63,
    'name':'3 tonne SdKfz 11',
    'hits':true,
    'capacity':8
},
{
    'id':64,
    'name':'5 tonne SdKfz 6',
    'hits':true,
    'capacity':10
},
{
    'id':65,
    'name':'8 tonne SdKfz 7',
    'hits':true,
    'capacity':12
},
{
    'id':66,
    'name':'12 tonne SdKfz 8',
    'hits':true,
    'capacity':15
},
{
    'id':67,
    'name':'18 tonne SdKfz 9',
    'hits':true,
    'special':'repair, recovery'
},
{},{},
{
    'id':70,
    'name':'KV-1S',
    'armour':true,
    'weapons':[44],
    'ammo':true,
    'mg':true
},
{
    'id':71,
    'name':'T-60',
    'armour':true,
    'weapons':[35],
    'mg':true
},
{
    'id':72,
    'name':'T-70',
    'armour':true,
    'weapons':[38],
    'ammo':true,
    'mg':true
},
{
    'id':73,
    'name':'KV-1E',
    'armour':true,
    'weapons':[44],
    'special':'Unreliable',
    'ammo':true,
    'mg':true
},
{
    'id':74,
    'name':'KV-2',
    'armour':true,
    'weapons':[49],
    'special':'Unreliable',
    'ammo':true,
    'mg':true
},
{
    'id':75,
    'name':'T-34/43',
    'armour':true,
    'weapons':[44],
    'mg':true,
    'special':'T-34 Mobility',
    'ammo':true
},
{
    'id':76,
    'name':'SU-76M',
    'armour':true,
    'open':true,
    'weapons':[45],
    'ammo':true
},
{
    'id':77,
    'name':'SU-122',
    'armour':true,
    'weapons':[47],
    'ammo':true
},
{
    'id':78,
    'name':'SU-152',
    'armour':true,
    'weapons':[50],
    'ammo':true
},
{
    'id':79,
    'name':'BM-8-13 Katyusha',
    'armour':true,
    'weapons':[51],
    'ammo':true
},
{
    'id':80,
    'name':'BA-10',
    'armour':true,
    'weapons':[37],
    'mg':true,
    'ammo':true
},
{
    'id':81,
    'name':'BA-64',
    'armour':true,
    'open':true,
    'mg':true
},
{
    'id':82,
    'name':'Bren Carrier',
    'armour':true,
    'open':true,
    'mg':true
},
{
    'id':83,
    'name':'M5 Halftrack',
    'armour':true,
    'mg':true
},
{
    'id':84,
    'name':'White Scout Car',
    'armour':true,
    'mg':true
},
{
    'id':85,
    'name':'M3 Grant',
    'armour':true,
    'weapons':[56,57],
    'mg':true,
    'ammo':[14,5]
},
{
    'id':86,
    'name':'Matilda II',
    'armour':true,
    'weapons':[58],
    'mg':true,
    'ammo':true
},
{
    'id':87,
    'name':'Valentine III',
    'armour':true,
    'weapons':[58],
    'mg':true,
    'ammo':true
},
{
    'id':88,
    'name':'Churchill III/IV',
    'armour':true,
    'weapons':[59],
    'mg':true,
    'ammo':true
},
{
    'id':89,
    'name':'M3A1 Stuart',
    'armour':true,
    'weapons':[56],
    'mg':true,
    'ammo':true
},
{
    'id':90, //greg confirm
    'name':'Gaz Jeep TBC',
    'hits':true,
    'capacity':3
},
{
    'id':91,
    'name':'Medium Truck',
    'hits':true,
    'capacity':12
},
{ // greg confirm
    'id':92,
    'name':'Radio Van TBC',
    'hits':true
},
{
    'id':93,
    'name':'Horse & Limber',
    'hits':true
},
{
    'id':94,
    'name':'Horse drawn wagon',
    'hits':true
},
{
    'id':95,
    'name':'Komsomolyets tractor',
    'hits':true
},
{
    'id':100,
    'name':'M4 Sherman (A1,A2,A3)',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':101,
    'name':'M4A4 Sherman',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':102,
    'name':'M4A4 Sherman Firefly',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':103,
    'name':'M4A4 Sherman HQ',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':104,
    'name':'M4 Sherman (76mm)',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':105,
    'name':'M4 Sherman (105mm)',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':106,
    'name':'M4 DD Sherman',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':107,
    'name':'M4 Sherman Crab',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':108,
    'name':'M4 Sherman Dozer',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':109,
    'name':'M4 Sherman ARV',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':110,
    'name':'M4 Sherman BARV',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':111,
    'name':'Cromwell IV or V',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':112,
    'name':'Cromwell IV or V HQ',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':113,
    'name':'Cromwell ARV',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':114,
    'name':'Challenger',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':115,
    'name':'M3A3 \'Honey\'',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':116,
    'name':'M5 Stuart',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':117,
    'name':'M5 Stuart \'Recce\'',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':118,
    'name':'Tetrarch',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':119,
    'name':'Tetrarch CS',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':120,
    'name':'Churchill V',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':121,
    'name':'Churchill VI',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':122,
    'name':'Churchill VII',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':123,
    'name':'Churchill AVRE',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':124,
    'name':'Churchill Crocodile',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':125,
    'name':'Churchill Ark',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':126,
    'name':'Churchill ARV',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':127,
    'name':'Centaur IV',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':128,
    'name':'Centaur AA',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':129,
    'name':'Crusader AA I',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':130,
    'name':'Crusader AA II',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':131,
    'name':'Valentine Bridge',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':132,
    'name':'M10 Wolverine',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':133,
    'name':'M10 Achilles',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':134,
    'name':'Humber Scout Car',
    'armour':true,
    'mg':true
},
{
    'id':135,
    'name':'Humber IV',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':136,
    'name':'Dingo',
    'armour':true,
    'mg':true
},
{
    'id':137,
    'name':'Daimler',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':138,
    'name':'Staghound',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':139,
    'name':'Staghound AA',
    'armour':true,
    'mg':true
},
{
    'id':140,
    'name':'AEC III',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':141,
    'name':'Humber Light Recce Vehicle I',
    'armour':true,
    'mg':true
},
{
    'id':142,
    'name':'M8 Greyhound',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':143,
    'name':'M20 Utility Car',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':144, // greg anti-aircraft half-tracks
    'name':'Unknown - greg',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':145,
    'name':'Unknown - greg',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':146,
    'name':'M5/M9 Halftrack',
    'armour':true,
    'mg':true
},
{
    'id':147,
    'name':'Ram Kangaroo',
    'armour':true,
    'mg':true
},
{
    'id':148,
    'name':'M3 Halftrack',
    'armour':true,
    'mg':true
},
{
    'id':149,
    'name':'Bren Carrier',
    'armour':true,
    'mg':true
},
{
    'id':150,
    'name':'Loyd Carrier',
    'armour':true
},
{
    'id':151,
    'name':'Wasp',
    'armour':true,
    'weapons':[32],
    'ammo':true
},
{
    'id':152,
    'name':'Crusader Tractor',
    'armour':true
},
{
    'id':153,
    'name':'M35 Primer Mover',
    'armour':true
},
{
    'id':154,
    'name':'Sexton',
    'armour':true,
    'weapons':[1],
    'ammo':true
},
{
    'id':155,
    'name':'Priest',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':156,
    'name':'M8 HMC',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':157,
    'name':'M4 or M21 Halftrack',
    'armour':true,
    'weapons':[1],
    'mg':true,
    'ammo':true
},
{
    'id':158,
    'name':'M12 Halftrack',
    'armour':true,
    'weapons':[1],
    'ammo':true
},
{
    'id':159,
    'name':'Dorchester ACV',
    'armour':true
},
{
    'id':160,
    'name':'Armoured Bulldozer',
    'armour':true
},
{
    'id':161,
    'name':'M32 ARV',
    'armour':true,
    'mg':true
},
{
    'id':162,
    'name':'M30 Cargo Carrier',
    'armour':true,
    'mg':true
},
{
}
];

var weapons = {
    0:{
        'name':'Placeholder',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    1:{
        'name':'50mm mortar',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    2:{
        'name':'80mm mortar',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    3:{
        'name':'120mm mortar',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    4:{
        'name':'20mmL55',
        'stats':[
        {
            'type':'HE',
            'effect':'-',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    5:{
        'name':'37mmL98',
        'stats':[
        {
            'type':'HE',
            'effect':'-',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    6:{
        'name':'28mmPzB41',
        'stats':[
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    7:{
        'name':'37mmL43 (PaK36)',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    8:{
        'name':'50mmL42',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    9:{
        'name':'50mmL60 (PaK38)',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    10:{
        'name':'75mm (IG18)',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    11:{
        'name':'75mmL24',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    12:{
        'name':'75mmL36',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    13:{
        'name':'75mmL43',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','','']
        }
        ]
    },
    14:{
        'name':'75mmL46 (PaK40)',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','','']
        }
        ]
    },
    15:{
        'name':'75mmL48',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','','']
        }
        ]
    },
    16:{
        'name':'75mmL70',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','','']
        }
        ]
    },
    17:{
        'name':'76.2mmL42',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    18:{
        'name':'76.2mmL54',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    19:{
        'name':'88mmL56',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','','']
        }
        ]
    },
    20:{
        'name':'88mmL71 (PaK43)',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','','']
        }
        ]
    },
    21:{
        'name':'100mmK18',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','','']
        }
        ]
    },
    22:{
        'name':'105mmL28',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    23:{
        'name':'105mmL42',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    24:{
        'name':'122mmL23',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    25:{
        'name':'150mmL12 (SiG33)',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    26:{
        'name':'150mmL30',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    27:{
        'name':'150mm Nebelwerfer',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    28:{
        'name':'170mmL50',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    29:{
        'name':'210mmL31',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    30:{
        'name':'210mm Nebelwerfer',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    31:{
        'name':'280mm Nebelwerfer',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    32:{
        'name':'Flamethrower',
        'stats':[
        {
            'type':'Flame'
        }
        ]
    },
    34:{
        'name':'82mm mortar',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    35:{
        'name':'20mm',
        'stats':[
        {
            'type':'HE',
            'effect':'-',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    36:{
        'name':'37mmL60',
        'stats':[
        {
            'type':'HE',
            'effect':'-',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    37:{
        'name':'37mmL45',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    38:{
        'name':'45mmL46',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    39:{
        'name':'45mmL66',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    40:{
        'name':'57mmL73 (Zis2)',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    41:{
        'name':'76.2mmL16',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    42:{
        'name':'76.2mmL26',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    43:{
        'name':'76.2mmL30',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    44:{
        'name':'76.2mmL42',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    45:{
        'name':'76.2mmL54 (Zis3)',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    46:{
        'name':'85mmL54',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    47:{
        'name':'122mmL23',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    48:{
        'name':'122mmL46',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    49:{
        'name':'152mmL24',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    50:{
        'name':'152mmL29',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    51:{
        'name':'132mm Rocket',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    52:{
        'name':'203mmL49',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    53:{
        'name':'PTRD AT Rifle',
        'stats':[
        {
            'type':'AP',
            'effect':'-',
            'strength':[2,1]
        }
        ]
    },
    54:{
        'name':'82mm Rocket',
        'stats':[
        {
            'type':'HE',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    55:{
        'name':'PTAB Bomb',
        'stats':[
        {
            'type':'HE',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    56:{
        'name':'37mmL53',
        'stats':[
        {
            'type':'HE',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    57:{
        'name':'75mmL30',
        'stats':[
        {
            'type':'HE',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    58:{
        'name':'2 pdr',
        'stats':[
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    59:{
        'name':'6 pdr',
        'stats':[
        {
            'type':'HE',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    60:{
        'name':'2\" mortar',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    61:{
        'name':'3\" mortar',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    62:{
        'name':'4.2\" mortar',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','','']
        }
        ]
    },
    63:{
        'name':'40mmL60 Bofors',
        'stats':[
        {
            'type':'HE',
            'effect':'',
            'strength':['','','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    64:{
        'name':'37mmL53',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    65:{
        'name':'75mmL16',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    66:{
        'name':'75mmL30',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    67:{
        'name':'3\" naval gun',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    68:{
        'name':'75mmL40',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    69:{
        'name':'76mmL53',
        'stats':[
        {
            'type':'HE [L]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    70:{
        'name':'17 pdr',
        'stats':[
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','','']
        }
        ]
    },
    71:{
        'name':'2 pdr (Littlejohn)',
        'stats':[
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    72:{
        'name':'95mmL20',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    73:{
        'name':'25 pdr',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['','','','','']
        }
        ]
    },
    74:{
        'name':'3.5" naval gun',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    75:{
        'name':'105mmL16',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    76:{
        'name':'105mmL22',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    77:{
        'name':'4.5"',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    78:{
        'name':'4.7" naval gun',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    79:{
        'name':'5" naval gun',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    80:{
        'name':'5.5"',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    81:{
        'name':'6" naval gun',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    82:{
        'name':'155mmL13',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    83:{
        'name':'155mmL36',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    84:{
        'name':'155mmL45',
        'stats':[
        {
            'type':'HE [M]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    85:{
        'name':'7.2"',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    86:{
        'name':'8" (230mmL50)',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    87:{
        'name':'210mmL31',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    88:{
        'name':'240mmL30',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    89:{
        'name':'280mm Petard',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    90:{
        'name':'14" naval gun',
        'stats':[
        {
            'type':'HE [H]',
            'effect':'',
            'strength':['','','','','']
        }
        ]
    },
    91:{
        'name':'PIAT',
        'stats':[
        {
            'type':'AP',
            'effect':'',
            'strength':['']
        }
        ]
    },
    92:{
        'name':'Bazooka',
        'stats':[
        {
            'type':'HE [VL]',
            'effect':'',
            'strength':['']
        },
        {
            'type':'AP',
            'effect':'-',
            'strength':['']
        }
        ]
    },
    93:{
        'name':'60lb Rocket',
        'stats':[
        {
            'type':'HE',
            'effect':'',
            'strength':['','','']
        }
        ]
    },
    94:{
        'name':'5" Rocket',
        'stats':[
        {
            'type':'HE',
            'effect':'',
            'strength':['','','']
        }
        ]
    }
};

// IDs are manually generated and must remain static as they will be used for saving
// lists
var forces = [
    {
        "id":1,
        "name":"Panzer Division Battlegroup",
        "infantry":[
            [[1,0],[0,1]],
            [[0,1],[0,2]],
            [[0,2],[0,3]],
            [[0,3],[0,6]]
        ],
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
                                {"id":1,"text":"SdKfz 251/3","cost":0,"v":39},
                                {"id":2,"text":"SdKfz 251/6","cost":0,"v":39},
                                {"id":3,"text":"Panzer II/F","cost":0,"v":13},
                                {"id":4,"text":"Panzer III/J","cost":6,"v":1},
                                {"id":5,"text":"Panzer IV/G","cost":26,"v":8},
                                {"id":6,"text":"Panzer IV/H","cost":32,"v":9},
                                {"id":7,"text":"Tiger","cost":61,"v":11}
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
                                {"id":1,"text":"Kübelwagen","cost":0,"v":54},
                                {"id":2,"text":"Medium Truck","cost":2,"v":58},
                                {"id":3,"text":"SdKfz 250/3","cost":12,"v":44},
                                {"id":4,"text":"SdKfz 251/3","cost":12,"v":39}
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
                                {"id":1,"text":"Medium Radio Truck","cost":0,"v":58},
                                {"id":2,"text":"SdKfz 251/3 Radio H.T.","cost":6,"v":39},
                                {"id":3,"text":"SdKfz 250/3 Radio H.T.","cost":6,"v":44},
                                {"id":4,"text":"SdKfz 236","cost":6,"v":36},
                                {"id":5,"text":"SdKfz 223","cost":6,"v":33},
                                {"id":6,"text":"Panzer III M","cost":42, "br":2,"v":3},
                                {"id":7,"text":"Panzer IV H","cost":50, "br":2,"v":9}
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
                                {"id":1,"text":"Kübelwagen","cost":0,"v":54},
                                {"id":2,"text":"Medium Truck","cost":2,"v":58},
                                {"id":3,"text":"SdKfz 250/3","cost":12,"v":44},
                                {"id":4,"text":"SdKfz 251/3","cost":12,"v":39}
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
                    "v":50,
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
                        "p":1,
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
                                            {"id":2,"text":"Medium truck","cost":4,"v":58}
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
                                            {"id":2,"text":"Medium truck","cost":4,"v":58}
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
                                "w":1,
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
                                "w":2,
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
                                            {"id":1,"text":"50mm PaK38","cost":0,"w":9},
                                            {"id":2,"text":"75mm PaK40","cost":14,"w":14}
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
                                            {"id":2,"text":"Medium truck","cost":4,"v":58},
                                            {"id":3,"text":"Opel Maultier","cost":8,"v":59},
                                            {"id":4,"text":"SdKfz 6 half track","cost":8,"v":64},
                                            {"id":5,"text":"SdKfz 251/1","cost":16,"v":37}
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
                        "p":1,
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
                                            {"id":1,"text":"SdKfz 251/16","cost":0,"v":42}
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
                                            {"id":1,"text":"SdKfz 251/1","cost":0,"v":37}
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
                                            {"id":1,"text":"50mm PaK38","cost":0,"w":9},
                                            {"id":2,"text":"75mm PaK40","cost":14,"w":14}
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
                                            {"id":2,"text":"Medium truck","cost":4,"v":58},
                                            {"id":3,"text":"Opel Maultier","cost":8,"v":59},
                                            {"id":4,"text":"SdKfz 6 half track","cost":8,"v":64},
                                            {"id":5,"text":"SdKfz 251/1","cost":16,"v":37}
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
                                            {"id":1,"text":"SdkFz 251/9 Halftrack","cost":0,"v":40},
                                            {"id":2,"text":"Grille H","cost":16, "br":1,"v":27},
                                            {"id":3,"text":"Grille K","cost":16, "br":1,"v":28}
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
                                        {"id":2,"text":"Medium Truck","cost":4,"v":58},
                                        {"id":3,"text":"SdKfz 10 half track", "cost":8,"v":62},
                                        {"id":4,"text":"SdKfz 11 half track", "cost":8,"v":63}
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
                        "p":1,
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
                                            {"id":1,"text":"SdKfz 251/10","cost":0,"v":41}
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
                                            {"id":1,"text":"SdKfz 251/1","cost":0,"v":37}
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
                                "w":1,
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
                                "w":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"80mm mortar","cost":0,"w":2},
                                            {"id":2,"text":"SdKfz 251/2 (80mm mortar)","cost":6,"v":38}
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
                                            {"id":1,"text":"50mm PaK38","cost":0,"w":9},
                                            {"id":2,"text":"75mm PaK40","cost":14,"w":14}
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
                                            {"id":2,"text":"Medium truck","cost":4,"v":58},
                                            {"id":3,"text":"Opel Maultier","cost":8,"v":59},
                                            {"id":4,"text":"SdKfz 6 half track","cost":8,"v":64},
                                            {"id":5,"text":"SdKfz 251/1","cost":16,"v":37}
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
                                            {"id":1,"text":"SdkFz 251/9 Halftrack","cost":0,"v":40},
                                            {"id":2,"text":"Grille H","cost":16, "br":1,"v":27},
                                            {"id":3,"text":"Grille K","cost":16, "br":1,"v":28}
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
                                        {"id":2,"text":"Medium Truck","cost":4,"v":58},
                                        {"id":3,"text":"SdKfz 10 half track", "cost":8,"v":62},
                                        {"id":4,"text":"SdKfz 11 half track", "cost":8,"v":63}
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
                        "s":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium truck","cost":4,"v":58}
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
                        "s":1,
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
                        "s":1,
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
                                    {"id":1,"text":"3 Panzer III Js","cost":0,"v":1},
                                    {"id":2,"text":"Upgrade to Ausf. Ls","cost":20,"v":2},
                                    {"id":3,"text":"Upgrade to Ausf. Ms","cost":25,"v":3}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Panzer IV Squadron",
                        "cost":135,
                        "multiplier":3,
                        "vc":3,
                        "br":9,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Panzer IV Gs","cost":0,"v":8},
                                    {"id":2,"text":"Upgrade to Ausf. Hs","cost":15, "restricted":true,"v":9}
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
                        "v":10,
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
                        "vc":3,
                        "br":9,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Stug III Fs","cost":0,"v":16},
                                    {"id":2,"text":"Upgrade to Ausf. Gs","cost":20,"v":18}
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
                                    {"id":1,"text":"Panzer III J","cost":0, "restricted":true,"v":1},
                                    {"id":2,"text":"Panzer III L","cost":9,"v":2},
                                    {"id":3,"text":"Panzer III M","cost":10,"v":3},
                                    {"id":4,"text":"Panzer III N","cost":8, "restricted":true,"v":4}
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
                                    {"id":1,"text":"Panzer IV E","cost":0, "restricted":true,"v":7},
                                    {"id":2,"text":"Panzer IV F1","cost":0, "restricted":true,"v":7},
                                    {"id":3,"text":"Panzer IV G","cost":6,"v":8},
                                    {"id":4,"text":"Panzer IV H","cost":12, "restricted":true,"v":9}
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
                        "v":10,
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
                                    {"id":1,"text":"StuG III A-E","cost":0, "restricted":true,"v":15},
                                    {"id":2,"text":"StuG III F","cost":16,"v":16},
                                    {"id":3,"text":"StuG III G","cost":24,"v":18}
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
                        "v":13,
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
                                    {"id":1,"text":"Kübelwagen","cost":0,"v":54},
                                    {"id":2,"text":"SdKfz 250/12 (as SdKfz 250/3)","cost":16,"v":44},
                                    {"id":3,"text":"SdKfz 251/18 (as SdKfz 251/3)","cost":16,"v":39}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Aerial Artillery Observer",
                        "cost":66,
                        "br":3,
                        "unique":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 Fieseler Storch","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Light Panzer Artillery Battery",
                        "cost":86,
                        "br":4,
                        "v":29,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 Wespe","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Medium Panzer Artillery Battery",
                        "cost":136,
                        "br":4,
                        "v":30,
                        "restricted":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 Hummel","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Nebelwerfer Artillery Battery",
                        "cost":86,
                        "br":2,
                        "restricted":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 SdKfz 251 Wurfrahmen 40","cost":0}
                                ]
                            }
                        ]
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
                                    {"id":1,"text":"Wespe","cost":0,"v":29},
                                    {"id":2,"text":"Hummel","cost":25, "restricted":true,"v":30},
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
                                    {"id":1,"text":"2 105mm howitzer","cost":0,'w':22},
                                    {"id":2,"text":"2 150mm howitzer","cost":45},
                                    {"id":3,"text":"2 100mm cannon","cost":36,'w':21},
                                    {"id":4,"text":"2 170mm cannon","cost":108,'w':28},
                                    {"id":5,"text":"2 150mm Nebelwerfer","cost":45,'w':27},
                                    {"id":6,"text":"2 210mm Nebelwerfer","cost":118,'w':30},
                                    {"id":7,"text":"2 280mm Nebelwerfer","cost":162,'w':31}
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
                                    {"id":1,"text":"1 Panzer II F","cost":0,"v":13},
                                    {"id":2,"text":"1 Panzer III H","cost":0,"v":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":9,
                        "name":"Heavy Mortar Team",
                        "cost":29,
                        "br":1,
                        "w":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"120mm mortar & 3 crew","cost":0}
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
                                "name":"Mount",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck","cost":0,"v":58},
                                    {"id":3,"text":"Heavy Car","cost":0,"v":56}
                                ]
                            }
                        ]
                    },
                    {
                        "id":10,
                        "name":"105mm Howitzer",
                        "cost":36,
                        "br":2,
                        "w":22,
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
                                    {"id":2,"text":"Medium Truck","cost":4,"v":58},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8,"v":64}
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
                                    {"id":2,"text":"Heavy Truck","cost":6,"v":61},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8,"v":64}
                                ]
                            }
                        ]
                    },
                    {
                        "id":12,
                        "name":"100mm Cannon",
                        "cost":50,
                        "br":2,
                        "w":21,
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
                                    {"id":2,"text":"Medium Truck","cost":6,"v":58},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8,"v":64}
                                ]
                            }
                        ]
                    },
                    {
                        "id":13,
                        "name":"150mm Infantry Gun",
                        "cost":54,
                        "br":2,
                        "w":12,
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
                                    {"id":2,"text":"Medium Truck","cost":6,"v":58},
                                    {"id":3,"text":"SdKfz 6 halftrack","cost":8,"v":64}
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
                                    {"id":1,"text":"2 80mm mortars","cost":0,"w":2},
                                    {"id":2,"text":"2 120mm mortars","cost":20,"w":3}
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
                                {"id":1,"text":"SdKfz 250/10","cost":0,"v":48},
                                {"id":2,"text":"SdKfz 250/11","cost":0,"v":49}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Panzer Grenadier Foot Patrol",
                    "cost":36,
                    "br":3,
                    "s":1,
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
                                {"id":1,"text":"SdKfz 222","cost":0,"v":32},
                                {"id":2,"text":"SdKfz 231 or 232","cost":4,"v":34},
                                {"id":3,"text":"SdKfz 233","cost":14,"v":35},
                                {"id":4,"text":"SdKfz 250/7","cost":10, restricted:"true","v":45},
                                {"id":5,"text":"SdKfz 250/8","cost":4, restricted:"true","v":46},
                                {"id":6,"text":"SdKfz 250/9","cost":4, restricted:"true","v":47}
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
                                {"id":1,"text":"Heavy Truck & 6 men","cost":0,"v":61},
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
                    "v":61,
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
                                {"id":1,"text":"1 Flammpanzer III Ausf. M","cost":0,"v":5}
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
                                {"id":1,"text":"SdKfz 9 'Famo'","cost":0,"v":67},
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
                                {"id":1,"text":"StuG III Ausf. F","cost":0,"v":16},
                                {"id":2,"text":"Panzer III Ausf. L","cost":0,"v":2}
                                ]
                        },
                        {
                            "name":"Borgwards",
                            "choices":[
                                {"id":1,"text":"1 Borgward B-IV","cost":0,"v":14},
                                {"id":2,"text":"2 Borgward B-IV","cost":10, "br":1,"v":14},
                                {"id":3,"text":"3 Borgward B-IV","cost":20, "br":2,"v":14},
                                {"id":4,"text":"4 Borgward B-IV","cost":30, "br":3,"v":14}
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
                    "v":58,
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
                            {"id":1,"text":"Kübelwagen Ambulance","cost":0,"v":54},
                            {"id":2,"text":"Ambulance medium truck","cost":2,"v":58},
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
                    "w":20,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"88mm AA/AT with 4 crew","cost":0}
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
                                {"id":2,"text":"SdkFz 7","cost":8,"v":65}
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
                                {"id":1,"text":"Marder II","cost":0,"v":20},
                                {"id":2,"text":"Marder III H","cost":4,"v":21},
                                {"id":3,"text":"Marder III M","cost":-2,"v":22},
                                {"id":4,"text":"Marder 38t (36r)","cost":4,"v":23}
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
                    "v":11,
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
                                {"id":1,"text":"1 Ferdinand","cost":0, "restricted":true,"v":24},
                                {"id":2,"text":"1 Hornisse","cost":-80, "restricted":true,"br":-2,"v":25}
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
                                {"id":1,"text":"1 Panzer T-34r","cost":0,"v":12}
                            ]
                        }
                    ]
                },
                {
                    "id":6,
                    "name":"Anti-Aircraft Vehicle",
                    "cost":16,
                    "br":1,
                    "v":62,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                            {"id":1,"text":"SdKfz 10 with 20mm","cost":0, "restricted":true},
                            {"id":2,"text":"SdKfz with 37mm","cost":4, "restricted":true},
                            {"id":3,"text":"SdKfz with 20mm Flakvierling","cost":20, "restricted":true}
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
                                {"id":1,"text":"StuH 42 F","cost":0, "restricted":true,"v":17},
                                {"id":2,"text":"StuH 42 G","cost":6, "restricted":true,"v":19},
                                {"id":3,"text":"Brummbär","cost":20, "restricted":true, "br":1,"v":26}
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
                    "v":11,
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
                "w":22,
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
        "name":"German Infantry Division Battlegroup (Kursk)",
        "infantry":[
            [[1,0],[0,1]],
            [[0,1],[0,2]],
            [[0,2],[0,3]],
            [[0,3],[0,6]]
        ],
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
                                {"id":1,"text":"Kübelwagen","cost":0,"v":54},
                                {"id":2,"text":"Heavy Car","cost":0},
                                {"id":3,"text":"Schwimmwagen","cost":2,"v":55}
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
                                {"id":1,"text":"Kübelwagen","cost":0,"v":54},
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
                        "p":1,
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
                                "w":1,
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
                                "w":2,
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
                                            {"id":1,"text":"37mm PaK36","cost":0,"w":7},
                                            {"id":2,"text":"50mm PaK38","cost":8,"w":9},
                                            {"id":3,"text":"75mm PaK97/38","cost":12},
                                            {"id":4,"text":"76.2mm PaK36(r)","cost":14},
                                            {"id":5,"text":"75mm PaK40","cost":22,"w":14}
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
                        "p":1,
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
                                "w":1,
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
                                            {"id":1,"text":"37mm PaK36","cost":0,"w":7},
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
                                "w":2,
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
                        "s":1,
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
                        "s":1,
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
                        "vc":3,
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
                                    {"id":1,"text":"Kübelwagen","cost":0,"v":54}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"105mm Howitzer",
                        "cost":36,
                        "br":2,
                        "w":22,
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
                                    {"id":2,"text":"Heavy Truck","cost":6,"v":61},
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
                        "w":21,
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
                        "w":12,
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
                        "unique":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 Fieseler Storch","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":7,
                        "name":"Heavy Mortar Team",
                        "cost":29,
                        "br":1,
                        "w":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"120mm mortar & 3 crew","cost":0}
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
                                    {"id":1,"text":"2 105mm howitzer","cost":0,'w':22},
                                    {"id":2,"text":"2 150mm howitzer","cost":45},
                                    {"id":3,"text":"2 100mm cannon","cost":36,'w':21},
                                    {"id":4,"text":"2 170mm cannon","cost":108,'w':28},
                                    {"id":5,"text":"2 150mm Nebelwerfer","cost":45,'w':27},
                                    {"id":6,"text":"2 210mm Nebelwerfer","cost":118,'w':30},
                                    {"id":7,"text":"2 280mm Nebelwerfer","cost":162,'w':31}
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
                                    {"id":1,"text":"2 80mm mortars","cost":0,"w":2},
                                    {"id":2,"text":"2 120mm mortars","cost":18,"w":3}
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
                        "name":"Off-table 88 Anti-Tank shot",
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
                    "v":67,
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
                    "v":61,
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
                    "v":61,
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
                            {"id":1,"text":"Kübelwagen Ambulance","cost":0,"v":54},
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
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"88mm AA/AT with 4 crew","cost":0}
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
                            {"id":3,"text":"SdKfz with 20mm Flakvierling","cost":20}
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
                "w":22,
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
        "name":"Russian Tank Corps Battlegroup",
        "infantry":[
            [[1,0],[0,2]],
            [[0,1],[0,4]],
            [[0,2],[0,6]],
            [[0,3],[0,9]]
        ],
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
                                {"id":1,"text":"Gaz Jeep","cost":0,"v":90},
                                {"id":2,"text":"White Scout car","cost":18,"v":84},
                                {"id":3,"text":"T-34/43","cost":27,"v":75}
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
                                {"id":1,"text":"Gaz Jeep","cost":0,"v":90},
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
                        "p":1,
                        "options":[
                            {
                                "name":"Weapon",
                                "choices":[
                                    {"id":1,"text":"Rifles","cost":0, "np":true},
                                    {"id":2,"text":"Replace rifles with SMGs","cost":0}
                                ]
                            }
                        ],
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
                                "w":1,
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
                                            {"id":1,"text":"45mmL46","cost":0,"w":38},
                                            {"id":2,"text":"45mmL66","cost":8,"w":39}
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
                        "s":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium truck","cost":4}
                                ]
                            },
                            {
                                "name":"Weapon",
                                "choices":[
                                    {"id":1,"text":"Rifles","cost":0, "np":true},
                                    {"id":2,"text":"Replace rifles with SMGs","cost":0}
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
                        "s":1,
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
                        "v":75,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"10 T-34/43s","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"T-34 Platoon",
                        "cost":100,
                        "multiplier":2,
                        "br":9,
                        "v":75,
                        "vc":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 T-34/43s","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Light Tank Platoon",
                        "cost":50,
                        "multiplier":2,
                        "br":6,
                        "vc":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 T-60s","cost":0,"v":71},
                                    {"id":2,"text":"3 T-70s","cost":15,"v":72}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"SU-76 Battery",
                        "cost":75,
                        "multiplier":2,
                        "br":6,
                        "restricted":true,
                        "v":76,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 SU-76s","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"T-34",
                        "cost":40,
                        "br":3,
                        "v":75
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
                                    {"id":1,"text":"T-60","cost":0,"v":71},
                                    {"id":2,"text":"T-70","cost":5,"v":72}
                                ]
                            }
                        ]
                    },
                    {
                        "id":7,
                        "name":"SU-76",
                        "cost":30,
                        "v":76,
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
                                    {"id":1,"text":"Gaz Jeep","cost":0,"v":90},
                                    {"id":2,"text":"Bren Carrier","cost":2,"v":82}
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
                                    {"id":1,"text":"2 BM-13 Katyusha","cost":0,"w":51,"v":91},
                                    {"id":2,"text":"2 BM-8-13 Katyusha","cost":20,"v":79}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Off-Table Artillery Fire",
                        "cost":125,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 BM-13 Katyusha","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Mortar Battery",
                        "cost":44,
                        "br":2,
                        "w":34,
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
                        "w":3,
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
                                    {"id":1,"text":"2 82mm mortars","cost":0,"w":34},
                                    {"id":2,"text":"2 120mm mortars","cost":18,"w":3}
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
                        "br":3,
                        "v":75
                    },
                    {
                        "id":8,
                        "name":"Dug-in T-34 Platoon",
                        "cost":125,
                        "v":75,
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
                                {"id":1,"text":"White Scout Car","cost":0,"v":84},
                                {"id":2,"text":"M5 halftrack","cost":4,"v":83}
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
                                {"id":1,"text":"T-60","cost":0,"v":71},
                                {"id":2,"text":"T-70","cost":5,"v":72},
                                {"id":3,"text":"Valentine III","cost":14,"v":87}
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
                                {"id":1,"text":"BA-10","cost":0,"v":80},
                                {"id":2,"text":"BA-64","cost":-6,"v":81},
                                {"id":3,"text":"M3A1 White Scout Car","cost":-6,"v":84}
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
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Repair Truck","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Sapper Squad",
                    "cost":21,
                    "br":2,
                    "s":1,
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
                                {"id":2,"text":"2 Horse drawn wagons","cost":4},
                                {"id":3,"text":"3 Horse drawn wagons","cost":8}
                            ]
                        },
                        {
                            "name":"Medium trucks",
                            "choices":[
                                {"id":1,"text":"---","cost":0},
                                {"id":2,"text":"Replace 1 wagon with truck","cost":4,"v":91},
                                {"id":3,"text":"Replace 2 wagons with trucks","cost":8,"v":91},
                                {"id":4,"text":"Replace 3 wagons with trucks","cost":12,"v":91}
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
                            {"id":3,"text":"M5 halftrack Ambulance","cost":6,"v":83}
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
                                {"id":1,"text":"Churchill III or IV","cost":0,"v":88},
                                {"id":2,"text":"M3 Grant","cost":-4,"v":85},
                                {"id":3,"text":"Matilda II","cost":-20,"v":86},
                                {"id":4,"text":"Valentine III","cost":-14, "br":-1,"v":87},
                                {"id":5,"text":"M5 Stuart","cost":-10, "br":-1,"v":89}
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
                                {"id":1,"text":"1 SU-122","cost":0,"v":77},
                                {"id":2,"text":"1 SU-152","cost":4,"v":78}
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
                                {"id":1,"text":"76.2mm L54 Zis 3","cost":0,"w":45},
                                {"id":2,"text":"57mm L73 Zis 2","cost":10,"w":40}
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
                                {"id":2,"text":"Medium truck","cost":4,"v":91},
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
                "w":47,
                "cost":20,
                "br":0
            },
            {
                "id":5,
                "name":"Timed 152mm Barrage",
                "w":49,
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
        "name":"Russian Rifle Division Battlegroup",
        "infantry":[
            [[1,0],[0,2]],
            [[0,1],[0,4]],
            [[0,2],[0,6]],
            [[0,3],[0,9]]
        ],
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
                                {"id":1,"text":"Gaz Jeep","cost":0,"v":90},
                                {"id":2,"text":"White Scout car","cost":18,"v":84}
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
                                {"id":1,"text":"Gaz Jeep","cost":0,"v":90},
                                {"id":2,"text":"Medium Truck","cost":2,"v":91}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Motorcycle Dispatch Rider",
                    "br":0,
                    "cost":12,
                    "v":50
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
                                {"id":1,"text":"Medium Radio Truck","cost":0,"v":91},
                                {"id":2,"text":"Radio Van","cost":0,"v":92}
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
                        "p":1,
                        "options":[
                            {
                                "name":"Weapon",
                                "choices":[
                                    {"id":1,"text":"Rifles","cost":0, "np":true},
                                    {"id":2,"text":"Replace rifles with SMGs","cost":0}
                                ]
                            }
                        ],
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
                                "w":1,
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
                                            {"id":1,"text":"45mmL46","cost":0,"w":38},
                                            {"id":2,"text":"45mmL66","cost":8,"w":39}
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
                                            {"id":2,"text":"Medium truck","cost":4,"v":91}
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
                                            {"id":2,"text":"Horse and limber","cost":2,"v":93}
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
                        "s":1,
                        "options":[
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            },
                            {
                                "name":"Weapon",
                                "choices":[
                                    {"id":1,"text":"Rifles","cost":0, "np":true},
                                    {"id":2,"text":"Replace rifles with SMGs","cost":0}
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
                                "p":1,
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
                                        "w":1,
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
                                                    {"id":2,"text":"Medium truck","cost":4,"v":91}
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
                                                    {"id":2,"text":"Horse and limber","cost":2,"v":93}
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
                        "br":9,
                        "v":75,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 T-34/43s","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"T-34",
                        "cost":40,
                        "v":75,
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
                                    {"id":1,"text":"3 KV-1Ss","cost":0,"v":70},
                                    {"id":2,"text":"3 KV-1Es","cost":9,"v":73}
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
                                    {"id":1,"text":"KV-1S","cost":0,"v":70},
                                    {"id":2,"text":"KV-1E","cost":3,"v":73}
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
                                    {"id":1,"text":"3 Valentine IIIs","cost":0,"v":87},
                                    {"id":2,"text":"3 M3 Stuarts","cost":6,"v":89}
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
                                    {"id":1,"text":"3 Matilda IIs","cost":0,"v":86},
                                    {"id":2,"text":"3 M3 Grants","cost":40,"v":85},
                                    {"id":3,"text":"3 Churchill III or IVs","cost":56,"v":88}
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
                                    {"id":1,"text":"Churchill III or IV","cost":0,"v":88},
                                    {"id":2,"text":"M3 Grant","cost":-4,"v":85},
                                    {"id":3,"text":"Matilda II","cost":-20,"v":86},
                                    {"id":4,"text":"Valentine III","cost":-14,"br":-1,"v":87},
                                    {"id":5,"text":"M3 Stuart","cost":-10,"br":-1,"v":89}
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
                                    {"id":1,"text":"Gaz Jeep","cost":0,"v":90},
                                    {"id":2,"text":"Bren Carrier","cost":2,"v":82}
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
                                    {"id":1,"text":"2 BM-13 Katyusha","cost":0,"w":51},
                                    {"id":2,"text":"2 BM-8-13 Katyusha","cost":20,"v":79}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Field Artillery Battery",
                        "cost":55,
                        "br":4,
                        "w":45,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Two 76.2mm L54 Zis 3s","cost":0}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"No tow","cost":0},
                                    {"id":2,"text":"1 horse & limber tow","cost":2,"v":93},
                                    {"id":3,"text":"2 horse & limber tows","cost":4,"v":93}
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
                                    {"id":2,"text":"2 76.2mm Zis 3","cost":-55},
                                    {"id":3,"text":"2 122mm howitzers","cost":-9,'w':47},
                                    {"id":4,"text":"2 152mm howitzers","cost":0,"w":49}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Mortar Battery",
                        "cost":44,
                        "br":2,
                        "w":34,
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
                        "w":3,
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
                                    {"id":1,"text":"3 82mm mortars","cost":0,"w":34},
                                    {"id":2,"text":"3 120mm mortars","cost":28,"w":3}
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
                                    {"id":1,"text":"2 122mmL23 howitzers","cost":0,"w":47},
                                    {"id":2,"text":"2 152mmL24 howitzers","cost":8,"w":49},
                                    {"id":3,"text":"2 122mmL46 cannons","cost":36,"w":48}
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
                                    {"id":2,"text":"1 horse & limber tow","cost":2,"v":93},
                                    {"id":3,"text":"2 horse & limber tows","cost":4,"v":93}
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
                        "v":75,
                        "br":3
                    },
                    {
                        "id":19,
                        "name":"Dug-in T-34 Platoon",
                        "cost":125,
                        "v":75,
                        "br":9
                    },
                    {
                        "id":20,
                        "name":"Dug-in KV-1E",
                        "cost":69,
                        "v":73,
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
                                {"id":1,"text":"BA-10","cost":0,"v":80}
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
                    "v":50,
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
                    "s":1,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Medium Truck","cost":4,"v":91}
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
                    "v":61,
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
                    "v":61,
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
                                {"id":1,"text":"1 Horse drawn wagon","cost":0,"v":94},
                                {"id":2,"text":"2 Horse drawn wagons","cost":4,"v":94},
                                {"id":3,"text":"3 Horse drawn wagons","cost":8,"v":94}
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
                            {"id":1,"text":"Jeep Ambulance","cost":0,"v":90},
                            {"id":2,"text":"Ambulance medium truck","cost":2,"v":91}
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
                    "v":74,
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
                                {"id":1,"text":"76.2mm L54 Zis 3","cost":0,"w":45},
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
                                {"id":2,"text":"Horse & limber","cost":2,"v":93},
                                {"id":3,"text":"Medium truck","cost":4,"v":91},
                                {"id":4,"text":"Komsomolyets tractor","cost":8,"v":95}
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
                                {"id":1,"text":"3 45mmL46 guns","cost":0,"w":38},
                                {"id":2,"text":"3 45mmL66 guns","cost":20,"w":39}
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
                                {"id":2,"text":"Horse & limber","cost":2,"v":93},
                                {"id":3,"text":"Medium truck","cost":4,"v":91}
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
                                {"id":2,"text":"Medium truck","cost":4,"v":91}
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
                "w":47,
                "cost":20,
                "br":0
            },
            {
                "id":5,
                "name":"Timed 152mm Barrage",
                "w":49,
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
        "id":5,
        "name":"British 6th Airborne Division",
        "infantry":[
            [[1,0],[0,1]],
            [[0,1],[0,2]],
            [[0,2],[0,3]],
            [[0,3],[0,6]]
        ],
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
                                {"id":1,"text":"Jeep","cost":0,"v":0},
                                {"id":2,"text":"White Scout car","cost":6,"v":84},
                                {"id":3,"text":"Tetrarch Tank with Littlejohn Adaptor","cost":16,"v":0}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Wire Team",
                    "br":0,
                    "cost":8
                },
                {
                    "id":3,
                    "name":"Forward Signals Unit",
                    "br":1,
                    "cost":16,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Jeep","cost":0,"v":0},
                                {"id":2,"text":"White Scout Car","cost":6,"v":0}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Comms Relay Team",
                    "br":0,
                    "cost":14
                }
                ]
            },
            {
                "id":2,
                "name":"Infantry Units",
                "allows":'[6,7,9]',
                "requires":false,
                "unique":true,
                "options":[
                    {
                        "name":"Troop Quality",
                        "choices":[
                            {"id":1,"text":"Veteran","cost":0},
                            {"id":2,"text":"Elite","cost":40, "br":4}
                        ]
                    }
                ],
                "entries":[
                    {
                        "id":1,
                        "name":"Airborne Infantry Platoon",
                        "cost":147,
                        "br":15,
                        'multiplier':4,
                        "sub_text":"Platoon Components",
                        "p":1,
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Section",
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
                                "name":"Rifle Sections",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    },
                                    {
                                        "name":"Bren Guns",
                                        "choices":[
                                            {"id":1,"text":"1 Bren Gun","cost":0},
                                            {"id":2,"text":"2 Bren Guns","cost":2}
                                        ]
                                    },
                                    {
                                        "name":"Weapon",
                                        "choices":[
                                            {"id":1,"text":"Rifles","cost":0, "np":true},
                                            {"id":2,"text":"Replace rifles with SMGs","cost":0}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"Light Mortar Team",
                                "cost":0,
                                "br":0,
                                "w":0,
                                "mandatory":true,
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
                                "name":"PIAT Team",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "unique":true
                            },
                            {
                                "id":5,
                                "name":"Combat Medic",
                                "cost":9,
                                "br":0
                            },
                            {
                                "id":6,
                                "name":"Heavy Machine Gun team",
                                "cost":25,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loaders/Jeep",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10},
                                            {"id":3,"text":"Mount in a Jeep","cost":2}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":7,
                                "name":"PIAT Team",
                                "cost":0,
                                "br":0,
                                "unique":true
                            },
                            {
                                "id":8,
                                "name":"Medium Mortar Team",
                                "cost":27,
                                "br":1,
                                "w":0,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loaders/Jeep",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10},
                                            {"id":3,"text":"Mount in a Jeep","cost":2}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":9,
                                "name":"Anti-tank Gun",
                                "cost":37,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"6 pdr","cost":0,"w":0}
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
                                            {"id":2,"text":"Jeep","cost":2,"v":0}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Airborne Infantry Section",
                        "cost":31,
                        "br":3,
                        "s":1,
                        "options":[
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            },
                            {
                                "name":"Weapon",
                                "choices":[
                                    {"id":1,"text":"Rifles","cost":0, "np":true},
                                    {"id":2,"text":"Replace rifles with SMGs","cost":0}
                                ]
                            },
                            {
                                "name":"Bren Guns",
                                "choices":[
                                    {"id":1,"text":"1 Bren Gun","cost":0},
                                    {"id":2,"text":"2 Bren Guns","cost":2}
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
                        "name":"Sherman Troop", 
                        "cost":130, 
                        "multiplier":3, 
                        "br":9, 
                        "v":101,
                        "officer":true,
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"3 M4A4","cost":0}, 
                                // greg need to allow 2 vehicle types for below firefly entry 
                                    {"id":1,"text":"2 M4A4, 1 Firefly","cost":16} 
                                ] 
                            }
                        ] 
                    }, 
                    { 
                        "id":2, 
                        "name":"Self-Propelled Anti-Tank Gun", 
                        "cost":34, 
                        "br":3, 
                        "restricted":true, 
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"M10 Wolverine","cost":0,"v":0}, 
                                    {"id":2,"text":"M10 Achilles","cost":20,"v":0} 
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
                                    {"id":1,"text":"Jeep","cost":0,"v":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Airborne Artillery Battery",
                        "cost":56,
                        "br":4,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 75mm howitzers","cost":0,"w":0}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"2 Jeep tows","cost":4}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Off-Table Artillery Fire",
                        "cost":70,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 75mmL16 howtizers","cost":0},
                                    {"id":2,"text":"2 25 pdrs","cost":20}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Off-Table Mortar Fire",
                        "cost":81,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 3\" mortars","cost":0,"w":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Aerial Artillery Observer",
                        "cost":66,
                        "br":3,
                        "unique":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 Auster III","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Towed Airborne Artillery Gun",
                        "cost":28,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"75mmL16 howitzer","cost":0,"w":0}
                                ]
                            },
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"No tow","cost":0},
                                    {"id":2,"text":"Jeep tow","cost":4,"v":0}
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
                        "name":"Trenches",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":7,
                        "name":"Sniper Hideout",
                        "cost":15,
                        "br":0
                    },
                    {
                        "id":8,
                        "name":"AT Gun Dug-out",
                        "cost":20,
                        "br":0
                    },
                    {
                        "id":9,
                        "name":"Minefield",
                        "cost":20,
                        "br":0
                    },
                    {
                        "id":10,
                        "name":"Artillery Observation Post",
                        "cost":26,
                        "br":1,
                        "unique":true
                    },
                    {
                        "id":11,
                        "name":"Booby Trapped Building",
                        "cost":25,
                        "br":0
                    },
                    {
                        "id":12,
                        "name":"Barbed Wire",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":13,
                        "name":"Improvised Road Block",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":14,
                        "name":"Anti-Tank Ditch/Embankment",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":15,
                        "name":"Off-table 17 pdr AT shot",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":16,
                        "name":"Go To It!",
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
                        "name":"Mounted Infantry Patrol",
                        "cost":24,
                        "br":3,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"Jeep","cost":0,"v":0},
                                    {"id":2,"text":"Bren Carrier","cost":4,"v":82}
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
                        "name":"Recon Platoon Command",
                        "cost":29,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"4 men and a jeep","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Infantry Foot Patrol",
                        "cost":41,
                        "br":3, // confirm - greg
                        "options":[
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            },
                            {
                                "name":"Bren Guns",
                                "choices":[
                                    {"id":1,"text":"1 Bren Gun","cost":0},
                                    {"id":2,"text":"2 Bren Guns","cost":2}
                                ]
                            },
                            {
                                "name":"Weapon",
                                "choices":[
                                    {"id":1,"text":"Rifles","cost":0, "np":true},
                                    {"id":2,"text":"Replace rifles with SMGs","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Armoured Recce Troop",
                        "cost":70,
                        "br":3, // greg confirm
                        "officer":true,
                        "unique":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Tetrarch (LJ adaptors)","cost":0,"v":0},
                                    {"id":2,"text":"1 Tetrarch CS, 2 Tetrarch (LJ adaptors)","cost":0,"v":0}, //greg confirm cost
                                    {"id":3,"text":"3 Cromwells", "cost":85,"v":111}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Armoured Recce Tank",
                        "cost":35,
                        "br":1, // greg confirm br
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Tetrarch (LJ adaptor)","cost":0,"v":0},
                                    {"id":2,"text":"Tetrarch CS","cost":0,"v":0}, //greg confirm cost
                                    {"id":3,"text":"Cromwells", "cost":28,"v":111} // greg confirm cost
                                ]
                            }
                        ]
                    },
                    {
                        "id":7,
                        "name":"Armoured Recce HQ",
                        "cost":45, //greg confirm cost
                        "br":2, //greg confirm br
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Tetrarch (LJ adaptor)","cost":0,"v":0}
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
                        "br":2, //greg confirm BR
                        "v":61,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Heavy Truck & 6 men","cost":0},
                                    {"id":2,"text":"2 Heavy Trucks & 12 men","cost":24}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Pontoon Bridging Unit",
                        "cost":14,
                        "br":1,
                        "v":58,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Medium Truck & 6 men","cost":0},
                                    {"id":2,"text":"2 Medium Trucks & 12 men","cost":14}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Armoured Bulldozer",
                        "cost":12,
                        "br":1,
                        "v":0,
                        "unique":true
                    },
                    {
                        "id":4,
                        "name":"Recovery Vehicle",
                        "cost":16,
                        "br":1,
                        "v":0,
                        "unique":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Scammel Recovery Truck","cost":0},
                                    {"id":2,"text":"Sherman ARV","cost":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Airborne Engineer Section",
                        "cost":41,
                        "br":3,
                        "restricted":true,
                        "s":1,
                        "options":[
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
                                    {"id":2,"text":"Elite","cost":10, "br":1}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Centaur",
                        "cost":46,
                        "br":3,
                        "v":0,
                        "restricted":true
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
                                    {"id":1,"text":"1 Jeep with a trailer","cost":0},
                                    {"id":2,"text":"2 Jeeps with trailers","cost":4},
                                    {"id":3,"text":"3 Jeeps with trailers","cost":8}
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
                                {"id":1,"text":"Jeep Ambulance","cost":0,"v":0},
                                {"id":2,"text":"Ambulance Carrier","cost":2}
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
                "restricted":true,
                "entries":[
                    {
                        "id":1,
                        "name":"Heavy Anti-Tank Gun",
                        "cost":53,
                        "br":3,
                        "restricted":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"17 pdr AT gun with 4 crew","cost":0,"w":0}
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
                                    {"id":2,"text":"Medium Truck tow","cost":4}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Towed 20mm Polsten AA Gun",
                        "cost":36,
                        "br":1, //greg - confirm
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
                                {"id":2,"text":"Jeep","cost":2}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Towed 40mm Bofurs AA Gun",
                        "cost":28, // greg - confirm
                        "br":1, //greg confirm
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
                                {"id":2,"text":"Medium Truck tow","cost":4}
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
                    "name":"Timed 75mmL16 Howitzer Barrage",
                    "w":0,
                    "cost":10,
                    "br":0
                },
                {
                    "id":5,
                    "name":"Timed 25 pdr Barrage",
                    "w":0,
                    "cost":20,
                    "br":0
                },
                {
                    "id":6,
                    "name":"Timed 5.5\" Barrage",
                    "cost":30,
                    "w":0,
                    "br":0
                },
                {
                    "id":7,
                    "name":"Timed 8\" Barrage",
                    "cost":40,
                    "w":0,
                    "br":0
                },
                {
                    "id":8,
                    "name":"Timed Spitfire Air Strike",
                    "cost":10,
                    "br":0
                },
                {
                    "id":9,
                    "name":"Timed Typhoon Air Strike",
                    "cost":20,
                    "w":0,
                    "br":0
                }
                ]
            }
        ]
    },
    {
        "id":6,
        "name":"British Amphibious Assault Battlegroup",
        "infantry":[
            [[1,0],[0,1]],
            [[0,1],[0,2]],
            [[0,2],[0,3]],
            [[0,3],[0,6]]
        ],
        "sections":[
            {
                "id":1, 
                "name":"Forward Headquarters Units",
                "allows":'[8,10]',
                "requires":false,
                "entries":[
                {
                    "id":1,
                    "name":"Landing Craft Support",
                    "cost":30,
                    "br":3,
                    "unique":true,
                    "restricted":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"1 LCS","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Beach Landing Party HQ",
                    "cost":26,
                    "br":3,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Jeep","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Shore & Beach Party Communications Team",
                    "br":1,
                    "cost":12
                },
                {
                    "id":4,
                    "name":"Air Liaison Shore Party",
                    "cost":16,
                    "br":1,
                    "unique":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Jeep","cost":0}
                            ]
                        }
                    ]
                }
                ]
            },
            {
                "id":2, 
                "name":"Infantry Units",
                "allows":'[6,7,9]',
                "requires":false,
                "entries":[
                {
                    "id":1,
                    "name":"Commando A. Boat Troop",
                    "cost":148,
                    "br":15,
                    "p":1,
                    'multiplier':4,
                    "options":[
                        {
                            "name":"Troop Quality",
                            "choices":[
                                {"id":1,"text":"Veteran","cost":0},
                                {"id":2,"text":"Elite","cost":32, "br":4}
                            ]
                        }
                    ],
                    "sub_text":"Troop Components",
                    "sub_units":[
                        {
                            "id":1,
                            "name":"Troop HQ",
                            "cost":0,
                            "br":0,
                            "mandatory":true,
                            "officer":true
                        },
                        {
                            "id":2,
                            "name":"Rifle Group",
                            "cost":0,
                            "br":0,
                            "mandatory":true,
                            "count":2
                        },
                        {
                            "id":3,
                            "name":"Bren Team",
                            "cost":0,
                            "count":2,
                            "br":0,
                            "mandatory":true,
                            "options":[
                                {
                                    "name":"MG",
                                    "choices":[
                                        {"id":1,"text":"Bren Gun","cost":0},
                                        {"id":2,"text":"2 Bren Guns","cost":2},
                                        {"id":2,"text":"K-Gun","cost":2},
                                        {"id":2,"text":"1 Bren Gun, 1 K-Gun","cost":4}
                                    ]
                                }
                            ]
                        },
                        {
                            "id":4,
                            "name":"Light Mortar Team",
                            "cost":0,
                            "br":0,
                            "w":0,
                            "count":2,
                            "mandatory":true
                        },
                        {
                            "id":5,
                            "name":"Sniper Team",
                            "cost":0,
                            "br":0,
                            "w":1,
                            "count":2,
                            "mandatory":true
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Assault Platoon",
                    "cost":90,
                    "br":9,
                    "p":1,
                    'multiplier':4,
                    "options":[
                        {
                            "name":"Troop Quality",
                            "choices":[
                                {"id":1,"text":"Regular","cost":0},
                                {"id":2,"text":"Veteran","cost":26, "br":4}
                            ]
                        }
                    ],
                    "sub_text":"Platoon Components",
                    "sub_units":[
                        {
                            "id":1,
                            "name":"Assault Platoon HQ",
                            "cost":0,
                            "br":0,
                            "mandatory":true,
                            "officer":true
                        },
                        {
                            "id":2,
                            "name":"Rifle Section",
                            "cost":0,
                            "br":0,
                            "mandatory":true,
                            "count":2
                        },
                        {
                            "id":3,
                            "name":"Light Mortar Team",
                            "cost":0,
                            "br":0,
                            "w":0,
                            "count":1,
                            "mandatory":true
                        },
                        {
                            "id":4,
                            "name":"Sniper Team",
                            "cost":0,
                            "br":0,
                            "count":1,
                            "mandatory":true
                        },
                        {
                            "id":5,
                            "name":"Combat Medic",
                            "cost":0,
                            "br":0,
                            "count":1,
                            "mandatory":true
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
                        "name":"DD Sherman Troop", 
                        "cost":135, 
                        "multiplier":3, 
                        "br":9,
                        "officer":true,
                        "v":106, 
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"3 DD Shermans","cost":0} 
                                ] 
                            } 
                        ] 
                    }, 
                    { 
                        "id":2, 
                        "name":"Sherman Crab Troop",
                        "cost":165, 
                        "br":11, 
                        "multiplier":3,
                        "officer":true, 
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"3 Sherman Crabs","cost":0,"v":107} 
                                ] 
                            } 
                        ] 
                    },
                    { 
                        "id":3, 
                        "name":"Centaur IV Troop",
                        "cost":170, 
                        "br":11, 
                        "multiplier":3,
                        "officer":true, 
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"3 Centaur IV","cost":0,"v":107} 
                                ] 
                            } 
                        ] 
                    },
                    { 
                        "id":4, 
                        "name":"DD Sherman",
                        "cost":52, 
                        "br":3
                    },
                    { 
                        "id":5, 
                        "name":"AVRE Squadron",
                        "cost":220, 
                        "br":11, //greg -confirm
                        "officer":true, 
                        "multiplier":3,
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"3 Churchill AVREs","cost":0,"v":0} 
                                ] 
                            } 
                        ] 
                    },
                    { 
                        "id":6, 
                        "name":"Engineer Churchill Troop",
                        "cost":147, 
                        "br":11, 
                        "multiplier":3,
                        "officer":true, 
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"1 Fascine, 1 Ark, 1 AVRE","cost":0,"v":107} 
                                ] 
                            } 
                        ] 
                    },
                    { 
                        "id":7, 
                        "name":"Beach Assault Tank Troop",
                        "cost":180, 
                        "br":11, 
                        "multiplier":3,
                        "officer":true, 
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"2 Churchill AVRE, 1 Sherman Crab","cost":0,"v":123},  //greg need to support N vehicles, and below
                                    {"id":2,"text":"1 Churchill AVRE, 1 Churchill Fascine, 1 Sherman Crab","cost":0,"v":123},  //greg need to support N vehicles, and below
                                    {"id":3,"text":"1 Churchill AVRE, 1 Churchill Bridgelayer, 1 Sherman Crab","cost":0,"v":123},  //greg need to support N vehicles, and below
                                    {"id":4,"text":"2 Churchill Bridgelayers, 1 Sherman Crab","cost":0,"v":123},  //greg need to support N vehicles, and below
                                    {"id":5,"text":"2 Churchill Fascines, 1 Sherman Crab","cost":0,"v":123}  //greg need to support N vehicles, and below
                                ] 
                            } 
                        ] 
                    },
                    { 
                        "id":8, 
                        "name":"Sherman Tank Squadron",
                        "cost":785, 
                        "br":44, 
                        "multiplier":10,
                        "restricted":true,
                        "officer":4,  // greg 4 officers
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"10 M4A4 Shermans, 3 Fireflies","cost":0,"v":102} //greg need multiple vehicles +v101
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
                        "name":"Shore Fire Control Party",
                        "cost":20,
                        "br":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"Jeep","cost":0,"v":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Priest",
                        "cost":60,
                        "br":3
                    },
                    {
                        "id":3,
                        "name":"Aerial Artillery Observer",
                        "cost":66, // greg confirm
                        "br":3, // greg confirm
                        "unique":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 Auster III","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Priest Battery",
                        "cost":144, // greg confirm
                        "br":6, // greg confirm
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 M7 Priests in a LCT","cost":0,"w":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Off-Table Naval Gun Fire",
                        "cost":80,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 3.5\" guns","cost":0},
                                    {"id":2,"text":"2 4.7\" guns","cost":28}, // greg confirm cost
                                    {"id":3,"text":"2 5\" guns","cost":46} // greg confirm cost
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
                        "name":"Beach Obstacle Demo Party",
                        "cost":85,
                        "br":8,
                        "p":1,
                        "unique":true,
                        "sub_text":"Party Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Demo Party Leader",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"Demo Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "count":3
                            },
                            {
                                "id":3,
                                "name":"Combat Medic",
                                "cost":0,
                                "br":0,
                                "count":1,
                                "mandatory":true
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Armoured Bulldozer",
                        "cost":12,
                        "br":1,
                        "v":0
                    },
                    {
                        "id":3,
                        "name":"Sherman Beach ARV",
                        "cost":22,
                        "br":2,
                        "v":110
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
                        "cost":10,
                        "br":1,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 DUKW","cost":0},
                                    {"id":2,"text":"2 DUKWs","cost":10,"br":1},
                                    {"id":3,"text":"3 DUKWs","cost":20,"br":2},
                                    {"id":4,"text":"4 DUKWs","cost":30,"br":3}
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
                        "name":"Combat Medic",
                        "cost":8,
                        "br":0
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
                        "name":"Support Boat Team",
                        "cost":131,
                        "br":7,
                        "multiplier":4,
                        "sub_text":"Team Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Team Leader",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"Medium Mortar Team",
                                "cost":0,
                                "br":0,
                                "count":1,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"3-man loader team","cost":0}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"Vickers MG Team",
                                "cost":0,
                                "br":0,
                                "count":2,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"3-man loader team","cost":0}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":4,
                                "name":"Demo Team",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "count":1
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Additional Landing Craft",
                        "cost":10,
                        "br":1,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"LCA","cost":0},
                                    {"id":2,"text":"LCM","cost":4},
                                    {"id":3,"text":"LCT","cost":20,"br":1},
                                    {"id":4,"text":"LCI","cost":30,"br":2} // greg confirm cost & br
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Landing Craft Gun",
                        "cost":112,
                        "br":4,
                        "restricted":true,
                        "unique":true
                    },
                    {
                        "id":4,
                        "name":"Landing Craft Flak",
                        "cost":142,
                        "br":4,
                        "restricted":true,
                        "unique":true
                    },
                    {
                        "id":5,
                        "name":"Landing Craft Rocket",
                        "cost":108,
                        "br":4,
                        "restricted":true,
                        "unique":true
                    },
                    {
                        "id":6,
                        "name":"Commando Support Team",
                        "cost":32,
                        "br":2,
                        "multiplier":2,
                        "options":[
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Veteran","cost":0},
                                    {"id":2,"text":"Elite","cost":9, "br":1}
                                ]
                            }
                        ],
                        "sub_text":"Team Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Team Leader",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"K-gun Team",
                                "cost":0,
                                "br":0,
                                "mandatory":true
                            },
                            {
                                "id":3,
                                "name":"K-gun Team",
                                "cost":15,
                                "br":1,
                                "count":3,
                                "unique":true
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
                        "cost":20,
                        "br":0,
                        "options":[
                            {
                                "name":"Target Priority",
                                "choices":[
                                    {"id":1,"text":"1st (2+)","cost":0}
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
                    "name":"Timed 5\" Barrage",
                    "w":0,
                    "cost":15,
                    "br":0
                },
                {
                    "id":5,
                    "name":"Timed 8\" Barrage",
                    "w":0,
                    "cost":25,
                    "br":0
                },
                {
                    "id":6,
                    "name":"Timed Typhoon Air Strike",
                    "cost":20,
                    "w":0,
                    "br":0
                }
                ]
            }
        ]
    },
    {
        "id":7,
        "name":"American Airborne Division",
        "infantry":[
            [[1,0],[0,1]],
            [[0,1],[0,2]],
            [[0,2],[0,3]],
            [[0,3],[0,6]]
        ],
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
                                {"id":1,"text":"None","cost":0,"v":0},
                                {"id":2,"text":"Jeep","cost":2,"v":0}
                            ]
                        },
                        {
                            "name":"Radio",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Radio Comms Network","cost":20}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Forward Signals Unit",
                    "br":1,
                    "cost":16,
                    "unique":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Radio Jeep","cost":0,"v":0}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Comms Relay Team",
                    "br":0,
                    "cost":14
                },
                {
                    "id":4,
                    "name":"Dispatch Rider",
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
                        "name":"Airborne Infantry Platoon",
                        "cost":137,
                        "br":13, // greg confirm
                        'multiplier':4,
                        "options":[
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Veteran","cost":0},
                                    {"id":2,"text":"Elite","cost":35, "br":5}
                                ]
                            }
                        ],
                        "p":1,
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
                                "name":"Infantry Squad",
                                "cost":0,
                                "count":2,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"AT grenades",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Anti-tank grenades","cost":5}
                                        ]
                                    },
                                    {
                                        "name":"BAR",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"1 BAR","cost":2}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"MMG Team",
                                "cost":0,
                                "br":0,
                                "w":0,
                                "mandatory":true,
                                "count":2
                            },
                            {
                                "id":4,
                                "name":"Light Mortar Team",
                                "cost":0,
                                "br":0,
                                "w":0,
                                "mandatory":true
                            },
                            {
                                "id":5,
                                "name":"Bazooka Team",
                                "cost":0,
                                "br":0,
                                "w":0,
                                "mandatory":true
                            },
                            {
                                "id":6,
                                "name":"Combat Medic",
                                "cost":8,
                                "br":0,
                                "unique":true
                            },
                            {
                                "id":7,
                                "name":"Medium Machine Gun team",
                                "cost":18,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader Team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Mount",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Jeep","cost":2}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":8,
                                "name":"Bazooka Team",
                                "cost":18,
                                "br":1,
                                "unique":true
                            },
                            {
                                "id":9,
                                "name":"Medium Mortar Team",
                                "cost":24,
                                "br":1,
                                "w":0,
                               "unique":true,
                                "options":[
                                    {
                                        "name":"Loader Team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Mount",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Jeep mount","cost":2}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":10,
                                "name":"Anti-tank Gun",
                                "cost":37,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"57mmL46","cost":0,"w":0}
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
                                            {"id":2,"text":"Jeep tow","cost":2,"v":0}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Airborne Infantry Squad",
                        "cost":41,
                        "br":4,
                        "s":1,
                        "options":[
                            {
                                "name":"AT grenades",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Anti-tank grenades","cost":5}
                                ]
                            },
                            {
                                "name":"BAR",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 BAR","cost":2}
                                ]
                            },
                            {
                                "name":"MMG",
                                "choices":[
                                    {"id":1,"text":".30 cal","cost":0}
                                ]
                            },
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Veteran","cost":0},
                                    {"id":2,"text":"Elite","cost":10, "br":1}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Glider Infantry Platoon",
                        "cost":81, //greg confirm
                        "br":8, // greg confirm
                        'multiplier':4,
                        "p":1,
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"Glider Infantry Squad",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true
                            },
                            {
                                "id":3,
                                "name":"BAR Team",
                                "cost":0,
                                "br":0,
                                "w":0,
                                "mandatory":true,
                                "count":3
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
                                "name":"MMG Team",
                                "cost":18,
                                "br":1,
                                "w":0,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader Team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Mount",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Jeep mount","cost":2}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":4,
                                "name":"Bazooka Team",
                                "cost":16,
                                "br":1,
                                "unique":true,
                                "w":0
                            },
                            {
                                "id":5,
                                "name":"Light Mortar Team",
                                "cost":14,
                                "br":1,
                                "w":0,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader Team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":6,
                                "name":"Medium Mortar Team",
                                "cost":24,
                                "br":1,
                                "w":0,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Loader Team",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"3-man loader team","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"Mount",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Jeep mount","cost":2}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":7,
                                "name":"Anti-tank Gun",
                                "cost":34,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"57mmL46","cost":0,"w":0}
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
                                            {"id":2,"text":"Jeep tow","cost":2,"v":0}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Glider Infantry Squad",
                        "cost":21,
                        "br":2,
                        "s":1
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
                        "name":"Sherman Tank Platoon", 
                        "cost":140, 
                        "multiplier":4, 
                        "br":9, 
                        "v":100,
                        "vc":3,
                        "officer":true,
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"3 M4s","cost":0},
                                    {"id":2,"text":"4 M4s","cost":50,"br":3,"vc":4},
                                    {"id":3,"text":"5 M4s","cost":100,"br":6,"vc":5} 
                                ] 
                            }
                        ] 
                    }, 
                    {
                        "id":2, 
                        "name":"Additional Tank",
                        "cost":50, 
                        "br":3, 
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"M4 Sherman","cost":0,"v":100}, 
                                    {"id":2,"text":"M5 Stuart","cost":-20,"v":89} 
                                ] 
                            } 
                        ] 
                    },
                    {
                        "id":3, 
                        "name":"Light Tank Platoon",
                        "cost":90, 
                        "br":6, 
                        "v":89,
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"3 M5 Stuarts","cost":0}, 
                                    {"id":2,"text":"4 M5 Stuarts","cost":30,"br":2}, 
                                    {"id":3,"text":"5 M5 Stuarts","cost":60,"br":4}
                                ] 
                            } 
                        ] 
                    },
                    { 
                        "id":4, 
                        "name":"Self-Propelled Tank Destroyer", 
                        "cost":34, 
                        "br":2, 
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"M10 Wolverine","cost":0,"v":0}
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
                        "cost":23,
                        "br":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"Jeep","cost":0,"v":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Airborne Artillery Battery",
                        "cost":56,
                        "br":4,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 75mmL16 howitzers","cost":0,"w":0}
                                ]
                            },
                            {
                                "name":"Loader teams",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"2 Loader teams","cost":20}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"2 Jeep tows","cost":4}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Off-Table Artillery Fire",
                        "cost":70,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 75mmL16 howtizers","cost":0},
                                    {"id":2,"text":"2 105mmL16 howitzers","cost":20}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Off-Table Mortar Fire",
                        "cost":54,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 81mm mortars","cost":0,"w":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Aerial Artillery Observer",
                        "cost":71,
                        "br":3,
                        "unique":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 L4 Piper Cub","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Towed Artillery Gun",
                        "cost":28,
                        "br":2,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"75mmL16 howitzer","cost":0,"w":0},
                                    {"id":2,"text":"105mmL16 howitzer","cost":4,"w":0}
                                ]
                            },
                            {
                                "name":"Loader team",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"No tow","cost":0},
                                    {"id":2,"text":"Jeep tow","cost":4,"v":0}
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
                        "name":"Trenches",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":7,
                        "name":"Sniper Hideout",
                        "cost":15,
                        "br":0
                    },
                    {
                        "id":8,
                        "name":"AT Gun Dug-out",
                        "cost":20,
                        "br":0
                    },
                    {
                        "id":9,
                        "name":"Minefield",
                        "cost":20,
                        "br":0
                    },
                    {
                        "id":10,
                        "name":"Artillery Observation Post",
                        "cost":26,
                        "br":1,
                        "unique":true
                    },
                    {
                        "id":11,
                        "name":"Booby Trapped Building",
                        "cost":25,
                        "br":0
                    },
                    {
                        "id":12,
                        "name":"Barbed Wire",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":13,
                        "name":"Improvised Road Block",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":14,
                        "name":"Anti-Tank Ditch/Embankment",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":15,
                        "name":"Off-table 76mm AT shot",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":16,
                        "name":"Curahee!",
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
                        "name":"Jeep Reconnaissance Team",
                        "cost":26,
                        "br":1
                    },
                    {
                        "id":3,
                        "name":"Recon Platoon Command",
                        "cost":36, // greg confirm
                        "br":2,
                        "officer":true,
                        "unique":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 men and a jeep","cost":0} //greg confirm composition
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Infantry Foot Patrol",
                        "cost":51,
                        "br":3,
                        "options":[
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
                        "id":5,
                        "name":"Armoured Car",
                        "cost":26, //greg confirm
                        "br":1, // greg confirm
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"M8 Greyhound","cost":0,"v":0}, //greg confirm all
                                    {"id":2,"text":"M20 Utility Car","cost":-8,"v":0} //greg confirm all
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
                        "v":61,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Heavy Truck & 6 men","cost":0},
                                    {"id":2,"text":"2 Heavy Trucks & 12 men","cost":24}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Recovery Vehicle",
                        "cost":22,
                        "br":1,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"Sherman ARV","cost":0,"v":109},
                                    {"id":2,"text":"M1 Wrecker Heavy Truck","cost":-4,"v":61}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Airborne Combat Engineer Section",
                        "cost":43,
                        "br":3,
                        "restricted":true,
                        "s":1,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"BAR, AT grenades, 2 demo charges","cost":0}
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
                                "name":"Bazooka",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Bazooka","cost":12}
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
                                    {"id":1,"text":"1 Jeep with a trailer","cost":0},
                                    {"id":2,"text":"2 Jeeps with trailers","cost":4},
                                    {"id":3,"text":"3 Jeeps with trailers","cost":8},
                                    {"id":4,"text":"4 Jeeps with trailers","cost":12}
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
                                {"id":1,"text":"Jeep Ambulance","cost":0,"v":0}
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
                "restricted":true,
                "entries":[
                    {
                        "id":1,
                        "name":"Anti-Aircraft Machine Gun",
                        "cost":22,
                        "br":1,
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
                                "name":"Mount",
                                "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"Jeep","cost":2}
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
                    "name":"Timed 75mmL16 Howitzer Barrage",
                    "w":0,
                    "cost":5,
                    "br":0
                },
                {
                    "id":5,
                    "name":"Timed 105mm Barrage",
                    "w":0,
                    "cost":10,
                    "br":0
                },
                {
                    "id":6,
                    "name":"Timed 155mm Barrage",
                    "cost":20,
                    "w":0,
                    "br":0
                },
                {
                    "id":7,
                    "name":"Timed 14\" Barrage",
                    "cost":50,
                    "w":0,
                    "br":0
                },
                {
                    "id":8,
                    "name":"Timed P-51 Air Strike",
                    "cost":5,
                    "br":0
                },
                {
                    "id":9,
                    "name":"Timed P-47 Air Strike",
                    "cost":10,
                    "w":0,
                    "br":0
                }
                ]
            }
        ]
    },
    {
        "id":8,
        "name":"American Amphibious Assault Battlegroup"
        "infantry":[
            [[1,0],[0,1]],
            [[0,1],[0,2]],
            [[0,2],[0,3]],
            [[0,3],[0,6]]
        ],
        "sections":[
            {
                "id":1, 
                "name":"Forward Headquarters Units",
                "allows":'[8,10]',
                "requires":false,
                "entries":[
                {
                    "id":1,
                    "name":"Landing Craft Support",
                    "cost":30,
                    "br":3,
                    "unique":true,
                    "restricted":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"1 LCS","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Beach Landing Party HQ",
                    "cost":23,
                    "br":3,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Jeep","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Air Liaison Shore Party",
                    "cost":18,
                    "br":1,
                    "unique":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Jeep","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Landing Craft Control",
                    "br":1,
                    "cost":45,
                    "unique":true,
                    "officer":true
                },
                {
                    "id":5,
                    "name":"Shore & Beach Party Communications Team",
                    "br":1,
                    "cost":12
                }
                ]
            },
            {
                "id":2, 
                "name":"Infantry Units",
                "allows":'[6,7,9]',
                "requires":false,
                "entries":[
                {
                    "id":1,
                    "name":"Assault Boat Team",
                    "cost":140,
                    "br":10,
                    "p":1,
                    'multiplier':6,
                    "sub_text":"Team Components",
                    "sub_units":[
                        {
                            "id":1,
                            "name":"Boat Team Leader",
                            "cost":0,
                            "br":0,
                            "mandatory":true,
                            "officer":true
                        },
                        {
                            "id":2,
                            "name":"Rifle Squad",
                            "cost":0,
                            "br":0,
                            "mandatory":true,
                            "count":2
                        },
                        {
                            "id":3,
                            "name":"Light Mortar Team",
                            "cost":0,
                            "br":0,
                            "w":0,
                            "mandatory":true
                        },
                        {
                            "id":4,
                            "name":"Flamethrower Team",
                            "cost":0,
                            "br":0,
                            "mandatory":true
                        },
                        {
                            "id":5,
                            "name":"Demolitions Team",
                            "cost":0,
                            "br":0,
                            "mandatory":true
                        }
                        {
                            "id":6,
                            "name":"Combat Medic",
                            "cost":0,
                            "br":0,
                            "mandatory":true
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Ranger Assault Boat Team",
                    "cost":85,
                    "br":7,
                    "p":1,
                    'multiplier':4,
                    "options":[ 
                        { 
                            "name":"Transport", 
                            "choices":[ 
                                {"id":1,"text":"DUKW","cost":0},
                                {"id":2,"text":"LCA","cost":0},
                                {"id":3,"text":"LCA with rocket-prop. grapnels","cost":5} 
                            ] 
                        } 
                    ] 
                    "sub_text":"Team Components",
                    "sub_units":[
                        {
                            "id":1,
                            "name":"Boat Team Leader",
                            "cost":0,
                            "br":0,
                            "mandatory":true,
                            "officer":true
                        },
                        {
                            "id":2,
                            "name":"Rifle Squad",
                            "cost":0,
                            "br":0,
                            "mandatory":true
                        },
                        {
                            "id":3,
                            "name":"Light Mortar Team",
                            "cost":0,
                            "br":0,
                            "w":0,
                            "mandatory":true
                        },
                        {
                            "id":4,
                            "name":"Bazooka Team",
                            "cost":0,
                            "br":0,
                            "mandatory":true
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
                        "name":"DD Sherman Platoon", 
                        "cost":135, 
                        "multiplier":3, 
                        "br":9,
                        "officer":true,
                        "v":106, 
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"3 DD Shermans","cost":0} 
                                ] 
                            } 
                        ] 
                    }, 
                    { 
                        "id":2, 
                        "name":"Sherman Platoon",
                        "cost":160, 
                        "br":12, 
                        "officer":true, 
                        "v":100,
                        "multiplier":3,
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"2 Shermans, 1 Sherman Dozer","cost":0} 
                                ] 
                            } 
                        ] 
                    },
                    { 
                        "id":3, 
                        "name":"DD Sherman",
                        "cost":52, 
                        "v":106, 
                        "br":3
                    },
                    { 
                        "id":4, 
                        "name":"Sherman Tank Company",
                        "cost":675, 
                        "br":44,
                        "restricted":true,
                        "v":100,
                        "multiplier":10,
                        "officer":4,  // greg 4 officers! Need code to support this
                        "options":[ 
                            { 
                                "name":"Composition", 
                                "choices":[ 
                                    {"id":1,"text":"13 M4 Sherman Tanks","cost":0} 
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
                        "name":"Shore Fire Control Party",
                        "cost":20,
                        "br":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"Jeep","cost":0,"v":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"M7 Priest",
                        "cost":58,
                        "br":3
                    },
                    {
                        "id":3,
                        "name":"M2A1 105mm Howitzer",
                        "cost":50,
                        "w":0,
                        "br":2
                    },
                    {
                        "id":4,
                        "name":"Aerial Artillery Observer",
                        "cost":66,
                        "br":3,
                        "unique":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 Piper Cub","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Priest Battery",
                        "cost":170,
                        "br":8,
                        "multiplier":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 M7 Priests in a LCT","cost":0,"w":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Off-Table Naval Gun Fire",
                        "cost":80,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 3.5\" guns","cost":0},
                                    {"id":2,"text":"2 4.7\" guns","cost":28},
                                    {"id":3,"text":"2 5\" guns","cost":46},
                                    {"id":4,"text":"2 6\" guns","cost":55}
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
                        "name":"Gap Team",
                        "cost":158,
                        "br":14,
                        "p":1,
                        "sub_text":"Party Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Gap Team Leader",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"Demo Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "count":4
                            },
                            {
                                "id":3,
                                "name":"Combat Medic",
                                "cost":0,
                                "br":0,
                                "count":1,
                                "mandatory":true
                            },
                            {
                                "id":3,
                                "name":"Sherman Bulldozer",
                                "cost":0,
                                "br":0,
                                "count":1,
                                "v":0, //greg ?
                                "mandatory":true
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Armoured Bulldozer",
                        "cost":12,
                        "br":1,
                        "v":0
                    },
                    {
                        "id":3,
                        "name":"DUKW with ladder",
                        "cost":12,
                        "br":1,
                        "v":0 //greg
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
                        "cost":10,
                        "br":1,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 DUKW","cost":0},
                                    {"id":2,"text":"2 DUKWs","cost":10,"br":1},
                                    {"id":3,"text":"3 DUKWs","cost":20,"br":2},
                                    {"id":4,"text":"4 DUKWs","cost":30,"br":3}
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
                        "name":"Combat Medic",
                        "cost":8,
                        "br":0
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
                        "name":"Support Boat Team",
                        "cost":120,
                        "br":10,
                        "multiplier":5,
                        "sub_text":"Team Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Team Leader",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"Rifle Squad",
                                "cost":0,
                                "br":0,
                                "count":1,
                                "mandatory":true
                            },
                            {
                                "id":3,
                                "name":"Medium Mortar Team",
                                "cost":0,
                                "br":0,
                                "count":1,
                                "w":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Loader team",
                                        "choices":[
                                            {"id":1,"text":"3-man loader team","cost":0}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":4,
                                "name":"MG Team",
                                "cost":0,
                                "br":0,
                                "count":2,
                                "mandatory":true
                            },
                            {
                                "id":5,
                                "name":"Demo Team",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "count":1
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Additional Landing Craft",
                        "cost":10,
                        "br":1,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"LCA","cost":0},
                                    {"id":2,"text":"LCM","cost":4},
                                    {"id":3,"text":"LCT","cost":20,"br":1},
                                    {"id":4,"text":"LCVP","cost":8}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Landing Craft Gun",
                        "cost":112,
                        "br":4,
                        "restricted":true,
                        "unique":true
                    },
                    {
                        "id":4,
                        "name":"Landing Craft Rocket",
                        "cost":108,
                        "br":4,
                        "restricted":true,
                        "unique":true
                    },
                    {
                        "id":5,
                        "name":"Landing Craft Flak",
                        "cost":142,
                        "br":4,
                        "restricted":true,
                        "unique":true
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
                        "cost":20,
                        "br":0,
                        "options":[
                            {
                                "name":"Target Priority",
                                "choices":[
                                    {"id":1,"text":"1st (2+)","cost":0}
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
                    "name":"Timed 6\" Barrage",
                    "w":0,
                    "cost":20,
                    "br":0
                },
                {
                    "id":5,
                    "name":"Timed 8\" Barrage",
                    "w":0,
                    "cost":30,
                    "br":0
                },
                {
                    "id":6,
                    "name":"Timed 14\" Barrage",
                    "w":0,
                    "cost":40,
                    "br":0
                },
                {
                    "id":7,
                    "name":"Timed P-47 Air Strike",
                    "cost":10,
                    "w":0,
                    "br":0
                },
                {
                    "id":8,
                    "name":"Timed B-26 Air Strike",
                    "cost":25,
                    "restricted":true,
                    "w":0,
                    "br":0
                }
                ]
            }
        ]
    },
    {
        "id":9,
        "name":"Atlantic Wall Resistance Nest"
        "infantry":[
            [[1,0],[2,0]],
            [[2,0],[0,1]],
            [[0,1],[0,2]],
            [[0,2],[0,3]]
        ],
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
                    "cost":21,
                    "br":3,
                    "unique":true,
                    "officer":true,
                },
                {
                    "id":2,
                    "name":"Wire Team",
                    "br":0,
                    "cost":7
                },
                {
                    "id":3,
                    "name":"Forward Signals Unit",
                    "br":1,
                    "cost":18,
                    "unique":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Radio Van","cost":0,"v":0},
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Motorcycle Dispatch Rider",
                    "br":0,
                    "v":50,
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
                        "name":"Ost Infantry Platoon",
                        "cost":64,
                        "br":5,
                        'multiplier':4,
                        "p":1,
                        "options":[
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Irregular","cost":0},
                                    {"id":2,"text":"Regular","cost":16, "br":4}
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
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"Rifle Squad",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true
                            },
                            {
                                "id":3,
                                "name":"MMG Team",
                                "cost":0,
                                "count":1,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"MMG",
                                        "choices":[
                                            {"id":1,"text":"Bipod MG34","cost":0}
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
                                "cost":11,
                                "br":1,
                                "w":1,
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
                                "name":"Heavy Machine Gun team",
                                "cost":16,
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
                                "id":7,
                                "name":"Medium Mortar Team",
                                "cost":22,
                                "br":1,
                                "w":2,
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
                                "cost":20,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"37mm PaK36","cost":0,"w":7},
                                            {"id":3,"text":"50mm PaK38","cost":2,"w":9},
                                            {"id":4,"text":"75mm PaK97/38","cost":13,"w":0},
                                            {"id":5,"text":"76.2mm PaK36(r)","cost":17,"w":0},
                                            {"id":5,"text":"75mm PaK40","cost":20,"w":14}
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
                                            {"id":2,"text":"Horse and limber tow","cost":2}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Conscript Labour Platoon",
                        "cost":64,
                        "br":5,
                        'multiplier':2,
                        "restricted":2,
                        "p":1,
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"Rifle Squad",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Ost Infantry Squad",
                        "cost":12,
                        "br":1,
                        "s":1
                    },
                    {
                        "id":4,
                        "name":"Kriegsmarine Garrison Platoon",
                        "cost":44,
                        "br":4,
                        'multiplier':4,
                        "restricted":true, //greg need to add support for depends on artillery casement
                        "p":1,
                        "options":[
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Irregular","cost":0},
                                    {"id":2,"text":"Regular","cost":15, "br":4}
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
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"Rifle Squad",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true
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
                                "cost":11,
                                "br":1,
                                "w":1,
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
                                "cost":16,
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
                        "cost":13,
                        "br":1
                    },
                    {
                        "id":2,
                        "name":"Off-Table Mortar Fire",
                        "cost":54,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 80mm mortars","cost":0,"w":2},
                                    {"id":2,"text":"2 120mm mortars","cost":18,"w":3}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Off-Table Artillery Fire",
                        "cost":90,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 105mmL28 howitzer","cost":0,'w':22},
                                    {"id":2,"text":"2 100mmL52 cannon","cost":36,'w':21},
                                    {"id":3,"text":"2 122mmL23 howitzer","cost":26,'w':24},
                                    {"id":4,"text":"2 150mmL30 howitzer","cost":45,'w':26}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Infantry Gun Casement",
                        "cost":19,
                        "restricted":true,
                        "br":1,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"75mmL11 Infantry Gun","cost":0,'w':0},
                                    {"id":2,"text":"76.2mmL16 Infantry Gun","cost":0,'w':0},
                                    {"id":3,"text":"10mmL19 Infantry Gun","cost":25,'w':0},
                                    {"id":4,"text":"150mmL12 Infantry Gun","cost":35,'br':1,'w':0}
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
                    }
                ]
            },
            //greg got to here
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
                                {"id":1,"text":"SdKfz 250/10","cost":0,"v":48},
                                {"id":2,"text":"SdKfz 250/11","cost":0,"v":49}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Panzer Grenadier Foot Patrol",
                    "cost":36,
                    "br":3,
                    "s":1,
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
                                {"id":1,"text":"SdKfz 222","cost":0,"v":32},
                                {"id":2,"text":"SdKfz 231 or 232","cost":4,"v":34},
                                {"id":3,"text":"SdKfz 233","cost":14,"v":35},
                                {"id":4,"text":"SdKfz 250/7","cost":10, restricted:"true","v":45},
                                {"id":5,"text":"SdKfz 250/8","cost":4, restricted:"true","v":46},
                                {"id":6,"text":"SdKfz 250/9","cost":4, restricted:"true","v":47}
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
                                {"id":1,"text":"Heavy Truck & 6 men","cost":0,"v":61},
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
                    "v":61,
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
                                {"id":1,"text":"1 Flammpanzer III Ausf. M","cost":0,"v":5}
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
                                {"id":1,"text":"SdKfz 9 'Famo'","cost":0,"v":67},
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
                                {"id":1,"text":"StuG III Ausf. F","cost":0,"v":16},
                                {"id":2,"text":"Panzer III Ausf. L","cost":0,"v":2}
                                ]
                        },
                        {
                            "name":"Borgwards",
                            "choices":[
                                {"id":1,"text":"1 Borgward B-IV","cost":0,"v":14},
                                {"id":2,"text":"2 Borgward B-IV","cost":10, "br":1,"v":14},
                                {"id":3,"text":"3 Borgward B-IV","cost":20, "br":2,"v":14},
                                {"id":4,"text":"4 Borgward B-IV","cost":30, "br":3,"v":14}
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
                    "v":58,
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
                            {"id":1,"text":"Kübelwagen Ambulance","cost":0,"v":54},
                            {"id":2,"text":"Ambulance medium truck","cost":2,"v":58},
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
                    "w":20,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"88mm AA/AT with 4 crew","cost":0}
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
                                {"id":2,"text":"SdkFz 7","cost":8,"v":65}
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
                                {"id":1,"text":"Marder II","cost":0,"v":20},
                                {"id":2,"text":"Marder III H","cost":4,"v":21},
                                {"id":3,"text":"Marder III M","cost":-2,"v":22},
                                {"id":4,"text":"Marder 38t (36r)","cost":4,"v":23}
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
                    "v":11,
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
                                {"id":1,"text":"1 Ferdinand","cost":0, "restricted":true,"v":24},
                                {"id":2,"text":"1 Hornisse","cost":-80, "restricted":true,"br":-2,"v":25}
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
                                {"id":1,"text":"1 Panzer T-34r","cost":0,"v":12}
                            ]
                        }
                    ]
                },
                {
                    "id":6,
                    "name":"Anti-Aircraft Vehicle",
                    "cost":16,
                    "br":1,
                    "v":62,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                            {"id":1,"text":"SdKfz 10 with 20mm","cost":0, "restricted":true},
                            {"id":2,"text":"SdKfz with 37mm","cost":4, "restricted":true},
                            {"id":3,"text":"SdKfz with 20mm Flakvierling","cost":20, "restricted":true}
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
                                {"id":1,"text":"StuH 42 F","cost":0, "restricted":true,"v":17},
                                {"id":2,"text":"StuH 42 G","cost":6, "restricted":true,"v":19},
                                {"id":3,"text":"Brummbär","cost":20, "restricted":true, "br":1,"v":26}
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
                    "v":11,
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
                "w":22,
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
        "id":10,
        "name":"(Coming Soon) Panzer 'Ersatz' Battlegroup"
    },
    {
        "id":11,
        "name":"(Coming Soon) British Armoured Division Battlegroup"
    },
    {
        "id":12,
        "name":"(Coming Soon) British Infantry Division Battlegroup"
    },
    {
        "id":13,
        "name":"(Coming Soon) American Armoured Division Battlegroup"
    },
    {
        "id":14,
        "name":"(Coming Soon) American Infantry Division Battlegroup"
    },
    {
        "id":15,
        "name":"(Coming Soon) German Panzer Division Battlegroup"
    },
    {
        "id":16,
        "name":"German Fallschirmjaeger Battlegroup",
        "infantry":[
            [[1,0],[0,1]],
            [[0,1],[0,2]],
            [[0,2],[0,3]],
            [[0,3],[0,6]]
        ],
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
                                {"id":1,"text":"Kübelwagen","cost":0,"v":54},
                                {"id":2,"text":"Heavy Car","cost":0}
                            ]
                        }
                        ]
                },
                {
                    "id":2,
                    "name":"Forward Signals Unit",
                    "br":1,
                    "cost":18,
                    "unique":true,
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
                    "id":3,
                    "name":"Comms Relay Team",
                    "br":0,
                    "cost":14
                },
                {
                    "id":4,
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
                        "name":"Fallschirmjaeger Platoon",
                        "cost":115,
                        "br":14,
                        'multiplier':4,
                        "p":1,
                        "options":[
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Veteran","cost":0},
                                    {"id":2,"text":"Elite","cost":30, "br":4}
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
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"Medium truck or heavy car","cost":4}
                                        ]
                                    },
                                    {
                                        "name":"Panzerfausts",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"1 Panzerfaust","cost":5},
                                            {"id":3,"text":"2 Panzerfausts","cost":10}
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
                                        "name":"Panzerfausts",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"1 Panzerfaust","cost":5},
                                            {"id":3,"text":"2 Panzerfausts","cost":10}
                                        ]
                                    },
                                    {
                                        "name":"MG",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"MG34","cost":10},
                                            {"id":3,"text":"MG42","cost":14}
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
                                "cost":20,
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
                                "name":"Light Mortar Team",
                                "cost":13,
                                "br":1,
                                "w":1,
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
                                "name":"Panzerschreck Team",
                                "cost":23,
                                "br":1,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Weapon",
                                        "choices":[
                                            {"id":1,"text":"1 Panzerschreck","cost":0},
                                            {"id":2,"text":"1 Püppchen","cost":0}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":7,
                                "name":"Medium Mortar Team",
                                "cost":26,
                                "br":1,
                                "w":2,
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
                                "cost":25,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"37mm PaK36","cost":0,"w":7},
                                            {"id":2,"text":"37mm PaK36(Stielgranate)","cost":5,"w":7},
                                            {"id":3,"text":"42mm PaK41","cost":3,"w":0},
                                            {"id":4,"text":"50mm PaK38","cost":3,"w":9},
                                            {"id":5,"text":"75mm PaK40","cost":20,"w":14}
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
                                            {"id":3,"text":"RSO tow","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":9,
                                "name":"75mm Infantry Gun",
                                "cost":21,
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
                                            {"id":2,"text":"Medium truck","cost":4},
                                            {"id":3,"text":"Kettenkrad tow","cost":4}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Fallschirmjaeger Squad",
                        "cost":34,
                        "br":3,
                        "s":1,
                        "options":[
                            {
                                "name":"Troop Quality",
                                "choices":[
                                    {"id":1,"text":"Veteran","cost":0},
                                    {"id":2,"text":"Elite","cost":8, "br":1}
                                ]
                            },
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium truck","cost":4}
                                ]
                            },
                            {
                                "name":"Panzerfausts",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Panzerfaust","cost":5},
                                    {"id":3,"text":"2 Panzerfausts","cost":10}
                                ]
                            },
                            {
                                "name":"MG",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"MG34","cost":10},
                                    {"id":3,"text":"MG42","cost":14}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"Assault Pioneer Squad",
                        "cost":46,
                        "br":3,
                        "s":1,
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
                        "name":"StuG III Battery",
                        "cost":110,
                        "multiplier":3,
                        "vc":3,
                        "br":9,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"3 Stug III F/8s","cost":0},
                                    {"id":2,"text":"Upgrade to Ausf. Gs","cost":10}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Panzer IV",
                        "cost":50,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":3,"text":"Panzer IV G","cost":0},
                                    {"id":4,"text":"Panzer IV H","cost":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"StuG III",
                        "cost":40,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":2,"text":"StuG III F/8","cost":0},
                                    {"id":3,"text":"StuG III G","cost":3}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
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
                        "cost":17,
                        "br":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"Kübelwagen","cost":0,"v":54}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"105mm Howitzer",
                        "cost":36,
                        "br":2,
                        "w":22,
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
                                    {"id":2,"text":"Horse drawn limber","cost":2},
                                    {"id":3,"text":"Medium Truck","cost":4}
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
                                    {"id":2,"text":"Horse drawn limber","cost":2},
                                    {"id":3,"text":"heavy Truck","cost":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"150mm Infantry Gun",
                        "cost":54,
                        "br":2,
                        "w":12,
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
                                    {"id":2,"text":"Horse drawn limber","cost":2},
                                    {"id":3,"text":"Medium Truck","cost":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Off-Table Mortar Fire",
                        "cost":54,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 80mm mortars","cost":0,"w":2},
                                    {"id":2,"text":"2 120mm mortars","cost":18,"w":3}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Heavy Mortar Team",
                        "cost":29,
                        "br":1,
                        "w":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"120mm mortar & 3 crew","cost":0}
                                ]
                            },
                            {
                                "name":"Loader team or Kettenkrad",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10},
                                    {"id":3,"text":"kettenkrad tow","cost":2}
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
                        "id":7,
                        "name":"Off-Table Artillery Fire",
                        "cost":90,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 105mm howitzer","cost":0,'w':22},
                                    {"id":2,"text":"2 150mm howitzer","cost":45},
                                    {"id":3,"text":"2 150mm Nebelwerfer","cost":45,'w':27},
                                    {"id":4,"text":"2 210mm Nebelwerfer","cost":118,'w':30},
                                    {"id":5,"text":"2 280mm Nebelwerfer","cost":162,'w':31}
                                ]
                            }
                        ]
                    },
                    {
                        "id":8,
                        "name":"Nebelwerfer Team",
                        "cost":52,
                        "br":2,
                        "w":27,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"1 150mm Nebelwerfer","cost":0,'w':27}
                                ]
                            },
                            {
                                "name":"Loader team ",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"3-man loader team","cost":10}
                                ]
                            },
                            {
                                "name":"Tow",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck","cost":6}
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
                        "name":"Minefield",
                        "cost":20,
                        "br":0
                    },
                    {
                        "id":11,
                        "name":"Command Bunker",
                        "cost":30,
                        "br":3,
                        "restricted":true,
                        "unique":true
                    },
                    {
                        "id":12,
                        "name":"Artillery Observation Point",
                        "cost":26,
                        "br":1
                    },
                    {
                        "id":13,
                        "name":"Booby Trapped Building",
                        "cost":25,
                        "br":0
                    },
                    {
                        "id":14,
                        "name":"Barbed Wire",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":15,
                        "name":"Improvised Road Block",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":16,
                        "name":"Anti-Tank Ditch/Embankment",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":17,
                        "name":"Off-table 88 Anti-Tank shot",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":18,
                        "name":"Fortified Bocage",
                        "cost":10,
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
                    "name":"Motorised Reconnaissance Patrol",
                    "cost":32,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"3 men with 2 Panzerfausts","cost":0}
                            ]
                        },
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Kübelwagen","cost":0,"v":54}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Armoured Car",
                    "cost":20,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"SdKfz 222","cost":0},
                                {"id":2,"text":"Panhard 178","cost":4}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Fallschirmjaeger Foot Patrol",
                    "cost":36,
                    "br":3,
                    "options":[
                        {
                            "name":"Troop Quality",
                            "choices":[
                                {"id":1,"text":"Veteran","cost":0},
                                {"id":2,"text":"Elite","cost":8, "br":1}
                            ]
                        },
                        {
                            "name":"Panzerfausts",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"1 Panzerfaust","cost":5},
                                {"id":3,"text":"2 Panzerfausts","cost":10}
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
                    "id":5,
                    "name":"Reconnaissance Command",
                    "cost":37,
                    "br":1,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Kübelwagen","cost":0,"v":54}
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
                    "name":"Fallschirmjaeger Pioneer Squad",
                    "cost":40,
                    "br":3,
                    "restricted":true,
                    "s":1,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Medium Truck","cost":0,"v":58}
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
                                {"id":2,"text":"Elite","cost":8, "br":1}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Light Bridging Unit",
                    "cost":18,
                    "br":2,
                    "v":61,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Heavy Truck & 6 men","cost":0}
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
                            {"id":1,"text":"Kübelwagen Ambulance","cost":0,"v":54},
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
                    "cost":48,
                    "br":3,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"88mm FlaK36 AA/AT with 4 crew","cost":0,"w":0},
                                {"id":2,"text":"88mmL71 PaK43  with 4 crew","cost":23,"w":0}
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
                                {"id":2,"text":"SdkFz 7","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Anti-Aircraft Vehicle",
                    "cost":14,
                    "br":1,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                            {"id":1,"text":"Medium Truck with 20mm","cost":0},
                            {"id":2,"text":"SdKfz 10 with 20mm","cost":2},
                            {"id":3,"text":"SdKfz with 37mm","cost":6},
                            {"id":4,"text":"SdKfz with 20mm Flakvierling","cost":22}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Panzerjaeger Team",
                    "cost":24,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"2 men with a Panzerschreck","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Assault Howitzer",
                    "cost":45,
                    "br":3,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":2,"text":"StuH 42 G","cost":0}
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
                            {"id":2,"text":"Kettenkrad","cost":2},
                            {"id":3,"text":"Medium Truck tow","cost":4},
                            {"id":4,"text":"SdKfz 10 halftrack", "cost":8}
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
                            {"id":3,"text":"SdKfz 11 halftrack tow", "cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":7,
                    "name":"Towed 20mm FlaK Vierling",
                    "cost":42,
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
                            {"id":3,"text":"SdKfz 11 halftrack tow", "cost":8}
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
                "name":"Timed 80mm Mortar Barrage",
                "w":2,
                "cost":5,
                "br":0
            },
            {
                "id":5,
                "name":"Timed 105mm Barrage",
                "w":22,
                "cost":10,
                "br":0
            },
            {
                "id":6,
                "name":"Timed 150mm Barrage",
                "cost":20,
                "br":0
            },
            {
                "id":7,
                "name":"Timed 150mm Nebelwefer Barrage",
                "cost":30,
                "w":27,
                "br":0
            }
            ]
        }
        ]
    },
    {
        "id":17,
        "name":"German Infantry Division Battlegroup (Overlord)",
        "infantry":[
            [[1,0],[0,1]],
            [[0,1],[0,2]],
            [[0,2],[0,3]],
            [[0,3],[0,6]]
        ],
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
                    "cost":21,
                    "br":3,
                    "unique":true,
                    "officer":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Kübelwagen","cost":0,"v":54},
                                {"id":2,"text":"Heavy Car","cost":2},
                                {"id":3,"text":"Schwimmwagen","cost":2,"v":55}
                            ]
                        }
                        ]
                },
                {
                    "id":2,
                    "name":"Wire Team",
                    "br":0,
                    "cost":7
                },
                {
                    "id":3,
                    "name":"Forward Signals Unit",
                    "br":1,
                    "cost":18,
                    "unique":true,
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
                    "id":3,
                    "name":"Comms Relay Team",
                    "br":0,
                    "cost":14
                },
                {
                    "id":4,
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
                        "p":1,
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
                                        "name":"Panzerfaust",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"1 Panzerfaust","cost":5}
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
                                        "name":"Panzerfaust",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"1 Panzerfaust","cost":5}
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
                                "w":1,
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
                                "name":"Panzerschreck Team",
                                "cost":22,
                                "br":1,
                                "unique":true
                            },
                            {
                                "id":7,
                                "name":"Medium Mortar Team",
                                "cost":24,
                                "br":1,
                                "w":2,
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
                                "cost":22,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"37mm PaK36","cost":0,"w":7},
                                            {"id":2,"text":"37mm PaK36(Stielgranate)","cost":5,"w":7},
                                            {"id":3,"text":"50mm PaK38","cost":4,"w":9},
                                            {"id":4,"text":"75mm PaK97/38","cost":13,"w":0},
                                            {"id":5,"text":"76.2mm PaK36(r)","cost":17,"w":0},
                                            {"id":5,"text":"75mm PaK40","cost":20,"w":14}
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
                                            {"id":2,"text":"Horse and limber tow","cost":2},
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
                                            {"id":2,"text":"Horse and limber tow","cost":2},
                                            {"id":3,"text":"Medium truck","cost":4}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Ost Infantry Platoon",
                        "cost":63,
                        "br":5,
                        'multiplier':4,
                        "p":1,
                        "sub_text":"Platoon Components",
                        "sub_units":[
                            {
                                "id":1,
                                "name":"Command Squad",
                                "cost":0,
                                "br":0,
                                "mandatory":true,
                                "officer":true
                            },
                            {
                                "id":2,
                                "name":"Rifle Squad",
                                "cost":0,
                                "count":3,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"Panzerfaust",
                                        "choices":[
                                            {"id":1,"text":"None","cost":0},
                                            {"id":2,"text":"1 Panzerfaust","cost":5}
                                        ]
                                    }
                                ]
                            },
                            {
                                "id":3,
                                "name":"MMG Team",
                                "cost":0,
                                "count":1,
                                "br":0,
                                "mandatory":true,
                                "options":[
                                    {
                                        "name":"MMG",
                                        "choices":[
                                            {"id":1,"text":"Bipod MG34","cost":0},
                                            {"id":2,"text":"Bipod MG42","cost":4}
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
                                "cost":11,
                                "br":1,
                                "w":1,
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
                                "name":"Heavy Machine Gun team",
                                "cost":16,
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
                                "id":7,
                                "name":"Medium Mortar Team",
                                "cost":22,
                                "br":1,
                                "w":2,
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
                                "cost":20,
                                "br":2,
                                "unique":true,
                                "options":[
                                    {
                                        "name":"Gun type",
                                        "choices":[
                                            {"id":1,"text":"37mm PaK36","cost":0,"w":7},
                                            {"id":2,"text":"37mm PaK36(Stielgranate)","cost":5,"w":7},
                                            {"id":3,"text":"50mm PaK38","cost":4,"w":9},
                                            {"id":4,"text":"75mm PaK97/38","cost":13,"w":0},
                                            {"id":5,"text":"76.2mm PaK36(r)","cost":17,"w":0},
                                            {"id":5,"text":"75mm PaK40","cost":20,"w":14}
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
                                            {"id":2,"text":"Horse and limber tow","cost":2}
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
                        "s":1,
                        "options":[
                            {
                                "name":"Transport",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium truck","cost":4}
                                ]
                            },
                            {
                                "name":"Panzerfaust",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"1 Panzerfaust","cost":5}
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
                        "id":4,
                        "name":"Ost Infantry Squad",
                        "cost":12,
                        "br":1,
                        "s":1
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
                        "name":"StuG III Battery",
                        "cost":120,
                        "multiplier":3,
                        "vc":3,
                        "br":9,
                        "officer":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":2,"text":"3 StuG III Gs","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"Panzer IV",
                        "cost":50,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":3,"text":"Panzer IV G","cost":0},
                                    {"id":4,"text":"Panzer IV H","cost":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"Panther",
                        "cost":90,
                        "br":3,
                        "restricted":true,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":3,"text":"Panther A or G","cost":0}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"StuG III",
                        "cost":43,
                        "br":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":3,"text":"StuG III G","cost":0}
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
                                    {"id":1,"text":"Kübelwagen","cost":0,"v":54}
                                ]
                            }
                        ]
                    },
                    {
                        "id":2,
                        "name":"76.2mmL54 Field Gun",
                        "cost":28,
                        "br":2,
                        "w":18,
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
                                    {"id":2,"text":"Horse drawn limber","cost":2},
                                    {"id":3,"text":"Medium Truck","cost":4}
                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "name":"105mmL28 Howitzer",
                        "cost":36,
                        "br":2,
                        "w":22,
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
                                    {"id":2,"text":"Horse drawn limber","cost":2},
                                    {"id":3,"text":"Medium Truck","cost":4}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"150mmL30 Howitzer",
                        "w":26,
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
                                    {"id":2,"text":"Horse drawn limber","cost":2},
                                    {"id":3,"text":"heavy Truck","cost":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"100mmL52 Cannon",
                        "cost":58,
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
                                    {"id":2,"text":"Horse drawn limber","cost":2},
                                    {"id":3,"text":"heavy Truck","cost":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":4,
                        "name":"150mmL12 Infantry Gun",
                        "cost":54,
                        "br":2,
                        "w":25,
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
                                    {"id":2,"text":"Horse drawn limber","cost":2},
                                    {"id":3,"text":"Medium Truck","cost":6}
                                ]
                            }
                        ]
                    },
                    {
                        "id":5,
                        "name":"Off-Table Mortar Fire",
                        "cost":54,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 80mm mortars","cost":0,"w":2},
                                    {"id":2,"text":"2 120mm mortars","cost":18,"w":3}
                                ]
                            }
                        ]
                    },
                    {
                        "id":6,
                        "name":"Heavy Mortar Team",
                        "cost":29,
                        "br":1,
                        "w":3,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"120mm mortar & 3 crew","cost":0}
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
                                "name":"Mount",
                                "choices":[
                                    {"id":1,"text":"None","cost":0},
                                    {"id":2,"text":"Medium Truck or Heavy Car","cost":4}
                                ]
                            }
                        ]
                    },
                    {
                        "id":7,
                        "name":"Off-Table Artillery Fire",
                        "cost":70,
                        "br":0,
                        "options":[
                            {
                                "name":"Composition",
                                "choices":[
                                    {"id":1,"text":"2 76.2mmL54 field guns","cost":0,'w':18},
                                    {"id":2,"text":"2 105mmL28 howitzer","cost":20,'w':22},
                                    {"id":3,"text":"2 122mmL23 howitzer","cost":46,'w':24},
                                    {"id":4,"text":"2 150mmL30 howitzer","cost":65,"w":26},
                                    {"id":5,"text":"2 100mmL52 cannon","cost":56,'w':21},
                                    {"id":6,"text":"2 170mmL50 cannon","cost":128,'w':28},
                                    {"id":7,"text":"2 150mm Nebelwerfer","cost":65,'w':27},
                                    {"id":8,"text":"2 210mm Nebelwerfer","cost":138,'w':30},
                                    {"id":9,"text":"2 280mm Nebelwerfer","cost":182,'w':31}
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
                        "name":"Minefield",
                        "cost":20,
                        "br":0
                    },
                    {
                        "id":11,
                        "name":"Command Bunker",
                        "cost":30,
                        "br":3,
                        "restricted":true,
                        "unique":true
                    },
                    {
                        "id":12,
                        "name":"Artillery Observation Point",
                        "cost":26,
                        "br":1
                    },
                    {
                        "id":13,
                        "name":"Booby Trapped Building",
                        "cost":25,
                        "br":0
                    },
                    {
                        "id":14,
                        "name":"Barbed Wire",
                        "cost":10,
                        "br":0
                    },
                    {
                        "id":15,
                        "name":"Improvised Road Block",
                        "cost":5,
                        "br":0
                    },
                    {
                        "id":16,
                        "name":"Anti-Tank Ditch/Embankment",
                        "cost":20,
                        "br":0,
                        "restricted":true
                    },
                    {
                        "id":17,
                        "name":"Off-table 88 Anti-Tank shot",
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
                    "name":"Motorised Reconnaissance Patrol",
                    "cost":25,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"3 men with 2 Panzerfausts","cost":0}
                            ]
                        },
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"Kübelwagen","cost":0,"v":54}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Armoured Car",
                    "cost":20,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"SdKfz 222","cost":0},
                                {"id":2,"text":"Panhard 178","cost":4}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Reconnaissance Command",
                    "cost":35,
                    "br":2,
                    "officer":true,
                    "unique":true,
                    "options":[
                        {
                            "name":"Transport",
                            "choices":[
                                {"id":1,"text":"SdKfz 222","cost":0,"v":32}
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
                            "name":"Panzerfaust",
                            "choices":[
                                {"id":1,"text":"None","cost":0},
                                {"id":2,"text":"1 Panzerfaust","cost":5}
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
                                {"id":1,"text":"SdKfz 9 'Famo'","cost":0,"v":67}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Light Bridging Unit",
                    "cost":18,
                    "br":2,
                    "v":61,
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
                    "v":61,
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
                    "name":"Assault Pioneer Squad",
                    "cost":48,
                    "br":3,
                    "restricted":true,
                    "s":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"Medium Truck, 1 Panzerfaust, 2 demo charges","cost":0,"v":58}
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
                    "cost":6,
                    "br":1,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"1 Horse drawn wagon","cost":0},
                                {"id":2,"text":"2 Horse drawn wagons","cost":3},
                                {"id":3,"text":"3 Horse drawn wagons","cost":6}
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
                            {"id":1,"text":"Kübelwagen Ambulance","cost":0,"v":54},
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
                    "name":"Heavy Anti-Aircraft Gun",
                    "cost":48,
                    "br":3,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"88mm FlaK36 AA/AT with 4 crew","cost":0,"w":0}
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
                                {"id":2,"text":"SdkFz 7","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Heavy Anti-Aircraft Gun(Flak39)",
                    "cost":54,
                    "br":3,
                    "restricted":true,
                    "unique":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"88mm FlaK39 AA/AT with 4 crew","cost":0,"w":0}
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
                                {"id":2,"text":"SdkFz 7","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "name":"Heavy Anti-Tank Gun",
                    "cost":71,
                    "br":3,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"88mmL71 PaK43  with 4 crew","cost":23,"w":0}
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
                                {"id":2,"text":"SdkFz 7","cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":4,
                    "name":"Assault Howitzer",
                    "cost":45,
                    "br":3,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":2,"text":"StuH 42 G","cost":0}
                            ]
                        }
                    ]
                },
                {
                    "id":5,
                    "name":"Anti-Aircraft Vehicle",
                    "cost":16,
                    "br":1,
                    "restricted":true,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                            {"id":1,"text":"SdKfz 10 with 20mm","cost":0},
                            {"id":2,"text":"SdKfz 6 with 37mm","cost":4},
                            {"id":3,"text":"SdKfz 7 with 20mm Flakvierling","cost":20}
                            ]
                        }
                    ]
                },
                {
                    "id":6,
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
                            {"id":3,"text":"Medium Truck tow","cost":4},
                            {"id":4,"text":"SdKfz 10 halftrack", "cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":7,
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
                            {"id":3,"text":"SdKfz 11 halftrack tow", "cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":8,
                    "name":"Towed 20mm FlaK Vierling",
                    "cost":42,
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
                            {"id":3,"text":"SdKfz 10 halftrack tow", "cost":8}
                            ]
                        }
                    ]
                },
                {
                    "id":9,
                    "name":"Panzerjaeger Team",
                    "cost":22,
                    "br":1,
                    "options":[
                        {
                            "name":"Composition",
                            "choices":[
                                {"id":1,"text":"2 men with a Panzerschreck","cost":0}
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
                "name":"Timed 80mm Mortar Barrage",
                "w":2,
                "cost":5,
                "br":0
            },
            {
                "id":5,
                "name":"Timed 105mm Barrage",
                "w":22,
                "cost":10,
                "br":0
            },
            {
                "id":6,
                "name":"Timed 150mm Barrage",
                "cost":20,
                "br":0
            },
            {
                "id":7,
                "name":"Timed 150mm Nebelwefer Barrage",
                "cost":30,
                "w":27,
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
        if (choose_ === 0) {
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
    };
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
    text = text +"</select>Officers:<p id='officer_count' style='display:inline; margin-right:20px;'>0</p>Restricted:<p style='display:inline' id='restricted_count'>0</p></div><div style='display:inline; float:right'><div style=' margin-right:12px; display:inline; float=left'><button id='print' class='save_button'>Print</button><button id='load' class='save_button'>Load</button><button id='save' class='save_button'>Save</button></div><span class='force_cost' id='force_cost'>0</span></div></div>";
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
    for (var i=allows.length-1; i >= 0 && localMax > 0; i--){
        if (allows[i] == index) {
            allows.splice(i,1);
            localMax--;
        }
    }
    for (i=requires.length-1, localMax=max; i >= 0 && localMax > 0; i--){
        if ((uniqueRequire===null || requires[i] == uniqueRequire) && $.inArray(""+requires[i],indexArray) != -1) {
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
        for (var j=0; j<requires.length; j++) {
            if ($.inArray(""+requires[j], indexArray) != -1) {
                if (!requiresCount[index])
                    requiresCount[index]=1;
                else
                    requiresCount[index]=requiresCount[index]+1;
            }
        }
    }
    for (index in count){
        if (requiresCount[index] <= count[index]) {
            found = true;
            reduce(allows, requires, index, count[index], null);
        } else if ( index.split(',').length == 1) {
            reduce(allows, requires, index, count[index], null);
            found = true;
        }
    }
        
    if (found) // reduced, so try to reduce again
        reduce_by_count(allows, requires);
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
        if (allows[i].length === 0) {
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
        if (count == 1){
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
    if (requires.length === 0) // no requirements, auto pass
        return true;
    var allows = get_allows();
    if (requires.length > allows.length)
        return false;

    for (var i=0; i<requires.length; i++) {
        var match = false;
        for (var j=0; j<allows.length && match===false; j++){
            if ($.inArray(requires[i], allows[j]) != -1)
                match = true;
        }
        if (match === false) {
            return false;
        }
    }
    // loop simplifying until it simplifies no more
    while ( requires.length > 0 && (simplify_allows(allows, requires) || simplify_requires(allows, requires) || reduce_by_count(allows, requires) )){
    }
    if (requires.length === 0)
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
                if (entries[i].multiplier === 0)
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
            if (entries[i].p)
                text = text + "' data-p='"+entries[i].p;
            if (entries[i].s)
                text = text + "' data-s='"+entries[i].s;
            if (entries[i].v)
                text = text + "' data-v='"+entries[i].v;
            if (entries[i].vc)
                text = text + "' data-vc='"+entries[i].vc;
            if (entries[i].w)
                text = text + "' data-w='"+entries[i].w;
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
                        if (entries[i].options[j].choices[k].v)
                           text = text +"' data-v='"+entries[i].options[j].choices[k].v; 
                        if (entries[i].options[j].choices[k].vc)
                           text = text +"' data-vc='"+entries[i].options[j].choices[k].v; 
                        if (entries[i].options[j].choices[k].w)
                           text = text +"' data-w='"+entries[i].options[j].choices[k].w; 
                        text = text + "' value='" + entries[i].options[j].choices[k].id +"'>"+entries[i].options[j].choices[k].text + "</option>"; 
                    }
                    text = text + "</select></div>";
                }
            }
            if ( entries[i]['sub_units'] )
                text = text + "<button class='sub_button'>"+entries[i]['sub_text']+"</button>";
            text = text + "</div>";
        }
    }
    return text;
}

function force_by_id(which) {
    for (var i=0; i<forces.length; i++){
        if (which == forces[i].id)
            return forces[i];
    }
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
    return '!';
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
    var toLoad = getURLParameter('load');
    if (toLoad) {
        load(toLoad);
        if (getURLParameter('roster'))
            print_render();
    }
    else
        render_force(1, true);
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
// returns 1 if not enough infantry and 2 if too many
function enough_squads(squads, platoons, cost) {
    // need to check force specific platoon restrictions
    var forceId = parseInt($('#forceChoice').val(),10);
    var size = 0;
    rv = 0;
    for (var i=0; i<sizes.length; i++) {
        if (cost < sizes[i]) {
           size = i;
           break;
        }
    }
    var min = forces[forceId].infantry[size][0];
    var max = forces[forceId].infantry[size][1];
    if ( min[0] ) {
        if ( squads < min[0] && platoons === 0 )
            return 1;
    }
    if ( min[1] ) {
        if ( platoons < min[1] )
            return 1;
    }
    if ( max[0] ) {
        if ( platoons > min[0] )
            return 2;
    }
    if ( max[1] ) {
        if ( platoons > min[1] )
            return 2;
    }
    return 0;
}
function squads_check(cost, entries) {
    var squads = 0;
    var platoons = 0;
    var rv;
    $(entries).each(function() {
        if ($(this).data('s'))
            squads++;
        if ($(this).data('p'))
            platoons++;
    });
    rv = enough_squads(squads, platoons, cost);
    if ( rv == 1 )
        alert('greg WIP');

}
function update_cost() {
    var cost = 0;
    var br=0;
    var entries = get_selected_entries();
    $(entries).each(function() {
            cost = cost + parseInt($(this).find('#cost').text(),10);
            br = br + parseInt($(this).find('#br').text(),10);});
    $('#force_cost').text(cost + ' / ' + br +'br');
    var officers = entries.filter( function() { if ($(this).data('officer')) return true; return false; } );
    $('#officer_count').text(officers.length);
    var restricted = entries.filter( function() { if ($(this).data('restricted')) return true; return false; } );
    $('#restricted_count').text(restricted.length);
    //greg WIP squads_check(cost, entries);
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
    $(sub).hide();
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
    text.push(encode($(entry).data('bg_id')));
    if (N > 1) // Save if this is the Nth of this entry
        text.push('_', encode(N));
    $(entry).find('select').each( function() {
        var num_opts = $(this).children('option').length;
        // only bother saving ones with more than 1 possible choice
        // and which are not the default value
        if (num_opts > 1 && $(this).val() > 1) {
            text.push( '-', encode($(this).data('bg_id')), encode(parseInt($(this).val(),10)));
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
        if (depth === 0) //only include section code for top level sections
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
        Clear: function() {
            $('#load_input').val('');
        },
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
    render_force(parseInt($(this).val(),10), true);
    $('.save_button, .load_button, .sub_button').button();
    update_accordion();
}
function print_header(force) {
    var text = "<div style='margin:0px auto; width:60%;'><h3 class='p_title p_h3' style='display:inline; padding:auto;'>"+ force.name + "</h3><h4 class='p_+h4' style='display:inline; float:right; margin:0px 10px;'>(Officers: "+$('#officer_count').text()+")  Army Size: "+army_size_string()+"</h4><h4 class='p_+h4' style='display:inline; float:right; margin:0px;'>"+$('#force_cost').text()+"</div>";
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
            var selected = $(this).children("select option").filter(':selected');
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

    // Find any vehicles used by these entries
    var v = $(entry).data('v');
    var vc = $(entry).data('vc');
    if ( !v ) {
        var selects = $(entry).find("select option").filter(':selected');
        for (var i=0; i<selects.length; i++) {
            if ( $(selects[i]).data('v') ) {
                v = $(selects[i]).data('v');
                if (!vc)
                    vc = $(selects[i]).data('vc');
            }
        }
    }
    if (v) {
        if ( !vc )
            vc = 1;
        if ( listVehicles[v] )
            listVehicles[v] = listVehicles[v] + vc;
        else
            listVehicles[v] = vc;
    }
    var w = $(entry).data('w');
    if ( !w ) {
        selects = $(entry).find("select option").filter(':selected');
        for (i=0; i<selects.length; i++) {
            if ( $(selects[i]).data('w') )
                w = $(selects[i]).data('w');
        }
    }
    if (w)
        listWeapons[w]=1;

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
    return text;
}
function print_weapons(listWeapons) {
    var text="";
    for (var key in listWeapons) {
        var weapon = weapons[key];
        var extendedRange=false;
        for (var i=0; i < weapon.stats.length; i++) {
            if (weapon.stats[i].strength.length==6)
                extendedRange = true;
        }
        text = text + '<table><tr><th>'+weapon.name+'</th><th>0"-10"</th><th>10"-20"</th><th>20"-30"</th><th>30"-40"</th><th>40"-50"</th>';
        if (extendedRange)
            text = text+'<th>50"-70"</th>';
        text = text + '</tr>';
        for (i=0; i < weapon.stats.length; i++) {
            var mode = weapon.stats[i];
            text = text + "<tr><td style='white-space:pre;'>"+mode.type;
            if ( mode.effect ) {
                text = text + " ("+mode.effect + ")</td>";
            } else if ( mode.effect == '') {
                text = text + " (   /  +)</td>";
            }
            for (var j=0; j<mode.strength.length; j++) {
                if (mode.strength[j] == '')
                    text = text + "<td>&nbsp;</td>";
                else
                    text = text + "<td>"+mode.strength[j]+"</td>";
            }
            text = text + "</tr>";
        }
    }
    text = text+"</table>";
    return text;
}
function print_ammo(listV) {
    var text="";
    for (var key in listV) {
        var v = vehicles[key];
        if ( v.ammo ) {
            text = text + "<div class='p_section'>";
            text = text + "<h4 class='p_h4_ammo'>" + v.name +"</h4>";
            for (var i=0; i<listV[key]; i++)
                text = text + "<div class='p_entry'><span class='p_ammo_name'>ID:</span><span class='p_ammo_number'>H:</span><span class='p_ammo_number'>A:</span></div>";
            //    text = text + "<div><h4 class='p_h4'>" + v.name +"</h4><p class='p_h4 right'>"+$(entry).find('#cost').text() + "/" + $(entry).find('#br').text() + "</p></div>";
            text = text + "</div>";
        }
    }


    return text;
}
function print_vehicles(listV, listW) {
    var text="";
    var first = true;
    text = text + "<div class='p_section'>";
    for (var key in listV) {
        var v = vehicles[key];
        if (first) {
            first=false;
            text = text + "<table style='border:1px;'><tr><th></th><th>Move</th><th>Armour</th><th>Weapon</th><th>Special</th></tr>";
        }
        text = text +"<tr><td>"+v.name+"</td><td style='white-space:pre;'>";
        if (v.move)
            text = text+v.move[0]+"   /   "+v.move[1]+"</td><td style='white-space:pre;'>";
        else
            text = text+"    /    </td><td style='white-space:pre;'>";
        if (v.armour) {
            if (v.armour === true)
                text = text + "    /    /    </td><td>";
            else
                text = text +v.armour[0]+" / " + v.armour[1]+" / "+v.armour[2]+"</td><td>";
        }
        else {
            if (v.hits === true)
                text = text + "    hit(s)";
            else {
                text = text + v.hits;
                if ( v.hits <= 1 )
                    text = text + " hit";
                else
                    text = text + " hits";
            }
            text = text + "</td><td>";
        }

        if (v.weapons){
            for (var k=0; k<v.weapons.length; k++) {
                if ( k>0 )
                    text = text +", ";
                text = text + weapons[v.weapons[k]].name;
                if ( v.ammo && v.ammo !== true ) {
                    text = text + " (" + v.ammo[k]+")";
                }
                listW[v.weapons[k]]=1;
            }
            text = text +"</td><td>";
        } else {
            text = text + "&nbsp;</td><td>";
        }
        var special = "";
        if (v.open)
            special = "Open-Topped";
        if (v.special) {
            if (v.open)
                special = special + ", ";
            special = special + v.special;
        }
        text = text + special + "</td></tr>";
    }
    if (!first)
        text = text + "</table>";
    text = text + "</div>";
    text = text + "<div class='p_section'>"+ print_weapons(listW) + "</div>";
    
    //text = text + "<div class='p_section' id='p_ammo'>"+ print_ammo(listV) + "</div>";
    text = text + print_ammo(listV);
    return text;
}
function print_render(){
    var force = force_by_id($('#main').data('bg_id'));
    listVehicles = {};
    listWeapons = {};
    var sort = null;
    if ( false ) // if set to true will layout largest section first.
        sort = 'height';
    $('body').append($('<div id="p_div" class="p_div clearfix"></div>').html(print_header(force)));
    $('#p_div').append($('<div id="p_div_inner" class="p_div clearfix"></div>').html(print_sections()+print_vehicles(listVehicles,listWeapons)));

    $('#p_div_inner').isotope({
        itemSelector:'.p_section',
        layoutMode:'masonry',
        getSortData : {
            height : function( $elem ) {
                return -1*$elem.height();
            }
        },
        sortBy:sort
    });
    $('#p_ammo').isotope({itemSelector:'.p_parent'});
    $('#main').hide();
}
function merge_vehicles(){
    for (var i=0; i<vehicles_private.length; i++) {
        if (vehicles_private[i].move)
            vehicles[i].move=vehicles_private[i].move;
        if (vehicles_private[i].armour)
            vehicles[i].armour=vehicles_private[i].armour;
        if (vehicles_private[i].ammo)
            vehicles[i].ammo=vehicles_private[i].ammo;
        if (vehicles_private[i].mg)
            vehicles[i].mg=vehicles_private[i].mg;
        if (vehicles_private[i].hits)
            vehicles[i].hits=vehicles_private[i].hits;
    }
}
function merge_weapons(){
    for (var key in weapons) {
        if (weapons_private[key].stats)
            weapons[key].stats = weapons_private[key].stats;
    }
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
    if ( vehicles_private !== undefined )
        merge_vehicles();
    if ( weapons_private !== undefined )
        merge_weapons();
});
