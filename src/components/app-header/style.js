// 使用CSS-in-JS
import styled from "styled-components";

// Wrapper：包装的意思
export const HeaderWrapper = styled.div`
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