import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { DarkModeContext } from './darkModeProvider';

const DetailJobSkeleton = () => {
    const { IsDark } = useContext(DarkModeContext);

    return (
        <div className='flex gap-16 items-center tablet:flex-col tablet:items-start py-12'>
            <div className='w-2/5 tablet:w-[70%] tablet:aspect-video mobile:w-full'>
                <ContentLoader
                    speed={2}
                    width='100%'
                    height={400}
                    backgroundColor={IsDark ? 'hsl(209, 23%, 22%)' : "#f3f3f3"}
                    foregroundColor={IsDark ? 'hsl(207, 26%, 17%)' : "#E0E0E0"}
                >
                    <rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" />
                </ContentLoader>
            </div>
            <div className='flex-1'>
                <ContentLoader
                    speed={2}
                    width='100%'
                    height={300}
                    viewBox="0 0 400 300"
                    backgroundColor={IsDark ? 'hsl(209, 23%, 22%)' : "#f3f3f3"}
                    foregroundColor={IsDark ? 'hsl(207, 26%, 17%)' : "#E0E0E0"}
                >
                    <rect x="0" y="0" rx="4" ry="4" width="70%" height="24" />
                    <rect x="0" y="40" rx="4" ry="4" width="100%" height="20" />
                    <rect x="0" y="70" rx="4" ry="4" width="90%" height="20" />
                    <rect x="0" y="100" rx="4" ry="4" width="80%" height="20" />
                    <rect x="0" y="130" rx="4" ry="4" width="60%" height="20" />
                    <rect x="0" y="180" rx="4" ry="4" width="50%" height="24" />
                    <rect x="0" y="210" rx="4" ry="4" width="40%" height="24" />
                    <rect x="0" y="240" rx="4" ry="4" width="60%" height="24" />
                </ContentLoader>
            </div>
        </div>
    );
}

export default DetailJobSkeleton;
