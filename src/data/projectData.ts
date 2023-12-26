import { ProjectType } from '../types/types';

export const projectData: ProjectType[] = [
  {
    id: 'tododiary',
    title: '투두 다이어리',
    project: '개인',
    duration: '2023.11.27 - 2023.12.06',
    role: [
      '투두 CRUD',
      '투두 목록 정렬',
      '다이어리 CRUD',
      '다이어리 목록 정렬',
      '캘린더에 투두 표시',
      '반응형 웹',
      '페이지 이동',
    ],
    summary: '투두와 다이어리를 함께 관리하는 웹 애플리케이션',
    description:
      'Redux-Toolkit을 사용해 보기 위해 기존에 구현했던 투두 리스트 프로젝트에 일기 기능을 더해 프로젝트를 확장시켰다.<br/>투두의 데이터는 하루가 지나면 없어지고, 데이터가 없는 화면과 있는 화면을 다르게 구현했다. 투두 목록은 최신순, 오래된 순으로 정렬이 가능하며 완료된 투두, 미완료된 투두를 구분해 볼 수 있다. 다이어리 또한 최신순, 오래된 순으로 정렬이 가능하다. <br/> 투두와 다이어리의 데이터는 모두 localStorage에 저장해 새로고침을 하거나 창을 나갔다 들어와도 데이터가 유지되도록 구현했다.<br/> 캘린더에는 투두 데이터를 날짜에 맞게 표시했다. 갯수로 표시된 셀을 눌러 페이지를 이동하면 투두 목록을 완료된 것과 미완료된 것을 구분해 표시해 한 눈에 볼 수 있다.',
    skills: [
      'React',
      'JavaScript',
      'Styled-Component',
      'Redux-Toolkit',
      'Redux-persist',
      'React-Big-Calendar',
      'Firebase',
      'Prettier',
      'ESLint',
    ],
    github: 'https://github.com/kijiwon/todo_diary',
    pageLink: 'https://project-todo-diary.web.app/',
  },
  {
    id: 'numberbaseball',
    title: '숫자야구 게임',
    project: '개인',
    duration: '2023.11.22 - 2023.11.25',
    role: [
      '중복되지 않는 4자리 숫자 뽑기',
      '입력된 숫자와 정답을 대조해 결과 알려주기',
      '반응형 웹',
    ],
    summary: '4자리의 랜덤한 숫자를 맞추는 게임',
    description:
      '이전에 구현했던 프로젝트를 Styled-Component를 사용해 리팩토링했다. <br/> useContext와 React.memo를 사용해 최적화를 진행했다. ',
    skills: [
      'React',
      'JavaScript',
      'Styled-Component',
      'Prettier',
      'ESLint',
      'Git-Pages',
    ],
    github: 'https://github.com/kijiwon/project-number_baseball',
    pageLink: 'https://kijiwon.github.io/',
  },
  {
    id: 'soomo',
    title: '수모:SOOMO',
    project: '팀',
    duration: '2023.04 - 2023.05',
    summary: '수영인들을 위한 수영 기록 플랫폼',
    description:
      '수영인들의 수영 기록을 관리하기 위한 수영 기록 플랫폼 "SOOMO"<br/> 수영을 한 일자, 사진, 시간, 장소 그리고 간단한 메모를 작성하면 나만을 위한 수영 기록 캘린더가 완성된다.<br/> 캘린더로 한 달간의 운동 기록을 한 번에 볼 수 있고, 캘린더를 캡처해 게시판에 자랑할 수도 있다. <br/> 프로젝트 배포는 AWS S3로 진행하였고 http에서의 카카오맵 오류를 해결하기 위해 https 도메인을 설정하려 했으나 백엔드의 서버 도메인 문제로 아직 해결하지 못한 상태이다.',
    role: [
      '일정 CRUD',
      '캘린더에 일정 띄우기',
      '카카오맵으로 수영장 찾기',
      '캘린더 이미지 캡쳐하기',
      '반응형 웹',
      'AWS S3로 배포하기',
    ],
    skills: [
      'React',
      'JavaScript',
      'Styled-Component',
      'Axios',
      'Prettier',
      'ESLint',
      'AWS S3',
    ],
    github: 'https://github.com/codestates-seb/seb43_main_026',
    pageLink: 'http://soo-mo.s3-website.ap-northeast-2.amazonaws.com/',
  },

  // {
  //   id: 'calculator',
  //   title: '계산기',
  //   project: '개인',
  //   role:
  //   duration: '2023.01.16 - 2023.01.26',
  //   description: '다크모드를 추가한 계산기',
  //   skills: ['React', 'JavaScript', 'CSS', 'HTML5'],
  //   github: 'https://github.com/kijiwon/project-cal',
  //   pageLink: 'https://kijiwon.github.io/project-calculate_edit/',
  // },
];
