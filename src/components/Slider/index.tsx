import { Container } from "./styles";

import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },

    breakpoints: {
      "(max-width: 1000px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(max-width: 663px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
    },
  });

  return (
    <Container>
      <h1>Technologies</h1>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <Tooltip title="React" placement="top">
            <div className="keen-slider__slide number-slide2">
              <IoLogoReact />
              React
            </div>
          </Tooltip>
          <Tooltip title="TypeScript" placement="top">
            <div className="keen-slider__slide number-slide3">
              <SiTypescript />
              TypeScript
            </div>
          </Tooltip>
          <Tooltip title="JavaScript" placement="top">
            <div className="keen-slider__slide number-slide4">
              <IoLogoJavascript />
              JavaScript
            </div>
          </Tooltip>
          <Tooltip title="NodeJs" placement="top">
            <div className="keen-slider__slide number-slide8">
              <FaNodeJs />
              NodeJS
            </div>
          </Tooltip>
          <Tooltip title="GitHub" placement="top">
            <div className="keen-slider__slide number-slide1">
              <FaGithub />
              GitHub
            </div>
          </Tooltip>
          <Tooltip title="Git" placement="top">
            <div className="keen-slider__slide number-slide7">
              <FaGitAlt />
              Git
            </div>
          </Tooltip>
          <Tooltip title="Linux" placement="top">
            <div className="keen-slider__slide number-slide5">
              <FcLinux />
              Linux
            </div>
          </Tooltip>
          <Tooltip title="TailwindCss" placement="top">
            <div className="keen-slider__slide number-slide6">
              <SiTailwindcss />
              TailwindCss
            </div>
          </Tooltip>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </Container>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
