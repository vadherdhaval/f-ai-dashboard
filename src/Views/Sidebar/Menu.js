import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <>
            <h2 className="title">menu</h2>
            <ul>
                <li><Link to="/account-overview"><img src="img/profit_calculator.png"/>account overview</Link></li>
                <li><Link to="/payouts"><img src="img/payouts.png"/>payouts</Link></li>
                <li><Link to="/certificates"><img src="img/certificates.png"/>certificates</Link></li>
                <li><Link to="/leaderboard"><img src="img/leaderboard.png"/>leaderboard</Link></li>
                <li><Link to="/order-list"><img src="img/orderlist.png"/>order list</Link></li>
            </ul>
        </>
    )
}

export default Menu;