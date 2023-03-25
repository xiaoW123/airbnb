
import styled from "styled-components";

export const ShowWrapper = styled.div`
width: 1032px;
margin: 0 auto;

.box {
  position: relative;
  width: 400px;
  height: 150px;
  border: 2px solid red;
  padding-top: 50px;
  overflow: hidden;
}


.box_b {
  margin-bottom: 10px;
  display: flex;
  div {
    cursor: pointer;
    width: 50px;
    height: 30px;
    border: 2px solid red;
  }
}

.box_a {
  /* position: absolute; */
  display: flex;
 > div {
  text-align: center;
  line-height: 100px;
    border-radius: 50%;
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    border: 2px solid red;
  }
}
.active {
  background-color: black;
  color: #fff;
}
`