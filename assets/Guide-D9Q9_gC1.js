import{u as r,r as t,j as e}from"./index-UuIfs1Ur.js";import{S as a}from"./SEOHead-1GrCQgho.js";const b=()=>{const{language:s}=r(),c=s==="ko",[d,l]=t.useState("install"),n=[{id:"install",label:c?"설치 & 설정":"Install & Setup"},{id:"commands",label:c?"명령어":"Commands"},{id:"approval",label:c?"승인 모드":"Approval Modes"},{id:"config",label:c?"설정 파일":"Configuration"},{id:"prompt",label:c?"프롬프트 엔지니어링":"Prompt Engineering"},{id:"mcp",label:c?"MCP & 플러그인":"MCP & Plugins"},{id:"skills",label:"Skills"}];return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:c?"사용법 가이드 | Codex CLI Master":"Usage Guide | Codex CLI Master"}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:c?"사용법 가이드":"Usage Guide"}),e.jsx("p",{children:c?"Codex CLI의 설치부터 고급 활용까지 상세하게 안내합니다":"A comprehensive guide from installation to advanced usage"})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("nav",{className:"tab-nav",children:n.map(i=>e.jsx("button",{className:`tab-btn ${d===i.id?"active":""}`,onClick:()=>l(i.id),children:i.label},i.id))}),d==="install"&&e.jsx(o,{ko:c}),d==="commands"&&e.jsx(h,{ko:c}),d==="approval"&&e.jsx(x,{ko:c}),d==="config"&&e.jsx(j,{ko:c}),d==="prompt"&&e.jsx(m,{ko:c}),d==="mcp"&&e.jsx(p,{ko:c}),d==="skills"&&e.jsx(u,{ko:c})]})})]})},o=({ko:s})=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?"1. 시스템 요구사항":"1. System Requirements"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js"})," 22+ (LTS ",s?"권장":"recommended",")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OS:"})," macOS, Linux, Windows (WSL ",s?"권장":"recommended",")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Git:"})," ",s?"프로젝트 버전 관리용":"For project version control"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ChatGPT Plus/Pro/Team:"})," ",s?"구독 필요 ($20/월~)":"Subscription required ($20/mo+)"]})]}),e.jsx("h2",{children:s?"2. 설치 방법":"2. Installation"}),e.jsx("h3",{children:s?"npm으로 글로벌 설치 (권장)":"Global install via npm (recommended)"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:"npm install -g @openai/codex"})}),e.jsx("h3",{children:"Homebrew (macOS)"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:"brew install openai-codex"})}),e.jsx("h3",{children:s?"설치 확인":"Verify installation"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:"codex --version"})}),e.jsx("h2",{children:s?"3. API 키 설정":"3. API Key Setup"}),e.jsx("p",{children:s?"OpenAI API 키를 환경변수로 설정해야 합니다.":"You need to set your OpenAI API key as an environment variable."}),e.jsx("h3",{children:s?"방법 1: 환경변수 (일회성)":"Method 1: Environment variable (temporary)"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# macOS / Linux
export OPENAI_API_KEY="sk-proj-xxxxxxxxxxxx"

# Windows PowerShell
$env:OPENAI_API_KEY = "sk-proj-xxxxxxxxxxxx"`})}),e.jsx("h3",{children:s?"방법 2: 셸 프로필에 영구 등록":"Method 2: Permanent in shell profile"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# ~/.bashrc 또는 ~/.zshrc에 추가
echo 'export OPENAI_API_KEY="sk-proj-xxxxxxxxxxxx"' >> ~/.zshrc
source ~/.zshrc`})}),e.jsx("h3",{children:s?"방법 3: ChatGPT 디바이스 코드 로그인":"Method 3: ChatGPT device code login"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`codex --login
# 브라우저에서 인증 코드 입력 → 자동 연결`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("h4",{children:s?"💡 팁: ChatGPT Plus 구독자":"💡 Tip: ChatGPT Plus subscribers"}),e.jsx("p",{children:s?"ChatGPT Plus ($20/월) 구독이 있으면 별도 API 크레딧 없이 사용할 수 있습니다. --login 으로 연결하세요.":"With a ChatGPT Plus ($20/mo) subscription, you can use Codex without separate API credits. Connect with --login."})]}),e.jsx("h2",{children:s?"4. 첫 실행 테스트":"4. First Run Test"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 프로젝트 디렉토리에서 실행
cd my-project

# 간단한 작업 요청
codex "이 프로젝트의 구조를 분석해줘"

# 특정 디렉토리 지정
codex --cd /path/to/project "README.md를 작성해줘"`})}),e.jsxs("div",{className:"info-box warning",children:[e.jsx("h4",{children:s?"⚠️ Windows 사용자 주의":"⚠️ Windows Users Note"}),e.jsx("p",{children:s?"Windows에서는 PowerShell 명령 래핑 이슈로 승인 모드가 무시될 수 있습니다. WSL 사용을 권장하며, 불가능한 경우 --full-auto 또는 --yolo 플래그를 사용하세요.":"On Windows, approval mode may be ignored due to PowerShell command wrapping. WSL is recommended. If not possible, use --full-auto or --yolo flag."})]})]}),h=({ko:s})=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?"기본 실행 문법":"Basic Syntax"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`codex [옵션] "프롬프트"

# 예시
codex "Python으로 피보나치 함수를 만들어줘"
codex --model gpt-5.5 "테스트 코드 작성해줘"
codex --cd ./backend "API 엔드포인트 추가해줘"`})}),e.jsx("h2",{children:s?"주요 CLI 플래그":"Key CLI Flags"}),e.jsxs("table",{className:"compare-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s?"플래그":"Flag"}),e.jsx("th",{children:s?"설명":"Description"}),e.jsx("th",{children:s?"예시":"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"--model"})}),e.jsx("td",{children:s?"사용할 AI 모델 지정":"Specify AI model"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"--model gpt-5.5"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"--approval-mode"})}),e.jsx("td",{children:s?"승인 정책 설정":"Set approval policy"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"--approval-mode auto-edit"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"--cd"})}),e.jsx("td",{children:s?"작업 디렉토리 지정":"Set working directory"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"--cd ./src"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"--full-auto"})}),e.jsx("td",{children:s?"Full-auto 승인 모드 단축키":"Shortcut for full-auto mode"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:'codex --full-auto "..."'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"--quiet"})}),e.jsx("td",{children:s?"출력 최소화":"Minimize output"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:'codex --quiet "..."'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"--login"})}),e.jsx("td",{children:s?"ChatGPT 계정 연결":"Connect ChatGPT account"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"codex --login"})})]})]})]}),e.jsx("h2",{children:s?"세션 내 명령어 (인터랙티브 모드)":"In-Session Commands (Interactive Mode)"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`codex                    # 프롬프트 없이 실행 → 인터랙티브 모드

# 세션 내 사용 가능한 명령어
/model gpt-5.4          # 모델 전환 (세션 중간에도 가능)
/model gpt-5.5          # 고성능 모델로 전환
/approval-mode suggest  # 승인 모드 변경
/status                 # 사용량/잔여 쿼타 확인
/plan                   # 계획 모드 진입 (Shift+Tab)
/skills                 # 사용 가능한 Skills 목록
/history                # 이전 세션 히스토리
/clear                  # 대화 기록 초기화
/help                   # 도움말`})}),e.jsx("h2",{children:s?"유용한 실행 패턴":"Useful Execution Patterns"}),e.jsx("h3",{children:s?"파이프로 입력 전달":"Pipe input"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 파일 내용을 컨텍스트로 전달
cat error.log | codex "이 에러를 분석해줘"

# Git diff를 전달하여 리뷰 요청
git diff | codex "이 변경사항을 코드 리뷰해줘"`})}),e.jsx("h3",{children:s?"이미지 입력":"Image input"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 인터랙티브 모드에서 Ctrl+V로 스크린샷 붙여넣기
codex
> 이 UI 버그를 수정해줘 [Ctrl+V로 이미지 붙여넣기]

# 지원 포맷: PNG, JPEG, GIF, WebP`})}),e.jsx("h3",{children:s?"비대화형 실행 (CI/CD용)":"Non-interactive (CI/CD)"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 한 번 실행 후 종료
codex --full-auto --quiet "모든 TypeScript 타입 에러를 수정해줘"

# JSON 출력
codex --output-format json "프로젝트 분석 결과를 JSON으로 줘"`})})]}),x=({ko:s})=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?"승인 모드 개요":"Approval Modes Overview"}),e.jsx("p",{children:s?"Codex CLI는 3가지 승인 모드를 제공하여, AI가 실행하는 작업에 대한 사용자의 통제 수준을 조절합니다.":"Codex CLI provides 3 approval modes to control how much autonomy the AI has over operations."}),e.jsxs("div",{className:"cards-grid",style:{marginTop:"1.5rem"},children:[e.jsxs("div",{className:"project-card",children:[e.jsxs("h3",{children:["🔍 Suggest (",s?"제안":"Suggest",")"]}),e.jsx("span",{className:"card-badge badge-beginner",children:s?"기본값":"Default"}),e.jsx("div",{className:"project-desc",style:{marginTop:"1rem"},children:s?"모든 파일 변경과 셸 명령 실행 전에 사용자 승인을 요청합니다. 가장 안전한 모드입니다.":"Requires user approval before every file change and shell command. The safest mode."}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`codex --approval-mode suggest "버그를 수정해줘"
# 또는
codex "버그를 수정해줘"  # suggest가 기본값`})}),e.jsxs("div",{className:"info-box success",children:[e.jsx("h4",{children:s?"적합한 상황":"Best for"}),e.jsx("p",{children:s?`• 처음 사용할 때
• 새로운 코드베이스 탐색 시
• 배포/인프라 작업
• 학습 목적 (AI가 뭘 하는지 관찰)`:`• First-time use
• Exploring unfamiliar codebases
• Deployment/infrastructure tasks
• Learning (observe what AI does)`})]})]}),e.jsxs("div",{className:"project-card",children:[e.jsxs("h3",{children:["✏️ Auto-Edit (",s?"자동 편집":"Auto Edit",")"]}),e.jsx("span",{className:"card-badge badge-intermediate",children:s?"중간":"Moderate"}),e.jsx("div",{className:"project-desc",style:{marginTop:"1rem"},children:s?"파일 읽기/쓰기는 자동 승인하고, 셸 명령만 사용자 확인을 요청합니다. 개발 작업에 가장 많이 사용됩니다.":"Auto-approves file reads/writes but asks for approval on shell commands. Most popular for development."}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`codex --approval-mode auto-edit "새 컴포넌트를 추가해줘"
# 코드 파일 변경 → 자동 실행
# npm install, git push 등 → 사용자 승인 필요`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("h4",{children:s?"적합한 상황":"Best for"}),e.jsx("p",{children:s?`• 일상적인 기능 개발
• 테스트 기반 버그 수정
• 리팩토링 작업
• 익숙한 코드베이스`:`• Day-to-day feature development
• Test-driven bug fixing
• Refactoring
• Familiar codebases`})]})]}),e.jsxs("div",{className:"project-card",children:[e.jsxs("h3",{children:["🤖 Full-Auto (",s?"완전 자동":"Full Auto",")"]}),e.jsx("span",{className:"card-badge badge-advanced",children:s?"주의":"Caution"}),e.jsx("div",{className:"project-desc",style:{marginTop:"1rem"},children:s?"모든 작업(파일 변경 + 셸 명령)을 사용자 확인 없이 자동 실행합니다. 네트워크 접근은 샌드박스로 제한됩니다.":"Executes all operations (file changes + shell commands) without approval. Network access is sandboxed."}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`codex --full-auto "테스트 작성하고 실행해줘"
# 또는
codex --approval-mode full-auto "모든 lint 에러 수정"
# 모든 작업이 자동으로 실행됨`})}),e.jsxs("div",{className:"info-box danger",children:[e.jsx("h4",{children:s?"주의사항":"Caution"}),e.jsx("p",{children:s?`• 반드시 Git으로 버전 관리된 프로젝트에서만 사용
• 컨테이너/VM 환경에서 사용 권장
• 프로덕션 코드에 직접 사용 금지
• Windows에서는 --yolo 필요할 수 있음`:`• Only use with Git-managed projects
• Container/VM environment recommended
• Never use directly on production code
• May need --yolo on Windows`})]})]})]}),e.jsx("h2",{style:{marginTop:"2rem"},children:s?"승인 모드 비교표":"Approval Mode Comparison"}),e.jsxs("table",{className:"compare-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s?"동작":"Action"}),e.jsx("th",{children:"Suggest"}),e.jsx("th",{children:"Auto-Edit"}),e.jsx("th",{children:"Full-Auto"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:s?"파일 읽기":"File Read"}),e.jsx("td",{children:s?"자동 ✅":"Auto ✅"}),e.jsx("td",{children:s?"자동 ✅":"Auto ✅"}),e.jsx("td",{children:s?"자동 ✅":"Auto ✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:s?"파일 쓰기/수정":"File Write/Edit"}),e.jsx("td",{children:s?"승인 필요 🔒":"Approval 🔒"}),e.jsx("td",{children:s?"자동 ✅":"Auto ✅"}),e.jsx("td",{children:s?"자동 ✅":"Auto ✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:s?"안전한 셸 명령":"Safe Shell (ls, git status)"}),e.jsx("td",{children:s?"자동 ✅":"Auto ✅"}),e.jsx("td",{children:s?"자동 ✅":"Auto ✅"}),e.jsx("td",{children:s?"자동 ✅":"Auto ✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:s?"일반 셸 명령":"General Shell Commands"}),e.jsx("td",{children:s?"승인 필요 🔒":"Approval 🔒"}),e.jsx("td",{children:s?"승인 필요 🔒":"Approval 🔒"}),e.jsx("td",{children:s?"자동 ✅":"Auto ✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:s?"네트워크 접근":"Network Access"}),e.jsx("td",{children:s?"승인 필요 🔒":"Approval 🔒"}),e.jsx("td",{children:s?"승인 필요 🔒":"Approval 🔒"}),e.jsx("td",{children:s?"샌드박스 🛡️":"Sandboxed 🛡️"})]})]})]})]}),j=({ko:s})=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?"설정 파일 위치":"Configuration File Locations"}),e.jsxs("table",{className:"compare-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s?"범위":"Scope"}),e.jsx("th",{children:s?"경로":"Path"}),e.jsx("th",{children:s?"설명":"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:s?"프로젝트":"Project"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:".codex/config.toml"})}),e.jsx("td",{children:s?"해당 프로젝트에만 적용":"Applies to this project only"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:s?"사용자":"User"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"~/.codex/config.toml"})}),e.jsx("td",{children:s?"모든 프로젝트에 적용":"Applies to all projects"})]})]})]}),e.jsx("h2",{children:s?"config.toml 전체 예시":"Full config.toml Example"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# ── 기본 설정 ──
model = "gpt-5.5"                       # 기본 모델
approval_policy = "auto-edit"           # 기본 승인 모드

# ── 추론 설정 ──
reasoning_effort = "medium"             # low / medium / high
plan_mode_reasoning_effort = "high"     # Plan 모드 시 추론 강도

# ── 프롬프트 ──
system_prompt = """
You are a senior developer.
Always write TypeScript.
Follow the project's existing patterns.
"""

# ── 샌드박스 설정 ──
[sandbox]
mode = "default"                        # default / read_only / restricted
deny_read = ["*.env", "secrets/*"]      # 읽기 금지 패턴
deny_write = ["/etc/*"]                 # 쓰기 금지 패턴
network = false                         # 네트워크 차단

# ── MCP 서버 ──
[[mcp_servers.stdio]]
name = "openai-docs"
command = "npx"
args = ["@openai/codex-mcp-docs"]

[[mcp_servers.http]]
name = "my-tools"
url = "https://my-mcp.example.com"`})}),e.jsx("h2",{children:s?"프로젝트 컨텍스트 파일 (AGENTS.md)":"Project Context File (AGENTS.md)"}),e.jsx("p",{children:s?"프로젝트 루트에 AGENTS.md 파일을 만들면 Codex가 자동으로 읽어 프로젝트 규칙을 이해합니다.":"Create an AGENTS.md file in your project root — Codex automatically reads it to understand project rules."}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# AGENTS.md 예시

## 프로젝트 정보
- React 19 + TypeScript + Vite
- 상태 관리: Context API
- 스타일: CSS Modules

## 코딩 규칙
- 함수 컴포넌트 + Hook 패턴 사용
- 타입은 별도 types/ 디렉토리에 정의
- 테스트 파일: __tests__/ 디렉토리
- import 순서: React → 외부 라이브러리 → 내부 모듈

## 금지 사항
- any 타입 사용 금지
- console.log 프로덕션 코드에 남기지 않기
- 인라인 스타일 사용 금지`})}),e.jsx("h2",{children:s?"모델 선택 가이드":"Model Selection Guide"}),e.jsxs("table",{className:"compare-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s?"모델":"Model"}),e.jsx("th",{children:s?"특징":"Characteristics"}),e.jsx("th",{children:s?"적합한 작업":"Best For"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"gpt-5.5"})}),e.jsx("td",{children:s?"최고 성능, 깊은 추론":"Highest performance, deep reasoning"}),e.jsx("td",{children:s?"복잡한 아키텍처 결정, 대규모 리팩토링":"Complex architecture, large refactoring"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"gpt-5.4"})}),e.jsx("td",{children:s?"빠른 응답, 균형 잡힌 성능":"Fast response, balanced performance"}),e.jsx("td",{children:s?"일상적인 코딩, 버그 수정":"Day-to-day coding, bug fixing"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"gpt-5.3-codex-spark"})}),e.jsx("td",{children:s?"가장 빠름, 경량 작업용":"Fastest, for lightweight tasks"}),e.jsx("td",{children:s?"간단한 질문, 코드 설명":"Simple questions, code explanation"})]})]})]}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 세션 중 모델 전환
/model gpt-5.5     # 복잡한 작업 시작 시
/model gpt-5.4     # 일반 작업으로 전환
/model gpt-5.3-codex-spark  # 간단한 질문용`})})]}),m=({ko:s})=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?"프롬프트 작성 원칙":"Prompt Writing Principles"}),e.jsx("h3",{children:s?"원칙 1: 명확한 컨텍스트 제공":"Principle 1: Provide Clear Context"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[e.jsxs("div",{className:"info-box danger",children:[e.jsx("h4",{children:s?"❌ 나쁜 예시":"❌ Bad Example"}),e.jsx("p",{children:e.jsx("code",{children:'codex "로그인 버그 수정해줘"'})})]}),e.jsxs("div",{className:"info-box success",children:[e.jsx("h4",{children:s?"✅ 좋은 예시":"✅ Good Example"}),e.jsx("p",{children:e.jsx("code",{children:s?'codex "비밀번호 32자 이상 입력 시 LoginForm.tsx에서 크래시 발생. src/components/LoginForm.tsx의 validation 로직을 확인하고 수정해줘. 수정 후 pytest tests/auth/ 실행해줘"':'codex "LoginForm.tsx crashes on 32+ char passwords. Check validation in src/components/LoginForm.tsx. Run pytest tests/auth/ after fix"'})})]})]}),e.jsx("h3",{children:s?"원칙 2: 검증 단계 포함":"Principle 2: Include Verification"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 테스트 실행을 포함한 프롬프트
codex "DB 연결 타임아웃 이슈를 src/db/connection.py에서 수정해줘.
수정 후:
1. pytest tests/db/ 실행하여 모든 테스트 통과 확인
2. npm run build로 빌드 검증
3. 변경 사항 요약해줘"`})}),e.jsx("h3",{children:s?"원칙 3: 파일 경로와 패턴 참조":"Principle 3: Reference File Paths"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 구체적인 파일 경로 지정
codex "src/services/payment/ 디렉토리의 모든 API 호출에
에러 핸들링을 추가해줘. src/services/email/의 패턴을 참고해."

# 여러 파일 간 연관 작업
codex "src/types/user.ts에 새 필드를 추가하고,
관련된 모든 컴포넌트를 업데이트해줘"`})}),e.jsx("h3",{children:s?"원칙 4: 단계별 분할":"Principle 4: Break Into Steps"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 복잡한 작업은 명시적으로 단계를 나누기
codex "다음 순서로 진행해줘:
1. 먼저 현재 프로젝트 구조를 분석
2. src/api/ 에 새 엔드포인트 추가
3. 해당 엔드포인트의 타입 정의 생성
4. 단위 테스트 작성
5. 통합 테스트 실행
6. 결과 요약"`})}),e.jsx("h3",{children:s?"원칙 5: 코드베이스 규칙 명시":"Principle 5: State Codebase Rules"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# config.toml의 system_prompt 활용
system_prompt = """
이 프로젝트에서:
- TypeScript strict 모드 사용
- any 타입 금지
- 함수형 컴포넌트만 사용
- 에러는 커스텀 에러 클래스로 처리
- console.log 대신 logger 모듈 사용
"""`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("h4",{children:s?"💡 프롬프트 체크리스트":"💡 Prompt Checklist"}),e.jsx("p",{children:s?`✓ 무엇을 해야 하는지 명확히 설명했는가?
✓ 관련 파일 경로를 포함했는가?
✓ 검증 방법(테스트, 빌드)을 지정했는가?
✓ 성공 기준을 명시했는가?
✓ 참고할 기존 패턴을 알려줬는가?`:`✓ Is the task clearly described?
✓ Are relevant file paths included?
✓ Is verification (tests, build) specified?
✓ Are success criteria defined?
✓ Are existing patterns referenced?`})]})]}),p=({ko:s})=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?"Model Context Protocol (MCP)란?":"What is Model Context Protocol (MCP)?"}),e.jsx("p",{children:s?"MCP는 Codex CLI를 외부 도구와 연결하는 표준 프로토콜입니다. 파일/셸 이외의 기능(브라우저, 디자인 도구, 프로젝트 관리 등)을 추가할 수 있습니다.":"MCP is a standard protocol connecting Codex CLI to external tools. It adds capabilities beyond file/shell operations — browsers, design tools, project management, and more."}),e.jsx("h3",{children:s?"MCP 서버 유형":"MCP Server Types"}),e.jsxs("table",{className:"compare-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s?"유형":"Type"}),e.jsx("th",{children:s?"설명":"Description"}),e.jsx("th",{children:s?"예시":"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"STDIO"})}),e.jsx("td",{children:s?"로컬 프로세스로 실행":"Runs as local process"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"npx my-mcp-server"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"HTTP"})}),e.jsx("td",{children:s?"URL로 접근하는 원격 서버":"Remote server via URL"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"https://mcp.example.com"})})]})]})]}),e.jsx("h3",{children:s?"MCP 설정 예시 (config.toml)":"MCP Configuration (config.toml)"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# STDIO 서버 — 로컬에서 실행
[[mcp_servers.stdio]]
name = "playwright"
command = "npx"
args = ["@playwright/mcp-server"]

# HTTP 서버 — 원격 연결
[[mcp_servers.http]]
name = "documentation"
url = "https://docs.example.com/mcp"

# Figma MCP — 디자인 파일 접근
[[mcp_servers.stdio]]
name = "figma"
command = "npx"
args = ["@figma/mcp-server"]`})}),e.jsx("h3",{children:s?"주요 MCP 서버 (내장/서드파티)":"Key MCP Servers (Built-in & Third-party)"}),e.jsx("div",{className:"cards-grid",children:[{name:"Playwright",desc:s?"브라우저 자동화 & UI 테스트":"Browser automation & UI testing"},{name:"Figma",desc:s?"디자인 파일 접근 & 해석":"Access & interpret design files"},{name:"Notion",desc:s?"문서 조회 & 업데이트":"Query & update documents"},{name:"Slack",desc:s?"메시지 전송 & 채널 관리":"Send messages & manage channels"},{name:"Linear",desc:s?"이슈 추적 & 프로젝트 관리":"Issue tracking & project management"},{name:"Sentry",desc:s?"에러 모니터링 & 분석":"Error monitoring & analysis"}].map(({name:c,desc:d})=>e.jsxs("div",{className:"feature-card",style:{cursor:"default",padding:"1.25rem"},children:[e.jsx("h3",{style:{fontSize:"1rem"},children:c}),e.jsx("p",{style:{fontSize:"0.9rem"},children:d})]},c))}),e.jsx("h2",{style:{marginTop:"2rem"},children:s?"플러그인 관리":"Plugin Management"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 플러그인 설치
codex plugin add https://github.com/yourorg/plugins

# 설치된 플러그인 목록
codex plugin list

# 플러그인 업데이트
codex plugin upgrade

# 플러그인 제거
codex plugin remove plugin-name`})})]}),u=({ko:s})=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?"Skills란?":"What Are Skills?"}),e.jsx("p",{children:s?"Skills는 반복되는 워크플로우를 SKILL.md 파일로 패키징하여 재사용하는 기능입니다. 팀 전체에 일관된 작업 방식을 공유할 수 있습니다.":"Skills package reusable workflows into SKILL.md files. Share consistent work patterns across your entire team."}),e.jsx("h3",{children:s?"Skill 저장 위치":"Skill Storage Locations"}),e.jsxs("table",{className:"compare-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s?"범위":"Scope"}),e.jsx("th",{children:s?"경로":"Path"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:s?"프로젝트":"Project"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:".codex/skills/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:s?"사용자":"User"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"~/.codex/skills/"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:s?"시스템/팀":"System/Team"}),e.jsx("td",{children:e.jsx("code",{className:"code-inline",children:"/etc/codex/skills/"})})]})]})]}),e.jsx("h3",{children:s?"SKILL.md 작성 예시":"SKILL.md Example"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`---
name: "Code Review with Tests"
description: "코드 변경사항을 리뷰하고 테스트 커버리지 확인"
trigger_examples:
  - "코드 리뷰"
  - "code review"
  - "변경사항 검토"
---

# 코드 리뷰 스킬

코드 리뷰 시 다음을 수행하세요:

1. Lint 에러 확인: \`npm run lint\`
2. 테스트 실행: \`npm test\`
3. 보안 이슈 검토 (인증/API 코드 집중)
4. TypeScript 타입 검증: \`tsc --noEmit\`
5. 프로덕션 코드에 console.log 없는지 확인
6. try-catch 블록의 적절한 에러 처리 검증

결과를 다음 형식으로 보고:
- 발견된 취약점 (심각도: critical/high/medium/low)
- 코드 위치
- 수정 권고사항`})}),e.jsx("h3",{children:s?"Skill 호출 방법":"How to Invoke Skills"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`# 명시적 호출
codex "code-review 스킬을 실행해줘"

# 트리거 키워드로 자동 호출
codex "코드 리뷰해줘"    # trigger_examples에 매칭

# 세션 내에서 호출
/skills                 # 사용 가능한 스킬 목록
$ code-review           # $ 접두어로 직접 호출`})}),e.jsx("h3",{children:s?"실용적인 Skill 아이디어":"Practical Skill Ideas"}),e.jsx("div",{className:"cards-grid",children:[{name:s?"TDD 워크플로우":"TDD Workflow",desc:s?"실패 테스트 작성 → 구현 → 통과 확인 → 리팩토링":"Write failing test → Implement → Verify → Refactor"},{name:s?"보안 감사":"Security Audit",desc:s?"OWASP Top 10 기준 코드 검사 + npm audit":"OWASP Top 10 code review + npm audit"},{name:s?"PR 준비":"PR Preparation",desc:s?"변경사항 정리 + 테스트 + 커밋 메시지 작성":"Organize changes + test + write commit message"},{name:s?"API 문서화":"API Documentation",desc:s?"엔드포인트별 자동 문서 생성 (Markdown)":"Auto-generate docs per endpoint (Markdown)"}].map(({name:c,desc:d})=>e.jsxs("div",{className:"feature-card",style:{cursor:"default",padding:"1.25rem"},children:[e.jsx("h3",{style:{fontSize:"1rem"},children:c}),e.jsx("p",{style:{fontSize:"0.9rem"},children:d})]},c))})]});export{b as default};
