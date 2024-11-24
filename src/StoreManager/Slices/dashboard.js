import { createSlice } from "@reduxjs/toolkit";

const dashboardInitialState = {
    dataOverview: {
      averageWin: '642.00',
      averageLoss: '0.00',
      profitFactor: '6.4',
      bestTrade: '8,908.99',
      winRatio: '-4,800.90',
      riskReward: '3,490.00',
      totalProfitTarget: '12,000.00',
      profitTarget: '8,908.99',
      totalDailyLossLimit: '12,000.00',
      dailLossLimit: '11,908.99',
      equityPassLevel: '124,900.00',
      equityBreachLevel: '124,900.00'
    }
};

const dashboard = createSlice({
  name: "Dashboard",
  initialState: dashboardInitialState,
  reducers: {
    setDashboard(state, { payload }) {
      
    },
    clearDashboard(state, { payload }) {
      
    },
  },
});

export const { setDashboard, clearDashboard } = dashboard.actions;

export default dashboard.reducer;
