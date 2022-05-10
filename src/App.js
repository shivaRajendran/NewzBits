import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import SectionHeader from "./components/SectionHeader";
import { getResponse } from "./ServiceHandler/Services";
import Loader from "./components/Loader";
import { NoResDetailed } from "./components/SvgContainer";
import Pagination from "./components/Pagination";
import DetailedView from "./components/DetailedView";

function App() {
  const [response, udpateResponse] = useState([]);
  const [noRes, updateNoRes] = useState(false);
  const [sectionHeader, setSectionHeader] = useState({
    operation: "",
    value: "",
    empty: false,
  });
  const [modal, updateModal] = useState({
    loader: true,
    triggerDetails: false,
  });
  const [description, updateDescription] = useState({
    title: '',
    src: '',
    date: '',
    thumbnail: '',
    desc: '',
    link: '',
    content: '',
    id: '',
    currentResponse: response.results
  });
  function onNewsClick(props){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    showContent(true);
    updateDescription(prev => {
      return {
        ...prev,
        title: props.title,
        src: props.src,
        date: props.date,
        thumbnail: props.thumbnail,
        desc: props.desc,
        link: props.link,
        content: props.content,
        id: props.id
      }
    })
  }

  function renderDetailedView(){
    return <DetailedView 
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
    updateModal((prev) => {
      return {
        ...prev,
        loader: true,
      };
    });
  }

  function dismissLoader() {
    updateModal((prev) => {
      return {
        ...prev,
        loader: false,
      };
    });
  }

  function updateAPIResponse(res, source) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    udpateResponse(res);
    updateDescription(prev => {
      return {
        ...prev,
        currentResponse: res.results
      }
    })
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

  function updateHeader() {}

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
      />
      <section id="content">
        <div
          className="content-wrapper"
          style={{ display: (noRes || modal.triggerDetails) ? "none" : "initial" }}
        >
          <SectionHeader
            value={sectionHeader.value}
            empty={sectionHeader.empty}
            operation={sectionHeader.operation}
          />
          <div
            className="card-wrapper"
          >
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
                    changeHeader={updateHeader}
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
        <div style={{display: modal.triggerDetails? 'initial': 'none'}}>
          {
            modal.triggerDetails? renderDetailedView(): null
          }
        </div>
      </section>
      <section

      
        id="section-wrapper"
        style={{
          display: modal.loader ? "unset" : "none",
        }}
      >
        <Loader
          style={{
            display: modal.loader ? "grid" : "none",
          }}
        />
      </section>
    </>
  );
}

export default App;
