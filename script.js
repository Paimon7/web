const mapRotationApiUrl = "https://api.mozambiquehe.re/maprotation?auth=d27c50be31f5f78a74cd9c5fb77e0b98&version=1";
const predatorApiUrl = "https://api.mozambiquehe.re/predator?auth=d27c50be31f5f78a74cd9c5fb77e0b98";
const rankedMapName = document.getElementById("ranked-map-name");
const rankedLP = document.getElementById("ranked-lp");

fetch(mapRotationApiUrl).then(response => response.json()).then(data => {
  const rankedCurrentMap = data.ranked.current;
  rankedMapName.textContent = `現在のマップ：${rankedCurrentMap.map}`;
}).catch(error => console.error(error));

fetch(predatorApiUrl).then(response => response.json()).then(data => {
  const predatorPC = data.RP.PC;
  rankedLP.textContent = `プレデターボーダー：${predatorPC.val}`;
}).catch(error => console.error(error));

document.querySelectorAll(".cate").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".home-news-content").forEach(content => {
      content.classList.remove("active");
    });
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
    document.querySelectorAll(".cate").forEach(btn => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

function switchTab(tabId) {
  var tabContents = document.querySelectorAll('.home-news-content');
  tabContents.forEach(function (content) {
    content.style.display = 'none';
  });
  var selectedTabContent = document.getElementById(tabId);
  if (selectedTabContent) {
    selectedTabContent.style.display = 'block';
  }
}
var tabButtons = document.querySelectorAll('.cate');
tabButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var tabId = button.getAttribute('data-tab');
    switchTab(tabId);
  });
});
switchTab('tab-new');
