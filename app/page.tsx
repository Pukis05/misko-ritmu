
import Image from "next/image";

export default function Home() {
    return (
        <main>

            {/* ================= NAVBAR ================= */}

            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo-text">
                        MB Miško Ritmu
                    </div>

                    <div className="nav-links">
                        <a href="#home">Pradžia</a>
                        <a href="#services">Paslaugos</a>
                        <a href="#about">Apie mus</a>
                        <a href="/helpful-links">Naudingos Nuorodos</a>
                        <a href="#contact">Kontaktai</a>
                    </div>

                </div>
            </nav>

            {/* ================= HERO ================= */}

            <section id="home" className="hero">

                <div className="hero-logo">
                    <Image src="/images/google misko ritmu logo.svg" alt="Miško Ritmu" fill style={{objectFit: 'contain'}} />
                </div>

                <div className="hero-content">

                    <h1>Miškotvarkos ir miškininkystės paslaugos</h1>

                    <p>
                        Miškų vertinimas, projektavimas ir konsultacijos.
                    </p>

                    <a href="#contact" className="btn-primary">
                        Susisiekti
                    </a>

                </div>

            </section>

            {/* ================= SERVICES ================= */}

            <section id="services">

                <div className="container">

                    <h2>Paslaugos</h2>

                    <div className="grid">

                        <div className="card">
                            <div className="card-body">
                                <p>Miškotvarkos projektai</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <p>Miško įveisimo (želdinimo) projektai</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p>Leidimų kirsti mišką išėmimas</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <p>Biržių atrėžimas pagrindiniams ir tarpiniams kirtimams</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p>Stataus miško tūrio nustatymas vienetiniu medžių matavimo būdu</p>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p>LR valstybės miškų kadastro tikslinimas</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <p>Miško valdos ribų žymėjimas</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <p>Konsultacijos miškotvarkos ir miškininkystės klausimais</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p>Pažymos dėl jaunuolynų ugdymo reikalingumo (NMA)</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            {/* ================= ABOUT ================= */}

            <section id="about" className="alt">

                <div className="container">

                    <h2>Apie mus</h2>

                    <p>
                        Miškotvarkos projektų rengimo patirtis valstybiniams ir privatiems miškams nuo 2003 m.
                    </p>

                </div>

            </section>


            {/* ================= CONTACT ================= */}

            <section id="contact" className="alt">

                <div className="container">

                    <h2>Kontaktai</h2>

                    <div className="contact-info">
                        <div className="contact-card">
                            <h3>Susisiekite su mumis</h3>
                            <p><strong>Telefonas:</strong> <a href="tel:+37061347676">+370 613 47676</a></p>
                            <p><strong>El. paštas:</strong> <a href="mailto:miskoritmu@gmail.com">miskoritmu@gmail.com</a></p>
                        </div>
                    </div>

                </div>

            </section>

            {/* ================= FOOTER ================= */}

            <footer>

                <p>
                    © 2026 Miško Ritmu. Visos teisės saugomos.
                </p>

            </footer>

        </main>
    );
}
