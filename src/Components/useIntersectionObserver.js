import { Children, useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [containerRef, isVisible];
};

export default useIntersectionObserver;

// const CardWrapper = ({children}) => {
//     const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

//     return (
//         {children}
//     );
// };

// export default CardWrapper;