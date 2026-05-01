import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const MiniProjects = (): ReactElement => {
  const { language } = useLanguage();
  const ko = language === 'ko';

  const projects = [
    {
      title: ko ? '프로젝트 1: Hello World 생성기' : 'Project 1: Hello World Generator',
      desc: ko
        ? 'Codex CLI를 처음 실행하여 간단한 Hello World 프로그램을 생성합니다. 프롬프트 작성법과 결과 확인 방법을 배웁니다.'
        : 'Run Codex CLI for the first time to generate a Hello World program. Learn prompt writing and result verification.',
      steps: ko
        ? ['빈 디렉토리 생성 후 이동', 'codex "Python으로 Hello World 프로그램을 만들어줘" 실행', 'Suggest 모드에서 변경사항 확인 후 승인', '생성된 파일 확인 및 실행 (python hello.py)', '같은 요청을 JavaScript, TypeScript, Go로 반복']
        : ['Create and enter an empty directory', 'Run: codex "Create a Hello World program in Python"', 'Review and approve changes in Suggest mode', 'Verify and run generated file (python hello.py)', 'Repeat the same request for JavaScript, TypeScript, Go'],
      goal: ko ? 'Codex CLI 기본 실행 흐름과 Suggest 모드 이해' : 'Understand basic Codex CLI execution flow and Suggest mode',
      time: ko ? '10분' : '10 min',
      files: '1',
    },
    {
      title: ko ? '프로젝트 2: README.md 자동 생성' : 'Project 2: Auto-generate README.md',
      desc: ko
        ? '기존 프로젝트 디렉토리에서 Codex에게 코드를 분석하고 README.md를 작성하도록 요청합니다.'
        : 'Ask Codex to analyze existing code and generate a README.md for the project.',
      steps: ko
        ? ['기존 프로젝트 디렉토리로 이동 (또는 샘플 프로젝트 생성)', 'codex "이 프로젝트를 분석해서 README.md를 작성해줘" 실행', 'Codex가 파일을 읽고 분석하는 과정 관찰', '생성된 README.md 내용 검토', '추가 수정 요청: "설치 방법과 사용 예시를 더 상세하게 보강해줘"']
        : ['Navigate to an existing project (or create a sample)', 'Run: codex "Analyze this project and write a README.md"', 'Observe how Codex reads and analyzes files', 'Review the generated README.md', 'Request refinement: "Add more detailed installation and usage examples"'],
      goal: ko ? 'Codex의 파일 읽기/쓰기 동작 이해 및 반복적 프롬프트 개선' : 'Understand file read/write operations and iterative prompt refinement',
      time: ko ? '15분' : '15 min',
      files: '1',
    },
    {
      title: ko ? '프로젝트 3: .gitignore 맞춤 생성' : 'Project 3: Custom .gitignore Generator',
      desc: ko
        ? '프로젝트 기술 스택에 맞는 .gitignore 파일을 Codex가 자동으로 생성합니다.'
        : 'Codex automatically generates a .gitignore file matching your project\'s tech stack.',
      steps: ko
        ? ['프로젝트 루트에서 실행', 'codex "이 프로젝트에 맞는 .gitignore를 만들어줘. React, Vite, TypeScript, Node.js 환경이야" 실행', '생성된 내용 검토 및 승인', '추가 요청: ".env, .claude/, dist/ 도 추가해줘"', 'git status로 .gitignore 적용 확인']
        : ['Navigate to project root', 'Run: codex "Create a .gitignore for React, Vite, TypeScript, Node.js"', 'Review and approve the generated content', 'Request additions: "Also add .env, .claude/, dist/"', 'Verify with git status'],
      goal: ko ? 'Codex에게 구체적인 기술 스택 정보를 전달하는 연습' : 'Practice providing specific tech stack info to Codex',
      time: ko ? '10분' : '10 min',
      files: '1',
    },
    {
      title: ko ? '프로젝트 4: 코드 분석 & 설명 요청' : 'Project 4: Code Analysis & Explanation',
      desc: ko
        ? '복잡한 코드 파일을 Codex에게 분석/설명하도록 요청합니다. 읽기 전용으로 AI의 코드 이해력을 테스트합니다.'
        : 'Ask Codex to analyze and explain complex code. Test AI\'s code comprehension in read-only mode.',
      steps: ko
        ? ['복잡한 함수가 있는 파일 준비 (또는 오픈소스에서 선택)', 'codex "src/utils/auth.ts 파일을 분석하고 각 함수의 역할을 한국어로 설명해줘" 실행', 'Codex의 설명을 읽고 정확성 검증', '"이 코드의 잠재적 보안 취약점을 찾아줘" 후속 질문', '"이 코드를 더 개선할 수 있는 방법을 제안해줘" 추가 요청']
        : ['Prepare a file with complex functions (or select from open source)', 'Run: codex "Analyze src/utils/auth.ts and explain each function"', 'Read and verify Codex\'s explanation', 'Follow-up: "Find potential security vulnerabilities"', 'Further: "Suggest improvements for this code"'],
      goal: ko ? 'Codex를 코드 리뷰/학습 도구로 활용하는 방법 습득' : 'Learn to use Codex as a code review and learning tool',
      time: ko ? '15분' : '15 min',
      files: '0 (읽기 전용)',
    },
    {
      title: ko ? '프로젝트 5: 간단한 버그 수정' : 'Project 5: Simple Bug Fix',
      desc: ko
        ? '의도적으로 버그가 있는 코드를 준비하고, Codex에게 찾아서 수정하도록 합니다.'
        : 'Prepare code with intentional bugs, then ask Codex to find and fix them.',
      steps: ko
        ? ['의도적 버그가 있는 calculator.py 파일 작성 (나누기 0 처리 누락, 타입 에러 등)', 'codex "calculator.py에 버그가 있어. 찾아서 수정해줘" 실행', 'Codex의 분석 과정 관찰 (어떤 버그를 찾는지)', '수정안 검토 후 승인', '"수정한 코드에 대한 테스트도 만들어줘" 후속 요청']
        : ['Create calculator.py with intentional bugs (missing div-by-zero, type errors)', 'Run: codex "There are bugs in calculator.py. Find and fix them"', 'Observe Codex\'s analysis process', 'Review and approve the fix', 'Follow-up: "Create tests for the fixed code"'],
      goal: ko ? 'Codex의 디버깅 능력 체험 및 테스트 자동 생성' : 'Experience Codex\'s debugging abilities and auto test generation',
      time: ko ? '20분' : '20 min',
      files: '1~2',
    },
  ];

  return (
    <>
      <SEOHead title={ko ? '미니 프로젝트 | Codex CLI Master' : 'Mini Projects | Codex CLI Master'} />

      <section className="page-header">
        <div className="container">
          <h2>{ko ? '미니 프로젝트' : 'Mini Projects'}</h2>
          <p>{ko ? '단일 파일 · 10~20분 · Codex CLI 기본 조작법 익히기' : 'Single file · 10-20 min · Learn basic Codex CLI operations'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="level-indicator">
            <span className="level-dot active"></span>
            <span className="level-dot"></span>
            <span className="level-dot"></span>
            <span className="level-dot"></span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{ko ? '난이도: 입문' : 'Difficulty: Entry'}</span>
          </div>

          <div className="info-box">
            <h4>{ko ? '준비물' : 'Prerequisites'}</h4>
            <p>{ko
              ? '• Codex CLI 설치 완료\n• OpenAI API 키 설정 완료\n• 터미널 기본 조작 (cd, ls, mkdir 등)'
              : '• Codex CLI installed\n• OpenAI API key configured\n• Basic terminal skills (cd, ls, mkdir)'
            }</p>
          </div>

          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <h3>{p.title}</h3>
              <div className="project-meta">
                <span>⏱ {p.time}</span>
                <span>📄 {p.files} {ko ? '파일' : 'file(s)'}</span>
                <span className="card-badge badge-mini" style={{ margin: 0 }}>{ko ? '미니' : 'Mini'}</span>
              </div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-steps">
                <h4>{ko ? '실습 단계' : 'Steps'}</h4>
                <ol>{p.steps.map((s, j) => <li key={j}>{s}</li>)}</ol>
              </div>
              <div className="project-goal">
                <h4>{ko ? '학습 목표' : 'Learning Goal'}</h4>
                <p>{p.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MiniProjects;
