import {ExportList as List} from "./List";
import Constant from "../ServiceHandler/constants";

export default function ExportLangMobile(props) {
  return (
    <div className={props.displayParam === undefined ? "mg-lang d-none": props.displayParam === 'flex' ? 'mb-lang d-flex': 'mb-lang d-none'}>
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
