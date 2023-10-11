import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: "en",
    messages: {
        en: {
            goBack: 'Go Back',
            home: {
                name: 'Yuriy Volkovskiy',
                about: 'A full-stack developer',
            },
            menu: {
                about: 'About Me',
                projects: 'Projects',
                education: 'Education',
                contacts: 'Contacts'
            },
            about: {
                firstSectionHeading: 'About Me',
                firstSectionParagraph: `I'm a 17 year old full-stack developer that got hooked on the programming in early school.
                Since then, I've initially learned Java, later also learning HTML and CSS, and JavaScript/TypeScript after that.
                After having learnt popular frameworks, I've slowly moved from small pet projects to medium-scale projects.`,
                secondSectionHeading: 'A bit of History',
                secondSectionParagraph: `After getting introduced to programming, I've started trying out different spheres in IT Step academy,
                and soon started to learn on my own in free Stepik courses. After completing Stepik algorithms and data structures course
                with distinction, I've been invited to study and help with projects at Hyperskill, where I have obtained the most expertise
                and brought Java and Kotlin to the next level. Along with learning in Hyperskill, I've studied numerous Udemy courses which brought me the diverse knowledge base on various topics.`,
                thirdSectionHeading: 'My Skills',
                thirdSectionParagraph: `I've had experience in building small-scale projects in Java and Kotlin, variable in complexity.
                I've had an immersive experience of building HTML & (S)CSS landings, 
                including using tools such as Photoshop and Illustrator to prepare assets;
                as well as having developed multiple medium-scale projects (>50,000 lines of code) built through JavaScript/TypeScript, 
                and have 5 years of exprience with React and 2 years of experience working with Vue,
                as well as limited experience in configuring advanced interrelated CI/CD systems.
                Additional experience of mine is being able to debug code in a highly efficient manner, having worked 2 years as a code tester and debugger. I've experience in setting up Linux systems, as well as a C2 level English knowledge.`,
                fourthSectionHeading: 'My Projects',
                fourthSectionParagraph: ` One of my key projects so far has been Chess Variants Wiki: a project using Typescript, React, Redux and Redux Saga for frontend,
                and Spring Boot for backend. It is designed for being highly scalable at all sizes, with many optimizations such as automatically
                registering files from directories, using SCSS modules to manage styles and advanced code structuring techniques such as converting classes
                to their fully observable counterparts to split responsibilities between different variant rules. The project got me hooekd in as a challenging
                task to implement in a quick time in a very clean way, especially with the complexity creating for difficulty of performance optimization and total amount of possible bugs.`
            },
            projects: {
                seeMore: 'See More',
                chessDescription: `A chess variants website supporting customization, over 40 variant rules to create countless variants,
                engine-generated moves, as well as up to 4 players that play as teams or everyone against everyone. The website parses
                the pages written in Markdown and when finding component syntax creates and shows chess variant boards ranging up to 14x14 board size.`,
                practiceLandingsDescription: `A catalog of practice landings showcasing HTML & (S)CSS techniques, currently featuring 10 practice landings with varying difficulty of implementation. All of the landings are responsible on dimensions from 320px to 1800px, and areas maximally accessible as possible in accordance with the original design. The catalog is meant to showcase clean SCSS code practices even for over-complicated designs as well as complex designs that is still done in a clean and a readable, understandable way.`,
                jsLibraryDescription: `A library of Javascript components for various scenarios, ranging from simple to pagination to complex different types of carousels and zooming features, as well as inputs, sliders and image comparisons.`,
                flappyBirdDescription: `A simple pet project that features a flappy bird game with updated textures written in Javascript and working through and fully built with HTML5 Canvas, featuring simple and intuitive controls.`
            },
            education: {
                filters: {
                    All: "All",
                    Udemy: "Udemy",
                    Stepik: "Stepik",
                    Hyperskill: "Hyperskill",
                    'General Education': "General Education"
                }
            },
            contacts: {
                heading: 'Contact Me',
                paragraph: `Если у вас есть какие-либо вопросы, возможности для сотрудничества или вы просто хотели бы подключиться, пожалуйста, не стесняйтесь обращаться к нам. Я всегда рад познакомиться с новыми людьми и изучить потенциальные проекты.`,
                form: {
                    name: 'Name',
                    subject: 'Subject',
                    email: 'Email',
                    message: 'Your message',
                    submit: 'Submit'
                }
            }
        },
        ru: {
            goBack: 'На главную',
            home: {
                name: 'Юрий Волковский',
                about: 'Фулстек разработчик',
            },
            menu: {
                about: 'О мне',
                projects: 'Проекты',
                education: 'Образование',
                contacts: 'Контакты'
            },
            about: {
                firstSectionHeading: 'О мне',
                firstSectionParagraph: `Я 17-летний разработчик full-stack, который увлекся программированием в начальной школе. С тех пор я изучил Java, позже также изучил HTML и CSS, а после этого JavaScript / TypeScript. Изучив популярные фреймворки, я постепенно перешел от небольших домашних проектов к проектам среднего масштаба.`,
                secondSectionHeading: 'История Учёбы',
                secondSectionParagraph: `Познакомившись с программированием, я начал пробовать себя в разных сферах в IT Step academy,
                и вскоре начал учиться самостоятельно на бесплатных курсах Stepik. После прохождения курса Stepik по алгоритмам и структурам данных
                с отличием меня пригласили учиться и помогать с проектами в Hyperskill, где я приобрел наибольший опыт
                и вывел Java и Kotlin на новый уровень. Наряду с обучением в Hyperskill, я изучил множество курсов Udemy, которые принесли мне разнообразную базу знаний по различным темам.`,
                thirdSectionHeading: 'Мои Навыки',
                thirdSectionParagraph: `У меня был опыт создания небольших проектов на Java и Kotlin различной сложности.
                У меня был захватывающий опыт создания HTML- и CSS-лендингов,
                включая использование таких инструментов, как Photoshop и Illustrator для подготовки ресурсов;
                а также разработал несколько проектов среднего масштаба (> 50 000 строк кода), построенных с помощью JavaScript/TypeScript,
                и имею 5-летний опыт работы с React и 2-летний опыт работы с Vue,
                а также ограниченный опыт в настройке продвинутых взаимосвязанных систем CI/CD.
                Дополнительным моим опытом является умение отлаживать код высокоэффективным способом, поскольку я проработал 2 года тестировщиком кода и отладчиком.`,
                fourthSectionHeading: 'Мои Проекты',
                fourthSectionParagraph: `Одним из моих ключевых проектов на данный момент является Chess Variants Wiki: проект, использующий Typescript, React, Redux и Redux Saga для интерфейса,
                и весенняя загрузка для серверной части. Он разработан для обеспечения высокой масштабируемости при любых размерах, с множеством оптимизаций, таких как автоматическое
                регистрация файлов из каталогов, использование модулей SCSS для управления стилями и продвинутых методов структурирования кода, таких как преобразование классов
                к их полностью наблюдаемым аналогам, чтобы распределить обязанности между различными вариантами правил. Этот проект привлек меня как сложный
                задача, которую необходимо реализовать в кратчайшие сроки очень простым способом, особенно учитывая сложность, создающую трудности для оптимизации производительности, и общее количество возможных ошибок.
                У меня есть опыт настройки Linux-систем, а также знание английского языка на уровне C2.`
            },
            projects: {
                seeMore: 'Смотреть',
                chessDescription: `Веб-сайт вариантов шахмат, поддерживающий кастомизацию, более 40 вариантов правил для создания бесчисленных вариантов,
                генерируемые движком ходы, а также до 4 игроков, которые играют командами или все против всех. Веб-сайт анализирует
                страницы, написанные в Markdown, и при поиске синтаксиса компонента создают и показывают шахматные варианты досками размером до 14х14.`,
                practiceLandingsDescription: `Каталог лендингов, демонстрирующих методы HTML и CSS, в настоящее время содержит 10 практических лендингов с различной сложностью реализации. Все посадочные площадки имеют размеры от 320 до 1800 пикселей и максимально доступные зоны в соответствии с оригинальным дизайном. Каталог предназначен для демонстрации методов использования чистого кода SCSS даже для чрезмерно сложных проектов, а также для сложных проектов, которые по-прежнему выполняются чистым, читаемым и понятным способом.`,
                jsLibraryDescription: `Каталог практических лендингов, демонстрирующих методы HTML и CSS, в настоящее время содержит 10 практических лендингов с различной сложностью реализации. Все посадочные площадки имеют размеры от 320 до 1800 пикселей и максимально доступные зоны в соответствии с оригинальным дизайном. Каталог предназначен для демонстрации методов использования чистого кода SCSS даже для чрезмерно сложных проектов, а также для сложных проектов, которые по-прежнему выполняются чистым, читаемым и понятным способом.`,
                flappyBirdDescription: `Простой pet-проект, в котором представлена игра flappy bird с обновленными текстурами, написанная на Javascript, проработанная и полностью построенная с использованием HTML5 Canvas, с простым и интуитивно понятным управлением.`
            },
            education: {
                filters: {
                    All: "Все",
                    Udemy: "Udemy",
                    Stepik: "Stepik",
                    Hyperskill: "Hyperskill",
                    'General Education': "Общее Образование"
                }
            },
            contacts: {
                heading: 'Свяжитесь со мной',
                paragraph: `Если у вас есть какие-либо вопросы, возможности для сотрудничества или вы просто хотели бы связаться, обращайтесь. Я всегда рад познакомиться с новыми людьми и изучить потенциальные проекты.`,
                form: {
                    name: 'Имя',
                    subject: 'Тема',
                    email: 'Почта',
                    message: 'Ваше сообщение',
                    submit: 'Отправить'
                }
            }
        }
    },
});
window.vueI18n = i18n;

createApp(App).use(i18n).use(router).mount('#app');
