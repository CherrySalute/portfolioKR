Vue.component("header-el",{
    data: () => {
        return {menuList: [
            "about","carrer" ,"skill", "portfolio", "contact"
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
                    <h2>I am</h2>                                       
                    <p style="white-space: pre-line;">
                    퍼블리셔 2년차 김경래입니다.
                    
                    　평소에 봐오던 웹페이지를 직접 만들고 상용화 시킬수 있다는 것이 흥미를 느껴 웹퍼블리싱을 배우게 되었습니다. 쉬울것만 같았던 페이지들이 각 구조를 이루고 효율적으로 배치를 하기 위해 많은 노력이 필요하다는 것을 배움을 통해 깨닫게 되었습니다.
                    　현재는 웹퍼블리싱 만으로는 힘들다 생각하여 Front-End 개발자로 가기 위한 공부를 열심히 진행하고 있습니다. Framework중에서 러닝 커브가 낮은 Vue.js를 공부하며 열심히 내공을 쌓고있습니다.

                    실무에서는 카페24를 통해 기존에 제작된 사이트의 유지보수 및 신규 브랜드 런칭을 위한 사이트 제작에 참여했습니다.
                    </p>
                </div>                           
            </div> 
            <div class="btnPart">
                <a href="https://github.com/CherrySalute">
                    <img src="./img/github-brands.svg" alt="">  
                    <span>I am GitHub</span> 
                </a>  
            </div>         
        </section>
    `
}

const pageCarrer = {    
    template: `
        <section id="carrer">
            <div class="wrap">
                <div class="title">
                    <h2>Carrer</h2>
                </div>    
                <div class="carrerbox">
                    <div class="rental" style="'background-image: url(/img/logo/rentalfriend.png)'">
                        <div class="dark_border"></div>
                        <div class="dark_bg"></div>                        
                        <p>(주)렌탈프랜드<br>2022.08.08 ~ ing</p>
                    </div>
                </div>                
                <div class="else">
                    <h6>기타 경력사항</h6>
                    <li> 한국호텔관광 전문학교 호텔제과제빵학 전공</li>
                    <li> 뺑오르방 광교점</li>  
                    <li> 식빵전문점 밀도 노원점</li>   
                    <li> 윤쉐프 정직한제빵소 양주점</li>                  
                </div>
            </div>
        </section>
    `
}


const pageSkill = {
    data: () => {
        return {skill: [
            ["HTML5", "90"],
            ["CSS3", "85"],
            ["Javascript", "85"],
            ["jQuery", "80"],
            ["Vue", "45"],
        ]};
    },
    template: `
        <section id="skill">
            <div class="wrap">
                <div class="title">
                    <h2>Skill</h2>
                </div>               
                <div class="skillBox">
                    <div v-for="list in skill">
                        <p>{{list[0]}} / {{list[1]}}%</p>
                        <progress :value="list[1]" max="100"></progress>
                    </div>
                </div>
            </div>
        </section>
    `
}


const pagePortfolio ={
    data: () => {
        return {portArr: [
            ["rentalfriend.png","Rentalfriend",["html5","css3","jQuery"],"사이트 유지보수 및 관리 (2022.08~ing)","rentalfriend"],
            ["allnego.png","Allnego",["html5","css3","jQuery"],"사이트 유지보수 및 관리 (2022.08~ing)","allnego"],
            ["niccier.png","Niccier",["html5","css3","jQuery"],"사이트 퍼블리싱 및 유지보수 (2022.10~ing)","niccier"],
            ["roxboss.png","Rox Boss Timer",["html5","css3","javascript"],"[개인사용용도] 사이트 디자인, 제작","roxtimer"]
            /*["kuliner.png","Kuliner", ["html5", "css3"], "HTML과 CSS를 사용한 기본적인 음식점 사이트", "https://cherrysalute.github.io/exam_kuliner_2022/"],
            ["cakehouse.png","Cakehouse",["html5","css3"], "HTML과 CSS를 사용한 기본적인 제과점 사이트", "https://cherrysalute.github.io/20220331_website_cakehouse/"],
            ["cashmere.png","Cashmere",["html5","css3"], "HTML과 CSS를 사용한 기본적인 의류브랜드 사이트", "https://cherrysalute.github.io/cashmere/"],
            ["bnostore.png","B&O",["html5","css3"], "HTML과 CSS를 사용한 기본적인 음향기기 판매 사이트", "https://cherrysalute.github.io/Bno/"],
            ["origin.png","Origin",["html5","css3"], "Gird를 이용한 이미지 배치가 주로 사용된 사이트", "https://cherrysalute.github.io/Origin/"],
            ["neo.png","National Geographic",["html5","css3","javascript", "jQuery","vue"], "Vue Router를 사용하여 Component에 원하는 내용을 추가하여 페이지를 구성.", "https://cherrysalute.github.io/Naeo_2022/"],
            ["hospital.png","Sejong Hospital",["html5","css3"], "HTML과 CSS를 사용한 기본적인 병원 사이트", "https://cherrysalute.github.io/hospital/"],
            ["adage.png","adAge",["html5","css3","javascript", "jQuery"], "Hash를 이용하여 동일한 서브구조를 이룬 페이지에 각기 다른 내용을 추가하는 기능을 사용한 글로벌 운동용품 판매 사이트", "https://cherrysalute.github.io/adage/"],
            ["wedding.png","Aisel Wedding",["html5","css3"], "HTML과 CSS를 사용한 기본적인 웨딩사업 사이트", "https://cherrysalute.github.io/wedding-site/"],
            ["weather.png","weatherApp",["html5","css3", "javascript","jQuery","ajax"], "Ajax를 사용하여 외부의 날씨정보를 받아서 표현해낸 날씨정보제공 사이트", "https://cherrysalute.github.io/weatherApp/"],

            ["audition_vue.png","Film Maker",["html5","css3","javascript","jQuery","vue"], "Vue Component를 사용하여 전체적인 사이트의 구조를 잡은 Film Maker 영화 오디션 사이트", "https://cherrysalute.github.io/filmmaker/"],*/
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
                            <div class="imgPart" :style="'background-image:url(./img/logo/'+list[0]+')'"></div>
                            <div class="txtPart">
                                <div class="top">
                                    <h2>{{list[1]}}</h2>
                                    <ul>
                                        <li  v-for="lang in list[2]">
                                            <img :src="'./img/'+lang+'.png'" :title="lang" :alt="lang">
                                        </li>
                                    </ul>
                                </div>
                                <div class="bottom">
                                    <p>{{list[3]}}</p>
                                    <div class="detail_btn">
                                    <router-link :to="'/portfolio/'+list[4]">Click</router-link>
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
            <div class="wrap">
                <div class="title">
                    <h2>Contact</h2>
                </div>                
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
            </div>
        </section>
    `
}

const portfolio_rental = {
    template: `
        <section id="rental">
            <div class="wrap">
                <div class="title">
                    <h2>Rentalfriend</h2>
                </div>     
                <div class="textPart">
                    <p>Info</p>
                    <div class="list">
                        <dl>
                            <dt>개발 언어</dt>
                            <dd>html, css, jQuery, javascript</dd>
                        </dl>
                        <dl>
                            <dt>링크</dt>
                            <dd><a href="https://rentalfriend.co.kr/">https://rentalfriend.co.kr/</a></dd>
                        </dl>
                        <dl>
                            <dt>담당 업무</dt>
                            <div>
                                <dd> 사이트 유지보수</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div class="viewPart">
                    <p>Page</p>
                    <iframe src="https://rentalfriend.co.kr/" width="100%" height="400px"></iframe>
                </div>
            </div>
        </section>
    `
}
const portfolio_allnego = {
    template: `
        <section id="allnego">
            <div class="wrap">
                <div class="title">
                    <h2>Allnego</h2>
                </div>     
                <div class="textPart">
                    <p>Info</p>
                    <div class="list">
                        <dl>
                            <dt>개발 언어</dt>
                            <dd>html, css, jQuery, javascript</dd>
                        </dl>
                        <dl>
                            <dt>링크</dt>
                            <dd><a href="https://www.allnego.com/">https://www.allnego.com/</a></dd>
                        </dl>
                        <dl>
                            <dt>담당 업무</dt>
                            <div>
                                <dd> 사이트 유지보수</dd>
                                <dd> 퍼블리싱 40% (메인페이지 리뉴얼, 검색기능 추가)</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div class="viewPart">
                    <p>Page</p>
                    <iframe src="https://www.allnego.com/" width="100%" height="400px"></iframe>
                </div>
            </div>
        </section>
    `
}
const portfolio_niccier = {
    template: `
        <section id="niccier">
            <div class="wrap">
                <div class="title">
                    <h2>Niccier</h2>
                </div>     
                <div class="textPart">
                    <p>Info</p>
                    <div class="list">
                        <dl>
                            <dt>개발 언어</dt>
                            <dd>html, css, jQuery, javascript</dd>
                        </dl>
                        <dl>
                            <dt>링크</dt>
                            <dd><a href="https://niccier.com/">https://niccier.com/</a></dd>
                        </dl>
                        <dl>
                            <dt>담당 업무</dt>
                            <div>
                                <dd> 사이트 유지보수</dd>
                                <dd> 퍼블리싱 100%</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div class="viewPart">
                    <p>Page</p>
                    <iframe src="https://niccier.com/" width="100%" height="400px"></iframe>
                </div>
            </div>
        </section>
    `
}
const portfolio_roxtimer={
    template:`
        <section id="roxtimer">
            <div class="wrap">
                <div class="title">
                    <h2>Rox Boss Timer</h2>
                </div>     
                <div class="textPart">
                    <p>Info</p>
                    <div class="list">
                        <dl>
                            <dt>개발 언어</dt>
                            <dd>html, css, javascript</dd>
                        </dl>
                        <dl>
                            <dt>링크</dt>
                            <dd><a href="https://roxbosstime.netlify.app/">https://roxbosstime.netlify.app/</a></dd>
                        </dl>
                        <dl>
                            <dt>담당 업무</dt>
                            <div>
                                <dd> 퍼블리싱 100%</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div class="viewPart">
                    <p>Page</p>
                    <iframe src="https://roxbosstime.netlify.app/" width="100%" height="400px"></iframe>
                </div>
            </div>
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
        path: "/carrer",
        component: pageCarrer
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
    },
    {
        path: "/portfolio/rentalfriend",
        component: portfolio_rental
    },
    {
        path: "/portfolio/allnego",
        component: portfolio_allnego
    },
    {
        path: "/portfolio/niccier",
        component: portfolio_niccier
    },
    {
        path: "/portfolio/roxtimer",
        component: portfolio_roxtimer
    },
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


