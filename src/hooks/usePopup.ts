/**
 * External dependencies
 */
import { useCallback, useEffect, useMemo, useState } from 'react';

const usePopup = (initialIsOpen = false) => {
	const [isOpen, setIsOpen] = useState(initialIsOpen);

	useEffect(() => {
		setIsOpen(initialIsOpen);
	}, [initialIsOpen]);

	const close = useCallback(() => setIsOpen(false), []);
	const open = useCallback(() => setIsOpen(true), []);
	const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

	return useMemo(
		() => ({
			close,
			isOpen,
			open,
			toggle,
		}),
		[close, isOpen, open, toggle]
	);
};

export default usePopup;
