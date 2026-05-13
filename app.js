const SHENZHEN_GEOJSON_URL = "https://geo.datav.aliyun.com/areas_v3/bound/440300_full.json";

const stores = [
  {
    name: "湖贝店",
    district: "罗湖区",
    address: "深圳市罗湖区中兴路东郊街五巷44号院内 大厦（工业区）数控楼栋1层110-2房",
    value: [114.1272, 22.5492]
  },
  {
    name: "万科广场店",
    district: "龙岗区",
    address: "深圳市龙岗区坂田街道杨美社区坂锦路10号万致大厦2015",
    value: [114.0758, 22.6368]
  },
  {
    name: "万达广场店",
    district: "龙岗区",
    address: "深圳市龙岗区平湖街道平安大道1号乾龙物流园2栋2楼D区",
    value: [114.1278, 22.6958]
  },
  {
    name: "新洲店",
    district: "福田区",
    address: "深圳市福田区新洲南村92栋104商铺",
    value: [114.0368, 22.5246]
  },
  {
    name: "上水径店",
    district: "龙岗区",
    address: "深圳市龙岗区吉华街道上水径老围10号-04、05铺",
    value: [114.1142, 22.6212]
  },
  {
    name: "民治店",
    district: "龙华区",
    address: "深圳市龙华区民治街道樟坑二区15栋104",
    value: [114.0449, 22.6196]
  },
  {
    name: "龙华店",
    district: "龙华区",
    address: "深圳市龙华区龙华街道和联社区龙环一路和兴装饰城B座103-104",
    value: [114.0348, 22.6634]
  },
  {
    name: "福星店",
    district: "福田区",
    address: "深圳市福田区福田街道福华社区福星路158号深华宿舍B栋108",
    value: [114.0773, 22.5352]
  },
  {
    name: "八卦岭店",
    district: "福田区",
    address: "深圳市福田区八卦岭工业 区 542 栋1-106 号商铺",
    value: [114.1032, 22.5628]
  },
  {
    name: "粤海店",
    district: "南山区",
    address: "深圳市南山区科兴路11号深南花园裙楼B区一层",
    value: [113.9451, 22.5487]
  },
  {
    name: "南油店",
    district: "南山区",
    address: "深圳市南山区南油社区南油文化广场东滨路3036号一楼Z9",
    value: [113.9244, 22.5125]
  },
  {
    name: "车公庙店",
    district: "福田区",
    address: "深圳市福田区竹园小区27栋一层008B",
    value: [114.0228, 22.5398]
  },
  {
    name: "龙城店",
    district: "龙岗区",
    address: "深圳市龙岗区龙城街道盛平社区竹嘉路21号阳光广场",
    value: [114.2541, 22.7229]
  },
  {
    name: "丹竹头店",
    district: "龙岗区",
    address: "深圳市龙岗区南湾街道立信路49号鑫丽华信息产业园A栋1档111室",
    value: [114.1541, 22.6125]
  },
  {
    name: "爱联店",
    district: "龙岗区",
    address: "深圳市龙岗区怡苑小区8号102",
    value: [114.2334, 22.7046]
  },
  {
    name: "横岗店",
    district: "龙岗区",
    address: "深圳市龙岗区横山街道伟群路2号（伟群五金厂D栋）D栋103房",
    value: [114.2104, 22.6486]
  },
  {
    name: "光明店",
    district: "光明区",
    address: "深圳市光明区木墩新南村16栋101",
    value: [113.9378, 22.7466]
  },
  {
    name: "石岩店",
    district: "宝安区",
    address: "深圳市宝安区石岩街道上屋社区元径旧村79号79-3",
    value: [113.9366, 22.6854]
  },
  {
    name: "公明店",
    district: "光明区",
    address: "深圳市光明区公明街道上村社区元山南一巷2-1号2、3、4三个卷门铺面",
    value: [113.9048, 22.7847]
  },
  {
    name: "观城店",
    district: "龙华区",
    address: "深圳市龙华区观湖街道观城社区横坑宝志路17号1栋冠泰厂厂宿舍102",
    value: [114.0655, 22.7028]
  },
  {
    name: "大浪店",
    district: "龙华区",
    address: "深圳市龙华区大浪街道新石社区浪奔路1号1栋A115",
    value: [114.0005, 22.6866]
  },
  {
    name: "新安店",
    district: "宝安区",
    address: "深圳市宝安区新安街道38区新安街道龙井一路C、D栋大厦（工业区）C、D栋1层107号",
    value: [113.9042, 22.5757]
  },
  {
    name: "西丽店",
    district: "南山区",
    address: "深圳市南山区新围村新围综合楼120号",
    value: [113.9646, 22.5884]
  },
  {
    name: "固戍店",
    district: "宝安区",
    address: "深圳市宝安区西乡街道固戍社区西井路88号中源智创空间2楼205",
    value: [113.8509, 22.6002]
  },
  {
    name: "流塘店",
    district: "宝安区",
    address: "深圳市宝安区宝民二路35号元力科创中心2栋101房",
    value: [113.8898, 22.5826]
  },
  {
    name: "草埔店",
    district: "罗湖区",
    address: "深圳市罗湖区草埔吓围村196号102",
    value: [114.1203, 22.5866]
  },
  {
    name: "松岗店",
    district: "宝安区",
    address: "深圳市松岗街道花果山环城路2-16锦文松岗商业中心A栋1楼107铺（房屋编码是2-16号105）",
    value: [113.8478, 22.7666]
  },
  {
    name: "沙井店",
    district: "宝安区",
    address: "深圳市宝安区沙井街道民主九九工业城2#综合楼（105-108）号",
    value: [113.8289, 22.7294]
  },
  {
    name: "坪山店",
    district: "坪山区",
    address: "深圳市坪山区马峦街道坪环社区鹤源五巷3-5",
    value: [114.3508, 22.7088]
  },
  {
    name: "南头店",
    district: "南山区",
    address: "深圳市南山区南新路以西荔园路以北侧旺海怡苑商铺16号",
    value: [113.9241, 22.5425]
  }
];

const headquarters = {
  name: "中心仓",
  address: "深圳市龙岗区平湖街道平安大道1号乾龙物流园2栋2楼D区",
  value: [114.1278, 22.6958]
};

const state = {
  activeIndex: 0,
  timer: null,
  paused: false,
  chart: null
};

const activeCountEl = document.querySelector("#activeCount");
const totalCountEl = document.querySelector("#totalCount");
const storeListEl = document.querySelector("#storeList");
const replayBtn = document.querySelector("#replayBtn");
const pauseBtn = document.querySelector("#pauseBtn");

totalCountEl.textContent = stores.length;
renderStoreList();

async function main() {
  const chart = echarts.init(document.querySelector("#map"));
  state.chart = chart;

  try {
    const geoJson = await fetch(SHENZHEN_GEOJSON_URL).then((response) => {
      if (!response.ok) {
        throw new Error("深圳地图数据加载失败");
      }
      return response.json();
    });

    echarts.registerMap("shenzhen", geoJson);
    chart.setOption(createOption([], []));
    startLighting();
  } catch (error) {
    chart.setOption(createErrorOption(error));
  }

  window.addEventListener("resize", () => chart.resize());
}

function startLighting() {
  clearInterval(state.timer);
  state.timer = setInterval(() => {
    if (state.paused) {
      return;
    }

    if (state.activeIndex >= stores.length) {
      clearInterval(state.timer);
      return;
    }

    state.activeIndex += 1;
    updateChart();
  }, 520);
}

function updateChart() {
  const activeStores = stores.slice(0, state.activeIndex);
  const activeRoutes = activeStores.map((store) => ({
    fromName: headquarters.name,
    toName: store.name,
    coords: [headquarters.value, store.value]
  }));

  activeCountEl.textContent = activeStores.length;
  storeListEl.querySelectorAll("li").forEach((item, index) => {
    item.classList.toggle("active", index < state.activeIndex);
  });

  state.chart.setOption({
    series: [
      { data: stores },
      { data: [headquarters] },
      { data: activeRoutes },
      { data: activeStores }
    ]
  });
}

function createOption(activeStores, activeRoutes) {
  return {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter(params) {
        if (params.data?.district) {
          return `${params.data.name}<br/>${params.data.district}<br/>${params.data.address}`;
        }
        if (params.data?.address) {
          return `${params.data.name}<br/>${params.data.address}`;
        }
        return params.name;
      }
    },
    geo: {
      map: "shenzhen",
      roam: true,
      zoom: 1.12,
      top: 48,
      bottom: 48,
      label: {
        show: true,
        color: "#9fdcff",
        fontSize: 12
      },
      itemStyle: {
        areaColor: "#082b45",
        borderColor: "#38bdf8",
        borderWidth: 1.2,
        shadowColor: "rgba(56, 189, 248, 0.45)",
        shadowBlur: 12
      },
      emphasis: {
        label: {
          color: "#ffffff"
        },
        itemStyle: {
          areaColor: "#155e75"
        }
      }
    },
    series: [
      {
        name: "全部分店",
        type: "scatter",
        coordinateSystem: "geo",
        data: stores,
        symbolSize: 8,
        itemStyle: {
          color: "rgba(141, 182, 204, 0.42)"
        }
      },
      {
        name: "总部",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: [headquarters],
        symbolSize: 18,
        rippleEffect: {
          scale: 4.5,
          brushType: "stroke"
        },
        label: {
          show: true,
          formatter: "{b}",
          position: "bottom",
          color: "#ffffff",
          fontWeight: 700
        },
        itemStyle: {
          color: "#38bdf8",
          shadowBlur: 24,
          shadowColor: "#38bdf8"
        },
        zlevel: 4
      },
      {
        name: "点亮路径",
        type: "lines",
        coordinateSystem: "geo",
        data: activeRoutes,
        effect: {
          show: true,
          period: 4,
          trailLength: 0.35,
          symbol: "arrow",
          symbolSize: 8
        },
        lineStyle: {
          color: "#facc15",
          width: 1.5,
          opacity: 0.65,
          curveness: 0.18
        },
        zlevel: 3
      },
      {
        name: "已点亮分店",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: activeStores,
        symbolSize: 14,
        showEffectOn: "render",
        rippleEffect: {
          scale: 5,
          brushType: "stroke"
        },
        label: {
          show: true,
          formatter: "{b}",
          position: "right",
          color: "#fff7cc",
          fontSize: 13,
          fontWeight: 700
        },
        itemStyle: {
          color: "#facc15",
          shadowBlur: 28,
          shadowColor: "#facc15"
        },
        zlevel: 5
      }
    ]
  };
}

function createErrorOption(error) {
  return {
    backgroundColor: "transparent",
    title: {
      text: "地图加载失败",
      subtext: `${error.message}\n请检查网络后刷新页面。`,
      left: "center",
      top: "center",
      textStyle: {
        color: "#e0f2fe",
        fontSize: 28
      },
      subtextStyle: {
        color: "#8db6cc",
        lineHeight: 24
      }
    }
  };
}

function renderStoreList() {
  storeListEl.innerHTML = stores
    .map(
      (store, index) => `
        <li>
          <strong>${String(index + 1).padStart(2, "0")} ${store.name}</strong>
          <span>${store.district}</span>
        </li>
      `
    )
    .join("");
}

replayBtn.addEventListener("click", () => {
  state.activeIndex = 0;
  state.paused = false;
  pauseBtn.textContent = "暂停";
  activeCountEl.textContent = "0";
  updateChart();
  startLighting();
});

pauseBtn.addEventListener("click", () => {
  state.paused = !state.paused;
  pauseBtn.textContent = state.paused ? "继续" : "暂停";
});

main();
