
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
                    <Image src="/images/hero.png" alt="Miškininkystės ir miškotvarkos paslaugos Lietuvoje" fill style={{ objectFit: 'contain' }} />
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
                                <h3>Miškotvarkos projektai</h3>
                                <p>Parengiame miškotvarkos projektą – pagrindinį dokumentą, be kurio negalima vykdyti kirtimų, miško atkūrimo ir kitos ūkinės veiklos valdoje.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3>Miško įveisimo (želdinimo) projektai</h3>
                                <p>Parengiame želdinimo ir žėlimo projektą, reikalingą norint apsodinti žemę mišku ir gauti ES paramą miško įveisimui.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3>Leidimų kirsti mišką išėmimas</h3>
                                <p>Padedame gauti visus reikiamus leidimus miško kirtimui, tvarkydami dokumentaciją pagal LR miškų įstatymo reikalavimus.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3>Biržių atrėžimas pagrindiniams ir tarpiniams kirtimams pagal FSC reikalavimus</h3>
                                <p>Atribojame kertamą plotą, pažymime kirstinus medžius ir nustatome jų tūrį, laikydamiesi FSC sertifikavimo reikalavimų.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3>Stataus miško tūrio nustatymas vienetiniu medžių matavimo būdu</h3>
                                <p>Elektroninėmis žerglėmis ir aukštimačiu išmatuojame kiekvieną medį ir pateikiame tikslius duomenis apie stataus miško tūrį.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3>LR valstybės miškų kadastro tikslinimas</h3>
                                <p>Parengiame ir pateikiame dokumentus, reikalingus miško valdos duomenims patikslinti valstybės miškų kadastre.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3>Miško valdos ribų žymėjimas</h3>
                                <p>Pagal valdos planą natūroje pažymime miško ribas riboženkliais, taip padėdami išvengti ginčų su kaimynais.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3>Konsultacijos miškotvarkos ir miškininkystės klausimais</h3>
                                <p>Konsultuojame miško savininkus dėl valdos priežiūros, kirtimų planavimo ir kitų miškininkystės teisinių reikalavimų.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3>Pažymos dėl jaunuolynų ugdymo reikalingumo (NMA)</h3>
                                <p>Parengiame specialisto pažymą dėl jaunuolynų ugdymo reikalingumo – dokumentą, būtiną teikiant paraišką NMA paramai gauti.</p>
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
