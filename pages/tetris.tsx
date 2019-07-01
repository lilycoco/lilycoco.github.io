// import React, { useState, useEffect } from 'react'
// import { Layout } from '../components/Layout'
// import { TetrisShape } from '../components/TetrisShape'

// import styled from 'styled-components'

// function Game() {
//   const [board, setBoard] = useState([Array(20).fill(Array(10).fill(0))])
//   console.log(board)
//   console.log(TetrisShape)

//   let block = Math.floor(Math.random()*27); //テトリスの形 ランダム表示
//   let wid = 0; //テトリスの横の位置
//   let len = 0; //テトリスの高さ

//   const drawBoard = () => {
//     let newBoard = $.extend(true, [], board); // board をディープコピー
//     tetris[block].forEach((a, aa) => a.forEach((b, bb) =>{
//       if(b === 1 ) newBoard[aa + len][bb + wid + 4] = color + 1; // newBoard にtetrisを表示
//     }))

//     let boards="";
//     newBoard.forEach((a) => a.forEach((b) =>{
//       boards += blockColor[b] + "</div>";   // 画面上に表示
//     }))

//     $("#boardArea").append(boards);
//     blockClass.forEach((a, b) => $(a).css("backgroundColor",colors[b]))  // 色表示設定
//   }

//   return (
//     <div>
//       <div className="boardArea"></div>
//       <div className="tetrisArea"></div>
//       <style>
//         {`
//         .boardArea{
//           width: 319px;
//           height:auto;
//           border-collapse: collapse;
//           box-sizing: border-box;
//           table-layout: fixed;
//           margin:auto;
//           padding-top: 100px;
//         }
//         .tetrisArea{
//           position: relative;
//           width: 319px;
//           padding-top:0px;
//           height:600px;
//         }
//         .noColor, .color0, .color1, .color2, .color3, .color4, .color5{
//           box-sizing: border-box;
//           background-color: rgb(15, 15, 27);
//           border:1px solid rgba(0, 0, 0, 0.253);
//           width:30px;
//           height:30px;
//           text-align: center;
//           float: left;
//         }
//         .color0, .color1, .color2, .color3, .color4, .color5{
//           border:5px outset rgba(255, 255, 255, 0.568);
//         }
//         .tetrisWrapper{
//           position:absolute;
//           top:-30;
//           left:120;
//         }
//         .block{
//           border-collapse: collapse;
//         }
//         .flex{
//           display: flex;
//         }
//         .blank{
//           width:30px;
//           height:30px;
//         }
//         `}
//       </style>
//     </div>
//   )
// }

// // ========================================

// export default class Tetris extends React.Component<{ contents: any }> {
//   public render() {
//     return (
//       <Layout>
//         <Game />
//       </Layout>
//     )
//   }
// }
