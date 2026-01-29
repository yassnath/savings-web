const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const STORAGE = {
  user: "svx_user",
  session: "svx_session",
  data: "svx_data",
  theme: "svx_theme",
  lang: "svx_lang",
  summaryRange: "svx_summary_range",
  historyFrom: "svx_history_from",
  historyTo: "svx_history_to",
};

const ICON_SETS = {
  "standard-light": {
    brand: "🌤️",
    profile: "😊",
    income: "💵",
    expense: "🧾",
    saving: "💰",
    dreams: "🌈",
    report: "📊",
    history: "📒",
    calculator: "🧮",
    themes: "🌤️",
    settings: "⚙️",
    statsIncome: "💵",
    statsExpense: "🧾",
    statsSaving: "💰",
    statsBalance: "✨",
    logout: "🚪",
  },
  "standard-dark": {
    brand: "🌙",
    profile: "🕶️",
    income: "💹",
    expense: "🧾",
    saving: "🪙",
    dreams: "🌙",
    report: "📈",
    history: "🗂️",
    calculator: "🧮",
    themes: "🎛️",
    settings: "🛠️",
    statsIncome: "⬆️",
    statsExpense: "⬇️",
    statsSaving: "🪙",
    statsBalance: "✨",
    logout: "🚪",
  },
  "cartoon-food": {
    brand: "🍔",
    profile: "🍩",
    income: "🧁",
    expense: "🍟",
    saving: "🥪",
    dreams: "🍰",
    report: "🍕",
    history: "🍱",
    calculator: "🍭",
    themes: "🍽️",
    settings: "🍳",
    statsIncome: "🍞",
    statsExpense: "🍔",
    statsSaving: "🍯",
    statsBalance: "🍬",
    logout: "🍽️",
  },
  "cartoon-space": {
    brand: "🚀",
    profile: "👩‍🚀",
    income: "💫",
    expense: "🪐",
    saving: "🛰️",
    dreams: "🌌",
    report: "📡",
    history: "🧭",
    calculator: "🧭",
    themes: "🌠",
    settings: "🛰️",
    statsIncome: "⭐",
    statsExpense: "☄️",
    statsSaving: "🛰️",
    statsBalance: "🌟",
    logout: "🛸",
  },
  "cartoon-monster": {
    brand: "👾",
    profile: "👹",
    income: "🍬",
    expense: "🧟‍♂️",
    saving: "🧪",
    dreams: "🧠",
    report: "🧿",
    history: "📓",
    calculator: "🔮",
    themes: "🧪",
    settings: "🕸️",
    statsIncome: "👻",
    statsExpense: "👾",
    statsSaving: "🧪",
    statsBalance: "✨",
    logout: "🚪",
  },
  "cartoon-hero": {
    brand: "🦸",
    profile: "🦸‍♀️",
    income: "⚡",
    expense: "💥",
    saving: "🛡️",
    dreams: "⭐",
    report: "🏆",
    history: "📜",
    calculator: "🔧",
    themes: "🏁",
    settings: "🛠️",
    statsIncome: "⚡",
    statsExpense: "💥",
    statsSaving: "🛡️",
    statsBalance: "🌟",
    logout: "🚪",
  },
  "cartoon-sea": {
    brand: "🌊",
    profile: "🐚",
    income: "🐠",
    expense: "🦀",
    saving: "🐬",
    dreams: "🐳",
    report: "🪸",
    history: "🗺️",
    calculator: "🐙",
    themes: "🌊",
    settings: "⚓",
    statsIncome: "🐠",
    statsExpense: "🦀",
    statsSaving: "🐬",
    statsBalance: "✨",
    logout: "🌊",
  },
  "cartoon-plant": {
    brand: "🪴",
    profile: "🌿",
    income: "🌱",
    expense: "🍂",
    saving: "🌲",
    dreams: "🌷",
    report: "🍃",
    history: "📗",
    calculator: "🍀",
    themes: "🌻",
    settings: "🍃",
    statsIncome: "🌱",
    statsExpense: "🍂",
    statsSaving: "🌿",
    statsBalance: "✨",
    logout: "🌿",
  },
  "cartoon-pinky": {
    brand: "🎀",
    profile: "💗",
    income: "💖",
    expense: "💔",
    saving: "💎",
    dreams: "🌸",
    report: "💫",
    history: "📔",
    calculator: "💮",
    themes: "🌷",
    settings: "💫",
    statsIncome: "💖",
    statsExpense: "💔",
    statsSaving: "💎",
    statsBalance: "✨",
    logout: "💫",
  },
  "cartoon-colorful": {
    brand: "🌈",
    profile: "🦄",
    income: "🎉",
    expense: "🎈",
    saving: "🎁",
    dreams: "🌟",
    report: "📊",
    history: "📚",
    calculator: "🧩",
    themes: "🪩",
    settings: "🎨",
    statsIncome: "🎉",
    statsExpense: "🎈",
    statsSaving: "🎁",
    statsBalance: "✨",
    logout: "🎪",
  },
};

const THEME_ALIAS = {
  "cartoon-pirate": "cartoon-sea",
};

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const defaultData = {
  income: [],
  expense: [],
  saving: [],
  dreams: [],
};

const state = {
  data: loadData(),
  theme: localStorage.getItem(STORAGE.theme) || "standard-light",
  summaryRange: localStorage.getItem(STORAGE.summaryRange) || "month",
  historyFrom: localStorage.getItem(STORAGE.historyFrom) || "",
  historyTo: localStorage.getItem(STORAGE.historyTo) || "",
};

let currentReportMode = "month";
let confirmResolver = null;
let currentLang = localStorage.getItem(STORAGE.lang) || "id";

const I18N = {
  id: {
    appTitle: "Tabungan Solvix Studio",
    brandTitle: "Tabungan",
    brandSub: "Catatan keuangan harian",
    heroTitle: "Ringkasan Hari Ini",
    summaryTitleToday: "Ringkasan Hari Ini",
    summaryTitleWeek: "Ringkasan Minggu Ini",
    summaryTitleMonth: "Ringkasan Bulan Ini",
    summaryTitleYear: "Ringkasan Tahun Ini",
    summaryTitleAll: "Ringkasan Semua",
    summaryTitleRange: "Ringkasan Periode",
    summaryToday: "Hari ini",
    summaryWeek: "Minggu ini",
    summaryMonth: "Bulan ini",
    summaryYear: "Tahun ini",
    summaryAll: "Semua",
    labelIncome: "Pemasukkan",
    labelExpense: "Pengeluaran",
    labelBalance: "Saldo",
    pageIncomeTitle: "Pemasukkan",
    pageIncomeDesc: "Catat semua pemasukkanmu dengan rapi.",
    pageExpenseTitle: "Pengeluaran",
    pageExpenseDesc: "Kontrol pengeluaran supaya tetap aman.",
    pageSavingTitle: "Tabungan",
    pageSavingDesc: "Target tabungan jadi lebih cepat tercapai.",
    pageDreamsTitle: "Target",
    pageDreamsDesc: "Visualisasikan targetmu dan lihat progresnya.",
    pageCalculatorTitle: "Kalkulator",
    pageCalculatorDesc: "Hitung cepat kebutuhan keuanganmu.",
    pageReportTitle: "Laporan",
    pageHistoryTitle: "History",
    pageHistoryDesc: "Riwayat transaksi pemasukkan dan pengeluaran.",
    pageProfileTitle: "Profile",
    pageProfileDesc: "Data biodata ditampilkan di sini.",
    pageThemesTitle: "Ganti Tema",
    pageThemesDesc: "Pilih tema favoritmu: kartun atau standard.",
    pageSettingsTitle: "Pengaturan",
    pageSettingsDesc: "Kelola bahasa dan keamanan akun.",
    labelAmount: "Nominal",
    labelDate: "Tanggal",
    labelFrom: "Dari",
    labelTo: "Sampai",
    labelCategory: "Kategori",
    labelIncomeSource: "Sumber Pemasukkan",
    labelIncomeChannel: "Masuk ke",
    labelPaymentMethod: "Metode Pembayaran",
    labelBankWallet: "Bank / Wallet",
    labelNote: "Catatan",
    labelGoal: "Tujuan",
    labelDreamTitle: "Nama Target",
    labelTargetAmount: "Target Dana",
    labelCurrentAmount: "Dana Terkumpul",
    labelDeadline: "Deadline",
    labelFullName: "Nama Lengkap",
    labelEmail: "Email",
    labelPhone: "No. HP",
    labelAddress: "Negara",
    labelBirthdate: "Tanggal Lahir",
    labelBio: "Bio Singkat",
    labelUsername: "Username",
    labelPassword: "Password",
    labelCurrentPassword: "Password Saat Ini",
    labelNewPassword: "Password Baru",
    labelConfirmPassword: "Konfirmasi Password",
    profileUpdateTitle: "Update Biodata",
    btnSaveIncome: "Simpan Pemasukkan",
    btnSaveExpense: "Simpan Pengeluaran",
    btnSaveSaving: "Simpan Tabungan",
    btnSaveDream: "Simpan Target",
    btnSaveProfile: "Simpan Profil",
    btnSavePassword: "Simpan Password",
    btnLogout: "Keluar",
    btnExportPdf: "Export PDF",
    btnExportCsv: "Export CSV",
    reportMonthly: "Bulanan",
    reportYearly: "Tahunan",
    navIncome: "Pemasukkan",
    navExpense: "Pengeluaran",
    navDreams: "Target",
    navHistory: "History",
    menuThemes: "Tema",
    menuCalculator: "Kalkulator",
    menuReport: "Laporan",
    menuProfile: "Profile",
    menuSettings: "Pengaturan",
    languageLabel: "Bahasa",
    guest: "Guest",
    user: "User",
    themeStandardLight: "Cerah Klasik",
    themeStandardDark: "Malam Tenang",
    themeCartoonFood: "Snack Land",
    themeCartoonSpace: "Galaksi Ceria",
    themeCartoonMonster: "Monster Lucu",
    themeCartoonHero: "Super Pahlawan",
    themeCartoonSea: "Laut Biru",
    themeCartoonPlant: "Taman Hijau",
    themeCartoonPinky: "Pink Dream",
    themeCartoonColorful: "Pelangi Ceria",
    placeholderIncomeCategory: "Gaji, bonus, dll",
    placeholderExpenseCategory: "Makan, transport, dll",
    placeholderSavingGoal: "Dana darurat, liburan",
    placeholderDreamTitle: "Contoh: Laptop baru",
    placeholderDreamNote: "Strategi untuk target",
    placeholderNote: "Detail tambahan",
    optionChooseSource: "Pilih sumber",
    optionWork: "Kerja",
    optionBusiness: "Bisnis",
    optionFreelance: "Freelance",
    optionBonus: "Bonus",
    optionSavings: "Tabungan",
    optionInvestment: "Investasi",
    optionOther: "Lainnya",
    optionChooseAccount: "Pilih rekening",
    optionChooseCountry: "Pilih negara",
    optionCash: "Cash",
    optionEWallet: "E-Wallet",
    optionChooseMethod: "Pilih metode",
    optionTransfer: "Transfer",
    optionQRIS: "QRIS",
    optionDebit: "Debit",
    optionCredit: "Kredit",
    optionChooseBank: "Pilih bank/wallet",
    splashTitle: "Selamat Datang!",
    splashDesc: "Masuk untuk mulai mengelola tabunganmu.",
    splashBtn: "Masuk Aplikasi",
    authSignInTab: "Sign In",
    authSignUpTab: "Sign Up",
    settingsLanguageTitle: "Bahasa",
    settingsPasswordTitle: "Ganti Password",
    btnSignIn: "Masuk",
    btnSignUp: "Buat Akun",
    btnClose: "Tutup",
    confirmTitle: "Konfirmasi",
    confirmDefault: "Yakin melakukan aksi ini?",
    btnCancel: "Batal",
    btnConfirm: "Ya, Lanjut",
    alertTitle: "Info",
    btnOk: "Oke",
    btnEdit: "Edit",
    btnDelete: "Hapus",
    titleEditData: "Edit Data",
    titleEditTarget: "Edit Target",
    msgFormIncomplete: "Form belum lengkap",
    msgDataSaved: "Data tersimpan.",
    msgEditMode: "Mode edit aktif. Ubah data lalu simpan.",
    msgDeleteConfirm: "Yakin ingin menghapus data ini?",
    msgDreamDeleteConfirm: "Yakin ingin menghapus target ini?",
    msgProfileSaved: "Profil diperbarui.",
    msgSignInOrUp: "Silakan sign in atau sign up.",
    msgSignUpSuccess: "Akun berhasil dibuat. Silakan sign in.",
    msgSignUpTitle: "Sign Up Berhasil",
    msgNoAccount: "Akun belum ada. Silakan sign up dulu.",
    msgNotRegistered: "Belum Terdaftar",
    msgWelcome: "Selamat datang, {name}!",
    msgLoginSuccess: "Login Berhasil",
    msgLoginFailed: "Login Gagal",
    msgWrongCredentials: "Username atau password salah.",
    msgConfirmProfileSave: "Simpan perubahan profil?",
    msgConfirmSaveNew: "Simpan data baru ini?",
    msgConfirmSaveEdit: "Simpan perubahan data ini?",
    msgConfirmDreamNew: "Simpan target baru ini?",
    msgConfirmDreamEdit: "Simpan perubahan target ini?",
    msgConfirmLogout: "Yakin ingin keluar dari akun?",
    msgPasswordConfirm: "Simpan perubahan password?",
    msgPasswordWrong: "Password saat ini salah.",
    msgPasswordMismatch: "Konfirmasi password tidak cocok.",
    msgPasswordSame: "Password baru harus berbeda dari sebelumnya.",
    msgPasswordUpdated: "Password berhasil diperbarui.",
    msgThemeUpdated: "Tema diperbarui.",
    msgReportMonthly: "Report Bulanan dipilih.",
    msgReportYearly: "Report Tahunan dipilih.",
    msgProfileOpen: "Profil dibuka.",
    msgProfileClose: "Profil ditutup.",
    msgLanguageChanged: "Bahasa diubah.",
    msgMenuOpen: "Menu {menu} dibuka.",
    msgIncompleteDream: "Lengkapi nama target dan deadline.",
    msgTargetInvalid: "Target dana harus lebih dari 0.",
    msgCurrentInvalid: "Dana terkumpul tidak valid.",
    msgThemeConfirm: "Ganti tema ke {theme}?",
    msgCategoryRequired: "Kategori harus diisi.",
    msgDateRequired: "Tanggal harus diisi.",
    msgAmountInvalid: "Nominal harus lebih dari 0.",
    msgExtraRequired: "Lengkapi semua pilihan tambahan.",
    msgEmptyDataTitle: "Belum ada data.",
    msgEmptyDataDesc: "Tambahkan data baru di atas.",
    historyEmptyTitle: "Belum ada transaksi.",
    historyEmptyDesc: "Mulai catat pemasukkan dan pengeluaranmu.",
    msgNoNote: "Tanpa catatan",
    msgEmptyDreamTitle: "Belum ada target.",
    msgEmptyDreamDesc: "Buat target impianmu.",
    msgNoAccountTitle: "Belum ada akun.",
    msgNoAccountDesc: "Silakan daftar terlebih dahulu.",
    metaSource: "Sumber",
    metaDeposit: "Masuk",
    metaMethod: "Metode",
    metaBank: "Bank",
    reportModeMonthly: "Bulanan",
    reportModeYearly: "Tahunan",
    reportModeLabel: "Mode",
    reportTotalLabel: "Total saldo periode",
    reportIncomeLabel: "Total pemasukkan",
    reportExpenseLabel: "Total pengeluaran",
    reportHeaderPeriod: "Periode",
    reportHeaderValue: "Saldo",
    msgExportBlocked: "Popup diblokir. Izinkan popup untuk export PDF.",
  },
  en: {
    appTitle: "Solvix Studio Savings",
    brandTitle: "Savings",
    brandSub: "Daily finance tracker",
    heroTitle: "Today Summary",
    summaryTitleToday: "Today's Summary",
    summaryTitleWeek: "This Week Summary",
    summaryTitleMonth: "This Month Summary",
    summaryTitleYear: "This Year Summary",
    summaryTitleAll: "Overall Summary",
    summaryTitleRange: "Summary Range",
    summaryToday: "Today",
    summaryWeek: "This Week",
    summaryMonth: "This Month",
    summaryYear: "This Year",
    summaryAll: "All Time",
    labelIncome: "Income",
    labelExpense: "Expense",
    labelBalance: "Balance",
    pageIncomeTitle: "Income",
    pageIncomeDesc: "Track all your income neatly.",
    pageExpenseTitle: "Expense",
    pageExpenseDesc: "Keep your spending under control.",
    pageSavingTitle: "Savings",
    pageSavingDesc: "Reach your savings goals faster.",
    pageDreamsTitle: "Goals",
    pageDreamsDesc: "Visualize your goals and track progress.",
    pageCalculatorTitle: "Calculator",
    pageCalculatorDesc: "Quickly calculate your finances.",
    pageReportTitle: "Report",
    pageHistoryTitle: "History",
    pageHistoryDesc: "Income and expense transaction history.",
    pageProfileTitle: "Profile",
    pageProfileDesc: "Your biodata appears here.",
    pageThemesTitle: "Change Theme",
    pageThemesDesc: "Pick your favorite theme: cartoon or standard.",
    pageSettingsTitle: "Settings",
    pageSettingsDesc: "Manage language and account security.",
    labelAmount: "Amount",
    labelDate: "Date",
    labelFrom: "From",
    labelTo: "To",
    labelCategory: "Category",
    labelIncomeSource: "Income Source",
    labelIncomeChannel: "Deposit To",
    labelPaymentMethod: "Payment Method",
    labelBankWallet: "Bank / Wallet",
    labelNote: "Note",
    labelGoal: "Goal",
    labelDreamTitle: "Goal Name",
    labelTargetAmount: "Target Amount",
    labelCurrentAmount: "Current Amount",
    labelDeadline: "Deadline",
    labelFullName: "Full Name",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelAddress: "Country",
    labelBirthdate: "Birthdate",
    labelBio: "Short Bio",
    labelUsername: "Username",
    labelPassword: "Password",
    labelCurrentPassword: "Current Password",
    labelNewPassword: "New Password",
    labelConfirmPassword: "Confirm Password",
    profileUpdateTitle: "Update Biodata",
    btnSaveIncome: "Save Income",
    btnSaveExpense: "Save Expense",
    btnSaveSaving: "Save Savings",
    btnSaveDream: "Save Goal",
    btnSaveProfile: "Save Profile",
    btnSavePassword: "Save Password",
    btnLogout: "Logout",
    btnExportPdf: "Ekspor PDF",
    btnExportCsv: "Ekspor CSV",
    reportMonthly: "Monthly",
    reportYearly: "Yearly",
    navIncome: "Income",
    navExpense: "Expense",
    navDreams: "Goals",
    navHistory: "History",
    menuThemes: "Theme",
    menuCalculator: "Calculator",
    menuReport: "Report",
    menuProfile: "Profile",
    menuSettings: "Settings",
    languageLabel: "Language",
    guest: "Guest",
    user: "User",
    themeStandardLight: "Classic Glow",
    themeStandardDark: "Midnight Calm",
    themeCartoonFood: "Snack Land",
    themeCartoonSpace: "Cosmic Fun",
    themeCartoonMonster: "Funny Monsters",
    themeCartoonHero: "Super Heroes",
    themeCartoonSea: "Ocean Breeze",
    themeCartoonPlant: "Green Garden",
    themeCartoonPinky: "Pink Dream",
    themeCartoonColorful: "Rainbow Pop",
    placeholderIncomeCategory: "Salary, bonus, etc",
    placeholderExpenseCategory: "Food, transport, etc",
    placeholderSavingGoal: "Emergency fund, vacation",
    placeholderDreamTitle: "Example: New laptop",
    placeholderDreamNote: "Strategy for the goal",
    placeholderNote: "Additional details",
    optionChooseSource: "Choose source",
    optionWork: "Work",
    optionBusiness: "Business",
    optionFreelance: "Freelance",
    optionBonus: "Bonus",
    optionSavings: "Savings",
    optionInvestment: "Investment",
    optionOther: "Other",
    optionChooseAccount: "Choose account",
    optionChooseCountry: "Choose country",
    optionCash: "Cash",
    optionEWallet: "E-Wallet",
    optionChooseMethod: "Choose method",
    optionTransfer: "Transfer",
    optionQRIS: "QRIS",
    optionDebit: "Debit",
    optionCredit: "Credit",
    optionChooseBank: "Choose bank/wallet",
    splashTitle: "Welcome!",
    splashDesc: "Sign in to start managing your savings.",
    splashBtn: "Enter App",
    authSignInTab: "Sign In",
    authSignUpTab: "Sign Up",
    settingsLanguageTitle: "Language",
    settingsPasswordTitle: "Change Password",
    btnSignIn: "Sign In",
    btnSignUp: "Create Account",
    btnClose: "Close",
    confirmTitle: "Confirmation",
    confirmDefault: "Are you sure you want to continue?",
    btnCancel: "Cancel",
    btnConfirm: "Yes, Continue",
    alertTitle: "Info",
    btnOk: "OK",
    btnEdit: "Edit",
    btnDelete: "Delete",
    titleEditData: "Edit Data",
    titleEditTarget: "Edit Goal",
    msgFormIncomplete: "Form is incomplete",
    msgDataSaved: "Data saved.",
    msgEditMode: "Edit mode active. Update then save.",
    msgDeleteConfirm: "Are you sure you want to delete this data?",
    msgDreamDeleteConfirm: "Are you sure you want to delete this goal?",
    msgProfileSaved: "Profile updated.",
    msgSignInOrUp: "Please sign in or sign up.",
    msgSignUpSuccess: "Account created. Please sign in.",
    msgSignUpTitle: "Sign Up Success",
    msgNoAccount: "No account found. Please sign up first.",
    msgNotRegistered: "Not Registered",
    msgWelcome: "Welcome, {name}!",
    msgLoginSuccess: "Login Success",
    msgLoginFailed: "Login Failed",
    msgWrongCredentials: "Username or password is incorrect.",
    msgConfirmProfileSave: "Save profile changes?",
    msgConfirmSaveNew: "Save this new data?",
    msgConfirmSaveEdit: "Save these changes?",
    msgConfirmDreamNew: "Save this new goal?",
    msgConfirmDreamEdit: "Save changes to this goal?",
    msgConfirmLogout: "Are you sure you want to log out?",
    msgPasswordConfirm: "Save password changes?",
    msgPasswordWrong: "Current password is incorrect.",
    msgPasswordMismatch: "Password confirmation does not match.",
    msgPasswordSame: "New password must be different.",
    msgPasswordUpdated: "Password updated successfully.",
    msgThemeUpdated: "Theme updated.",
    msgReportMonthly: "Monthly report selected.",
    msgReportYearly: "Yearly report selected.",
    msgProfileOpen: "Profile opened.",
    msgProfileClose: "Profile closed.",
    msgLanguageChanged: "Language changed.",
    msgMenuOpen: "Opened {menu} menu.",
    msgIncompleteDream: "Complete the goal name and deadline.",
    msgTargetInvalid: "Target amount must be greater than 0.",
    msgCurrentInvalid: "Current amount is invalid.",
    msgThemeConfirm: "Change theme to {theme}?",
    msgCategoryRequired: "Category is required.",
    msgDateRequired: "Date is required.",
    msgAmountInvalid: "Amount must be greater than 0.",
    msgExtraRequired: "Please complete all extra fields.",
    msgEmptyDataTitle: "No data yet.",
    msgEmptyDataDesc: "Add new data above.",
    historyEmptyTitle: "No transactions yet.",
    historyEmptyDesc: "Start logging your income and expenses.",
    msgNoNote: "No notes",
    msgEmptyDreamTitle: "No goals yet.",
    msgEmptyDreamDesc: "Create your dream goal.",
    msgNoAccountTitle: "No account yet.",
    msgNoAccountDesc: "Please sign up first.",
    metaSource: "Source",
    metaDeposit: "Deposit",
    metaMethod: "Method",
    metaBank: "Bank",
    reportModeMonthly: "Monthly",
    reportModeYearly: "Yearly",
    reportModeLabel: "Mode",
    reportTotalLabel: "Total balance",
    reportIncomeLabel: "Total income",
    reportExpenseLabel: "Total expense",
    reportHeaderPeriod: "Period",
    reportHeaderValue: "Balance",
    msgExportBlocked: "Popup was blocked. Please allow popups to export PDF.",
  },
};


const fmt = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function t(key, params = {}) {
  const dict = I18N[currentLang] || I18N.id;
  let text = dict[key] || I18N.id[key] || key;
  Object.entries(params).forEach(([name, value]) => {
    text = text.replace(new RegExp(`\\{${name}\\}`, "g"), value);
  });
  return text;
}

function uid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random()}`;
}

function cloneDefaultData() {
  return JSON.parse(JSON.stringify(defaultData));
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE.data);
    if (!raw) return cloneDefaultData();
    const parsed = JSON.parse(raw);
    return {
      income: parsed.income || [],
      expense: parsed.expense || [],
      saving: parsed.saving || [],
      dreams: parsed.dreams || [],
    };
  } catch (err) {
    return cloneDefaultData();
  }
}

function saveData() {
  localStorage.setItem(STORAGE.data, JSON.stringify(state.data));
  updateSummary();
  updateReport(currentReportMode);
}

function getUser() {
  const raw = localStorage.getItem(STORAGE.user);
  return raw ? JSON.parse(raw) : null;
}

function setUser(user) {
  localStorage.setItem(STORAGE.user, JSON.stringify(user));
}

function getSession() {
  const raw = localStorage.getItem(STORAGE.session);
  return raw ? JSON.parse(raw) : null;
}

function setSession(username) {
  localStorage.setItem(STORAGE.session, JSON.stringify({ username }));
}

function clearSession() {
  localStorage.removeItem(STORAGE.session);
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatInputDate(date) {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatSaldo(value) {
  const abs = Math.abs(value);
  const formatted = new Intl.NumberFormat("id-ID").format(abs);
  const text = `Rp ${formatted},-`;
  return value < 0 ? `- ${text}` : text;
}

function parseLocalDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map((part) => Number(part));
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function getDefaultHistoryRange() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  return {
    from: formatInputDate(start),
    to: formatInputDate(now),
  };
}

function getHistoryBounds() {
  let start = parseLocalDate(state.historyFrom);
  let end = parseLocalDate(state.historyTo);
  if (start && end && start.getTime() > end.getTime()) {
    const temp = start;
    start = end;
    end = temp;
  }
  if (end) {
    end = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59, 999);
  }
  return { start, end };
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isInRange(date, start, end) {
  const time = date.getTime();
  if (start && time < start.getTime()) return false;
  if (end && time > end.getTime()) return false;
  return true;
}

function getRangeBoundaries(range) {
  const now = new Date();
  if (range === "today") {
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    return { start, end };
  }
  if (range === "week") {
    const day = now.getDay();
    const diffToMonday = (day + 6) % 7;
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diffToMonday);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return { start, end };
  }
  if (range === "month") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    return { start, end };
  }
  if (range === "year") {
    const start = new Date(now.getFullYear(), 0, 1);
    const end = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
    return { start, end };
  }
  return { start: null, end: null };
}

function sumByRange(list, range) {
  if (range === "all") {
    return list.reduce((acc, item) => acc + item.amount, 0);
  }
  const { start, end } = getRangeBoundaries(range);
  return list.reduce((acc, item) => {
    const date = parseLocalDate(item.date);
    if (!date) return acc;
    if (range === "today") {
      if (!isSameDay(date, new Date())) return acc;
      return acc + item.amount;
    }
    if (!isInRange(date, start, end)) return acc;
    return acc + item.amount;
  }, 0);
}

function filterByRange(list, range) {
  if (range === "all") return list.slice();
  const { start, end } = getRangeBoundaries(range);
  return list.filter((item) => {
    const date = parseLocalDate(item.date);
    if (!date) return false;
    if (range === "today") return isSameDay(date, new Date());
    return isInRange(date, start, end);
  });
}

function sumByDateRange(list, start, end) {
  if (!start && !end) {
    return list.reduce((acc, item) => acc + item.amount, 0);
  }
  return list.reduce((acc, item) => {
    const date = parseLocalDate(item.date);
    if (!date) return acc;
    if (!isInRange(date, start, end)) return acc;
    return acc + item.amount;
  }, 0);
}

function filterByDateRange(list, start, end) {
  if (!start && !end) return list.slice();
  return list.filter((item) => {
    const date = parseLocalDate(item.date);
    if (!date) return false;
    return isInRange(date, start, end);
  });
}

function applyTranslations() {
  const dict = I18N[currentLang] || I18N.id;
  document.documentElement.lang = currentLang === "en" ? "en" : "id";
  document.title = dict.appTitle || "Tabungan Solvix Studio";
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  $$("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });
  $$("[data-i18n-title]").forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (dict[key]) el.title = dict[key];
  });
  $$(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "id";
  localStorage.setItem(STORAGE.lang, currentLang);
  applyTranslations();
  populateCountrySelects();
  refreshCustomSelects();
  renderMoneyList("income", $("#incomeList"));
  renderMoneyList("expense", $("#expenseList"));
  renderMoneyList("saving", $("#savingList"));
  renderDreams();
  updateProfile();
  updateSummary();
  updateReport(currentReportMode);
  renderHistory();
}

function populateCountrySelects() {
  const selects = [$("#signupCountry"), $("#profileCountry")].filter(Boolean);
  if (!selects.length) return;
  selects.forEach((select) => {
    const current = select.value;
    select.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.setAttribute("data-i18n", "optionChooseCountry");
    placeholder.textContent = t("optionChooseCountry");
    select.appendChild(placeholder);
    COUNTRIES.forEach((country) => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      select.appendChild(option);
    });
    if (current) select.value = current;
  });
}

function closeAllCustomSelects(except) {
  $$(".custom-select.open").forEach((el) => {
    if (except && except === el) return;
    el.classList.remove("open");
  });
}

function buildCustomSelect(select) {
  const wrapper = document.createElement("div");
  wrapper.className = "custom-select";
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "custom-select__trigger";
  const menu = document.createElement("div");
  menu.className = "custom-select__menu";
  const list = document.createElement("div");
  list.className = "custom-select__list";
  menu.appendChild(list);
  const parent = select.parentNode;
  parent.insertBefore(wrapper, select);
  wrapper.appendChild(select);
  wrapper.appendChild(trigger);
  wrapper.appendChild(menu);
  select.classList.add("custom-native");

  const renderOptions = () => {
    list.innerHTML = "";
    Array.from(select.options).forEach((option) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "custom-option";
      item.textContent = option.textContent;
      item.dataset.value = option.value;
      if (option.disabled) item.disabled = true;
      if (option.value === "") item.classList.add("is-placeholder");
      item.addEventListener("click", () => {
        if (option.disabled) return;
        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        wrapper.classList.remove("open");
      });
      list.appendChild(item);
    });
  };

  const updateTrigger = () => {
    const selected = select.options[select.selectedIndex];
    trigger.textContent = selected ? selected.textContent : "";
    trigger.classList.toggle("is-placeholder", !select.value);
    list.querySelectorAll(".custom-option").forEach((opt) => {
      opt.classList.toggle("selected", opt.dataset.value === select.value);
    });
  };

  trigger.addEventListener("click", () => {
    const isOpen = wrapper.classList.contains("open");
    closeAllCustomSelects();
    if (!isOpen) wrapper.classList.add("open");
  });

  select.addEventListener("change", updateTrigger);
  select._custom = { wrapper, trigger, list, renderOptions, updateTrigger };
  renderOptions();
  updateTrigger();
}

function initCustomSelects() {
  $$(".pages select, .hero select").forEach((select) => {
    if (select._custom) {
      select._custom.renderOptions();
      select._custom.updateTrigger();
      return;
    }
    buildCustomSelect(select);
  });
}

function refreshCustomSelects() {
  $$(".pages select, .hero select").forEach((select) => {
    if (select._custom) {
      select._custom.renderOptions();
      select._custom.updateTrigger();
    }
  });
}

function showAlert(message, title = t("alertTitle")) {
  $("#alertTitle").textContent = title;
  $("#alertText").textContent = message;
  $("#alertModal").classList.add("show");
  $("#alertModal").setAttribute("aria-hidden", "false");
}

function hideAlert() {
  $("#alertModal").classList.remove("show");
  $("#alertModal").setAttribute("aria-hidden", "true");
}

function showConfirm(message) {
  $("#confirmText").textContent = message;
  $("#confirmModal").classList.add("show");
  $("#confirmModal").setAttribute("aria-hidden", "false");
  return new Promise((resolve) => {
    confirmResolver = resolve;
  });
}

function hideConfirm() {
  $("#confirmModal").classList.remove("show");
  $("#confirmModal").setAttribute("aria-hidden", "true");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function setTheme(themeName) {
  if (THEME_ALIAS[themeName]) {
    themeName = THEME_ALIAS[themeName];
  }
  document.body.className =
    `theme-${themeName}` + (document.body.classList.contains("locked") ? " locked" : "");
  state.theme = themeName;
  localStorage.setItem(STORAGE.theme, themeName);
  $$("#themeGrid .theme-card").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === themeName);
  });
  applyThemeIcons(themeName);
}

function applyThemeIcons(themeName) {
  const set = ICON_SETS[themeName] || ICON_SETS["standard-light"];
  $$("[data-icon]").forEach((el) => {
    const key = el.dataset.icon;
    if (set[key]) {
      el.textContent = set[key];
    }
  });
}

function showPage(name) {
  $$(".page").forEach((page) => page.classList.remove("active"));
  $(`.page[data-page="${name}"]`)?.classList.add("active");
  $$(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.nav === name);
  });
  const hero = $(".hero");
  if (hero) {
    hero.classList.toggle("hidden", !["income", "expense"].includes(name));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateSummary() {
  const range = state.summaryRange || "month";
  const sumIncome = sumByRange(state.data.income, range);
  const sumExpense = sumByRange(state.data.expense, range);
  const balance = sumIncome - sumExpense;
  $("#sumIncome").textContent = fmt.format(sumIncome);
  $("#sumExpense").textContent = fmt.format(sumExpense);
  $("#sumBalance").textContent = formatSaldo(balance);
  const titleEl = $("#summaryTitle");
  if (titleEl) titleEl.textContent = t(getSummaryTitleKey(range));
  const expenseTitleEl = $("#expenseSummaryTitle");
  if (expenseTitleEl) expenseTitleEl.textContent = t(getSummaryTitleKey(range));
  const expenseSumIncome = $("#expenseSumIncome");
  const expenseSumExpense = $("#expenseSumExpense");
  const expenseSumBalance = $("#expenseSumBalance");
  if (expenseSumIncome) expenseSumIncome.textContent = fmt.format(sumIncome);
  if (expenseSumExpense) expenseSumExpense.textContent = fmt.format(sumExpense);
  if (expenseSumBalance) expenseSumBalance.textContent = formatSaldo(balance);
}

function getSummaryTitleKey(range) {
  return (
    {
      today: "summaryTitleToday",
      week: "summaryTitleWeek",
      month: "summaryTitleMonth",
      year: "summaryTitleYear",
      all: "summaryTitleAll",
    }[range] || "summaryTitleMonth"
  );
}

function updateHistorySummary() {
  const { start, end } = getHistoryBounds();
  const sumIncome = sumByDateRange(state.data.income, start, end);
  const sumExpense = sumByDateRange(state.data.expense, start, end);
  const balance = sumIncome - sumExpense;
  const titleEl = $("#historySummaryTitle");
  if (titleEl) titleEl.textContent = t("summaryTitleRange");
  const historySumIncome = $("#historySumIncome");
  const historySumExpense = $("#historySumExpense");
  const historySumBalance = $("#historySumBalance");
  if (historySumIncome) historySumIncome.textContent = fmt.format(sumIncome);
  if (historySumExpense) historySumExpense.textContent = fmt.format(sumExpense);
  if (historySumBalance) historySumBalance.textContent = formatSaldo(balance);
}

function renderMoneyList(type, listEl) {
  if (!listEl) return;
  const items = state.data[type];
  if (!items.length) {
    listEl.innerHTML = `<div class="item-card"><div class="item-title">${t("msgEmptyDataTitle")}</div><div class="item-meta">${t("msgEmptyDataDesc")}</div></div>`;
    return;
  }
  listEl.innerHTML = items
    .map((item) => {
      const amount = fmt.format(item.amount);
      const metaParts = [formatDate(item.date)];
      if (type === "income") {
        if (item.source) metaParts.push(`${t("metaSource")}: ${item.source}`);
        if (item.channel) metaParts.push(`${t("metaDeposit")}: ${item.channel}`);
      }
      if (type === "expense") {
        if (item.method) metaParts.push(`${t("metaMethod")}: ${item.method}`);
        if (item.bank) metaParts.push(`${t("metaBank")}: ${item.bank}`);
      }
      const noteText = item.note ? ` · ${item.note}` : ` · ${t("msgNoNote")}`;
      return `
      <div class="item-card">
        <div class="item-row">
          <div class="item-title">${item.category}</div>
          <div class="item-title">${amount}</div>
        </div>
        <div class="item-meta">${metaParts.join(" · ")}${noteText}</div>
        <div class="item-actions">
          <button class="edit" data-action="edit" data-id="${item.id}" data-type="${type}">${t("btnEdit")}</button>
          <button class="delete" data-action="delete" data-id="${item.id}" data-type="${type}">${t("btnDelete")}</button>
        </div>
      </div>`;
    })
    .join("");
}

function renderHistory() {
  const listEl = $("#historyList");
  if (!listEl) return;
  const { start, end } = getHistoryBounds();
  const combined = [
    ...state.data.income.map((item) => ({ ...item, type: "income" })),
    ...state.data.expense.map((item) => ({ ...item, type: "expense" })),
  ];
  const filtered = filterByDateRange(combined, start, end).sort((a, b) => {
    const dateA = parseLocalDate(a.date)?.getTime() || 0;
    const dateB = parseLocalDate(b.date)?.getTime() || 0;
    return dateB - dateA;
  });
  if (!filtered.length) {
    listEl.innerHTML = `<div class="item-card"><div class="item-title">${t("historyEmptyTitle")}</div><div class="item-meta">${t("historyEmptyDesc")}</div></div>`;
    updateHistorySummary();
    return;
  }
  listEl.innerHTML = filtered
    .map((item) => {
      const amount = fmt.format(item.amount);
      const typeLabel = item.type === "income" ? t("labelIncome") : t("labelExpense");
      const metaParts = [
        `${t("labelDate")}: ${formatDate(item.date)}`,
        `${t("labelCategory")}: ${item.category || "-"}`,
      ];
      if (item.type === "income") {
        if (item.source) metaParts.push(`${t("metaSource")}: ${item.source}`);
        if (item.channel) metaParts.push(`${t("metaDeposit")}: ${item.channel}`);
      } else {
        if (item.method) metaParts.push(`${t("metaMethod")}: ${item.method}`);
        if (item.bank) metaParts.push(`${t("metaBank")}: ${item.bank}`);
      }
      const noteText = item.note ? item.note : t("msgNoNote");
      return `
      <div class="history-card">
        <div class="history-row">
          <div class="history-type ${item.type}">${typeLabel}</div>
          <div class="history-amount">${amount}</div>
        </div>
        <ul class="history-meta">
          ${metaParts.map((meta) => `<li>${meta}</li>`).join("")}
          <li>${t("labelNote")}: ${noteText}</li>
        </ul>
        <div class="item-actions">
          <button class="edit" data-action="edit" data-id="${item.id}" data-type="${item.type}">${t("btnEdit")}</button>
          <button class="delete" data-action="delete" data-id="${item.id}" data-type="${item.type}">${t("btnDelete")}</button>
        </div>
      </div>`;
    })
    .join("");
  updateHistorySummary();
}

function renderDreams() {
  const listEl = $("#dreamList");
  const items = state.data.dreams;
  if (!items.length) {
    listEl.innerHTML = `<div class="item-card"><div class="item-title">${t("msgEmptyDreamTitle")}</div><div class="item-meta">${t("msgEmptyDreamDesc")}</div></div>`;
    return;
  }
  listEl.innerHTML = items
    .map((item) => {
      const progress = Math.min(100, Math.round((item.current / item.target) * 100 || 0));
      return `
      <div class="item-card">
        <div class="item-row">
          <div class="item-title">${item.title}</div>
          <div class="item-title">${progress}%</div>
        </div>
        <div class="item-meta">${fmt.format(item.current)} dari ${fmt.format(item.target)}</div>
        <div class="item-meta">Deadline: ${formatDate(item.deadline)}</div>
        <div class="item-meta">${item.note || t("msgNoNote")}</div>
        <div class="item-actions">
          <button class="edit" data-action="edit" data-id="${item.id}" data-type="dreams">${t("btnEdit")}</button>
          <button class="delete" data-action="delete" data-id="${item.id}" data-type="dreams">${t("btnDelete")}</button>
        </div>
      </div>`;
    })
    .join("");
}

function fillForm(form, data) {
  Object.entries(data).forEach(([key, value]) => {
    const field = form.querySelector(`[name="${key}"]`);
    if (field) {
      field.value = value ?? "";
      if (field._custom) {
        field._custom.updateTrigger();
      }
    }
  });
}

function resetForm(form) {
  form.reset();
  const idInput = form.querySelector('input[name="id"]');
  if (idInput) idInput.value = "";
}

function buildMoneyPayload(formData, extraKeys = []) {
  const payload = {
    id: formData.get("id") || uid(),
    amount: Number(formData.get("amount")),
    date: formData.get("date"),
    category: formData.get("category"),
    note: formData.get("note"),
  };
  extraKeys.forEach((key) => {
    payload[key] = formData.get(key);
  });
  return payload;
}

function validateMoneyForm(formData, extraKeys = []) {
  const amount = Number(formData.get("amount"));
  if (!formData.get("category")) return t("msgCategoryRequired");
  if (!formData.get("date")) return t("msgDateRequired");
  if (!Number.isFinite(amount) || amount <= 0) return t("msgAmountInvalid");
  for (const key of extraKeys) {
    if (!formData.get(key)) return t("msgExtraRequired");
  }
  return "";
}

function handleMoneySubmit(type, form, listEl, extraKeys = []) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const error = validateMoneyForm(formData, extraKeys);
    if (error) {
      showAlert(error, t("msgFormIncomplete"));
      return;
    }
    const id = formData.get("id");
    const confirmText = id ? t("msgConfirmSaveEdit") : t("msgConfirmSaveNew");
    const confirmed = await showConfirm(confirmText);
    if (!confirmed) return;
    const payload = buildMoneyPayload(formData, extraKeys);
    if (id) {
      state.data[type] = state.data[type].map((item) => (item.id === id ? payload : item));
    } else {
      state.data[type].unshift(payload);
    }
    saveData();
    renderMoneyList(type, listEl);
    renderHistory();
    resetForm(form);
    showToast(t("msgDataSaved"));
  });

  if (listEl) {
    listEl.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === "edit") {
        const item = state.data[type].find((entry) => entry.id === id);
        if (item) {
          fillForm(form, item);
          form.scrollIntoView({ behavior: "smooth", block: "start" });
          showAlert(t("msgEditMode"), t("titleEditData"));
        }
      }
      if (action === "delete") {
        showConfirm(t("msgDeleteConfirm")).then((confirmed) => {
          if (!confirmed) return;
          state.data[type] = state.data[type].filter((entry) => entry.id !== id);
          saveData();
          renderMoneyList(type, listEl);
          renderHistory();
        });
      }
    });
  }
}

function handleHistoryActions() {
  const listEl = $("#historyList");
  if (!listEl) return;
  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    const type = btn.dataset.type;
    if (!id || !type) return;
    if (action === "edit") {
      const item = state.data[type]?.find((entry) => entry.id === id);
      const form = type === "income" ? $("#incomeForm") : $("#expenseForm");
      if (item && form) {
        fillForm(form, item);
        showPage(type === "income" ? "income" : "expense");
        form.scrollIntoView({ behavior: "smooth", block: "start" });
        showAlert(t("msgEditMode"), t("titleEditData"));
      }
    }
    if (action === "delete") {
      showConfirm(t("msgDeleteConfirm")).then((confirmed) => {
        if (!confirmed) return;
        state.data[type] = state.data[type].filter((entry) => entry.id !== id);
        saveData();
        renderMoneyList(type, type === "income" ? $("#incomeList") : $("#expenseList"));
        renderHistory();
      });
    }
  });
}

function handleDreams() {
  const form = $("#dreamForm");
  const listEl = $("#dreamList");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const id = formData.get("id");
    const payload = {
      id: id || uid(),
      title: formData.get("title"),
      target: Number(formData.get("target")),
      current: Number(formData.get("current")),
      deadline: formData.get("deadline"),
      note: formData.get("note"),
    };
    if (!payload.title || !payload.deadline) {
      showAlert(t("msgIncompleteDream"), t("msgFormIncomplete"));
      return;
    }
    if (!Number.isFinite(payload.target) || payload.target <= 0) {
      showAlert(t("msgTargetInvalid"), t("msgFormIncomplete"));
      return;
    }
    if (!Number.isFinite(payload.current) || payload.current < 0) {
      showAlert(t("msgCurrentInvalid"), t("msgFormIncomplete"));
      return;
    }
    const confirmText = id ? t("msgConfirmDreamEdit") : t("msgConfirmDreamNew");
    const confirmed = await showConfirm(confirmText);
    if (!confirmed) return;
    if (id) {
      state.data.dreams = state.data.dreams.map((item) => (item.id === id ? payload : item));
    } else {
      state.data.dreams.unshift(payload);
    }
    saveData();
    renderDreams();
    resetForm(form);
    showToast(t("msgDataSaved"));
  });

  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    if (action === "edit") {
      const item = state.data.dreams.find((entry) => entry.id === id);
      if (item) {
        fillForm(form, item);
        form.scrollIntoView({ behavior: "smooth", block: "start" });
        showAlert(t("msgEditMode"), t("titleEditTarget"));
      }
    }
    if (action === "delete") {
      showConfirm(t("msgDreamDeleteConfirm")).then((confirmed) => {
        if (!confirmed) return;
        state.data.dreams = state.data.dreams.filter((entry) => entry.id !== id);
        saveData();
        renderDreams();
      });
    }
  });
}

function updateProfile() {
  const user = getUser();
  const profileEl = $("#profileInfo");
  if (!user) {
    profileEl.innerHTML = `<div class="item-title">${t("msgNoAccountTitle")}</div><div class="item-meta">${t("msgNoAccountDesc")}</div>`;
    $("#profileChipText").textContent = t("guest");
    $("#profileMiniName").textContent = t("guest");
    $("#profileMiniUser").textContent = "@guest";
    return;
  }
  const { biodata } = user;
  profileEl.innerHTML = `
    <div class="profile-line"><span class="profile-label">${t("labelFullName")}</span><strong>${biodata.name || "-"}</strong></div>
    <div class="profile-line"><span class="profile-label">${t("labelEmail")}</span><strong>${biodata.email || "-"}</strong></div>
    <div class="profile-line"><span class="profile-label">${t("labelPhone")}</span><strong>${biodata.phone || "-"}</strong></div>
    <div class="profile-line"><span class="profile-label">${t("labelAddress")}</span><strong>${biodata.address || "-"}</strong></div>
    <div class="profile-line"><span class="profile-label">${t("labelBirthdate")}</span><strong>${formatDate(biodata.birthdate)}</strong></div>
    <div class="profile-line"><span class="profile-label">${t("labelBio")}</span><strong>${biodata.bio || "-"}</strong></div>
    <div class="profile-line"><span class="profile-label">${t("labelUsername")}</span><strong>${user.username || "-"}</strong></div>
  `;
  fillForm($("#profileForm"), biodata);
  $("#profileChipText").textContent = biodata.name || user.username;
  $("#profileMiniName").textContent = biodata.name || t("user");
  $("#profileMiniUser").textContent = `@${user.username}`;
}

function handleProfileUpdate() {
  $("#profileForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = getUser();
    if (!user) return;
    const confirmed = await showConfirm(t("msgConfirmProfileSave"));
    if (!confirmed) return;
    const formData = new FormData(e.target);
    const biodata = Object.fromEntries(formData.entries());
    user.biodata = biodata;
    setUser(user);
    updateProfile();
    showToast(t("msgProfileSaved"));
  });
}

function handlePasswordChange() {
  const form = $("#passwordForm");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = getUser();
    if (!user) {
      showAlert(t("msgNoAccount"), t("msgNotRegistered"));
      return;
    }
    const formData = new FormData(form);
    const currentPassword = String(formData.get("currentPassword") || "");
    const newPassword = String(formData.get("newPassword") || "");
    const confirmPassword = String(formData.get("confirmPassword") || "");
    if (!currentPassword || !newPassword || !confirmPassword) {
      showAlert(t("msgFormIncomplete"));
      return;
    }
    if (currentPassword !== user.password) {
      showAlert(t("msgPasswordWrong"));
      return;
    }
    if (newPassword !== confirmPassword) {
      showAlert(t("msgPasswordMismatch"));
      return;
    }
    if (newPassword === user.password) {
      showAlert(t("msgPasswordSame"));
      return;
    }
    const confirmed = await showConfirm(t("msgPasswordConfirm"));
    if (!confirmed) return;
    user.password = newPassword;
    setUser(user);
    form.reset();
    showAlert(t("msgPasswordUpdated"));
  });
}

function handleAuth() {
  const splashModal = $("#splashModal");
  const authModal = $("#authModal");
  const openAuthBtn = $("#openAuthBtn");
  const closeAuthBtn = $("#closeAuthBtn");
  const splashCloseBtn = $('[data-close="splash"]');
  const authCloseBtn = $('[data-close="auth"]');
  const signInForm = $("#signInForm");
  const signUpForm = $("#signUpForm");
  const tabButtons = $$(".tab-btn");
  const dropdownLogout = $("#dropdownLogout");

  const showSplash = () => {
    splashModal.classList.add("show");
    splashModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("locked");
  };

  const hideSplash = () => {
    splashModal.classList.remove("show");
    splashModal.setAttribute("aria-hidden", "true");
  };

  const showAuth = () => {
    authModal.classList.add("show");
    authModal.setAttribute("aria-hidden", "false");
  };

  const hideAuth = () => {
    authModal.classList.remove("show");
    authModal.setAttribute("aria-hidden", "true");
  };

  if (!getSession()) {
    showSplash();
  }

  openAuthBtn.addEventListener("click", () => {
    hideSplash();
    showAuth();
  });

  closeAuthBtn.addEventListener("click", () => {
    hideAuth();
    if (!getSession()) showSplash();
  });

  if (splashCloseBtn) {
    splashCloseBtn.addEventListener("click", () => {
      hideSplash();
      showAuth();
    });
  }

  if (authCloseBtn) {
    authCloseBtn.addEventListener("click", () => {
      hideAuth();
      if (!getSession()) showSplash();
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      $$(".auth-form").forEach((form) => form.classList.remove("active"));
      $(`.auth-form[data-tab-panel="${btn.dataset.tab}"]`)?.classList.add("active");
    });
  });

  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const biodata = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      birthdate: formData.get("birthdate"),
      bio: formData.get("bio"),
    };
    const user = {
      username: formData.get("username"),
      password: formData.get("password"),
      biodata,
    };
    setUser(user);
    updateProfile();
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabButtons[0].classList.add("active");
    $$(".auth-form").forEach((form) => form.classList.remove("active"));
    $("#signInForm").classList.add("active");
    showAlert(t("msgSignUpSuccess"), t("msgSignUpTitle"));
  });

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    const user = getUser();
    if (!user) {
      showAlert(t("msgNoAccount"), t("msgNotRegistered"));
      return;
    }
    const username = formData.get("username");
    const password = formData.get("password");
    if (username === user.username && password === user.password) {
      setSession(username);
      hideAuth();
      document.body.classList.remove("locked");
      updateProfile();
      showAlert(t("msgWelcome", { name: username }), t("msgLoginSuccess"));
    } else {
      showAlert(t("msgWrongCredentials"), t("msgLoginFailed"));
    }
  });

  const doLogout = async () => {
    const confirmed = await showConfirm(t("msgConfirmLogout"));
    if (!confirmed) return;
    clearSession();
    $("#profileDropdown").classList.remove("show");
    showSplash();
  };

  $("#logoutBtn").addEventListener("click", doLogout);

  if (dropdownLogout) {
    dropdownLogout.addEventListener("click", () => {
      doLogout();
    });
  }
}

function handleCalculator() {
  const display = $("#calcDisplay");
  const keys = $$(".calc-keys button");
  let buffer = "";

  const render = () => {
    display.textContent = buffer || "0";
  };

  keys.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const action = btn.dataset.action;
      if (action === "clear") {
        buffer = "";
        render();
        return;
      }
      if (action === "equals") {
        if (!buffer) return;
        if (!/^[0-9+\-*/.() ]+$/.test(buffer)) return;
        try {
          const result = Function(`"use strict"; return (${buffer})`)();
          buffer = Number.isFinite(result) ? String(result) : "";
        } catch (err) {
          buffer = "";
        }
        render();
        return;
      }
      buffer += key;
      render();
    });
  });
}

function getMonthlySeries(year) {
  const labels =
    currentLang === "en"
      ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      : ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const income = new Array(12).fill(0);
  const expense = new Array(12).fill(0);
  state.data.income.forEach((item) => {
    if (!item.date) return;
    const date = new Date(item.date);
    if (date.getFullYear() !== year) return;
    const month = date.getMonth();
    income[month] += item.amount;
  });
  state.data.expense.forEach((item) => {
    if (!item.date) return;
    const date = new Date(item.date);
    if (date.getFullYear() !== year) return;
    const month = date.getMonth();
    expense[month] += item.amount;
  });
  return { labels, income, expense };
}

function getYearlySeries() {
  const currentYear = new Date().getFullYear();
  const labels = [];
  const income = [];
  const expense = [];
  for (let y = currentYear - 4; y <= currentYear; y += 1) {
    labels.push(String(y));
    const incomeSum = state.data.income
      .filter((item) => new Date(item.date).getFullYear() === y)
      .reduce((sum, item) => sum + item.amount, 0);
    const expenseSum = state.data.expense
      .filter((item) => new Date(item.date).getFullYear() === y)
      .reduce((sum, item) => sum + item.amount, 0);
    income.push(incomeSum);
    expense.push(expenseSum);
  }
  return { labels, income, expense };
}

function getReportData(mode = "month") {
  const year = new Date().getFullYear();
  return mode === "year" ? getYearlySeries() : getMonthlySeries(year);
}

function drawChart(labels, series = []) {
  const canvas = $("#reportChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);

  const padding = 28;
  const chartW = width - padding * 2;
  const chartH = height - padding * 2;
  const allValues = series.flatMap((item) => item.values);
  const maxVal = Math.max(...allValues, 1);
  const minVal = Math.min(...allValues, 0);
  const range = maxVal - minVal || 1;

  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();

  series.forEach((item) => {
    const points = item.values.map((val, idx) => {
      const x = padding + (chartW / (item.values.length - 1 || 1)) * idx;
      const y = padding + chartH - ((val - minVal) / range) * chartH;
      return { x, y };
    });
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    points.forEach((pt, idx) => {
      if (idx === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.stroke();

    ctx.fillStyle = item.pointColor || "#ffffff";
    points.forEach((pt) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.font = "10px sans-serif";
  labels.forEach((label, idx) => {
    const x = padding + (chartW / (labels.length - 1 || 1)) * idx;
    ctx.fillText(label, x - 8, height - 8);
  });
}

function updateReport(mode = "month") {
  currentReportMode = mode;
  const year = new Date().getFullYear();
  const data = getReportData(mode);
  const style = getComputedStyle(document.body);
  const incomeColor = style.getPropertyValue("--accent-2").trim() || "#2cb67d";
  const expenseColor = style.getPropertyValue("--danger").trim() || "#ff5470";
  drawChart(data.labels, [
    { values: data.income, color: incomeColor, pointColor: "#ffffff" },
    { values: data.expense, color: expenseColor, pointColor: "#ffffff" },
  ]);
  const totalIncome = data.income.reduce((sum, val) => sum + val, 0);
  const totalExpense = data.expense.reduce((sum, val) => sum + val, 0);
  const total = totalIncome - totalExpense;
  const totalClass = total >= 0 ? "report-value positive" : "report-value negative";
  $("#reportSummary").innerHTML = `
    <div>${t("reportModeLabel")}: <strong>${mode === "year" ? t("reportModeYearly") : t("reportModeMonthly")} ${
    mode === "month" ? year : ""
  }</strong></div>
    <div>${t("reportIncomeLabel")}: <span class="report-value positive">${fmt.format(totalIncome)}</span></div>
    <div>${t("reportExpenseLabel")}: <span class="report-value negative">${fmt.format(totalExpense)}</span></div>
    <div>${t("reportTotalLabel")}: <span class="${totalClass}">${fmt.format(total)}</span></div>
  `;
}

function exportReportCsv() {
  const data = getReportData(currentReportMode);
  const header = `${t("reportHeaderPeriod")},${t("labelIncome")},${t("labelExpense")},${t("labelBalance")}`;
  const rows = data.labels.map(
    (label, idx) =>
      `${label},${data.income[idx] || 0},${data.expense[idx] || 0},${(data.income[idx] || 0) - (data.expense[idx] || 0)}`
  );
  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `report-${currentReportMode}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportReportPdf() {
  const canvas = $("#reportChart");
  if (!canvas) return;
  const dataUrl = canvas.toDataURL("image/png");
  const popup = window.open("", "_blank");
  if (!popup) {
    showAlert(t("msgExportBlocked"), t("alertTitle"));
    return;
  }
  const title = t("pageReportTitle");
  const summary = $("#reportSummary").innerHTML;
  popup.document.write(`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #111; }
          h1 { font-size: 20px; margin: 0 0 12px; }
          .summary { font-size: 12px; margin-bottom: 16px; }
          .report-value.positive { color: #2cb67d; font-weight: 700; }
          .report-value.negative { color: #ff5470; font-weight: 700; }
          img { width: 100%; max-width: 720px; border: 1px solid #ddd; border-radius: 12px; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <div class="summary">${summary}</div>
        <img src="${dataUrl}" alt="Report chart" />
      </body>
    </html>`);
  popup.document.close();
  popup.focus();
  popup.print();
}

function init() {
  setTheme(state.theme);
  setLanguage(currentLang);
  initCustomSelects();
  updateSummary();
  renderMoneyList("income", null);
  renderMoneyList("expense", null);
  renderMoneyList("saving", $("#savingList"));
  renderDreams();
  renderHistory();

  handleMoneySubmit("income", $("#incomeForm"), null, ["source", "channel"]);
  handleMoneySubmit("expense", $("#expenseForm"), null, ["method", "bank"]);
  handleMoneySubmit("saving", $("#savingForm"), $("#savingList"));
  handleDreams();
  handleHistoryActions();

  handleProfileUpdate();
  handlePasswordChange();
  handleAuth();
  handleCalculator();

  $$(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => showPage(btn.dataset.nav));
  });

  const summarySelect = $("#summaryRange");
  if (summarySelect) {
    summarySelect.value = state.summaryRange || "month";
    summarySelect.addEventListener("change", () => {
      state.summaryRange = summarySelect.value || "month";
      localStorage.setItem(STORAGE.summaryRange, state.summaryRange);
      updateSummary();
    });
  }

  const historyFrom = $("#historyFrom");
  const historyTo = $("#historyTo");
  const defaultHistory = getDefaultHistoryRange();
  if (historyFrom) {
    historyFrom.value = state.historyFrom || defaultHistory.from;
    state.historyFrom = historyFrom.value;
    localStorage.setItem(STORAGE.historyFrom, state.historyFrom);
  }
  if (historyTo) {
    historyTo.value = state.historyTo || defaultHistory.to;
    state.historyTo = historyTo.value;
    localStorage.setItem(STORAGE.historyTo, state.historyTo);
  }
  const handleHistoryRangeChange = () => {
    state.historyFrom = historyFrom?.value || "";
    state.historyTo = historyTo?.value || "";
    const start = parseLocalDate(state.historyFrom);
    const end = parseLocalDate(state.historyTo);
    if (historyFrom && historyTo && start && end && start.getTime() > end.getTime()) {
      const temp = historyFrom.value;
      historyFrom.value = historyTo.value;
      historyTo.value = temp;
      state.historyFrom = historyFrom.value;
      state.historyTo = historyTo.value;
    }
    localStorage.setItem(STORAGE.historyFrom, state.historyFrom);
    localStorage.setItem(STORAGE.historyTo, state.historyTo);
    renderHistory();
  };
  historyFrom?.addEventListener("change", handleHistoryRangeChange);
  historyTo?.addEventListener("change", handleHistoryRangeChange);
  refreshCustomSelects();

  $("#themeGrid").addEventListener("click", async (e) => {
    const btn = e.target.closest(".theme-card");
    if (!btn) return;
    const label = btn.textContent.replace(/\s+/g, " ").trim();
    const confirmed = await showConfirm(t("msgThemeConfirm", { theme: label }));
    if (!confirmed) return;
    setTheme(btn.dataset.theme);
    showToast(t("msgThemeUpdated"));
  });

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang === currentLang) return;
      setLanguage(btn.dataset.lang);
    });
  });

  updateProfile();

  $$(".report-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".report-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateReport(btn.dataset.report);
    });
  });

  $("#exportCsvBtn")?.addEventListener("click", exportReportCsv);
  $("#exportPdfBtn")?.addEventListener("click", exportReportPdf);

  $("#alertOk").addEventListener("click", hideAlert);
  $('[data-close="alert"]')?.addEventListener("click", hideAlert);
  $("#confirmCancel").addEventListener("click", () => {
    hideConfirm();
    if (confirmResolver) confirmResolver(false);
    confirmResolver = null;
  });
  $("#confirmOk").addEventListener("click", () => {
    hideConfirm();
    if (confirmResolver) confirmResolver(true);
    confirmResolver = null;
  });
  $('[data-close="confirm"]')?.addEventListener("click", () => {
    hideConfirm();
    if (confirmResolver) confirmResolver(false);
    confirmResolver = null;
  });

  const profileBtn = $("#profileBtn");
  const profileDropdown = $("#profileDropdown");
  const profileCloseBtn = $("#profileCloseBtn");
  profileBtn.addEventListener("click", () => {
    profileDropdown.classList.toggle("show");
  });
  if (profileCloseBtn) {
    profileCloseBtn.addEventListener("click", () => {
      profileDropdown.classList.remove("show");
    });
  }
  document.addEventListener("click", (e) => {
    if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
      profileDropdown.classList.remove("show");
    }
  });
  profileDropdown.addEventListener("click", (e) => {
    const item = e.target.closest(".drop-item");
    if (!item) return;
    if (item.dataset.go) {
      showPage(item.dataset.go);
      profileDropdown.classList.remove("show");
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      closeAllCustomSelects();
    }
  });

  $$(".eye-btn[data-eye]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wrapper = btn.closest(".input-eye");
      const input = wrapper?.querySelector("input");
      if (!input) return;
      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      btn.textContent = "👁";
      btn.classList.toggle("is-visible", isHidden);
      btn.setAttribute("aria-pressed", String(isHidden));
    });
  });

  updateReport(currentReportMode);
}

document.addEventListener("DOMContentLoaded", init);
