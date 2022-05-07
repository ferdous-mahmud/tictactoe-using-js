import { ChevronDoubleUpIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    return (
      <div className='fixed bottom-2 right-2'>
        <button
          type='button'
          onClick={scrollToTop}
          className={classNames(
            isVisible ? 'opacity-100' : 'opacity-0',
            'inline-flex items-center p-3 rounded-full shadow-sm text-gray-50 bg-blue-600 transition-opacity hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500'
          )}
        >
          <ChevronDoubleUpIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </div>
    );
  };