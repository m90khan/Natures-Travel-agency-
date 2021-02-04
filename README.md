### Natures - FrontEnd Single Page Website

<br />
<p align="center">
  <a href="https://github.com/m90khan/Natures-Travel-agency-/">
    <img src="./img/favicon.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Natures-  Front-End WebApp  </h3>

  <p align="center">
Tours Website <br />
    <a href="m90khan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://github.com/m90khan/Natures-Travel-agency-/">View Demo</a>
    
   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Process](#process)
- [Skills](#skills)
- [Code Snippet](#code)
- [Connect with me](#Contact)

---

### About the Project

- Natures is a tours agency front-end website.

Scripts:

- Package installation : npm install
- Start server : npm start

Layout: Float layout (BEM Model)
Duration: 9hrs - 3 days split

Live: https://github.com/m90khan/Natures-Travel-agency-/

<img src="/img/Natures.gif">
 
#### Process

- Responsive Web Design, Maintable Scaleable Code, Web Performance
- Responsive Web Design: Desktop First vs Mobile First
  Both have Pros and Cons. but it Depends on the requirements. but keeping both of them in mind is the best solution.
- Selecting Breakpoints Options:
  Bad: using Apple devices, not future proof.
  Good: Look at all most used devices, group them in logial way and assign breakpoints in a range.
  BEst: Ignore all devices. only look at content and design. difficult to apply.

* CSS parser (Understands the process of loading the html head, Cascade, visual formating Model)
  Important > Specifity > Source Order.
  7-1 Pattern Component Driven design.
  (base|abstracts|componenets|layout|pages|themes|vendors)

- media queries Use rem for layout. em for media queries
- Responsive images: implementation for HTML as well as CSS
  Resolution switching : serve same image but with different resolution by defining the width of images and their sizes on a viewport along with default image.
  Density switching: Serve same image but with different density alowing the browser to choose.
  Art Direction: serve different Images combined density switching based on the media query
- not pseudo class, perspective property, backdrop-filter, clip-path, solid gradient with percentage,
- Testing for Brower Supports with @supports
- To run for devserver, uncomment the line in html <!-- <link rel="stylesheet" href="icons/styles.css" /> -->

<img src="./img/Natures.jpg" alt="" />

---

### Skills

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][youtube]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][youtube]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][youtube]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][youtube]
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][youtube]
[<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][youtube]
<br />
<br />

---

### Code Snippet

```scss
.feature-box {
  padding: 5rem 2rem;
  background: rgba($color-white, 0.8);
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba($color-black, 0.5);
  transition: all 0.3s;

  @include respond(tab-port) {
    padding: 2rem;
  }

  &__icon {
    font-size: 6rem;
    background: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    display: inline-block;
    @supports (-webkit-background-clip: text) or (background-clip: text) {
      -webkit-background-clip: text;

      background-clip: text;

      color: transparent;
    }
  }
  &__text {
    font-size: $text;
    color: $color-grey-dark;
  }
  &:hover {
    transform: translateY(-2rem) scale(1.1);
    box-shadow: 0 0.5rem 6rem rgba($color-black, 0.5);
  }
}
```

---

### Connect with me:

[<img align="left" alt="Khan | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]

[<img align="left" alt="twitter | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="khanmohsinx | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/behance.svg" />][behance]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/dribbble.svg" />][dribble]
<br />

---

[youtube]: https://www.youtube.com/channel/UC96rVfdTKsjZpREnH6CaCOw
[twitter]: https://twitter.com/m90khan
[linkedin]: https://www.linkedin.com/in/uxdkhan
[instagram]: https://www.instagram.com/uxd.khan/
[behance]: https://www.behance.net/Khan_Mohsin
[dribble]: https://dribbble.com/uxdkhan
