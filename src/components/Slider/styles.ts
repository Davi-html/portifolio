import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 40px 0px 10px 0;
    color: #8b5cf6;
  }
  
  [class^="number-slide"],
  [class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #fff;
    font-weight: 500;
    height: 200px;
    max-height: 100vh;
  }

  .keen-slider__slide:hover {
    background: rgb(138 66 219 / 4%);
  }

  .number-slide1 {
    background: rgb(64, 175, 255, 0);
    border: 1px solid white;
  }

  .number-slide2 {
    background: rgb(64, 175, 255, 0);
    border: 1px solid white;
    color: #61DBFB;
  }
  
  .number-slide3 {
    background: rgb(64, 175, 255, 0);
    border: 1px solid white;
    color: #2D79C7;
  }
  
  .number-slide4 {
    background: rgb(64, 175, 255, 0);
    border: 1px solid white;
    color: #F7E018;
  }

  .number-slide5 {
    background: rgb(64, 175, 255, 0);
    border: 1px solid white;
  }
  
  .number-slide6 {
    background: rgb(64, 175, 255, 0);
    border: 1px solid white;
    color: #38BDF8;
  }

  .number-slide7 {
    background: rgb(64, 175, 255, 0);
    border: 1px solid white;
    color: #FF5C29;
    
  }

  .number-slide8 {
    background: rgb(64, 175, 255, 0);
    border: 1px solid white;
    color: #93C745;
    
  }

  .number-slide9 {
    background: rgb(64, 175, 255, 0);
    border: 1px solid white;
    color: white;
    font-size: 30px;
    img {
      width: 50px;
      height: 50px;
    }
    
  }

  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }

`;

