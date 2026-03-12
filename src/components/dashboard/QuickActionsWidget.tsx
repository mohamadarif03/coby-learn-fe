import React from 'react';
import { Paper, Typography, Stack, Button } from '@mui/material';
import { Add, MenuBookOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


function QuickActionsWidget(): React.JSX.Element {
    const navigate = useNavigate();
  
  return (
    <Paper sx={{ 
      p: 2, // 2 * 8px = 16px 
      elevation: 1,
      bgcolor: 'background.paper'
    }}>
      <Typography variant="h6" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
        Quick Actions
      </Typography>
      <Stack spacing={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/tasks')}
          startIcon={<Add />}
          fullWidth
          sx={{ 
            py: 1.5, 
            color: 'white',
            textTransform: 'none',
            borderRadius: 2,
            fontWeight: 600
          }}
        >
          Add Task
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate('/library')}
          startIcon={<MenuBookOutlined />}
          fullWidth
          sx={{ 
            py: 1.5, 
            textTransform: 'none',
            borderRadius: 2,
            borderColor: 'divider',
            color: 'text.secondary',
            fontWeight: 500,
            '&:hover': {
              borderColor: 'primary.main',
              color: 'primary.main',
              bgcolor: 'action.hover'
            }
          }}
        >
          Add Material
        </Button>

      </Stack>
    </Paper>
  );
}

export default QuickActionsWidget;