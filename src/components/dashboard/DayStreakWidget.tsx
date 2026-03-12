import React from 'react';
import { Paper, Typography, Box, Skeleton } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useQuery } from '@tanstack/react-query';
import { getDailyQuizStatus } from '../../services/apiLibraryService';

function DayStreakWidget(): React.JSX.Element {
  const { data: status, isLoading } = useQuery({
    queryKey: ['dailyQuizStatus'],
    queryFn: getDailyQuizStatus,
  });

  // Skeleton loading state
  if (isLoading) {
    return (
      <Paper sx={{ p: 2, height: '100%', bgcolor: 'background.paper', display: 'flex', alignItems: 'center', border: '1px solid', borderColor: 'divider' }}>
        <Skeleton variant="circular" width={56} height={56} sx={{ mr: 2 }} />
        <Box sx={{ width: '100%' }}>
          <Skeleton width="40%" height={30} />
          <Skeleton width="60%" />
        </Box>
      </Paper>
    );
  }

  const isDone = status?.is_done ?? false;
  // [TESTING] Start streak from 12 for dummy realism
  const streakCount = status?.streak || 0;

  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        elevation: 1,
        height: '100%',
        display: 'flex',       // Pastikan flex container
        alignItems: 'center',  // Vertikal center
        transition: 'transform 0.2s',
      }}
    >
      {/* Icon Circle */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 64,  // Ukuran fix biar tidak gepeng
          height: 64,
          minWidth: 64, // Mencegah penyusutan di layar kecil
          bgcolor: isDone ? 'rgba(249, 115, 22, 0.15)' : 'rgba(255, 167, 38, 0.1)',
          borderRadius: '50%',
          mr: 3,
          transition: '0.3s',
        }}
      >
        <LocalFireDepartmentIcon
          sx={{ color: isDone ? '#F97316' : '#FFA726', fontSize: 32, transition: '0.3s' }}
        />
      </Box>

      {/* Text Info */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: 'text.primary', fontWeight: '700', lineHeight: 1, fontSize: '2rem' }}
        >
          {streakCount}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 0.5,
            color: 'text.secondary',
            fontWeight: 600,
            letterSpacing: '0.02em'
          }}
        >
          Day Streak
        </Typography>
      </Box>
    </Paper>
  );
}

export default DayStreakWidget;