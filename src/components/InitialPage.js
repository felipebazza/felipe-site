import React from 'react';

const InitialPage = () => (
    <main className="container">
        <div class="bg-image"></div>
        <section className="personal-info">
            <div className="header">
                <p>Felipe Alexandre Bazzanella</p>
            </div>
        </section>
        <section className="profissional-info">
            <div>
                <p>Magento 2 / Adobe Commerce - Certified Expert Front End Developer</p>
                <p>Magento 2 / Adobe Commerce - Certified Professional Developer</p>
                <p>BigCommerce Certified Developer</p>
            </div>
        </section>
        <section className="social-networks">
            <a className="linkedin" href="https://www.linkedin.com/in/felipe-bazzanella/" title="Linkedin" target="_blank">
                <i className="fab fa-linkedin"></i>
            </a>
            <a className="facebook" href="https://www.facebook.com/FelipeBazza" title="Facebook" target="_blank">
                <i className="fab fa-facebook"></i>
            </a>
            <a className="instagram" href="https://www.instagram.com/felipebazza/" title="Instagram" target="_blank">
                <i className="fab fa-instagram"></i>
            </a>
            <a className="github" href="https://github.com/felipebazza" title="Github" target="_blank">
                <i className="fab fa-github"></i>
            </a>
        </section>
        <section className="email">
            <p>E-mail: <a href="mailto:felipe.dracco@gmail.com">felipe.dracco@gmail.com</a></p>
        </section>
        <section className="portfolio inv">
            <p>Portfolio: <a href="#"></a></p>
        </section>
    </main>
);

export default InitialPage;
