import React from 'react';
import { Paper, Typography, Box, Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getDailyQuizStatus } from '../../services/apiLibraryService';

function FocusSessionWidget(): React.JSX.Element {
  const { data: status, isLoading } = useQuery({
    queryKey: ['dailyQuizStatus'],
    queryFn: getDailyQuizStatus,
  });

  if (isLoading) {
    return (
      <Paper sx={{ p: 2, height: '100%', bgcolor: 'background.paper' }}>
        <Skeleton width="70%" height={24} sx={{ mb: 1 }} />
        <Skeleton width="50%" height={20} sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', gap: 1 }}>
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <Skeleton key={day} variant="circular" width={32} height={32} />
          ))}
        </Box>
      </Paper>
    );
  }

  const streakCount = status?.streak || 0;
  
  // Generate the current week days
  const today = new Date();
  const currentDay = today.getDay(); // 0 = Sunday, 6 = Saturday
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDay); // Go back to Sunday

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const weekDates = [];
  
  // Generate week dates starting from Monday (skip Sunday)
  for (let i = 1; i <= 5; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    weekDates.push(date);
  }

  const todayDate = today.getDate();

  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        elevation: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="body2"
          sx={{ 
            color: 'text.secondary',
            fontSize: '0.875rem',
            mb: 0.5
          }}
        >
          You're on a
        </Typography>
        <Typography
          variant="h6"
          sx={{ 
            color: 'text.primary',
            fontWeight: 700,
            fontSize: '1.1rem'
          }}
        >
          {streakCount}-day streak
        </Typography>
      </Box>

      {/* Calendar Grid */}
      <Box>
        {/* Day Labels */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gap: 1,
            mb: 1
          }}
        >
          {weekDays.map((day) => (
            <Typography
              key={day}
              variant="caption"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                fontSize: '0.75rem',
                fontWeight: 500
              }}
            >
              {day}
            </Typography>
          ))}
        </Box>

        {/* Date Numbers */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gap: 1
          }}
        >
          {weekDates.map((date, index) => {
            const dateNum = date.getDate();
            const isToday = dateNum === todayDate;
            
            return (
              <Box
                key={index}
                sx={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  bgcolor: isToday ? 'primary.main' : 'transparent',
                  color: isToday ? 'white' : 'text.primary',
                  fontWeight: isToday ? 700 : 500,
                  fontSize: '0.875rem',
                  border: isToday ? 'none' : '1px solid',
                  borderColor: isToday ? 'transparent' : 'divider',
                  transition: 'all 0.2s ease-in-out',
                  mx: 'auto'
                }}
              >
                {dateNum}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Paper>
  );
}

export default FocusSessionWidget;