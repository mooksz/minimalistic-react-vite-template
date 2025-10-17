import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ZodError } from 'zod';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/styles/vendor.scss';
import App from '@/app';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error) => {
                // Disable retry for Zod validation errors
                if (error instanceof ZodError) return false;

                return failureCount < 3; // Retry up to 3 times for other errors
            },
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>,
);
