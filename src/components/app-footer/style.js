import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  border-top: 1px solid #EBEBEB;
  .wrapper {
    width: 1080px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 24px;
  }

  .app_footer {
    display: flex;


    .footer_item {
      flex: 1;
      
      .footer_item_name {
        font-weight: 600;
        margin-bottom: 16px;
      }

      .footer_item_list {
        margin-top: 6px;
        color: #767676;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .statement {
    width: 1080px;
    margin: 0 auto;
    border-top: 1px solid #EBEBEB;
    padding: 20px 0;
    text-align: center;
    color: #767676;
  }


`