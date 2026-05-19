const SHENZHEN_GEOJSON_URL = "./shenzhen.json";

// 大鹏新区在 geojson 中合并进了龙岗区，这里手动标注一个文字标签
const DAPENG_LABEL = {
  name: "大鹏新区",
  value: [114.4782, 22.5884, 4]
};

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

const AUTO_START_DELAY_MS = 3000;
// 刚点亮特效持续时间（颜色循环 + 大涟漪），之后归入金色稳定涟漪
const ACTIVE_DURATION_MS = 1000;
// 每次点亮的间隔
const INTERVAL_MS = 1200;
// 连接线在画布上保留时间
const CONNECTION_LIFETIME_MS = 5500;
// 同时保留的连接线最大数量
const MAX_CONNECTIONS = 6;

// 刚点亮阶段的色彩循环
const FLASH_COLORS = [
  "#ff6b9d", // 玫红
  "#ffd93d", // 明黄
  "#6bf178", // 翠绿
  "#22d3ee", // 青蓝
  "#c084fc", // 紫罗兰
  "#ffffff"  // 纯白爆闪
];
const STEADY_COLOR = "#facc15";

const state = {
  activeIndex: 0,          // 已点亮门店数（包含正在闪烁的那一颗）
  flashingIndex: -1,       // 正在闪烁的门店索引；-1 表示无
  flashColor: FLASH_COLORS[0],
  connections: [],         // 飞行光线缓存
  timer: null,             // 主时钟：每 INTERVAL_MS 点亮一颗
  flashColorTimer: null,   // 颜色循环定时器
  chart: null
};

async function main() {
  // 提升渲染像素比，让 2D 画布和文字在透视倾斜下依然清晰
  const chart = echarts.init(document.querySelector("#map"), null, {
    devicePixelRatio: Math.max(window.devicePixelRatio || 1, 2)
  });
  state.chart = chart;

  const totalEl = document.getElementById("counter-total");
  if (totalEl) totalEl.textContent = stores.length;

  try {
    const geoJson = await fetch(SHENZHEN_GEOJSON_URL).then((response) => {
      if (!response.ok) {
        throw new Error("深圳地图数据加载失败");
      }
      return response.json();
    });

    echarts.registerMap("shenzhen", geoJson);
    chart.setOption(createOption());

    setTimeout(startLighting, AUTO_START_DELAY_MS);
  } catch (error) {
    chart.setOption(createErrorOption(error));
  }

  window.addEventListener("resize", () => chart.resize());
}

// ============ 主时钟：每隔 INTERVAL_MS 点亮一颗 ============
function startLighting() {
  clearInterval(state.timer);
  activateNextStore();
  state.timer = setInterval(() => {
    if (state.activeIndex >= stores.length) {
      clearInterval(state.timer);
      return;
    }
    activateNextStore();
  }, INTERVAL_MS);
}

function activateNextStore() {
  const prev = state.activeIndex;
  state.activeIndex += 1;
  state.flashingIndex = state.activeIndex - 1;

  // 从上一颗到这一颗加一条飞行光线（首颗不加）
  if (prev > 0) {
    state.connections.push({
      coords: [stores[prev - 1].value, stores[state.flashingIndex].value],
      addedAt: performance.now()
    });
    if (state.connections.length > MAX_CONNECTIONS) {
      state.connections.shift();
    }
  }

  refreshChart();
  startFlashColorCycle();
}

// ============ 颜色循环：刚点亮的那颗在 1s 内不断变色 ============
function startFlashColorCycle() {
  clearInterval(state.flashColorTimer);
  const startTime = performance.now();

  state.flashColorTimer = setInterval(() => {
    const elapsed = performance.now() - startTime;

    if (elapsed >= ACTIVE_DURATION_MS) {
      clearInterval(state.flashColorTimer);
      state.flashingIndex = -1;
      state.flashColor = STEADY_COLOR;
      refreshChart(); // 把这颗"凝固"到金色稳定涟漪系列
      return;
    }

    const idx = Math.floor(elapsed / 110) % FLASH_COLORS.length;
    state.flashColor = FLASH_COLORS[idx];

    // 仅改颜色，不动 data，最大程度避免 rippleEffect 被重置
    state.chart.setOption({
      series: [
        {}, {}, {}, {},
        {
          itemStyle: {
            color: state.flashColor,
            shadowColor: state.flashColor
          }
        }
      ]
    });
  }, 110);
}

// ============ 把当前状态同步到图表（飞行光线 + 金色涟漪 + 刚点亮涟漪） ============
function refreshChart() {
  // 清掉过期的飞行光线
  const now = performance.now();
  state.connections = state.connections.filter(
    (c) => now - c.addedAt < CONNECTION_LIFETIME_MS
  );

  // 金色稳定涟漪：所有已点亮 - 当前闪烁中那颗
  const goldEnd = state.flashingIndex >= 0 ? state.flashingIndex : state.activeIndex;
  const goldData = stores.slice(0, goldEnd);

  // 刚点亮：只有一颗
  const flashStore = state.flashingIndex >= 0 ? stores[state.flashingIndex] : null;
  const flashData = flashStore ? [flashStore] : [];

  state.chart.setOption({
    series: [
      {}, {},
      { data: state.connections.map((c) => ({ coords: c.coords })) },
      { data: goldData },
      {
        data: flashData,
        itemStyle: {
          color: state.flashColor,
          shadowColor: state.flashColor
        }
      }
    ]
  });

  updateHud(state.activeIndex, stores[state.activeIndex - 1]);
}

function updateHud(count, current) {
  const numEl = document.getElementById("counter-num");
  const barEl = document.getElementById("counter-bar");
  const nameEl = document.getElementById("ticker-name");
  const districtEl = document.getElementById("ticker-district");
  const tickerEl = document.getElementById("ticker");

  if (numEl) numEl.textContent = count;
  if (barEl) {
    const percent = (count / stores.length) * 100;
    barEl.style.right = `${100 - percent}%`;
  }

  if (current) {
    if (nameEl) nameEl.textContent = current.name;
    if (districtEl) districtEl.textContent = `${current.district} · 已点亮`;

    if (tickerEl) {
      tickerEl.classList.remove("flash");
      // 触发重排让动画重新播放
      void tickerEl.offsetWidth;
      tickerEl.classList.add("flash");
    }
  }
}

function createOption() {
  return {
    backgroundColor: "transparent",
    tooltip: { show: false },
    geo: {
      map: "shenzhen",
      roam: false,
      zoom: 1.18,
      top: 80,
      bottom: 70,
      silent: true,
      label: {
        show: true,
        color: "#9fdcff",
        fontSize: 14,
        fontWeight: 600
      },
      itemStyle: {
        // 区域径向渐变，从中心淡蓝到边缘深蓝，伪造立体凸起感
        areaColor: {
          type: "radial",
          x: 0.5, y: 0.5, r: 0.7,
          colorStops: [
            { offset: 0, color: "#10405f" },
            { offset: 1, color: "#062035" }
          ],
          global: false
        },
        borderColor: "rgba(103, 232, 249, 0.85)",
        borderWidth: 1.3,
        shadowColor: "rgba(56, 189, 248, 0.55)",
        shadowBlur: 22
      }
    },
    series: [
      // 0 · 大鹏新区文字标签
      {
        name: "大鹏新区",
        type: "scatter",
        coordinateSystem: "geo",
        data: [DAPENG_LABEL],
        symbolSize: 0,
        silent: true,
        label: {
          show: true,
          formatter: "大鹏新区",
          color: "#9fdcff",
          fontSize: 14,
          fontWeight: 600
        },
        z: 2
      },
      // 1 · 所有未点亮分店：暗色小点
      {
        name: "全部分店",
        type: "scatter",
        coordinateSystem: "geo",
        data: stores,
        symbolSize: 7,
        silent: true,
        itemStyle: {
          color: "rgba(180, 210, 230, 0.5)",
          shadowBlur: 4,
          shadowColor: "rgba(180, 210, 230, 0.6)"
        },
        z: 3
      },
      // 2 · 飞行光线：相邻点亮之间的流光连接，每条最多存活 CONNECTION_LIFETIME_MS
      {
        name: "飞行光线",
        type: "lines",
        coordinateSystem: "geo",
        data: [],
        polyline: false,
        effect: {
          show: true,
          period: 2.4,
          trailLength: 0.55,
          symbol: "circle",
          symbolSize: 5,
          color: "#fff8d6"
        },
        lineStyle: {
          color: "rgba(250, 204, 21, 0.45)",
          width: 1.5,
          opacity: 0.6,
          curveness: 0.28,
          shadowColor: "rgba(250, 204, 21, 0.55)",
          shadowBlur: 6
        },
        silent: true,
        z: 4
      },
      // 3 · 已点亮：金色 effectScatter，持续涟漪
      {
        name: "已点亮",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: [],
        symbolSize: 11,
        showEffectOn: "render",
        rippleEffect: {
          scale: 4.5,
          brushType: "stroke",
          period: 3,
          number: 2
        },
        itemStyle: {
          color: STEADY_COLOR,
          shadowBlur: 22,
          shadowColor: STEADY_COLOR
        },
        label: {
          show: true,
          formatter: "{b}",
          position: "top",
          distance: 8,
          color: "#fff7cc",
          fontSize: 12,
          fontWeight: 700,
          backgroundColor: "rgba(8, 28, 50, 0.75)",
          padding: [3, 7],
          borderRadius: 4,
          borderColor: "rgba(250, 204, 21, 0.85)",
          borderWidth: 1
        },
        silent: true,
        z: 5
      },
      // 4 · 刚点亮：更大涟漪 + 颜色循环（1s 之后凝固到 #3）
      {
        name: "刚点亮",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: [],
        symbolSize: 18,
        showEffectOn: "render",
        rippleEffect: {
          scale: 7,
          brushType: "stroke",
          period: 1.6,
          number: 3
        },
        itemStyle: {
          color: FLASH_COLORS[0],
          shadowBlur: 36,
          shadowColor: FLASH_COLORS[0]
        },
        label: {
          show: true,
          formatter: "{b}",
          position: "top",
          distance: 12,
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 800,
          backgroundColor: "rgba(8, 28, 50, 0.85)",
          padding: [4, 10],
          borderRadius: 4,
          borderColor: "#ffffff",
          borderWidth: 1
        },
        silent: true,
        z: 6
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

main();
