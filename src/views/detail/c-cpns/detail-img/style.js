import styled from "styled-components";
export const ImgWrapper = styled.div`
.box_main {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 600px;
  background-color: black;
  overflow: hidden;


  .box_a {
    box-sizing: border-box;
    flex: 1;
    border: 2px solid black;
    overflow: hidden;

    img {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    transition: all 250ms ease;    

      &:hover{
        transform: scale(1.2);
        opacity: 1;
      }
    }
  }
    

  .box_b {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    border-top:2px solid black;
    

    overflow: hidden;
    div{
      overflow: hidden;
      box-sizing: border-box;
      width: 50%;
      height: 50%;

      border-right:2px solid black;
      border-bottom:2px solid black;
      /* margin-right: 2px; */
      /* margin:0 2px 2px 0; */
      img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        transition: all 250ms ease;    
          &:hover{
            transform: scale(1.2);
            opacity: 1;
          }
      }
    }
  }
}

.box_a {
  flex: 1;
}


`