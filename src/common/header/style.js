import styled from 'styled-components'
import logoPic from '../../statics/logo-lol.png'


export const HeaderWrapper = styled.div`
  position: sticky;
  top:0;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background-color:#fff;
  z-index:9;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) no-repeat center;
  background-size: contain;
`

export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.a`
  line-height:56px;
  padding:0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float:left;
  }
  &.right {
    float:right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const NavHome = {
  float: "left",
  lineHeight: "56px",
  padding: "0 15px",
  fontSize: "17px",
  color: "#ea6f5a",
}

export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .zoom {
    position:absolute;
    right:5px;
    bottom:4px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused {
      background:#777;
      color:#fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 19px;
  box-sizing: border-box;
  border: 1px solid #eee;
  outline:none;
  border-radius: 19px;
  background:#eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width:240px;
  }
  &.slide-enter{
    width: 160px;
    transition: all .2s ease-out;
  };
  &.slide-enter-active{
    width: 240px;
  };
  &.slide-exit{
    transition: all .2s ease-out;
  };
  &.slide-exit-active{
    width:160px;
  };
`

export const SearchInfo = styled.div`
  position:absolute;
  left:20px;
  top:56px;
  width:240px;
  padding:0 20px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  cursor:pointer;
  color:#969696;
  .spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-in;
    transform-origin:center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;


export const SearchInfoItem = styled.a`
  line-height:20px;
  float:left;
  padding:0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg{
    color:#ec6149;
  }
  &.writing{
    color:#fff;
    background:#ec6149;
  }
`

export const Login = {
  lineHeight: "56px",
  paddingRight: "20px",
  fontSize: "17px",
  color: "#333",
  float: "right",
  color: "#969696",
}


export const UserWrapper = styled.div`
  width:300px;
  float:'right'
`

export const UserAvatar = {
  float: "right",
  marginTop: "8px",
  marginRight: "10px",
}

export const UserName = styled.span`
  float:right;
  margin-right:10px;
  height:58px;
  line-height:58px;
  font-size:15px;
  color: #333;
`

