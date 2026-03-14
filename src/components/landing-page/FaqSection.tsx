import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { COLORS } from './landingPage.constants';

const FAQ_ITEMS = [
  { q: 'Is CobyLearnAi free to use?', a: 'Yes! You can get started for free. We also plan to offer premium features for power users in the future.' },
  { q: 'Can I upload handwritten notes?', a: 'Currently we support text-based PDFs and raw text. Handwriting recognition is in our roadmap!' },
  { q: 'How accurate is the AI?', a: 'We use advanced LLMs to ensure high accuracy, but we always recommend reviewing the summaries against your original notes.' },
];

function FaqSection(): React.JSX.Element {
  return (
    <Box id="faq" sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="600" textAlign="center" sx={{ mb: 5, color: 'secondary.dark' }}>Frequently Asked Questions</Typography>

        {FAQ_ITEMS.map((faq) => (
          <Accordion key={faq.q} sx={{ bgcolor: 'background.paper', color: 'secondary.dark', mb: 2, border: `1px solid ${COLORS.border}`, '&:before': { display: 'none' }, borderRadius: '12px !important', p: 1.5}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: COLORS.textMuted }} />}>
              <Typography fontWeight="500" fontSize="1.1rem">{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={COLORS.textMuted}>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}

export default FaqSection;
