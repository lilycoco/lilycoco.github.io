import css from 'styled-jsx/css'

export default css`
  .boardWrapper {
    position: relative;
    width: 250px;
    background-color: rgb(15, 15, 27);
    height: 600px;
  }
  .newBoard,
  .board {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
  }
  .line {
    display: flex;
  }
  .block {
    width: 30px;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.253);
    border-collapse: collapse;
    text-align: center;
    box-sizing: border-box;
    color: white;
    line-height: 30px;
  }
  .clear {
    background-color: rgb(254, 254, 254, 0);
  }
  .color0,
  .color1,
  .color2,
  .color3,
  .color4,
  .color5 {
    border: 5px outset rgba(255, 255, 255, 0.568);
  }
  .btn {
    margin-top: 30px;
  }
`
