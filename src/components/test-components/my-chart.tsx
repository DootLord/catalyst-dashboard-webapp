import { LineChart } from "@mui/x-charts";

function MyChart() {
    return <LineChart
        series={[
            {
                data: [2, 4, 5, 7, 8, 20, 30]
            }
        ]}
        width={500}
        height={300}
    />
}

export default MyChart;