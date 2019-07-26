import styled from 'styled-components'

export const Cover = styled.div`
  background-image: url('/static/pic/monet_water_lilies.jpg');
  height: 800px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`
export const Opacity = styled.div`
  background: rgba(255, 255, 255, 0.3);
  height: 800px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const TytleWrapper = styled.div`
  width: 600px;
  text-align: center;
  margin: auto;
  height: 200px;
  color: #37548f;
`
export const Title = styled.h1`
  font-size: 45px;
  margin: 20px;
  font-weight: bold;
`
export const Text = styled.div`
  font-size: 15px;
  margin: 10px 0 30px;
`
