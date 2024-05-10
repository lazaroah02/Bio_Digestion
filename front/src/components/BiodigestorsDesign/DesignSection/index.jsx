import './index.css'
function DesignSection({children, title, asideContent, mobileMode, showAdvice = true, titleDescription}) {
    return ( 
        <section className = "design-section">
            <article className = "design-section-form-container">
                <header>
                    <h1 className = "design-section-title">
                        {title}
                        {titleDescription}
                    </h1>
                    {showAdvice?<span className = "design-section-advice">Ingrese los siguientes datos</span>:null}
                </header>
                <section className = "design-section-content">
                    {children}
                </section>
                {mobileMode?asideContent:null}
            </article>
            {!mobileMode?
                <aside className = "design-section-aside-content-container" >
                    {asideContent}
                </aside>:null
            }
        </section>
     );
}

export default DesignSection;