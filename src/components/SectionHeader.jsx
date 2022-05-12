export default function ExportSectionHeader(props) {
  let content = "",
    flag = false;

  if (!props.empty) {
    if (props.operation === "category" || props.operation === "init") {
      if (props.value.toLowerCase() === "top") {
        content = "Top Stories";
      } else {
        content = props.value;
      }
    } else if (
      props.operation === "search" ||
      (props.operation === "pagination" &&
        localStorage.getItem("lastReq") === "search")
    ) {
      content = (
        <>
          Showing results for{" "}
          <span
            style={{ color: "var(--primary)", textTransform: "capitalize" }}
          >
            {props.value}
          </span>
        </>
      );
    } else if (
      props.operation === "language" ||
      (props.operation === "pagination" &&
        localStorage.getItem("lastReq") === "language")
    ) {
      content = "Top Stories";
    } else if (props.operation === "pagination") {
      content = props.value;
    }
  } else {
    flag = true;
  }
  if (props.value.toLowerCase() === "top") {
    content = "Top Stories";
  }

  return (
    <div className="section-head" style={{ display: !flag ? "flex" : "none" }}>
      <h1>{content}</h1>
    </div>
  );
}
