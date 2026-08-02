import Image from "next/image";

export default function HelpfulLinks() {
    const links = [
        {
            title: "Valstybinė miškų tarnyba",
            description: "",
            url: "https://amvmt.lrv.lt/lt/"
        },
        {
            title: "Lietuvos Respublikos miškų įstatymas",
            description: "",
            url: "https://e-seimasx.lrs.lt/portal/legalAct/lt/TAD/TAIS.6036/asr"
        },
        {
            title: "Miško kirtimų taisyklės",
            description: "",
            url: "https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.364764/asr"
        },
        {
            title: "Lietuvos Respublikos specialiųjų žemės naudojimo sąlygų įstatymas",
            description: "",
            url: "https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/46c841f290cf11e98a8298567570d639/asr"
        },
        {
            title: "Miško atkūrimo ir įveisimo nuostatai",
            description: "",
            url: "https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.318353/asr"
        },        {
            title: "Privačių miškų vidinės miškotvarkos projektų registras",
            description: "",
            url: "https://projektai.amvmt.lt/"
        },
        {
            title: "Parama jaunuolynų ugdymui (NMA)",
            description: "",
            url: "https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/f8afa4a22cb411eea0b6cad9848a9596/asr"
        },
        {
            title: "Parama miško įveisimui ir atkūrimui (NMA)",
            description: "",
            url: "https://www.e-tar.lt/portal/lt/legalAct/44fa7a26ffee11ef8619bb348379608d/asr"
        },
        {
            title: "Parama savaiminukų įtraukimui į miško žemės apskaita (APVA)",
            description: "",
            url: "https://apva.lrv.lt/lt/veiklos-sritys/projektu-finansavimas/miskai/medziu-savaiminuku-issaugojimas-ir-itraukimas-i-misko-zemes-apskaita/"
        }

    ];

    return (
        <main>
            <section className="helpful-links-hero">
                <div className="hero-logo">
                    <Image src="/images/hero.png" alt="Miško Ritmu" fill style={{objectFit: 'contain'}} />
                </div>
                <div className="hero-content">
                    <h1>Naudingos Nuorodos</h1>
                    <p>Svarbi informacija mūsų klientams apie miškų industriją ir valdymą</p>
                </div>
            </section>
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
                    <p>Jei nerandate reikiamos informacijos, susisiekite su mumis.</p>
                    <div className="button-group">
                        <a href="/#contact" className="btn-primary">Kontaktuoti mus</a>
                        <a href="/" className="btn-secondary">Grįžti į pagrindinį puslapį</a>
                    </div>
                </div>
            </section>

            <footer>

                <p>
                    © 2026 Miško Ritmu. Visos teisės saugomos.
                </p>

            </footer>
        </main>
    );
}
