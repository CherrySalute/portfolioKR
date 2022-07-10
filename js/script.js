Vue.component("header-el",{
    data: () => {
        return {menuList: [
            "about", "skill", "portfolio", "contact"
        ]}
    },
    template: `
        <header>
            <div class="logo">
                <router-link to="/"><img src="./img/capricornus.svg" alt=""></router-link>
            </div>
            <div class="menu">
                <ul>
                    <li v-for="list in menuList">
                        <router-link :to="'/'+list">{{list}}</router-link>
                    </li>                    
                </ul>
            </div>

            <div class="resBtn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    `
});



const pageMain = {
    template: `
        <main>
            <video src="./video/record.mp4" autoplay muted loop playsinline></video>
            <div class="video_dark"></div>
            <h2>Portfolio</h2>
        </main> 
    `
}

const pageAbout = {
    template: `
        <section id="about">
            <div class="wrap">
                <div class="imgPart">
                    <img src="./img/image1.jpg" alt="">
                </div>
                <div class="txtPart">
                    <h2>About me</h2>                                       
                    <p style="white-space: pre-line;">배움을 즐기면서 경험치를 얻고 있는 "김경래" 입니다.
                                                        
                    현재 퍼블리셔의 세계에 가기 위해 한 걸음을 막 내딪은 상태입니다. 
                    하지만 이 한 걸음이 수많은 경험으로 가는 위대한 시작이 될 것입니다.
                    </p>


                    <ul>
                        <li>
                            <ul>
                                <h4>교육수료</h4>
                                <li> - (스마트웹&콘텐츠 개발) UI/UX 적응형,반응형 웹디자인&웹퍼블리셔 과정</li>
                            </ul>                    
                            <ul>
                                <h4>경력사항</h4>
                                <li> - 한국호텔관광 전문학교 호텔제과제빵학 전공</li>
                                <li> - 윤쉐프 정직한제빵소 양주점</li>                    
                                <li> - 식빵전문점 밀도 노원점</li>                    
                                <li> - 뺑오르방 광교점</li>                    
                            </ul>
                        </li>
                     </ul>
                </div>                           
            </div> 
            <div class="btnPart">
                <a href="https://github.com/CherrySalute">
                    <img src="./img/github-brands.svg" alt="">  
                    <span>깃허브 바로가기</span> 
                </a>  
            </div>         
        </section>
    `
}


const pageSkill = {
    data: () => {
        return {skillPer: [
            ["HTML5", "90"],
            ["CSS3", "85"],
            ["Javascript", "80"],
            ["jQuery", "80"],
            ["Vue", "66"],
            ["PHP", "61"],
        ]};
    },
    template: `
        <section id="skill">
            <div class="wrap">
                <h1>Skill</h1>
                <div class="frame" >

                    <div class="box" v-for="list in skillPer">
                        <div class="cont">
                            <div class="top">
                                <svg>
                                    <circle cx="70" cy="70" r="70" />
                                    <circle cx="70" cy="70" r="70" />
                                </svg>
                                <div class="num">
                                    <h2>
                                        <span class="count" :data-limit="list[1]">0</span>
                                        <span>%</span>
                                    </h2>
                                </div>
                            </div>
                            <div class="bottom">
                                <h2 class="cont_text">{{list[0]}}</h2>
                            </div>
                        </div>
                    </div>                

                </div>
            </div>
        </section>
    `
}


const pagePortfolio ={
    data: () => {
        return {portArr: [
            ["kuliner.png","Kuliner", ["html5", "css3"], "HTML과 CSS를 사용한 기본적인 음식점 사이트", "https://cherrysalute.github.io/exam_kuliner_2022/"],
            ["cakehouse.png","Cakehouse",["html5","css3"], "HTML과 CSS를 사용한 기본적인 제과점 사이트", "https://cherrysalute.github.io/20220331_website_cakehouse/"],
            ["cashmere.png","Cashmere",["html5","css3"], "HTML과 CSS를 사용한 기본적인 의류브랜드 사이트", "https://cherrysalute.github.io/cashmere/"],
            ["bnostore.png","B&O",["html5","css3"], "HTML과 CSS를 사용한 기본적인 음향기기 판매 사이트", "https://cherrysalute.github.io/Bno/"],
            ["origin.png","Origin",["html5","css3"], "Gird를 이용한 이미지 배치가 주로 사용된 사이트", "https://cherrysalute.github.io/Origin/"],
            ["neo.png","National Geographic",["html5","css3","javascript", "jQuery","vue"], "Vue Router를 사용하여 Component에 원하는 내용을 추가하여 페이지를 구성.", "https://cherrysalute.github.io/Naeo_2022/"],
            ["hospital.png","Sejong Hospital",["html5","css3"], "HTML과 CSS를 사용한 기본적인 병원 사이트", "https://cherrysalute.github.io/hospital/"],
            ["adage.png","adAge",["html5","css3","javascript", "jQuery"], "Hash를 이용하여 동일한 서브구조를 이룬 페이지에 각기 다른 내용을 추가하는 기능을 사용한 글로벌 운동용품 판매 사이트", "https://cherrysalute.github.io/adage/"],
            ["wedding.png","Aisel Wedding",["html5","css3"], "HTML과 CSS를 사용한 기본적인 웨딩사업 사이트", "https://cherrysalute.github.io/wedding-site/"],
            ["weather.png","weatherApp",["html5","css3", "javascript","jQuery","ajax"], "Ajax를 사용하여 외부의 날씨정보를 받아서 표현해낸 날씨정보제공 사이트", "https://cherrysalute.github.io/weatherApp/"],

            ["audition_vue.png","Film Maker",["html5","css3","javascript","jQuery","vue"], "Vue Component를 사용하여 전체적인 사이트의 구조를 잡은 Film Maker 영화 오디션 사이트", "https://cherrysalute.github.io/filmmaker/"],

            ["chat.png","My chat",["html5","css3","javascript","jQuery","Firebase","php","mysql"], "Firbase를 사용하여 실시간 채팅을 관리하고 사용자의 정보를 데이터베이스에 담아 관리하고 서버를 통해 이용할 수있는 채팅앱 사이트", "http://moiraz.dothome.co.kr/chattingApp/"],
            ["oclass.png","OClass",["html5","css3","javascript","jQuery","php","mysql"], "PHP를 활용하여 데이터베이스에 온라인클래스의 정보와 사용자의 정보를 담아 서버에서 관리하고, 온라인 쇼핑의 기능을 구현한 온라인클래스 강의사이트", "http://moiraz.dothome.co.kr/oclass/"],
            ["capricornus.png","Capricornus",["html5","css3","jQuery","php","mysql"], "PHP와 MySql를 중심으로 데이터베이스를 MySql에 담아 관리할 수 있는 기능을 담은 베이커리 카페의 브랜드와 제품등을 소개하는 베이커리 카페 사이트", "http://moirax.dothome.co.kr/capricornus/"],
        ]};

        
    },
    template:`
        <section id="portfolio">
            <div class="wrap">
                <div class="title">
                    <h2>Portfolio</h2>
                </div>

                <div class="slideBox">
                    <div class="innerBox">

                        <div class="cont" v-for="list in portArr">
                            <div class="imgPart" :style="'background-image:url(./img/view/'+list[0]+')'"></div>
                            <div class="txtPart">
                                <div class="top">
                                    <h2>{{list[1]}}</h2>
                                    <ul>
                                        <li  v-for="lang in list[2]">
                                            <img :src="'./img/'+lang+'.png'">
                                        </li>
                                    </ul>
                                </div>
                                <div class="bottom">
                                    <p>{{list[3]}}</p>
                                    <div class="detail_btn">
                                        <a :href="list[4]">Click</a>
                                    </div>
                                </div>
                            </div>
                        </div>                       

                    
                    </div>   
                    <a href="" class="prev"><img src="./img/prev_icon.svg" alt=""></a>
                    <a href="" class="next"><img src="./img/next_icon.svg" alt=""></a>   
                </div>    
            </div>
        </section>
    `

}


const pageContact = {
    template: `
        <section id="contact">
            <h2>Contact</h2>
            <form class="gform form-elements" name="contactUs" method="post" action="https://script.google.com/macros/s/AKfycbzs1Sju1_JK-57YS5hzEYFUr3-BDhmae4ZzvXW5/exec">
                <fieldset>
                    <legend>Mail</legend>
                    <div class="formlist">
                        <ul>
                            <li>
                                <label for="name">이름 또는 회사명<sup>*</sup></label>
                                <span class="inputBox">
                                    <input type="text" id="name" name="name" placeholder="이름 또는 회사명을 입력해주세요." required autocomplete="off">
                                </span>
                            </li>
                            <li>
                                <label for="email">답변받을 이메일<sup>*</sup></label>
                                <span class="inputBox">
                                    <input type="text" id="email" name="email" placeholder="sample@mail.com" required autocomplete="off">
                                </span>
                            </li>
                            <li>
                                <label for="message">문의 내용<sup>*</sup></label>
                                <span class="inputBox">
                                    <textarea name="message" id="message" placeholder="문의 사항을 입력해 주세요." required autocomplete="off"></textarea>
                                </span>
                            </li>
                        </ul>
                        <div class="btn_box">
                            <button type="submit" class="command_btn">문의하기</button>
                        </div>
                    </div>
                    <div class="thankyou_message">
                        <article>
                            <h1>작성된 내용이 모두 전송되었습니다.</h1>
                            <p>메일 확인 후 연락 드리겠습니다.</p>
                            <div class="btn_box">
                                <a href="" class="close">닫기</a>
                            </div>
                        </article>
                    </div>
                </fieldset>
            </form>
            <span class="comment">작성하신 내용은 메일로 전송됩니다.</span>
        </section>
    `
}


const rtRoutes = [
    {
        path: "/",
        component: pageMain
    },
    {
        path: "/about",
        component: pageAbout
    },
    {
        path: "/skill",
        component: pageSkill
    },
    {
        path: "/portfolio",
        component: pagePortfolio
    },
    {
        path: "/contact",
        component: pageContact
    }
]



const routerCase = new VueRouter({
    routes: rtRoutes
});


const date = new Date();
const year = date.getFullYear();

const footerCase = {
    template: `<footer><p>Copyright &copy; ${year}. Portfolio. All rights reserved.</p></footer>`
};


new Vue({
    el: "#app",
    router: routerCase,
    components: {
        "footer-el" : footerCase
    }
});




$(document).ready(function () {   

    $("header .menu ul li a").click(function (e) { 
        e.preventDefault();
        location.reload();
    });

    var startCount = 0;

    $("#skill .box").each(function(index){
        console.log(index);
        var sel_Count = $(this).find(".count").attr("data-limit");
        console.log(sel_Count);

        $(this).find("circle:eq(1)").css("stroke-dashoffset",`calc(440 - 440 * ${sel_Count} / 100)`);

        var counter = setInterval(function(){
            if(startCount < sel_Count){
                startCount++;
                // console.log(startCount);
                $(".box").eq(index).find(".count").text(startCount);
            }
            else if(startCount == sel_Count){
                // startCount++ 도달되었으나 값이 적용되지 않은 경우, 최종적으로 현재 저장된 data-limit 값을 넣겠다는 의미
                $(".box").eq(index).find(".count").text(sel_Count);
            }
            else{
                clearInterval(counter);
            }
        }, 50);
    });

    $(".close").click(function (e) { 
        e.preventDefault();
        $(".thankyou_message").hide();
        return false;
    });

    var $last = $(".innerBox .cont").last();
    $(".innerBox").prepend($last)



    $(".slideBox .prev").click(function (e) { 
        e.preventDefault();
        
        var $last = $(".innerBox .cont").last();
        console.log($last);

        

        $(".innerBox").stop().animate({"margin-left":"0%"}, 1000, function(){
            $(".innerBox").prepend($last).css("margin-left","-100%");
        })
        
        return false;
    });

    $(".slideBox .next").click(function (e) { 
        e.preventDefault();
        
        var $first = $(".innerBox .cont").first();
        console.log($first);

        $(".innerBox").stop().animate({"margin-left":"-200%"}, 1000, function(){
            $(".innerBox").append($first).css("margin-left","-100%");
        })
        
        return false;
    });

});


const $body = document.querySelector("body");
const $menu = document.querySelector("header .menu");
const $resBtn = document.querySelector("header .resBtn");



//반응형메뉴 리스트 클릭시 
const menuList = () => {

    const $menuList = document.querySelectorAll("header .menu.active li");
    for(const v of $menuList){
        console.log(v);
        v.addEventListener("click", () => {
            console.log("클릭 이벤트2");
            $body.classList.remove("showMenu");
            $menu.classList.remove("active");
            $resBtn.classList.remove("active");
        });
    }

    const $logo = document.querySelector("body.showMenu header .logo");
    $logo.addEventListener("click", () => {
        console.log("클릭 이벤트_로고");
        $body.classList.remove("showMenu");
        $menu.classList.remove("active");
        $resBtn.classList.remove("active");
    });
}


//반응형메뉴 클릭시 
$resBtn.addEventListener("click", function(){
    console.log("클릭 이벤트");
    const $active_resBtn = $resBtn.classList.contains("active");
    console.log($active_resBtn);
    if(!$active_resBtn){
        $body.classList.add("showMenu");
        $menu.classList.add("active");
        $resBtn.classList.add("active");
        menuList();
    }else{
        $body.classList.remove("showMenu");
        $menu.classList.remove("active");
        $resBtn.classList.remove("active");
    }
});


