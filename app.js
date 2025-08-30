//trainees data
const trainees = [
  { 
    name: " د. شريف صلاح الدين ", 
    image: "./imgs/sh-s.jpg",
   message:`
   شكرًا لحضرتك على مجهودك اللي بذلته معانا وعلى كل المعلومات القيمة اللي حقيقي فادتني جدًا سواء في شغلي أو في حياتي🤍..
جزاك الله خيرًا ونفع بك دائمًا وجعل علمك سببًا للنفع والخير.
   `,
    size:Math.random()*70+71 
  },
  {
    name: " د. أحمد قدوس ", 
    image: "./imgs/aq.jpg",
    message:`شكرًا على الكورس الرائع الخفيف والبهجة والمعلومات اللي حضرتك قدمتهالنا طول الكورس،،
الله ينفعك بعلمه وينفع بك✨.`,
    size:Math.random()*60+68
  },{
    name: " د. محمد دوا ", 
    image: "./imgs/mohammed-dawa.jpg",
    message:`سعيدة جدًا إني كنت مع حضرتك في الكورس ومحاولتك دايمًا لتجمعنا ومشاركتك إضافة جميلة ربنا يبارك في خطواتك كلها وينفع بك دايمًا.`,
    size:Math.random()*60+61  },{
    name: " د. أحمد سالم ", 
    image: "./imgs/ahmed-salem.jpg",
    message:"ممتنة لمعرفة حضرتك والاستفادة بأرائك ومشاركتك دايمًا، الله يوفقك في خطواتك الجاية ويزيدك علمًا ونفعًا.",
    size:Math.random()*60+61  },{
    name: "د. دعاء معوض", 
    image: "./imgs/doaa m.jpg",
    message:"دكتورتي الجميلة وابتسامتها الحنونة ممتنة جدًا لمعرفة حضرتك ولوجودي معاكِ في الكورس الله يوفق حضرتك دايمًا يارب وأشوفك بخير وعافية 🥰❤.",
    size:Math.random()*60+61  },{
    name: " د. علا أحمد", 
    image: "./imgs/ola mahdy.jpg",
    message:`مبسوطة إني اتعرفت على حضرتك واتعملت منك حاجات كتير وفرحت جدًا بروحك الحلوة وحماسك الدايم وكلامك الجميل المؤثر الله يديم عليك جميل نعمه🩷.`,
    size:Math.random()*60+61  },{
    name: "د. إبراهيم السباق", 
    image: "./imgs/ebrahim-sabbaq.jpg",
    message:"تشرفت بوجودك حضرتك في الكورس وبآرائك اللي بتثري النقاش وبتجربة الجروب اللي أضافتلي حقيقي، الله يوفقك دايمًا ويسدد خطاك للخير.",
    size:Math.random()*60+61  },{
    name: "المستشار. محمود جمعة", 
    image: "./imgs/judge-m-z-g.jpg",
    message:"سعيدة بتعرفي على حضرتك وبمشاركتك وإضافتك الخفيفة للوقت والكورس، الله يسعدك دايمًا ويآنس خطاك بالنور.",
    size:Math.random()*60+71  },{
    name: "المستشار. فاروق عبيد", 
    image: "./imgs/farouq.jpg",
    message:"تشرفت جدًا إنه كنت مع حضرتك، وجودك ومساهمتك الحماسية كانت سبب للاستفادة ومميزة، الله يرزقك النجاح المستمر.",
    size:Math.random()*60+61  },
    {
    name: "المستشار. أحمد عبيد", 
    image: "./imgs/ahmed-ebieda.jpg",
    message:"سعيدة بمعرفتي بحضرتك وبفترة الكورس ومشاركتك المختلفة اللي فادتني كتير، الله يوفقك دايمًا لنجاحات وإنجازات أكتر.",
    size:Math.random()*60+61  },{
        name:"د. دعاء أبوالمجد",
        image:"./imgs/doaa.jpg",
        message:"دكتورتنا الشاطرة والجميلة والمميزة بأرائها ونقاشاتها.. الله يوفقك دايما لكل نجاح ويسعدك بكل خير وأشوفك تاني بخير وفي فرصة أطول.",
        size:Math.random()*60+61
    },
    {
    name:"المستشارة نورا رمضان", 
    image: "./imgs/n-r.jpg",
    message:"من أجمل الحاجات في الكورس وجود حضرتك فيه الله يسعد كل وقتك ويديم عليك القبول والنجاح وتحققي إنجازات جميلة وتتبسطي بيها🥰❤",
    size:Math.random()*60+61  },
    {
    name: "م. فاطمة أكرم", 
    image: "./imgs/toota.jpg",
    message:"Don’t stop until feel so proud 🫣🩷.",
    size:Math.random()*60+61  },{
        name:"د. نيرمين",
        image:"./imgs/dr-n.jpg",
        message:"شكرًا دكتورة نيرمين الجميلة الأنيقة على مجهودك معانا طول الوقت وروحك الحلوة هفتقد ابتسامتك الجميلة💋❤.",
        size:Math.random()*60+61,
    },{
        name:"د. محمد حسن",
        image:"./imgs/dr-m-h.jpg",
        message:"شكرًا دكتور على جهدك وصبرك الرائع طول فترة التدريب الله ينفع بحضرتك دايمًا ويوفقك لكل خير ويسعدك✨.",
        size:Math.random()*60+61

    },{
        name:"د. أسعد طلعت",
        image:"./imgs/dr-as3.jpg",
message:"شكرًا دكتور أسعد لإضافتك الجميلة ومجهودك معانا دايمًا الله يجمعنا دايمًا بخير في أفضل الأماكن.",        
size:Math.random()*60+61
    },{
        name:"د. محمد الشافعي",
        image:"./imgs/dr-m-s.jpg",
        message:"شكرًا دكتور محمد لتعاونك معانا ومجهودك طول فترة التدريب فرصة سعيدة الله يوفقك لكل نجاح.",
        size:Math.random()*60+61
    },
    {
    name:"اللواء ابراهيم", 
    image: "./imgs/ebraheem.jpg",
    message:"حظ كبير وجود حضرتك معانا ومشاركتك دايمًا بأراء مميزة وحماس حضرتك اللي بيشجعنا كلنا نتعلم،، الله ينفع بحضرتك ويوفقك دايمًا للخير.",
    size:Math.random()*60+61  },
        {
    name:"د. منال", 
    image: "./imgs/manal.jpg",
    message:"من أجمل الحاجات في الكورس وجود حضرتك يا دكتور بجد بحبك جدًا جدًا وبحب روحك الحلوة وابتسامتك الجميلة وتشجيعك الدايم الله ينفع بك يارب وتحققي كل اللي بتحلمي بيه🥹❤❤.",
    size:Math.random()*60+61  },
    {
    name:"د. إلهام السواح", 
    image: "./imgs/e-s.jpg",
    message:"سعيدة بمشاركة حضرتك وخبرتك وإضافتك للكورس الله يوفقك دايمًا للخير وينفع بك.",
    size:Math.random()*60+61  },
    {
    name:"د. رندا ", 
    image: "./imgs/randa.jpg",
    message:"دكتورتي الجميلة والأم الرائعة وأشطر حد شوفته بحياتي الله يوفقك دايمًا اتعلمت منك حاجات جميلة ويارب أعرف أبقى حلوة وشاطرة كدا حقيقي روحك جميلة لأبعد حد الله يسعدك دايمًا🥰❤❤.",
    size:Math.random()*60+61  },
    {
    name:"د. راشد", 
    image: "./imgs/rashed.jpg",
    message:`دكتور راشد شكرًا جدًا جدًا من قلبي على دعمك الدائم وثقتك ممتنة للكورس اللي جمعنا وشكرًا كتير للحلا الحلوة اللي دايمًا بتكرمنا بيها ☺.`,
    size:Math.random()*60+61  },{
    name:"د. علاء أحمد", 
    image: "./imgs/alaa-ahmed.jpg",
    message:"سعيدة بمشاركة حضرتك وخبرتك وإضافتك للكورس الله يوفقك دايمًا للخير وينفع بك.",
    size:Math.random()*60+61  },{
    name:"د. حنان أحمد", 
    image: "./imgs/hanan.jpg",
    message:"الله يوفقك يا دكتور وتحققي دايمًا إنجازات أجمل وأكبر ونشوفك دايمًا بخطوات ناجحة ومميزة❤.",
    size:Math.random()*60+61  },{
    name:"د. مصطفى المشد", 
    image: "./imgs/mostafa.jpg",
    message:"سعيدك بمشاركة حضرتك الكورس وأثرك الطيب الله يوفقك دايمًا ويكرمك.",
    size:Math.random()*60+61  },{
    name:"د. محمد بدوي", 
    image: "./imgs/m-b.jpg",
    message:"ممتنة للمعلومات الرائعة والنقاشات المثرية اللي حضرتك دايمًا كنت بتشاركها معانا، بالتوفيق الدايم ونشوف حضرتك بخير دايمًا يارب.",
    size:Math.random()*60+61  },{
    name:"د. عنان", 
    image: "./imgs/anan.jpg",
    message:'دكتورتي الجميلة اللي روحها جميلة وأثرها سكر سعيدة بمعرفتك وبوجودي معاك ولو لفترك صغيرة أشوفك دايم بخير يارب 🥹💕',
    size:Math.random()*60+61  },{
    name:"د. كاميليا", 
    image: "./imgs/kamilia.jpg",
    message:"سعيدة جدًا بمعرفة حضرتك وبكلامك المميز اللي يلمس القلب ومشاركتك الجميلة دايمًا أشوفك بخير دايمًا يارب 🩷",
    size:Math.random()*60+61  },{
    name:"د. هدى", 
    image: "./imgs/h.jpg",
    message:`دكتورتنا الفريدة والمميزة أضفتي روح رائعة وبهجة مميزة للمكان ولكل يوم حقيقي فرصة جميلة جدًا يارب نشوفك دايمًا بخير وعافية في أماكن أجمل وأجمل ويديم عليك بهجتك.`,
    size:Math.random()*60+61  }
    ,{
    name:"د. أحمد جمال عبدالناصر", 
    image: "./imgs/ahmed-g-a.jpg",
    message:`سعيدة جدًا بمعرفة حضرتك يا دكتور وبجروبنا ومشاركة حضرتك الله يوفقك دايمًا ويحفظلك بنوتك ويسعدك.`,
    size:Math.random()*60+61  },{
    name:"د. نجلاء", 
    image: "./imgs/naglaa.jpg",
    message:`دكتورة نجلاء القوية الجميلة جدًا جدًا مبسوطة بمعرفتك وأتمنى أشوفك تاني كتير في حاجات أجمل وتتألقي دايمًا 🪄🩷.`,
    size:Math.random()*60+61  },{
    name:"د. أحمد جمال", 
    image: "./imgs/ahmed g.jpg",
    message:`استفدت من وجود حضرتك جدًا ومشاركتك دايمًا باقتراحات جميلة واقعية وأثرها الله ينفع بك ويسددك دايمًا لكل نجاح.`,
    size:Math.random()*60+61  },{
    name:"د. هيام", 
    image: "./imgs/hayam.jpg",
    message:`دكتورة هيام الجميلة الله يوفقك دايمًا يارب ويديم بسمتك الجميلة وطلتك الحلوة المميزة بحبك جدًا جدًا ودايمًا بتلهميني بجد✨🩷`,
    size:Math.random()*60+61  },{
    name:"د. محمد غزال", 
    image: "./imgs/m-gh.jpg",
    message:`فرصة جميلة التعرف على حضرتك اتشرفت جدًا حقيقي الله ينفعك بعلمه وينفع بيك ونتقابل جميعًا على خير.`,
    size:Math.random()*60+61  },{
    name:"د. وائل", 
    image: "./imgs/wael.jpg",
    message:`سعداء بوجود حضرتك والأراء المميزة والإضافة الجميلة يارب من نجاح لنجاح دايمًا .`,
    size:Math.random()*60+61  }
];

const mgz={
    name:"المستشار محمود جمعة ", 
    image: "./imgs/z0709.jpg",
    message:"متشكرة كتير كتير لكل المواقف المميزة الغالية جدًا على قلبي وللأوقات اللي غلبتك فيها حقيقي من الشخصيات القليلة اللي أضافوا لحياتي، الله يديم عليك بهجة روحك ويكرمك دايمًا بالخير ويديم عليك أحباب قلبك ويسعدك✨.",
    size:Math.random()*60+81
}

// DOM elements
const grid = document.getElementById('grid');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalMessage = document.getElementById('modalMessage');

const form = document.querySelector('form');
const input = document.querySelector('input');

//open modal
function openModal(t) {
  modalImage.src = t.image;
  modalImage.alt = `صورة ${t.name}`;
  modalName.textContent = t.name;
  modalMessage.textContent = t.message;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // منع التمرير عند فتح النافذة
}

// إغلاق نافذة التفاصيل
function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = ''; // إعادة التمرير
}

// إنشاء الدوائر للمتدربين
function createTraineeCircles() {
  trainees.forEach(t => {
    const div = document.createElement('div');
    div.className = 'circle';
    div.style.setProperty('--size', t.size + 'px');
    div.setAttribute('aria-label', `عرض تفاصيل ${t.name}`);
    
    const img = document.createElement('img');
    img.src = t.image;
    img.alt = t.name;
    
    const overlayDiv = document.createElement('div');
    overlayDiv.className = 'overlay';
    
    const viewText = document.createElement('div');
    viewText.className = 'view-text';
    viewText.textContent = ' اضغط';
    
    overlayDiv.appendChild(viewText);
    div.appendChild(img);
    div.appendChild(overlayDiv);
    
    div.addEventListener('click', () => openModal(t));
    grid.appendChild(div);
  });
}

// إضافة مستمعي الأحداث
function setupEventListeners() {
  closeBtn.addEventListener('click', closeModal);
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  
   form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchQuery = input.value.trim();
    if (!searchQuery) return;

    // Find the first trainee whose name includes the search query
    const match = trainees.find(t => t.name.includes(searchQuery));
    if (match) {
      openModal(match);
    }else if(searchQuery == "mzg90".toLowerCase()){
      openModal(mgz);
    }
  });


  // إغلاق النافذة بالضغط على زر Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });


}


// تهيئة التطبيق
function initApp() {
  createTraineeCircles();
  setupEventListeners();
}


// start app
document.addEventListener('DOMContentLoaded', initApp);