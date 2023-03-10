import './Footer.css'
const Footer = () => {

    return (
    <div className='footer-container'>
        <div className='footer-styles'>
        <div className="footer-content">
            <div className="footer-links">
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/madhur-luthra-08a53a126/">
                    <img 
                        src='/assets/linkedin.png'
                        alt='linkedin'
                    />
                </a>

                <a rel="noreferrer" target="_blank" href="https://github.com/mluthra01">
                    <img 
                        src='/assets/github-logo.png'
                        alt='github'
                        />
                </a>
                <a rel="noreferrer" target="_blank" href="https://github.com/mluthra01/Horizon" className='repo'>Project repo</a>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Footer