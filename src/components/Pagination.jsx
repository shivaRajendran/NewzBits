import { useState } from "react";
import { getResponse } from "../ServiceHandler/Services";
export default function ExportPagination(props) {
  const [page, updatePage] = useState("");
  const [pageDetails, updatePageDetails] = useState({
    page: props.currentPage,
    total: props.totalPages,
  });

  function calcTotalpages(pages) {
    return Math.ceil(pages / 10);
  }

  function handleChange(event) {
    const { value: inputValue } = event.target;
    updatePage(inputValue);
  }

  async function handleSubmit(event) {
    props.showLoad();
    let pn = 0;
    event.preventDefault();
    pn = page;
    if (page > props.totalPages) {
      pn = calcTotalpages(props.totalPages);
    }
    if (page < 1) {
      pn = 1;
    }
    let payload = {
      operation: "pagination",
      value: pn - 1,
    };
    var res = await getResponse(payload);
    payload.value = props.sectionHeading;
    props.handleResponse(res, payload);
  }

  async function onPrevClick() {
    props.showLoad();
    let payload = {
      operation: "pagination",
      value: props.currentPage-2,
    };
    let response = await getResponse(payload);
    payload.value = props.sectionHeading;
    props.handleResponse(response, payload);
  }

  async function onNextClick() {
    props.showLoad();
    props.showLoad();
    let payload = {
      operation: "pagination",
      value: props.currentPage,
    };
    let response = await getResponse(payload);
    payload.value = props.sectionHeading;
    props.handleResponse(response, payload);
  }

  return (
    <div class="pagintion-header" style={{ display: props.showPages }}>
      <div class="pagination">
        <div class="page-top" onSubmit={handleSubmit}>
          <button
            class="prev-page page-nav"
            onClick={onPrevClick}
            style={{ display: props.currentPage === 1 ? "none" : "grid" }}
          >
            <i class="ri-arrow-left-s-line"></i>
          </button>
          <span class="page-bottom">
            Page{" "}
            <span style={{ color: "var(--primary)" }}>{props.currentPage !== null? props.currentPage: calcTotalpages(props.totalPages)}</span>{" "}
            of{" "}
            <span style={{ color: "var(--primary)" }}>
              {calcTotalpages(props.totalPages)}
            </span>
          </span>
          <button
            class="next-page page-nav"
            onClick={onNextClick}
            style={{
              display: props.currentPage === props.totalPages ? "none" : "grid",
            }}
          >
            <i class="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
