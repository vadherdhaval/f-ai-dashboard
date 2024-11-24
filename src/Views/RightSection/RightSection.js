import Topbar from "./Topbar/Topbar"
import './RightSection.scss';
import GraphView from "./DataView/GraphView";
import MostTradedNotification from "./MostTradedNotification/MostTradedNotification";
import Grid from '@mui/material/Grid2';
import DataTable from "./DataGridTable";

const RightSection = () => {
    return (
        <section className="right-section">
            <Topbar />

            <div className="overview-wrapper">
                <div className="top-section">
                    <GraphView />
                    <MostTradedNotification />
                </div>
                <div className="main-table">
                    <DataTable/>
                </div>
            </div>


        </section>
    )
}
export default RightSection;