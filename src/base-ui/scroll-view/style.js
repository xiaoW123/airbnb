import styled from "styled-components";

export const ScrollWrapper = styled.div`
  position: relative;
  .control {
    display: flex;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px solid #fff;
    background-color: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    ${props => props.theme.mixin.boxShadow}
  }
  .left {
    position: absolute;
    left: -15px;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
  }
  .right {
    position: absolute;
    right: 5px;
    transform: translateY(-50%);
    top: 50%;
    z-index: 10;
  }
` 