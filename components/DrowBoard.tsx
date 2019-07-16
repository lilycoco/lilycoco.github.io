export const brockColors = ['navy', 'darkmagenta', 'orangered', 'yellow', 'deeppink', 'limegreen']

export const DrowBoard = (defaultBoard: number[][]) => {
  return defaultBoard.map((line: number[], colNo: number) => (
    <div key={colNo} style={{ display: 'flex' }}>
      {line.map((num: number, rowNo: number) => (
        <div
          key={rowNo}
          className={'block ' + (!num && 'clear')}
          style={
            num
              ? {
                  backgroundColor: brockColors[num - 1],
                  border: '5px outset rgba(255, 255, 255, 0.568)',
                }
              : undefined
          }
        ></div>
      ))}
    </div>
  ))
}
