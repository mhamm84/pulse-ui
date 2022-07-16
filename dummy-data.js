
const DUMMY_DATA = [
        {
            name: "CPI",
            lastUpdate: "2022-06-01T00:00:00Z",
            value: "296.311",
            change: "1.354995258360303",
            slug: "cpi",
            extras: null
        },
        {
            name: "Consumer Sentiment",
            lastUpdate: "2022-05-01T00:00:00Z",
            value: "58.4",
            change: "-11.64383561643836",
            slug: "consumer_sentiment",
            extras: null
        },
        {
            name: "Retail Sales",
            lastUpdate: "2022-05-01T00:00:00Z",
            value: "607550",
            change: "2.1448440457575546",
            slug: "retail_sales",
            extras: null
        },
        {
            name: "3M Treasury Yield",
            lastUpdate: "2022-07-12T00:00:00Z",
            value: "2.22",
            change: "1.8018018018018056",
            slug: "treasury_yield_three_month",
            extras: {
                maturity: "3m"
            }
        },
        {
            name: "2Y Treasury Yield",
            lastUpdate: "2022-07-12T00:00:00Z",
            value: "3.03",
            change: "-1.320132013201314",
            slug: "treasury_yield_two_year",
            extras: {
                maturity: "2y"
            }   
        },
        {
            name: "5Y Treasury Yield",
            lastUpdate: "2022-07-12T00:00:00Z",
            value: "3.01",
            change: "-1.3289036544850585",
            slug: "treasury_yield_five_year",
            extras: {
                maturity: "5y"
            }
        },
        {
            name: "7Y Treasury Yield",
            lastUpdate: "2022-07-12T00:00:00Z",
            value: "3.01",
            change: "-1.661129568106312",
            slug: "treasury_yield_seven_year",
            extras: {
                maturity: "7y"
            }
        },
        {
            name: "10Y Treasury Yield",
            lastUpdate: "2022-07-11T00:00:00Z",
            value: "2.99",
            change: "-3.3444816053511683",
            slug: "treasury_yield_ten_year",
            extras: {
                maturity: "10y"
            }
        },
        {
            name: "30Y Treasury Yield",
            lastUpdate: "2022-07-12T00:00:00Z",
            value: "3.13",
            change: "-1.5974440894568787",
            slug: "treasury_yield_thirty_year",
            extras: {
                maturity: "30y"
            }
        }
];

export function getEconomicDashboard() {
    return DUMMY_DATA;
}
