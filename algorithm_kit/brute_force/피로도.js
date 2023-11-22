function solution(k, dungeons) {
  let count = 0;

  const dfs = (k, dungeons, prev) => {
    for (let i = 0; i < dungeons.length; i++) {
      const [req, use] = dungeons[i];
      if (!req || req > k) continue;

      const copy = [...dungeons].map((v) => [...v]);
      copy[i] = [null, null];
      dfs(k - use, copy, prev + 1);
    }

    return (count = Math.max(prev, count));
  };

  dfs(k, dungeons, 0);

  return count;
}
