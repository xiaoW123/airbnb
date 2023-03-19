import styled from "styled-components";

export const V1Wrapper = styled.div`
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
  .item_box {
    overflow: hidden;
  }
  .item_father {
    width: 1500px;
    transition: transform 200ms ease;
    box-sizing: border-box;
    display: flex;
    

    .item_son {
      position: relative;
      box-sizing: border-box;
      width: 187px;
      height: 250px;   
      flex-shrink: 0;
      margin-right: 20px;

      .titel_price {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 100px;
        color: #fff;
        z-index: 100;
        &>div:nth-child(1) {
          font-size: 18px;
          font-weight: 600;
        }
        &>div:nth-child(2) {
          font-size: 14px;
          margin-top: 5px;
        }
      }
      .bgc {
        width: 100%;
        height: 50%;
        position: absolute;
        left: 0;
        top: 110px;
        background-image: linear-gradient(-180deg,rgba(0,0,0,0) 3%,rgb(0,0,0) 100%);
      }
    }
    .item_img {
      >img {
        width: 100%;
      }
    }

  }

`