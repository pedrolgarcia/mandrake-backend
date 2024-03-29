import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Main/Country';

export default class CountrySeeder extends BaseSeeder {
  public async run () {
    await Country.createMany(countries.map((country) => ({...country})));
  }
}

const countries = [
	{
		"iso": "AF",
		"iso_3": "AFG",
		"name": "Afeganistão"
	},
	{
		"iso": "AL",
		"iso_3": "ALB",
		"name": "Albânia"
	},
	{
		"iso": "DZ",
		"iso_3": "DZA",
		"name": "Algéria"
	},
	{
		"iso": "AS",
		"iso_3": "ASM",
		"name": "Samoa Americana"
	},
	{
		"iso": "AD",
		"iso_3": "AND",
		"name": "Andorra"
	},
	{
		"iso": "AO",
		"iso_3": "AGO",
		"name": "Angola"
	},
	{
		"iso": "AI",
		"iso_3": "AIA",
		"name": "Anguilla"
	},
	{
		"iso": "AQ",
		"iso_3": "ATA",
		"name": "Antártida"
	},
	{
		"iso": "AG",
		"iso_3": "ATG",
		"name": "Antigua e Barbuda"
	},
	{
		"iso": "AR",
		"iso_3": "ARG",
		"name": "Argentina"
	},
	{
		"iso": "AM",
		"iso_3": "ARM",
		"name": "Armênia"
	},
	{
		"iso": "AW",
		"iso_3": "ABW",
		"name": "Aruba"
	},
	{
		"iso": "AU",
		"iso_3": "AUS",
		"name": "Austrália"
	},
	{
		"iso": "AT",
		"iso_3": "AUT",
		"name": "Áustria"
	},
	{
		"iso": "AZ",
		"iso_3": "AZE",
		"name": "Azerbaijão"
	},
	{
		"iso": "BS",
		"iso_3": "BHS",
		"name": "Bahamas"
	},
	{
		"iso": "BH",
		"iso_3": "BHR",
		"name": "Bahrein"
	},
	{
		"iso": "BD",
		"iso_3": "BGD",
		"name": "Bangladesh"
	},
	{
		"iso": "BB",
		"iso_3": "BRB",
		"name": "Barbados"
	},
	{
		"iso": "BY",
		"iso_3": "BLR",
		"name": "Bielorrússia"
	},
	{
		"iso": "BE",
		"iso_3": "BEL",
		"name": "Bélgica"
	},
	{
		"iso": "BZ",
		"iso_3": "BLZ",
		"name": "Belize"
	},
	{
		"iso": "BJ",
		"iso_3": "BEN",
		"name": "Benin"
	},
	{
		"iso": "BM",
		"iso_3": "BMU",
		"name": "Bermuda"
	},
	{
		"iso": "BT",
		"iso_3": "BTN",
		"name": "Butão"
	},
	{
		"iso": "BO",
		"iso_3": "BOL",
		"name": "Bolívia"
	},
	{
		"iso": "BA",
		"iso_3": "BIH",
		"name": "Bósnia e Herzegovina"
	},
	{
		"iso": "BW",
		"iso_3": "BWA",
		"name": "Botswana"
	},
	{
		"iso": "BV",
		"iso_3": "BVT",
		"name": "Ilha Bouvet"
	},
	{
		"iso": "BR",
		"iso_3": "BRA",
		"name": "Brasil"
	},
	{
		"iso": "IO",
		"iso_3": "IOT",
		"name": "Território Britânico do Oceano Índico"
	},
	{
		"iso": "BN",
		"iso_3": "BRN",
		"name": "Brunei"
	},
	{
		"iso": "BG",
		"iso_3": "BGR",
		"name": "Bulgária"
	},
	{
		"iso": "BF",
		"iso_3": "BFA",
		"name": "Burkina Faso"
	},
	{
		"iso": "BI",
		"iso_3": "BDI",
		"name": "Burundi"
	},
	{
		"iso": "KH",
		"iso_3": "KHM",
		"name": "Camboja"
	},
	{
		"iso": "CM",
		"iso_3": "CMR",
		"name": "Camarões"
	},
	{
		"iso": "CA",
		"iso_3": "CAN",
		"name": "Canadá"
	},
	{
		"iso": "CV",
		"iso_3": "CPV",
		"name": "Cabo Verde"
	},
	{
		"iso": "KY",
		"iso_3": "CYM",
		"name": "Ilhas Cayman"
	},
	{
		"iso": "CF",
		"iso_3": "CAF",
		"name": "República Centro-Africana"
	},
	{
		"iso": "TD",
		"iso_3": "TCD",
		"name": "Chade"
	},
	{
		"iso": "CL",
		"iso_3": "CHL",
		"name": "Chile"
	},
	{
		"iso": "CN",
		"iso_3": "CHN",
		"name": "China"
	},
	{
		"iso": "CX",
		"iso_3": "CXR",
		"name": "Ilha Christmas"
	},
	{
		"iso": "CC",
		"iso_3": "CCK",
		"name": "Ilhas Cocos (Keeling)"
	},
	{
		"iso": "CO",
		"iso_3": "COL",
		"name": "Colômbia"
	},
	{
		"iso": "KM",
		"iso_3": "COM",
		"name": "Comores"
	},
	{
		"iso": "CG",
		"iso_3": "COG",
		"name": "Congo"
	},
	{
		"iso": "CD",
		"iso_3": "COD",
		"name": "Congo (DR)"
	},
	{
		"iso": "CK",
		"iso_3": "COK",
		"name": "Ilhas Cook"
	},
	{
		"iso": "CR",
		"iso_3": "CRI",
		"name": "Costa Rica"
	},
	{
		"iso": "CI",
		"iso_3": "CIV",
		"name": "Costa do Marfim"
	},
	{
		"iso": "HR",
		"iso_3": "HRV",
		"name": "Croácia"
	},
	{
		"iso": "CU",
		"iso_3": "CUB",
		"name": "Cuba"
	},
	{
		"iso": "CY",
		"iso_3": "CYP",
		"name": "Chipre"
	},
	{
		"iso": "CZ",
		"iso_3": "CZE",
		"name": "República Tcheca"
	},
	{
		"iso": "DK",
		"iso_3": "DNK",
		"name": "Dinamarca"
	},
	{
		"iso": "DJ",
		"iso_3": "DJI",
		"name": "Djibuti"
	},
	{
		"iso": "DM",
		"iso_3": "DMA",
		"name": "Dominica"
	},
	{
		"iso": "DO",
		"iso_3": "DOM",
		"name": "República Dominicana"
	},
	{
		"iso": "EC",
		"iso_3": "ECU",
		"name": "Equador"
	},
	{
		"iso": "EG",
		"iso_3": "EGY",
		"name": "Egito"
	},
	{
		"iso": "SV",
		"iso_3": "SLV",
		"name": "El Salvador"
	},
	{
		"iso": "GQ",
		"iso_3": "GNQ",
		"name": "Guiné Equatorial"
	},
	{
		"iso": "ER",
		"iso_3": "ERI",
		"name": "Eritreia"
	},
	{
		"iso": "EE",
		"iso_3": "EST",
		"name": "Estônia"
	},
	{
		"iso": "ET",
		"iso_3": "ETH",
		"name": "Etiópia"
	},
	{
		"iso": "FK",
		"iso_3": "FLK",
		"name": "Ilhas Malvinas"
	},
	{
		"iso": "FO",
		"iso_3": "FRO",
		"name": "Ilhas Faroe"
	},
	{
		"iso": "FJ",
		"iso_3": "FJI",
		"name": "Fiji"
	},
	{
		"iso": "FI",
		"iso_3": "FIN",
		"name": "Finlândia"
	},
	{
		"iso": "FR",
		"iso_3": "FRA",
		"name": "França"
	},
	{
		"iso": "GF",
		"iso_3": "GUF",
		"name": "Guiana Francesa"
	},
	{
		"iso": "PF",
		"iso_3": "PYF",
		"name": "Polinésia Francesa"
	},
	{
		"iso": "TF",
		"iso_3": "ATF",
		"name": "Terras Austrais e Antárticas Francesas"
	},
	{
		"iso": "GA",
		"iso_3": "GAB",
		"name": "Gabão"
	},
	{
		"iso": "GM",
		"iso_3": "GMB",
		"name": "Gâmbia"
	},
	{
		"iso": "GE",
		"iso_3": "GEO",
		"name": "Geórgia"
	},
	{
		"iso": "DE",
		"iso_3": "DEU",
		"name": "Alemanha"
	},
	{
		"iso": "GH",
		"iso_3": "GHA",
		"name": "Gana"
	},
	{
		"iso": "GI",
		"iso_3": "GIB",
		"name": "Gibraltar"
	},
	{
		"iso": "GR",
		"iso_3": "GRC",
		"name": "Grécia"
	},
	{
		"iso": "GL",
		"iso_3": "GRL",
		"name": "Groelândia"
	},
	{
		"iso": "GD",
		"iso_3": "GRD",
		"name": "Granada"
	},
	{
		"iso": "GP",
		"iso_3": "GLP",
		"name": "Guadalupe"
	},
	{
		"iso": "GU",
		"iso_3": "GUM",
		"name": "Guão"
	},
	{
		"iso": "GT",
		"iso_3": "GTM",
		"name": "Guatemala"
	},
	{
		"iso": "GN",
		"iso_3": "GIN",
		"name": "Guiné"
	},
	{
		"iso": "GW",
		"iso_3": "GNB",
		"name": "Guiné-Bissau"
	},
	{
		"iso": "GY",
		"iso_3": "GUY",
		"name": "Guiana"
	},
	{
		"iso": "HT",
		"iso_3": "HTI",
		"name": "Haiti"
	},
	{
		"iso": "HM",
		"iso_3": "HMD",
		"name": "Ilhas Heard e McDonald"
	},
	{
		"iso": "VA",
		"iso_3": "VAT",
		"name": "Vaticano"
	},
	{
		"iso": "HN",
		"iso_3": "HND",
		"name": "Honduras"
	},
	{
		"iso": "HK",
		"iso_3": "HKG",
		"name": "Hong Kong"
	},
	{
		"iso": "HU",
		"iso_3": "HUN",
		"name": "Hungria"
	},
	{
		"iso": "IS",
		"iso_3": "ISL",
		"name": "Islândia"
	},
	{
		"iso": "IN",
		"iso_3": "IND",
		"name": "Índia"
	},
	{
		"iso": "ID",
		"iso_3": "IDN",
		"name": "Indonésia"
	},
	{
		"iso": "IR",
		"iso_3": "IRN",
		"name": "Iran"
	},
	{
		"iso": "IQ",
		"iso_3": "IRQ",
		"name": "Iraque"
	},
	{
		"iso": "IE",
		"iso_3": "IRL",
		"name": "Irlanda"
	},
	{
		"iso": "IL",
		"iso_3": "ISR",
		"name": "Israel"
	},
	{
		"iso": "IT",
		"iso_3": "ITA",
		"name": "Itália"
	},
	{
		"iso": "JM",
		"iso_3": "JAM",
		"name": "Jamaica"
	},
	{
		"iso": "JP",
		"iso_3": "JPN",
		"name": "Japão"
	},
	{
		"iso": "JO",
		"iso_3": "JOR",
		"name": "Jordânia"
	},
	{
		"iso": "KZ",
		"iso_3": "KAZ",
		"name": "Cazaquistão"
	},
	{
		"iso": "KE",
		"iso_3": "KEN",
		"name": "Quênia"
	},
	{
		"iso": "KI",
		"iso_3": "KIR",
		"name": "Kiribati"
	},
	{
		"iso": "KP",
		"iso_3": "PRK",
		"name": "Coreia do Norte"
	},
	{
		"iso": "KR",
		"iso_3": "KOR",
		"name": "Coreia do Sul"
	},
	{
		"iso": "KW",
		"iso_3": "KWT",
		"name": "Kuwait"
	},
	{
		"iso": "KG",
		"iso_3": "KGZ",
		"name": "Quirguistão"
	},
	{
		"iso": "LA",
		"iso_3": "LAO",
		"name": "Laos"
	},
	{
		"iso": "LV",
		"iso_3": "LVA",
		"name": "Letônia"
	},
	{
		"iso": "LB",
		"iso_3": "LBN",
		"name": "Líbano"
	},
	{
		"iso": "LS",
		"iso_3": "LSO",
		"name": "Lesoto"
	},
	{
		"iso": "LR",
		"iso_3": "LBR",
		"name": "Libéria"
	},
	{
		"iso": "LY",
		"iso_3": "LBY",
		"name": "Líbia"
	},
	{
		"iso": "LI",
		"iso_3": "LIE",
		"name": "Liechtenstein"
	},
	{
		"iso": "LT",
		"iso_3": "LTU",
		"name": "Lituânia"
	},
	{
		"iso": "LU",
		"iso_3": "LUX",
		"name": "Luxemburgo"
	},
	{
		"iso": "MO",
		"iso_3": "MAC",
		"name": "Macao"
	},
	{
		"iso": "MK",
		"iso_3": "MKD",
		"name": "Macedônia"
	},
	{
		"iso": "MG",
		"iso_3": "MDG",
		"name": "Madagascar"
	},
	{
		"iso": "MW",
		"iso_3": "MWI",
		"name": "Malawi"
	},
	{
		"iso": "MY",
		"iso_3": "MYS",
		"name": "Malásia"
	},
	{
		"iso": "MV",
		"iso_3": "MDV",
		"name": "Maldivas"
	},
	{
		"iso": "ML",
		"iso_3": "MLI",
		"name": "Mali"
	},
	{
		"iso": "MT",
		"iso_3": "MLT",
		"name": "Malta"
	},
	{
		"iso": "MH",
		"iso_3": "MHL",
		"name": "Ilhas Marshall"
	},
	{
		"iso": "MQ",
		"iso_3": "MTQ",
		"name": "Martinica"
	},
	{
		"iso": "MR",
		"iso_3": "MRT",
		"name": "Mauritânia"
	},
	{
		"iso": "MU",
		"iso_3": "MUS",
		"name": "Maurício"
	},
	{
		"iso": "YT",
		"iso_3": "MYT",
		"name": "Mayotte"
	},
	{
		"iso": "MX",
		"iso_3": "MEX",
		"name": "México"
	},
	{
		"iso": "FM",
		"iso_3": "FSM",
		"name": "Micronésia"
	},
	{
		"iso": "MD",
		"iso_3": "MDA",
		"name": "Moldova"
	},
	{
		"iso": "MC",
		"iso_3": "MCO",
		"name": "Mônaco"
	},
	{
		"iso": "MN",
		"iso_3": "MNG",
		"name": "Mongólia"
	},
	{
		"iso": "MS",
		"iso_3": "MSR",
		"name": "Montserrat"
	},
	{
		"iso": "MA",
		"iso_3": "MAR",
		"name": "Marrocos"
	},
	{
		"iso": "MZ",
		"iso_3": "MOZ",
		"name": "Moçambique"
	},
	{
		"iso": "MM",
		"iso_3": "MMR",
		"name": "Birmânia"
	},
	{
		"iso": "NA",
		"iso_3": "NAM",
		"name": "Namíbia"
	},
	{
		"iso": "NR",
		"iso_3": "NRU",
		"name": "Nauru"
	},
	{
		"iso": "NP",
		"iso_3": "NPL",
		"name": "Nepal"
	},
	{
		"iso": "NL",
		"iso_3": "NLD",
		"name": "Holanda"
	},
	{
		"iso": "AN",
		"iso_3": "ANT",
		"name": "Antilhas Holandesas"
	},
	{
		"iso": "NC",
		"iso_3": "NCL",
		"name": "Nova Caledônia"
	},
	{
		"iso": "NZ",
		"iso_3": "NZL",
		"name": "Nova Zelândia"
	},
	{
		"iso": "NI",
		"iso_3": "NIC",
		"name": "Nicarágua"
	},
	{
		"iso": "NE",
		"iso_3": "NER",
		"name": "Niger"
	},
	{
		"iso": "NG",
		"iso_3": "NGA",
		"name": "Nigéria"
	},
	{
		"iso": "NU",
		"iso_3": "NIU",
		"name": "Niue"
	},
	{
		"iso": "NF",
		"iso_3": "NFK",
		"name": "Ilha Norfolk"
	},
	{
		"iso": "MP",
		"iso_3": "MNP",
		"name": "Ilhas Marianas do Norte"
	},
	{
		"iso": "NO",
		"iso_3": "NOR",
		"name": "Noruega"
	},
	{
		"iso": "OM",
		"iso_3": "OMN",
		"name": "Omã"
	},
	{
		"iso": "PK",
		"iso_3": "PAK",
		"name": "Paquistão"
	},
	{
		"iso": "PW",
		"iso_3": "PLW",
		"name": "Palau"
	},
	{
		"iso": "PS",
		"iso_3": "PSE",
		"name": "Palestina"
	},
	{
		"iso": "PA",
		"iso_3": "PAN",
		"name": "Panamá"
	},
	{
		"iso": "PG",
		"iso_3": "PNG",
		"name": "Papua-Nova Guiné"
	},
	{
		"iso": "PY",
		"iso_3": "PRY",
		"name": "Paraguai"
	},
	{
		"iso": "PE",
		"iso_3": "PER",
		"name": "Peru"
	},
	{
		"iso": "PH",
		"iso_3": "PHL",
		"name": "Filipinas"
	},
	{
		"iso": "PN",
		"iso_3": "PCN",
		"name": "Ilhas Picárnia"
	},
	{
		"iso": "PL",
		"iso_3": "POL",
		"name": "Polônia"
	},
	{
		"iso": "PT",
		"iso_3": "PRT",
		"name": "Portugal"
	},
	{
		"iso": "PR",
		"iso_3": "PRI",
		"name": "Porto Rico"
	},
	{
		"iso": "QA",
		"iso_3": "QAT",
		"name": "Catar"
	},
	{
		"iso": "RE",
		"iso_3": "REU",
		"name": "Reunião"
	},
	{
		"iso": "RO",
		"iso_3": "ROM",
		"name": "Romênia"
	},
	{
		"iso": "RU",
		"iso_3": "RUS",
		"name": "Rússia"
	},
	{
		"iso": "RW",
		"iso_3": "RWA",
		"name": "Ruanda"
	},
	{
		"iso": "SH",
		"iso_3": "SHN",
		"name": "Santa Helena"
	},
	{
		"iso": "KN",
		"iso_3": "KNA",
		"name": "São Cristóvão"
	},
	{
		"iso": "LC",
		"iso_3": "LCA",
		"name": "Santa Lúcia"
	},
	{
		"iso": "PM",
		"iso_3": "SPM",
		"name": "São Pedro e Miquelon"
	},
	{
		"iso": "VC",
		"iso_3": "VCT",
		"name": "São Vicente e Granadinas"
	},
	{
		"iso": "WS",
		"iso_3": "WSM",
		"name": "Samoa"
	},
	{
		"iso": "SM",
		"iso_3": "SMR",
		"name": "São Marino"
	},
	{
		"iso": "ST",
		"iso_3": "STP",
		"name": "Sao Tomé e Príncipe"
	},
	{
		"iso": "SA",
		"iso_3": "SAU",
		"name": "Arábia Saudita"
	},
	{
		"iso": "SN",
		"iso_3": "SEN",
		"name": "Senegal"
	},
	{
		"iso": "CS",
		"iso_3": "SRB",
		"name": "Sérvia e Montenegro"
	},
	{
		"iso": "SC",
		"iso_3": "SYC",
		"name": "Seicheles"
	},
	{
		"iso": "SL",
		"iso_3": "SLE",
		"name": "República da Serra Leoa"
	},
	{
		"iso": "SG",
		"iso_3": "SGP",
		"name": "Singapura"
	},
	{
		"iso": "SK",
		"iso_3": "SVK",
		"name": "Eslováquia"
	},
	{
		"iso": "SI",
		"iso_3": "SVN",
		"name": "Eslovênia"
	},
	{
		"iso": "SB",
		"iso_3": "SLB",
		"name": "Ilhas Salomão"
	},
	{
		"iso": "SO",
		"iso_3": "SOM",
		"name": "Somália"
	},
	{
		"iso": "ZA",
		"iso_3": "ZAF",
		"name": "África do Sul"
	},
	{
		"iso": "GS",
		"iso_3": "SGS",
		"name": "Ilhas Geórgia do Sul e Sandwich do Sul"
	},
	{
		"iso": "ES",
		"iso_3": "ESP",
		"name": "Espanha"
	},
	{
		"iso": "LK",
		"iso_3": "LKA",
		"name": "Sri Lanka"
	},
	{
		"iso": "SD",
		"iso_3": "SDN",
		"name": "Sudão"
	},
	{
		"iso": "SR",
		"iso_3": "SUR",
		"name": "Suriname"
	},
	{
		"iso": "SJ",
		"iso_3": "SJM",
		"name": "Esvalbarde"
	},
	{
		"iso": "SZ",
		"iso_3": "SWZ",
		"name": "Suazilândia"
	},
	{
		"iso": "SE",
		"iso_3": "SWE",
		"name": "Suécia"
	},
	{
		"iso": "CH",
		"iso_3": "CHE",
		"name": "Suiça"
	},
	{
		"iso": "SY",
		"iso_3": "SYR",
		"name": "Síria"
	},
	{
		"iso": "TW",
		"iso_3": "TWN",
		"name": "Taiwan"
	},
	{
		"iso": "TJ",
		"iso_3": "TJK",
		"name": "Tajiquistão"
	},
	{
		"iso": "TZ",
		"iso_3": "TZA",
		"name": "Tanzânia"
	},
	{
		"iso": "TH",
		"iso_3": "THA",
		"name": "Tailândia"
	},
	{
		"iso": "TL",
		"iso_3": "TLS",
		"name": "Timor-Leste"
	},
	{
		"iso": "TG",
		"iso_3": "TGO",
		"name": "Togo"
	},
	{
		"iso": "TK",
		"iso_3": "TKL",
		"name": "Toquelau"
	},
	{
		"iso": "TO",
		"iso_3": "TON",
		"name": "Tonga"
	},
	{
		"iso": "TT",
		"iso_3": "TTO",
		"name": "Trinidad e Tobago"
	},
	{
		"iso": "TN",
		"iso_3": "TUN",
		"name": "Tunísia"
	},
	{
		"iso": "TR",
		"iso_3": "TUR",
		"name": "Turquia"
	},
	{
		"iso": "TM",
		"iso_3": "TKM",
		"name": "Turcomenistão"
	},
	{
		"iso": "TC",
		"iso_3": "TCA",
		"name": "Ilhas Turks e Caicos"
	},
	{
		"iso": "TV",
		"iso_3": "TUV",
		"name": "Tuvalu"
	},
	{
		"iso": "UG",
		"iso_3": "UGA",
		"name": "Uganda"
	},
	{
		"iso": "UA",
		"iso_3": "UKR",
		"name": "Ucrânia"
	},
	{
		"iso": "AE",
		"iso_3": "ARE",
		"name": "Emirados Árabes"
	},
	{
		"iso": "GB",
		"iso_3": "GBR",
		"name": "Reino Unido"
	},
	{
		"iso": "US",
		"iso_3": "USA",
		"name": "Estados Unidos"
	},
	{
		"iso": "UM",
		"iso_3": "UMI",
		"name": "Ilhas Menores Distantes dos Estados Unidos"
	},
	{
		"iso": "UY",
		"iso_3": "URY",
		"name": "Uruguai"
	},
	{
		"iso": "UZ",
		"iso_3": "UZB",
		"name": "Uzbequistão"
	},
	{
		"iso": "VU",
		"iso_3": "VUT",
		"name": "Vanuatu"
	},
	{
		"iso": "VE",
		"iso_3": "VEN",
		"name": "Venezuela"
	},
	{
		"iso": "VN",
		"iso_3": "VNM",
		"name": "Vietnam"
	},
	{
		"iso": "VG",
		"iso_3": "VGB",
		"name": "Ilhas Virgens Inglesas"
	},
	{
		"iso": "VI",
		"iso_3": "VIR",
		"name": "Ilhas Virgens (USA)"
	},
	{
		"iso": "WF",
		"iso_3": "WLF",
		"name": "Wallis e Futuna"
	},
	{
		"iso": "EH",
		"iso_3": "ESH",
		"name": "Saara Ocidental"
	},
	{
		"iso": "YE",
		"iso_3": "YEM",
		"name": "Iêmen"
	},
	{
		"iso": "ZM",
		"iso_3": "ZMB",
		"name": "Zâmbia"
	},
	{
		"iso": "ZW",
		"iso_3": "ZWE",
		"name": "Zimbábue"
	}
]