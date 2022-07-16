import SummaryItem from "./summary-item";
import classes from "./summary-list.module.css"

function SummaryList(props) {
    const {summaries} = props

    return (
        <ui className={classes.list}>
            {summaries.map((summary) => (
                <SummaryItem 
                    key={summary.slug}
                    name={summary.name}
                    lastUpdate={summary.lastUpdate}
                    value={summary.value}
                    change={summary.change}
                    slug={summary.slug}
                />
            ))}
        </ui>
    );
}

export default SummaryList;
