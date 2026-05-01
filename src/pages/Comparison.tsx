import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const Comparison = (): ReactElement => {
  const { language } = useLanguage();
  const ko = language === 'ko';

  return (
    <>
      <SEOHead title={ko ? 'AI 코딩 도구 비교 | Codex CLI Master' : 'AI Coding Tool Comparison | Codex CLI Master'} />

      <section className="page-header">
        <div className="container">
          <h2>{ko ? 'AI 코딩 도구 비교' : 'AI Coding Tool Comparison'}</h2>
          <p>{ko ? 'Codex CLI vs Claude Code vs Cursor vs GitHub Copilot' : 'Codex CLI vs Claude Code vs Cursor vs GitHub Copilot'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Overview */}
          <div className="guide-section">
            <h2>{ko ? '한눈에 보는 비교표' : 'At-a-Glance Comparison'}</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>{ko ? '항목' : 'Feature'}</th>
                    <th>Codex CLI</th>
                    <th>Claude Code</th>
                    <th>Cursor</th>
                    <th>GitHub Copilot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>{ko ? '개발사' : 'Company'}</strong></td><td>OpenAI</td><td>Anthropic</td><td>Anysphere</td><td>GitHub/Microsoft</td></tr>
                  <tr><td><strong>{ko ? '인터페이스' : 'Interface'}</strong></td><td>{ko ? '터미널' : 'Terminal'}</td><td>{ko ? '터미널' : 'Terminal'}</td><td>IDE (VS Code {ko ? '포크' : 'fork'})</td><td>IDE {ko ? '확장' : 'Extension'}</td></tr>
                  <tr><td><strong>{ko ? '주요 모델' : 'Primary Model'}</strong></td><td>GPT-5.5, GPT-5.4</td><td>Claude 3.5 Sonnet</td><td>{ko ? '다중 모델' : 'Multiple'}</td><td>GPT-4o, o1</td></tr>
                  <tr><td><strong>{ko ? '컨텍스트 윈도우' : 'Context Window'}</strong></td><td>~32K tokens</td><td><strong>1M tokens</strong></td><td>~100K tokens</td><td>~10-128K tokens</td></tr>
                  <tr><td><strong>{ko ? '자동완성' : 'Autocomplete'}</strong></td><td>{ko ? '없음' : 'No'}</td><td>{ko ? '없음' : 'No'}</td><td>{ko ? '있음 (최고)' : 'Yes (Best)'}</td><td>{ko ? '있음' : 'Yes'}</td></tr>
                  <tr><td><strong>{ko ? '멀티파일 편집' : 'Multi-file Edit'}</strong></td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '제한적' : 'Limited'}</td></tr>
                  <tr><td><strong>{ko ? '셸 실행' : 'Shell Execution'}</strong></td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '제한적' : 'Limited'}</td><td>{ko ? '제한적' : 'Limited'}</td></tr>
                  <tr><td><strong>{ko ? '샌드박스' : 'Sandbox'}</strong></td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '없음' : 'No'}</td><td>{ko ? '제한적' : 'Limited'}</td></tr>
                  <tr><td><strong>{ko ? '이미지 입력' : 'Image Input'}</strong></td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '제한적' : 'Limited'}</td></tr>
                  <tr><td><strong>MCP/{ko ? '플러그인' : 'Plugins'}</strong></td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '지원' : 'Yes'}</td><td>{ko ? '없음' : 'No'}</td><td>{ko ? '제한적' : 'Limited'}</td></tr>
                  <tr><td><strong>{ko ? '가격' : 'Price'}</strong></td><td>$20/{ko ? '월' : 'mo'} (ChatGPT+)</td><td>$20/{ko ? '월' : 'mo'} (+ API)</td><td>$20/{ko ? '월' : 'mo'}</td><td>$10/{ko ? '월' : 'mo'}</td></tr>
                  <tr><td><strong>{ko ? '속도' : 'Speed'}</strong></td><td>{ko ? '빠름 (Rust)' : 'Fast (Rust)'}</td><td>{ko ? '느림 (추론)' : 'Slower (reasoning)'}</td><td>{ko ? '빠름' : 'Fast'}</td><td>{ko ? '보통' : 'Medium'}</td></tr>
                  <tr><td><strong>{ko ? '오픈소스' : 'Open Source'}</strong></td><td>{ko ? '예' : 'Yes'}</td><td>{ko ? '아니오' : 'No'}</td><td>{ko ? '아니오' : 'No'}</td><td>{ko ? '아니오' : 'No'}</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Individual Tool Analysis */}
          <div className="guide-section">
            <h2>{ko ? '각 도구 심층 분석' : 'Deep Dive: Each Tool'}</h2>

            <div className="cards-grid">
              <div className="project-card">
                <h3>Codex CLI (OpenAI)</h3>
                <div className="project-desc">
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{ko ? '강점' : 'Strengths'}</h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>{ko ? 'Rust 기반으로 빠르고 가벼움' : 'Fast and lightweight (Rust-based)'}</li>
                    <li>{ko ? '3가지 승인 모드로 세밀한 안전 제어' : 'Fine-grained safety with 3 approval modes'}</li>
                    <li>{ko ? 'ChatGPT 구독으로 별도 비용 없이 사용' : 'Use with existing ChatGPT subscription'}</li>
                    <li>{ko ? '오픈소스 — 커스터마이징 가능' : 'Open source — fully customizable'}</li>
                    <li>{ko ? '세션 중 모델 전환 가능' : 'Mid-session model switching'}</li>
                  </ul>
                  <h4 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{ko ? '약점' : 'Weaknesses'}</h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>{ko ? '터미널 전용 (IDE 통합 없음)' : 'Terminal only (no IDE integration)'}</li>
                    <li>{ko ? 'Claude Code보다 작은 컨텍스트 윈도우' : 'Smaller context window than Claude Code'}</li>
                    <li>{ko ? 'Windows에서 승인 모드 이슈' : 'Windows approval mode bugs'}</li>
                  </ul>
                  <h4 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{ko ? '최적 사용 상황' : 'Best For'}</h4>
                  <p>{ko ? '터미널 중심 개발자, DevOps/백엔드 엔지니어, CI/CD 자동화, 비용 효율적 AI 코딩' : 'Terminal-centric developers, DevOps/backend engineers, CI/CD automation, cost-effective AI coding'}</p>
                </div>
              </div>

              <div className="project-card">
                <h3>Claude Code (Anthropic)</h3>
                <div className="project-desc">
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{ko ? '강점' : 'Strengths'}</h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>{ko ? '1M 토큰 컨텍스트 — 전체 코드베이스 이해' : '1M token context — understand entire codebases'}</li>
                    <li>{ko ? 'SWE-bench 최고 성능 (80.8%)' : 'Highest SWE-bench performance (80.8%)'}</li>
                    <li>{ko ? '깊은 추론으로 복잡한 문제 해결' : 'Deep reasoning for complex problems'}</li>
                    <li>{ko ? '뛰어난 코드 품질과 아키텍처 인사이트' : 'Superior code quality and architectural insights'}</li>
                  </ul>
                  <h4 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{ko ? '약점' : 'Weaknesses'}</h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>{ko ? 'Codex보다 느린 응답 속도' : 'Slower response than Codex'}</li>
                    <li>{ko ? '별도 Claude 구독 + API 비용' : 'Separate Claude subscription + API costs'}</li>
                    <li>{ko ? '자동완성 기능 없음' : 'No autocomplete feature'}</li>
                  </ul>
                  <h4 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{ko ? '최적 사용 상황' : 'Best For'}</h4>
                  <p>{ko ? '복잡한 코드베이스 분석, 대규모 리팩토링, 아키텍처 설계, 깊은 추론이 필요한 작업' : 'Complex codebase analysis, large-scale refactoring, architecture design, deep reasoning tasks'}</p>
                </div>
              </div>

              <div className="project-card">
                <h3>Cursor (Anysphere)</h3>
                <div className="project-desc">
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{ko ? '강점' : 'Strengths'}</h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>{ko ? '최고의 자동완성 (Supermaven, 72% 수용률)' : 'Best autocomplete (Supermaven, 72% acceptance)'}</li>
                    <li>{ko ? '풀 IDE 경험 (VS Code 포크)' : 'Full IDE experience (VS Code fork)'}</li>
                    <li>{ko ? 'Composer로 멀티파일 편집' : 'Composer for multi-file editing'}</li>
                    <li>{ko ? '백그라운드 에이전트 지원' : 'Background agent support'}</li>
                  </ul>
                  <h4 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{ko ? '약점' : 'Weaknesses'}</h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>{ko ? '터미널 도구가 아님 (기존 에디터 교체 필요)' : 'Not a terminal tool (requires switching editors)'}</li>
                    <li>{ko ? '독점 IDE 사용 필수' : 'Proprietary IDE required'}</li>
                    <li>{ko ? '에이전트 기능은 터미널 도구보다 제한적' : 'Agent features more limited than terminal tools'}</li>
                  </ul>
                  <h4 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{ko ? '최적 사용 상황' : 'Best For'}</h4>
                  <p>{ko ? '프론트엔드 개발자, 일상적 코딩 작업, IDE 기반 워크플로우 선호자' : 'Frontend developers, daily coding tasks, IDE-based workflow preference'}</p>
                </div>
              </div>

              <div className="project-card">
                <h3>GitHub Copilot</h3>
                <div className="project-desc">
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{ko ? '강점' : 'Strengths'}</h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>{ko ? '가장 저렴 ($10/월)' : 'Most affordable ($10/mo)'}</li>
                    <li>{ko ? '모든 IDE에서 사용 (VS Code, JetBrains, Vim 등)' : 'Works in any IDE (VS Code, JetBrains, Vim, etc.)'}</li>
                    <li>{ko ? 'GitHub 이슈 → PR 자동 변환 (에이전트 모드)' : 'GitHub Issues → PR automation (agent mode)'}</li>
                    <li>{ko ? '기업 환경에서 가장 많이 도입됨' : 'Most adopted in enterprise environments'}</li>
                  </ul>
                  <h4 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{ko ? '약점' : 'Weaknesses'}</h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>{ko ? '자동완성 위주 (복잡한 에이전트 작업 제한)' : 'Autocomplete-focused (limited agent capabilities)'}</li>
                    <li>{ko ? 'Claude/Codex보다 낮은 코드 품질' : 'Lower code quality vs Claude/Codex'}</li>
                    <li>{ko ? '독립 에이전트로서 기능 부족' : 'Lacks standalone agent functionality'}</li>
                  </ul>
                  <h4 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{ko ? '최적 사용 상황' : 'Best For'}</h4>
                  <p>{ko ? '저비용 팀, GitHub 중심 워크플로우, 초보자 코딩 보조' : 'Budget teams, GitHub-centric workflows, beginner coding assistance'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="guide-section">
            <h2>{ko ? '추천 조합 (2026)' : 'Recommended Stack (2026)'}</h2>
            <div className="info-box success">
              <h4>{ko ? '프로급 개발자 추천 조합' : 'Pro Developer Recommended Stack'}</h4>
              <p>{ko
                ? '1. Cursor — 일상적 코딩 (자동완성 + IDE 경험)\n2. Claude Code — 복잡한 분석/리팩토링 (가장 깊은 추론)\n3. Codex CLI — 가벼운 자동화/스크립팅 (빠르고 저렴)\n4. GitHub Copilot — 이슈→PR 자동화 + 기업 협업'
                : '1. Cursor — Daily coding (autocomplete + IDE)\n2. Claude Code — Complex analysis/refactoring (deepest reasoning)\n3. Codex CLI — Lightweight automation/scripting (fast and affordable)\n4. GitHub Copilot — Issue→PR automation + enterprise collaboration'
              }</p>
            </div>

            <div className="info-box">
              <h4>{ko ? '비용 효율 우선 조합' : 'Budget-First Stack'}</h4>
              <p>{ko
                ? '1. Codex CLI ($20/월 ChatGPT+) — 메인 에이전트\n2. GitHub Copilot ($10/월) — 자동완성\n→ 총 $30/월로 90% 커버 가능'
                : '1. Codex CLI ($20/mo ChatGPT+) — Main agent\n2. GitHub Copilot ($10/mo) — Autocomplete\n→ $30/mo total covers 90% of needs'
              }</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comparison;
