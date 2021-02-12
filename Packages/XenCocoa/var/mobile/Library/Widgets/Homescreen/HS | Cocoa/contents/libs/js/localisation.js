/*

* Script by @ParasKCD, you can follow me on Twitter @ParasKCD https://twitter.com/ParasKCD

*/

var language = window.navigator.language.split('-')[0],
	months,
	monthsShort,
	days,
	daysShort,
	condition,
    greets,
    newsWord,
    searchWord, 
    settingsLabels;

switch(language) {
	case 'nl':
        settingsLabels = ["Inhoud verbergen", "Paneelinstellingen", "Alle instellingen resetten", "Labels verbergen", "Badges verbergen", "Menu Dock verbergen", "Muziek verbergen", "Nieuws verbergen", "Donkere tekst (geen tijd)", "Verdonk de tijd", "Blur sterkte", "Widget kleur achtergrond", "Paneelinstellingen resetten", "Pictogramschaduwen verbergen", "Verberg ladeknop"];
        searchWord = "Zoeken";
        newsWord = "Nieuws";
        greets = ["Goedemorgen", "Goedenmiddag", "Goedenavond"];
        days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
        daysShort = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
        months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
        monthsShort = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        condition = ["Tornado", "Tropische Storm", "Orkaan", "Onweer", "Onweer", "Sneeuw", "Natte sneeuw", "Natte sneeuw", "Hagel", "Miezer", "Hagel", "Buien", "Buien", "Natte sneeuw", "Sneeuw", "Sneeuw", "Sneeuw", "Hagel", "Natte sneeuw", "Stof", "Mist", "Nevel", "Dampig", "Blustery", "Winderig", "Koud", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Helder", "Zon", "Normaal", "Normaal", "Natte sneeuw", "Heet", "Onweer", "Onweer", "Onweer", "Buien", "Zware sneeuw", "Lichte sneeuw", "Zware sneeuw", "Licht bewolkt", "Onweer", "Sneeuw", "Onweer", "blank"];
        break;
    case 'ru':
        settingsLabels = ["Скрыть содержимое", "Настройки панели", "Сбросить все настройки", "Скрыть метки", "Скрыть значки", "Скрыть панель меню", "Скрыть музыку", "Скрыть сообщения", "Темный текст (не время)", "Темное время", "Blur сильный", "Цвет фона виджета", "Сброс настроек панели", "Скрыть значки теней", "Скрыть кнопку «Ящик»"];
        searchWord = "поиск";
        newsWord = "Новости";
        greets = ["доброе утро", "Добрый день", "Добрый вечер"];
        days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        daysShort = ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"];
        months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        monthsShort = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
        condition = ["Торнадо", "Тропический шторм", "Ураган", "Гроза", "Гроза", "Снег", "Мокрый снег", "Мокрый снег", "Изморозь", "Морось", "Ледяной дождь", "Ливень", "Ливень", "Сильные порывы ветра", "Снег", "Снег", "Снег", "Град", "Мокрый снег", "Пыль", "Туман", "Легкий туман", "Туманно", "Порывисто", "Ветренно", "Холодно", "Облачно", "Облачно", "Облачно", "Облачно", "Облачно", "Ясно", "Солнечно", "Ясно", "Ясно", "Мокрый снег", "Жарко", "Гроза", "Гроза", "Гроза", "Ливень", "Снегопад", "Небольшой снег", "Снегопад", "Переменная облачность", "Гроза", "Снег", "Гроза", "пусто"];
        break;
    case 'cz':
        settingsLabels = ["Skrýt obsah", "Nastavení panelu", "Resetovat všechna nastavení", "Skrýt Labels", "Skrýt Badges", "Skrýt Menu Dock", "Skrýt hudbu", "Hide zprávy", "Tmavý text (ne čas)", "Temný čas", "Blur Síla", "Barva pozadí widgetu", "Obnovte nastavení panelu", "Skrýt stín ikony", "Tlačítko Skrýt zásuvku"];
        searchWord = "Vyhledávání";
        newsWord = "zprávy";
        greets = ["Dobré Ráno", "Dobré Odpoledne", "Dobrý Večer"];
        days = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
        daysShort = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];
        months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];
        monthsShort = ["Led", "Úno", "Bře", "Dub", "Kvě", "Čen", "Čec", "Srp", "Zář", "Říj", "Lis", "Pro"];
        condition = ["Tornádo", "Tropická bouře", "Hurikán", "Bouře", "Bouře", "Sněžení", "Déšť a sníh", "Déšť a sníh", "Mrznoucí mrholení", "Mrholení", "Mrznoucí déšť", "Přeháňky", "Přeháňky", "Poryvy větru", "Sněžení", "Sněžení", "Sněžení", "Kroupy", "Déšť a sníh", "Prach", "Mlhy", "Řídké mlhy", "Kouř", "Větrno s bouřkami", "Větrno", "Chladno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Jasno", "Slunečno", "Krásně", "Krásně", "Déšť a sníh", "Horko", "Bouře", "Bouře", "Bouře", "Přeháňky", "Husté sněžení", "Lehké sněžení", "Husté sněžení", "Polojasno", "Bouře", "Sněžení", "Bouře", "prázdné"];
        break;
    case 'it':
        settingsLabels = ["Nascondi elementi", "Pannello impostazioni", "Ripristina tutte le impostazioni utente", "Nascondi etichette", "Nascondi badge notifiche", "Nascondi menu dock", "Nascondi musica", "Nascondi Notizie", "Scurisci testo (non l’orologio)", "Scurisci orologio", "Forza blur", "Colore background dei widget", "Ripristino pannello impostazioni", "Nascondi l'icona ombra", "Nascondi pulsante cassetto"];
        searchWord = "Cerca";
        newsWord = "Notizie";
        greets = ["Buongiorno", "Buon Pomeriggio", "Buona Serata"];
        days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        daysShort = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
        months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
        monthsShort = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
        condition = ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"];
        break;
    case 'sp':
        settingsLabels = ["Ocultar Elementos", "Configuraciones del panel", "Borrar todas las Configuraciones", "Ocultar Nombres de Apps", "Ocultar Notificationes", "Ocultar Dock de menú", "Ocultar Música", "Ocultar Noticias", "Oscurecer Texto(No el Tiempo)", "Oscurecer Tiempo", "Fuerza del desenfoque", "Color del Fondo del Widget", "Restablecer la configuración del panel", "Ocultar Sombras de Iconos", "Ocultar el Boton del Drawer"];
        searchWord = "Buscar";
        newsWord = "Noticias";
        greets = ["Buenos Días", "Buenas Tardes", "Buena Noches"];
        days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        daysShort = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
        months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        monthsShort = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"];
        condition = ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"];
        break;
    case 'de':
        settingsLabels = ["Inhalte ausblenden", "Panel Einstellungen", "Alle Einstellungen zurücksetzen", "Label ausblenden", "Badges ausblenden", "Dock-Menü ausblenden", "Musik ausblenden", "Nachrichten ausblenden", "Dunkler Text (Nicht die Uhrzeit)", "Dunkle Uhrzeit", "Blur Stärke", "Widget Hintergrundfarbe", "Panel Einstellungen zurücksetzen", "Icon-schatten ausblenden", "Drawer-Button ausblenden"];
        searchWord = "Suche";
        newsWord = "Nachrichten";
        greets = ["Guten Morgen", "Guten Tag", "Guten Abend"];
        days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
        daysShort = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
        months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        monthsShort = ["Jan", "Feb", "Mä", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
        condition = ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "Schneegestöber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "Stürmisch", "Windig", "Kalt", "Bewölkt", "Meist Bewölkt", "Meist Bewölkt", "Bewölkt", "Bewölkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "Örtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "Bewölkt", "Gewitter", "Scheeschauer", "Örtliche Gewitterschauer", "Nicht Verfügbar"];
        break;
    case 'fr':
        settingsLabels = ["Masquer les éléments", "Paramètres du panneau", "Réinitialiser les paramètres utilisateur", "Masquer le nom", "Masquer le badge", "Masquer le menu Dock", "Masquer la musique", "Masquer les Nouvelles", "Texte noir (hors temps)", "Temp noir", "intensité du flou", "Couleur d'arrière-plan du widget", "Réinitialiser les paramètres du panneau", "Masquer les ombres des icônes", "Masquer le Drawer-Button"];
        searchWord = "Chercher";
        newsWord = "Nouvelles";
        greets = ["Bonjour", "Bonne après-midi", "Bonsoir"];
        days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        daysShort = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
        months = ["Janvie", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        monthsShort = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"];
        condition = ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "GrÃªle", "Neige Fondue", "PoussiÃ©reux", "Brouillard", "Brume", "Brumeux", "TempÃªte", "Vent", "Temps Froid", "Temps Nuageux ", "TrÃ¨s Nuageux", "TrÃ¨s Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleille", "Beau Temps", "Beau Temps", "Pluie et GrÃªles", "Temps Chaud", "Orages IsolÃ©s", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages IsolÃ©s", "Non Disponible"];
        break;
    case 'zh':
        settingsLabels = ["隱藏", "面板設置", "重置用戶設置", "隱藏名稱", "隱藏徽章", "隱藏菜單欄", "隱藏音樂", "隱藏新聞", "黑色文本（不包括時間)", "時間黑", "模糊強度", "小部件背景顏色", "重置面板設置", "隱藏圖標陰影", "隱藏抽屜按鈕"];
        searchWord = "搜索";
        newsWord = "新聞";
        greets = ["早上好", "下午好", "晚上好"];
        days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        daysShort = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        monthsShort = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        condition = ["龙卷风", "热带风暴", "飓风", "雷暴", "雷暴", "雪", "雨雪", "雨雪", "冻毛毛雨", "细雨", "冻雨", "淋浴", "淋浴", "飘雪", "雪", "雪", "雪", "Hail", "雨雪", "尘", "牙齿", "阴霾", "烟", "风起云涌", "有风", "冷", "多云", "多云", "多云", "多云", "多云", "明确", "晴朗", "公平", "公平", "雨雪", "Hot", "雷暴", "雷暴", "雷暴", "淋浴", "大雪", "小雪", "大雪", "半 多云", "雷暴", "雪", "雷暴", "空白"];
        break;
    case 'ko':
        settingsLabels = ["숨기기", "패널 설정", "사용자 설정 초기화", "이름 숨기기", "뱃지 숨기기", "메뉴 독 숨기기", "음악 숨기기", "뉴스 숨기기", "텍스트 검정색 (시간 제외)", "시간 검정색", "블러 강도", "위젯 배경 색", "패널 설정 초기화", "아이콘 그림자 숨기기", "서랍 숨기기 버튼"];
        searchWord = "검색";
        newsWord = "뉴스";
        greets = ["좋은 아침입니다", "안녕하세요", "좋은 저녁입니다"];
        days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        daysShort = ["일", "월", "화", "수", "목", "금", "토"];
        months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
        monthsShort = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
        condition = ["토네이도", "열대성 폭풍", "허리케인", "천둥번개", "천둥번개", "눈", "진눈깨비", "진눈깨비", "얼어붙은 이슬비", "이슬비", "얼어붙은 비", "비", "비", "돌풍", "눈", "눈", "눈", "헤일", "진눈깨비", "먼지", "안개", "안개", "연기 많음", "거센 바람", "바람", "추움", "구름", "구름", "구름", "구름", "구름", "맑음", "맑음", "약간의 구름", "약간의 구름", "진눈깨비", "더움", "천둥번개", "천둥번개", "천둥번개", "비", "강한 눈", "약한 눈", "강한 눈", "대체로 흐림", "천둥번개", "눈", "천둥번개", "없음"];
    default:
        settingsLabels = ["Hide Items", "Panel Settings", "Clear all User Settings", "Hide Labels", "Hide Badges", "Hide Menu Dock", "Hide Music", "Hide News", "Darken Text(Not Time)", "Darken Time", "Blur Strength", "Widget Color BG", "Reset Panel Settings", "Hide Icon Shadows", "Hide Drawer Button"];
        searchWord = "Search";
        newsWord = "News";
        greets = ["Good Morning", "Good Afternoon", "Good Evening"];
    	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        condition = ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"];
        break;
}