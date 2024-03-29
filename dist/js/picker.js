var mod0 = "Привет! 👋 <br><br> Меня зовут Денис, я занимаюсь кадровыми, просветительскими и digital-проектами в STEM-образовании. Работаю проректором в лучшем молодом университете России — <a href='https://student.skoltech.ru' target='_blank'>Сколтехе</a>, где руковожу привлечением и отбором студентов, курирую центр развития карьеры, студенческие сервисы и программы развития сообщества студентов и выпускников. Мои контакты <a href='#contact' onclick='pickMe(5)'>здесь</a>. <br><br>... for 🇬🇧 — press <a href='#eng' onclick='pickMe(6)'>here</a>.";
var mod1 = "Midjourney, ChatGPT and etc. are the favorites of the past year. Ironically, every artist should now hear a gruesome rattle of the horrendous AI gale that would inexorably ravage their dreams.";
var modY1 = "#digest        upd 28/01/2023";
var mod2 = "— <a href='https://vk.com/video-81538275_456240993?list=6c239cea75c86e6718' target='_blank'>«Подкаст Русского дома. Сколково» </a>, Россотрудничество 2022 [RUS]<br> — <a href='https://tvbrics.com/shows/v-moskve-stazheram-programmy-interussia-prezentovali-mezhdunarodnuyu-set-tv-brics/' target='_blank'>«InterRussia в Сколтехе» </a>, TV BRICS 2022 [RUS]<br> — <a href='https://youtu.be/89D-bWgVJME' target='_blank'>«منحة دراسية من جامعة سكولتيك للعلوم والتكنولوجيا» </a>, RT Online 2021 [ARA]<br> — <a href='https://youtu.be/imKW62S7ct8' target='_blank'>«Студенты на удаленке –  пионеры будущего?»</a>, EdCrunch OnDemand 2020 [RUS]<br> — <a href='https://youtu.be/lg0fuUNaERM' target='_blank'>«Breaking the Wall to Understanding Science»</a>, Falling Walls and World Science Summit 2020 [ENG]";
var modY2 = "#media        the most recent five";
var mod3 = "— <a href='http://sputniknews.cn/russia_china_relations/202007201031815681/' target='_blank'>报考斯科尔科沃科技学院中国考生人数翻倍</a>, Sputnik China [CHI]<br>— <a href='https://disk.yandex.ru/i/FgxzM62sl7YlyQ' target='_blank'>«How Russia's most prestigious university works»</a>, Skoltech Almanac [ENG]<br>— <a href='https://knife.media/stolyarov/' target='_blank'>«Как устроено образование в самом престижном техническом вузе России»</a>, НОЖ [RUS] <br>— <a href='https://postnauka.ru/author/d_stolyarov' target='_blank'>«Как выбрать университет и написать мотивационное письмо»</a>, ПостНаука [RUS]<br>— <a href='https://vc.ru/flood/24633-stolyarov' target='_blank'> «Важный момент на собеседовании — это мотивация»</a>, VC [RUS]";
var modY3 = "#publications         the most fav five";
var modY4 = "#projects         🔄 to browse";
var mod5 = "@stolyarovden at <br><br>⟶ <a href='https://www.facebook.com/stolyarovden/' target='_blank'>Facebook</a><br>⟶ <a href='https://www.instagram.com/stolyarovden/' target='_blank'>Instagram</a><br>⟶ <a href='https://twitter.com/stolyarovden' target='_blank'>Twitter 🕸</a><br>⟶ <a href='https://vk.com/stolyarovden' target='_blank'>VK 🔥</a><br>⟶ <a href='https://www.linkedin.com/in/denis-stolyarov-8774a530' target='_blank'>LinkedIn</a><br><br> ... или пишите в <a href='https://t.me/stolyarovden'>Telegram <i class='fa fa-send'></i></a>";
var modY5 = "#contacts        updated asynchronously";
var mod6 = "Hi there! 👋 <br><br>My name is Denis, I'm Dean of Students at the best young university in Russia – <a href='https://student.skoltech.ru' target='_blank'>Skoltech</a>, where I supervise students' outreach & recruitment, student services, alumni community programs development & career center. Most of the info on my website is in Russian, but some materials are not, so check out the language tag — [ENG]. My contacts are listed <a href='#contact' onclick='pickMe(5)'>here</a>.";
var modY6 = "#eng 🇬🇧         ←←← navigation hints";
var sw = 0;
var sw2 = 0;
var i;

function projCall(){
    var pr = "test2";
    var r_text = new Array ();
    
    r_text[0] = "📖 // books<br><br><a href='https://eksmo.ru/book/eto-tochno-chyertova-dyuzhina-komiksov-o-nauke-i-uchyenykh-ITD925679/' target='_blank'> Это точно. Чёртова дюжина комиксов о науке и ученых [RUS]</a> — первый в России сборник sci-комиксов, каждый из которых основан на реальном научном исследовании // длинный список <a href='http://premiaprosvetitel.ru/news/view/?362' target='_blank'>премии «Просветитель» 2019</a><br>";
    r_text[1] = "📖 // books<br><br><a href='https://www.litres.ru/zahar-prilepin/kak-my-perezhili-voynu-narodnye-istorii/' target='_blank'> Как мы пережили войну. Народные истории [RUS]</a> — Галина Юзефович и еще более 100 авторов о своих семьях в Великую Отечественную войну // с. 209-213 — история Столяровой Надежды Терентьевны<br>";
    r_text[2] = "🎫 // events<br><br><a href='https://youtu.be/3LIMXvRQ-Eg' target='_blank'> Skoltech Online Graduation 2020 [ENG]</a> — первый онлайн-выпускной в истории Сколтеха // ведущая — невероятная Таня Геворкян<br>";
    r_text[3] = "🎫 // events<br><br><a href='https://student.skoltech.ru/falling-walls-lab' target='_blank'> Falling Walls Lab Moscow [ENG]</a> —  уникальная возможность рассказать о своем проекте всему миру всего за три минуты // финалисты получают приглашение на <a href='https://berlinscienceweek.com' target='_blank'>Berlin Science Week</a><br>";
    r_text[4] = "💻 // media<br><br><a href='https://youtu.be/kY5fAJxPVyk' target='_blank'> Skoltech 365 [ENG]</a> — один год из жизни студента Сколтеха в двух минутах шестнадцати секундах  // самое популярное видео на канале Сколтеха<br>";
    r_text[5] = "💻 // media<br><br><a href='https://postnauka.ru/specials/careersinscience' target='_blank'> Как поступить [RUS]</a> —  карьерный путеводитель по науке и высоким технологиям для студентов и молодых ученых, созданный вместе с ПостНаукой // ценные советы и практические гайды от профессоров с мировым именем и молодых ученых Сколтеха";
    
    if(sw == 0){
        i = Math.floor(r_text.length * Math.random());
        pr = r_text[i];  
        sw = 1;
    }else{
        if(r_text.length <= i){
            i = 0;
        }
        pr = r_text[i];
    }
    i = i + 1;
    return pr;
}

function projIcon(){
    var y4 = document.getElementById("projs");
    var emj;
    
    if(sw2 == 0){
        y4.value = '🔄';
        emj = y4.value;
    }else{
        y4.value = '🔥';
    }
    return emj;
}

function pickMe(x) {
  var y = document.getElementById("myDIV");
  var y1 = document.getElementById("tag");
  var y2 = "test3";

  if (x === 1) {
    sw2 = 1;
    projIcon();
    y.innerHTML = mod1;
    y1.innerHTML = modY1;      
  }
  else if (x === 2) {
    sw2 = 1;
    projIcon();
      
    y.innerHTML = mod2;
    y1.innerHTML = modY2;
  }
  else if (x === 3) {
    sw2 = 1;
    projIcon();
      
    y.innerHTML = mod3;
    y1.innerHTML = modY3;
  }
  else if (x === 4) {
    sw2 = 0;
    y2 = projCall();
    projIcon();
    y.innerHTML = y2;
    y1.innerHTML = modY4;
  }
  else if (x === 5) {
    sw2 = 1;
    projIcon();
    
    y.innerHTML = mod5;
    y1.innerHTML = modY5;
  }
  else if (x === 6) {
    sw2 = 1;
    projIcon();
      
    y.innerHTML = mod6;
    y1.innerHTML = modY6;
  }
  else if (x === 0) {
    sw2 = 1;
    projIcon();
      
    y.innerHTML = mod0;
  }
}

function timestamp(){
    var today = new Date();
    var time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2);
    document.getElementById('tag').innerHTML = time + " " +"<i class='ti-double-check'></i>";
}
