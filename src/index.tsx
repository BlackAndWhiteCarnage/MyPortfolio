/**
 * External dependencies
 */
import { createRoot } from 'react-dom/client';

/**
 * Internal dependencies
 */
import '@/scss/index.scss';

import Root from './Root';

createRoot(document.getElementById('root')!).render(<Root />);
