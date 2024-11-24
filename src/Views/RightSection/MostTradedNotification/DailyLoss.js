import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ClickAwayListener } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatValue } from '../../../Utils/valueFormatter';

const DailyLossLimit = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen,setIsOpen] = useState(false);
    const {totalDailyLimit,dailLossLimit,equityBreachLevel} = useSelector((state) => ({
        totalDailyLimit: state.DASHBOARD.dataOverview.totalDailyLossLimit,
        dailLossLimit: state.DASHBOARD.dataOverview.dailLossLimit,
        equityBreachLevel: state.DASHBOARD.dataOverview.equityBreachLevel
    }))

  const handleClick = (event) => {

    setAnchorEl(isOpen ? null : event.currentTarget);
    setIsOpen(!isOpen)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return (
        <div className="card">
            <div className="title-with-action">
                <h3>
                    <img src="img/daily_loss.png"/>
                    <span>Daily Loss Limit<em>Of {formatValue(totalDailyLimit)}</em></span>
                </h3>
                <ClickAwayListener onClickAway={handleClose}>
                    <div aria-describedby={id} onClick={handleClick}>
                        <MoreVertIcon/>
                        
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'right',
                                }}
                            >
                                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                            </Popover>
                    </div>
                </ClickAwayListener>
                
            </div>
            <div className="value">{formatValue(dailLossLimit)}</div>
            <div className="bottom-section">
                Equity Breach Level <span className="orange">{formatValue(equityBreachLevel)}</span>
            </div>
        </div>
    )
}
export default DailyLossLimit;