import { Button, IconButton } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import ShareIcon from '@mui/icons-material/Share';
import KeyIcon from '@mui/icons-material/Key';

const ActionButtons = () => {
    return (
        <div className="action-button-wrapper">
            <Button className="primary" startIcon={<PaidIcon/>}>Request Payout</Button>
            <Button className="secondary" startIcon={<ShareIcon/>}>Share Matrics</Button>
            <IconButton className="secondary lock-button" aria-label="lock">
                <KeyIcon/>
            </IconButton>
        </div>
    )
}

export default ActionButtons;