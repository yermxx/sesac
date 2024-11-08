// side-effect 없도록 코드 수정하기
const weeks = ['일', '월', '화', '수', '목', '금', '토'];

const getNextWeek = (() => {
  let widx = -1;
  return () => {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();

let cnt = 0;

const intl = setInterval(() => {
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);