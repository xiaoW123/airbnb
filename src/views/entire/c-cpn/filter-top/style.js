import styled from "styled-components";
export const FilterWrapper = styled.div`
  position: fixed;
  z-index: 9;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  padding: 10px;
  width: 100%;
  margin-top: 80px;
  border-bottom: 1px solid rgb(242, 242, 242);

  .filter_father {
    display: flex;

    .filter_item {
      cursor: pointer;
      padding: 10px 12px;
      margin-right: 10px;
      border-radius: 4px;
      border: 1px solid rgb(242, 242, 242);
    }
  }
  .active {
    background: rgb(0, 132, 137);
    border: 1px solid rgb(0, 132, 137);
    color: rgb(255, 255, 255);
  }
  
`