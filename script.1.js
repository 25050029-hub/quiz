/* -------------------------------------------------------------
   CYBER GAMER eSPORTS THEME - JAVASCRIPT LOGIC (script.js)
   ------------------------------------------------------------- */

// BỘ DỮ LIỆU 11 CÂU HỎI TRẮC NGHIỆM LIÊN QUÂN
const questions = [
    {
        id: 1,
        type: 'single',
        question: 'Tướng nào dưới đây thuộc nhóm vai trò Xạ Thủ chuyên đi đường Rồng trong Liên Quân Mobile?',
        image: '',
        options: ['Valhein', 'Gildur', 'Thane', 'Cresht'],
        correct: [0],
        explanation: 'Valhein là một trong những tướng Xạ Thủ khởi đầu kinh điển nhất trò chơi với khả năng gây sát thương hỗn hợp (Vật lý & Phép) cùng lượng khống chế liên tục từ nội tại.'
    },
    {
        id: 2,
        type: 'multiple',
        question: 'Những mục tiêu lớn nào xuất hiện trên bản đồ đem lại bùa lợi mạnh mẽ cho toàn đội? (Chọn tất cả đáp án đúng)',
        image: '',
        options: ['Rồng Kraydus / Rồng Ánh Sáng', 'Tà Thần Caesar', 'Quái Rùa Tí Hon', 'Lính Xe Xe'],
        correct: [0, 1],
        explanation: 'Rồng Ánh Sáng và Tà Thần Caesar là 2 mục tiêu lớn quan trọng nhất bản đồ: Rồng cung cấp vàng, kinh nghiệm và bùa tăng sát thương; Tà Thần Caesar mang lại khả năng hồi phục, bùa sát thương và triệu hồi Caesar tấn công đường.'
    },
    {
        id: 3,
        type: 'single',
        question: 'Chiêu cuối "Sứ Mệnh Cứu Thế" của vị tướng nào cho phép bay đến vị trí đồng đội trên toàn bản đồ?',
        image: '',
        options: ['Xeniel', 'Maloch', 'TeeMee', 'Lumburr'],
        correct: [0],
        explanation: 'Chiêu 3 của Xeniel (Sứ Mệnh Cứu Thế) giúp anh ta chọn một đồng minh bất kỳ trên bản đồ, truyền bảo hộ và đáp xuống bảo vệ đồng đội đồng thời hồi máu cho cả hai.'
    },
    {
        id: 4,
        type: 'image-single',
        question: 'Quan sát hình ảnh trang bị bên dưới. Đây là trang bị "Phức Hợp Kiếm". Nó mang lại chỉ số/nội tại nổi bật nào?',
        image: 'assets/phuc-hop-kiem.png',
        options: ['Nội tại Sức mạnh nguyên tố (đánh thường sau chiêu gây thêm sát thương)', 'Khả năng tàng hình khi thấp máu', 'Băng giá làm chậm 90% tốc chạy', 'Tăng 100% hút máu phép'],
        correct: [0],
        explanation: 'Phức Hợp Kiếm là trang bị đắt giá cung cấp chỉ số toàn diện (công vật lý, tốc đánh, hút máu, giảm hồi chiêu) và nội tại Sức Mạnh Nguyên Tố giúp đòn đánh thường sau khi dùng chiêu tăng mạnh sát thương.'
    },
    {
        id: 5,
        type: 'multiple',
        question: 'Những phép bổ trợ nào thường được sử dụng phổ biến nhất cho các vị tướng Xạ Thủ thiếu cơ động? (Chọn 2 đáp án)',
        image: '',
        options: ['Tốc Biến', 'Tốc Hành', 'Trừng Trị', 'Cấm Trụ'],
        correct: [0, 1],
        explanation: 'Tốc Biến (dịch chuyển tức thời né chiêu) và Tốc Hành (tăng mạnh tốc chạy thả diều) là 2 phép bổ trợ sống còn giúp Xạ Thủ kém cơ động sống sót trong giao tranh.'
    },
    {
        id: 6,
        type: 'single',
        question: 'Vị tướng Pháp Sư nào có cơ chế phân thân và hoán đổi vị trí cực kỳ ảo diệu với những cây dù?',
        image: '',
        options: ['Murad', 'Airi', 'Liliana', 'Keera'],
        correct: [2],
        explanation: 'Liliana là vị tướng Pháp Sư sát thủ đa dạng lối chơi với 2 dạng Người và Cáo, sở hữu khả năng lướt biến ảo và biến hóa linh hoạt trong giao tranh.'
    },
    {
        id: 7,
        type: 'image-single',
        question: 'Bản đồ Bình Nguyên Vô Tận trong Liên Quân Mobile có tổng cộng bao nhiêu đường chính dẫn đến nhà chính đối phương?',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="%230f172a"/><circle cx="200" cy="100" r="70" stroke="%2306b6d4" stroke-width="2" fill="none"/><line x1="50" y1="50" x2="350" y2="150" stroke="%23f59e0b" stroke-width="3"/><line x1="50" y1="150" x2="350" y2="50" stroke="%23f59e0b" stroke-width="3"/><line x1="50" y1="100" x2="350" y2="100" stroke="%23f59e0b" stroke-width="3"/><text x="50%" y="90%" dominant-baseline="middle" text-anchor="middle" fill="%23fff" font-size="14">BẢN ĐỒ BÌNH NGUYÊN VÔ TẬN</text></svg>',
        options: ['2 đường', '3 đường', '4 đường', '5 đường'],
        correct: [1],
        explanation: 'Bản đồ 5v5 tiêu chuẩn gồm 3 đường chính: Đường Tà Thần Caesar (Đường Top), Đường Giữa (Đường Mid), và Đường Rồng (Đường Bot).'
    },
    {
        id: 8,
        type: 'single',
        question: 'Khi di chuyển trong các bụi cỏ trên bản đồ, trạng thái nào sau đây sẽ xảy ra với tướng của bạn?',
        image: '',
        options: ['Hồi lại 100% máu ngay lập tức', 'Tàng hình đối với kẻ địch bên ngoài bụi (nếu không tấn công)', 'Tự động tăng 50% công vật lý', 'Không thể dùng kỹ năng'],
        correct: [1],
        explanation: 'Bụi cỏ ẩn che tầm nhìn, giúp tướng tàng hình đối với kẻ địch đứng ngoài bụi (trừ khi tướng bạn đang tấn công hoặc bị trinh sát bởi kỹ năng soi ánh sáng).'
    },
    {
        id: 9,
        type: 'multiple',
        question: 'Vị trí Trợ Thủ / Đỡ Đòn trong đội hình có vai trò cốt lõi nào? (Chọn tất cả đáp án đúng)',
        image: '',
        options: ['Che chắn sát thương và khống chế kẻ địch', 'Lấy tầm nhìn trong bụi cho đồng đội', 'Farming ăn hết tài nguyên lính của Xạ Thủ', 'Bảo vệ chủ lực (Xạ thủ/Pháp sư)'],
        correct: [0, 1, 3],
        explanation: 'Trợ thủ có nhiệm vụ mở giao tranh, khống chế, lấy tầm nhìn và bảo vệ chủ lực. Việc tranh giành tài nguyên lính của Xạ thủ là hành vi sai lầm kỹ năng.'
    },
    {
        id: 10,
        type: 'single',
        question: 'Thuật ngữ "Gank" trong game Liên Quân có nghĩa là gì?',
        image: '',
        options: ['Hành động di chuyển đến đường khác để đảo gank hỗ trợ đồng đội tiêu diệt địch', 'Đứng yên trong bệ đá cổ không di chuyển', 'Mua đồ trong cửa hàng', 'Chat chửi thề với đối thủ'],
        correct: [0],
        explanation: 'Gank là thuật ngữ chỉ việc đảo đường bất ngờ để phối hợp với đồng đội tạo thế hơn người và tiêu diệt đối thủ.'
    },
    {
        id: 11,
        type: 'image-single',
        question: 'Quan sát hình ảnh trang bị "Giáp Hộ Mệnh" bên dưới. Trang bị này mang lại hiệu ứng đặc biệt nào cho người sở hữu?',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="100%"><defs><linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2306201b"/><stop offset="100%" stop-color="%23022c22"/></linearGradient><linearGradient id="shield" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%2334d399"/><stop offset="100%" stop-color="%23059669"/></linearGradient><filter id="glow2"><feGaussianBlur stdDeviation="5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="500" height="280" rx="12" fill="url(%23bg2)" stroke="%2310b981" stroke-width="2"/><rect x="190" y="30" width="120" height="120" rx="16" fill="%23061512" stroke="%2334d399" stroke-width="3" filter="url(%23glow2)"/><path d="M 250 45 C 275 45 290 55 290 85 C 290 115 250 135 250 135 C 250 135 210 115 210 85 C 210 55 225 45 250 45 Z" fill="url(%23shield)" filter="url(%23glow2)"/><path d="M 243 70 L 257 70 L 257 83 L 270 83 L 270 97 L 257 97 L 257 110 L 243 110 L 243 97 L 230 97 L 230 83 L 243 83 Z" fill="%23ffffff"/><text x="250" y="185" text-anchor="middle" fill="%2334d399" font-size="20" font-weight="bold" font-family="sans-serif">TRANG BỊ: GIÁP HỘ MỆNH</text><text x="250" y="215" text-anchor="middle" fill="%239ca3af" font-size="14" font-family="sans-serif">Giá: 2,240 Vàng | Nhóm: Phòng Thủ</text><text x="250" y="240" text-anchor="middle" fill="%23fbbf24" font-size="13" font-weight="600" font-family="sans-serif">✦ Hồi Sinh Sau Khi Bị Hạ Gục ✦</text></svg>',
        options: ['Tăng tốc độ di chuyển gấp 2 lần', 'Hồi sinh tướng sau khi bị hạ gục (tối đa 2 lần/trận)', 'Miễn nhiễm toàn bộ sát thương phép', 'Biến tướng thành khổng lồ'],
        correct: [1],
        explanation: 'Giáp Hộ Mệnh cung cấp khả năng hồi sinh tại chỗ sau 2 giây khi bị hạ gục (giúp đảo ngược giao tranh), có hiệu lực tối đa 2 lần trong 1 trận đấu.'
    }
];

// BẢNG ĐÁNH GIÁ RANK CỦA HỆ THỐNG
const rankEvaluations = [
    {
        minScore: 0,
        maxScore: 4,
        title: 'HẠNG ĐỒNG / BẠC - TẬP SỰ BÌNH NGUYÊN VÔ TẬN',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23b45309" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
        description: 'Đánh giá: Bạn mới chỉ dừng ở mức tìm hiểu cơ bản về trò chơi! Bạn chưa nắm rõ cơ chế trang bị, vai trò các đường cũng như tầm quan trọng của các mục tiêu lớn trên bản đồ. Hãy tích cực đấu luyện với máy và đọc thêm mô tả chiêu thức để nâng cao tư duy chơi game nhé!'
    },
    {
        minScore: 5,
        maxScore: 7,
        title: 'HẠNG VÀNG / BẠCH KIM - CHIẾN BINH KINH NGHIỆM',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23f59e0b" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
        description: 'Đánh giá: Bạn có lượng kiến thức khá tốt về game! Bạn đã hiểu rõ kỹ năng tướng và vai trò căn bản. Tuy nhiên, để bứt phá lên các bậc Rank cao hơn, bạn cần rèn luyện thêm kỹ năng đọc bản đồ nhỏ, di chuyển kiểm soát mục tiêu lớn và tối ưu hóa thứ tự lên trang bị theo từng trận đấu.'
    },
    {
        minScore: 8,
        maxScore: 10,
        title: 'HẠNG KIM CƯƠNG / TINH ANH - CAO THỦ CHIẾN THUẬT',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%2306b6d4" stroke-width="2"><path d="M6 3h12l4 6-10 12L2 9z"/></svg>',
        description: 'Đánh giá: Trình độ hiểu biết của bạn rất ấn tượng! Bạn nắm vững hầu hết các thuật ngữ, cơ chế kỹ năng, phép bổ trợ và tư duy phối hợp đồng đội. Bạn hoàn toàn đủ năng lực làm chủ lực gánh đội trong các trận leo Rank căng thẳng.'
    },
    {
        minScore: 11,
        maxScore: 11,
        title: 'HẠNG THÁCH ĐẤU - HUYỀN THOẠI LIÊN QUÂN',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23ec4899" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
        description: 'Đánh giá: Tuyệt vời! Bạn đạt điểm số tối đa 11/11! Kiến thức về trò chơi của bạn vô cùng sâu sắc, từ thông số trang bị, cơ chế mục tiêu cho đến bối cảnh thuật ngữ chiến thuật. Bạn chính là một "Bách khoa toàn thư" sống của Liên Quân Mobile!'
    }
];

// BIẾN TRẠNG THÁI
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let isAnswerChecked = false;

// CHUYỂN TAB NAVIGATION
function switchTab(tabId) {
    document.querySelectorAll('.tab-page').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(`tab-${tabId}`);
    if (targetTab) targetTab.classList.add('active');

    const activeNav = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.getAttribute('onclick').includes(tabId));
    if (activeNav) activeNav.classList.add('active');

    if (tabId === 'quiz') {
        startQuiz();
    }
}

// BẮT ĐẦU TRẮC NGHIỆM
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    isAnswerChecked = false;
    loadQuestion();
}

// KHÔI PHỤC VỀ TRẮC NGHIỆM
function restartQuiz() {
    switchTab('quiz');
}

// TẢI CÂU HỎI
function loadQuestion() {
    isAnswerChecked = false;
    const q = questions[currentQuestionIndex];

    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    document.getElementById('question-count').innerText = `Câu hỏi ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('question-type').innerText = q.type.includes('multiple') ? '[Chọn nhiều đáp án]' : '[Chọn 1 đáp án]';

    document.getElementById('question-text').innerText = q.question;

    const imgContainer = document.getElementById('image-container');
    const imgEl = document.getElementById('question-img');
    if (q.image) {
        imgEl.src = q.image;
        imgContainer.style.display = 'block';
    } else {
        imgContainer.style.display = 'none';
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const inputType = q.type.includes('multiple') ? 'checkbox' : 'radio';

    q.options.forEach((opt, idx) => {
        const item = document.createElement('label');
        item.className = 'option-item';
        item.onclick = () => selectOption(idx, inputType);

        item.innerHTML = `
            <input type="${inputType}" name="option" value="${idx}" id="opt-${idx}">
            <span>${opt}</span>
        `;
        optionsContainer.appendChild(item);
    });

    const expBox = document.getElementById('explanation-box');
    expBox.className = 'explanation-box';
    expBox.style.display = 'none';

    document.getElementById('action-btn').innerText = 'Xác Nhận Đáp Án';
}

// CHỌN TÙY CHỌN
function selectOption(index, type) {
    if (isAnswerChecked) return;

    if (type === 'radio') {
        document.querySelectorAll('.option-item').forEach((el, idx) => {
            const radio = el.querySelector('input');
            if (idx === index) {
                el.classList.add('selected');
                radio.checked = true;
            } else {
                el.classList.remove('selected');
                radio.checked = false;
            }
        });
    } else {
        const item = document.querySelectorAll('.option-item')[index];
        const checkbox = item.querySelector('input');
        checkbox.checked = !checkbox.checked;
        item.classList.toggle('selected', checkbox.checked);
    }
}

// XỬ LÝ NÚT HÀNH ĐỘNG
function handleAction() {
    if (!isAnswerChecked) {
        checkAnswer();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
}

// KIỂM TRA ĐÁP ÁN
function checkAnswer() {
    const q = questions[currentQuestionIndex];
    const selectedInputs = document.querySelectorAll('#options-container input:checked');

    if (selectedInputs.length === 0) {
        alert('Vui lòng chọn ít nhất một đáp án!');
        return;
    }

    const selectedValues = Array.from(selectedInputs).map(i => parseInt(i.value));

    const isCorrect = q.correct.length === selectedValues.length &&
                      q.correct.every(val => selectedValues.includes(val));

    if (isCorrect) score++;

    userAnswers.push({
        question: q.question,
        selected: selectedValues,
        correct: q.correct,
        isCorrect: isCorrect,
        explanation: q.explanation
    });

    const expBox = document.getElementById('explanation-box');
    expBox.style.display = 'block';
    expBox.className = `explanation-box ${isCorrect ? 'correct' : 'incorrect'}`;
    expBox.innerHTML = `
        <strong>${isCorrect ? '✓ CHÍNH XÁC!' : '✗ CHƯA ĐÚNG!'}</strong><br>
        <span>${q.explanation}</span>
    `;

    isAnswerChecked = true;
    document.getElementById('action-btn').innerText = (currentQuestionIndex < questions.length - 1) ? 'Câu Tiếp Theo' : 'Xem Kết Quả Đánh Giá';
}

// HIỂN THỊ KẾT QUẢ RANK
function showResults() {
    switchTab('result');
    document.getElementById('progress-bar').style.width = '100%';

    const evalData = rankEvaluations.find(e => score >= e.minScore && score <= e.maxScore) || rankEvaluations[0];

    document.getElementById('result-title').innerText = evalData.title;
    document.getElementById('result-score').innerText = `Điểm số: ${score}/${questions.length}`;
    document.getElementById('result-desc').innerText = evalData.description;
    document.getElementById('result-img').src = evalData.image;

    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    userAnswers.forEach((ans, i) => {
        const item = document.createElement('div');
        item.className = `review-item ${ans.isCorrect ? 'correct' : 'incorrect'}`;
        item.innerHTML = `
            <div class="review-q">Câu ${i + 1}: ${ans.question} (${ans.isCorrect ? 'Đúng' : 'Sai'})</div>
            <div class="review-exp"><strong>Giải thích:</strong> ${ans.explanation}</div>
        `;
        reviewList.appendChild(item);
    });
}