'use client';

import { useState, useEffect } from 'react';

/**
 * Renders a date only on the client side to avoid hydration mismatches
 * caused by server/client timezone differences.
 */
export function FormattedDate({
    date,
    options
}: {
    date: string | Date,
    options?: Intl.DateTimeFormatOptions
}) {
    const [formatted, setFormatted] = useState<string>('');

    useEffect(() => {
        // Only access local timezone in the browser
        const d = new Date(date);
        if (isNaN(d.getTime())) {
            setFormatted('Invalid date');
        } else {
            setFormatted(d.toLocaleString([], options));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date, JSON.stringify(options)]);

    // Render a placeholder or empty string during server-side rendering
    if (!formatted) return <span className="opacity-0">Loading...</span>;

    return <span>{formatted}</span>;
}
