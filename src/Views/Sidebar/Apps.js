import { Link } from "react-router-dom"

const Apps = () => {
    return (
        <>
            <h2 className="title">Apps</h2>
            <ul className="no-border">
                <li><Link to="/news-feeds"><img src="img/newsfeeds.png"/>News Feeds</Link></li>
                <li><Link to="/economic-calendar"><img src="img/economic_calendar.png"/>Economic Calendar</Link></li>
                <li><Link to="/webtrader-platform"><img src="img/webtrader.png"/>WebTrader Platform</Link></li>
                <li><Link to="/margin-calculator"><img src="img/margin_calculator.png"/>Margin Calculator</Link></li>
                <li><Link to="/profit-calculator"><img src="img/profit_calculator.png"/>Profit Calculator</Link></li>
            </ul>
        </>
    )
}

export default Apps;