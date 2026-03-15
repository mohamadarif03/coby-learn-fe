import { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

export function useSummaryScrollProgress(dep?: unknown) {
  const summaryPaperRef = useRef<HTMLDivElement>(null);
  const [summaryScrollProgress, setSummaryScrollProgress] = useState(0);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  const update = () => {
    const el = summaryPaperRef.current;
    if (!el) return;

    if (isMobile) {
      const maxScrollable = el.scrollHeight - el.clientHeight;
      if (maxScrollable <= 0) {
        setSummaryScrollProgress(0);
        return;
      }
      setSummaryScrollProgress(Math.min(100, Math.max(0, (el.scrollTop / maxScrollable) * 100)));
      return;
    }

    const rect = el.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const elTop = scrollY + rect.top;
    const elHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const start = elTop - viewportHeight * 0.2;
    const end = elTop + elHeight - viewportHeight * 0.65;
    if (end <= start) {
      setSummaryScrollProgress(0);
      return;
    }
    setSummaryScrollProgress(Math.min(100, Math.max(0, ((scrollY - start) / (end - start)) * 100)));
  };

  useEffect(() => {
    setSummaryScrollProgress(0);
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep, isMobile]);

  return { summaryPaperRef, summaryScrollProgress, onScroll: update };
}
