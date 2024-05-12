import './index.css'
function DesignSection({children, title, asideContent, mobileMode, advice = null, titleDescription, className = "", adviceClassName = ""}) {
    return ( 
        <section className = {"design-section " + className}>
            <article className = "design-section-form-container">
                <header>
                    <h1 className = "design-section-title">
                        {title}
                        {titleDescription}
                    </h1>
                    {advice?<span className = {"design-section-advice " + adviceClassName}>{advice}</span>:null}
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