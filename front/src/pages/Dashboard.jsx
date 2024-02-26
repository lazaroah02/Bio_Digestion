import {Sidebar} from 'primereact/sidebar'
import SideBar from '../components/SideBar'
import {useState} from 'react'
import './pagesStyles/dashboard.css'

function Dashboard({children}) {
    const [showSidebar, setShowSidebar] = useState(true)
    return ( 
        <section className = "dashboard">
            <aside>
                <SideBar/>
            </aside>
            <main>{children}</main>
        </section>
     );
}

export default Dashboard;