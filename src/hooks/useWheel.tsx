import React, { useEffect } from 'react';

const useWheel = (
  pageRef: React.RefObject<HTMLDivElement | null>,
  setPageNum: React.Dispatch<React.SetStateAction<number>>,
  pageHeight: number,
) => {
  useEffect(() => {
    let startY: number;
    // 모바일에서 터치 스크롤 시
    // 터치가 발생된 지점의 Y 좌표를 저장
    const touchStartHandler = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const scrollHandler = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
      // 'deltaY'가 있는지 확인하여 터치 이벤트와 휠 이벤트를 구분
      // 터치 이벤트 시 현재 터치 지점과 시작 터치 지점간의 거리 차를 구함
      const deltaY = 'deltaY' in e ? e.deltaY : startY - e.touches[0].clientY;
      const { current: pageRefCurrent } = pageRef;

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
