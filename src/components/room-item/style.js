import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${props => props.viewWidth};
  .room_item {
    cursor: pointer;
    box-sizing: border-box;
    padding: 8px;
    margin-left: -8px;
    margin-right: 12px;
    margin-bottom: 20px;


    .room_item_img {
      position: relative;
      padding: 66.66% 8px 0;
      
      
      > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }

    .verify_info {
      font-size: 12px;
      margin: 10px 0 5px;
      font-weight: 700;
      color: #39576a;
    }
    
    .listItem_name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;  // 超出部分省略号显示
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    
    .price_format {
      margin: 8px 0;
      font-size: 14px;
    }
    .pinf_father{
      font-size: 8px;
      display: flex;
      align-items: center;
      

      .pingf {
        ul {
          font-size: 8px;
          color: #00848A;
          margin-top: -20px;

          li {
            margin: 0;
          }
        }
      }
    }
   
    .pinf_size {
      font-weight: 600;
      color: #484848;
      margin-top:2px
    }
  }
`