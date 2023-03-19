import styled from "styled-components";

export const Vwrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 48px 24px;
 
  .V3_title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .V3_subtitle {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .item_box1{
    overflow: hidden;
  }
  .item_box2 {
    width: 2100px;
    display: flex;
    flex-shrink:0 ;
    transition: transform 200ms ease;
    .box_item{
      flex: 1;
    }
  }

`