import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import SectionHeader from "./components/SectionHeader";
import { getResponse } from "./ServiceHandler/Services";
import Loader from "./components/Loader";
import { NoResDetailed } from "./components/SvgContainer";
import Pagination from "./components/Pagination";
import DetailedView from "./components/DetailedView";
import LangMobile from "./components/LangListMobile";
import Footer from './components/Footer';

function App() {
  const [response, udpateResponse] = useState([]);
  const [noRes, updateNoRes] = useState(false);
  const [sectionHeader, setSectionHeader] = useState({
    operation: "",
    value: "",
    empty: false,
  });
  const [modal, updateModal] = useState({
    loader: false,
    triggerDetails: false,
    langMb: false,
  });
  const [description, updateDescription] = useState({
    title: "",
    src: "",
    date: "",
    thumbnail: "",
    desc: "",
    link: "",
    content: "",
    id: "",
    currentResponse: response.results,
  });
  function onNewsClick(props) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    showContent(true);
    updateDescription((prev) => {
      return {
        ...prev,
        title: props.title,
        src: props.src,
        date: props.date,
        thumbnail: props.thumbnail,
        desc: props.desc,
        link: props.link,
        content: props.content,
        id: props.id,
      };
    });
  }

  function renderDetailedView() {
    return (
      <DetailedView
        title={description.title}
        src={description.src}
        date={description.date}
        thumbnail={description.thumbnail}
        desc={description.desc}
        link={description.link}
        currentResponse={description.currentResponse}
        toggleContent={showContent}
        id={description.id}
        key={description.id}
      />
    );
  }

  const showContent = (flag) => {
    updateModal((prev) => {
      return {
        ...prev,
        triggerDetails: flag,
      };
    });
  };

  function showLoader() {
    disableScroll();
    updateModal((prev) => {
      var x = 1;
      return {
        ...prev,
        langMb: false,
        loader: true,
      };
    });
  }

  function dismissLoader() {
    enableScroll();
    updateModal((prev) => {
      var x = 1;
      return {
        ...prev,
        langMb: false,
        loader: false,
      };
    });
  }

  function updateAPIResponse(res, source) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    udpateResponse(res);
    updateDescription((prev) => {
      return {
        ...prev,
        currentResponse: res.results,
      };
    });
    console.log(response);
    if (res.totalResults !== 0 && res.length !== null) {
      updateNoRes(false);
      setSectionHeader((prev) => {
        return {
          ...prev,
          ...source,
          empty: false,
        };
      });
    } else {
      updateNoRes(true);
      setSectionHeader((prev) => {
        return {
          ...prev,
          empty: true,
        };
      });
    }
    dismissLoader();
  }

  function disableScroll() {
    // Get the current page scroll position
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  
  function enableScroll() {
    window.onscroll = function () {};
  }

  const init = async () => {
    showLoader();
    let payload = {
      operation: "init",
      value: "top",
    };
    const res = await getResponse(payload);
    updateAPIResponse(res, payload);
    dismissLoader();
  };

  async function onLangClick(params) {
    cancelClick();
    showLoader();
    let res = await getResponse(params);
    updateAPIResponse(res, params);
  }

  function showLangList() {
    updateModal((prev) => {
      return {
        ...prev,
        langMb: true,
      };
    });
  }
  function cancelClick() {
    updateModal((prev) => {
      return {
        ...prev,
        langMb: false,
      };
    });
  }
  function toggleModal() {
    let flag = false;
    for (const [key, value] of Object.entries(modal)) {
      if (value) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Header
        updateRes={updateAPIResponse}
        showLoader={showLoader}
        dismissLoader={dismissLoader}
        toggleContent={showContent}
        showLangMb={showLangList}
      />
      <section id="content">
        <div
          className="content-wrapper"
          style={{
            display: noRes || modal.triggerDetails ? "none" : "initial",
          }}
        >
          <SectionHeader
            value={sectionHeader.value}
            empty={sectionHeader.empty}
            operation={sectionHeader.operation}
          />
          <div className="card-wrapper">
            {response.results !== undefined
              ? response.results.map((item, index) => (
                  <Card
                    handleNewsClick={onNewsClick}
                    key={index}
                    id={index}
                    title={item.title}
                    content={item.content}
                    link={item.link}
                    keywords={item.keywords}
                    date={item.pubDate}
                    src={item.source_id}
                    desc={item.description}
                    thumbnail={item.image_url}
                    toggleContent={showContent}
                    currentResponse={response.results}
                  />
                ))
              : null}
          </div>
          <Pagination
            showLoad={showLoader}
            handleResponse={updateAPIResponse}
            showPages={response.totalResults * 1 > 10 ? "flex" : "none"}
            currentPage={response.nextPage}
            totalPages={response.totalResults}
            sectionHeading={sectionHeader.value}
          />
        </div>
        <div
          className="no-results"
          style={{ display: noRes ? "grid" : "none" }}
        >
          <div className="no-results-wrapper">
            <div className="svg-container">
              <NoResDetailed />
            </div>
            <h1>Sorry no results found for your query</h1>
          </div>
        </div>
        <div style={{ display: modal.triggerDetails ? "initial" : "none" }}>
          {modal.triggerDetails ? renderDetailedView() : null}
        </div>
      </section>
      <section
        id="section-wrapper"
        style={{
          display: (modal.loader || modal.langMb) ? "unset" : "none",
          // display: 'unset'
        }}
      >
        <Loader displayParam={modal.loader ? "grid" : "none"} />
        <LangMobile
          displayParam={(modal.langMb && !modal.loader) ? "flex" : "none"}
          onClick={onLangClick}
          onCancelClick={cancelClick}
        />
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
