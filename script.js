    // APIのURL
    const mapRotationApiUrl = "https://api.mozambiquehe.re/maprotation?auth=d27c50be31f5f78a74cd9c5fb77e0b98&version=1";
    const predatorApiUrl = "https://api.mozambiquehe.re/predator?auth=d27c50be31f5f78a74cd9c5fb77e0b98";

    // HTML要素を取得
    const rankedMapName = document.getElementById("ranked-map-name");
    const rankedLP = document.getElementById("ranked-lp");

    // マップローテーションAPIからデータを取得して表示
    fetch(mapRotationApiUrl)
        .then(response => response.json())
        .then(data => {
            const rankedCurrentMap = data.ranked.current;
            rankedMapName.textContent = `現在のマップ：${rankedCurrentMap.map}`;
        })
        .catch(error => console.error(error));

    // Predator APIからPCプラットフォームのプレデターポイント情報を取得して表示
    fetch(predatorApiUrl)
        .then(response => response.json())
        .then(data => {
            const predatorPC = data.RP.PC;
            rankedLP.textContent = `プレデターボーダー：${predatorPC.val}`;
        })
        .catch(error => console.error(error));