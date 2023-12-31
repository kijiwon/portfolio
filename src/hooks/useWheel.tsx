import React, { useEffect } from 'react';

const useWheel = (
  pageRef: React.RefObject<HTMLDivElement | null>,
  setPageNum: React.Dispatch<React.SetStateAction<number>>,
  pageHeight: number,
) => {
  useEffect(() => {
    const scrollHandler = (e: WheelEvent | TouchEvent) => {
      const deltaY = 'deltaY' in e ? e.deltaY : startY - e.touches[0].clientY;
      const { current: pageRefCurrent } = pageRef;
      // pc에서 마우스 스크롤시
      if (pageRefCurrent) {
        const { scrollTop } = pageRefCurrent;

        if (deltaY > 0) {
          // 아래로 스크롤
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
          // 위로 스크롤
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

    let startY: number;
    // 모바일에서 터치 스크롤시
    const touchStartHandler = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    window.addEventListener('wheel', scrollHandler);
    window.addEventListener('touchstart', touchStartHandler);
    window.addEventListener('touchmove', scrollHandler);

    return () => {
      window.removeEventListener('wheel', scrollHandler);
      window.removeEventListener('touchstart', touchStartHandler);
      window.removeEventListener('touchmove', scrollHandler);
    };
  }, [pageRef]);
};

export default useWheel;
