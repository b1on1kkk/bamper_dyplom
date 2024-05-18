// all data was parsed from https://bamper.by/

function downloadTxt(text, filename){
  blob = new Blob([text], {type: "text/plain"});
  url = window.URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}

const brands = [
  {
    "id": 1,
    "code": "acura",
    "name": "Acura"
  },
  {
    "id": 2,
    "code": "aito",
    "name": "Aito"
  },
  {
    "id": 3,
    "code": "alfaromeo",
    "name": "Alfa Romeo"
  },
  {
    "id": 4,
    "code": "aprilia",
    "name": "Aprilia"
  },
  {
    "id": 5,
    "code": "arcticcat",
    "name": "Arctic Cat"
  },
  {
    "id": 6,
    "code": "asia",
    "name": "Asia"
  },
  {
    "id": 7,
    "code": "astonmartin",
    "name": "Aston Martin"
  },
  {
    "id": 8,
    "code": "audi",
    "name": "Audi"
  },
  {
    "id": 9,
    "code": "austin",
    "name": "Austin"
  },
  {
    "id": 10,
    "code": "baic",
    "name": "BAIC"
  },
  {
    "id": 11,
    "code": "baw",
    "name": "BAW"
  },
  {
    "id": 12,
    "code": "belgee",
    "name": "Belgee"
  },
  {
    "id": 13,
    "code": "bentley",
    "name": "Bentley"
  },
  {
    "id": 14,
    "code": "beta",
    "name": "Beta"
  },
  {
    "id": 15,
    "code": "bmw",
    "name": "BMW"
  }
]

const models = [
  {
  "id": 1,
  "brand_id": 1,
  "code": "cl",
  "name": "CL"
  },
  {
  "id": 2,
  "brand_id": 1,
  "code": "ilx",
  "name": "ILX"
  },
  {
  "id": 3,
  "brand_id": 1,
  "code": "integra",
  "name": "Integra"
  },
  {
  "id": 4,
  "brand_id": 1,
  "code": "legend",
  "name": "Legend"
  },
  {
  "id": 5,
  "brand_id": 1,
  "code": "mdx",
  "name": "MDX"
  },
  {
  "id": 6,
  "brand_id": 1,
  "code": "rdx",
  "name": "RDX"
  },
  {
  "id": 7,
  "brand_id": 1,
  "code": "rl",
  "name": "RL"
  },
  {
  "id": 8,
  "brand_id": 1,
  "code": "rlx",
  "name": "RLX"
  },
  {
  "id": 9,
  "brand_id": 1,
  "code": "rsx",
  "name": "RSX"
  },
  {
  "id": 10,
  "brand_id": 1,
  "code": "slx",
  "name": "SLX"
  },
  {
  "id": 11,
  "brand_id": 1,
  "code": "tl",
  "name": "TL"
  },
  {
  "id": 12,
  "brand_id": 1,
  "code": "tlx",
  "name": "TLX"
  },
  {
  "id": 13,
  "brand_id": 1,
  "code": "tsx",
  "name": "TSX"
  },
  {
  "id": 14,
  "brand_id": 1,
  "code": "zdx",
  "name": "ZDX"
  },
  {
  "id": 15,
  "brand_id": 2,
  "code": "m5",
  "name": "M5"
  },
  {
  "id": 16,
  "brand_id": 2,
  "code": "m7",
  "name": "M7"
  },
  {
  "id": 17,
  "brand_id": 2,
  "code": "m9",
  "name": "M9"
  },
  {
  "id": 18,
  "brand_id": 3,
  "code": "145",
  "name": "145"
  },
  {
  "id": 19,
  "brand_id": 3,
  "code": "146",
  "name": "146"
  },
  {
  "id": 20,
  "brand_id": 3,
  "code": "147",
  "name": "147"
  },
  {
  "id": 21,
  "brand_id": 3,
  "code": "155",
  "name": "155"
  },
  {
  "id": 22,
  "brand_id": 3,
  "code": "156",
  "name": "156"
  },
  {
  "id": 23,
  "brand_id": 3,
  "code": "159",
  "name": "159"
  },
  {
  "id": 24,
  "brand_id": 3,
  "code": "164",
  "name": "164"
  },
  {
  "id": 25,
  "brand_id": 3,
  "code": "166",
  "name": "166"
  },
  {
  "id": 26,
  "brand_id": 3,
  "code": "33",
  "name": "33"
  },
  {
  "id": 27,
  "brand_id": 3,
  "code": "75",
  "name": "75"
  },
  {
  "id": 28,
  "brand_id": 3,
  "code": "90",
  "name": "90"
  },
  {
  "id": 29,
  "brand_id": 3,
  "code": "brera",
  "name": "Brera"
  },
  {
  "id": 30,
  "brand_id": 3,
  "code": "giulia",
  "name": "Giulia"
  },
  {
  "id": 31,
  "brand_id": 3,
  "code": "giulietta",
  "name": "Giulietta"
  },
  {
  "id": 32,
  "brand_id": 3,
  "code": "gt",
  "name": "GT"
  },
  {
  "id": 33,
  "brand_id": 3,
  "code": "gtv",
  "name": "GTV"
  },
  {
  "id": 34,
  "brand_id": 3,
  "code": "mito",
  "name": "MiTo"
  },
  {
  "id": 35,
  "brand_id": 3,
  "code": "spider",
  "name": "Spider"
  },
  {
  "id": 36,
  "brand_id": 3,
  "code": "stelvio",
  "name": "Stelvio"
  },
  {
  "id": 37,
  "brand_id": 4,
  "code": "caponord",
  "name": "Caponord"
  },
  {
  "id": 38,
  "brand_id": 4,
  "code": "dorsoduro",
  "name": "Dorsoduro"
  },
  {
  "id": 39,
  "brand_id": 4,
  "code": "mana",
  "name": "Mana"
  },
  {
  "id": 40,
  "brand_id": 4,
  "code": "pegaso",
  "name": "Pegaso"
  },
  {
  "id": 41,
  "brand_id": 4,
  "code": "rs",
  "name": "RS"
  },
  {
  "id": 42,
  "brand_id": 4,
  "code": "rs4",
  "name": "RS4"
  },
  {
  "id": 43,
  "brand_id": 4,
  "code": "rst",
  "name": "RST"
  },
  {
  "id": 44,
  "brand_id": 4,
  "code": "rsv",
  "name": "RSV"
  },
  {
  "id": 45,
  "brand_id": 4,
  "code": "rsv4",
  "name": "RSV4"
  },
  {
  "id": 46,
  "brand_id": 4,
  "code": "sl",
  "name": "SL"
  },
  {
  "id": 47,
  "brand_id": 4,
  "code": "tuono",
  "name": "Tuono"
  },
  {
  "id": 48,
  "brand_id": 6,
  "code": "retona",
  "name": "Retona"
  },
  {
  "id": 49,
  "brand_id": 6,
  "code": "roksta",
  "name": "Roksta"
  },
  {
  "id": 50,
  "brand_id": 6,
  "code": "towner",
  "name": "Towner"
  },
  {
  "id": 51,
  "brand_id": 7,
  "code": "db11",
  "name": "DB11"
  },
  {
  "id": 52,
  "brand_id": 7,
  "code": "vantage",
  "name": "Vantage"
  },
  {
  "id": 53,
  "brand_id": 8,
  "code": "100",
  "name": "100"
  },
  {
  "id": 54,
  "brand_id": 8,
  "code": "200",
  "name": "200"
  },
  {
  "id": 55,
  "brand_id": 8,
  "code": "80",
  "name": "80"
  },
  {
  "id": 56,
  "brand_id": 8,
  "code": "90",
  "name": "90"
  },
  {
  "id": 57,
  "brand_id": 8,
  "code": "a1",
  "name": "A1"
  },
  {
  "id": 58,
  "brand_id": 8,
  "code": "a2",
  "name": "A2"
  },
  {
  "id": 59,
  "brand_id": 8,
  "code": "a3",
  "name": "A3"
  },
  {
  "id": 60,
  "brand_id": 8,
  "code": "a4",
  "name": "A4"
  },
  {
  "id": 61,
  "brand_id": 8,
  "code": "a4allroad",
  "name": "A4 Allroad"
  },
  {
  "id": 62,
  "brand_id": 8,
  "code": "a5",
  "name": "A5"
  },
  {
  "id": 63,
  "brand_id": 8,
  "code": "a6",
  "name": "A6"
  },
  {
  "id": 64,
  "brand_id": 8,
  "code": "a6allroad",
  "name": "A6 Allroad"
  },
  {
  "id": 65,
  "brand_id": 8,
  "code": "a7",
  "name": "A7"
  },
  {
  "id": 66,
  "brand_id": 8,
  "code": "a8",
  "name": "A8"
  },
  {
  "id": 67,
  "brand_id": 8,
  "code": "q5e_tron",
  "name": "Q5 E-tron"
  },
  {
  "id": 68,
  "brand_id": 8,
  "code": "coupe",
  "name": "Coupe"
  },
  {
  "id": 69,
  "brand_id": 8,
  "code": "e_tron",
  "name": "E-tron"
  },
  {
  "id": 70,
  "brand_id": 8,
  "code": "e_trongt",
  "name": "E-tron GT"
  },
  {
  "id": 71,
  "brand_id": 8,
  "code": "e_trons",
  "name": "E-tron S"
  },
  {
  "id": 72,
  "brand_id": 8,
  "code": "e_tronsportback",
  "name": "E-tron Sportback"
  },
  {
  "id": 73,
  "brand_id": 8,
  "code": "e_tronssportback",
  "name": "E-tron S Sportback"
  },
  {
  "id": 74,
  "brand_id": 8,
  "code": "q2",
  "name": "Q2"
  },
  {
  "id": 75,
  "brand_id": 8,
  "code": "q3",
  "name": "Q3"
  },
  {
  "id": 76,
  "brand_id": 8,
  "code": "q4e_tron",
  "name": "Q4 E-tron"
  },
  {
  "id": 77,
  "brand_id": 8,
  "code": "q5",
  "name": "Q5"
  },
  {
  "id": 78,
  "brand_id": 8,
  "code": "q7",
  "name": "Q7"
  },
  {
  "id": 79,
  "brand_id": 8,
  "code": "q8",
  "name": "Q8"
  },
  {
  "id": 80,
  "brand_id": 8,
  "code": "q8e_tron",
  "name": "Q8 E-tron"
  },
  {
  "id": 81,
  "brand_id": 8,
  "code": "q8sportbacke_tron",
  "name": "Q8 Sportback E-tron"
  },
  {
  "id": 82,
  "brand_id": 8,
  "code": "r8",
  "name": "R8"
  },
  {
  "id": 83,
  "brand_id": 8,
  "code": "rs3",
  "name": "RS3"
  },
  {
  "id": 84,
  "brand_id": 8,
  "code": "rs4",
  "name": "RS4"
  },
  {
  "id": 85,
  "brand_id": 8,
  "code": "rs5",
  "name": "RS5"
  },
  {
  "id": 86,
  "brand_id": 8,
  "code": "rs6",
  "name": "RS6"
  },
  {
  "id": 87,
  "brand_id": 8,
  "code": "rs7",
  "name": "RS7"
  },
  {
  "id": 88,
  "brand_id": 8,
  "code": "rsq3",
  "name": "RS Q3"
  },
  {
  "id": 89,
  "brand_id": 8,
  "code": "rsq8",
  "name": "RS Q8"
  },
  {
  "id": 90,
  "brand_id": 8,
  "code": "s1",
  "name": "S1"
  },
  {
  "id": 91,
  "brand_id": 8,
  "code": "s3",
  "name": "S3"
  },
  {
  "id": 92,
  "brand_id": 8,
  "code": "s4",
  "name": "S4"
  },
  {
  "id": 93,
  "brand_id": 8,
  "code": "s5",
  "name": "S5"
  },
  {
  "id": 94,
  "brand_id": 8,
  "code": "s6",
  "name": "S6"
  },
  {
  "id": 95,
  "brand_id": 8,
  "code": "s7",
  "name": "S7"
  },
  {
  "id": 96,
  "brand_id": 8,
  "code": "s8",
  "name": "S8"
  },
  {
  "id": 97,
  "brand_id": 8,
  "code": "sq5",
  "name": "SQ5"
  },
  {
  "id": 98,
  "brand_id": 8,
  "code": "sq7",
  "name": "SQ7"
  },
  {
  "id": 99,
  "brand_id": 8,
  "code": "sq8",
  "name": "SQ8"
  },
  {
  "id": 100,
  "brand_id": 8,
  "code": "tt",
  "name": "TT"
  },
  {
  "id": 101,
  "brand_id": 8,
  "code": "ttrs",
  "name": "TT RS"
  },
  {
  "id": 102,
  "brand_id": 8,
  "code": "tts",
  "name": "TTS"
  },
  {
  "id": 103,
  "brand_id": 8,
  "code": "v8",
  "name": "V8"
  },
  {
  "id": 104,
  "brand_id": 9,
  "code": "metro",
  "name": "Metro"
  },
  {
  "id": 105,
  "brand_id": 9,
  "code": "montego",
  "name": "Montego"
  },
  {
  "id": 106,
  "brand_id": 10,
  "code": "206c",
  "name": "206C"
  },
  {
  "id": 107,
  "brand_id": 11,
  "code": "fenix",
  "name": "Fenix"
  },
  {
  "id": 108,
  "brand_id": 12,
  "code": "x50",
  "name": "X50"
  },
  {
  "id": 109,
  "brand_id": 13,
  "code": "arnage",
  "name": "Arnage"
  },
  {
  "id": 110,
  "brand_id": 13,
  "code": "azure",
  "name": "Azure"
  },
  {
  "id": 111,
  "brand_id": 13,
  "code": "bentayga",
  "name": "Bentayga"
  },
  {
  "id": 112,
  "brand_id": 13,
  "code": "continental",
  "name": "Continental"
  },
  {
  "id": 113,
  "brand_id": 13,
  "code": "continentalgt",
  "name": "Continental GT"
  },
  {
  "id": 114,
  "brand_id": 13,
  "code": "flyingspur",
  "name": "Flying Spur"
  },
  {
  "id": 115,
  "brand_id": 13,
  "code": "mulsanne",
  "name": "Mulsanne"
  },
  {
  "id": 116,
  "brand_id": 14,
  "code": "rr",
  "name": "RR"
  },
  {
  "id": 117,
  "brand_id": 15,
  "code": "02e10",
  "name": "02 E10"
  },
  {
  "id": 119,
  "brand_id": 15,
  "code": "1e87_e81_e82_e88",
  "name": "1 E87/E81/E82/E88"
  },
  {
  "id": 120,
  "brand_id": 15,
  "code": "1f20_f21",
  "name": "1 F20/F21"
  },
  {
  "id": 121,
  "brand_id": 15,
  "code": "1f40",
  "name": "1 F40"
  },
  {
  "id": 123,
  "brand_id": 15,
  "code": "2f22_f23",
  "name": "2 F22/F23"
  },
  {
  "id": 124,
  "brand_id": 15,
  "code": "2f44",
  "name": "2 F44"
  },
  {
  "id": 125,
  "brand_id": 15,
  "code": "2f45_f46",
  "name": "2 F45/F46"
  },
  {
  "id": 126,
  "brand_id": 15,
  "code": "2g42",
  "name": "2 G42"
  },
  {
  "id": 127,
  "brand_id": 15,
  "code": "2u06",
  "name": "2 U06"
  },
  {
  "id": 129,
  "brand_id": 15,
  "code": "3e21",
  "name": "3 E21"
  },
  {
  "id": 130,
  "brand_id": 15,
  "code": "3e30",
  "name": "3 E30"
  },
  {
  "id": 131,
  "brand_id": 15,
  "code": "3e36",
  "name": "3 E36"
  },
  {
  "id": 132,
  "brand_id": 15,
  "code": "3e46",
  "name": "3 E46"
  },
  {
  "id": 133,
  "brand_id": 15,
  "code": "3e90_e91_e92_e93",
  "name": "3 E90/E91/E92/E93"
  },
  {
  "id": 134,
  "brand_id": 15,
  "code": "3f30_f31_gtf34",
  "name": "3 F30/F31/GT F34"
  },
  {
  "id": 135,
  "brand_id": 15,
  "code": "3g20_g21",
  "name": "3 G20/G21"
  },
  {
  "id": 136,
  "brand_id": 15,
  "code": "4f32_f33_gtf36",
  "name": "4 F32/F33/GT F36"
  },
  {
  "id": 137,
  "brand_id": 15,
  "code": "4g22_g23",
  "name": "4 G22/G23"
  },
  {
  "id": 138,
  "brand_id": 15,
  "code": "4g26",
  "name": "4 G26"
  },
  {
  "id": 140,
  "brand_id": 15,
  "code": "5e12",
  "name": "5 E12"
  },
  {
  "id": 141,
  "brand_id": 15,
  "code": "5e28",
  "name": "5 E28"
  },
  {
  "id": 142,
  "brand_id": 15,
  "code": "5e34",
  "name": "5 E34"
  },
  {
  "id": 143,
  "brand_id": 15,
  "code": "5e39",
  "name": "5 E39"
  },
  {
  "id": 144,
  "brand_id": 15,
  "code": "5e60_e61",
  "name": "5 E60/E61"
  },
  {
  "id": 145,
  "brand_id": 15,
  "code": "5f10_f11_gtf07",
  "name": "5 F10/F11/GT F07"
  },
  {
  "id": 146,
  "brand_id": 15,
  "code": "5g30_g31",
  "name": "5 G30/G31"
  },
  {
  "id": 147,
  "brand_id": 15,
  "code": "5g60",
  "name": "5 G60"
  },
  {
  "id": 149,
  "brand_id": 15,
  "code": "6e24",
  "name": "6 E24"
  },
  {
  "id": 150,
  "brand_id": 15,
  "code": "6e63_e64",
  "name": "6 E63/E64"
  },
  {
  "id": 151,
  "brand_id": 15,
  "code": "6f06_f12_f13",
  "name": "6 F06/F12/F13"
  },
  {
  "id": 152,
  "brand_id": 15,
  "code": "6g32",
  "name": "6 G32"
  },
  {
  "id": 153,
  "brand_id": 15,
  "code": "7",
  "name": "7"
  },
  {
  "id": 154,
  "brand_id": 15,
  "code": "7e23",
  "name": "7 E23"
  },
  {
  "id": 155,
  "brand_id": 15,
  "code": "7e32",
  "name": "7 E32"
  },
  {
  "id": 156,
  "brand_id": 15,
  "code": "7e38",
  "name": "7 E38"
  },
  {
  "id": 157,
  "brand_id": 15,
  "code": "7e65_e66",
  "name": "7 E65/E66"
  },
  {
  "id": 158,
  "brand_id": 15,
  "code": "7f01_f02",
  "name": "7 F01/F02"
  },
  {
  "id": 159,
  "brand_id": 15,
  "code": "7g11_g12",
  "name": "7 G11/G12"
  },
  {
  "id": 160,
  "brand_id": 15,
  "code": "7g70",
  "name": "7 G70"
  },
  {
  "id": 161,
  "brand_id": 15,
  "code": "8e31",
  "name": "8 E31"
  },
  {
  "id": 162,
  "brand_id": 15,
  "code": "8g14_g15_g16",
  "name": "8 G14/G15/G16"
  },
  {
  "id": 163,
  "brand_id": 15,
  "code": "i3",
  "name": "i3"
  },
  {
  "id": 164,
  "brand_id": 15,
  "code": "i4g26",
  "name": "i4 G26"
  },
  {
  "id": 165,
  "brand_id": 15,
  "code": "i7",
  "name": "i7"
  },
  {
  "id": 166,
  "brand_id": 15,
  "code": "i8",
  "name": "i8"
  },
  {
  "id": 167,
  "brand_id": 15,
  "code": "ix1",
  "name": "iX1"
  },
  {
  "id": 168,
  "brand_id": 15,
  "code": "ix3g08",
  "name": "iX3 G08"
  },
  {
  "id": 169,
  "brand_id": 15,
  "code": "ixi20",
  "name": "iX I20"
  },
  {
  "id": 170,
  "brand_id": 15,
  "code": "m2f87",
  "name": "M2 F87"
  },
  {
  "id": 171,
  "brand_id": 15,
  "code": "m2g87",
  "name": "M2 G87"
  },
  {
  "id": 172,
  "brand_id": 15,
  "code": "m3",
  "name": "M3"
  },
  {
  "id": 173,
  "brand_id": 15,
  "code": "m4f82_f83",
  "name": "M4 F82/F83"
  },
  {
  "id": 174,
  "brand_id": 15,
  "code": "m4g82",
  "name": "M4 G82"
  },
  {

    "id": 175,
"brand_id": 15,
"code": "m5",
"name": "M5"
  },
  {
    "id": 176,
    "brand_id": 15,
    "code": "m6",
    "name": "M6"
    },
    {
    "id": 177,
    "brand_id": 15,
    "code": "m8",
    "name": "M8"
    },
    {
    "id": 178,
    "brand_id": 15,
    "code": "x1",
    "name": "X1"
    },
    {
    "id": 179,
    "brand_id": 15,
    "code": "x1e84",
    "name": "X1 E84"
    },
    {
    "id": 180,
    "brand_id": 15,
    "code": "x1f48",
    "name": "X1 F48"
    },
    {
    "id": 181,
    "brand_id": 15,
    "code": "x1u11",
    "name": "X1 U11"
    },
    {
    "id": 182,
    "brand_id": 15,
    "code": "x2f39",
    "name": "X2 F39"
    },
    {
    "id": 183,
    "brand_id": 15,
    "code": "x3",
    "name": "X3"
    },
    {
    "id": 184,
    "brand_id": 15,
    "code": "x3e83",
    "name": "X3 E83"
    },
    {
    "id": 185,
    "brand_id": 15,
    "code": "x3f25",
    "name": "X3 F25"
    },
    {
    "id": 186,
    "brand_id": 15,
    "code": "x3g01",
    "name": "X3 G01"
    },
    {
    "id": 187,
    "brand_id": 15,
    "code": "x3mf97",
    "name": "X3 M F97"
    },
    {
    "id": 188,
    "brand_id": 15,
    "code": "x4",
    "name": "X4"
    },
    {
    "id": 189,
    "brand_id": 15,
    "code": "x4f26",
    "name": "X4 F26"
    },
    {
    "id": 190,
    "brand_id": 15,
    "code": "x4g02",
    "name": "X4 G02"
    },
    {
    "id": 191,
    "brand_id": 15,
    "code": "x4mf98",
    "name": "X4 M F98"
    },
    {
    "id": 192,
    "brand_id": 15,
    "code": "x5",
    "name": "X5"
    },
    {
    "id": 193,
    "brand_id": 15,
    "code": "x5e53",
    "name": "X5 E53"
    },
    {
    "id": 194,
    "brand_id": 15,
    "code": "x5e70",
    "name": "X5 E70"
    },
    {
    "id": 195,
    "brand_id": 15,
    "code": "x5f15",
    "name": "X5 F15"
    },
    {
    "id": 196,
    "brand_id": 15,
    "code": "x5g05",
    "name": "X5 G05"
    },
    {
    "id": 197,
    "brand_id": 15,
    "code": "x5me70",
    "name": "X5 M E70"
    },
    {
    "id": 198,
    "brand_id": 15,
    "code": "x5mf85",
    "name": "X5 M F85"
    },
    {
    "id": 199,
    "brand_id": 15,
    "code": "x5mf95",
    "name": "X5 M F95"
    },
    {
    "id": 200,
    "brand_id": 15,
    "code": "x6",
    "name": "X6"
    },
    {
    "id": 201,
    "brand_id": 15,
    "code": "x6e71_e72",
    "name": "X6 E71/E72"
    },
    {
    "id": 202,
    "brand_id": 15,
    "code": "x6f16",
    "name": "X6 F16"
    },
    {
    "id": 203,
    "brand_id": 15,
    "code": "x6g06",
    "name": "X6 G06"
    },
    {
    "id": 204,
    "brand_id": 15,
    "code": "x6mf86",
    "name": "X6 M F86"
    },
    {
    "id": 205,
    "brand_id": 15,
    "code": "x6mf96",
    "name": "X6 M F96"
    },
    {
    "id": 206,
    "brand_id": 15,
    "code": "x7g07",
    "name": "X7 G07"
    },
    {
    "id": 207,
    "brand_id": 15,
    "code": "xmg09",
    "name": "XM G09"
    },
    {
    "id": 208,
    "brand_id": 15,
    "code": "z1",
    "name": "Z1"
    },
    {
    "id": 209,
    "brand_id": 15,
    "code": "z3",
    "name": "Z3"
    },
    {
    "id": 210,
    "brand_id": 15,
    "code": "z4",
    "name": "Z4"
    },
    {
    "id": 211,
    "brand_id": 15,
    "code": "z8",
    "name": "Z8"
    }
]

const body_type = [
    "седан",
    "хэтчбек",
    "универсал",
    "внедорожник",
    "минивэн",
    "купе",
    "лифтбек",
    "пикап",
    "кабриолет",
    "фургон",
    "грузовик",
    "бортовой",
    "тягач",
    "автобус",
    "прицеп",
    "полуприцеп",
    "погрузчик"
]

const fuel = [
    "бензин",
    "дизель",
    "гибрид",
    "электро"
]

const transmissions = [
    "АКПП",
    "МКПП",
    "робот",
    "вариатор"
]

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArticle() {
  const numericChars = '0123456789';

  const randomString = Array.from({ length: 8 }, () => numericChars[Math.floor(Math.random() * numericChars.length)]).join('');

  return randomString;
}

function generateRandomSpareId() {
  const numericChars = '0123456789';
  const alphabetChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const numericPart1 = Array.from({ length: 3 }, () => numericChars[Math.floor(Math.random() * numericChars.length)]).join('');
  const numericPart2 = Array.from({ length: 2 }, () => numericChars[Math.floor(Math.random() * numericChars.length)]).join('');
  const alphabetPart = Array.from({ length: 2 }, () => alphabetChars[Math.floor(Math.random() * alphabetChars.length)]).join('');

  return `${numericPart1}${numericPart2}${alphabetPart}8A01`;
}

const arr = []

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla erat eu est ornare aliquam. Integer posuere congue lorem, et vestibulum nisi. Aliquam porttitor orci sit amet sem pretium rhoncus. Suspendisse potenti."
const spared_id = generateRandomSpareId();
const price = randomInteger(5, 500)
const body = body_type[randomInteger(0, body_type.length - 1)]
const fuel_type = fuel[randomInteger(0, fuel.length - 1)]
const transmission = transmissions[randomInteger(0, transmissions.length - 1)]
const engine_volume = Math.floor(Math.random() * (4 - 2 + 1) + 2) + Math.random().toFixed(1);

    
const title = document.querySelectorAll('.add-title')
const parent_filter_span = document.querySelectorAll('.select2-selection__rendered')

const brand_name = parent_filter_span[0].innerText.replace(/×/, '').trim()
const model_name = parent_filter_span[1].innerText.replace(/×/, '').trim()

for (let i = 0; i < title.length; i++) {
    let brand_id;
    let model_id;

    for (let j = 0; j < brands.length; j++) {
      if(brands[j].name.toLowerCase() === brand_name.toLowerCase()){
        brand_id = brands[j].id 
        break;
      } 
    }
    
    for (let j = 0; j < models.length; j++) {
      if(models[j].name.toLowerCase() === model_name.toLowerCase()){
        model_id = models[j].id 
        break;
      }
    }
    
    arr.push({
        brand_id: brand_id,
        model_id: model_id,
        title: title[i].innerText,
        description: description,
        category: title[i].querySelector('b').innerText.trim() ? title[i].querySelector('b').innerText.trim() : null,
        article: generateRandomArticle(),
        img_link: document.querySelectorAll('.image-wrap')[i].childNodes[0].src,
        spared_id: generateRandomSpareId(),
        price: randomInteger(5, 500),
        year: title[i].innerText.split(',')[title[i].innerText.split(',').length - 1].replace(/\s*г\./, "").trim(),
        body: body_type[randomInteger(0, body_type.length - 1)],
        fuel: fuel[randomInteger(0, fuel.length - 1)],
        transmission: transmissions[randomInteger(0, transmissions.length - 1)],
        engine_volume: randomInteger(2, 5).toFixed(1)
    })  
}

downloadTxt(JSON.stringify(data, null, 2), 'data1.json');