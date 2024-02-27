import {Sidebar} from 'primereact/sidebar'
import SideBar from '../components/SideBar'
import MenuIcon from '../icons/MenuIcon'
import {useState} from 'react'
import './pagesStyles/dashboard.css'

function Dashboard({children}) {
    const [showSidebar, setShowSidebar] = useState(false)
    return ( 
        <section className = "dashboard">
            <aside className = "sidebar-desktop-mode-container">
                <SideBar/>
            </aside>
            <Sidebar visible = {showSidebar} onHide={() => setShowSidebar(false)} className = "dashboard-sidebar">
                <SideBar/>
            </Sidebar>
            <main>
                <button type='button' className = "show-sidebar-button" onClick={() => setShowSidebar(true)}><MenuIcon/></button>
                {children}
            </main>
        </section>
     );
}

export default Dashboard;