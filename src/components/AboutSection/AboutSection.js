import React from 'react';

function AboutSection() {
    return (
        <div>
            <section class="home section" id="home">
                <div class="home__container container grid">
                    <div class="home__content grid">
                        <div class="home__social">
                            <a href="##" class="home__social-icon">
                                <i class="uil uil-facebook-f"></i>
                            </a>
                            <a href="##" class="home__social-icon">
                                <i class="uil uil-instagram"></i>
                            </a>
                            <a href="##" class="home__social-icon">
                                <i class="uil uil-github-alt"></i>
                            </a>
                        </div>
                        <div class="home__img">
                            <img
                                src="https://cafebiz.cafebizcdn.vn/2019/7/18/photo-1-15634145614651960740990.jpg"
                                alt=""
                            />
                        </div>
                        <div class="home__data">
                            <h1 class="home__title">
                                Are you ready To be a legend
                            </h1>
                            <h3 class="home__subtitle">Lien Quan Mobile</h3>
                            <p class="home__description">
                                Winning or losing at Mr. Hung
                            </p>
                            <a href="#contact" class="button button--flex">
                                Connect Me
                                <i class="uil uil-message button__icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="home__scroll">
                        <a
                            href="#about"
                            class="home__scroll-button button--flex"
                        >
                            <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span class="home__scroll-name">Scroll Down</span>
                            <i class="uil uil-arrow-down home__scroll-arrow"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutSection;
