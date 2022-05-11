import { getResponse } from "../ServiceHandler/Services";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./StyledThemes/ThemeHandler";
import constants from "../ServiceHandler/constants";
import { ExportList as List } from "./List";
import Search from "./SearchBox";
import React, { useState, useEffect } from "react";

const Themes = constants.themeConfig;

function ExportHeader(props) {
  const [mode, switchMode] = useState(
    localStorage.getItem("darkMode") !== undefined
      ? localStorage.getItem("darkMode") === "true"
      : false
  );
  const { navLinks, languages } = constants;
  const [hamExpanded, setHamState] = useState(() => {
    return window.innerWidth > 640 ? false : true;
  });
  const [searchToggled, setToggleState] = useState(false);

  function handleResize() {
    setHamState(false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  async function onLinkClick(params) {
    props.showLoader();
    setupApiCall();
    const value = await getResponse(params);
    props.updateRes(value, params);
  }

  function setupApiCall(params){
    props.toggleContent(false);
    setToggleState(false);
    console.log(params);
    props.showLangMb();
  }

  function langClicked(){
    setupApiCall();
    props.showLangMb();
  }

  function handleHamClick() {
    setToggleState(false);
    if (window.innerWidth < 641) {
      setHamState((prev) => {
        return !prev;
      });
    }
  }

  function handleSearchClick() {
    setHamState(true);
    setToggleState((prev) => !prev);
  }

  function switchAppMode() {
    setToggleState(false);
    switchMode((prev) => !prev);
  }
  useEffect(() => {
    localStorage.setItem("darkMode", mode);
  }, [mode])

  return (
    <ThemeProvider theme={mode ? Themes.dark : Themes.light}>
      <GlobalStyle></GlobalStyle>
      <section id="header" data-aos="zoom-in-down">
        <div className="header-inner">
          <div
            className="mb-only mobile-search-wrapper flex-row-sb-center"
            style={{ top: searchToggled ? "0" : "-100%" }}
          >
            <Search triggerSearch={onLinkClick} />
            <button className="btn-bg-none mb-only" onClick={handleSearchClick}>
              <i class="ri-arrow-up-circle-line"></i>
            </button>
          </div>
          <div className="header-logo flex-row-sb-center">
            <h1 className="logo">NewzBits</h1>
            <div className="logo-right flex-row-sb-center">
              <button className="btn-bg-none" onClick={switchAppMode}>
                <i className={mode ? "ri-sun-line" : "ri-moon-line"}></i>
              </button>
              <button
                className="btn-bg-none mb-only"
                onClick={handleSearchClick}
              >
                <i className="ri-search-2-line"></i>
              </button>
              <button className="btn-bg-none mb-only" onClick={handleHamClick}>
                <i className="ri-menu-line"></i>
              </button>
              <div className="language-switch">
                <div className="switch-wrapper flex-row-sb-center">
                  <span>ENGLISH</span>
                  <div className="vertical-line"></div>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
                <div className="lang-options">
                  <ul>
                    {languages.map((item, index) => {
                      return (
                        <List
                          key={index}
                          operation="language"
                          value={item.urlValue}
                          displayName={item.displayName}
                          onClick={onLinkClick}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
              <Search />
            </div>
          </div>
          <div
            className={
              hamExpanded
                ? "header-links flex-row-sb-center left-full"
                : "header-links flex-row-sb-center"
            }
          >
            <div className="nav-links-wrapper">
              <ul className="nav-links">
                {navLinks.map((item, index) => {
                  return (
                    <List
                      key={index}
                      operation="category"
                      value={item.urlValue}
                      displayName={item.displayName}
                      onClick={onLinkClick}
                    />
                  );
                })}

                <li className="mb-only" onClick={langClicked}>LANGUAGE</li>
              </ul>
            </div>
            <Search triggerSearch={onLinkClick} />
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ExportHeader;
