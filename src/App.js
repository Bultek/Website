import React from "react";
import "./index.css";
import Head from "./Head";
import useLocalStorage from "use-local-storage";
import Heading from "./Heading";
import Links from "./Links";
import Placeholder from "./PlaceHolder";

function App() {
  let defaultvalue = "dark";
  let altvalue = "light";
  var storedTheme = localStorage.getItem("theme");
  if (!storedTheme) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      defaultvalue = "light";
      altvalue = "dark";
    }
  }

  console.log(
    "default value: " + defaultvalue,
    "\nalt value: " + altvalue,
    "\nstored theme: " + storedTheme
  );

  const [theme, setTheme] = useLocalStorage("theme" ? defaultvalue : altvalue);

  console.log("set theme: ", theme);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log("Setting new theme to " + newTheme);
  };

  return (
    <html>
      <Head />
      <body data-theme={theme}>
        <Heading />
        <Links />
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
        <Placeholder />
      </body>
    </html>
  );
}

export default App;
