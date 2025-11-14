// 主程式
let buildings = [];
let districts = ['全部行政區'];
let years = ['全部年度'];
let map, markers, showSimple = true;

// ------ 資料讀取 ------
function loadCSV(cb) {
  Papa.parse('sandy_building.csv', {
    download: true,
    header: true,
    encoding: "UTF-8",
    complete: results => {
      buildings = results.data.map(b => ({
        ...b,
        id: b['編號'],
        license: b['使用執照'],
        units: b['解列戶數'],
        district: b['行政區'],
        address: b['列管地址'],
        register_date: b['列管日期'],
        year: b['解列年度'],
        reason: b['解列原因'],
        notes: b['備註'],
        lat: parseFloat(b.lat) || null,
        lon: parseFloat(b.lon) || null
      }));
      // 行政區/年度選單
      districts = ['全部行政區'].concat(Array.from(new Set(buildings.map(b=>b.district).filter(Boolean))));
      years = ['全部年度'].concat(Array.from(new Set(buildings.map(b=>b.year).filter(Boolean))));
      cb();
    }
  });
}

function getDistrictCount(list) {
  let stat = {};
  list.forEach(b => {
    stat[b.district] = (stat[b.district]||0)+1;
  });
  return stat;
}

// ------ 地圖/標記 ------
function showMap() {
  map = L.map('map').setView([25.033,121.5654], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap'
  }).addTo(map);

  updateMarkers(buildings);
}

function getMarkerColor(year) {
  // 紅色：99-103年；橘色：104-108年；綠色：109年以上
  let y = parseInt(year,10);
  if (isNaN(y)) return 'blue';
  if (y<=103) return 'red';
  if (y<=108) return 'orange';
  return 'green';
}

function simplePopup(b) {
  return `<b>${b.notes||'(無社區名稱)'}</b><br>
    列管地址：${b.address}<br>
    解列年度：${b.year}`;
}
function detailedPopup(b) {
  return `<b>編號：</b>${b.id}<br>
    <b>使用執照：</b>${b.license}<br>
    <b>解列戶數：</b>${b.units}<br>
    <b>列管地址：</b>${b.address}<br>
    <b>列管日期：</b>${b.register_date}<br>
    <b>解列年度：</b>${b.year}<br>
    <b>解列原因：</b>${b.reason}<br>
    <b>備註：</b>${b.notes||'(空)'}`
}

// ------ 標記更新 ------
function updateMarkers(list) {
  if (markers) map.removeLayer(markers);
  markers = L.markerClusterGroup();

  list.forEach(b => {
    let marker = L.marker([b.lat,b.lon],{
      icon:L.icon({
        iconUrl:`https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${getMarkerColor(b.year)}.png`,
        iconSize:[25,41],
        iconAnchor:[12,41],
        popupAnchor:[1,-34]
      })
    });
    marker.bindPopup(showSimple ? simplePopup(b) : detailedPopup(b));
    markers.addLayer(marker);
  });
  map.addLayer(markers);
}

function updateStats(list){
  let stat = getDistrictCount(list);
  let keys = Object.keys(stat);
  document.getElementById('stats').innerHTML =
    `目前顯示 <b>${list.length}</b> 筆／總戶數：<b>${list.reduce((s,b)=>s+(parseInt(b.units)||0),0)}</b>　`+
    keys.map(k=>`${k}：${stat[k]} 筆`).join('　');
}

// ------ 互動事件 ------
function filterBuildings() {
  let query = document.getElementById('search').value.trim();
  let dist = document.getElementById('districtFilter').value;
  let year = document.getElementById('yearFilter').value;
  return buildings.filter(b => {
    let matchQ = !query ||
      (b.address&&b.address.includes(query))||
      (b.notes&&b.notes.includes(query));
    let matchD = dist==='全部行政區'||b.district===dist;
    let matchY = year==='全部年度'||b.year===year;
    return matchQ && matchD && matchY;
  });
}

function redrawMarkers() {
  let filtered = filterBuildings();
  updateMarkers(filtered);
  updateStats(filtered);
}

document.addEventListener('DOMContentLoaded', ()=>{
  loadCSV(()=>{
    // 下拉式選單
    let distEl = document.getElementById('districtFilter');
    let yearEl = document.getElementById('yearFilter');
    districts.forEach(d=>{ let o=document.createElement('option');o.value=d;o.text=d;distEl.appendChild(o)});
    years.forEach(y=>{ let o=document.createElement('option');o.value=y;o.text=y;yearEl.appendChild(o)});
    distEl.addEventListener('change', redrawMarkers);
    yearEl.addEventListener('change', redrawMarkers);

    // 地圖
    showMap();
    updateStats(buildings);

    // 檢索
    document.getElementById('search').addEventListener('input', redrawMarkers);

    // 切換顯示
    document.getElementById('toggleInfo').addEventListener('click', ()=>{
      showSimple=!showSimple;
      document.getElementById('toggleInfo').innerText=showSimple?'切換至完整資訊':'切換至簡易資訊';
      redrawMarkers();
    });

    // 匯入csv
    document.getElementById('importBtn').addEventListener('click', ()=>
      document.getElementById('csvInput').click());
    document.getElementById('csvInput').addEventListener('change', e=>{
      const file = e.target.files[0];
      if (!file) return;
      Papa.parse(file,{
        header:true,
        complete: results=>{
          if (!results.data[0].address && results.data[0]['列管地址']) {
            let fixed = results.data.map(b=>({
              ...b,
              address:b['列管地址'],
              units:b['解列戶數'],
              license:b['使用執照'],
              notes:b['備註'],
              district: b['行政區'],
              year: b['解列年度'],
              reason: b['解列原因'],
              id: b['編號'],
              lat: parseFloat(b.lat)||null,
              lon: parseFloat(b.lon)||null
            }))
            buildings=fixed.filter(b=>b.lat&&b.lon);
          } else {
            buildings=results.data.filter(b=>b.lat&&b.lon);
          }
          redrawMarkers();
          updateStats(buildings);
          alert('資料已匯入成功！');
        }
      })
    });

    // 匯出CSV
    document.getElementById('exportBtn').addEventListener('click', ()=>{
      let filtered=filterBuildings();
      let csvString = Papa.unparse(filtered);
      let blob=new Blob([csvString],{type:'text/csv;charset=utf-8;'});
      let url=URL.createObjectURL(blob);
      let a=document.createElement('a');a.href=url;a.download='export.csv';a.click();URL.revokeObjectURL(url);
    });
  });
});
