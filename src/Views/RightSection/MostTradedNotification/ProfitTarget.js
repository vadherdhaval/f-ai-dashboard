import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ClickAwayListener } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatValue } from '../../../Utils/valueFormatter';

const ProfitTarget = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const {totalProfitTarget,profitTarget,equityPassLevel} = useSelector((state) => ({
        totalProfitTarget: state.DASHBOARD.dataOverview.totalProfitTarget,
        profitTarget: state.DASHBOARD.dataOverview.profitTarget,
        equityPassLevel: state.DASHBOARD.dataOverview.equityPassLevel
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
                    <img src="img/profit_target.png" />
                    <span>Profit Target<em>Of {formatValue(totalProfitTarget)}</em></span>
                </h3>
                <ClickAwayListener onClickAway={handleClose}>
                    <div aria-describedby={id} onClick={handleClick}>
                        <MoreVertIcon />

                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'left',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                        </Popover>
                    </div>
                </ClickAwayListener>
            </div>
            <div className="value">{formatValue(profitTarget)}</div>
            <div className="bottom-section">
                Equity Pass Level <span>{formatValue(equityPassLevel)}</span>
            </div>
        </div>
    )
}
export default ProfitTarget;