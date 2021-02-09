import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow:hidden;
  // 触发BFC 感受子元素HomeLeft和HomeRight的高度，不会因为子元素浮动而塌陷
  width:960px;
  margin:0 auto;
`

export const HomeLeft = styled.div`
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:625px;
  z-index:1;
  .banner-img {
    width:625px;
    height:270px;
  }
`

export const TopicWrapper = styled.div`
  overflow:hidden;
  padding: 10px 0 10px 0;
  margin-left: -15px;
  border-bottom: 1px solid #dcdcdc;
  .more {
    line-height:32px;
    margin-left:20px;
    color:#777;
    font-size:13px;
  }
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin: 0 15px;
  padding-right:10px;
  background: #fcfcfc;
  fone-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  .link {
    color:#222
  }
  .logo {
    display:block;
    float:left;
    height:26px;
    width:26px;
    margin:3px 10px;
  }
`

export const ListItem = styled.div`
  overflow:hidden;
  position: relative;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic {
    float:right;
    margin:10px 0;
    display:block;
    width:125px;
    height: 100px;
    object-fit:cover;
    border-radius:10px;
  }
`

export const ListInfo = styled.div`
  float:left;
  width:500px;
  .title {
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .description {
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:4;
    line-height:18px;
    font-size:13px;
    color:#aaa;
  }
`

export const ArticleInfo = styled.div`
  position:absolute;
  bottom:10px;
  font-size:12px;
  color:#666;
  .iconfont{
    margin-right:5px;
  }
  .comment{
    float:left;
    margin-right:10px;
  }
  .like{
    float:left;
  }
`

export const LoadMore = styled.div`
  width:40%;
  height:40px;
  line-height:40px;
  margin: 10px 30%;
  text-align:center;
  background:#fff;
  border-radius:20px;
  border: 1px solid #ea6f5a;
  color:#ea6f5a;
  cursor:pointer;
`

export const HomeRight = styled.div`
  float:right;
  width:280px;
`

export const RecommendWrapper = styled.div`
  margin:30px 0;
  width:280px;
`

export const RecommendItem = styled.div`
  position: relative;
  display: block;
  width:280px;
  height:85px;
  line-height:85px;
  margin-bottom:5px;
  background:url(${(props) => props.imgUrl});
  background-size:cover;
  .link{
    position:absolute;
    left:35px;
    color: #fff;
    font-size: 15px;
    text-decoration:none;
    .iconfont{
      margin-right:8px;
    }
  }
`

export const WriterWrapper = styled.div`
  width:278px;
  height:300px;
  margin:60px 0;
  // border:1px solid #ccc;
  border-radius: 3px;
  text-align:center
`

export const ListTitle = {
  display: "inline",
  float: "left",
  marginBottom: "15px",
  fontWeight: "700"
}


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