// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    ID: 1,
    status: 'running',
    taskname: '司法诉讼通用下载程序字段逻辑调整',
    project: '诉讼',
    author: 'Ye Jianhua',
    crontab: '0 0 4,17 * * ?',
  },
  {
    ID: 2,
    status: 'developing',
    date: '09/23/2016',
    taskname: '北京产权交易所抓取需求',
    project: '拍卖',
    author: 'Wu Xin',
    crontab: '0 30 3 ? * *',
  },
  {
    ID: 3,
    status: 'error',
    taskname: '环保工程专业承包资质抓取需求',
    project: '诚信',
    author: 'Fang Mengjia',
    crontab: '0 0 0 * * ?',
  },
  {
    ID: 4,
    status: 'stopped',
    taskname: '证券行业中登自动入库需求',
    project: '商品',
    author: 'Li Beifeng',
    crontab: '0 0 8 * * ?',
  },
  {
    ID: 5,
    status: 'Canceled',
    taskname: '	陕国投、长城新盛等信托公告抓取',
    project: '信托',
    author: 'Cao Qianchang',
    crontab: '0 0 13 * * ?',
  }
]

const statusObj = {
  running: { color: 'primary' },
  error: { color: 'error' },
  Canceled: { color: 'info' },
  stopped: { color: 'warning' },
  developing: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Taskname</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Crontab</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{row.ID}</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.taskname}</Typography>
                    <Typography variant='caption'>{row.project}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.taskname}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.crontab}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
