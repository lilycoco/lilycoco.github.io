import styled from 'styled-components'

export const CoverImage = styled.div`
  background-image: url('/static/pic/monet_water_lilies.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
`
export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  width: 80px;
`
export const Icon = styled.div<{ src: { [key: string]: string | number } }>`
  width: 27px;
  height: 27px;
  display: block;
  user-select: none;
  background-size: cover;
  background-image: url(${(p) =>
    '/static/icon/' + p.src.icon + (p.src.num ? '_on.png' : '_off.png')});
  &:hover {
    width: 30px;
    height: 30px;
  }
`
export const Num = styled.div`
  font-size: 23px;
  text-align: center;
  width: 35px;
  user-select: none;
`
