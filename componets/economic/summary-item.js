import Button from "../ui/button";
import Image from "next/image";
import classes from './summary-item.module.css'

function SummaryItem(props) {

    const {name, lastUpdate, value, change, slug} = props

    const humanReadableDate = new Date(lastUpdate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

    return (
        <li className={classes.item}>
            <img src={'/images/dollar-bills.jpeg'} alt={name} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{name}</h2>
                </div>
                <div className={classes.date}>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.summary}>
                    <h3>{value}</h3>
                </div>
                <div className={classes.summary}>
                    <h3>{change}</h3>
                </div>
            </div>
        </li>
    );
}

export default SummaryItem

// name: "CPI",
//             lastUpdate: "2022-06-01T00:00:00Z",
//             value: "296.311",
//             change: "1.354995258360303",
//             slug: "cpi",
//             extras: null