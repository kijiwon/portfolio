import React, { useEffect } from 'react';

const useWheel = (
  pageRef: React.RefObject<HTMLDivElement | null>,
  setPageNum: React.Dispatch<React.SetStateAction<number>>,
  pageHeight: number,
) => {
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      const { deltaY } = e;
      const { current: pageRefCurrent } = pageRef;
      if (pageRefCurrent) {
        const { scrollTop } = pageRefCurrent;
        if (deltaY >= 0) {
          // 스크롤 내릴때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            pageRef.current?.scrollTo({
              top: pageHeight,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(2);
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            pageRef.current?.scrollTo({
              top: pageHeight * 2,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(3);
          } else if (
            scrollTop >= pageHeight * 2 &&
            scrollTop < pageHeight * 3
          ) {
            pageRef.current?.scrollTo({
              top: pageHeight * 3,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(4);
          } else if (
            scrollTop >= pageHeight * 3 &&
            scrollTop < pageHeight * 4
          ) {
            pageRef.current?.scrollTo({
              top: pageHeight * 3,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(4);
          }
        } else if (deltaY < 0) {
          // 스크롤 올릴때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            pageRef.current?.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(1);
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            pageRef.current?.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(1);
          } else if (
            scrollTop >= pageHeight * 2 &&
            scrollTop < pageHeight * 3
          ) {
            pageRef.current?.scrollTo({
              top: pageHeight,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(2);
          } else if (
            scrollTop >= pageHeight * 3 &&
            scrollTop < pageHeight * 4
          ) {
            pageRef.current?.scrollTo({
              top: pageHeight * 2,
              left: 0,
              behavior: 'smooth',
            });
            setPageNum(3);
          }
        }
      }
    };

    window.addEventListener('wheel', wheelHandler);

    return () => {
      window.removeEventListener('wheel', wheelHandler);
    };
  }, [pageRef]);
};

export default useWheel;
