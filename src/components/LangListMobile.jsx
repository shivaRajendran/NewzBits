import {ExportList as List} from "./List";
import Constant from "../ServiceHandler/constants";

export default function ExportLangMobile(props) {
  var displayValue = {
    display: props.displayParam === undefined ? 'none !important' : props.displayParam+' !important'
  }
  return (
    <div className="mb-lang" style={displayValue}>
      <ul class="mb-lang-wrapper">
        {Constant.languages.map((item, index) => {
          return (
            <List
              key={index}
              operation="language"
              value={item.urlValue}
              displayName={item.displayName}
              onClick={props.onClick}
            />
          );
        })}
      </ul>
      <button onClick={props.onCancelClick}>Cancel</button>
    </div>
  );
}
