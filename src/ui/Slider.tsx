import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoPlayer = withAutoplay(AwesomeSlider);

const getDate = (date) => new Intl.DateTimeFormat("ru-RU").format(date);
type SlideProps = {
  data: any /*{
    date: number;
    header: string;
    img: string;
  }[]; */;
};
function Slide(props: SlideProps) {
  /*const container:CSSProperties = {
    height: '90%',
    width: '90%',
    position: 'relative'
  }
  const image:CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0
  }
  const p:CSSProperties = {
    zIndex: 100,
    position: 'absolute',
    color: 'white',
    //fontSize: '24px',
    //fontWeight: 'bold', 
    left: '50%',
    top: '80%'
  } */
  return (
    <div style={{ display: "inline-flex" }}>
      {props.data.map((el, i) => {
        return (
          <div key={i}>
            <div>
              <img
                width="300"
                height="300"
                src={el.img}
                alt={props.data.header}
              />
              <p>{getDate(props.data.date)}</p>
            </div>
            <h2>{el.header}</h2>
          </div>
        );
      })}
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Slider() {
  const [news, setNews] = React.useState([]);
  //TODO: create DB for storing news
  React.useEffect(() => {
    fetch("news.json")
      .then((data) => data.json())
      .then((data) => {
        setNews(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {news.length !== 0 ? (
        <AutoPlayer
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={1 / 0} //FIXME: delete autoplayer (replace with basic Slider)
        >
          {news.map((item, i) => {
            return (
              <div key={i}>
                <Slide data={item} />
              </div>
            );
          })}
        </AutoPlayer>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Slider;
