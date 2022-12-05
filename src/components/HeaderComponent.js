import React from 'react';

function HeaderComponent(props){

  const {homePath, logoTitle, imgSrc, imgAlt} = props;

  // 상태관리
  const [addClass1, setAddClass1] = React.useState(false);
  const [addClass2, setAddClass2] = React.useState(false);
  const [addClass3, setAddClass3] = React.useState(false);
  const [addClass4, setAddClass4] = React.useState(false);

  const onMouseEnter1=()=>{
    setAddClass1(true);

    setAddClass2(false);
    setAddClass3(false);
    setAddClass4(false);
  }
  const onMouseEnter2=()=>{
    setAddClass2(true);

    setAddClass1(false);
    setAddClass3(false);
    setAddClass4(false);
  }
  const onMouseEnter3=()=>{
    setAddClass3(true);

    setAddClass1(false);
    setAddClass2(false);
    setAddClass4(false);
  }
  const onMouseEnter4=()=>{
    setAddClass4(true);

    setAddClass1(false);
    setAddClass2(false);
    setAddClass3(false);
  }

  // addClass - false
  const onMouseLeaveAddClass=()=>{
    setAddClass1(false);
    setAddClass2(false);
    setAddClass3(false);
    setAddClass4(false);
  }

  return (
    <header id="header">
      <div className="left">
        <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt}/></a></h1>
      </div>
      <div className="right">
        <nav id="nav" onMouseLeave={onMouseLeaveAddClass}>
          <ul>
            <li>
                <a 
                onMouseEnter={onMouseEnter1}
                className={addClass1 ? 'main-btn on' : 'main-btn'} 
                href="!#" 
                title="재단소개"
                >재단소개</a>
                <div className={addClass1 ? 'sub sub1 on' : 'sub sub1'}>
                  <div className="container">
                    <ul>
                      <li> 
                        <ul>
                          <li><a href="!#" title="설립취지">설립취지</a></li>
                          <li><a href="!#" title="연혁">연혁</a></li>
                          <li><a href="!#" title="찾아오시는길">찾아오시는길</a></li>
                        </ul>
                      </li>
                      <li> 
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                      <li> 
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                    </ul>
                  </div>
                </div>
            </li>
            <li>
                <a 
                onMouseEnter={onMouseEnter2}
                href="!#" 
                className={addClass2 ? 'main-btn on' : 'main-btn'}
                title="후원하기"
                >후원하기</a>
                <div className={addClass2 ? 'sub sub2 on': 'sub sub2'}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          <li><a href="!#"국내후원>국내후원</a></li>
                          <li><a href="!#"국외후원>국외후원</a></li>
                          <li><a href="!#"맞춤후원>맞춤후원</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                    </ul>
                  </div>
                </div>
            </li>
            <li>
                <a 
                onMouseEnter={onMouseEnter3}
                href="!#" 
                className={addClass3 ? 'main-btn on' : 'main-btn'}
                title="자료실"
                >자료실</a>
                <div className={addClass3 ? 'sub sub3 on': 'sub sub3'}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          <li><a href="!#" title="서식자료실">서식자료실</a></li>
                          <li><a href="!#" title="사진자료실">사진자료실</a></li>
                          <li><a href="!#" title="후원양식">후원양식</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                    </ul>
                  </div>
                </div>
            </li>
            <li>
                <a
                onMouseEnter={onMouseEnter4} 
                href="!#" 
                className={addClass4 ? 'main-btn on' : 'main-btn'}
                title="스토리"
                >스토리</a>
                <div className={addClass4 ? 'sub sub4 on': 'sub sub4'}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          <li><a href="!#" title="웹진">웹진</a></li>
                          <li><a href="!#" title="보고서">보고서</a></li>
                          <li><a href="!#" title="나의후원">나의후원</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                      <li>
                        <ul>
                          <li><a href="!#">서브메뉴1</a></li>
                          <li><a href="!#">서브메뉴2</a></li>
                          <li><a href="!#">서브메뉴3</a></li>
                        </ul>                      
                      </li>
                    </ul>
                  </div>
                </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

HeaderComponent.defaultProps = {
  logoTitle : 'Green 복지재단',
  homePath : './index.html',
  imgSrc : './images/logo.png',
  imgAlt : 'Green 복지재단 Logo',
  addClass : false
}

export default HeaderComponent;