// 使用CSS-in-JS
import styled from "styled-components";

// Wrapper：包装的意思
export const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgb(242, 242, 242);
  /* height: ${props => props.isSearch ? "150px" : "0"}; */

  .app_header{
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 24px;

    .app_header_left {
      flex: 1;
      color: ${props => props.theme.color.primaryColor};
    }

    .app_header_center {
      box-sizing: border-box;
      display: flex;
      width: 300px;
      height: 48px;
      border: 1px solid #ddd;
      border-radius: 24px;
      align-items: center;
      font-weight: 600;
      padding: 0 0 0 20px;
      cursor: pointer;
      /* 添加hover */
      ${props => props.theme.mixin.boxShadow}

      .search_bar {
        width: 240px;
      }
    
      .search_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: ${props => props.theme.color.primaryColor};
        
      }
    }

    .app_header_right{
      display: flex;
      justify-content: flex-end;
      flex: 1;

      .bnts  {
        display: flex;
        align-items: center;
        width: 162px;
        height: 42px;
        text-align: center;
        font-weight: 600;
        
        span {
          flex: 1;
          height: 42px;
          line-height: 42px;
          box-sizing: border-box;
          border-radius: 22px;

          &:hover {
            background-color: #f5f5f5;
          }
        }

      

        .span_avg {
          border-radius: 50%;
          svg{
            padding: 12px 19px;
          }
        }

      }
      
      .profile {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 77px;
        border:1px solid #ccc;
        border-radius: 25px;
        padding: 0 10px;

        svg {
          flex: 1;
        }
        ${props => props.theme.mixin.boxShadow}
      }
    }
  }`

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 0.5s ease;
  } 

  .seach_title {
    display: flex;
    width: 200px;
    height: 40px;
    >div {
      flex: 1;
      text-align: center;
      line-height: 40px;
    }
  }
  .border_bottom {
    border-bottom: 3px solid rgb(255, 56, 92);
  }
.box_info {
  /* transition: all 1s ease; */

}
.search_info {
  width: 850px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  border: 1px solid rgb(242, 242, 242);
  border-radius: 60px;
  align-items: center;
  margin-bottom: 10px;

  ${props => props.theme.mixin}

  >div:nth-child(2) {
    border-left:2px solid  rgb(242, 242, 242);
  } 
  >div:nth-child(3) {
    border-left:2px solid  rgb(242, 242, 242);
  } 
  >div {
    flex: 1;
    padding-left: 20px;
  }
  .title {
    font-size: 12px;
    font-weight: 800;
    color: rgb(72, 72, 72);
  }
  .desc {
    margin-top: 5px;
    font-size: 14px;
    color: rgb(102, 102, 102);
  }

}`