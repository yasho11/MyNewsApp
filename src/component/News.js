import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
        "source": {
            "id": null,
            "name": "Xataka.com"
        },
        "author": "Rubén Andrés",
        "title": "La viuda de Steve Jobs está dilapidando la fortuna que heredó. Tiene buenas razones para hacerlo",
        "description": "Laurene Powell Jobs ya era una brillante mujer de negocios con un prometedor futuro antes de conocer, casi por casualidad a quien sería su compañero de vida durante los siguientes 22 años. El azar quiso que un día llegara tarde a una conferencia en 1989 y que…",
        "url": "https://www.xataka.com/otros/viuda-steve-jobs-esta-dilapidando-fortuna-que-heredo-tiene-buenas-razones-para-hacerlo-1",
        "urlToImage": "https://i.blogs.es/d9be35/laurene/840_560.jpeg",
        "publishedAt": "2024-08-10T07:00:54Z",
        "content": "Laurene Powell Jobs ya era una brillante mujer de negocios con un prometedor futuro antes de conocer, casi por casualidad a quien sería su compañero de vida durante los siguientes 22 años. El azar qu… [+4457 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Digital Trends"
        },
        "author": "Michael Bizzaco",
        "title": "Best Buy is having a huge MacBook sale this weekend — save $500",
        "description": "Best Buy is having a massive Apple sales event, and both the MacBook Air and MacBook Pro received some amazing markdowns!",
        "url": "https://www.digitaltrends.com/computing/136-inch-macbook-air-m2-16-inch-macbook-pro-m3-pro-deal-best-buy-august-2024/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/06/MacBook-Pro-Moritz-Kindler-Unsplash.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2024-08-10T00:09:31Z",
        "content": "When it comes to fast, powerful, and reliable laptops, one of the best names in the business has been and probably always will be Apple. Over the last several years, the company has put out some amaz… [+2241 chars]"
    },

    {
        "source": {
            "id": null,
            "name": "Journal du geek"
        },
        "author": "Journal du Geek",
        "title": "Ce logiciel élaboré en France rend les vieux Mac 3x plus rapides : voici comment",
        "description": "Vous avez un vieux Mac qui commence à sérieusement ralentir ? Vous aimeriez le garder encore quelques mois ou années ? Voici une solution simple, rapide et de surcroît bon marché, pour lui redonner une seconde vie.",
        "url": "https://www.journaldugeek.com/bon-plan/ce-logiciel-elabore-en-france-rend-les-vieux-mac-3x-plus-rapides-voici-comment/",
        "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/03/MacBook.jpg",
        "publishedAt": "2024-08-10T07:47:26Z",
        "content": "Tous les appareils tech rencontrent à un moment donné ou à un autre, une baisse de régime. Leurs performances en sont directement impactées, ce qui rend leur utilisation parfois chaotique. Les Macboo… [+3478 chars]"
    },

    {

        "source": {
            "id": null,
            "name": "Presse-citron"
        },
        "author": "Fouad Bencheman",
        "title": "Test Everboom : que vaut la nouvelle enceinte portable d’Ultimate Ears ?",
        "description": "Enceinte la plus ambitieuse d’un catalogue tout juste rafraîchi avec l’été, l’Everboom d’Ultimate Ears a sur le papier tous les atouts d’une baroudeuse infatigable. Après un mois en sa compagnie, voyons ce qu’elle a vraiment dans le ventre.",
        "url": "https://www.presse-citron.net/test-everboom-que-vaut-la-nouvelle-enceinte-portable-dultimate-ears/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2024/08/UE-Everboom-IP67.jpg",
        "publishedAt": "2024-08-10T08:04:49Z",
        "content": "Marque respectée dans le domaine de laudio nomade, Ultimate Ears se partage depuis plusieurs années avec JBL le rôle de leader sur le secteur des enceintes portables baroudeuses. Pour autant, les der… [+9342 chars]"
    },

    {
        
        "source": {
            "id": null,
            "name": "Faz.net"
        },
        "author": "Carsten Knop",
        "title": "Das Beste lesen mit FAZ+: Seltene Luxusuhren und ein pessimistischer Warren Buffett",
        "description": "Mit unserem Angebot FAZ+ erhalten Sie jeden Monat Zugriff auf mehr als 1000 exklusive Beiträge auf FAZ.NET. Unter anderem auf diese beliebtesten Stücke der Woche.",
        "url": "https://www.faz.net/aktuell/das-beste-von-faz-plus/rolex-und-co-teure-luxusmarken-beenden-zusammenarbeit-mit-juwelieren-19907430.html",
        "urlToImage": "https://media0.faz.net/ppmedia/aktuell/658867959/1.9907500/facebook_teaser/wenn-luxusmarken-ihre-uhren.jpg",
        "publishedAt": "2024-08-10T06:35:48Z",
        "content": "Es war eine überraschende Mitteilung, die sich in den Quartalszahlen von Berkshire Hathaway am Wochenende wiedergefunden hat: Das Investmentvehikel von Warren Buffett hat seinen Anteil am iPhone-Hers… [+1478 chars]"
    },

    {
        "source": {
            "id": null,
            "name": "TMZ"
        },
        "author": "TMZ Staff",
        "title": "Emily Ratajkowski Casually Seeing Shaboozey, Not Officially Dating",
        "description": "Emily Ratajkowski and Shaboozey are showing an interest in one another ... but they aren't quite an item ... at least not yet. Emily and Shaboozey sparked dating rumors this week when she showed him love during a performance Thursday at the Z100…",
        "url": "https://www.tmz.com/2024/08/09/emily-ratajkowski-seeing-shaboozey-casual-dating-rumors/",
        "urlToImage": "https://imagez.tmz.com/image/27/16by9/2024/08/10/277d6b7e8737468eac498bee979cca73_xl.jpg",
        "publishedAt": "2024-08-10T00:48:45Z",
        "content": "Emily Ratajkowskiand Shaboozey are showing an interest in one another ... but they aren't quite an item ... at least not yet.\r\nEmily and Shaboozey sparked dating rumors this week when she showed him … [+1057 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "¿Qué veremos en el Apple Event del mes de septiembre?",
        "description": "Te vamos a decir qué veremos en el próximo Apple Event que Apple celebrará en septiembre. Un evento donde la gran protagonista será la serie iPhone 16, de la que se esperan novedades muy interesantes y que ya sabemos que no se retrasará pese a que las funcion…",
        "url": "https://www.lavanguardia.com/andro4all/apple/que-veremos-en-el-apple-event-del-mes-de-septiembre",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/08/apple-event-septiembre.jpeg?width=1200",
        "publishedAt": "2024-08-10T07:01:49Z",
        "content": "Todo lo que presentaría Apple en su próximo evento\r\nTe vamos a decir qué veremos en el próximo Apple Event que Apple celebrará en septiembre. Un evento donde la gran protagonista será la serie iPhone… [+4612 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Impress.co.jp"
        },
        "author": null,
        "title": "Apple Arcade限定で「NFL Retro Bowl ’25」など追加、9月5日～",
        "description": "Appleは、9月5日に「NFL Retro Bowl ’25」「Monster Train+」や、Apple Vision Pro向けのゲーム「Puzzle Sculpt」がApple Arcadeに登場することを発表した。",
        "url": "https://k-tai.watch.impress.co.jp/docs/news/1615131.html",
        "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1615/131/main.jpg",
        "publishedAt": "2024-08-10T01:00:00Z",
        "content": "Apple95NFL Retro Bowl 25Monster Train+Apple Vision ProPuzzle SculptApple Arcade \r\n stitch.DreamWorks ShrekCrayola + \r\nNFL Retro Bowl 25New Star Games\r\n NFL Retro Bowl 252024NFLNFLNFLPARetro BowlApple… [+198 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Nextpit.de"
        },
        "author": "Rubens Eishima",
        "title": "Keine Furcht: Diese iOS- und Android-Apps sind kurze Zeit kostenlos",
        "description": "Seht Euch diese für begrenzte Zeit kostenlosen Apps und Spiele im Apple App Store und Google Play Store an. Schlagt zu, solange sie gratis sind.",
        "url": "https://www.nextpit.de/kostenlose-apps-2024-02-32",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/NextPit_Apps_of_the_week_2.jpg",
        "publishedAt": "2024-08-10T08:00:00Z",
        "content": "Es ist wichtig zu wissen, dass sich die Apps in dieser Sammlung von unseren üblichen \"Top 5 Apps der Woche\" Empfehlungen unterscheiden. Wir haben nicht jede einzelne App geprüft, was bedeutet, dass e… [+5001 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Googlewatchblog.de"
        },
        "author": "Jens",
        "title": "Pixel 9: Das sind Googles neue Smartphones – alles was bis jetzt bekannt geworden ist (Infos & Galerie)",
        "description": "Google wird schon in drei Tagen die Pixel 9-Smartphones vorstellen, mit denen man einige Veränderungen in die Serie bringt: Die Smartphones werden deutlich früher als alle Vorgänger vorgestellt und erstmals als Dreierpack +1 auf den Markt kommen. Mit dem Pixe…",
        "url": "https://www.googlewatchblog.de/2024/08/pixel-9-das-sind-googles-neue-smartphones-alles-was-bis-jetzt-bekannt-geworden-ist-infos-galerie/",
        "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/pixel-9-leak-new-1.jpg",
        "publishedAt": "2024-08-10T05:00:14Z",
        "content": "Google wird schon in drei Tagen die Pixel 9-Smartphones vorstellen, mit denen man einige Veränderungen in die Serie bringt: Die Smartphones werden deutlich früher als alle Vorgänger vorgestellt und e… [+11211 chars]"
    },
    
    {
    
        "source": {
            "id": null,
            "name": "Nextpit.de"
        },
        "author": "Jade Bryan",
        "title": "iPad Air mit OLED-Display: Darum könnte es eine Enttäuschung werden",
        "description": "Das kommende Apple iPad Air, das voraussichtlich 2026 auf den Markt kommen soll, wird Gerüchten zufolge mit einem OLED-Display ausgestattet sein.",
        "url": "https://www.nextpit.de/die-naechste-generation-des-ipad-air-oled-display",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7695213/image/apple-ipad-air-2024-nextpit-review-19.jpg",
        "publishedAt": "2024-08-10T06:00:01Z",
        "content": "Die neuesten iPad-Pro-Modelle waren die ersten iPads von Apple, die mit OLED-Displays ausgestattet waren. Es wird erwartet, dass dieses fortschrittliche Display auch in anderen iPad-Modellen zum Eins… [+2155 chars]"
    },
    
    {
        
        "source": {
            "id": "marca",
            "name": "Marca"
        },
        "author": "JOSÉ RODRÍGUEZ",
        "title": "\"El oro ya es de por sí histórico, pero ganarlo en París lo hace más especial\"",
        "description": "Día de oros y decepciones. España cierra la antepenúltima jornada olímpica con una medalla más de las 16 con las que cerraba el jueves. Jordan Díaz cumplía con las expectativas y s",
        "url": "https://www.marca.com/podcast/2024/08/10/66b6af3622601d334e8b4574.html",
        "urlToImage": "https://phantom-marca.unidadeditorial.es/b2d3e428157109bc2edcc308fccee9fc/crop/0x0/1474x982/resize/1200/f/webp/assets/multimedia/imagenes/2024/08/10/17232481440791.jpg",
        "publishedAt": "2024-08-10T05:15:55Z",
        "content": "Día de oros y decepciones. España cierra la antepenúltima jornada olímpica con una medalla más de las 16 con las que cerraba el jueves. Jordan Díaz cumplía con las expectativas y se llevaba una medal… [+1365 chars]"
    },
    
    {
        
        "source": {
            "id": "focus",
            "name": "Focus"
        },
        "author": "FOCM",
        "title": "Marktbreite wächst - Warum das Kursbeben der Tech-Aktien gut für die Rally ist",
        "description": "Das große Schlottern an den Tech-Börsen hat auch sein Gutes: Die Marktbreite wächst – perfekt für Anleger, die auf lange Sicht mit KI-Aktien alles richtig machen.",
        "url": "https://www.focus.de/finanzen/boerse/marktbreite-waechst-warum-das-kursbeben-der-tech-aktien-gut-fuer-die-rally-ist_id_260204478.html",
        "urlToImage": "https://p6.focus.de/img/fotos/id_259902082/nvidia.jpg?im=Crop%3D%280%2C152%2C3464%2C1732%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=223e3bcb56467bbf4c4961141c9f442b8ca0f3cb79ecef7abeff9b19b80e5ca8",
        "publishedAt": "2024-08-10T06:35:49Z",
        "content": "Das große Schlottern an den Tech-Börsen hat auch sein Gutes: Die Marktbreite wächst perfekt für Anleger, die auf lange Sicht mit KI-Aktien alles richtig machen.330 Milliarden Dollar mehr Börsenwert  … [+3287 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Basicthinking.de"
        },
        "author": "Beatrice Bode",
        "title": "Kann man eigentlich mit Apple Pay Geld abheben?",
        "description": "Kontaktloses Bezahlen ist mittlerweile fast überall per Smartphone oder Smartwatch möglich. Viele iOS-User nutzen dafür Apple Pay. Manchmal braucht man allerdings doch „echte“ Banknoten. Aber lässt sich auch mit Apple Pay auch Geld abheben?  Nicht nur per Gir…",
        "url": "https://www.basicthinking.de/blog/2024/08/10/apple-pay-geld-abheben/",
        "urlToImage": "https://www.basicthinking.de/blog/wp-content/uploads/2024/08/geld-abheben-apple-play-.jpg",
        "publishedAt": "2024-08-10T04:00:47Z",
        "content": "Kontaktloses Bezahlen ist mittlerweile fast überall per Smartphone oder Smartwatch möglich. Viele iOS-User nutzen dafür Apple Pay. Manchmal braucht man allerdings doch „echte“ Banknoten. Aber lässt s… [+2290 chars]"
    },
    
    {
        
        "source": {
            "id": "techradar",
            "name": "TechRadar"
        },
        "author": "hamish.hector@futurenet.com (Hamish Hector)",
        "title": "ICYMI: the week's 7 biggest tech news stories from Disney Plus password sharing to the RingConn Gen 2 smart ring",
        "description": "ICYMI here are the biggest tech news stories from Google, DJI, Disney, and more for August 10, 2024.",
        "url": "https://www.techradar.com/tech/icymi-the-weeks-7-biggest-tech-news-stories-from-disney-plus-password-sharing-to-the-ringconn-gen-2-smart-ring",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/R2yPpWbybBbr5QpUXmjUtb-1200-80.png",
        "publishedAt": "2024-08-10T07:00:42Z",
        "content": "This week in tech has brought us exciting new products, some infuriating price hikes, and leaks teasing future gadgets we can’t wait to try.\r\nKeeping up with all this and more is a monumental task, s… [+6186 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Hdblog.it"
        },
        "author": "HDblog.it",
        "title": "Il Virtual Boy di Nintendo risorge su Apple Vision Pro grazie ad un emulatore",
        "description": "L'emulatore VirtualFriend permette agli utenti di Apple Vision Pro di rivivere lesperienza unica del Virtual Boy.",
        "url": "https://www.hdblog.it/indossabili/articoli/n589760/virtual-boy-nintendo-emulatore-apple-vision-pro/",
        "urlToImage": "https://hd2.tudocdn.net/1180746?w=1920",
        "publishedAt": "2024-08-10T08:10:00Z",
        "content": "Sono passati più di vent'anni dal primo fallimentare esordio di Nintendo nel mondo della realtà virtuale, uno dei rarissimi casi in cui la casa di Mario fece un vero e proprio buco nell'acqua. Presen… [+718 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Hdblog.it"
        },
        "author": "HDblog.it",
        "title": "Migliori VPN per Netflix del 2024 (Serie TV anche dallestero)",
        "description": "Quali sono le VPN che funzionano meglio per sbloccare i cataloghi Netflix? Scopri la classifica delle soluzioni per lo streaming: gratis e a pagamento.",
        "url": "https://www.hdblog.it/sicurezza/guide/n587399/vpn-netflix-migliori/",
        "urlToImage": "https://hd2.tudocdn.net/1173536?w=1920",
        "publishedAt": "2024-08-10T07:35:00Z",
        "content": "Gli utenti di Netflix, appassionati di film e serie TV, sanno che le restrizioni geografiche della piattaforma streaming impediscono l’accesso ai contenuti esteri, come quelli degli Stati Uniti. Altr… [+18791 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Geekpark.net"
        },
        "author": null,
        "title": "美国司法部正考虑强制将安卓从谷歌剥离；鸿蒙智行享界 S9 上市 72 小时大定突破 4800 台；拼多多创始人黄峥登顶中国首富",
        "description": "反垄断重锤下，美国司法部正考虑强制将安卓从谷歌剥离\n8 月 9 日消息，The Information 称，美国司法部在赢得了针对谷歌的反垄断诉讼后，不仅会削弱该公司与苹果之间的联盟关系，还可能会寻求让该公司实施重大变革，比如强制剥离安卓。\n\n据律师称，在对谷歌非法垄断行为进行处罚的下一阶段，美国政府可能会打击该公司在其主导的新一代对话式 AI 搜索领域的努力，并便于让竞争对手蚕食其 95% 的市场份额。\n微软前助理总法律顾问吉恩・伯勒斯表示，司法部律师几乎肯定会要求法官采取「结构性补救措施」，例如迫使谷歌剥离安…",
        "url": "https://www.geekpark.net/news/339130",
        "urlToImage": "https://imgslim.geekpark.net/uploads/image/file/e1/99/e199a4fbb5c6ea5c8109323b4506fd02.jpg",
        "publishedAt": "2024-08-10T00:28:46Z",
        "content": "8 9 The Information \r\nAI  95% \r\nIT \r\nSpaceX 3 \r\n 8 9 SpaceX 3 \r\n3 3 \r\n 3  2 \r\nSpaceX 3  280 35 9800 30%IT \r\nX Grok \r\n X Grok DPCGDPR X \"Grok'\r\ncnBeta\r\n 9 2025 \r\n8 9 2024 9 24 25 On Intel Innovation 2… [+767 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Netaful.jp"
        },
        "author": "コグレマサト",
        "title": "【iOS 18】コンテンツをブロックするSafariの「Web Eraser」が「Distraction Control」としてリリースか",
        "description": "「iOS 18」広告を含むコンテンツをブロックすることができるSafariの「Web Eraser」という機能が準備されていたのですが「Distraction Control」としてテストされているようです。 Apple...\n投稿 【iOS 18】コンテンツをブロックするSafariの「Web Eraser」が「Distraction Control」としてリリースか は ネタフル に最初に表示されました。",
        "url": "https://netaful.jp/ios/0154843.html",
        "urlToImage": "https://netaful.jp/wp-content/uploads/2024/06/ios-18-icon.jpg",
        "publishedAt": "2024-08-10T00:00:00Z",
        "content": "iOS 18SafariWeb EraserDistraction Control\r\nAppleInsiderApple renames Web Eraser to Distraction Control for iOS 18\r\nApple has brought out a new test feature for Safari in iOS 18 and macOS Sequoia, wit… [+141 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Eonline.com"
        },
        "author": null,
        "title": "Inside Hailee Steinfeld and Josh Allen’s Winning Romance",
        "description": "Hailee Steinfeld and Josh Allen hit the bullseye with their relationship.\nThe Hawkeye star and the Buffalo Bills quarterback have largely kept their romance out of the public eye in the year since...",
        "url": "https://www.eonline.com/news/1405866/inside-hailee-steinfeld-and-josh-allens-winning-romance",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202426/rs_1200x1200-240306091836-1200-hailee-steinfeld-josh-allen-paris.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2024-08-10T07:00:00Z",
        "content": "Hailee Steinfeld and Josh Allen hit the bullseye with their relationship.\r\nThe Hawkeye star and the Buffalo Bills quarterback have largely kept their romance out of the public eye in the year since f… [+988 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Roomie.jp"
        },
        "author": "ROOMIE編集部",
        "title": "Appleの隠れた逸品で「スマホへのデータ送信ストレス」が解決！写真・動画編集の効率が爆上がりしたよ",
        "description": "※本記事は2022年9月24日に公開された記事を再編集して掲載しています。 Text and Photographed by 門岡 明弥 カメラで写真を撮ってから、スマホに送るひと手間。 カメラのWi-Fi機能でもデータは送れますが、RAWデータを送れないことがとにかく不便でした……。 それに、Wi-Fi送信するまでに何回かボタンを押さなければいけませんし、地味に手順が多いこともストレスだったんで",
        "url": "https://www.roomie.jp/2024/08/1284720/",
        "urlToImage": "https://media.loom-app.com/roomie/dist/images/2024/08/240806_Apple_1.jpg?w=1200",
        "publishedAt": "2024-08-10T02:00:06Z",
        "content": "2022924Text and Photographed by \r\nWi-FiRAW\r\nWi-Fi\r\nAppleSD\r\nApple Lightning-SD 4,800\r\nAppleSD\r\nUSB-CiPhone\r\niPhoneSD\r\nOK\r\niOS 9iPhoneiPadiPod touch\r\nSD\r\nSD\r\niPhoneRAWiPhone\r\nSD\r\nSDiPhoneOKiPhone\r\niPh… [+81 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Zive.cz"
        },
        "author": "Aiťák",
        "title": "Aiťákův týden: Windows 11 mohou být stále zdarma, Intelu se nedaří, reklamy v AI. A jak je to s ženami v boxu",
        "description": "Do AI jsme nahráli články, které na Živě vyšly v uplynulém týdnu • Požádali jsme o výběr nejzajímavějších témat a jejich shrnutí • Dnešní článek připravil Claude 3.5 Sonnet, obrázek je z Midjourney.",
        "url": "https://www.zive.cz/clanky/aitakuv-tyden-windows-11-mohou-byt-stale-zdarma-intelu-se-nedari-reklamy-v-ai-a-jak-je-to-s-zenami-v-boxu/sc-3-a-229573/default.aspx",
        "urlToImage": "https://www.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=47631172",
        "publishedAt": "2024-08-10T05:45:00Z",
        "content": "Poítae, internet a AI\r\nMicrosoft roziuje vyuití umlé inteligence ve vyhledávai Bing. AI bude sestavovat tém celou stránku výsledk vyhledávání, vetn obrázk a dalích prvk. Klasické webové výsledky se p… [+6445 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Taisy0.com"
        },
        "author": "taisy0",
        "title": "｢Apple マップ｣のWeb版、｢Firefox (Mac/Windows)｣と｢Edge (Mac)｣をサポート",
        "description": "先日、Appleが地図サービス「Apple マップ」のWeb版である「Apple Maps on the Web」のパブリックベータ版を公開しましたが、その「Apple Maps on the Web」がFirefox（Mac/Window",
        "url": "https://taisy0.com/2024/08/10/202829.html",
        "urlToImage": "https://taisy0.com/wp-content/uploads/2024/08/applemapsbetafirefox.jpg",
        "publishedAt": "2024-08-10T00:34:08Z",
        "content": "AppleApple WebApple Maps on the WebApple Maps on the WebFirefoxMac/WindowsEdgeMac\r\nApple Maps on the WebMaciPadSafariChromeWindows PCChromeEdgeFirefoxMacWindowsEdgeMac\r\nLook Around \r\nApple Maps on th… [+4 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Taisy0.com"
        },
        "author": "taisy0",
        "title": "【セール】Amazonやヨドバシなどで｢AirPods Pro (第2世代)｣や｢iPad (第9世代)｣のセール開催中（8月18日まで）",
        "description": "現在、AmazonやヨドバシなどでAppleの「AirPods Pro (第2世代)」や「iPad (第9世代)」のセールが開催されています。 Amazonでは「AirPods Pro (第2世代)」は通常38,192円のところが10％オフ",
        "url": "https://taisy0.com/2024/08/10/202844.html",
        "urlToImage": "https://taisy0.com/wp-content/uploads/2022/09/th_Airpodspro2nd.jpg",
        "publishedAt": "2024-08-10T06:44:29Z",
        "content": "AmazonAppleAirPods Pro (2)iPad (9)\r\nAmazonAirPods Pro (2)38,1921034,526134534,18134,181\r\niPad (9)Amazon64GB/Wi-Fi49,8006,00043,800256GB/Wi-Fi66,80066866,13264GB/Wi-FiAmazon256GB/Wi-Fi\r\nApple Premium … [+16 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Macitynet.it"
        },
        "author": "Antonio Dini",
        "title": "La recensione del lettore e-book Rakuten Kobo Libra Colour, il colore diventa mainstream",
        "description": "Non fatevi ingannare dalla nicchia della concorrenza Android, questo è il primo vero lettore di libri a colori per tutti\n- su macitynet.it La recensione del lettore e-book Rakuten Kobo Libra Colour, il colore diventa mainstream",
        "url": "https://www.macitynet.it/?p=1322603",
        "urlToImage": "https://www.macitynet.it/wp-content/uploads/2024/08/recensione-Rakuten-Kobo-Libra-Colour-foto-antonio-dini-5.jpg",
        "publishedAt": "2024-08-10T07:59:06Z",
        "content": "La lotta per leggere a colori è un problema meno di nicchia di quanto non sembri. A parte i fumetti (come vedremo) comunque l’idea di avere tra le mani un dispositivo economico, solido, con la durata… [+10852 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Svendite Amazon del weekend: Google Pixel 8 e 8 Pro, PC portatili, TV, tablet e molto altro, i prezzi sono veramente super!",
        "description": "Alcuni prezzi sono da vera e propria svendita, altri articoli al minimo storico: Amazon è scatenata con le promozioni in questo caldo weekend, proponendo articoli di grandi marchi a prezzi veramente interessanti. Ecco la nostra selezione.",
        "url": "https://www.hwupgrade.it/news/multimedia/svendite-amazon-del-weekend-google-pixel-8-e-8-pro-pc-portatili-tv-tablet-e-molto-altro-i-prezzi-sono-veramente-super_129725.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/ama_teclast16_720.jpg",
        "publishedAt": "2024-08-10T06:49:16Z",
        "content": "Super prezzi per Google Pixel 8 e 8 Pro, nei tagli da 128GB e 256GB fino ad esaurimento scorte. Sono fra i migliori smartphone Android in assoluto!\r\nUn discorso molto simile per le Google Pixel Buds … [+6186 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "MacGeneration"
        },
        "author": "Nicolas Furno",
        "title": "Les nouveautés majeures de la WWDC 2024 pour Swift",
        "description": "Swift a fêté son dixième anniversaire cette année et le langage de développement phare d’Apple continue d’évoluer de manière significative avec les mises à jour de ses systèmes d’exploitation. L’entreprise de Tim Cook a présenté plusieurs nouveauté...",
        "url": "https://www.macg.co/logiciels/2024/08/les-nouveautes-majeures-de-la-wwdc-2024-pour-swift-145243",
        "urlToImage": "https://cdn.mgig.fr/2024/07/mga-b79367e4-w375-w1500-w750_accroche.jpg",
        "publishedAt": "2024-08-10T08:00:55Z",
        "content": "Swift a fêté son dixième anniversaire cette année et le langage de développement phare dApple continue dévoluer de manière significative avec les mises à jour de ses systèmes dexploitation. Lentrepri… [+965 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Gori.me"
        },
        "author": "g.O.R.i",
        "title": "ウェブ版Appleマップ、Firefoxをサポート開始",
        "description": "Appleは、Webブラウザから利用できるAppleマップのベータ版をアップデートし、Firefoxのサポートを開始した。これにより、Mac、PC、iPadのFirefoxユーザーも、ウェブ版Appleマップを快適に利用できるようになった。 待望のFirefox対応 これまでFirefoxではエラー…\nThe post ウェブ版Appleマップ、Firefoxをサポート開始 first appeared on ゴリミー. 【もっと読む】",
        "url": "https://gori.me/apple/apple-news/154820",
        "urlToImage": "https://gori.me/uploads/2024/08/Apple-Maps-on-Firefox-Browser-800x524.jpg",
        "publishedAt": "2024-08-10T01:03:44Z",
        "content": "AppleWebAppleFirefoxMacPCiPadFirefoxApple\r\nFirefox\r\nFirefoxAppleMaciPadSafariEdgeChromeFirefoxWindows PCEdgeChromeFirefox\r\nApple\r\nApple7\r\nAppleLook Around\r\nApple\r\nSource: MacRumors"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Screen Rant"
        },
        "author": "Ben Protheroe",
        "title": "10 Great Crime TV Shows With A-List Actors",
        "description": "More and more top-level talents have been attracted to crime shows in recent years, creating some classics of the genre which showcase great acting.",
        "url": "https://screenrant.com/great-crime-tv-shows-with-a-list-actors/",
        "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/kirsten-dunst-in-fargo-and-paul-rudd-in-only-murders-in-the-building.jpg",
        "publishedAt": "2024-08-10T01:10:11Z",
        "content": "Summary\r\n<ul><li>\r\n Top-tier movie stars like Gary Oldman and Al Pacino have taken on roles in crime shows.\r\n </li><li>\r\n The influx of A-list stars has resulted in outstanding crime shows with a wid… [+11722 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Iculture.nl"
        },
        "author": "Gonny van der Zwaag | iCulture.nl",
        "title": "Weekend kijktips: The Instigators, Bob Marley, Otto en meer",
        "description": "We schrijven op iCulture regelmatig over streaming videodiensten en handige functies om meer uit deze diensten te halen. Maar wat ga je kijken op je Apple-apparaten? Daar besteden we in deze rubriek aandacht aan. Je kunt dit weekend kijken naar diverse nieuwe…",
        "url": "https://www.iculture.nl/nieuws/weekend-kijktips-week-32-2024/",
        "urlToImage": "https://www.iculture.nl/wp-json/social-image-generator/v1/image/1405280/?v=14052851723280952",
        "publishedAt": "2024-08-10T07:09:09Z",
        "content": "Isa is een jonge, sympathieke, succesvolle dierenarts. Toch is ze onzeker, vooral over haar lijf en de liefde. Ruben is dé perfecte man. Knap, werkt met zijn handen en houdt zielsveel van zijn labrad… [+417 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Ipadizate.com"
        },
        "author": "Mauricio Martínez",
        "title": "\"Familia de Medianoche\" es la nueva serie en español de Apple TV+ que se estrenará en septiembre",
        "description": "Los de Cupertino no se detienen en cuanto a . En esta ocasión toca el turno de , una nueva serie de drama médico dirigida por Natalia Beristáin que será estrenada con doble capítulo el miércoles 25 de septiembre de este año. Ya están disponibles las primeras …",
        "url": "https://ipadizate.com/apple-tv/familia-de-medianoche-es-la-nueva-serie-en-espanol-de-apple-tv-que-se-estrenara-en-septiembre",
        "urlToImage": "https://ipadizate.com/hero/2024/08/familia-de-medianoche-nueva-produccion-de-apple-tv.jpg?width=1200",
        "publishedAt": "2024-08-10T07:00:22Z",
        "content": "Familia de Medianoche, nueva producción de Apple TV+\r\nLos de Cupertino no se detienen en cuanto a anuncios de nuevas producciones. En esta ocasión toca el turno de \"Familia de Medianoche\", una nueva … [+3287 chars]"
    },

    {
        
        "source": {
            "id": null,
            "name": "Natalie.mu"
        },
        "author": "音楽ナタリー",
        "title": "BE:FIRST、2ndアルバムリード曲のコンテンツカレンダー公開",
        "description": "BE:FIRSTの2ndアルバム「2:BE」より8月12日に先行配信されるリードトラック「Blissful」のコンテンツカレンダーが公開された。",
        "url": "https://natalie.mu/music/news/582695",
        "urlToImage": "https://ogre.natalie.mu/media/news/music/2024/0810/206651_Blissful_Schedule-2-08101200_X.jpg?impolicy=twitter_card_face_crop",
        "publishedAt": "2024-08-10T03:00:00Z",
        "content": "BE:FIRST2nd2:BE812Blissful\r\nBlissfulBE:FIRST1\r\nBE:FIRSTBlissful\r\n2024812 \r\n0:00 Blissful 0:00 Blissful Official AudioYouTube18:20 TikTok18:30 Instagram18:40 YouTube19:00 Blissful Music VideoYouTube\r\n… [+336 chars]"
    },

    {
        
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },

    {
        
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "DIE WELT"
        },
        "author": "Nando Sommerfeldt, Holger Zschäpitz",
        "title": "So geht Aufstieg heute – die 11 Tipps des Karriere-Guru",
        "description": "In dieser Samstagsfolge von „Alles auf Aktien“ reden wir über den Weg zu Erfolg und Reichtum. Denn es geht um eure Karriere. Unser Gast liefert 11 Tipps, wie sie gelingt. Wie starte ich? Welche Rolle spielen Noten überhaupt, welcher Studiengang öffnet mir Tür…",
        "url": "https://www.welt.de/podcasts/alles-auf-aktien/article252921870/Bewerbungsgespraech-Gehalt-Studiengang-die-11-Tipps-des-Karriere-Guru.html",
        "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile252743020/1001355377-ci16x9-w1200/WELT-Podcast-AAA-SB-Sommerfeldt-Seyffarth.jpg",
        "publishedAt": "2024-08-10T02:46:21Z",
        "content": "Doch das ist nur der Anfang. Denn unser Experte weiß auch, wie es dann weitergeht. Wo und wie man heutzutage den ersten Job findet. Er kennt die No-Gos im Bewerbungsgespräch, verrät die Hintergründe … [+421 chars]"
    },
    
    {
        
        "source": {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        },
        "author": "Jamie Tram",
        "title": "Matt Damon and Casey Affleck bungle the basics of a heist movie in The Instigators",
        "description": "The Instigators is Apple TV+'s latest attempt at reverse-engineering the kind of late-night TV movie best enjoyed by your dad.",
        "url": "https://www.abc.net.au/news/2024-08-10/the-instigators-review-matt-damon-casey-affleck/104203938",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/68b4e9ba27dd5b05065e5e7d980b95e7?impolicy=wcms_watermark_news&cropH=1910&cropW=3396&xPos=0&yPos=177&width=862&height=485&imformat=generic",
        "publishedAt": "2024-08-10T01:04:00Z",
        "content": "For a streaming service associated with the bleeding edge of tech, Apple TV+ has grown surprisingly nostalgic in its curation.\r\nWhat: Two fumbling crooks are roped into a high-stakes election night h… [+4558 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Technews.tw"
        },
        "author": "邱 倢芯",
        "title": "長得像 Apple TV？傳蘋果正重新設計 Mac mini 外觀",
        "description": "據《彭博社》報導指出，蘋果正對 Mac mini 進行自 2010 年以來的首次重大設計，新款 Mac mini 將於今年晚些時候發表，外觀將會比前代產品小很多，並採用與 Apple TV 類似的新外觀。 據傳新 Mac mini 將提供兩種選擇，分別是 M4 與 M4 Pro 晶片選擇。報導指稱，...",
        "url": "https://technews.tw/2024/08/10/apple-tv-mac-mini/",
        "urlToImage": "https://img.technews.tw/wp-content/uploads/2019/12/05163755/Mac-mini.jpg",
        "publishedAt": "2024-08-10T02:09:59Z",
        "content": "Mac mini 2010 Mac mini Apple TV \r\n Mac mini M4 M4 Pro USB-C HDMI M4 Pro RAM \r\n Mac mini \r\nApple TV 4K \r\n<ul><li>3.1 1.2 </li><li>9.3 3.66 </li><li>9.3 3.66 </li></ul>Mac mini \r\n<ul><li>3.58 1.41 </li… [+185 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Technews.tw"
        },
        "author": "財訊",
        "title": "巴菲特賣了近半蘋果股份！三因素使股市崩跌，股神操作給投資人什麼啟示？",
        "description": "「股神」巴菲特執掌的波克夏海瑟威公司（Berkshire Hathaway），美東時間 3 日公布上季財報，雖然股份總價值 842 億美元的蘋果（Apple）仍是波克夏最大持股，但規模從 7.9 億股下滑至 4 億股，大減約 49%。 波克夏上季現金水位到近2,770億美元，再創新高，比巴菲特5月初...",
        "url": "https://finance.technews.tw/2024/08/10/berkshire-hathaway-apple/",
        "urlToImage": "https://img.technews.tw/wp-content/uploads/2024/08/09103951/465454.jpg",
        "publishedAt": "2024-08-10T02:00:14Z",
        "content": "Berkshire Hathaway 3 842 Apple 7.9 4 49%\r\n2,77052\r\nAI\r\nAI\r\n110015%Pat GelsingerAI20%\r\nCNNAIAI\r\n711.417.54.14.3202110\r\nFedClaudia SahmSahm Rule120.5\r\n20233.4%74.3%\r\nFed9GDP2.8%Fed2%Fed\r\n13%\r\niPhone6%\r… [+31 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Securityaffairs.com"
        },
        "author": "Pierluigi Paganini",
        "title": "Sonos smart speakers flaw allowed to eavesdrop on users",
        "description": "NCC Group discovered vulnerabilities in Sonos smart speakers, including a flaw that could have allowed to eavesdrop on users. Researchers from NCC Group have discovered multiple vulnerabilities in Sonos smart speakers, including a flaw, tracked as CVE-2023-50…",
        "url": "https://securityaffairs.com/166823/hacking/sonos-smart-speakers-flaw.html",
        "urlToImage": "https://securityaffairs.com/wp-content/uploads/2024/08/image-7.png",
        "publishedAt": "2024-08-10T00:00:55Z",
        "content": "Sonos smart speakers flaw allowed to eavesdrop on users\r\n | Five zero-days impacts EoL Cisco Small Business IP Phones. Replace them with newer models asap!\r\n | CISA adds Apache OFBiz and Android kern… [+90392 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Geeky Gadgets"
        },
        "author": "Roland Hutchinson",
        "title": "Another Look at iOS 18.1 & Apple Intelligence",
        "description": "Apple recently released their latest iOS 18.1 developer beta and public beta , which introduces a groundbreaking suite of AI-driven features called Apple Intelligence. This update, currently exclusive to iPhone 15 Pro and Pro Max users in the United States, o…",
        "url": "https://www.geeky-gadgets.com/another-look-at-ios-18-1-apple-intelligence/",
        "urlToImage": "https://www.geeky-gadgets.com/wp-content/uploads/2024/08/iOS-18.1-3.jpg",
        "publishedAt": "2024-08-10T07:01:33Z",
        "content": "Apple recently released their latest iOS 18.1 developer beta and public beta , which introduces a groundbreaking suite of AI-driven features called Apple Intelligence. This update, currently exclusiv… [+5926 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Smzdm.com"
        },
        "author": null,
        "title": "百亿补贴：Apple 苹果 iPhone 15 Pro Max 5G手机 7748元",
        "description": "百亿补贴:Apple 苹果 iPhone 15 Pro Max 5G手机 7748元,什么值得买甄选出拼多多优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
        "url": "https://www.smzdm.com/p/121735037/",
        "urlToImage": "https://y.zdmimg.com/202310/18/652f7893496509250.jpg_d250.jpg",
        "publishedAt": "2024-08-10T01:40:54Z",
        "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Plus 5G手机 128GB 蓝色 5299元（需用券）",
        "description": "Apple 苹果 iPhone 15 Plus 5G手机 128GB 蓝色 5299元（需用券）,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
        "url": "https://www.smzdm.com/p/121742746/",
        "urlToImage": "https://y.zdmimg.com/202408/06/66b0f93ab9eb37649.jpg_d250.jpg",
        "publishedAt": "2024-08-10T02:39:17Z",
        "content": "iPhone 15 Plus IP68 201g7.8mm\r\niPhone 15 Plus 6.7 OLED XDR 2796×1290460ppi2000100%DCI-P360HziPhone 15Plus A16 6 CPU5GPU 16 iPhone 14 Plus 263550%LightningUSB-C\r\niPhone 15 Plus 4800f1.62400120021200f2… [+12 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "CinemaBlend"
        },
        "author": "Mike Reyes",
        "title": "I Wasn't Sure Crawl 2 Was A Good Idea, But Then I Read The Plot Details And I'm Ready To Gat-or Done",
        "description": "Get ready to go from skeptic to believer in no time flat, as Crawl 2 is happening thanks to a very snappy concept.",
        "url": "https://www.cinemablend.com/movies/wasn-t-sure-crawl-2-good-idea-plot-details-gator-done",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/Zf5MYsxH7K5nJwnj7nFwyn-1200-80.jpg",
        "publishedAt": "2024-08-10T01:45:11Z",
        "content": "In case you dear readers haven’t picked up on it yet, I’m a bit of an excitable person. There are already tons of upcoming 2025 movies\r\n I’m looking forward to, in addition to the rest of this year’s… [+3792 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "CinemaBlend"
        },
        "author": "mick.joest@CinemaBlend.com (Mick Joest)",
        "title": "Star Trek's Ronald D. Moore Told Us The Voyager Storylines He Pitched Before Leaving, And I Would've Loved To See Them",
        "description": "Ronald D. Moore didn't work on Star Trek: Voyager for long, but he had some great ideas I would've liked to see.",
        "url": "https://www.cinemablend.com/interviews/star-trek-ronald-d-moore-voyager-storylines-pitched-before-leaving",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/FuWzHrttmF26mC32dzjNnd-1200-80.jpg",
        "publishedAt": "2024-08-10T01:22:15Z",
        "content": "Star Trek: Voyager remains one of the most fascinating series of the franchise for me. It features a good deal of actors who I genuinely believe play the best Trek characters, and it has some truly W… [+4167 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "CinemaBlend"
        },
        "author": "Laura Hurley",
        "title": "After Olympic Medalists Geeked Out Over Law And Order: SVU's Mariska Hargitay, Here's What Christopher Meloni Told Us About His Fan Encounters In Paris",
        "description": "Both Christopher Meloni and Mariska Hargitay visited Paris for the 2024 Olympics, and the Stabler star opened up about meeting fans there.",
        "url": "https://www.cinemablend.com/interviews/olympic-medalists-geeked-out-law-and-order-svu-mariska-hargitay-what-chris-meloni-told-us-fan-encounters-paris",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/KMkxUGDFzwyErBdsVHFxcK-1200-80.jpg",
        "publishedAt": "2024-08-10T05:01:22Z",
        "content": "The late summer months are usually when the stars of the Law &amp; Order franchise are too busy filming new seasons to be spotted out and about far from New York City, but that wasn't the case this y… [+4804 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Johnnyjet.com"
        },
        "author": "Natalie DiScala",
        "title": "‘I literally can’t play’: United Airlines loses tennis star’s luggage on her way to play in tournament",
        "description": "Lost luggage – it’s been the plight of many a traveler. Yes, we all know that traveling with carry-on only greatly reduces the risk of an airline losing your bag....\nThe post ‘I literally can’t play’: United Airlines loses tennis star’s luggage on her way to …",
        "url": "https://johnnyjet.com/i-literally-cant-play-united-airlines-loses-tennis-stars-luggage-on-her-way-to-play-in-tournament/",
        "urlToImage": "https://johnnyjet.com/wp-content/uploads/2023/03/united-airlines-airplane.jpg",
        "publishedAt": "2024-08-10T05:31:41Z",
        "content": "This post contains references to products from one or more of our advertisers. We may receive compensation when you click on links to those products. For an explanation of our Advertising Disclosure,… [+3374 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Www.dn.se"
        },
        "author": "Viktor Andersson",
        "title": "Michelle Monaghan: Jag tackar ibland ja till semestergig",
        "description": "Från soliga Florida i ”Bad monkey” till ännu soligare Thailand i ”The White Lotus”. Michelle Monaghan har på sistone fått chans att bättra på brännan på arbetstid. – Jag tackar ibland ja till semestergig, absolut, säger hon.",
        "url": "https://www.dn.se/kultur/michelle-monaghan-jag-tackar-ibland-ja-till-semestergig/",
        "urlToImage": "https://static.bonniernews.se/gcs/bilder/dn-mly/72f23a67-cd8f-4c63-809e-e271ba1c6d7c.jpeg?interpolation=lanczos-none&fit=around%7C1024:576&crop=1024:h;center,top&output-quality=80",
        "publishedAt": "2024-08-10T08:18:54Z",
        "content": "Mord i pardiset möter Inherent vice. Så kan man beskriva Scrubs-skaparen Bill Lawrences nya komediserie Bad monkey som utspelas i Florida Keys, ett pärlband av öar granne med Bahamas. Vince Vaughn sp… [+4537 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "Patrick McDonald",
        "title": "2024 Wyndham Championship leaderboard: Beau Hossler on top, Billy Horschel threatening in Round 1",
        "description": "Hossler flirted with carding the third sub-60 round on the PGA Tour this season",
        "url": "https://www.cbssports.com/golf/news/2024-wyndham-championship-leaderboard-beau-hossler-on-top-billy-horschel-threatening-in-round-1/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/08/10/b53dfcd0-c220-47e1-9a27-b4e550d3ca9e/thumbnail/1200x675/569b09a54a034cee54386ba9a9ef78d5/billy-horschel-wyndham-g.jpg",
        "publishedAt": "2024-08-10T01:19:36Z",
        "content": "After more than 24 hours of delay, the 2024 Wyndham Championship finally got underway Friday in Greensboro, North Carolina. A rain-soaked Sedgefield Country Club was no match for the field, especiall… [+5676 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "MMA Fighting"
        },
        "author": "Mike Heck",
        "title": "UFC Vegas 95 preview show: Can Serghei Spivac get revenge on Marcin Tybura? Plus, weight misses galore",
        "description": "MMA Fighting previews Saturday’s UFC Vegas 95 event headlined by a rematch between Marcin Tybura and Serghei Spivac.",
        "url": "https://www.mmafighting.com/2024/8/9/24216737/ufc-vegas-95-preview-show-can-serghei-spivac-get-revenge-on-marcin-tybura-plus-weight-misses-galore",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/QiNOVil52pwGe1_beARd9rT-cgM=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25565538/UFC_Vegas_95_clean.jpg",
        "publishedAt": "2024-08-10T00:00:00Z",
        "content": "A UFC heavyweight rematch tops the bill of Saturday’s UFC Vegas 95 as Marcin Tybura looks to go 2-0 in the series against Serghei Spivac at the APEX. With that bout topping the 10-card slate, is this… [+739 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Auto-moto.com"
        },
        "author": "Laurent Pinel",
        "title": "Quel Kia Niro choisir en 2024 ?",
        "description": "La deuxième mouture du Niro, déclinée en hybride, en hybride rechargeable ainsi qu’en 100 % électrique, rencontre un beau succès commercial. Quelle version et quel niveau de finition choisir ? Auto Moto vous guide.",
        "url": "https://www.auto-moto.com/conseil-d-achat/quel-kia-niro-2-choisir--43506",
        "urlToImage": "https://photos.auto-moto.com/32/2024/08/photo_article/43506/161667/1200-L-quel-kia-niro-choisir-en-2024.webp",
        "publishedAt": "2024-08-10T06:00:00Z",
        "content": "En France, c’est un gros succès à l’échelle de Kia : le Niro, lancé en 2022 avec une personnalité franche, s’est vendu à 9 294 unités sur l’année 2023, faisant de lui la deuxième meilleure vente de l… [+9303 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "mobiFlip.de"
        },
        "author": "René Hesse",
        "title": "Aqara FP1E Präsenz-Sensor startet in den Markt",
        "description": "Aqara, ein Anbieter im Bereich Internet der Dinge (IoT), hat in dieser Woche die weltweite Markteinführung seines neuen Präsenzmelders FP1E angekündigt. Der Sensor erweitert das Smart-Home-Portfolio des Unternehmens und nutzt […]",
        "url": "https://www.mobiflip.de/shortnews/aqara-fp1e-praesenz-sensor-startet-in-den-markt/",
        "urlToImage": "https://www.mobiflip.de/wp-content/uploads/2024/08/presence-sensor-fp1e_6.jpg",
        "publishedAt": "2024-08-10T07:09:04Z",
        "content": "Aqara, ein Anbieter im Bereich Internet der Dinge (IoT), hat in dieser Woche die weltweite Markteinführung seines neuen Präsenzmelders FP1E angekündigt.\r\nDer Sensor erweitert das Smart-Home-Portfolio… [+1219 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Applech2.com"
        },
        "author": "applech2",
        "title": "macOS 15 Sequoiaでは、コンテキストメニューからのオーバーライドに加え「spctl」コマンドを利用したGatekeeperの無効化も非サポートに。",
        "description": "macOS 15 Sequoiaでは、コンテキストメニューからのオーバーライドに加え「spctl」コマンドを利用したGatekeeperの無効化が非サポートになるそうです。詳細は以下から。 　Appleは現地時間202 […]\nThe post macOS 15 Sequoiaでは、コンテキストメニューからのオーバーライドに加え「spctl」コマンドを利用したGatekeeperの無効化も非サポートに。 first appeared on AAPL Ch..",
        "url": "https://applech2.com/archives/20240810-spctl-disable-no-longer-support-in-macos-15-sequoia.html",
        "urlToImage": "https://applech2.com/wp-content/uploads/2024/08/spctl-command-no-supported-in-macOS-15-Sequoia-features-1.jpg",
        "publishedAt": "2024-08-10T01:55:21Z",
        "content": "macOS 15 SequoiaspctlGatekeeper\r\nApple20240806macOS 15 SequoiaControl+()[]Gatekeeper(/)\r\nmacOS SequoiacontrolGatekeeper &gt; \r\nmacOS Sequoia Apple Developer\r\nAppleGatekeeperGatekeeperspctl (SecAssess… [+872 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Maclife.de"
        },
        "author": "Sven T. Möller",
        "title": "Neue Highlights aus der Streaming-Welt",
        "description": "Welche neuen Serien und Filme sind einen Blick wert? Wir haben die aufregendsten Releases für dich zusammengestellt, damit du keine der neuesten Perlen auf den großen Streaming-Plattformen verpasst. (Weiterlesen)",
        "url": "https://www.maclife.de/news/neue-highlights-streaming-welt-100124432.html",
        "urlToImage": "https://www.maclife.de/media/maclife/styles/tec_frontend_opengraph/public/images/editors/2024_31/image-124432--4613440.jpeg?itok=CHu1Pwj1",
        "publishedAt": "2024-08-10T08:13:00Z",
        "content": "The Bear, Staffel 3\r\nDisney+/Serie: Gewöhnlich besprechen wir an dieser Stelle nur neue Serien, für The Bear müssen wir eine Ausnahme machen. Denn kaum eine Serie hat uns in den vergangenen Jahren so… [+3532 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "netzwelt"
        },
        "author": "Kai Bub",
        "title": "Spotify vs. Apple Music: Ein Dienst hat die bessere Audioqualität, doch nicht alle können sie nutzen",
        "description": "Spotify und Apple sind weltweit bekannt. Mit Apple Music will Apple nun dem Platzhirsch im Musikgeschäft den Platz streitig machen. Doch Spotify macht es Apple nicht leicht.\nDieser Artikel wurde einsortiert unter \nAudio,Technology,Spotify,Audio & Musik,Online…",
        "url": "https://www.netzwelt.de/musik-streaming/spotify/spotify-versus-apple-music.html",
        "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw0_sh0_sx0_sy0_sr16x9_nu2/picture/original/2024/08/spotify-vs-apple-music-410781.jpeg",
        "publishedAt": "2024-08-10T08:00:00Z",
        "content": "SPOTIFY\r\nSpotify und Apple sind weltweit bekannt. Mit Apple Music will Apple nun dem Platzhirsch im Musikgeschäft den Platz streitig machen. Doch Spotify macht es Apple nicht leicht.\r\nSpotify und App… [+11612 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Techstage.de"
        },
        "author": "Kai Schmerer",
        "title": "Top 7: Die besten Radar-Präsenzmelder im Test – Beleuchtung präzise steuern",
        "description": "Radargestützte Präsenzmelder bieten anders als PIR-Bewegungsmelder eine zuverlässige Steuerung der Beleuchtung. Der Aqara FP2 belegt den ersten Platz. Es gibt aber auch empfehlenswerte, günstige Alternativen.",
        "url": "https://www.techstage.de/bestenliste/top-7-die-besten-radar-praesenzmelder-im-test-beleuchtung-praezise-steuern/p8kb2wz#article",
        "urlToImage": "https://ocdn.eu/pulscms-transforms/1/qIgktkpTURBXy83ODVjNzQ0MTExNDIyNjEyZGU2MTMxYWRiYTcxMmZlMy5qcGeSlQMAAM0PwM0I3JMFzQSwzQJ2",
        "publishedAt": "2024-08-10T05:00:00Z",
        "content": "Einfache Bewegungsmelder kennt jeder. Wenn etwa das Licht im Treppenhaus automatisch angeht, steckt dahinter meistens ein solches Gerät. Die Nachteile von Passiv-Infrarot-Sensoren (PIR-Sensoren), mit… [+31537 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "iGeneration"
        },
        "author": "Nicolas Furno",
        "title": "Les premiers HomePod briqués à cause du logiciel peuvent désormais être sauvés",
        "description": "Le premier HomePod a souffert de nombreux problèmes de fiabilité, à tel point que son abandon précoce a peut-être été précipité par les multiples pannes de l’enceinte connectée. Apple n’a jamais voulu réparer l’appareil et le constructeur se contente depuis l…",
        "url": "https://www.igen.fr/domotique/2024/08/les-premiers-homepod-briques-cause-du-logiciel-peuvent-desormais-etre-sauves-145197",
        "urlToImage": "https://cdn.mgig.fr/2024/08/mga-c1bfd0de-w375-w1500-w750_accroche.jpg",
        "publishedAt": "2024-08-10T06:00:00Z",
        "content": "Le premier HomePod a souffert de nombreux problèmes de fiabilité, à tel point que son abandon précoce a peut-être été précipité par les multiples pannes de lenceinte connectée. Apple na jamais voulu … [+2335 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "disneyfoodblog.com"
        },
        "author": "Myranda Juarez",
        "title": "REVIEW: We Tried TONS of Treats at Mickey’s Not-So-Scary Halloween Party in Disney World",
        "description": "Who's ready for a hauntingly great time?! Mickey's Not-So-Scary Halloween Party has arrived in Magic Kingdom and we're here to check out everything from the costumes to the entertainment to the decor and of course, the FOOD!\nThe post REVIEW: We Tried TONS of …",
        "url": "https://www.disneyfoodblog.com/2024/08/10/review-we-tried-tons-of-treats-at-mickeys-not-so-scary-halloween-party-in-disney-world/",
        "urlToImage": "https://www.disneyfoodblog.com/wp-content/uploads/2024/08/2024-wdw-mk-magic-kingdom-mnsshp-halloween-party-minnie-witch-hat-main-street-bakery-03-700x525.jpg",
        "publishedAt": "2024-08-10T05:16:49Z",
        "content": "Who’s ready for a hauntingly great time?! Mickey’s Not-So-Scary Halloween Partyhas arrived in Magic Kingdom and we’re here to check out everything from the costumes to the entertainment to the decor … [+7089 chars]"
    },

    {
        
        "source": {
            "id": null,
            "name": "Jenesaispop.com"
        },
        "author": "Jordi Bardají",
        "title": "Charli xcx suma un nº1 en singles en UK, pero no en discos",
        "description": "Charli xcx entra en el número 1 de la lista de singles de Reino Unido con el remix de ‘Guess‘ con Billie Eilish. Se trata del segundo número 1 de Charli en las islas, y del tercero de Billie después de los obtenidos con ‘No Time to Die’ y ‘What Was I Made For…",
        "url": "https://jenesaispop.com/2024/08/10/480409/charli-billie-guess-uk/",
        "urlToImage": "https://jenesaispop.com/wp-content/uploads/2024/08/charli-billie-guess.jpg",
        "publishedAt": "2024-08-10T08:45:06Z",
        "content": "Charli xcx entra en el número 1 de la lista de singles de Reino Unido con el remix de ‘Guess‘ con Billie Eilish. Se trata del segundo número 1 de Charli en las islas, y del tercero de Billie después … [+1856 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Www.abc.es"
        },
        "author": "(abc)",
        "title": "Pódcast París 2024 | Los oros de Jordan Díaz y el fútbol masculino arreglan un viernes de dolores",
        "description": "¿Puede una alegría grande tapar varias decepciones? Parece que sí. Es lo que ocurrió este viernes en los Juegos Olímpicos de París para una delegación española que llevaba un muy mal día. Hasta que llegó la final de fútbol masculino. El equipo de Santi Denia …",
        "url": "https://www.abc.es/deportes/juegos-olimpicos/podcast-paris-2024-oros-jordan-diaz-futbol-20240810002558-nt.html",
        "urlToImage": "https://s3.abcstatics.com/abc/www/multimedia/deportes/2024/08/10/olimpiadas_1920x1080_20240810002706-RVbq6sU8Wu5XVC2WQFzCvJJ-1024x512@diario_abc.jpg",
        "publishedAt": "2024-08-10T04:00:00Z",
        "content": "¿Puede una alegría grande tapar varias decepciones? Parece que sí. Es lo que ocurrió este viernes en los Juegos Olímpicos de París para una delegación española que llevaba un muy mal día. Hasta que l… [+1345 chars]"
    },
    
    {
    
        "source": {
            "id": null,
            "name": "Kinopoisk.ru"
        },
        "author": null,
        "title": "Новости недели: второй сезон «Одних из нас», французский ремейк «СуперБобровых» и камбэк Ксавье Долана",
        "description": "Дайджест новостей недели: фестиваль «Новый сезон» объявляет программу, а Гас Ван Сент и Ксавье Долан готовят новые фильмы. Подробнее...",
        "url": "https://www.kinopoisk.ru/media/news/4009779/",
        "urlToImage": "https://avatars.mds.yandex.net/get-kinopoisk-blog-post-thumb/17777/c70a839e5216aabf0d814dec53972266/1200x630",
        "publishedAt": "2024-08-10T06:00:00Z",
        "content": ".   «  »,   -«, , , !»  «»  .\r\nHBO   The Last of Us  Naughty Dog.     The Last of Us Part 2,    .   ,   . ,       .       ,  .     , .  ,     .   ,   .  2025 .\r\n  - «»  -     . «»   -  . ,  .   -    … [+1183 chars]"
    },

    {
        
        "source": {
            "id": null,
            "name": "PC Games"
        },
        "author": "Sascha Lohmüller",
        "title": "N-ZONE 09/24: The Legend of Zelda: Echoes of Wisdom, Nintendo World Championships: NES Edition u. v. m.",
        "description": "Die N-ZONE 09/24 ist da! In unserer Coverstory verraten wir euch, was bisher zum neuen Zelda: Echoes of Wisdom bekannt ist. Außerdem: Großes Special zur kompletten Zelda-Timeline, Test zu Nintendo World Championships: NES Edition u. v. m.",
        "url": "https://www.pcgames.de/N-ZONE-Brands-68140/News/09-24-Zelda-Echoes-of-Wisdom-1453422/",
        "urlToImage": "https://www.pcgames.de/screenshots/original/2024/08/NZ_2409Online-Heftteaser_1080x428-pc-games_artwork.jpg",
        "publishedAt": "2024-08-10T08:00:00Z",
        "content": "Wenn ein neues Zelda angekündigt wird, sind wir natürlich sofort hellhörig, selbst wenn es nur ein Ableger wie Hyrule Warriors sein sollte. Logisch also, dass wir uns wie Bolle gefreut haben, als Nin… [+4015 chars]"
    },

    {
    
        "source": {
            "id": null,
            "name": "Barks.jp"
        },
        "author": "BARKS",
        "title": "BE:FIRST、最新曲「Blissful」コンテンツカレンダー公開",
        "description": "BE:FIRSTが、2ndアルバム『2:BE』より8月12日に先行配信するリードトラック「Blissful」のコンテンツカレンダーを公開した。先行配信から怒涛のコンテンツ公開を予告したBE:FIRST。さらにメディ...",
        "url": "https://www.barks.jp/news/?id=1000249863#utm_source=feed_news&utm_medium=feed&utm_campaign=feed",
        "urlToImage": "https://img.barks.jp/img/article/1000249863/H/1200.jpg",
        "publishedAt": "2024-08-10T03:00:00Z",
        "content": "8/12() 0:00 Blissful 0:00 Blissful Official AudioYouTube18:20 TikTok18:30 Instagram18:40 YouTube19:00 Blissful Music VideoYouTube8/15()19:00 Blissful -???????-YouTube20:00 Apple Music &amp; Spotify @… [+2395 chars]"
    },
    
    {
    
        "source": {
            "id": null,
            "name": "Computerwoche.de Live"
        },
        "author": "Stephan Wiesend",
        "title": "Sind VPN-Apps auf dem iPhone nutzlos?",
        "description": "VPN-Dienste helfen nicht nur gegen Geoblocking, sie sorgen auch für mehr Sicherheit. Zuletzt sind sie aber durch Angriffe wie „Tunnelvision“ in Kritik geraten.",
        "url": "https://www.computerwoche.de/a/sind-vpn-apps-auf-dem-iphone-nutzlos,3699034?utm_source=Nach-Artikeltyp_1,30,119,124,125&utm_medium=RSS&utm_campaign=RSS-Feeds",
        "urlToImage": "https://images.computerwoche.de/bdb/3397982/640x360.jpg",
        "publishedAt": "2024-08-10T03:02:00Z",
        "content": "Foto: Dominik Tomaszewski / Foundry\r\nEs gibt zwei gute Gründe, einen VPN-Dienst wie NordVPN oder Mullvad zu benutzen: Einer davon ist das Umgehen von Geoblocking. Können Sie mit einem VPN doch auf da… [+8687 chars]"
    },
    
    {
    
        "source": {
            "id": null,
            "name": "Computerwoche.de Live"
        },
        "author": "Denise Bergert, Anyron Copeman",
        "title": "Beeindruckendes Smartphone mit ärgerlichen Schwächen: Honor 200 Pro im Test",
        "description": "Honor hat mit dem 200 Pro vieles richtig gemacht, obwohl es viel günstiger als das Magic 6 Pro ist. Zwei große Kompromisse müssen Käufer jedoch machen.",
        "url": "https://www.computerwoche.de/a/honor-200-pro-im-test,3699064?utm_source=Nach-Artikeltyp_1,30,119,124,125&utm_medium=RSS&utm_campaign=RSS-Feeds",
        "urlToImage": "https://images.computerwoche.de/bdb/3398035/640x360.jpg",
        "publishedAt": "2024-08-10T03:48:00Z",
        "content": "Foto: Anyron Copeman / Foundry\r\n<table>\r\n<tr><td>Pro\r\n<ul><li>Starke Leistung \r\n</li><li>Sehr gutes Display \r\n</li><li>Solide Akkulaufzeit \r\n</li><li>Schnelles Laden mit 100 Watt\r\n</li></ul></td><td>… [+17828 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "kidsactivitiesblog.com"
        },
        "author": "Alexa Yard",
        "title": "Cool Working Yo-yo Paper Plate Craft",
        "description": "Today let’s make a working yo-yo made from paper plates! Yo-yo’s are so fun, so why not try making one…\nThe post Cool Working Yo-yo Paper Plate Craft appeared first on Kids Activities Blog.",
        "url": "https://kidsactivitiesblog.com/279563/cool-working-yo-yo-paper-plate-craft/",
        "urlToImage": "https://kidsactivitiesblog.com/wp-content/uploads/2024/07/IMG_8691-5.png",
        "publishedAt": "2024-08-10T00:23:00Z",
        "content": "Today let’s make a working yo-yo made from paper plates! Yo-yo’s are so fun, so why not try making one with interesting supplies, like paper plates! Kids of all ages will have a blast with this yo-yo… [+2957 chars]"
    },

    {
        
        "source": {
            "id": null,
            "name": "Overclockers.ru"
        },
        "author": "ddr22",
        "title": "Apple представит iPhone 16 в Корее раньше, чем в других регионах",
        "description": "Корейский рынок может быть потенциально перспективным для компании, позволяя ей вернуть часть потерянных продаж в Китае.",
        "url": "https://overclockers.ru/blog/ddr77/show/173392/Apple-predstavit-iPhone-16-v-Koree-ran-she-chem-v-drugih-regionah",
        "urlToImage": "https://overclockers.ru/st/legacy/blog/145016/548434_O.jpeg",
        "publishedAt": "2024-08-10T00:25:03Z",
        "content": "Apple iPhone 16 , , , . iPhone 3GS 2009 , , . , iPhone 16 , .\r\n, , 10 . Apple , , . Apple . Apple , .\r\n , iPhone 16 Apple . , , . Apple , . , ."
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Iphone-mania.jp"
        },
        "author": "lexi",
        "title": "Web版AppleマップがFirefoxでも利用可能に",
        "description": "AppleマップがWeb上で利用できるようになったのはごく最近のことですが、サポートされるブラウザが拡大し、Firefoxでも利用できるようになりました。MacとWindowsの両方に対応しています。 両プラットフォーム […]",
        "url": "https://iphone-mania.jp/apple-584454/",
        "urlToImage": "https://iphone-mania.jp/uploads/2024/07/25/1200x630wa-2.png",
        "publishedAt": "2024-08-10T08:32:58Z",
        "content": "AppleWebFirefoxMacWindows\r\nAppleWeb7\r\nGoogleWebApple\r\nMacSafariChromeWindowsEdgeChromeFirefox\r\nDuckDuckGoAppleWeb\r\nApple\r\nSource: MacRumors\r\nPhoto: Apple"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Iphone-mania.jp"
        },
        "author": "FT729",
        "title": "iPhone13 miniが52,800円〜など、各種中古品が18日までセール販売",
        "description": "イオシスが、2024年8月10日から18日までセール販売を実施、iPhone13 miniが税込52,800円〜など、Apple製品の中古品および未使用品を通常価格よりも安く販売しています。 セール対象製品と価格、保証内 […]",
        "url": "https://iphone-mania.jp/sale-584431/",
        "urlToImage": "https://iphone-mania.jp/uploads/2024/08/10/iosys-sale-202408_1.png",
        "publishedAt": "2024-08-10T00:08:08Z",
        "content": "202481018iPhone13 mini52,800Apple\r\n818\r\n<table><tr><td> </td><td> </td><td> </td><td> </td></tr><tr><td>iPhone13 mini128GB, SIM</td><td>52,800</td><td>C</td><td>3</td></tr><tr><td>57,800</td><td>B</t… [+565 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "VOA News"
        },
        "author": "webdesk@voanews.com (Associated Press)",
        "title": "Paris Olympics food donations seek to help needy, contribute to sustainability",
        "description": "paris — It is quite literally the food of champions. Paris Olympics organizers are determined that it not go to waste. \n\n\nFood that goes uneaten at the Games — by the athletes, the spectators and the workers — is helping those in need around the French capita…",
        "url": "https://www.voanews.com/a/paris-olympics-food-donations-seek-to-help-needy-contribute-to-sustainability-/7734325.html",
        "urlToImage": "https://gdb.voanews.com/E050CE3A-CF7E-4D28-9786-C6544721D32E.jpg",
        "publishedAt": "2024-08-10T07:00:00Z",
        "content": "paris  It is quite literally the food of champions. Paris Olympics organizers are determined that it not go to waste. \r\nFood that goes uneaten at the Games by the athletes, the spectators and the wor… [+4620 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Huffingtonpost.jp"
        },
        "author": "ハフポスト日本版編集部",
        "title": "今人気の日本の曲ランキング。「Bling-Bang-Bang-Born」や「幾億光年」を抑えた1位はあのアニメの主題歌（LINEミュージックランキング）",
        "description": "LINE MUSIC 2024年7月月間ランキング【あわせて読みたい】R-指定さんに激似の男性が発見される。DJ松永さんのお墨付き【比較画像】\r\n音楽ストリーミングサービス「LINE MUSIC」が、7月によく聴かれた曲の月間ランキングを発表しました。LINE MUSICは、月間／BGM／着うた®の各ランキング（上位100位）をプレイリストで配信しています。\r\n総合TOP10は？\r\n10位 Magnetic / ILLIT\r\n9位 晩餐歌 / tuki.\r\n8位 青と夏 / Mrs. GREEN APPLE\r\n7…",
        "url": "https://www.huffingtonpost.jp/entry/story_jp_66b6b68ae4b044cc5e99c9db",
        "urlToImage": "https://img.huffingtonpost.com/asset/66b6b8cc2200001900ba67ee.jpg?ops=1200_630",
        "publishedAt": "2024-08-10T02:01:51Z",
        "content": "LINE MUSIC 20247\r\nR-DJ\r\nLINE MUSIC7LINE MUSICBGM®100\r\n10 Magnetic / ILLIT\r\n9 / tuki.\r\n8 / Mrs. GREEN APPLE\r\n7 Hush-Hush / BE:FIRST X Ateez\r\n6 / Mrs. GREEN APPLE\r\n5 P-P-P-PERO / \r\n4 I wonder / Da-iCE\r… [+92 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Mactrast.com"
        },
        "author": "Chris Hauk",
        "title": "Foxconn Hires 50,000 New Workers As It Prepares for High Demand For iPhone 16",
        "description": "As Foxconn prepares for anticipated high demand for this year's iPhone 16 lineup, it has hired 50,000 new workers in just two weeks.Read More...",
        "url": "https://www.mactrast.com/2024/08/foxconn-hires-50000-new-workers-as-it-prepares-for-high-demand-for-iphone-16/",
        "urlToImage": "https://www.mactrast.com/wp-content/uploads/2021/07/Foxconn-assembly-line.jpeg",
        "publishedAt": "2024-08-10T00:08:14Z",
        "content": "As Foxconn prepares for anticipated high demand for this year’s iPhone 16 lineup, it has hired 50,000 new workers in just two weeks, says a new report by BusinessKorea.\r\nApple has reportedly decided … [+1181 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Appgefahren.de"
        },
        "author": "Mel",
        "title": "Cambridge Audio Evo One: All-In-One Musiksystem mit AirPlay 2 und Raumklang",
        "description": "Auch wenn der Trend im deutschen Zuhause immer mehr in Richtung Smart Speaker und Multiroom-Systeme geht, erfreuen sich klassische HiFi-Anlagen noch immer großer Beliebtheit – zumal es mittlerweile auch Modelle gibt, die viele neue digitale Standards unterstü…",
        "url": "https://www.appgefahren.de/cambridge-audio-evo-one-all-in-one-musiksystem-mit-airplay-2-und-raumklang-363347.html",
        "urlToImage": "https://www.appgefahren.de/wp-content/uploads/2024/08/Cambridge-Audio-Evo-One-1.jpg",
        "publishedAt": "2024-08-10T07:00:39Z",
        "content": "Auch wenn der Trend im deutschen Zuhause immer mehr in Richtung Smart Speaker und Multiroom-Systeme geht, erfreuen sich klassische HiFi-Anlagen noch immer großer Beliebtheit – zumal es mittlerweile a… [+4236 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "PC Games Hardware"
        },
        "author": "Jusuf Hatic",
        "title": "Google: Chromecast-Produktion beendet - \"TV Streamer\" als Nachfolger doppelt so teuer",
        "description": "Google stellt die Produktion des Chromecast ein: Das vor elf Jahren veröffentlichte Dongle wird künftig vom neuen TV Streamer ersetzt. Dieser verspricht einige Features mehr, kostet aber zum Start auch rund das Doppelte.",
        "url": "https://www.pcgameshardware.de/Streaming-Box-Hardware-259639/News/Google-Chromecast-Eingestellt-TV-Streamer-1453419/",
        "urlToImage": "https://www.pcgameshardware.de/screenshots/original/2022/09/Chromecast-with-Google-TV-HD-mit-Fernbedienung-pcgh_artwork1.jpg",
        "publishedAt": "2024-08-10T06:00:00Z",
        "content": "Der Streaming-Dongle Chromecast von Google wird eingestellt: In einem Eintrag auf dem hauseigenen Blog \"The Keyword\" erklärt das Unternehmen, dass das Gerät nicht mehr produziert wird. In den vergang… [+2289 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Worldsoccertalk.com"
        },
        "author": "World Soccer Talk",
        "title": "How to watch Club America vs Atlas on US TV and live streaming",
        "description": "Here are all of the details of where you can watch Club America vs Atlas on US television and via legal streaming: WHO Club America vs Atlas WHAT Leagues Cup 2024 season WHEN 10:00pm ET / 7:00pm PT • Friday, August 9, 2024 WHERE MLS Season Pass STREAM WATCH N…",
        "url": "https://worldsoccertalk.com/watch-on-us-tv/club-america-vs-atlas-on-us-tv-and-live-streaming/",
        "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20240810_WST_521773_club-america-atlas.jpg[ampersand]width=1200[ampersand]height=740",
        "publishedAt": "2024-08-10T00:05:00Z",
        "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Worldsoccertalk.com"
        },
        "author": "World Soccer Talk",
        "title": "How to watch U.S. Women's Soccer vs Brazil on US TV and live streaming",
        "description": "Here are all of the details of where you can watch USA vs Brazil on US television and via legal streaming: WHO USA vs Brazil WHAT Summer Olympics WHEN 11:00am ET / 8:00am PT • Saturday, August 10, 2024 WHERE NBC, Telemundo, Peacock, Fubo, DirecTV Stream, and …",
        "url": "https://worldsoccertalk.com/watch-on-us-tv/usa-vs-brazil-on-us-tv-and-live-streaming/",
        "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20240810_WST_521778_uswnt-brazil-2.jpg[ampersand]width=1200[ampersand]height=740",
        "publishedAt": "2024-08-10T08:00:00Z",
        "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Worldsoccertalk.com"
        },
        "author": "World Soccer Talk",
        "title": "How to watch Spurs vs Bayern Munich on US TV and live streaming",
        "description": "Here are all of the details of where you can watch Spurs vs Bayern Munich on US television and via legal streaming: WHO Spurs vs Bayern Munich WHAT Club Friendly WHEN 12:30pm ET / 9:30am PT • Saturday, August 10, 2024 WHERE FOX Deportes, Paramount+, Fubo, Dir…",
        "url": "https://worldsoccertalk.com/watch-on-us-tv/spurs-vs-bayern-munich-on-us-tv-and-live-streaming/",
        "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20240810_WST_521808_spurs-bayern-munich-1.jpg[ampersand]width=1200[ampersand]height=740",
        "publishedAt": "2024-08-10T07:33:00Z",
        "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Worldsoccertalk.com"
        },
        "author": "World Soccer Talk",
        "title": "How to watch Wrexham vs Wycombe on US TV and live streaming",
        "description": "Here are all of the details of where you can watch Wrexham vs Wycombe on US television and via legal streaming: WHO Wrexham vs Wycombe WHAT EFL League One WHEN 12:30pm ET / 9:30am PT • Saturday, August 10, 2024 WHERE CBS Sports Network, Paramount+, Fubo, Dire…",
        "url": "https://worldsoccertalk.com/watch-on-us-tv/wrexham-vs-wycombe-on-us-tv-and-live-streaming/",
        "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20240810_WST_521801_wrexham-wycombe.jpg[ampersand]width=1200[ampersand]height=740",
        "publishedAt": "2024-08-10T06:00:00Z",
        "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Worldsoccertalk.com"
        },
        "author": "World Soccer Talk",
        "title": "How to watch Leeds United vs Portsmouth on US TV and live streaming",
        "description": "Here are all of the details of where you can watch Leeds United vs Portsmouth on US television and via legal streaming: WHO Leeds United vs Portsmouth WHAT EFL Championship WHEN 7:30am ET / 4:30am PT • Saturday, August 10, 2024 WHERE Paramount+ FREE TRIAL WAT…",
        "url": "https://worldsoccertalk.com/watch-on-us-tv/leeds-united-vs-portsmouth-on-us-tv-and-live-streaming/",
        "urlToImage": "https://worldsoccertalk.com/api/request-image/?proxy=https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.worldsoccertalk.com%2Fjpg%2Ffull%2FWST_20240810_WST_521793_leeds-portsmouth.jpg[ampersand]width=1200[ampersand]height=740",
        "publishedAt": "2024-08-10T03:41:00Z",
        "content": "Includes: Bundesliga &amp; La Liga\r\nSign Up"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Gagadget.com"
        },
        "author": "gagadget.com",
        "title": "Самый лучший Apple iPad для покупки в августе 2024 года",
        "description": "В августе 2024 года Apple предлагает широкий выбор iPad, каждый из которых имеет свои уникальные преимущества. Независимо от того, ищете ли вы мощный планшет для работы, бюджетный вариант для учебы или компактное устройство для путешествий, редакция Android H…",
        "url": "https://gagadget.com/ru/486238-samyij-luchshij-apple-ipad-dlya-pokupki-v-avguste-2024-goda/",
        "urlToImage": "https://gagadget.com/media/cache/d7/92/d7923e3ae19d1de9ee159b0a8936eaf7.jpg",
        "publishedAt": "2024-08-10T00:33:37Z",
        "content": "2024 Apple iPad, . , , , Android Headlines .\r\niPad Air (6- ) - $599\r\n<ul><li>: 11 12,9 Liquid Retina Display</li><li>: M2</li><li>: 128 , 256 , 512 , 1 </li><li>: 12 , 12 </li><li>: Touch ID</li><li>… [+869 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Www.nzz.ch"
        },
        "author": "Matthias Benz (mbe)",
        "title": "Ein historisches Urteil gegen Google: Lässt sich die Macht des Suchmaschinen-Riesen brechen?",
        "description": "Google ist in den USA als Monopolist verurteilt worden. Was das für den Wettbewerb und die Konsumenten bedeutet – die vier wichtigsten Fragen und Antworten.",
        "url": "https://www.nzz.ch/wirtschaft/ein-historisches-urteil-gegen-google-laesst-sich-die-macht-des-suchmaschinen-riesen-brechen-ld.1842946",
        "urlToImage": "https://img.nzz.ch/2024/08/09/ced9fa2b-1098-4d16-a0fe-8487e22992fc.jpeg?width=1200&height=674&fit=bounds&quality=75&auto=webp&crop=5754,3236,x2438,y1117&wmark=nzz",
        "publishedAt": "2024-08-10T03:30:00Z",
        "content": "Google spürt in den USA Gegenwind Hauptsitz in Mountain View, Kalifornien.\r\nGoogle ist bei den Menschen enorm beliebt. In den USA und in Europa laufen über 90 Prozent der Suchanfragen im Internet übe… [+8922 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Shiftdelete.net"
        },
        "author": "Samet Kelebek",
        "title": "iPhone 16 lansmanı öncesi üretim için 50 bin işçi alındı!",
        "description": "Apple, iPhone 16 lansmanı için hazırlanırken, Foxconn üretim taleplerini karşılayabilmek için 50 bin işçi alıyor...\n\niPhone 16 lansmanı öncesi üretim için 50 bin işçi alındı!",
        "url": "https://shiftdelete.net/iphone-16-lansmani-oncesi-uretim-icin-50-bin-isci-alindi",
        "urlToImage": "https://ares.shiftdelete.net/2024/08/iphone-16-lansmani-oncesi-uretim-icin-50-bin-isci-alindi-1.jpg",
        "publishedAt": "2024-08-10T06:30:00Z",
        "content": "Apple’n düzenleyecei ve uzun zamandr çok büyük merak ve heyecanla beklenen iPhone 16 serisinin lansmanna neredeyse bir aydan ksa bir süre kald. Lansmana büyük bir heyecanla hazrlk yapan Apple, bu yl … [+1638 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Shiftdelete.net"
        },
        "author": "Ömer Dursun",
        "title": "League of Legends animesinin ikinci sezonu internete düştü!",
        "description": "Arcane ikinci sezonu internete düştü. Netflix prömiyerinden önce dizinin bazı bölümleri izlenebilir hale geldi.\n\nLeague of Legends animesinin ikinci sezonu internete düştü!",
        "url": "https://shiftdelete.net/arcane-ikinci-sezonu-internete-dustu",
        "urlToImage": "https://ares.shiftdelete.net/2023/09/arcane-2-sezon-ne-zaman-cikacak-1-SDN.jpg",
        "publishedAt": "2024-08-10T08:30:00Z",
        "content": "Sevilen animasyon dizisi Arcane geçtiimiz günlerde beklenmedik bir szntyla kar karya kald. League of Legends hayranlar tarafndan yakndan takip edilen dizinin yeni sezonu batan sona szdrld. Bu da önüm… [+1356 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Tabletowo.pl"
        },
        "author": "Karol Kunat",
        "title": "Google nie lubi już starych MacBooków. Przyszedł czas się pożegnać",
        "description": "Google Chrome jest często używany nie tylko na smartfonach, ale także na komputerach. I to także tych z systemem macOS. Z jedną jego wersją wkrótce się pożegna.Przeczytaj pełny artykuł tutaj: Google nie lubi już starych MacBooków. Przyszedł czas się pożegnać",
        "url": "https://www.tabletowo.pl/google-chrome-koniec-wsparcia-dla-macos-catalina/",
        "urlToImage": "https://www.tabletowo.pl/wp-content/uploads/2019/06/apple-tv.jpg",
        "publishedAt": "2024-08-10T07:00:00Z",
        "content": "Chrome to czoowa przegldarka obecna na dosownie miliardach urzdze elektronicznych na caym wiecie. Korzystaj z niej nawet uytkownicy systemów iOS czy macOS, bo jest po prostu dobra. Niektórzy posiadac… [+1674 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Tabletowo.pl"
        },
        "author": "Mateusz Budzeń",
        "title": "Test Audi A3. Czasami diesel jest lepszy niż elektryk",
        "description": "Tym razem trafiło do mnie odświeżone Audi A3 o oznaczeniu 35 TDI. Przekonałem się, że czasami diesel jest lepszy od elektryka, nawet jeśli ma tylko 150 KM.Przeczytaj pełny artykuł tutaj: Test Audi A3. Czasami diesel jest lepszy niż elektryk",
        "url": "https://www.tabletowo.pl/test-audi-a3-diesel-35-tdi-spalanie-czy-warto/",
        "urlToImage": "https://www.tabletowo.pl/wp-content/uploads/2024/08/test-audi-a3-2024-diesel-fot-1.jpg",
        "publishedAt": "2024-08-10T08:00:00Z",
        "content": "Audi A3 ze skromnym dieslem o mocy 150 KM, gdy jest dobrze wyposaone, kosztuje podobnie do sporo mocniejszej Tesli Model 3. Niekoniecznie jednak elektryk jest po prostu lepszym wyborem dla kadego, o … [+14940 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Cnbeta.com.tw"
        },
        "author": null,
        "title": "Apple Maps现在可在Firefox和Mac版Edge浏览器中使用",
        "description": "Apple Maps最初只能在 Windows 版 Safari、Chrome 浏览器和 Edge 浏览器上运行，现在已在其他浏览器上运行，包括 Mac 版 Firefox 和 Edge。经过十多年的等待，Apple Maps于今年 7 月推出了新版地图应用的测试版，但只能在有限的浏览器中使用，在周五的更新中，更多的浏览器可以访问Apple Maps了。\r\n\n7 月份推出的新版本支持一些流行的浏览器。除了理当支持的Safari 浏览器外，它还支持 Chrome 浏览器和 Microsoft Edge 浏览器，但仅…",
        "url": "https://www.cnbeta.com.tw/articles/tech/1441642.htm",
        "urlToImage": "https://static.cnbetacdn.com/article/2024/0810/0a971b4f48508a0.jpg",
        "publishedAt": "2024-08-10T00:35:27Z",
        "content": "0cnBeta.COM  2024-08-10 08:06:40\r\nApple Maps Windows SafariChrome Edge Mac Firefox EdgeApple Maps 7 Apple Maps\r\n7 Safari Chrome Microsoft Edge PCFirefoxEdge Mac\r\nGoogle\r\n Apple Maps \r\nGoogle\"\""
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Cnbeta.com.tw"
        },
        "author": null,
        "title": "智能手表出货量在印度急剧下降 二季度同比下滑高达30%",
        "description": "印度是仅次于中国的第二大可穿戴设备市场。有时，它也也会上升为最大的智能手表市场。然而，在第二季度，印度的可穿戴设备出货量同比下降了 10%，降至 2950 万块。分析公司 IDC 本周发布的报告显示，今年上半年的出货量为 5510 万块，同比下降了 4.7%。市场分析师认为，未来几个季度这一下降幅度可能会继续扩大，主要品类就是智能手表。\r\n\n调查显示，第二季度印度智能手表出货量同比下降 27.4%，从近 1280 万块降至 930 万块。Counterpoint 证实，根据其分析，印度智能手表市场的年同比降幅高达…",
        "url": "https://www.cnbeta.com.tw/articles/tech/1441648.htm",
        "urlToImage": "https://static.cnbetacdn.com/article/2024/0810/b502b80b23d1904.jpg",
        "publishedAt": "2024-08-10T00:36:49Z",
        "content": "27.4% 1280 930 Counterpoint 30%\r\nIDC 39% 31.5%\r\n\"\"IDC-Vikas SharmaTechCrunch\"\"\r\nNoiseFire-Boltt boAt 25.6 20.6 \r\nCounterpointAnshika Jain\"\"\r\nIDC 21.9% 1.5% 2.5%\r\n29% 26%\r\n 3.5 4 Apple Watch 0.5% 7.5 … [+215 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Cnbeta.com.tw"
        },
        "author": null,
        "title": "多家律师事务所起诉苹果垄断智能手机市场",
        "description": "据路透社报道，两家相互竞争的律师事务所集团正在敦促法官任命他们为可能带来丰厚利润的消费者集体诉讼的负责人，指控苹果公司垄断智能手机市场。周四，原告律师的对立联盟向美国新泽西州地区法官朱利安尼尔斯 (Julien Neals) 提出了自己的诉求，尼尔斯负责审理私人反垄断案件，这些案件是在美国司法部和多个州的联盟于 3 月份起诉苹果公司后提起的。\r\n\n寻求代表从苹果购买 iPhone 的消费者的公司包括 Hagens Berman Sobol Shapiro、Girard Sharp、Seeger Weiss 和 C…",
        "url": "https://www.cnbeta.com.tw/articles/tech/1441659.htm",
        "urlToImage": "https://static.cnbetacdn.com/article/2024/0808/7a07d7958ac447e.jpg",
        "publishedAt": "2024-08-10T01:36:09Z",
        "content": "iPhone Hagens Berman Sobol ShapiroGirard SharpSeeger Weiss CarellaByrneCecchiBrody &amp; Agnello Hausfeld Susman Godfrey\r\n Kirkland &amp; Ellis \r\nHausfeld Susman Godfrey \r\n iPhone \r\n Korein TilleryMo… [+58 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Cnbeta.com.tw"
        },
        "author": null,
        "title": "AI换脸项目Deep-Live-Cam一夜爆火 只需一张照片变身马斯克上直播",
        "description": "AI 换脸已经不是什么大新闻，视频不再可以完全被信任已经是科技常识。不过，人类的最后堡垒，直播，最近也崩塌了。8 月 9 日晚到 8 月 10\n日早晨，一个项目突然在 GitHub 上火起来：Deep-Live-Cam，使用一张他人的照片，就能实现在直播流中的实时换脸，而且效果优秀。\r\n\n博主 MatthewBerman 使用了一张伊隆·马斯克的图片生成了直播流，测试了暗光条件和点光源的条件——常规情况下较难处理的场景，但是 Deep-Live-Cam 的表现都非常丝滑，暗光条件下的甚至更像马斯克了。甚至博主戴着…",
        "url": "https://www.cnbeta.com.tw/articles/tech/1441668.htm",
        "urlToImage": "https://cbht.cnbeta.com.tw/assets/f810574c/themes/default/images/spacer.gif",
        "publishedAt": "2024-08-10T06:05:14Z",
        "content": "MatthewBerman · Deep-Live-Cam \r\n01\r\nDeep-Live-Cam\r\nDeep-Live-Cam GitHub CPU NVIDIA CUDAApple SiliconCoreMLDirectMLWindowsOpenVINOIntel GPU \r\n hacksider GitHub 6 \r\nYouTube Fahd Mirza \r\n DeepFake AI \r\n… [+221 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Ithome.com"
        },
        "author": null,
        "title": "新专利暗示苹果探索手记应用未来，借助 AI 让用户记录美好时刻",
        "description": "IT之家 8 月 10 日消息，根据美国商标和专利局（USPTO）最新公示的清单，苹果公司获得了新的专利，暗示手记（Journal）应用即将引入 Apple Intelligence 升级。科技媒体 The Mac Observer 解读该专利，表明苹果希望通过部署 Apple Intelligence，实现更个性化、更贴心的手记体验。例如用户完成日常锻炼，或者在同一地点拍摄多张照片后，系统会更主动地要求用户在日志应用中记录一段记忆。从另一个例子中，苹果还计划将手记应用与日历事件和提醒事项整合在一起。IT之家附上…",
        "url": "https://www.ithome.com/0/787/616.htm",
        "urlToImage": null,
        "publishedAt": "2024-08-10T07:42:59Z",
        "content": "IT 8 10 USPTOJournal Apple Intelligence \r\nThe Mac Observer Apple Intelligence\r\nIT\r\nIT"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Arigato-ipod.com"
        },
        "author": "アイアリ",
        "title": "Apple Booksで3連休限定の500円以内セール開催。対象の小説、ビジネス書、ノンフィクションが、8月10日〜12日限定で割引価格に",
        "description": "Apple Books Storeで「3連休限定500円以内」セールが開催されています。 対象のブックが、500円以下の特別価格に値下げ販売されています。 対象作品は「小説／文学」と、「ビジネス／ノンフィクション」のカテ […]\nThe post Apple Booksで3連休限定の500円以内セール開催。対象の小説、ビジネス書、ノンフィクションが、8月10日〜12日限定で割引価格に first appeared on アイアリ.",
        "url": "https://arigato-ipod.com/2024/08/apple-books-store-500-yen-sale-august-2024.html",
        "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2024/08/240810applebooks500yen.webp",
        "publishedAt": "2024-08-10T04:34:12Z",
        "content": "Apple Books Storeで「3連休限定500円以内」セールが開催されています。\n対象のブックが、500円以下の特別価格に値下げ販売されています。\n対象作品は「小説／文学」と、「ビジネス／ノンフィクション」のカテゴリに分けられています。\n\n8月10日（土）〜12日（月・祝）の3日間限定です。\n特集ページ：Apple Books\nThe post Apple Booksで3連休限定の500… [+71 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Prtimes.jp"
        },
        "author": null,
        "title": "【SALE】ジンコレにて真夏の大感謝祭開催",
        "description": "[JIN株式会社]\n[画像1: https://prcdn.freetls.fastly.net/release_image/142893/5/142893-5-6ad8a29fa2558aefc9b3aaf187fb4aa5-2000x1000.jpg?width=536&quality=85%2C75&format=jpeg&auto=webp&fit=bounds&am...",
        "url": "https://prtimes.jp/main/html/rd/p/000000005.000142893.html",
        "urlToImage": "https://prcdn.freetls.fastly.net/release_image/142893/5/142893-5-6ad8a29fa2558aefc9b3aaf187fb4aa5-2000x1000.jpg?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
        "publishedAt": "2024-08-10T01:00:00Z",
        "content": "Apple WatchJIN2024810818iPhone\r\n202481018\r\nVICXXO10OFFiPhoneGRAMASiPhone80OFF\r\nVICXXOiPhoneGRAMAS COLORS\r\nVICXXO iPhoneLevic\r\nTPE65%UV iPhoneiPhoneiPhone"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Prtimes.jp"
        },
        "author": null,
        "title": "ビート販売プラットフォーム『BEAT SPACE』が新サービスを開始",
        "description": "[株式会社ビースペ]\n[画像1: https://prcdn.freetls.fastly.net/release_image/142999/2/142999-2-22cff665f817306d121d85c3f7267306-2804x357.jpg?width=536&quality=85%2C75&format=jpeg&auto=webp&fit=bounds&amp...",
        "url": "https://prtimes.jp/main/html/rd/p/000000002.000142999.html",
        "urlToImage": "https://prcdn.freetls.fastly.net/release_image/142999/2/142999-2-22cff665f817306d121d85c3f7267306-2804x357.jpg?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
        "publishedAt": "2024-08-10T05:40:02Z",
        "content": "2024 8 9 BSM  \r\n 1  \r\nBSM \r\n 1.  \r\n BSM  \r\n2. \r\n 3. \r\nBSM Spotify Apple MusicYouTube Music BSM \r\n  \r\n 1BEAT SPACE \r\n 2 \r\n 39,000 14,000 BSM \r\n 4 \r\n BSM  \r\nBSM  \r\nBSM BEAT SPACE BSM Records \r\nBSM 990 … [+283 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Funkyjunkinteriors.net"
        },
        "author": "Funky Junk Donna",
        "title": "New Upcycle Ideas 739",
        "description": "Visit 20+ New Upcycle Ideas 739 – Branch spine journal, pool noodle ottoman, spoon pendant, tabletop greenhouse, plus more unique repurposed projects to make out of what you have! New Upcycle Ideas 739   Every Friday, 7 PM through Wednesday 11 PM Pacific Gree…",
        "url": "https://www.funkyjunkinteriors.net/new-upcycle-ideas-739/",
        "urlToImage": "https://www.funkyjunkinteriors.net/wp-content/uploads/2024/08/table-top-greenhouse-planter.jpg",
        "publishedAt": "2024-08-10T02:00:42Z",
        "content": "Visit 20+ New Upcycle Ideas 739 – Branch spine journal, pool noodle ottoman, spoon pendant, tabletop greenhouse, plus more unique repurposed projects to make out of what you have!\r\nEvery Friday, 7 PM… [+3517 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Newmobilelife.com"
        },
        "author": "卡路士",
        "title": "【評測】Apple Vision Pro VS Quest 3 誰更優勝？(下)",
        "description": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1721773377322\"} -->\n早前與各位讀者講解的 Apple Vision Pro VS Meta Quest 3，因為文章太長，筆者只好分開兩篇文章介紹，現在講解另外 5 個對比測試。\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":502172,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",…",
        "url": "https://www.newmobilelife.com/2024/08/10/apple-vision-pro-vs-quest-3-part2/",
        "urlToImage": "https://static.newmobilelife.com/wp-content/uploads/2024/07/1686023285174-1.jpeg",
        "publishedAt": "2024-08-10T07:45:29Z",
        "content": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1721773377322\"} -->\n早前與各位讀者講解的 Apple Vision Pro VS Meta Quest 3，因為文章太長，筆者只好分開兩篇文章介紹，現在講解另外 5 個對比測試。\n<!-- /wp:paragraph -->\n\n<!-- wp:ima… [+6796 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Sky.com"
        },
        "author": "Mark Kleinman",
        "title": "Kylie and Cowell-backed music service ROXi in race for new funding",
        "description": "A music-streaming service whose shareholders include Simon Cowell, Kylie Minogue and Robbie Williams is racing to raise millions of pounds within weeks.",
        "url": "https://news.sky.com/story/kylie-and-cowell-backed-music-service-roxi-in-race-for-new-funding-13194429",
        "urlToImage": "https://e3.365dm.com/24/03/1600x900/skynews-kylie-minogue-brits_6476825.jpg?20240302231037",
        "publishedAt": "2024-08-10T06:22:00Z",
        "content": "A music-streaming service whose shareholders include Simon Cowell, Kylie Minogue and Robbie Williams is racing to raise millions of pounds within weeks.\r\nSky News has learnt that ROXi has appointed B… [+3428 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "Gry-online.pl"
        },
        "author": "Sonia Selerska",
        "title": "Zapamiętajcie moje słowa - dzięki tej funkcji powerbank VEEKTOMX wkrótce będzie wielkim hitem. Dysponujący pojemnością 10 000 mAh malec przypadnie do gustu użytkownikom smartfonów i smartwatchy",
        "description": "Twórcy powerbanku VEEKTOMX zauważyli, że nierzadko poza telefonem w kieszeni ładowania potrzebuje także zegarek na naszym nadgarstku. Ten produkt stanowi prawdziwy dowód na to, że da się znaleźć w dobrej cenie przenośną ładowarkę dostosowaną do wszystkich nas…",
        "url": "https://www.gry-online.pl/newsroom/zapamietajcie-moje-slowa-dzieki-tej-funkcji-powerbank-veektomx-wk/z32a349",
        "urlToImage": "https://www.gry-online.pl/i/h/22/460973918.jpg",
        "publishedAt": "2024-08-10T06:40:00Z",
        "content": "Twórcy powerbanku VEEKTOMX zauwayli, e nierzadko poza telefonem w kieszeni adowania potrzebuje take zegarek na naszym nadgarstku. Ten produkt stanowi prawdziwy dowód na to, e da si znale w dobrej cen… [+2356 chars]"
    },
    
    {
        
        "source": {
            "id": null,
            "name": "The Punch"
        },
        "author": "Abayomi Ajayi",
        "title": "Addressing the link between uterine fibroids and mental health",
        "description": "Despite being a non-cancerous tumour, uterine fibroids can have a significant impact on a woman’s life that goes beyond her physical symptoms. These growths are prevalent, and frequently discovered in women’s uteri during their reproductive years. In actualit…",
        "url": "https://punchng.com/addressing-the-link-between-uterine-fibroids-and-mental-health/",
        "urlToImage": "https://cdn.punchng.com/wp-content/uploads/2023/05/06003853/Abayomi-Ajayi.jpg",
        "publishedAt": "2024-08-10T00:59:02Z",
        "content": "Despite being a non-cancerous tumour, uterine fibroids can have a significant impact on a womans life that goes beyond her physical symptoms.\r\nThese growths are prevalent, and frequently discovered i… [+5737 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Letemsvetemapplem.eu"
        },
        "author": "Adam Kos",
        "title": "Je nový iPad vhodný i pro vývojáře?",
        "description": "Komerční sdělení: Nové iPady již od samého začátku přitahují pozornost. Poskytují kombinaci nevídaného výkonu a praktické přenositelnosti. Po prozkoumání technických parametrů si možná nejen skalní fanoušci Apple začínají klást otázky, jak tyto zařízení efekt…",
        "url": "https://www.letemsvetemapplem.eu/2024/08/10/je-novy-ipad-vhodny-i-pro-vyvojare/",
        "urlToImage": "https://www.letemsvetemapplem.eu/wp-content/uploads/2024/06/P05-WWDC-24-iPad-OS-24.jpg",
        "publishedAt": "2024-08-10T08:00:11Z",
        "content": "Komerní sdlení: Nové iPady ji od samého zaátku pitahují pozornost. Poskytují kombinaci nevídaného výkonu a praktické penositelnosti. Po prozkoumání technických parametr si moná nejen skalní fanouci A… [+2189 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Letemsvetemapplem.eu"
        },
        "author": "Amaya Tomanová",
        "title": "10 nejhorších smartphonů v historii",
        "description": "Svět chytrých telefonů se neustále vyvíjí a přináší nám stále výkonnější a inovativnější zařízení. Ale stejně jako v každém odvětví, i zde se najdou modely, které se zapsaly do historie spíše negativně. Pojďme se společně podívat na 10 smartphonů, které se z …",
        "url": "https://www.letemsvetemapplem.eu/2024/08/10/10-nejhorsich-smartphonu-v-historii/",
        "urlToImage": "http://www.letemsvetemapplem.eu/wp-content/uploads/2015/08/iPhone-6-iPhone-6-Plus.jpg",
        "publishedAt": "2024-08-10T07:00:00Z",
        "content": "Svt chytrých telefon se neustále vyvíjí a pináí nám stále výkonnjí a inovativnjí zaízení. Ale stejn jako v kadém odvtví, i zde se najdou modely, které se zapsaly do historie spíe negativn. Pojme se s… [+9908 chars]"
    }
]
  constructor(){
    super();
    console.log("Hello I am a constructor from new conponent");
    this.state = {
        articles: this.articles,
        loading: false
    }
  }
  render() {
    return (
      <div className='container my-3 mb-6'>
            <h2>MyNews - HeadLines</h2>
            <div className="row">
                <div className="col-md-3">
                    <NewsItem title = "My Title" description = "My description" img = "https://cdn.punchng.com/wp-content/uploads/2023/05/06003853/Abayomi-Ajayi.jpg"/>
                    </div>
                <div className="col-md-3">
                    <NewsItem title = "My Title" description = "My description"/>
                </div>
                <div className="col-md-3">
                    <NewsItem title = "My Title" description = "My description"/>
                </div>            
            </div>
      </div>
    )
  }
}

export default News
