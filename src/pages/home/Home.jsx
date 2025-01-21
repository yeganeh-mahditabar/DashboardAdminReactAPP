import React from 'react';
import Features from '../../components/features/Features';
import Chart from '../../components/chart/Chart';
import { xAxisData } from '../../datas';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ flex: 4 }}>
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <Box
        sx={{
          display: 'flex',
          margin: { xs: '10px', sm: '20px' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <WidgetSm />
        <WidgetLg />
      </Box>
    </Box>
  );
}