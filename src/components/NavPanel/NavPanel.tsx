
import cl from './NavPanel.module.css'
import { Link } from 'react-router-dom'

export default function NavPanel () {
  return (
    <div className={cl.MainLayer}>
        <div className={cl.NavPanelContainer}>

        <div className={cl.NavPanelContainerPosition}>
          <Link to='/backet' className={cl.NavPanelContainerLink}>
            <span>Корз</span>
          </Link>
        </div>
        <div>
        </div>
        <div className={cl.NavPanelContainerPosition}>
            <span>UserName</span>
        </div>

        </div>
    </div>

  )
}
