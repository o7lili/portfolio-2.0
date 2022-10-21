

export default function SmallProjectCard({ href, imgSrc, title, description, github }) {
    return (
        <div class="projects-flex">
            <a href={href} target="_blank">
                <img src={imgSrc} alt={title} width="100%" height="auto" />
                <div class="project-text">
                    <a href={github} target="_blank"><h3>{title}</h3></a>
                    <p>{description}</p>
                </div>
            </a>    
        </div>
    )
}