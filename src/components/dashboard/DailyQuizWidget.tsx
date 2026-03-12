import React from 'react';
import { Paper, Typography, Button, Box, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { CheckCircleOutline, Lightbulb } from '@mui/icons-material';
import { getDailyQuizStatus } from '../../services/apiLibraryService';

function DailyQuizWidget(): React.JSX.Element {
  const navigate = useNavigate();

  const { data: status, isLoading } = useQuery({
    queryKey: ['dailyQuizStatus'],
    queryFn: getDailyQuizStatus,
  });

  if (isLoading) {
    return <Skeleton variant="rounded" height={200} />;
  }

  const isDone = status?.is_done ?? false;

  return (
    <Paper
      sx={{
        p: 2,
        elevation: 1,
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Lightbulb sx={{ color: '#F5E3AF', fontSize: 20 }} />
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: 'text.primary' }}
        >
          Daily Quiz
        </Typography>
      </Box>

      {isDone ? (
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <CheckCircleOutline sx={{ fontSize: 48, color: 'success.main', mb: 1 }} />
          <Typography variant="body1" fontWeight="bold" sx={{ color: 'success.main' }}>
            All Done for Today!
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            You've kept your streak alive. Come back tomorrow for a new challenge.
          </Typography>
        </Box>
      ) : (
        <>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.5, fontWeight: 500 }}
          >
            Test your knowledge and keep your streak going! Don't break the chain.
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate('/daily-quiz')}
            fullWidth
            sx={{
              textTransform: 'none',
              py: 1.2,
              fontSize: '0.95rem',
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Start Daily Quiz
          </Button>
        </>
      )}
    </Paper>
  );
}

export default DailyQuizWidget;
  