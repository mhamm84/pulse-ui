import { Fragment } from "react";
import SummaryList from "../../componets/economic/summary-list";
import { getEconomicDashboard } from '../../dummy-data';

function Economic (props) {

    const economicSummaries = getEconomicDashboard();

    return (
        <SummaryList summaries={economicSummaries}/>
    )
}

export default Economic