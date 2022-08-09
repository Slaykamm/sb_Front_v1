
import cl from './NavPanel.module.css'

export default function NavPanel() {
  return (
    <div className={cl.MainLayer}>
        <div className={cl.NavPanelContainer}>

        <div className={cl.NavPanelContainerPosition}>
            <span>Корз</span>
        </div>
        <div>
        </div>
        <div className={cl.NavPanelContainerPosition}>
            <span>Пользователь</span>
        </div>

        </div>
    </div>


  )
}
