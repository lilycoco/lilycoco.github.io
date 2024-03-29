/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Board } from "./Board";
import { GameOverSign } from "./GameOverSign";
import { BoardArea, blockColors } from "./Style";
import { Buttons } from "./Buttons";
import { MainContents } from "../Style";
import {
  blockShape,
  aBlock,
  initialX,
  initialBoard,
  addNewBlockToBoard,
  deleteALineOfBlockOnBoard,
  checkForward,
  judgeGameOver,
} from "../../lib/tetris";

export const Game = () => {
  const [currentBlock, setCurrentBlock] = useState({ color: 1, shape: 0 });
  const [running, setRunning] = useState(false);
  const [currentBlockPosition, setCurrentBlockPosition] = useState({
    x: initialX,
    y: -blockShape[currentBlock.shape].length,
  });
  const [currentBoard, setCurrentBoard] = useState(initialBoard);
  const [gameOver, setGameOver] = useState(false);
  const intervalRef = useRef();

  const rotateCurrentBlock = () => {
    const randomColor = Math.floor(Math.random() * blockColors.length) + 1;
    const randomShape = Math.floor(Math.random() * (blockShape.length - 1));
    setCurrentBlock({ color: randomColor, shape: randomShape });
  };

  const addedNewBlockBoard = () =>
    addNewBlockToBoard(currentBoard, currentBlockPosition, currentBlock);

  const deletedALineOfBlockBoard = deleteALineOfBlockOnBoard(
    addedNewBlockBoard(),
  );

  const canGoForward = (positionWhenKeyDown: number, key: string) =>
    checkForward(
      positionWhenKeyDown,
      key,
      currentBlockPosition,
      currentBlock.shape,
      currentBoard,
    );

  const downHandler = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "ArrowDown":
        setCurrentBlockPosition((p) => ({
          ...p,
          y: canGoForward(p.y, key) ? p.y + aBlock : p.y,
        }));
        break;
      case "ArrowRight":
        setCurrentBlockPosition((p) => ({
          ...p,
          x: canGoForward(p.x, key) ? p.x + aBlock : p.x,
        }));
        break;
      case "ArrowLeft":
        setCurrentBlockPosition((p) => ({
          ...p,
          x: canGoForward(p.x, key) ? p.x - aBlock : p.x,
        }));
        break;
      case "ArrowUp":
        setCurrentBlock((b) => ({
          ...b,
          shape: (b.shape + 1) % 4 === 0 ? b.shape - 3 : b.shape + 1,
        }));
    }
  };

  const intervalProcessing = () => {
    if (running) {
      if (judgeGameOver(currentBoard)) {
        setGameOver(true);
        setRunning(false);
      }
      if (canGoForward(currentBlockPosition.y, "ArrowDown")) {
        setCurrentBlockPosition((p) => ({ ...p, y: p.y + aBlock }));
      } else {
        if (deletedALineOfBlockBoard) {
          setCurrentBoard(deletedALineOfBlockBoard);
        } else {
          setCurrentBoard(addedNewBlockBoard());
        }
        setCurrentBlockPosition({ x: initialX, y: 0 });
        rotateCurrentBlock();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    const flowBlock: any = setInterval(intervalProcessing, 600);
    intervalRef.current = flowBlock;
    if (gameOver) {
      clearInterval(intervalRef.current);
    }
    return () => {
      window.removeEventListener("keydown", downHandler);
      clearInterval(intervalRef.current);
    };
  }, [intervalProcessing]);

  const toggleRunning = () => setRunning(!running);

  const clearAll = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setGameOver(false);
    setCurrentBoard(initialBoard);
    setCurrentBlockPosition({
      x: initialX,
      y: -blockShape[currentBlock.shape].length,
    });
  };

  return (
    <MainContents>
      <BoardArea>
        <Board currentBoard={addedNewBlockBoard()} />
        {gameOver ? <GameOverSign /> : null}
      </BoardArea>
      <Buttons
        toggleRunning={toggleRunning}
        running={running}
        clearAll={clearAll}
      />
    </MainContents>
  );
};
