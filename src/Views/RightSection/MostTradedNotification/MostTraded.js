import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ClickAwayListener } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const MostTraded = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen,setIsOpen] = useState(false);

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
                <h2>Most Traded</h2>
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
            <div className="traded-data">
                <div>
                    <div className="indi-wrapper"><span className="indicator blue"></span>NZDUSD</div>
                    <div className="indi-wrapper"><span className="indicator orange"></span>GBPUSD</div>
                    <div className="indi-wrapper"><span className="indicator light-blue"></span>AUDCHF</div>
                </div>
                <div>
                    <div className="indi-wrapper"><span className="indicator blue opac"></span>USDCHF</div>
                    <div className="indi-wrapper"><span className="indicator orange opac"></span>XAUUSD</div>
                    <div className="indi-wrapper"><span className="indicator light-blue opac"></span>AUDNZD</div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default MostTraded;