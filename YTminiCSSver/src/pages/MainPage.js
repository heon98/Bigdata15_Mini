import HeaderLogIn from "../components/HeaderLogIn";
import HeaderOpenCloseMenu from "../components/HeaderOpenCloseMenu";
import HeaderSearchInput from "../components/HeaderSearchInput";
import HeaderSearchBtn from "../components/HeaderSearchBtn";
import HeaderYTLogo from "../components/HeaderYTLogo";
import SideMenuHomeBtn from "../components/SideMenuHomeBtn";
import SideMenuShortsBtn from "../components/SideMenuShortsBtn";
import SideMenuSubscribedBtn from "../components/SideMenuSubscribedBtn";
import SideMenuStorageBtn from "../components/SideMenuStorageBtn";
import SideMenuViewedHistBtn from "../components/SideMenuViewedHistBtn";
import SideMenuTrendingBtn from "../components/SideMenuTrendingBtn";
import SideMenuMusicBtn from "../components/SideMenuMusicBtn";
import SideMenuMoviesBtn from "../components/SideMenuMoviesBtn";
import SideMenuLiveBtn from "../components/SideMenuLiveBtn";
import Thumbnail from "../components/Thumbnail";
import VidTitleInfo from "../components/VidTitleInfo";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <div className="header">
        <div className="header1" />
        <div className="headerloginbtn">
          <HeaderLogIn />
          <div className="div">로그인</div>
          <img className="mask-group-icon" alt="" src="../mask-group.svg" />
        </div>
        <img
          className="headerspeaktosearchbtn-icon"
          alt=""
          src="../headerspeaktosearchbtn.svg"
        />
        <div className="headermorebtn">
          <button className="headermorebtn-child" />
          <img className="moreicon" alt="" src="../moreicon.svg" />
        </div>
        <div className="headeropenhidemenubtn">
          <div className="menubutton-wrapper">
            <button className="headermorebtn-child" />
          </div>
          <HeaderOpenCloseMenu />
        </div>
        <HeaderSearchInput />
        <div className="headersearchbutton">
          <HeaderSearchBtn />
          <img className="frame-icon" alt="" src="../frame.svg" />
        </div>
        <div className="headerytlogo">
          <HeaderYTLogo />
        </div>
      </div>
      <div className="sidemenu">
        <div className="sidemenubody" />
        <div className="sidemenu-child" />
        <div className="sidemenu-item" />
        <div className="sidemenuhomebtn">
          <SideMenuHomeBtn />
          <div className="div1">홈</div>
          <img className="group-icon" alt="" src="../group.svg" />
        </div>
        <button className="sidemenushortsbtn">
          <SideMenuShortsBtn />
          <div className="shorts">Shorts</div>
          <img className="shortsicon" alt="" src="../shortsicon.svg" />
        </button>
        <div className="sidemenusubscribedbtn">
          <SideMenuSubscribedBtn />
          <div className="div2">구독</div>
          <img className="subscribedicon" alt="" src="../subscribedicon.svg" />
        </div>
        <div className="sidemenustoragebtn">
          <SideMenuStorageBtn />
          <div className="div1">보관함</div>
          <img className="frame-icon1" alt="" src="../frame1.svg" />
        </div>
        <div className="sideviewhistorybtn">
          <SideMenuViewedHistBtn />
          <div className="div4">시청 기록</div>
          <img className="frame-icon2" alt="" src="../frame2.svg" />
        </div>
        <div className="sidemenucurrentlytrendingbtn">
          <SideMenuTrendingBtn />
          <div className="div5">인기 급상승</div>
          <img className="frame-icon3" alt="" src="../frame3.svg" />
        </div>
        <button className="sidemenumusicbtn">
          <SideMenuMusicBtn />
          <div className="div6">음악</div>
          <img className="frame-icon3" alt="" src="../frame4.svg" />
        </button>
        <button className="sidemenumoviesbtn">
          <SideMenuMoviesBtn />
          <div className="div6">영화</div>
          <img className="frame-icon2" alt="" src="../frame5.svg" />
        </button>
        <button className="sidemenulivebtn">
          <SideMenuLiveBtn />
          <div className="div6">실시간</div>
          <img className="frame-icon6" alt="" src="../frame6.svg" />
        </button>
      </div>
      <div className="tagsarea">
        <div className="tagsarea-child" />
        <div className="tagsarea-item" />
        <div className="tagsarea-inner" />
        <div className="rectangle-div" />
        <div className="tagsarea-child1" />
      </div>
      <div className="body">
        <div className="thumbnail">
          <Thumbnail />
        </div>
        <div className="thumbnail1">
          <Thumbnail />
        </div>
        <div className="thumbnail2">
          <Thumbnail />
        </div>
        <div className="thumbnail3">
          <Thumbnail />
        </div>
        <div className="thumbnail4">
          <Thumbnail />
        </div>
        <div className="thumbnail5">
          <Thumbnail />
        </div>
        <div className="thumbnail6">
          <Thumbnail />
        </div>
        <div className="thumbnail7">
          <Thumbnail />
        </div>
        <div className="vidtitleviewsetc">
          <VidTitleInfo />
          <div className="ipsum-lorem">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem2">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem4">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <img
            className="vidtitleviewsetc-child"
            alt=""
            src="../ellipse-5.svg"
          />
        </div>
        <div className="vidtitleviewsetc1">
          <VidTitleInfo />
          <div className="ipsum-lorem">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem2">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem4">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <img
            className="vidtitleviewsetc-child"
            alt=""
            src="../ellipse-5.svg"
          />
        </div>
        <div className="vidtitleviewsetc2">
          <VidTitleInfo />
          <div className="ipsum-lorem">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem2">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem4">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <img
            className="vidtitleviewsetc-child"
            alt=""
            src="../ellipse-5.svg"
          />
        </div>
        <div className="vidtitleviewsetc3">
          <VidTitleInfo />
          <div className="ipsum-lorem">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem2">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem4">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <img
            className="vidtitleviewsetc-child"
            alt=""
            src="../ellipse-5.svg"
          />
        </div>
        <div className="vidtitleviewsetc4">
          <VidTitleInfo />
          <div className="ipsum-lorem">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem2">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem4">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <img
            className="vidtitleviewsetc-child"
            alt=""
            src="../ellipse-5.svg"
          />
        </div>
        <div className="vidtitleviewsetc5">
          <VidTitleInfo />
          <div className="ipsum-lorem">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem2">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem4">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <img
            className="vidtitleviewsetc-child"
            alt=""
            src="../ellipse-5.svg"
          />
        </div>
        <div className="vidtitleviewsetc6">
          <VidTitleInfo />
          <div className="ipsum-lorem">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem2">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem4">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <img
            className="vidtitleviewsetc-child"
            alt=""
            src="../ellipse-5.svg"
          />
        </div>
        <div className="vidtitleviewsetc7">
          <VidTitleInfo />
          <div className="ipsum-lorem">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem2">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <div className="ipsum-lorem4">
            <p className="ipsum-lorem1">ipsum lorem</p>
          </div>
          <img
            className="vidtitleviewsetc-child"
            alt=""
            src="../ellipse-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
