import './Tools.styles.scss';
import FigmaIcon from '../../assets/images/icons/figma-logo.webp';
import VscodeIcon from '../../assets/images/icons/vscode-logo.webp';
import GithubIcon from '../../assets/images/icons/github-logo.png';
import ViteIcon from '../../assets/images/icons/vite-logo.webp';
import FirebaseIcon from '../../assets/images/icons/firebase-logo.png';
import VercelIcon from '../../assets/images/icons/vercel-logo.webp';
import OpenCodeIcon from '../../assets/images/icons/opencode-logo.png';

const toolsData = [
  { id: 1, name: 'Figma', icon: FigmaIcon },
  { id: 2, name: 'VS Code', icon: VscodeIcon },
  { id: 3, name: 'GitHub', icon: GithubIcon },
  { id: 4, name: 'Vite', icon: ViteIcon },
  { id: 5, name: 'Firebase', icon: FirebaseIcon },
  { id: 6, name: 'Vercel', icon: VercelIcon },
  { id: 7, name: 'Opencode', icon: OpenCodeIcon }
]

const Tools = () => {
  return (
    <section className="tools" id="tools">
      <div className="tools__container">
        <div className="tools__grid">
          {toolsData.map((tool) => (
            <div key={tool.id} className="tools__card">
              <div className="tools__icon">
                <img src={tool.icon} alt={`${tool.name} logo`} />
              </div>
              <h3 className="tools__name">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
