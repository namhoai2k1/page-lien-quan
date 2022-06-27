import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@500&display=swap');

    :root {
        --header-height: 3rem;
        /* ================colors================= */
        --hue-color: 340;
        /* HSL color mode */
        --frist-color: hsl(var(--hue-color), 69%, 61%);
        --first-color-second: hsl(var(--hue-color), 69%, 61%);
        --first-color-alt: hsl(var(--hue-color), 57%, 53%);
        --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
        --title-color: hsl(var(--hue-color), 8%, 45%);
        --text-color: hsl(var(--hue-color), 8%, 65%);
        --text-color-light: hsl(var(--hue-color), 8%, 45%);
        --input-color: hsl(var(--hue-color), 70%, 96%);
        --body-color: hsl(var(--hue-color), 60%, 99%);
        --container-color: #fff;
        --scroll-bar-color: hsl(var(--hue-color), 12%, 90%);
        --scroll-thumb-color: hsl(var(--hue-color), 12%, 80%);
        /* font and typography */
        --body-font: 'Poppins', sans-serif;
        --title-font: 'UnifrakturCook', cursive;
        /* .5rem = 8px, 1rem =  16px,...*/
        --big-font-size: 2rem;
        --h1-font-size: 1.5rem;
        --h2-font-size: 1.25rem;
        --h3-font-size: 1.125rem;
        --normal-font-size: .938rem;
        --small-font-size: .813rem;
        --smaller-font-size: .75rem;
        /* font weight */
        --font-medium: 500;
        --font-semi-boll: 600;
        /* margenes bottom */
        --mb-0-25: .25rem;
        --mb-0-5: .5rem;
        --mb-0-75: .75rem;
        --mb-1: 1rem;
        --mb-1-5: 1.5rem;
        --mb-2: 2rem;
        --mb-2-5: 2.5rem;
        --mb-3: 3rem;
        /* z index */
        --z-tooltip: 10;
        --z-fixed: 100;
        --z-modal: 1000;
    }
    @media screen and (min-width: 968px) {
        :root {
            --big-font-size: 3rem;
            --h1-font-size: 2.25rem;
            --h2-font-size: 1.5rem;
            --h3-font-size: 1.25rem;
            --normal-font-size: 1rem;
            --small-font-size: .813rem;
            --smaller-font-size: .813rem;
        }
    }
    /* button dark/ light */
    .nav__btns {
        display: flex;
        align-items: center;
    }
    .change-theme {
        font-size: 1.25rem;
        color: var(--title-color);
        margin-right: var(--mb-1);
        cursor: pointer;
    }
    .change-theme:hover {
        color: var(--frist-color);
    }
    /* variables dark theme */
    body.dark-theme {
        --first-color-second: hsl(var(--hue-color), 30%, 8%);
        --title-color: hsl(var(--hue-color), 8%, 95%);
        --text-color: hsl(var(--hue-color), 8%, 75%);
        --input-color: hsl(var(--hue-color), 29%, 16%);
        --body-color: hsl(var(--hue-color), 28%, 12%);
        --container-color: hsl(var(--hue-color), 29%, 16%);
        --scroll-bar-color: hsl(var(--hue-color), 12%, 48%);
        --scroll-thumb-color: hsl(var(--hue-color), 12%, 36%);
    }
    /* base */
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0 0 var(--header-height) 0;
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        background-color: var(--body-color);
        color: var(--text-color);
    }
    h1,h2,h3,h4,h5,h6 {
        color: var(--title-color);
        font-weight: var(--font-semi-boll);
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: var(--text-color)
    }
    img {
        max-width: 100%;
        height: auto;
    }
    /* reusable css classes */
    .section {
        padding: 2rem 0 4rem;
    }
    .section__title {
        font-size: var(--h1-font-size);
    }
    .section__subtitle {
        display: block;
        font-size: var(--small-font-size);
        margin-bottom: var(--mb-3);
    }
    .section__subtitle,
    .section__title {
        text-align: center;
    }
    /* layout */
    .container {
        max-width: 768px;
        margin-left: var(--mb-1-5);
        margin-right: var(--mb-1-5);
    }
    .grid {
        display: grid;
        gap: 1.5rem;
    }

    /* for small devices */
@media screen and (max-width: 374px) {
    .container {
        margin-left: var(--mb-1);
        margin-right: var(--mb-1);
    }

    .nav__menu {
        padding: 2rem 0.25rem 0.4rem;
    }
    
    .nav__list {
        column-gap: 0;
    }

    .home__content {
        grid-template-columns: .25fr 3fr;
    }

    .home__blob {
        width: 180px;
    }

    .skills__title {
        font-size: var(--normal-font-size);
    }

    .qualification__data {
        gap: .5rem;
    }

    .services__container {
        /* gap: 0.5; */
        /* grid-template-columns: repeat(2, 1fr); */
        grid-template-columns: max-content;
        justify-content: center;
    }

    .services__content {
        padding-right: 3.5rem;
    }

    .services__modal {
        padding: 0 .5rem;
    }

    .project__img {
        width: 200px;
    }

    .testimonial__data,
    .testimonial__header {
        flex-direction: column;
        align-items: center;
    }

    .testimonial__img {
        margin-right: 0;
        margin-bottom: var(--mb-0-25);
    }

    .testimonial__data,
    .testimonial__description {
        text-align: center;
    }
}
/* for medium devices*/
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

    .about__container,
    .skills__container,
    .project__container,
    .portfolio__content,
    .contanct__container,
    .footer__container {
        grid-template-columns: repeat(2, 1fr);
    }

    .qualification__sections {
        display: grid;
        grid-template-columns: .6fr;
        justify-content: center;
    }

}

@media screen and (min-width: 768px) {
    .container {
        margin-left: auto;
        margin-right: auto;
    }

    body {
        margin: 0;
    }

    section {
        padding: 6rem 0 2rem;
    }

    .section__subtitle {
        margin-bottom: 4rem;
    }

    .header {
        top: 0;
        bottom: initial;
    }

    .header,
    .main,
    .footer__container {
        padding: 0 1rem;
    }

    .nav {
        height: calc(var(--header-height) + 1.5rem);
        column-gap: 1rem;
    }

    .nav__icon,
    .nav__close,
    .nav__toggle {
        display: none;
    }

    .nav__list {
        display: flex;
        column-gap: 2rem;
    }

    .nav__menu {
        margin-left: auto;
    }

    .change-theme {
        margin: 0;
    }

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

    .about__container {
        column-gap: 5rem;
    }

    .about__img {
        width: 350px;
    }

    .about__description {
        text-align: center;
    }

    .about__info {
        justify-content: space-between;
    }

    .about__buttons {
        justify-self: initial;
    }

    .qualification__tabs {
        justify-content: center;
    }

    .qualification__button {
        margin: 0 var(--mb-1);
    }

    .qualification__sections {
        grid-template-columns: .5fr;
    }

    .services__container {
        grid-template-columns: repeat(3, 218px);
        justify-content: center;
    }

    .services__icon {
        font-size: 2rem;
    }

    .services__content {
        padding: 6rem 0 2rem 2.5rem;
    }

    .services__modal-content {
        width: 450px;
    }

    .portfolio__img {
        width: 320px;
    }

    .portfolio__content {
        align-items: center;
    }

    .project {
        text-align: initial;
    }

    .project__bg {
        background: none;
    }

    .project__container {
        background-color: var(--first-color-second);
        border-radius: 1rem;
        padding: 3rem 2.5rem 0;
        /* grid-template-columns: 1fr max-content; */
        column-gap: 3rem;
    }

    .project__data {
        padding-top: 0.8rem;;
    }

    .footer__container {
        grid-template-columns: repeat(3, 1fr);
    }

    .footer__bg {
        padding: 3rem 0 3.5rem;
    }

    .footer__links {
        flex-direction: row;
        column-gap: 2rem;
    }

    .footer__socials {
        justify-self: flex-end;
    }
}

@media screen and (min-width: 1024px) {
    .header,
    .main,
    .footer__container {
        padding: 0;
    }

    .home__blob {
        width: 320px;
    }

    .home__social {
        transform: translateX(-6rem);
    }

    .services__container {
        grid-template-columns: repeat (3, 238px);
    }

    .portfolio__content {
        column-gap: 5rem;
    }

    .swiper-portfolio-icon {
        font-size: 3.5rem;
    }

    .swiper-button-prev {
        left: -3.5rem;
    }

    .swiper-button-next {
        right: -3.5rem;
    }

    .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination {
        bottom: -4.5rem;
    }

    .contact__from {
        width: 460px;
    }

    .contact__inputs {
        grid-template-columns: repeat(2, 1fr);
    }

    .swiper-container .swiper-pagination-testimonial {
        bottom: 0;
    }
}
`;
export default GlobalStyles;
