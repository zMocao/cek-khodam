const khodamNames = [
    'Singa Barong',
    'Naga Kuning',
    'Macan Putih',
    'Harimau Jawa',
    'Siluman Ular',
    'Ratu Kidul',
    'Kyai Kanjeng',
    'Putri Hijau',
    'Sunan Kalijaga',
    'Nyai Blorong',
    'Eyang Semar',
    'Dewi Lanjar',
    'Prabu Siliwangi',
    'Kyai Ageng',
    'Ki Juru Mertani',
    'Dewi Sri',
    'Eyang Jugo',
    'Raden Mas Said',
    'Mbah Mijan',
    'Bhatara Karang',
    'Buaya Putih'
    
];

const nameToKhodamMap = {};

function updateKhodam() {
    const name = document.getElementById('nameInput').value.trim();
    const resultBox = document.getElementById('resultBox');
    const audio = document.getElementById('audio');

    if (name) {
        if (!nameToKhodamMap[name]) {
            const randomKhodam = khodamNames[Math.floor(Math.random() * khodamNames.length)];
            nameToKhodamMap[name] = randomKhodam;
        }
        const khodam = nameToKhodamMap[name];
        resultBox.textContent = `Khodam ${name} : ${khodam}`;
        resultBox.classList.add('show-result');

        // Memainkan audio
        audio.play();
    } else {
        resultBox.textContent = 'MASUKKAN NAMA';
        resultBox.classList.remove('show-result');
    }
}