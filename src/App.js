import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log("Setting new theme to " + newTheme);
  };

  return (
    <html>
      <head>
        <title>Bultek.</title>
        <link rel="stylesheet" href="index.css" text-type="text/css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Demir Yerli and Bultek." />
        <meta name="description" content="Bultek. website" />
        <meta charset="utf-8" />
        <link rel="icon" href="favicon.png" type="image/png" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body data-theme={theme}>
        <a id="logo" href="http://bultek.com.ua">
          <article class="heading">Bultek.</article>
        </a>
        <p>|</p>
        <div id="slogan" class="slogan-big">
          <h3>
            <strong>
              ------------------------------| We are a team of enthusiasts, that
              are developing software |------------------------------
            </strong>
          </h3>
        </div>
        <div id="slogan" class="slogan-small">
          <h3>
            <strong>
              We are a team of enthusiasts, that are developing software
            </strong>
          </h3>
        </div>
        <p>|</p>
        <a
          class="links"
          rel="noreferrer"
          href="https://github.com/Bultek "
          target="_blank"
        >
          GitHub
        </a>
        <p>|</p>
        <a
          class="links"
          rel="noreferrer"
          href="https://twitter.com/BultekDev"
          target="_blank"
        >
          Twitter
        </a>
        <p>|</p>
        <a
          class="links"
          rel="noreferrer"
          href="mailto:help@bultek.com.ua"
          target="_blank"
        >
          Mail support (Ask a question)
        </a>
        <p>|</p>
        <div class="projects">
          <p class="projects">Projects that we currently maintain:</p>
          <ul class="projects">
            <li>Libquartz and tools</li>
          </ul>
        </div>
        <br />

        <button class="themetoggle" onClick={switchTheme} type="button">
          Switch theme.
        </button>
        <div class="placeholder">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </body>
    </html>
  );
}

export default App;
