export default function ExportCard(props) {
  function handleClick(){
    props.handleNewsClick(props);
  }
  return (

    <div class="card" data-aos="zoom-in" onClick={handleClick}>
      <div class="card-thumbnail">
        <img
          src={props.thumbnail}
          alt=""
        />
        <div className="no-preview" style={{display : props.thumbnail !== null ? 'none' : 'unset'}}>
          <h1>Sorry the provider didn’t provide any thumbnails</h1>
        </div>
      </div>
      <div class="card-content">
        <div class="content-top">
          <span>{props.src}</span>
          <h4>
          {props.title}
          </h4>
        </div>
        <p>{props.date.split(' ')[0]}</p>
      </div>
    </div>
  );
}
