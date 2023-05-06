/**
 * External dependencies
 */
import { createPortal } from 'react-dom';
import { FC, PropsWithChildren } from 'react';

type PortalProps = PropsWithChildren<{
	rootElement?: Element;
}>;

const Portal: FC<PortalProps> = ({ children, rootElement = document.body }) =>
	createPortal(children, rootElement);

export default Portal;
