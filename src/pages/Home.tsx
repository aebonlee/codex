import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

const Home = (): ReactElement => {
  const { t, language } = useLanguage();
  const ko = language === 'ko';

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* Hero */}
      <section className="page-header">
        <div className="container">
          <h2>{t('site.home.title')}</h2>
          <p>{t('site.home.subtitle')}</p>
        </div>
      </section>

      {/* What is Codex CLI */}
      <section className="section">
        <div className="container">
          <div className="site-welcome">
            <h3>{t('site.home.welcome')}</h3>
            <p>{t('site.home.description')}</p>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">GPT-5.5</div>
              <div className="stat-label">{ko ? '최신 AI 모델' : 'Latest AI Model'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Rust</div>
              <div className="stat-label">{ko ? '고성능 엔진' : 'High-Performance Engine'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3{ko ? '가지' : ''}</div>
              <div className="stat-label">{ko ? '승인 모드' : 'Approval Modes'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">OSS</div>
              <div className="stat-label">{ko ? '오픈소스' : 'Open Source'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="section section-alt">
        <div className="container">
          <div className="guide-section">
            <h2>{ko ? '빠른 시작' : 'Quick Start'}</h2>
            <pre className="code-block">
              <code>
{`# 1. 설치
npm install -g @openai/codex

# 2. API 키 설정
export OPENAI_API_KEY="sk-..."

# 3. 실행
codex "Hello World 프로그램을 Python으로 만들어줘"

# 4. 승인 모드 선택
codex --approval-mode suggest    # 모든 변경 확인 (기본값)
codex --approval-mode auto-edit  # 코드 변경 자동, 셸 명령 확인
codex --approval-mode full-auto  # 모두 자동 실행`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            {ko ? '학습 로드맵' : 'Learning Roadmap'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            {ko ? '사용법 가이드를 먼저 학습한 후, 단계별 프로젝트로 실력을 키워보세요.' : 'Start with the usage guide, then build your skills with step-by-step projects.'}
          </p>

          <div className="cards-grid">
            <Link to="/guide" className="feature-card">
              <div className="card-icon">📖</div>
              <h3>{ko ? '사용법 가이드' : 'Usage Guide'}</h3>
              <p>{ko ? '설치, 설정, 명령어, 승인 모드, 프롬프트 엔지니어링, MCP 플러그인까지 Codex CLI의 모든 것' : 'Everything about Codex CLI: installation, setup, commands, approval modes, prompt engineering, and MCP plugins'}</p>
            </Link>

            <Link to="/mini-projects" className="feature-card">
              <div className="card-icon">⚡</div>
              <h3>{ko ? '미니 프로젝트' : 'Mini Projects'}</h3>
              <p>{ko ? '단일 파일, 간단한 작업으로 Codex CLI 기본 조작법을 익힙니다' : 'Learn basic Codex CLI operations with simple, single-file tasks'}</p>
              <span className="card-badge badge-mini">{ko ? '5개 프로젝트' : '5 Projects'}</span>
            </Link>

            <Link to="/beginner" className="feature-card">
              <div className="card-icon">🌱</div>
              <h3>{ko ? '초급 프로젝트' : 'Beginner Projects'}</h3>
              <p>{ko ? '2~3개 파일을 다루며 실전 개발 워크플로우를 경험합니다' : 'Work with 2-3 files and experience real development workflows'}</p>
              <span className="card-badge badge-beginner">{ko ? '5개 프로젝트' : '5 Projects'}</span>
            </Link>

            <Link to="/intermediate" className="feature-card">
              <div className="card-icon">🔧</div>
              <h3>{ko ? '중급 프로젝트' : 'Intermediate Projects'}</h3>
              <p>{ko ? '다수의 파일과 모듈을 조율하며 복합적인 기능을 구현합니다' : 'Coordinate multiple files and modules to implement complex features'}</p>
              <span className="card-badge badge-intermediate">{ko ? '5개 프로젝트' : '5 Projects'}</span>
            </Link>

            <Link to="/advanced" className="feature-card">
              <div className="card-icon">🚀</div>
              <h3>{ko ? '고급 프로젝트' : 'Advanced Projects'}</h3>
              <p>{ko ? '대규모 코드베이스 리팩토링, CI/CD, MCP 서버 구축 등 전문가 수준 과제' : 'Expert-level tasks: large-scale refactoring, CI/CD, and MCP server development'}</p>
              <span className="card-badge badge-advanced">{ko ? '5개 프로젝트' : '5 Projects'}</span>
            </Link>

            <Link to="/comparison" className="feature-card">
              <div className="card-icon">📊</div>
              <h3>{ko ? 'AI 코딩 도구 비교' : 'AI Coding Tool Comparison'}</h3>
              <p>{ko ? 'Codex CLI vs Claude Code vs Cursor vs GitHub Copilot — 각 도구의 장단점 분석' : 'Codex CLI vs Claude Code vs Cursor vs GitHub Copilot — analyze each tool\'s strengths'}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            {ko ? 'Codex CLI 핵심 기능' : 'Codex CLI Key Features'}
          </h2>
          <div className="cards-grid">
            <div className="feature-card" style={{ cursor: 'default' }}>
              <h3>{ko ? '자연어 코딩' : 'Natural Language Coding'}</h3>
              <p>{ko ? '한국어/영어로 원하는 작업을 설명하면 코드를 자동 생성, 수정, 실행합니다.' : 'Describe tasks in natural language — Codex generates, edits, and executes code automatically.'}</p>
            </div>
            <div className="feature-card" style={{ cursor: 'default' }}>
              <h3>{ko ? '3단계 안전 모드' : 'Three Safety Modes'}</h3>
              <p>{ko ? 'Suggest(확인) → Auto-Edit(코드만 자동) → Full-Auto(모두 자동) 상황에 맞게 선택합니다.' : 'Suggest → Auto-Edit → Full-Auto — choose the right level of autonomy for your task.'}</p>
            </div>
            <div className="feature-card" style={{ cursor: 'default' }}>
              <h3>{ko ? '샌드박스 보안' : 'Sandboxed Execution'}</h3>
              <p>{ko ? '파일 접근과 네트워크를 격리하여 안전하게 명령을 실행합니다. 프로젝트 디렉토리 밖 접근을 차단합니다.' : 'Isolates file access and network for safe execution. Blocks access outside your project directory.'}</p>
            </div>
            <div className="feature-card" style={{ cursor: 'default' }}>
              <h3>{ko ? '멀티모달 입력' : 'Multimodal Input'}</h3>
              <p>{ko ? '텍스트뿐 아니라 스크린샷, 이미지를 붙여넣어 시각적 버그도 수정할 수 있습니다.' : 'Paste screenshots and images alongside text to fix visual bugs and reproduce UI issues.'}</p>
            </div>
            <div className="feature-card" style={{ cursor: 'default' }}>
              <h3>{ko ? 'MCP & 플러그인' : 'MCP & Plugins'}</h3>
              <p>{ko ? 'Model Context Protocol로 외부 도구(Figma, Slack, Notion 등)를 연결하여 기능을 확장합니다.' : 'Extend capabilities with Model Context Protocol — connect Figma, Slack, Notion, and more.'}</p>
            </div>
            <div className="feature-card" style={{ cursor: 'default' }}>
              <h3>{ko ? 'Skills 재사용' : 'Reusable Skills'}</h3>
              <p>{ko ? 'SKILL.md 파일로 반복 작업을 자동화하고 팀 전체에 워크플로우를 공유합니다.' : 'Automate repetitive tasks with SKILL.md files and share workflows across your team.'}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
