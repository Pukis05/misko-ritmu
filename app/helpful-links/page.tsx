export default function HelpfulLinks() {
    const links = [
        {
            title: "Lithuanian State Forests",
            description: "Official Lithuanian State Forests service providing forestry information and resources",
            url: "https://www.lam.lt/"
        },
        {
            title: "European Forestry Commission",
            description: "Information about forestry practices and regulations across Europe",
            url: "https://www.fao.org/about/bodies/regional-offices/europe/en"
        },
        {
            title: "Forest Stewardship Council (FSC)",
            description: "International organization promoting responsible forest management",
            url: "https://fsc.org/"
        },
        {
            title: "PEFC - Forest Certification",
            description: "Program for the Endorsement of Forest Certification",
            url: "https://www.pefc.org/"
        },
        {
            title: "FAO - Forestry Department",
            description: "United Nations Food and Agriculture Organization - Forestry resources",
            url: "https://www.fao.org/forestry/en/"
        },
        {
            title: "International Tropical Timber Organization",
            description: "Resources on sustainable timber production and forestry",
            url: "https://www.itto.int/"
        }
    ];

    return (
        <main>
            <section className="links-section">
                <div className="container">
                    <h2>Miškų Ištekliai ir Informacija</h2>

                    <div className="links-grid">
                        {links.map((link, index) => (
                            <a 
                                key={index}
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="link-card"
                            >
                                <h3>{link.title}</h3>
                                <p>{link.description}</p>
                                <span className="arrow">→</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="alt">
                <div className="container">
                    <h2>Reikalinga Pagalba?</h2>
                    <p>Jei nerandate reikiamos informacijos, nesvarbu susisiekite su mumis tiesiogiai.</p>
                    <div className="button-group">
                        <a href="/#contact" className="btn-primary">Kontaktuoti mus</a>
                        <a href="/" className="btn-secondary">Grįžti į pagrindinį puslapį</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
