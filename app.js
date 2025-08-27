//trainees data
const trainees = [
  { 
    name: " د. شريف صلاح الدين ", 
    image: "./imgs/sh-s.jpg",
   message:" مش هقول دلوقتي..",
    size:Math.random()*70+71 
  },
  {
    name: " د. أحمد قدوس ", 
    image: "./imgs/aq.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+68
  },{
    name: " د. محمد دوا ", 
    image: "./imgs/mohammed-dawa.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name: " د. أحمد سالم ", 
    image: "./imgs/ahmed-salem.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name: "د. دعاء معوض", 
    image: "./imgs/doaa m.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name: "المستشار. أحمد عبيد", 
    image: "./imgs/ahmed-ebieda.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name: " د. علا أحمد", 
    image: "./imgs/ola mahdy.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name: "د. إبراهيم السباق", 
    image: "./imgs/ebrahim-sabbaq.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name: "المستشار. محمود جمعة", 
    image: "./imgs/judge-m-z-g.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+71  },{
    name: "المستشار. فاروق عبيد", 
    image: "./imgs/farouq.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },
    {
    name: "م. فاطمة أكرم", 
    image: "./imgs/toota.jpg",
    message:"Don't Stop Until feel so proud. ",
    size:Math.random()*60+61  },
    {
    name:"د. شريف صلاح الدين",
    name:"د. إلهام السواح", 
    image: "./imgs/e-s.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"المستشارة نورا رمضان", 
    image: "./imgs/n-r.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"اللواء ابراهيم", 
    image: "./imgs/ebraheem.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },
    {
    name:"د. منال", 
    image: "./imgs/manal.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },
    {
    name:"د. رندا ", 
    image: "./imgs/randa.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. علاء أحمد", 
    image: "./imgs/alaa-ahmed.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. حنان أحمد", 
    image: "./imgs/hanan.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. مصطفى المشد", 
    image: "./imgs/mostafa.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. محمد بدوي", 
    image: "./imgs/m-b.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. عنان", 
    image: "./imgs/anan.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. كاميليا", 
    image: "./imgs/kamilia.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  }
    ,{
    name:"د. أحمد جمال عبدالناصر", 
    image: "./imgs/ahmed-g-a.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. نجلاء", 
    image: "./imgs/naglaa.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. أحمد جمال", 
    image: "./imgs/ahmed g.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. هيام", 
    image: "./imgs/hayam.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. محمد غزال", 
    image: "./imgs/m-gh.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. راشد", 
    image: "./imgs/rashed.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. وائل", 
    image: "./imgs/wael.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  },{
    name:"د. هدى", 
    image: "./imgs/h.jpg",
    message:" مش هقول دلوقتي..",
    size:Math.random()*60+61  }
];

const mgz={
    name:"المستشار محمود زكي ", 
    image: "./imgs/z0709.jpg",
    message:" مش هقول دلوقتي..",
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
    }else if(searchQuery == "mzg90"){
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