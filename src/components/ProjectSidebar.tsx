import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement, ReactNode } from 'react';

interface ProjectSidebarProps {
  children: ReactNode;
}

const navItems = [
  { path: '/mini-projects', icon: '\u26A1', labelKo: '\uBBF8\uB2C8 \uD504\uB85C\uC81D\uD2B8', labelEn: 'Mini', dots: 1 },
  { path: '/beginner', icon: '\uD83C\uDF31', labelKo: '\uCD08\uAE09 \uD504\uB85C\uC81D\uD2B8', labelEn: 'Beginner', dots: 2 },
  { path: '/intermediate', icon: '\uD83D\uDD27', labelKo: '\uC911\uAE09 \uD504\uB85C\uC81D\uD2B8', labelEn: 'Intermediate', dots: 3 },
  { path: '/advanced', icon: '\uD83D\uDE80', labelKo: '\uACE0\uAE09 \uD504\uB85C\uC81D\uD2B8', labelEn: 'Advanced', dots: 4 },
];

const ProjectSidebar = ({ children }: ProjectSidebarProps): ReactElement => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const ko = language === 'ko';

  return (
    <div className="project-layout">
      <aside className="project-sidebar">
        <h4 className="project-sidebar-title">{ko ? '\uD504\uB85C\uC81D\uD2B8' : 'Projects'}</h4>
        <nav className="project-sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`project-sidebar-link${pathname === item.path ? ' active' : ''}`}
            >
              <span className="project-sidebar-icon">{item.icon}</span>
              <span className="project-sidebar-label">{ko ? item.labelKo : item.labelEn}</span>
              <span className="project-sidebar-dots">
                {Array.from({ length: 4 }, (_, i) => (
                  <span key={i} className={`dot${i < item.dots ? ' filled' : ''}`} />
                ))}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
      <div className="project-content">
        {children}
      </div>
    </div>
  );
};

export default ProjectSidebar;
