// 建築物完整資料
let buildings = [
  {id: 1, license: "75-0637", units: 1, district: "士林區", address: "士林區至善路二段421巷21號", register_date: "86.11.07", year: "99年前", reason: "拆除", notes: "", lat: 25.0911, lon: 121.5124},
  {id: 2, license: "70-0628", units: 125, district: "士林區", address: "士林區福志路62號", register_date: "84.07.20", year: "99年前", reason: "拆除", notes: "福林家園社區", lat: 25.1063, lon: 121.5286},
  {id: 3, license: "69-1338", units: 16, district: "士林區", address: "士林區文林路643巷21、23、25、27號", register_date: "88.05.03", year: "99年前", reason: "拆除", notes: "文昌公寓", lat: 25.1093, lon: 121.5301},
  {id: 4, license: "73-0659", units: 10, district: "北投區", address: "北投區中央北路4段218號、220號", register_date: "89.05.11", year: "99年前", reason: "拆除", notes: "", lat: 25.1323, lon: 121.5016},
  {id: 5, license: "79-0538", units: 26, district: "信義區", address: "信義區永吉路197號至207號1樓至8樓", register_date: "89.08.30", year: "99年前", reason: "拆除", notes: "首都福星大樓", lat: 25.0379, lon: 121.5762},
  {id: 6, license: "73-0391", units: 10, district: "士林區", address: "士林區重慶北路四段49巷10弄2號、4號", register_date: "90.12.07", year: "99年前", reason: "拆除", notes: "", lat: 25.1051, lon: 121.5245},
  {id: 7, license: "70-0807", units: 15, district: "士林區", address: "士林區福港街262巷19號、通河東街一段45號47號", register_date: "88.04.08", year: "99年前", reason: "拆除", notes: "", lat: 25.1086, lon: 121.5340},
  {id: 8, license: "75-0909", units: 59, district: "中正區", address: "中正區和平西路一段100至104號、廈門街10號", register_date: "93.05.26", year: "99年前", reason: "拆除", notes: "南海名園大廈", lat: 25.0154, lon: 121.5083},
  {id: 9, license: "75-0398", units: 53, district: "信義區", address: "信義區仁愛路四段448號", register_date: "89.08.29", year: "99年前", reason: "拆除", notes: "晶宮大廈", lat: 25.0365, lon: 121.5603},
  {id: 10, license: "74-0593", units: 9, district: "大安區", address: "大安區大安路一段52巷12號等", register_date: "93.10.20", year: "99年前", reason: "拆除", notes: "", lat: 25.0245, lon: 121.5382},
  {id: 11, license: "73-1739", units: 266, district: "南港區", address: "南港區東新街168巷14號(修德國宅)", register_date: "90.08.28", year: "99年前", reason: "拆除", notes: "修德國宅", lat: 25.0528, lon: 121.5868},
  {id: 12, license: "70-0705", units: 10, district: "北投區", address: "北投區中央北路4段18巷37弄10號(1-5樓)及中央北路4段30巷20號(1-5樓)", register_date: "95.03.14", year: "99", reason: "拆除", notes: "", lat: 25.1308, lon: 121.5044},
  {id: 13, license: "76-0918", units: 88, district: "內湖區", address: "內湖區東湖里聯邦合家歡吉祥區（康樂街136巷18弄15號至29號單號(1至5樓)、康樂街136巷30弄12號至22號偶號(1至5樓)、康樂街110巷17至23號單號(1至5樓)", register_date: "99.07.30", year: "99", reason: "拆除", notes: "聯邦合家歡【吉祥區】", lat: 25.0834, lon: 121.6061},
  {id: 14, license: "79-0269", units: 42, district: "中山區", address: "中山區朱崙街50、52、54、56號(1至7樓)及遼寧街81巷5、7號(1至7樓)", register_date: "99.07.30", year: "101", reason: "拆除", notes: "中興華廈", lat: 25.0715, lon: 121.5380},
  {id: 15, license: "84-0590", units: 79, district: "信義區", address: "信義區基隆路2段149號1至12樓", register_date: "100.08.30", year: "101", reason: "拆除", notes: "", lat: 25.0412, lon: 121.5713},
  {id: 16, license: "73-0628", units: 22, district: "內湖區", address: "內湖區內湖路2段103巷34、36號（1至11樓）", register_date: "99.07.30", year: "102", reason: "拆除", notes: "白金翰大廈", lat: 25.0765, lon: 121.6126},
  {id: 17, license: "71-0004", units: 1, district: "士林區", address: "士林區承德路4段1巷25號", register_date: "100.10.28", year: "103", reason: "拆除", notes: "", lat: 25.1164, lon: 121.5179},
  {id: 18, license: "75-1072", units: 5, district: "內湖區", address: "內湖區內湖路2段179巷50-2號1樓至5樓", register_date: "99.07.30", year: "103", reason: "拆除", notes: "", lat: 25.0757, lon: 121.6173},
  {id: 19, license: "73-0519", units: 35, district: "士林區", address: "士林區天母北路56號(1至7樓)、56之1號(1至7樓)、56之2號(1至7樓)、56之3號(1至7樓)、56之4號(1至7樓)", register_date: "99.07.30", year: "103", reason: "拆除", notes: "鳳凰華廈", lat: 25.1122, lon: 121.5361},
  {id: 20, license: "76-0790", units: 20, district: "內湖區", address: "內湖區東湖里聯邦合家歡如意區（康樂街110巷6號至12號偶號(1至5樓)）", register_date: "99.07.30", year: "104", reason: "拆除", notes: "聯邦合家歡【如意區】", lat: 25.0843, lon: 121.6025},
  {id: 21, license: "70-2126", units: 67, district: "松山區", address: "松山區饒河街（199、201、203號）、201號之1、199號（2至9樓）、199號2樓之1至9樓之1、199號2樓之2至9樓之2、201號（2至9樓）、201號2樓之1至9樓之1、201號2樓之2至9樓之2、203號（2至9樓）、205號（1至9樓）", register_date: "99.07.30", year: "104", reason: "拆除", notes: "松園大廈", lat: 25.0572, lon: 121.5553},
  {id: 22, license: "78-0855", units: 28, district: "士林區", address: "士林區士東路91巷1、1之1、1之2、1之3號(各1至7樓)", register_date: "99.12.21", year: "104", reason: "拆除", notes: "", lat: 25.1044, lon: 121.5420},
  {id: 23, license: "66-0781", units: 1, district: "士林區", address: "士林區德行西路15、17號等全棟(地下1樓至地上4樓)", register_date: "101.11.28", year: "104", reason: "拆除", notes: "原拆除重建案完成拆除重建", lat: 25.1088, lon: 121.5130},
  {id: 24, license: "74-1287", units: 97, district: "大同區", address: "大同區重慶北路3段347號地下1樓~3樓及4樓、哈密衘59巷38弄49號5樓~12樓之1~6、哈密衘59巷38弄50號5樓~12樓之1~6(大龍國宅)", register_date: "101.05.15", year: "104", reason: "拆除", notes: "大龍國宅大龍市場", lat: 25.0711, lon: 121.5235},
  {id: 25, license: "077-0121", units: 102, district: "中正區", address: "中正區辛亥路1段2、4、6、6之1、6之2、8、8之1、8之2、10、12、12之1、12之2號及汀州路3段57、59、61號等全棟", register_date: "102.08.09", year: "104", reason: "拆除", notes: "", lat: 25.0053, lon: 121.5386},
  {id: 26, license: "76-0919", units: 110, district: "內湖區", address: "內湖區康樂街136巷29弄6~40之5號（雙號）計110戶", register_date: "99.07.30", year: "105", reason: "拆除", notes: "聯邦合家歡【富貴Ａ】", lat: 25.0847, lon: 121.6057},
  {id: 27, license: "76-0919", units: 140, district: "內湖區", address: "內湖區康樂街136巷30弄1~55號（單號）計140戶", register_date: "99.07.30", year: "105", reason: "拆除", notes: "聯邦合家歡【富貴Ｂ】", lat: 25.0850, lon: 121.6060},
  {id: 28, license: "072-0489", units: 19, district: "大安區", address: "大安區敦化南路1段130號（1樓、2樓、3樓、4樓、5樓、6樓、6樓之1、7樓）、132號（1樓、2樓、2樓之1、3樓、3樓之1、4樓、5樓、6樓、7樓）、134號", register_date: "100.08.09", year: "106", reason: "拆除", notes: "旭翔彩虹", lat: 25.0312, lon: 121.5527},
  {id: 29, license: "074-0676", units: 77, district: "大安區", address: "大安區敦化南路1段138號全棟", register_date: "100.08.18", year: "106", reason: "拆除", notes: "旭翔彩虹", lat: 25.0309, lon: 121.5533},
  {id: 30, license: "073-0023", units: 20, district: "內湖區", address: "內湖區金龍路219、221、223、225號等計20戶", register_date: "104.03.25", year: "106", reason: "拆除", notes: "", lat: 25.0701, lon: 121.6213},
  {id: 31, license: "071-1631", units: 22, district: "士林區", address: "士林區德行東路252、254、256號等計22戶", register_date: "99.07.30", year: "107", reason: "拆除", notes: "芝山鑽石大樓", lat: 25.1103, lon: 121.5178},
  {id: 32, license: "077-0430", units: 10, district: "大同區", address: "大同區太原路13之1號等1棟地下2層至第上8層建築物計10戶", register_date: "106.06.20", year: "107", reason: "拆除", notes: "107年解列地上8戶110年解列地下2戶", lat: 25.0760, lon: 121.5148},
  {id: 33, license: "070-0900", units: 5, district: "北投區", address: "北投區知行路1巷24號地下一層至地上五層計5戶", register_date: "106.01.18", year: "107", reason: "拆除", notes: "", lat: 25.1299, lon: 121.4980},
  {id: 34, license: "069-1857", units: 1, district: "北投區", address: "北投區立德路120巷25號地上2層全1棟1戶建築物", register_date: "107.03.14", year: "107", reason: "拆除", notes: "", lat: 25.1357, lon: 121.5139},
  {id: 35, license: "071-0354", units: 10, district: "內湖區", address: "內湖區內湖路2段179巷3弄1號地下室、1樓、2樓、3樓、4樓、5樓及3號地下室、1樓、2樓、3樓、4樓、5樓樓（1棟10戶）建築物", register_date: "103.03.19", year: "108", reason: "拆除", notes: "", lat: 25.0754, lon: 121.6179},
  {id: 36, license: "069-1020", units: 36, district: "士林區", address: "士林區天玉街27巷15、17、19、21、23、25、27號全棟", register_date: "101.11.02", year: "108", reason: "拆除", notes: "", lat: 25.1074, lon: 121.5243},
  {id: 37, license: "070-1942", units: 37, district: "士林區", address: "士林區中山北路7段81巷16弄9、9之1、9之2、9之3、9之4號全棟", register_date: "101.04.16", year: "108", reason: "拆除", notes: "", lat: 25.1009, lon: 121.5313},
  {id: 38, license: "073-0776", units: 5, district: "士林區", address: "士林區小西街2-2號1至5樓及地下室等共五戶全棟", register_date: "102.11.14", year: "109", reason: "拆除", notes: "", lat: 25.1043, lon: 121.5256},
  {id: 39, license: "074-1453", units: 80, district: "大安區", address: "大安區臥龍街262之2、268、268之1、270、270之1號、臥龍街264巷1、2、3、4號、臥龍街272巷6弄1、2、3、4、5、6、7號全家福社區全棟計80戶", register_date: "104.05.26", year: "109", reason: "拆除", notes: "全家福社區", lat: 25.0223, lon: 121.5461},
  {id: 40, license: "74-1199", units: 19, district: "中正區", address: "中正區愛國東路100號1樓、100號2樓、【（100號、102號）3樓至（100號、102號）15樓計13戶】、102號1樓、102號2樓、100之1號、104號(新隆國宅)", register_date: "99.07.30", year: "100", reason: "拆除", notes: "新隆國宅", lat: 25.0110, lon: 121.5276},
  {id: 41, license: "073-1006", units: 2, district: "北投區", address: "北投區溫泉路142號、142之1號全棟", register_date: "102.08.07", year: "108", reason: "拆除", notes: "", lat: 25.1368, lon: 121.5112},
  {id: 42, license: "070-0035", units: 24, district: "北投區", address: "北投區大度路3段193號、195號、197號、199號、201號、203號等(1至4樓)", register_date: "99.07.30", year: "109", reason: "優先強制拆除", notes: "109.03.05拆除", lat: 25.1206, lon: 121.4873},
  {id: 43, license: "066-1469", units: 2, district: "士林區", address: "士林區至誠路1段305巷3弄10、12號", register_date: "99.07.30", year: "108", reason: "拆除", notes: "", lat: 25.1149, lon: 121.5272},
  {id: 44, license: "067-1336", units: 53, district: "中山區", address: "中山區明水路367至369(單)號1至4樓、371號1樓、373至379(單)號1至4樓及北安路458巷51弄12至24(雙)號1至4樓等2棟地下1層至地上4層建築物計53戶", register_date: "106.5.17", year: "109", reason: "拆除", notes: "", lat: 25.0681, lon: 121.5352},
  {id: 45, license: "078-0385", units: 6, district: "中山區", address: "中山區龍江路37巷26號1至6樓", register_date: "102.03.15", year: "109", reason: "拆除", notes: "", lat: 25.0625, lon: 121.5432},
  {id: 46, license: "068-1584", units: 30, district: "士林區", address: "士林區天母東路91巷2、4、6、8號及天母東路93、95號全棟(地下1層、地上5層)建築物共30戶", register_date: "103.07.29", year: "110", reason: "拆除", notes: "", lat: 25.1119, lon: 121.5375},
  {id: 47, license: "070-0814", units: 16, district: "北投區", address: "北投區中央北路1段74、76、78號(地下1層、地上5層)全棟建築物共16戶", register_date: "104.02.25", year: "110", reason: "拆除", notes: "", lat: 25.1341, lon: 121.5064},
  {id: 48, license: "070-1625", units: 17, district: "北投區", address: "北投區中央北路1段80、82號(地下1層、地上5層)全棟建築物共17戶", register_date: "104.02.25", year: "110", reason: "拆除", notes: "", lat: 25.1349, lon: 121.5074},
  {id: 49, license: "079-0267", units: 5, district: "北投區", address: "北投區育仁路104巷8號地上1層至地上5層全棟建築物計5戶", register_date: "108.05.24", year: "110", reason: "拆除", notes: "", lat: 25.1238, lon: 121.4970},
  {id: 50, license: "070-1386", units: 5, district: "北投區", address: "北投區中央北路1段86號地上1層至地上5層全棟建築物計5戶", register_date: "108.05.24", year: "110", reason: "拆除", notes: "", lat: 25.1357, lon: 121.5083},
  {id: 51, license: "070-1546", units: 20, district: "士林區", address: "士林區天母東路105巷9弄6、8、10、12號全棟(地下1層、地上5層)建築物共20戶", register_date: "99.07.30", year: "110", reason: "拆除", notes: "", lat: 25.1125, lon: 121.5382},
  {id: 52, license: "078-0580", units: 1, district: "大安區", address: "大安區羅斯福路3段269巷5號", register_date: "110.01.27", year: "110", reason: "拆除", notes: "", lat: 25.0086, lon: 121.5394},
  {id: 53, license: "076-0147", units: 27, district: "松山區", address: "松山區八德路4段169號、171號、169號及171號地下1層至地上7層等1棟", register_date: "108.12.12", year: "111", reason: "拆除", notes: "", lat: 25.0489, lon: 121.5670},
  {id: 54, license: "073-0714", units: 80, district: "中山區", address: "中山區大直街84巷1至19號（單號）及94巷2至12號（雙號）（1至5樓)", register_date: "99.07.30", year: "111", reason: "拆除", notes: "", lat: 25.0597, lon: 121.5537},
  {id: 55, license: "073-0213", units: 45, district: "內湖區", address: "內湖區江南街71巷16弄5、5之1、5之2、5之3、7、7之1、7之2、7之3及7之4號（4棟45戶）", register_date: "103.07.02", year: "111", reason: "拆除", notes: "", lat: 25.0781, lon: 121.6085},
  {id: 56, name: "", address: "北投區明德路257號", district: "北投區", year: 112, units: 43, notes: "拆除", lat: 25.1188, lon: 121.5031},
  {id: 57, name: "", address: "內湖區康樂街136巷10號", district: "內湖區", year: 112, units: 60, notes: "拆除", lat: 25.0838, lon: 121.6034},
  {id: 58, name: "", address: "北投區立德路121巷5號", district: "北投區", year: 112, units: 1, notes: "拆除", lat: 25.1365, lon: 121.5146},
  {id: 59, name: "", address: "文山區辛亥路4段101巷93弄13號", district: "文山區", year: 112, units: 1, notes: "拆除", lat: 25.0008, lon: 121.5621},
  {id: 60, name: "聯邦合家歡【福祿區】", address: "內湖區東湖里安泰街38巷6號", district: "內湖區", year: 112, units: 45, notes: "拆除", lat: 25.0872, lon: 121.6093},
  {id: 61, license: "070-2099", units: 30, district: "信義區", address: "信義區吳興街600巷76弄129、131、133、135、137、139號等1樓至5樓全棟建築物共30戶", register_date: "103.06.16", year: "112", reason: "拆除", notes: "", lat: 25.0301, lon: 121.5776},
  {id: 62, license: "073-1464", units: 95, district: "士林區", address: "士林區福林路251巷2弄1號至14號、253號及255巷1至7號等95戶(地上5層，地下1層)", register_date: "109.02.04", year: "112", reason: "拆除", notes: "", lat: 25.1029, lon: 121.5283},
  {id: 63, license: "069-1284", units: 29, district: "士林區", address: "士林區中山北路7段81巷39、39之1、39之2、39之3地下1層至地上7層全棟計29戶", register_date: "104.07.30", year: "113", reason: "拆除", notes: "", lat: 25.1005, lon: 121.5310},
  {id: 64, license: "075-0141", units: 15, district: "中正區", address: "中正區南海路70、70-1、72號建築物共15戶", register_date: "109.11.04", year: "113", reason: "拆除", notes: "", lat: 25.0108, lon: 121.5132},
  {id: 65, license: "079-0323", units: 13, district: "信義區", address: "信義區忠孝東路5段289號、289之1號、289之2號、291號等11戶建築物(地下2層，地上8層)等13戶", register_date: "109.04.30", year: "113", reason: "拆除", notes: "", lat: 25.0436, lon: 121.5662},
  {id: 66, license: "073-1448", units: 190, district: "內湖區", address: "內湖區內湖路一段683、685、687、689、691、695、697號及(1-10樓)及內湖路1段693巷1、2、3、4、5、6、7、8、9、10、11、13號(1至10樓)", register_date: "99.07.30", year: "113", reason: "拆除", notes: "", lat: 25.0742, lon: 121.6147}
];

const districts = ["士林區", "北投區", "內湖區", "中山區", "信義區", "大安區", "松山區", "中正區", "南港區", "大同區", "文山區"];
const years = ["99年前", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113"];

// 狀態管理
let showDetailedInfo = false;
let selectedDistrict = 'all';
let selectedYear = 'all';
let searchQuery = '';
let map;
let markerClusterGroup;

// 年度顏色對應
function getYearColor(yearStr) {
  const yearNum = parseInt(yearStr);
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
  if (yearStr === '99年前' || yearNum <= 99) return '#DB4545';
  if (yearNum >= 100 && yearNum <= 103) return '#FFC185';
  if (yearNum >= 104 && yearNum <= 108) return '#944454';
  return '#1FB8CD';
}

// 初始化地圖
function initMap() {
  map = L.map('map').setView([25.0330, 121.5654], 12);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);
  
  markerClusterGroup = L.markerClusterGroup({
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false
  });
  
  map.addLayer(markerClusterGroup);
}

// 創建自定義標記圖示
function createCustomIcon(year, isHighlighted = false) {
  const color = getYearColor(year);
  const size = isHighlighted ? 30 : 24;
  const border = isHighlighted ? '4px solid yellow' : '3px solid white';
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: ${size}px; height: ${size}px; border-radius: 50%; border: ${border}; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2]
  });
}

// 生成彈出視窗內容
function generatePopupContent(building) {
  const displayName = building.notes || '(無社區名稱)';
  
  if (showDetailedInfo) {
    return `
      <div class="popup-content">
        <h3>${displayName}</h3>
        <p><strong>編號：</strong>${building.id}</p>
        <p><strong>使用執照：</strong>${building.license}</p>
        <p><strong>解列戶數：</strong>${building.units} 戶</p>
        <p><strong>列管地址：</strong>${building.address}</p>
        <p><strong>列管日期：</strong>${building.register_date}</p>
        <p><strong>解列年度：</strong>${building.year}</p>
        <p><strong>解列原因：</strong>${building.reason}</p>
        <p><strong>備註：</strong>${building.notes || '無'}</p>
      </div>
    `;
  } else {
    return `
      <div class="popup-content">
        <h3>${displayName}</h3>
        <p><strong>列管地址：</strong>${building.address}</p>
        <p><strong>解列年度：</strong>${building.year}</p>
      </div>
    `;
  }
}

// 篩選建築物
function filterBuildings() {
  return buildings.filter(building => {
    const districtMatch = selectedDistrict === 'all' || building.district === selectedDistrict;
    const yearMatch = selectedYear === 'all' || building.year === selectedYear;
    
    let searchMatch = true;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const searchableText = [
        building.address,
        building.notes,
        building.district
      ].join(' ').toLowerCase();
      searchMatch = searchableText.includes(query);
    }
    
    return districtMatch && yearMatch && searchMatch;
  });
}

// 更新地圖標記
function updateMarkers() {
  markerClusterGroup.clearLayers();
  
  const filteredBuildings = filterBuildings();
  
  filteredBuildings.forEach(building => {
    const isHighlighted = searchQuery && (
      building.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      building.notes.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const marker = L.marker([building.lat, building.lon], {
      icon: createCustomIcon(building.year, isHighlighted)
    });
    
    marker.bindPopup(generatePopupContent(building));
    marker.buildingData = building;
    markerClusterGroup.addLayer(marker);
  });
  
  updateStatistics(filteredBuildings);
}

// 更新統計資訊
function updateStatistics(filteredBuildings) {
  const totalCount = buildings.length;
  const filteredCount = filteredBuildings.length;
  const totalUnits = filteredBuildings.reduce((sum, b) => sum + (parseInt(b.units) || 0), 0);
  
  document.getElementById('totalCount').textContent = totalCount;
  document.getElementById('filteredCount').textContent = filteredCount;
  document.getElementById('totalUnits').textContent = totalUnits;
}

// 初始化搜尋功能
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    clearBtn.style.display = searchQuery ? 'block' : 'none';
    updateMarkers();
  });
  
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    updateMarkers();
  });
}

// 初始化篩選器
function initFilters() {
  const districtFilter = document.getElementById('districtFilter');
  const yearFilter = document.getElementById('yearFilter');
  
  districts.forEach(district => {
    const option = document.createElement('option');
    option.value = district;
    option.textContent = district;
    districtFilter.appendChild(option);
  });
  
  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = `${year}`;
    yearFilter.appendChild(option);
  });
  
  districtFilter.addEventListener('change', (e) => {
    selectedDistrict = e.target.value;
    updateMarkers();
  });
  
  yearFilter.addEventListener('change', (e) => {
    selectedYear = e.target.value;
    updateMarkers();
  });
}

// 初始化切換按鈕
function initToggleButton() {
  const toggleBtn = document.getElementById('toggleInfo');
  
  toggleBtn.addEventListener('click', () => {
    showDetailedInfo = !showDetailedInfo;
    toggleBtn.textContent = showDetailedInfo ? '切換至簡易資訊' : '切換至完整資訊';
    toggleBtn.classList.toggle('active');
    
    // 更新所有已開啟的彈出視窗
    markerClusterGroup.eachLayer(marker => {
      const building = buildings.find(b => 
        b.lat === marker.getLatLng().lat && b.lon === marker.getLatLng().lon
      );
      if (building) {
        marker.setPopupContent(generatePopupContent(building));
      }
    });
  });
}

// CSV 匯入功能
function initImportExport() {
  const importBtn = document.getElementById('importBtn');
  const exportBtn = document.getElementById('exportBtn');
  const csvFileInput = document.getElementById('csvFileInput');
  const downloadTemplate = document.getElementById('downloadTemplate');
  
  importBtn.addEventListener('click', () => {
    csvFileInput.click();
  });
  
  csvFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          parseCSV(event.target.result);
        } catch (error) {
          alert('CSV 格式錯誤：' + error.message);
        }
      };
      reader.readAsText(file, 'UTF-8');
    }
    csvFileInput.value = '';
  });
  
  exportBtn.addEventListener('click', () => {
    exportToCSV();
  });
  
  downloadTemplate.addEventListener('click', (e) => {
    e.preventDefault();
    downloadCSVTemplate();
  });
}

function parseCSV(csvText) {
  const lines = csvText.split('\n').filter(line => line.trim());
  if (lines.length < 2) {
    throw new Error('CSV 檔案內容不足');
  }
  
  const headers = lines[0].split(',').map(h => h.trim());
  const requiredHeaders = ['編號', '使用執照', '解列戶數', '行政區', '列管地址', '列管日期', '解列年度', '解列原因', '備註'];
  
  const newBuildings = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    if (values.length < 9) continue;
    
    newBuildings.push({
      id: parseInt(values[0]) || newBuildings.length + 1,
      license: values[1],
      units: parseInt(values[2]) || 0,
      district: values[3],
      address: values[4],
      register_date: values[5],
      year: values[6],
      reason: values[7],
      notes: values[8],
      lat: 25.0330 + (Math.random() - 0.5) * 0.1,
      lon: 121.5654 + (Math.random() - 0.5) * 0.1
    });
  }
  
  if (newBuildings.length > 0) {
    buildings = newBuildings;
    updateMarkers();
    alert(`成功匯入 ${newBuildings.length} 筆資料`);
  } else {
    throw new Error('沒有有效的資料行');
  }
}

function exportToCSV() {
  const filteredBuildings = filterBuildings();
  let csv = '編號,使用執照,解列戶數,行政區,列管地址,列管日期,解列年度,解列原因,備註\n';
  
  filteredBuildings.forEach(b => {
    csv += `${b.id},${b.license},${b.units},${b.district},${b.address},${b.register_date},${b.year},${b.reason},${b.notes}\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `海砂屋資料_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
}

function downloadCSVTemplate() {
  const csv = '編號,使用執照,解列戶數,行政區,列管地址,列管日期,解列年度,解列原因,備註\n1,75-0637,1,士林區,士林區至善路二段421巷21號,86.11.07,99年前,拆除,\n';
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '海砂屋資料範本.csv';
  link.click();
}

// 初始化應用
function init() {
  initMap();
  initSearch();
  initFilters();
  initToggleButton();
  initImportExport();
  updateMarkers();
}

// 當頁面載入完成後初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}