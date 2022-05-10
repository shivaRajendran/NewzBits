import { useState, useEffect } from "react";
import { ExportNewsList as List } from "../components/List.jsx";
export default function ExportDefaultView(props) {
  const [response, updateResponse] = useState(props);

  const completeList = response.currentResponse;

  const [relFeed, updateRelFeed] = useState({
    resp: getRelFeed(completeList, props.title, true),
    currentRow: getRelFeed(completeList, props.title, false),
  });

  function getRelFeed(list, titleValue, flag) {
    let res = flag
      ? list.filter((item) => item.title !== titleValue)
      : list.filter((item) => item.title === titleValue)[0];
    console.log(res, flag);
    return res;
  }

  function udpateRes(){
    updateResponse((prev) => {
        // console.log("prev");
        // console.log(prev);
        return {
          ...prev,
          title: relFeed.currentRow.title,
          src: relFeed.currentRow.source_id,
          date: relFeed.currentRow.pubDate,
          thumbnail: relFeed.currentRow.image_url,
          desc: relFeed.currentRow.description,
          content: relFeed.currentRow.content,
          link: relFeed.currentRow.link,
        };
      });
  }
  function onNewsClick(props) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    let updatedList = getRelFeed(completeList, props.title, true);
    let current = getRelFeed(completeList, props.title, false);
    console.log("current");
    console.log(current);
    updateRelFeed({ resp: updatedList, currentRow: current });
    console.log("relFeed");
    console.log(relFeed);
  }

  useEffect(() => {
    udpateRes();
  }, [relFeed]);

  function handleBack() {
    props.toggleContent(false);
  }
  function openURL() {
    window.open(props.link, "_blank");
    console.log(props.link);
  }
  function optimalDesc() {
    let res = "";
    if (
      response.desc !== undefined &&
      response.desc !== null &&
      response.content !== undefined &&
      response.content !== null
    ) {
      res =
        response.desc.length > response.content.length
          ? response.desc
          : response.content;
    }
    if (response.desc !== undefined && response.desc !== null) {
      res = response.desc;
    }
    if (response.content !== undefined && response.content !== null) {
      res = response.content;
    }
    if (response.desc === null && response.content === null){
      res = <p><i class="ri-error-warning-line"></i> We're sorry! We aren't able to show you the news description for this particular feed, because we aren't getting any description from the provider. Please click the 'Read More' Link below to go to the actual provider.</p>
    }
    return res;
  }
  return (
    <div class="detailed-view-wrapper">
      <div class="left-view">
        <button class="btn-with-icon" onClick={handleBack}>
          <i class="ri-arrow-left-line"></i>
          Back
        </button>
        <div class="heading-section">
          <h1 class="news-title">{response.title}</h1>
          <div class="head-desc">
            <p>
              source: <span>{response.src}</span>
            </p>
            <p>
              published on: <span>{response.date.split(' ')[0]}</span>
            </p>
          </div>
        </div>
        <div
          class="thumb-wrapper"
          style={{
            display: response.thumbnail !== null ? "block" : "none",
          }}
        >
          <img
            src={response.thumbnail}
            alt=""
            class="thumbnail-lg"
            style={{
              display: response.thumbnail !== null ? "block" : "none",
            }}
          />
        </div>

        <div class="news-desc">{optimalDesc()}</div>
        <button
          class="btn-with-icon"
          style={{ display: response.link !== null ? "flex" : "none" }}
          onClick={openURL.bind(response.url)}
        >
          <i class="ri-file-list-2-line"></i>
          Read More
        </button>
      </div>
      <div class="right-view">
        <h1>Related Feed</h1>
        <ul class="feed-list">
          {relFeed.resp.map((item, index) => {
            return (
              <List
                key={index}
                title={item.title}
                id={index}
                onClicked={onNewsClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
