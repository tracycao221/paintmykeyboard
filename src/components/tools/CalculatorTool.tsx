"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/content";

const stages = [
  { value: "starter", label: "Just started" },
  { value: "painting", label: "Painting steady keys" },
  { value: "expanding", label: "Saving for expansion" }
] as const;

const goals = ["cash", "paint", "roller", "keyboard"] as const;

export function CalculatorTool() {
  const [stage, setStage] = useState<(typeof stages)[number]["value"]>("starter");
  const [goal, setGoal] = useState<(typeof goals)[number]>("cash");
  const [currentCash, setCurrentCash] = useState(0);
  const [nextCost, setNextCost] = useState(0);
  const [incomePerMinute, setIncomePerMinute] = useState(0);

  const result = useMemo(() => {
    const remaining = Math.max(nextCost - currentCash, 0);
    const minutes = incomePerMinute > 0 ? Math.ceil(remaining / incomePerMinute) : null;

    const estimate = nextCost > 0
      ? remaining === 0
        ? "You can afford the next checked upgrade now."
        : minutes
          ? `You need about ${minutes} more minute${minutes === 1 ? "" : "s"} at your entered income rate.`
          : `You still need ${remaining.toLocaleString()} cash. Add income per minute for a time estimate.`
      : "Add your next upgrade cost if you want an affordability estimate.";

    if (goal === "paint") {
      return `Check better paints when your goal is stronger earnings from each painted key. ${estimate}`;
    }
    if (goal === "roller") {
      return `Focus on roller upgrades when painting speed feels slower than your cash progress. ${estimate}`;
    }
    if (goal === "keyboard") {
      return `Save for keyboard expansion when your current keys no longer give enough room to grow. ${estimate}`;
    }
    if (stage === "starter") {
      return `Start with simple cash gains from painted keys, then compare paint and roller upgrades. ${estimate}`;
    }
    return `Prioritize the upgrade that improves your next few minutes of painting, not the one that only looks rare. ${estimate}`;
  }, [currentCash, goal, incomePerMinute, nextCost, stage]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="content-card">
        <SectionHeader eyebrow="Inputs" title="Plan your next move" />
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Progress stage</span>
            <select value={stage} onChange={(event) => setStage(event.target.value as (typeof stages)[number]["value"])} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
              {stages.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Current goal</span>
            <select value={goal} onChange={(event) => setGoal(event.target.value as (typeof goals)[number])} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
              <option value="cash">Earn cash faster</option>
              <option value="paint">Unlock better paints</option>
              <option value="roller">Upgrade the roller</option>
              <option value="keyboard">Expand the keyboard</option>
            </select>
          </label>
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Cash</span>
              <input min="0" type="number" value={currentCash} onChange={(event) => setCurrentCash(Number(event.target.value))} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Next cost</span>
              <input min="0" type="number" value={nextCost} onChange={(event) => setNextCost(Number(event.target.value))} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Cash / min</span>
              <input min="0" type="number" value={incomePerMinute} onChange={(event) => setIncomePerMinute(Number(event.target.value))} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white" />
            </label>
          </div>
        </div>
      </div>

      <div className="content-card">
        <SectionHeader eyebrow="Output" title="Recommendation" />
        <p className="mt-6 text-2xl font-extrabold leading-9 text-white">{result}</p>
        <p className="mt-5 text-sm leading-6 text-white/60">
          Exact Paint My Keyboard upgrade costs and formulas are still being checked. Enter your own observed numbers for the most useful estimate.
        </p>
      </div>
    </div>
  );
}
