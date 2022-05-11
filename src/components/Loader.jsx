export default function ExportLoader(props) {
  var displayStyle = {
    display: props.displayParam
  }
  return (
    <div className="loader" style={displayStyle}>
      <div className="spinner"></div>
    </div>
  );
}
