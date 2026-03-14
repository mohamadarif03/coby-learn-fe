import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { COLORS } from './landingPage.constants';
import logo from '../../assets/logo_1.svg';

function LandingFooter(): React.JSX.Element {
  return (
    <Box sx={{ py: 4, borderTop: `1px solid ${COLORS.border}`, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
          <Box
              sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 2, cursor: 'pointer' }}
            >
              <img src={logo} alt="CobyLearnAi" style={{ height: '40px' }} />
              <Box>
                <Typography
                    variant="h6"
                    fontWeight="700"
                    sx={{ letterSpacing: '-0.5px', color: COLORS.textMain }}
                >
                    CobyLearn<Box component="span" sx={{ color: COLORS.accent }}>Ai</Box>
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{ color: COLORS.textMuted }}
                >
                    Empower your learning journey with AI
                </Typography>
              </Box>
            </Box>

          <Stack direction="row" spacing={4}>
            {['About', 'Privacy', 'Terms', 'Contact'].map((link) => (
              <Typography key={link} sx={{ color: COLORS.textMuted, cursor: 'pointer', '&:hover': { color: COLORS.textMain } }}>
                {link}
              </Typography>
            ))}
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 8, color: '#334155' }}>
          © {new Date().getFullYear()} CobyLearnAi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default LandingFooter;
