// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import CardSupport from 'src/views/cards/CardSupport'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>

        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CardSupport />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardSupport />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardSupport />
        </Grid>

      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
    </ApexChartWrapper >
  )
}

export default Dashboard
