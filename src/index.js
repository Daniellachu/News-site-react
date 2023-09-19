import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import styles from './index.css'



// import App from "./App";

function App() {
  return (
    <News className="mainContainer">
      <Title title=" the daily techtalk"/>
      <div>
        <Story
          image="https://images.unsplash.com/photo-1634804658555-248d9e9a212f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVybCUyMHRlc2xhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          article={"Tesla recall for heater and defroster systems issued by Transport Canada"}
          author="Maria Merano"
          description="Transport Canada issued a recall for the Tesla Model 3,
          Model Y, and Model S on February 3, 2022, the agency told Teslarati
          recently."
          link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
        />
        <Story
          image="https://images.unsplash.com/photo-1561580125-028ee3bd62eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHVybCUyMHRlc2xhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          article="Tesla’s next facility in China may be located in Shenyang: local gov’t"
          author="Maria Merano"
          description="On Friday, February 11, the Liaoning Province hinted that Tesla was searching for a second Gigafactory in China."
          link="https://www.teslarati.com/tesla-gigafactory-shenyang/"
        />
        <Story
          image="https://placehold.co/600x400"
          article="Tesla Model Y = Top Selling SUV in California in 2021"
          author="Zachary Shahan"
          description="It’s hard to believe, even as someone who has been placed firmly on the Tesla bull list for a decade, but the Tesla Model Y ended 2021 as the top selling SUV or truck in California! That is across all types of SUVs and trucks."
          link="https://cleantechnica.com/2022/02/13/tesla-model-y-top-selling-suv-in-california-in-2021/"
        />
        <Story
          image="https://placehold.co/600x400"
          article="“Don’t Look Up” actor confirms Elon Musk was inspiration for “dangerous” billionaire character"
          author="Simon Alvarez"
          description="There is a reason why the apocalyptic black comedy film Don’t Look Up is now being considered as one of the nominees for Best Picture in the 2022 Academy Awards."
          link="https://www.teslarati.com/elon-musk-dont-look-up-peter-isherwell-inspiration-confirmed/"
        />
        <Story
          image="https://placehold.co/600x400"
          article="Musk pushes the boundaries in Tesla autonomous campaign"
          author="Simon Alvarez"
          description="NEW YORK, Feb 13 — Tesla Chief Executive Elon Musk often touts the arrival of completely autonomous vehicles as imminent, but exactly how close that future is for the electric automaker remains murky. "
          link="https://www.malaymail.com/news/drive/2022/02/13/musk-pushes-the-boundaries-in-tesla-autonomous-campaign/2041263"
        />
      </div>
    </News>
  );
}

function News(props) {
  return (
    <div className="newsContainer">
      <div className="title">
        {props.children}
      </div>
    </div>
  );
}

function Title(props) {
  return <h1 className="newsSiteTitle">{props.title}</h1>;
}

function Story(props) {

  function handleDelete(e) {
    // alert(e.target === e.currentTarget);
    if (e.target !== e.currentTarget) {
      e.currentTarget.remove();
    }
  }

  let image;

  if (!props.image) {
    image = "https://placehold.co/600x400";
  } else {
    image = props.image;
  }
  return (
    <div className="storyContainer" onClick={handleDelete}>
      <div className="storySectionTop">
        <img 
          className="image" 
          src="https://images.unsplash.com/photo-1634804658555-248d9e9a212f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVybCUyMHRlc2xhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          alt="" 
          width={300}
          height={200}
        />
        <div>
          <a className="newsArticle" href={props.link}>
            <p >{props.article}</p>
          </a>
        </div>
        <span 
          onClick={handleDelete}
          className="closeButton"
        >x</span>
        
      </div>
      <div className="newsImage">
        <image>
          {/* {props.image} */}
        </image>
      </div>
      <p className="newsDescription">
        {props.description}
      </p>
      <div className="newsAuthor">
        <p>
          By: {props.author}
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

