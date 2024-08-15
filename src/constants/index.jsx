import advice from '../assets/advice.jpg'
import anime from '../assets/anime-min.jpg'
import blogr from '../assets/blogr.jpg'
import brain from '../assets/brain-min.jpg'
import clock from '../assets/clock.jpg'
import coffe from '../assets/cofe.jpg'
import domTodo from '../assets/dom-todo.jpg'
import easybank from '../assets/easybank.jpg'
import expenses from '../assets/expenses.jpg'
import flexBox from '../assets/flexbox-min.jpg'
import formSpace from '../assets/form1-min.jpg'
import iCodeThis from '../assets/icode-min.jpg'
import news from '../assets/news.jpg'
import newsletter from '../assets/newsletter-mobile.jpg'
import nft from '../assets/nft.jpg'
import nikeThree from '../assets/nike-3-min.jpg'
import product from '../assets/product.jpg'
import qr from '../assets/qr.jpg'
import randomColor from '../assets/random-color.jpg'
import randomQuotes from '../assets/random-quotes.jpg'
import rangeColor from '../assets/range-color-rgb.jpg'
import restaurantMin from '../assets/restaurant-min.jpg'
import result from '../assets/result-progres.jpg'
import room from '../assets/room.jpg'
import socialProof from '../assets/social-proof.jpg'
import social from '../assets/social.jpg'
import stats from '../assets/stats.jpg'
import timeTracker from '../assets/time-tracker.jpg'
import travelOne from '../assets/travel-1-min.jpg'
import tribu from '../assets/tribut-min.jpg'
import vercel from '../assets/vercel.jpg'

import { RiNextjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";

export const CARDS = [
    {
        textColor: 'HTML',
        boxShadow: 'html-card-shadow',
        textShadow: 'html-text-shadow',
        icon: <RiHtml5Line />,
        techName: 'HTML'
    },
    {
        textColor: 'CSS',
        boxShadow: 'css-card-shadow',
        textShadow: 'css-text-shadow',
        icon: <RiCss3Fill />,
        techName: 'CSS'
    },
    {
        textColor: 'JavaScript',
        boxShadow: 'javascript-card-shadow',
        textShadow: 'javascript-text-shadow',
        icon: <RiJavascriptLine />,
        techName: 'JavaScript'
    },
    {
        textColor: 'React',
        boxShadow: 'react-card-shadow',
        textShadow: 'react-text-shadow',
        icon:   <RiReactjsLine />,
        techName: 'React'
    },
    {
        textColor: 'TypeScript',
        boxShadow: 'typescript-card-shadow',
        textShadow: 'typescript-text-shadow',
        icon: <TbBrandTypescript />,
        techName: 'TypeScript'
    },
    {
        textColor: 'Tailwind',
        boxShadow: 'tailwind-card-shadow',
        textShadow: 'tailwind-text-shadow',
        icon:  <RiTailwindCssFill />,
        techName: 'Tailwind'
    },
    {
        textColor: 'Framer',
        boxShadow: 'framer-card-shadow',
        textShadow: 'framer-text-shadow',
        icon: <TbBrandFramerMotion />,
        techName: 'Framer Motion'
    },
    {
        textColor: 'Next',
        boxShadow: 'next-card-shadow',
        textShadow: 'next-text-shadow',
        icon: <RiNextjsLine />,
        techName: 'Next.js'
    }
]

export const PROJECTS = [
    {
        image: iCodeThis,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Portfolio with 166 front-end completed challenges!',
        title: '166 Front-end Challenges',
        github: 'https://github.com/ign-is/iCodeThis',
        demo: 'https://icodethis.com/igna'
    },
    {
        image: advice,
        technologies: ['React'],
        description: 'Click the dice to generate a new advice.',
        title: 'Advice generator app',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/advice-generator-app',
        demo: ''
    },
    {
        image: anime,
        technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
        description: 'Modern Next 14 server side app to explore animes with server actions, infinite scroll & Framer Motion animations.',
        title: 'Best Animes',
        github: '',
        demo: ''
    },
    {
        image: blogr,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'A modern blog publishing platform.',
        title: 'Blogr landing page',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/blogr-landing-page',
        demo: ''
    },
    {
        image: brain,
        technologies: ['React', 'Tailwind'],
        description: 'Futuristic fully responsive website with modern UI/UX, parallax effects and bento box layouts.',
        title: 'Brainwave',
        github: 'https://github.com/ign-is/brainwave',
        demo: 'https://brainwave-weld-sigma.vercel.app/'
    },
    {
        image: clock,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Digital clock in Neumorphism design style with dark mode included.',
        title: 'Neumorphism Clock',
        github: 'https://github.com/ign-is/neumorphism-digital-clock',
        demo: ''
    },
    {
        image: coffe,
        technologies: ['HTML', 'CSS'],
        description: 'Coffee shop menu with a touch of CSS art.',
        title: 'Coffee Menu',
        github: 'https://github.com/ign-is/coffee-shop-menu',
        demo: 'https://coffee-shop-menu.vercel.app/'
    },
    {
        image: domTodo,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Photorealistic to-do device.',
        title: 'DOM To-do',
        github: 'https://github.com/ign-is/javascript-dom-manipulation/tree/main/DOM-todo',
        demo: 'https://todo-lemon-eight.vercel.app/'

    },
    {
        image: easybank,
        technologies: ['React'],
        description: 'Next generation digital banking.',
        title: 'Easybank landing page',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/easybank-landing-page',
        demo: 'https://easybank-phi-opal.vercel.app/'
    },
    {
        image: expenses,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Cool chart to visualize and track expenses.',
        title: 'Expenses chart component',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/expenses-chart-component',
        demo: ''
    },
    {
        image: flexBox,
        technologies: ['HTML', 'CSS'],
        description: 'Handy technical documentation page filled with custom CSS made graphical examples to understand Flexbox properties.',
        title: 'Flexbox Documentation',
        github: 'https://github.com/ign-is/flexbox-technical-documentation',
        demo: 'https://flexbox-technical-documentation.vercel.app/'
    },
    {
        image: formSpace,
        technologies: ['HTML', 'CSS'],
        description: 'Survey form for a space tourism company.',
        title: 'Space Travel Form',
        github: 'https://github.com/ign-is/space-survey-form',
        demo: 'https://space-survey-form.vercel.app/'
    },
    {
        image: news,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Find the latest technological news on this website.',
        title: 'News homepage',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/news-homepage',
        demo: ''
    },
    {
        image: newsletter,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Sign-up form with validation and success message.',
        title: 'Newsletter sign-up form',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/newsletter-sign-up-with-success-message',
        demo: ''
    },
    {
        image: nft,
        technologies: ['HTML', 'CSS'],
        description: 'Card component showcasing NFT futuristic art.',
        title: 'NFT preview card',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/nft-preview-card-component',
        demo: ''
    },
    {
        image: nikeThree,
        technologies: ['React', 'Tailwind'],
        description: 'Nike landing page showcasing products.',
        title: 'Nike landing',
        github: 'https://github.com/ign-is/nike',
        demo: 'https://nike-landing-silk.vercel.app/'
    },
    {
        image: product,
        technologies: ['HTML', 'CSS'],
        description: 'Card showcasing perfume with price and add to cart button.',
        title: 'Product preview card',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/product-preview-card-component',
        demo: ''
    },
    {
        image: qr,
        technologies: ['HTML', 'CSS'],
        description: 'Simple card component with QR.',
        title: 'QR code',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/qr-code-component',
        demo: ''
    },
    {
        image: randomColor,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Random hexadecimal color generator with a cool button.',
        title: 'Random color generator',
        github: 'https://github.com/ign-is/javascript-dom-manipulation/tree/main/random-color',
        demo: ''
    },
    {
        image: randomQuotes,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Stoic philosophers random quotes generator with a beautiful background architecture.',
        title: 'Quotes generator',
        github: 'https://github.com/ign-is/javascript-dom-manipulation/tree/main/random-quotes',
        demo: 'https://random-quotes-eight-tau.vercel.app/'
    },
    {
        image: rangeColor,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Photorealistic CSS Art with RGB range color generator functionality.',
        title: 'RGB color picker',
        github: 'https://github.com/ign-is/javascript-dom-manipulation/tree/main/range-color-rgb',
        demo: 'https://range-color-rgb.vercel.app/'
    },
    {
        image: restaurantMin,
        technologies: ['React', 'Tailwind', 'Framer Motion'],
        description: 'Modern restaurant landing page.',
        title: 'Restaurant',
        github: 'https://github.com/ign-is/restaurant-landing-page',
        demo: 'https://restaurant-landing-page-kappa-gilt.vercel.app/'
    },
    {
        image: result,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'View results with cool hover effects.',
        title: 'Results summary component',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/results-summary-component',
        demo: ''
    },
    {
        image: room,
        technologies: ['React'],
        description: 'Find modern ways to decorate your home with this responsive slider.',
        title: 'Room homepage',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/room-homepage',
        demo: ''
    },
    {
        image: socialProof,
        technologies: ['HTML', 'CSS'],
        description: 'Fully responsive social proof rating and comments section.',
        title: 'Social proof section',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/social-proof-section',
        demo: ''
    },
    {
        image: social,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Followers count dashboard with theme switcher.',
        title: 'Social Media Dashboard',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/social-media-dashboard-with-theme-switcher',
        demo: 'https://social-media-dashboard-ashen-mu.vercel.app/'
    },
    {
        image: stats,
        technologies: ['HTML', 'CSS'],
        description: 'Responsive stats card.',
        title: 'Stats Preview Card',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/stats-preview-card-component',
        demo: ''
    },
    {
        image: timeTracker,
        technologies: ['React'],
        description: 'Organize your time with daily, weekly, and monthly stats.',
        title: 'Time tracking dashboard',
        github: 'https://github.com/ign-is/frontend-mentor/tree/main/time-tracking-dashboard',
        demo: 'https://time-tracking-dashboard-ten-self.vercel.app/'
    },
    {
        image: travelOne,
        technologies: ['Next.js', 'Tailwind', 'TypeScript'],
        description: 'Fully responsive travel and camping landing page.',
        title: ' Travel App',
        github: 'https://github.com/ign-is/travel-landing-page',
        demo: 'https://travel-landing-page-tan.vercel.app/'
    },
    {
        image: tribu,
        technologies: ['HTML', 'CSS'],
        description: 'Marcus Aurelius tribute page.',
        title: 'Tribute Page',
        github: 'https://github.com/ign-is/tribute-page',
        demo: 'https://marcus-nine.vercel.app/'
    },
    {
        image: vercel,
        technologies: ['Next.js','TypeScript'],
        description: 'Full-stack dashboard web application form the official Next.js documentation.',
        title: 'Next.js Official Dashboard',
        github: 'https://github.com/ign-is/nextjs-dashboard',
        demo: ''
    }
]

