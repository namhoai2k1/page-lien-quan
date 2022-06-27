import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    padding-top: 2rem;
    .footer__bg {
        background-color: var(--first-color-second);
        padding: 2rem 0 3rem;
    }
    .footer__container {
        row-gap: 3.5rem;
    }

    .footer__title {
        font-size: var(--h1-font-size);
        margin-bottom: var(--mb-0-25);
    }
    .footer__subtitle {
        font-size: var(--small-font-size);
    }
    .footer__links {
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
    }

    .footer__link:hover {
        color: var(--first-color-lighter);
    }

    .footer__social {
        font-size: 1.75rem;
        margin-right: var(--mb-1-5);
    }

    .footer__social:hover {
        color: var(--first-color-lighter);
    }

    .footer__copy {
        font-size: var(--smaller-font-size);
        text-align: center;
        color: var(--text-color-light);
        margin-top: var(--mb-2);
    }

    .footer__title,
    .footer__subtitle,
    .footer__link,
    .footer__social {
        color: #fff;
    }

    @media screen and (min-width: 768px) {
        .footer__container {
            padding: 0 1rem;
        }
    }

    @media screen and (min-width: 568px) {
        .footer__container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

function Footer() {
    return (
        <FooterStyled class="footer">
            <div class="footer__bg">
                <div class="footer__container container grid">
                    <div>
                        <h1 class="footer__title">FL NAM</h1>
                        <span class="footer__subtitle">Frontend Developer</span>
                    </div>
                    <ul class="footer__links">
                        <li>
                            <a href="" class="footer__link">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="" class="footer__link">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="" class="footer__link">
                                Connectme
                            </a>
                        </li>
                    </ul>
                    <div class="footer__socials">
                        <a href="" class="footer__social" target="_blank">
                            <i class="uil uil-facebook-f"></i>
                        </a>
                        <a href="" class="footer__social" target="_blank">
                            <i class="uil uil-instagram"></i>
                        </a>
                        <a href="" class="footer__social" target="_blank">
                            <i class="uil uil-github-alt"></i>
                        </a>
                    </div>
                </div>
                <p class="footer__copy">
                    &#169; namhoai2k1@gmail.github.com &#169;
                </p>
            </div>
        </FooterStyled>
    );
}

export default Footer;
