import React, { useState, useEffect } from "react";
import Pepole from "./people";

const Slider = () => {
  const [people, setPeople] = useState(Pepole);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    }

    if (index > people.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const time = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(time);
    };
  }, [index, people]);
  return (
    <>
      <div className="display-5 d-flex justify-content-center mt-5">
        <p className=""> Reviews</p>
      </div>
      <div className="slider">
        {people.map((person, personIndex) => {
          const { name, age, img, review } = person;
          let position = "next-slider";

          if (personIndex === index) {
            position = "active-slider";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "last-slider";
          }

          return (
            <div className={`article ${position}`}>
              <div className="article-img d-flex justify-content-center">
                <img src={img} alt="" />
              </div>

              <div className="article-details">
                <h3>{name}</h3>
                <h5>Age : {age}</h5>
                <p>{review}</p>
              </div>

              <div className="article-btn d-flex justify-content-center">
                <button
                  className="btn mx-5 text-primary"
                  onClick={() => {
                    setIndex(index - 1);
                  }}
                >
                  {" "}
                  <i class="fas  fa-arrow-left    "></i>
                </button>
                <button
                  className="btn mx-5 text-primary"
                  onClick={() => {
                    setIndex(index + 1);
                  }}
                >
                  {" "}
                  <i class="fas  fa-arrow-right    "></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
