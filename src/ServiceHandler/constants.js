const baseURL = 'https://newsdata.io/api/1/news?apikey=';
const apiKey = "pub_6640cb11b96a9d53c9bae25d68d5d5128a02";

const constant = {
  base: "https://newsdata.io/api/1/news?",
  key: "pub_6640cb11b96a9d53c9bae25d68d5d5128a02",
  baseWithKey:
    baseURL+apiKey,
  navLinks: [
    { displayName: "TOP STORIES", urlValue: "top" },
    { displayName: "HEALTH", urlValue: "health" },
    { displayName: "ENTERTAINMENT", urlValue: "entertainment" },
    { displayName: "TECHNOLOGY", urlValue: "technology" },
    { displayName: "POLITICS", urlValue: "politics" },
    { displayName: "SPORTS", urlValue: "sports" },
  ],
  languages: [
    { displayName: "English", urlValue: "en" },
    { displayName: "Russian", urlValue: "ru" },
    { displayName: "Thai", urlValue: "th" },
    { displayName: "Ukrainian", urlValue: "uk" },
  ],
  mandatoryParams: {
      page: 0,
      language: 'en'
  },
  themeConfig: {
    light: {
      headerText: "rgba(0,0,0,.6)",
      body: "#fff",
      shadow: "rgba(0,0,0,.15)",
      seperator: "rgba(0,0,0,.025)",
      secondary: "rgb(245, 246, 250)",
      grad: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
      text: "0,0,0",
      bg: '255,255,255'
    },
    dark: {
      headerText: "rgba(255,255,255,.6)",
      body: "rgb(30, 39, 46)",
      shadow: "rgba(0,0,0,.3)",
      seperator: "rgba(0,0,0,.3)",
      secondary: "rgb(38, 50, 59)",
      grad: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
      text: "255,255,255",
      bg: "0,0,0"
    },
  }
};

export default constant;
