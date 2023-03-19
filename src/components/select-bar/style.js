import styled from "styled-components";

export const BarWrapper = styled.div`
  .selectbar-father {
    position: relative;
    width: 1032px;
    overflow: hidden;
    margin: 14px 0;
    
  }
  .selectBar {
    box-sizing: border-box;
    display:flex;
    transition: transform 200ms ease;
    /* margin-left: -272px; */

    div {
      cursor: pointer;
      flex-shrink: 0;
      width: 120px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border:0.5px solid #D8D8D8;
      margin-right: 16px;
      ${props => props.theme.mixin.boxShadow};

      &:last-child {
        margin-right: 0;
      }
      &.active {
        color: #fff;
        background-color: ${props => props.theme.color.secondaryColor};
      }
    } 
  }

`