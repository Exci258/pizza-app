import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
);
