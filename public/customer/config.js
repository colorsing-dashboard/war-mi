// ダッシュボード設定ファイル
// 管理画面（admin.html）からエクスポートされた設定です

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "waon",
    "sidebarTitle": "　color sing",
    "footerText": "waon",
    "footerSubText": "みんなが楽しめる枠にしたいです",
    "footerNote": "",
    "pageTitle": "waon - 特典管理",
    "loadingEmoji": "🎵",
    "loadingText": "Loading...",
    "showHeader": true,
    "showTitle": true,
    "titleStyle": "gradient",
    "titleGradient": true,
    "titleGradientDirection": "to-r",
    "titleGlow": false,
    "titlePosition": "center",
    "titleSize": "xlarge",
    "titleTextFill": "default",
    "titleGlassBg": 0.05,
    "titleGlassBlur": 3,
    "titlePaddingY": 12,
    "headerOverlayOpacity": 0,
    "headerImageFit": "contain",
    "headerHeight": "",
    "headerHeightMobile": "",
    "headerImageW": 0,
    "headerImageH": 0,
    "headerImageWMobile": 0,
    "headerImageHMobile": 0,
    "glassTint": 0.08,
    "glassReflection": 0.75,
    "glassSpecular": 0.95,
    "glassEdge": 60
  },
  "colors": {
    "deepBlue": "#FFF8E8",
    "oceanTeal": "#FFE0B2",
    "lightBlue": "#FF9933",
    "amber": "#FFD54F",
    "accent": "#FF6B35",
    "gold": "#FFD700",
    "brightness": "light"
  },
  "colorOverrides": {
    "headerGradientStart": "",
    "headerGradientEnd": "",
    "titleGradientStart": "#FF9933",
    "titleGradientMid": "#FFD54F",
    "titleGradientEnd": "#FF6B35",
    "cardBorder": "",
    "cardBorderHover": "",
    "primaryText": "#B85513",
    "accentText": "#D97706",
    "rank1Card": "#FF6B35",
    "backgroundMain": "",
    "backgroundMid": "",
    "nameText": "#A0451A",
    "footerText": "#B85513",
    "contentText": "#5C2A0E",
    "titleColor": "#E85D04",
    "subText": "",
    "popupOverlayColor": "",
    "popupOverlayOpacity": "",
    "menuCardLabelColor": "",
    "menuCardLabelOpacity": "",
    "tierCardBgColor": "#FFFFFF",
    "tierCardBgOpacity": 0.85,
    "menuCardBgColor": "",
    "menuCardBgOpacity": "",
    "sidebarBgColor": "#FFFFFF",
    "sidebarBgOpacity": 0.9,
    "bottomNavBgColor": "#FFFFFF",
    "bottomNavBgOpacity": 0.85,
    "glassBgColor": "#FFFFFF",
    "glassBgOpacity": 0.65
  },
  "fonts": {
    "display": "'Zen Maru Gothic', sans-serif",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap",
    "body": "'M PLUS Rounded 1c', sans-serif",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap",
    "googleFontsUrl": ""
  },
  "images": {
    "headerDesktop": "./customer/header.png",
    "headerMobile": "./customer/header-mobile.png",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "1PcirSFuOEA22AgnstdqvI-FMGtC9DZAf-K8fmpdRjdA",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
    "eventSheetName": "イベント",
    "ranges": {
      "ranking": "D2:G5",
      "goals": "A2:B10",
      "benefits": "A2:E20"
    },
    "refreshIntervalMs": 300000,
    "dataSheetName": "data"
  },
  "views": [
    {
      "id": "home",
      "label": "Home",
      "icon": "home",
      "enabled": true
    },
    {
      "id": "menu",
      "label": "特典内容",
      "icon": "book-open",
      "enabled": true
    },
    {
      "id": "rights",
      "label": "特典権利者",
      "icon": "user-check",
      "enabled": true,
      "title": "特典権利者一覧"
    },
    {
      "id": "icons",
      "label": "枠内アイコン",
      "icon": "gift",
      "enabled": true,
      "title": "枠内アイコン"
    },
    {
      "id": "events",
      "label": "イベント",
      "icon": "calendar-days",
      "enabled": true,
      "title": "イベント"
    }
  ],
  "benefitTiers": [
    {
      "key": "1k",
      "label": "歌推し様ルーレット参加権",
      "icon": "🎰",
      "columnIndex": 0,
      "displayTemplate": "済",
      "isBoolean": true,
      "showUsers": false,
      "showHistory": false
    }
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "歌推しPt",
    "pointsUnit": "k",
    "targetsTitle": "Targets",
    "targetLabels": [
      "今旬の目標",
      "今月の目標"
    ],
    "faq": {
      "enabled": true,
      "accordion": true,
      "title": "📝 FAQ・注意事項",
      "items": [
        {
          "question": "枠内のお願い",
          "answer": "みんなが楽しめる枠にしたいです"
        }
      ]
    }
  },
  "menu": {
    "title": "特典内容"
  },
  "ui": {
    "errorTitle": "エラー",
    "errorMessage": "データの読み込みに失敗しました。しばらくしてから再度お試しください。",
    "retryButton": "再読み込み",
    "refreshButton": "更新",
    "lastUpdate": "最終更新",
    "iconLoading": "アイコンデータを読み込み中...",
    "iconEmpty": "アイコンデータがありません",
    "iconNoImages": "アイコンがありません",
    "userListTitle": "獲得者一覧",
    "userIconTitle": "{user} ",
    "searchPlaceholder": "🔍 名前で検索...",
    "specialRightLabel": "Special権利",
    "imageError": "画像エラー"
  },
  "effects": {
    "iconFloat": true,
    "particles": "bubble",
    "particleDirection": "up",
    "particleColor": "#FFD54F",
    "particleSize": 0.5,
    "particleOpacity": 0.8
  },
  "deploy": {
    "owner": "colorsing-dashboard",
    "repo": "war-mi",
    "branch": "main",
    "token": "rev:68JraTiEGXLCZ4M7BUjlRzdn9gKJTJ0jcqTibJ8vS72hMX6o76CUB08Nyvb_9eUXHGyjvWqR0IMBSTQB11_tap_buhtig"
  },
  "admin": {
    "password": "1023",
    "developerKey": "CSadmin"
  }
}
