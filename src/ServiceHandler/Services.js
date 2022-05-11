import constant from "./constants";

let {
  baseWithKey,
  mandatoryParams: { page, language },
} = constant;

let callheap = [];

function constructURL(params) {
  let url = '';
  if (params.operation === "category" || params.operation === "init") {
    url =  (
      baseWithKey +
      "&language=" +
      language +
      "&category=" +
      params.value +
      "&page=" +
      page
    );
  } else if (params.operation === "language") {
    language = params.value;
    url =  baseWithKey + "&language=" + params.value + "&page=" + page;
  } else if (params.operation === "search") {
    url =  (
      baseWithKey +
      "&language=" +
      language +
      "&q=" +
      params.value +
      "&page=" +
      page
    );
  }
  else if (params.operation === 'pagination'){
    let lastURL = callheap[callheap.length - 1];
    url = lastURL.substring(0, lastURL.indexOf('page=')) + 'page=' + params.value;
  }
  callheap.push(url);
  return url;
}


// disableScroll();

async function getResponse(value) {
  let url = constructURL(value);
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((res) => console.log("Fetch failed : " + res));
}

export { constructURL, getResponse };
