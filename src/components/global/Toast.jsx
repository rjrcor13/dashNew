import React from 'react';

const Toast = ({ title, message, type }) => {
	const toastClasses = {
		error: 'alert-error',
		warning: 'alert-warning',
		success: 'alert-success',
	};

	const toastTypeClass = toastClasses[type] || 'alert-info';

	return (
		<div className={`toast toast-end ${toastTypeClass}`}>
			<div className={`alert ${toastTypeClass}`}>
				{title && <strong>{title}</strong>} {message}
			</div>
		</div>
	);
};

export default Toast;
