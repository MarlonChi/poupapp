import { createSelector } from "@reduxjs/toolkit";

const getDailyBudget = (state) => state.user.dailyBudget;
const getFinancialObjective = (state) => state.user.financialObjective;
const getIncome = (state) => state.user.income;

export const calculateGoal = createSelector(
  [getDailyBudget, getFinancialObjective, getIncome],
  (dailyBudget, financialObjective, income) => {
    const goals = {
      economizar: income * 0.2,
      investir: income * 0.15,
      "controlar-gastos": income * 0.8,
    };

    const goal = goals[financialObjective] || 0;

    if (financialObjective === "controlar-gastos") {
      return (((goal - dailyBudget) / goal) * 100).toFixed(2);
    }

    return goal ? ((dailyBudget / goal) * 100).toFixed(2) : 0;
  }
);
