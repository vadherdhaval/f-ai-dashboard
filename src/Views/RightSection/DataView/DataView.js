import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import './DataView.scss';
import { useSelector } from 'react-redux';

function formatValue(x) {
    const numberVal = x.replace(',','');
    const isPositive = Number(numberVal) >= 0;
    console.log(numberVal, isPositive)
    const num = Number(numberVal) * (-1) < 0 ? Number(numberVal).toFixed(2) : (Number(numberVal) * (-1)).toFixed(2);
    const finalNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return !isPositive ? `-$${finalNumber}` : `$${finalNumber}`
}

const DataView = () => {
    const {averageWin,averageLoss,profitFactor,bestTrade,winRatio,riskReward} = useSelector((state) => ({
        averageWin: state.DASHBOARD.dataOverview.averageWin,
        averageLoss: state.DASHBOARD.dataOverview.averageLoss,
        profitFactor: state.DASHBOARD.dataOverview.profitFactor,
        bestTrade: state.DASHBOARD.dataOverview.bestTrade,
        winRatio: state.DASHBOARD.dataOverview.winRatio,
        riskReward: state.DASHBOARD.dataOverview.riskReward,
    }))
    return (
        <div className="data-view-wrapper">
            <Box>
                <Grid container spacing={2}>

                    <Grid size={4}>
                        <div className="card">
                            <h3><img src="img/average_win.png"/>Average Win</h3>
                            <div className='value'>{formatValue(averageWin)}</div>
                        </div>
                    </Grid>
                    <Grid size={4}>
                        <div className="card">
                            <h3><img src="img/average_loss.png"/>Average Loss</h3>
                            <div className='value'>{formatValue(averageLoss)}</div>
                        </div>
                    </Grid>
                    <Grid size={4}>
                        <div className="card">
                            <h3><img src="img/profit_factor.png"/>Profit Factor</h3>
                            <div className='value'>{profitFactor}</div>
                        </div>
                    </Grid>
                    <Grid size={4}>
                        <div className="card">
                            <h3><img src="img/best_trade.png"/>Best Trade</h3>
                            <div className='value'>{formatValue(bestTrade)}</div>
                        </div>
                    </Grid>
                    <Grid size={4}>
                        <div className="card">
                            <h3><img src="img/win_ratio.png"/>Win Ratio</h3>
                            <div className='value'>{formatValue(winRatio)}</div>
                        </div>
                    </Grid>
                    <Grid size={4}>
                        <div className="card">
                            <h3><img src="img/risk_reward.png"/>Risk Reward</h3>
                            <div className='value'>{formatValue(riskReward)}</div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default DataView;