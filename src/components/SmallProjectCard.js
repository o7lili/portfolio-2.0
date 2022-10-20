

export default function SmallProjectCard({ href, imgSrc, title, description }) {
    return (
        <div class="projects-flex">
            <a href={href} target="_blank">
                <img src={imgSrc} alt={title} width="100%" height="auto" />
                <div class="project-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </a>    
        </div>
    )
}