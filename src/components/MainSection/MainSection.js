import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import MainBackground from '../../assets/image/alter-house-yoruillustrationv9.jpg';

const MainSectionStyled = styled.section`
    min-height: 100vh;
    background-image: url(${MainBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .home--container {
        gap: 1rem;
    }

    .home__content {
        grid-template-columns: 0.5fr 3fr;
        // padding-top: 3.5rem;
        align-items: center;
        text-align: center;
    }

    .home__title {
        // font-family: var(--title-font);
        text-transform: uppercase;
        font-size: 2rem;
    }

    .home__social {
        display: grid;
        grid-template-columns: max-content;
        row-gap: 1rem;
    }

    .home__blob {
        width: 250px;
        fill: var(--frist-color);
    }

    .home__blob-img {
        width: 160px;
    }

    .home__data {
        grid-column: 1/3;
    }

    .home--title {
        font-size: var(--big-font-size);
    }

    .home__subtitle {
        font-size: var(--h3-font-size);
        color: var(--text-color);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-75);
    }

    .home__description {
        margin-bottom: var(--mb-2);
    }

    /* .home__scroll {
        display: none;
    } */

    .home__scroll-button {
        position: absolute;
        color: var(--frist-color);
        transition: transform 0.3s;
    }

    .home__scroll-button:hover {
        transform: translateY(0.25rem);
    }

    .home__scroll-mouse {
        font-size: 2rem;
    }

    .home__scroll-name {
        font-size: var(--small-font-size);
        color: var(--title-color);
        font-weight: var(--font-medium);
        margin-left: var(--mb-0-25);
    }
    .home__scroll-arrow {
        font-size: 1.25rem;
    }
    @media screen and (max-width: 374px) {
        .home__content {
            grid-template-columns: 0.25fr 3fr;
        }

        .home__blob {
            width: 180px;
        }
    }

    @media screen and (min-width: 568px) {
        .home__content {
            grid-template-columns: max-content 1fr 1fr;
        }
    
        .home__data {
            grid-column: initial;
        }
        
        .home__img {
            order: 1;
            justify-content: center;
        }    
    }
    @media screen and (min-width: 768px) {
        .home__container {
            row-gap: 5rem;
        }
    
        .home__content {
            padding-top: 5.5rem;
            column-gap: 2rem;
        }
    
        .home__blob {
            width: 270px;
        }
    
        .home__scroll {
            display: block;
        }
    
        .home__scroll-button {
            margin-left: 3rem;
        }
    }

    @media screen and (min-width: 1024) {
        .home__blob {
            width: 320px;
        }
    
        .home__social {
            transform: translateX(-6rem);
        }
    }
`;

function MainSection() {
    const dataIcon = [
        'uil uil-facebook-f',
        'uil uil-facebook-f',
        'uil uil-facebook-f',
    ];
    return (
        <MainSectionStyled>
            <div className="home section" id="home">
                <div className="home--container container grid">
                    <div className="home__content grid">
                        <div class="home__social">
                            {dataIcon.map((icon, index) => {
                                return (
                                    <a
                                        href="#3"
                                        class="home__social-icon"
                                        key={index}
                                    >
                                        <i class={icon}></i>
                                    </a>
                                );
                            })}
                        </div>
                        <div className="home__img">
                            <img
                                src="https://i.pinimg.com/564x/42/ed/05/42ed05497e229de94f53eb561c0c930a.jpg"
                                alt=""
                            />
                        </div>
                        <div className="home__data">
                            <h1 className="home__title">
                                Are you ready To be a legend
                            </h1>
                            <h3 className="home__subtitle">Lien Quan Mobile</h3>
                            <p className="home__description">
                                Winning or losing at Mr. Hung
                            </p>
                            <Button />
                        </div>
                    </div>
                    <div className="home__scroll">
                        <a
                            href="#about"
                            className="home__scroll-button button--flex"
                        >
                            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span className="home__scroll-name">
                                Scroll Down
                            </span>
                            <i className="uil uil-arrow-down home__scroll-arrow"></i>
                        </a>
                    </div>
                </div>
            </div>
        </MainSectionStyled>
    );
}

export default MainSection;
