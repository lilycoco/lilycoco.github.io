import { EProps } from '../../models/Tictac'

export const Square = (props: EProps) => {
  return (
    <button className={'square ' + props.className} onClick={props.onClick}>
      {props.value}
      <style>
        {`
          .square {
            background: #fff;
            border: 1px solid #999;
            float: left;
            font-size: 24px;
            font-weight: bold;
            line-height: 34px;
            height: 34px;
            margin-right: -1px;
            margin-top: -1px;
            padding: 0;
            text-align: center;
            width: 34px;
          }
          .square:focus {
            outline: none;
          }
          .kbd-navigation .square:focus {
            background: #ddd;
          }
          .highlight {
            background: yellow;
          }
        `}
      </style>
    </button>
  )
}
