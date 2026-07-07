// === GITHUB REPOSITORY CONFIGURATION ===
// File ini digunakan oleh index.html dan template streaming dari admin.html

const GH_CONFIG = {
    // [UNTUK ADMIN.HTML - BAGIAN TEMPLATE STREAMING]
    // Ganti username dan nama repo di sini
    USER: 'flixora23',
    REPO: 'flixorazone.web.id'
};

// [UNTUK INDEX.HTML]
// Endpoint API otomatis terbentuk dari konfigurasi di atas
const GH_API_URL = `https://api.github.com/repos/${GH_CONFIG.USER}/${GH_CONFIG.REPO}/git/trees/main?recursive=1`;
