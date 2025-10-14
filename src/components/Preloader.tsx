import { useEffect, useState } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Remove preloader-active class (equivalent to jQuery removeClass)
            setIsLoading(false);

            // Add loaded class after delay (equivalent to setTimeout)
            setTimeout(() => {
                setIsVisible(false);
            }, 500);
        };

        // Check if document is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            // Add event listener for window load
            window.addEventListener('load', handleLoad);

            // Cleanup function
            return () => {
                window.removeEventListener('load', handleLoad);
            };
        }
    }, []);

    // Don't render anything if preloader is completely done
    if (!isVisible) {
        return null;
    }

    return (
        <div className={`preloader-activate open_tm_preloader ${isLoading ? 'preloader-active' : ''}`}>
            <div className="preloader-area-wrap">
                <div className="spinner d-flex justify-content-center align-items-center h-100">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                </div>
            </div>
        </div>
    );
};

export default Preloader;