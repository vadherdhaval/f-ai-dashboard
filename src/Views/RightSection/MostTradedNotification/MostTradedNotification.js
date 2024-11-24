import Grid from '@mui/material/Grid2';
import './MostTradedNotification.scss';
import ProfitTarget from './ProfitTarget';
import DailyLossLimit from './DailyLoss';
import MostTraded from './MostTraded';
import Notifications from './Notifications';

const MostTradedNotification = () => {
    return (
        <div className="right-side-wrapper">
            <Grid container spacing={2}>
                <Grid size={6}>
                    <ProfitTarget/>
                </Grid>
                <Grid size={6}>
                    <DailyLossLimit/>
                </Grid>
                <Grid size={12}>
                    <MostTraded/>
                </Grid>
                <Grid size={12}>
                    <Notifications/>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default MostTradedNotification;