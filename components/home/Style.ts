import styled from 'styled-components'

export const Ul = styled.ul`
  list-style: none;
`
export const Li = styled.li<{ primary: boolean }>`
  margin: auto;
  display: flex;
  width: 80%;
  border-top: solid 1px #6e6e6e;
  padding: 50px;
  flex-direction: ${(props) => (props.primary ? 'row-reverse' : 'row')};
`
export const Img = styled.img`
  width: 40%;
  height: auto;
  object-fit: contain;
`
export const Content = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const TextWrapper = styled.div`
  width: 80%;
  padding: 30px
  margin: auto;
  color: #37548f;
  background-color: #F9F9F9;
`
export const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`
export const Text = styled.div`
  margin-bottom: 20px;
  line-height: 160%;
`
export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  width: 80px;
`
export const Icon = styled.div<{ src: any }>`
  width: 27px;
  height: 27px;
  display: block;
  user-select: none;
  background-size: cover;
  background-image: url(${(p: any) =>
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
