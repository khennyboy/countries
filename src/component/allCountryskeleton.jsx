// JobSkeleton.js
import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { DarkModeContext } from './darkModeProvider';

const JobSkeleton = () => {
  const { IsDark } = useContext(DarkModeContext)
  return (
    <ContentLoader
      speed={2}
      width='100%'
      viewBox="0 0 400 300"
      backgroundColor={IsDark ? 'hsl(209, 23%, 22%)' : "#f3f3f3"}
      foregroundColor={IsDark ? 'hsl(207, 26%, 17%)' : "#E0E0E0"}
    >
      <rect x="0" y="0" rx="3" ry="3" width='100%' height="130" />
      <rect x="10" y="140" rx="3" ry="3" width="40%" height="30" />
      <rect x="10" y="180" rx="3" ry="3" width="40%" height="30" />
      <rect x="10" y="220" rx="3" ry="3" width="40%" height="30" />
      <rect x="10" y="260" rx="3" ry="3" width="40%" height="30" />
    </ContentLoader>
  )
}

export default JobSkeleton;
