import { useState, useEffect } from 'react';

const AnimatedNumber = ({ value, duration = 1000 }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let startTime = null;
        const startValue = 0;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function (easeOutQuart)
            const ease = 1 - Math.pow(1 - progress, 4);

            const current = startValue + (value - startValue) * ease;
            setDisplayValue(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value, duration]);

    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(Math.floor(displayValue));
};

export default AnimatedNumber;
