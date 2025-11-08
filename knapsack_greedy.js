// 0/1 Knapsack - Greedy by maximum profit (NOT optimal in general)
//
// weights[i]  - weight of item i (number > 0)
// values[i]   - profit/value of item i (number >= 0)
// W           - knapsack capacity (number > 0)
//
// Returns:
// {
//   chosenIndices: [indices of items taken, 0-based],
//   totalWeight: number,
//   totalValue: number,
//   steps: string   // human-readable log
// }

export function knapsackGreedyByProfit(weights, values, W) {
  if (weights.length !== values.length) {
    throw new Error("weights and values must have the same length");
  }

  const n = weights.length;
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push({ index: i, w: weights[i], v: values[i] });
  }

  // sort by descending profit
  items.sort((a, b) => b.v - a.v);

  let currentW = 0;
  let currentV = 0;
  const chosen = [];
  const log = [];

  log.push("Greedy order by descending profit:");
  log.push(items.map(it => `item${it.index + 1}(v=${it.v},w=${it.w})`).join(", "));
  log.push("");

  for (const it of items) {
    if (currentW + it.w <= W) {
      chosen.push(it.index);
      currentW += it.w;
      currentV += it.v;
      log.push(
        `take item${it.index + 1} → weight=${currentW}, profit=${currentV}`
      );
    } else {
      log.push(
        `skip item${it.index + 1}, would exceed capacity (${currentW + it.w} > ${W})`
      );
    }
  }

  return {
    chosenIndices: chosen,
    totalWeight: currentW,
    totalValue: currentV,
    steps: log.join("\n")
  };
}
