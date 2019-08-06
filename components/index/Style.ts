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
  margin: 20px 0;
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  width: 70px;
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
export const DeployDate = styled.small`
  text-align: right;
  display: block;
`
export const JumboTron = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0;
`
export const JumboTronHeading = styled.h1`
  font-weight: 400;
`
export const JumboTronContainer = styled.div`
  max-width: 40rem;
  color: #1e376d;
`
