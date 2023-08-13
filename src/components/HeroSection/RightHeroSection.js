import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import AvatarLottie from '../../assets/avatar_lottie.json';

const RightHeroSection = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const lottieStyles = {
        extralargeScreen: {
            width: '500px',
            height: '500px',
        },
        largeScreen: {
            width: '500px',
            height: '500px',
        },
        base: {
            width: '400px',
            height: '400px',
        },
        smallScreen: {
            width: '320px',
            height: '300px',
        },
        verySmallScreen: {
            width: '300px',
            height: '300px',
        },
        extraSmallScreen: {
            width: '200px',
            height: '200px',
        },
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let appliedStyle = lottieStyles.base;

    if (windowWidth <= 1600) {
        appliedStyle = { ...appliedStyle, ...lottieStyles.smallScreen };
    }

    if (windowWidth <= 1224) {
        appliedStyle = { ...appliedStyle, ...lottieStyles.smallScreen };
    }

    if (windowWidth <= 680) {
        appliedStyle = { ...appliedStyle, ...lottieStyles.verySmallScreen };
    }
    if (windowWidth <= 500) {
        appliedStyle = { ...appliedStyle, ...lottieStyles.extraSmallScreen };
    }

    return (
        <div >
            <Lottie
                loop
                animationData={AvatarLottie}
                play
                style={appliedStyle}
            />
        </div>
    );
};

export default RightHeroSection;