import styled from 'styled-components'

export const DetailWrapper = styled.div`
  overflow:hidden;
  width:640px;
  margin:0 25%;
  padding-bottom:100px;
`

export const Title = styled.div`
  margin:50px 0 10px 0;
  line-height: 44px;
  font-size:34px;
  color:#333;
  font-weight:700;
`

export const Content = styled.div`
  color:#2f2f2f;
  img {
    width:100%;
  }
  p {
    margin:25px 0;
    font-size:16px;
    line-height:30px;
  }
`

export const Infos = styled.div`
  height:30px;
  line-height:30px;
  margin:15px 0 30px 0;
  color:#888;
  font-size:13px;
  .time{
    margin-left:20px;
  }
  .read{
    float:right;
  }
`

export const Up = styled.div`
  height:50px;
  width:50px;
  line-height:50px;
  border-radius:25px;
  border:1px solid #ea6f5a;
  color:#ea6f5a;
  background-color:#fff;
  text-align:center;
  font-size:16px;
  font-weight:700;
`
