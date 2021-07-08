import "./css/PortfolioSection.css"

export default function PortfolioSection() {

    return (
        <div className="homepage-container" id="portfolio-div">
            <div className="portfolio-header"><p>Portfolio</p></div>
            <div className="portfolio-item">
                <p className="project-name">Loteria App</p>
                <p className="project-description">An app created with React using Material UI components.</p>
                <a href="https://github.com/karla0/loteria_app">Click Here for GitHub repo.</a>
            </div>
            <div className="portfolio-item">
                <p className="project-name">karla-valencia.com</p>
                <p className="project-description">This website is a React App using some material UI components, hosted in AWS s3. Working on swithing to CloudFront for "https". </p>
                <a className="project-link" href="https://github.com/karla0/com.karla-valencia">Click Here for GitHub repo.</a>
            </div>
        </div>
    )
}