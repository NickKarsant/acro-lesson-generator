import { useState, useEffect } from 'react';

const Route = ({path, children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  
  // only run once
  useEffect(()=>{
    const onLocationChange =() => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
    
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
    // add empty array to run only once at render
  }, []);

  return currentPath === path ? children : null
};



export default Route;