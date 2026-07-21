/**
 * 职业球星数据库模块
 * 位置专精方案 - 英超Big6各位置标杆
 * 数据参考来源：Transfermarkt、维基百科、百度百科
 */

const PlayerDatabase = {
    players: [
        // 门将
        {
            id: 'ederson',
            name: '埃德森',
            nameEn: 'Ederson Santana de Moraes',
            club: 'Manchester City · 曼城',
            country: 'Brazil · 巴西',
            position: 'GK',
            style: 'attacking',
            height: 188,
            weight: 86,
            dateOfBirth: '1993-08-17',
            birthPlace: 'Osasco, Brazil · 巴西奥萨斯库',
            marketValue: '€45M',
            image: '🇧🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/ederson/profil/spieler/238263',
                baike: 'https://baike.baidu.com/item/埃德森·桑塔纳·德·莫赖斯',
                wikipedia: 'https://en.wikipedia.org/wiki/Ederson_(footballer)'
            },
            ratings: {
                'dribbling': 70, 'passing': 85, 'shooting': 20,
                'tackling': 40, 'heading': 50, 'ball-control': 78,
                'sprint-speed': 55, 'acceleration': 58, 'stamina': 65,
                'strength': 70, 'jumping': 75, 'agility': 72,
                'positioning': 85, 'vision': 80, 'decision-making': 88,
                'aggression': 60, 'leadership': 82,
                'overlapping': 25, 'recovery-runs': 40, 'crossing-accuracy': 30, 'one-on-one-defense': 85
            },
            description: '出球型门将，长传精准如中场，重新定义现代门将',
            keyStrengths: ['出球能力', '位置感', '长传', '大心脏', '脚下技术'],
            developmentTips: '学习他的脚下技术和大局观，他是现代进攻型门将的标杆',
            honours: ['英超冠军', '欧冠冠军', '世俱杯冠军', '英超金手套'],
            careerStats: {
                appearances: '400+',
                cleanSheets: '180+',
                goals: '1',
                assists: '10+'
            }
        },
        {
            id: 'alisson',
            name: '阿利松',
            nameEn: 'Alisson Becker',
            club: 'Liverpool · 利物浦',
            country: 'Brazil · 巴西',
            position: 'GK',
            style: 'complete',
            height: 191,
            weight: 91,
            dateOfBirth: '1992-10-02',
            birthPlace: 'Novo Hamburgo, Brazil · 巴西新汉堡',
            marketValue: '€50M',
            image: '🇧🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/alisson/profil/spieler/105470',
                baike: 'https://baike.baidu.com/item/阿利松·贝克尔',
                wikipedia: 'https://en.wikipedia.org/wiki/Alisson_Becker'
            },
            ratings: {
                'dribbling': 60, 'passing': 70, 'shooting': 25,
                'tackling': 45, 'heading': 55, 'ball-control': 68,
                'sprint-speed': 50, 'acceleration': 55, 'stamina': 65,
                'strength': 78, 'jumping': 85, 'agility': 80,
                'positioning': 92, 'vision': 70, 'decision-making': 90,
                'aggression': 65, 'leadership': 90,
                'overlapping': 20, 'recovery-runs': 35, 'crossing-accuracy': 25, 'one-on-one-defense': 95
            },
            description: '世一门，扑救稳如狗，还有一脚救命进球',
            keyStrengths: ['扑救反应', '心理素质', '领导力', '门线技术', '扑点球'],
            developmentTips: '学习他的冷静和大场面表现，他是门将位置的完美模板',
            honours: ['英超冠军', '欧冠冠军', '美洲杯冠军', '英超金手套'],
            careerStats: {
                appearances: '350+',
                cleanSheets: '160+',
                goals: '1',
                assists: '5'
            }
        },
        {
            id: 'martinez',
            name: '大马丁',
            nameEn: 'Emiliano Martínez',
            club: 'Aston Villa · 阿斯顿维拉',
            country: 'Argentina · 阿根廷',
            position: 'GK',
            style: 'defensive',
            height: 195,
            weight: 89,
            dateOfBirth: '1992-09-02',
            birthPlace: 'Mar del Plata, Argentina · 阿根廷马德普拉塔',
            marketValue: '€35M',
            image: '🇦🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/emiliano-martinez/profil/spieler/251642',
                baike: 'https://baike.baidu.com/item/埃米利亚诺·马丁内斯',
                wikipedia: 'https://en.wikipedia.org/wiki/Emiliano_Mart%C3%ADnez'
            },
            ratings: {
                'dribbling': 50, 'passing': 60, 'shooting': 30,
                'tackling': 50, 'heading': 60, 'ball-control': 58,
                'sprint-speed': 45, 'acceleration': 50, 'stamina': 60,
                'strength': 80, 'jumping': 82, 'agility': 78,
                'positioning': 90, 'vision': 60, 'decision-making': 88,
                'aggression': 85, 'leadership': 92,
                'overlapping': 15, 'recovery-runs': 30, 'crossing-accuracy': 20, 'one-on-one-defense': 90
            },
            description: '世界杯冠军门神，心理战大师，大器晚成的传奇',
            keyStrengths: ['扑点球', '大心脏', '领导气质', '大赛表现', '心理素质'],
            developmentTips: '学习他的心理素质和领导力，他证明了坚持的价值',
            honours: ['世界杯冠军', '美洲杯冠军', '世界杯金手套'],
            careerStats: {
                appearances: '280+',
                cleanSheets: '100+',
                goals: '0',
                assists: '2'
            }
        },
        {
            id: 'courtois',
            name: '库尔图瓦',
            nameEn: 'Thibaut Courtois',
            club: 'Real Madrid · 皇家马德里',
            country: 'Belgium · 比利时',
            position: 'GK',
            style: 'defensive',
            height: 200,
            weight: 96,
            dateOfBirth: '1992-05-11',
            birthPlace: 'Bree, Belgium · 比利时布雷',
            marketValue: '€30M',
            image: '🇧🇪',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/thibaut-courtois/profil/spieler/108390',
                baike: 'https://baike.baidu.com/item/蒂博·库尔图瓦',
                wikipedia: 'https://en.wikipedia.org/wiki/Thibaut_Courtois'
            },
            ratings: {
                'dribbling': 55, 'passing': 65, 'shooting': 20,
                'tackling': 45, 'heading': 70, 'ball-control': 60,
                'sprint-speed': 50, 'acceleration': 52, 'stamina': 65,
                'strength': 85, 'jumping': 88, 'agility': 75,
                'positioning': 90, 'vision': 65, 'decision-making': 88,
                'aggression': 70, 'leadership': 85,
                'overlapping': 15, 'recovery-runs': 35, 'crossing-accuracy': 20, 'one-on-one-defense': 92
            },
            description: '身高臂长的世界级门神，皇马和比利时的双料主力',
            keyStrengths: ['扑救范围', '高空球', '位置感', '大赛经验', '门线技术'],
            developmentTips: '学习他如何利用身高优势覆盖球门，是高大门将的典范',
            honours: ['欧冠冠军×2', '西甲冠军×2', '英超冠军×2', '世界杯季军'],
            careerStats: {
                appearances: '550+',
                cleanSheets: '220+',
                goals: '0',
                assists: '5'
            }
        },

        // 中后卫
        {
            id: 'ruben-dias',
            name: '鲁本·迪亚斯',
            nameEn: 'Rúben Dias',
            club: 'Manchester City · 曼城',
            country: 'Portugal · 葡萄牙',
            position: 'CB',
            style: 'defensive',
            height: 187,
            weight: 79,
            dateOfBirth: '1997-05-14',
            birthPlace: 'Amadora, Portugal · 葡萄牙阿马多拉',
            marketValue: '€75M',
            image: '🇵🇹',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/ruben-dias/profil/spieler/258923',
                baike: 'https://baike.baidu.com/item/鲁本·迪亚斯',
                wikipedia: 'https://en.wikipedia.org/wiki/R%C3%BAben_Dias'
            },
            ratings: {
                'dribbling': 68, 'passing': 78, 'shooting': 45,
                'tackling': 90, 'heading': 88, 'ball-control': 74,
                'sprint-speed': 75, 'acceleration': 76, 'stamina': 84,
                'strength': 90, 'jumping': 89, 'agility': 74,
                'positioning': 96, 'vision': 68, 'decision-making': 94,
                'aggression': 82, 'leadership': 95,
                'overlapping': 35, 'recovery-runs': 70, 'crossing-accuracy': 40, 'one-on-one-defense': 92
            },
            description: '后防铁壁，曼城防线领袖，英超最佳后卫',
            keyStrengths: ['防守站位', '身体对抗', '头球', '领导力', '组织防线'],
            developmentTips: '学习他的防守意识和组织能力，他是现代中卫的完美模板',
            honours: ['英超冠军', '欧冠冠军', '世俱杯冠军', '英超最佳球员'],
            careerStats: {
                appearances: '350+',
                goals: '20+',
                assists: '15+'
            }
        },
        {
            id: 'vandijk',
            name: '范戴克',
            nameEn: 'Virgil van Dijk',
            club: 'Liverpool · 利物浦',
            country: 'Netherlands · 荷兰',
            position: 'CB',
            style: 'complete',
            height: 193,
            weight: 92,
            dateOfBirth: '1991-07-08',
            birthPlace: 'Breda, Netherlands · 荷兰布雷达',
            marketValue: '€60M',
            image: '🇳🇱',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/virgil-van-dijk/profil/spieler/203145',
                baike: 'https://baike.baidu.com/item/维吉尔·范戴克',
                wikipedia: 'https://en.wikipedia.org/wiki/Virgil_van_Dijk'
            },
            ratings: {
                'dribbling': 70, 'passing': 78, 'shooting': 60,
                'tackling': 92, 'heading': 94, 'ball-control': 74,
                'sprint-speed': 82, 'acceleration': 78, 'stamina': 85,
                'strength': 96, 'jumping': 97, 'agility': 75,
                'positioning': 96, 'vision': 70, 'decision-making': 94,
                'aggression': 80, 'leadership': 95,
                'overlapping': 40, 'recovery-runs': 75, 'crossing-accuracy': 45, 'one-on-one-defense': 96
            },
            description: '世一卫，空中霸主，让利物浦防线脱胎换骨',
            keyStrengths: ['防守覆盖', '头球无敌', '速度回追', '冷静', '领导力'],
            developmentTips: '学习他的防守选位和身体利用，他定义了现代中卫',
            honours: ['英超冠军', '欧冠冠军', '世俱杯冠军', 'PFA英超最佳球员'],
            careerStats: {
                appearances: '450+',
                goals: '35+',
                assists: '20+'
            }
        },
        {
            id: 'saliba',
            name: '萨利巴',
            nameEn: 'William Saliba',
            club: 'Arsenal · 阿森纳',
            country: 'France · 法国',
            position: 'CB',
            style: 'complete',
            height: 192,
            weight: 85,
            dateOfBirth: '2001-03-24',
            birthPlace: 'Bondy, France · 法国邦迪',
            marketValue: '€85M',
            image: '🇫🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/william-saliba/profil/spieler/481704',
                baike: 'https://baike.baidu.com/item/威廉·萨利巴',
                wikipedia: 'https://en.wikipedia.org/wiki/William_Saliba'
            },
            ratings: {
                'dribbling': 80, 'passing': 82, 'shooting': 50,
                'tackling': 88, 'heading': 80, 'ball-control': 82,
                'sprint-speed': 85, 'acceleration': 82, 'stamina': 86,
                'strength': 84, 'jumping': 82, 'agility': 80,
                'positioning': 88, 'vision': 78, 'decision-making': 88,
                'aggression': 75, 'leadership': 85,
                'overlapping': 50, 'recovery-runs': 80, 'crossing-accuracy': 55, 'one-on-one-defense': 90
            },
            description: '新一代优雅中卫，出球防守俱佳，法国未来后防核心',
            keyStrengths: ['出球能力', '优雅防守', '速度', '技术', '年轻潜力'],
            developmentTips: '学习他的控球和从后向前发起进攻，他是未来世一卫的有力竞争者',
            honours: ['英超冠军', '社区盾冠军', '法甲冠军'],
            careerStats: {
                appearances: '150+',
                goals: '8+',
                assists: '6+'
            }
        },
        {
            id: 'de-ligt',
            name: '德里赫特',
            nameEn: 'Matthijs de Ligt',
            club: 'Bayern Munich · 拜仁慕尼黑',
            country: 'Netherlands · 荷兰',
            position: 'CB',
            style: 'complete',
            height: 189,
            weight: 89,
            dateOfBirth: '1999-08-12',
            birthPlace: 'Leiderdorp, Netherlands · 荷兰莱德多普',
            marketValue: '€70M',
            image: '🇳🇱',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/matthijs-de-ligt/profil/spieler/371998',
                baike: 'https://baike.baidu.com/item/马泰斯·德里赫特',
                wikipedia: 'https://en.wikipedia.org/wiki/Matthijs_de_Ligt'
            },
            ratings: {
                'dribbling': 75, 'passing': 78, 'shooting': 60,
                'tackling': 88, 'heading': 90, 'ball-control': 78,
                'sprint-speed': 80, 'acceleration': 78, 'stamina': 85,
                'strength': 90, 'jumping': 92, 'agility': 78,
                'positioning': 86, 'vision': 75, 'decision-making': 88,
                'aggression': 82, 'leadership': 90,
                'overlapping': 40, 'recovery-runs': 75, 'crossing-accuracy': 45, 'one-on-one-defense': 88
            },
            description: '少年老成的后防领袖，19岁就当上阿贾克斯队长的天才',
            keyStrengths: ['防守技术', '头球得分', '领导力', '出球能力', '大赛气质'],
            developmentTips: '学习他年少成名却依然脚踏实地的职业态度',
            honours: ['德甲冠军×2', '意甲冠军', '荷兰杯冠军', '欧冠亚军'],
            careerStats: {
                appearances: '300+',
                goals: '25+',
                assists: '10+'
            }
        },

        // 左后卫
        {
            id: 'robertson',
            name: '罗伯逊',
            nameEn: 'Andrew Robertson',
            club: 'Liverpool · 利物浦',
            country: 'Scotland · 苏格兰',
            position: 'LB',
            style: 'attacking',
            height: 178,
            weight: 64,
            dateOfBirth: '1994-03-11',
            birthPlace: 'Glasgow, Scotland · 苏格兰格拉斯哥',
            marketValue: '€35M',
            image: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/andrew-robertson/profil/spieler/229168',
                baike: 'https://baike.baidu.com/item/安德鲁·罗伯逊',
                wikipedia: 'https://en.wikipedia.org/wiki/Andrew_Robertson_(footballer)'
            },
            ratings: {
                'dribbling': 80, 'passing': 85, 'shooting': 60,
                'tackling': 80, 'heading': 65, 'ball-control': 82,
                'sprint-speed': 85, 'acceleration': 86, 'stamina': 95,
                'strength': 75, 'jumping': 70, 'agility': 82,
                'positioning': 80, 'vision': 82, 'decision-making': 84,
                'aggression': 70, 'leadership': 80,
                'overlapping': 90, 'recovery-runs': 85, 'crossing-accuracy': 88, 'one-on-one-defense': 78
            },
            description: '体能怪物，插上助攻狂魔，从草根到传奇的励志故事',
            keyStrengths: ['助攻能力', '传中', '体能', '斗志', '领导力'],
            developmentTips: '学习他的跑动和传中时机，他是励志足球的代表',
            honours: ['英超冠军', '欧冠冠军', '世俱杯冠军', '苏格兰国家队队长'],
            careerStats: {
                appearances: '450+',
                goals: '20+',
                assists: '80+'
            }
        },
        {
            id: 'alphonso',
            name: '阿方索·戴维斯',
            nameEn: 'Alphonso Davies',
            club: 'Bayern Munich · 拜仁慕尼黑',
            country: 'Canada · 加拿大',
            position: 'LB',
            style: 'complete',
            height: 183,
            weight: 77,
            dateOfBirth: '2000-11-02',
            birthPlace: 'Budu, Liberia · 利比里亚布杜',
            marketValue: '€70M',
            image: '🇨🇦',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/alphonso-davies/profil/spieler/424823',
                baike: 'https://baike.baidu.com/item/阿方索·戴维斯',
                wikipedia: 'https://en.wikipedia.org/wiki/Alphonso_Davies'
            },
            ratings: {
                'dribbling': 88, 'passing': 78, 'shooting': 70,
                'tackling': 78, 'heading': 65, 'ball-control': 85,
                'sprint-speed': 99, 'acceleration': 98, 'stamina': 96,
                'strength': 82, 'jumping': 80, 'agility': 92,
                'positioning': 75, 'vision': 75, 'decision-making': 78,
                'aggression': 75, 'leadership': 65,
                'overlapping': 95, 'recovery-runs': 98, 'crossing-accuracy': 72, 'one-on-one-defense': 80
            },
            description: '速度的代名词，从边锋改打边卫的超新星，加拿大足球之光',
            keyStrengths: ['世界第一速度', '突破', '体能', '回追', '盘带'],
            developmentTips: '学习他的爆发力和过人，他是速度型边路球员的天花板',
            honours: ['德甲冠军×5', '欧冠冠军', '世俱杯冠军', '加拿大年度最佳球员'],
            careerStats: {
                appearances: '250+',
                goals: '20+',
                assists: '40+'
            }
        },
        {
            id: 'shaw',
            name: '卢克·肖',
            nameEn: 'Luke Shaw',
            club: 'Manchester United · 曼联',
            country: 'England · 英格兰',
            position: 'LB',
            style: 'attacking',
            height: 181,
            weight: 76,
            dateOfBirth: '1995-07-12',
            birthPlace: 'Kingston upon Thames, England · 英格兰泰晤士河畔金斯顿',
            marketValue: '€35M',
            image: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/luke-shaw/profil/spieler/280127',
                baike: 'https://baike.baidu.com/item/卢克·肖',
                wikipedia: 'https://en.wikipedia.org/wiki/Luke_Shaw'
            },
            ratings: {
                'dribbling': 80, 'passing': 82, 'shooting': 65,
                'tackling': 78, 'heading': 70, 'ball-control': 80,
                'sprint-speed': 82, 'acceleration': 80, 'stamina': 88,
                'strength': 80, 'jumping': 75, 'agility': 78,
                'positioning': 78, 'vision': 80, 'decision-making': 80,
                'aggression': 72, 'leadership': 75,
                'overlapping': 85, 'recovery-runs': 80, 'crossing-accuracy': 84, 'one-on-one-defense': 78
            },
            description: '年少成名的天才左后卫，大伤后凤凰涅槃重获新生',
            keyStrengths: ['传中精准度', '进攻插上', '体能', '心理素质', '大赛表现'],
            developmentTips: '学习他如何从重伤中恢复，意志力是他最大的武器',
            honours: ['欧联杯冠军', '英格兰联赛杯', '英格兰社区盾'],
            careerStats: {
                appearances: '350+',
                goals: '10+',
                assists: '40+'
            }
        },

        // 右后卫
        {
            id: 'walker',
            name: '凯尔·沃克',
            nameEn: 'Kyle Walker',
            club: 'Manchester City · 曼城',
            country: 'England · 英格兰',
            position: 'RB',
            style: 'complete',
            height: 178,
            weight: 70,
            dateOfBirth: '1990-05-28',
            birthPlace: 'Sheffield, England · 英格兰谢菲尔德',
            marketValue: '€20M',
            image: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/kyle-walker/profil/spieler/67868',
                baike: 'https://baike.baidu.com/item/凯尔·沃克',
                wikipedia: 'https://en.wikipedia.org/wiki/Kyle_Walker'
            },
            ratings: {
                'dribbling': 78, 'passing': 76, 'shooting': 55,
                'tackling': 82, 'heading': 68, 'ball-control': 79,
                'sprint-speed': 96, 'acceleration': 94, 'stamina': 90,
                'strength': 82, 'jumping': 78, 'agility': 86,
                'positioning': 84, 'vision': 68, 'decision-making': 80,
                'aggression': 76, 'leadership': 82,
                'overlapping': 85, 'recovery-runs': 95, 'crossing-accuracy': 72, 'one-on-one-defense': 90
            },
            description: '速度狂魔，防守稳如磐石，三冠王功勋老将',
            keyStrengths: ['速度爆炸', '一对一防守', '回追', '大赛经验', '体能'],
            developmentTips: '学习他的防守技巧和速度利用，他是边后卫位置的常青树',
            honours: ['英超冠军×5', '欧冠冠军', '世俱杯冠军'],
            careerStats: {
                appearances: '600+',
                goals: '25+',
                assists: '40+'
            }
        },
        {
            id: 'trent',
            name: '阿诺德',
            nameEn: 'Trent Alexander-Arnold',
            club: 'Liverpool · 利物浦',
            country: 'England · 英格兰',
            position: 'RB',
            style: 'attacking',
            height: 178,
            weight: 70,
            dateOfBirth: '1998-10-07',
            birthPlace: 'Liverpool, England · 英格兰利物浦',
            marketValue: '€70M',
            image: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/trent-alexander-arnold/profil/spieler/314353',
                baike: 'https://baike.baidu.com/item/特伦特·亚历山大-阿诺德',
                wikipedia: 'https://en.wikipedia.org/wiki/Trent_Alexander-Arnold'
            },
            ratings: {
                'dribbling': 82, 'passing': 94, 'shooting': 75,
                'tackling': 65, 'heading': 58, 'ball-control': 86,
                'sprint-speed': 76, 'acceleration': 78, 'stamina': 88,
                'strength': 62, 'jumping': 62, 'agility': 80,
                'positioning': 75, 'vision': 95, 'decision-making': 82,
                'aggression': 58, 'leadership': 75,
                'overlapping': 95, 'recovery-runs': 68, 'crossing-accuracy': 96, 'one-on-one-defense': 60
            },
            description: '这就是天才，右脚是上帝借给他的，利物浦青训瑰宝',
            keyStrengths: ['传中精准', '视野', '任意球', '创造力', '传球范围'],
            developmentTips: '学习他的传球和进攻组织，他重新定义了进攻型边后卫',
            honours: ['英超冠军', '欧冠冠军', '世俱杯冠军', '英超助攻王'],
            careerStats: {
                appearances: '350+',
                goals: '20+',
                assists: '100+'
            }
        },
        {
            id: 'hakimi',
            name: '阿什拉夫',
            nameEn: 'Achraf Hakimi',
            club: 'Paris Saint-Germain · 巴黎圣日耳曼',
            country: 'Morocco · 摩洛哥',
            position: 'RB',
            style: 'attacking',
            height: 181,
            weight: 78,
            dateOfBirth: '1998-11-04',
            birthPlace: 'Madrid, Spain · 西班牙马德里',
            marketValue: '€60M',
            image: '🇲🇦',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/achraf-hakimi/profil/spieler/401911',
                baike: 'https://baike.baidu.com/item/阿什拉夫·哈基米',
                wikipedia: 'https://en.wikipedia.org/wiki/Achraf_Hakimi'
            },
            ratings: {
                'dribbling': 86, 'passing': 80, 'shooting': 75,
                'tackling': 70, 'heading': 65, 'ball-control': 85,
                'sprint-speed': 94, 'acceleration': 95, 'stamina': 92,
                'strength': 75, 'jumping': 75, 'agility': 88,
                'positioning': 72, 'vision': 78, 'decision-making': 76,
                'aggression': 75, 'leadership': 70,
                'overlapping': 92, 'recovery-runs': 88, 'crossing-accuracy': 80, 'one-on-one-defense': 72
            },
            description: '摩洛哥闪电，能左能右的超级边翼，世界杯四强核心',
            keyStrengths: ['速度突破', '助攻能力', '体能充沛', '左右脚均衡', '大赛表现'],
            developmentTips: '学习他如何利用速度优势反复冲击对手防线',
            honours: ['世界杯四强', '法甲冠军×2', '意大利杯冠军', '非洲国家杯亚军'],
            careerStats: {
                appearances: '300+',
                goals: '35+',
                assists: '50+'
            }
        },

        // 防守型中场
        {
            id: 'rodri',
            name: '罗德里',
            nameEn: 'Rodrigo Hernández Cascante',
            club: 'Manchester City · 曼城',
            country: 'Spain · 西班牙',
            position: 'DM',
            style: 'complete',
            height: 191,
            weight: 82,
            dateOfBirth: '1996-06-22',
            birthPlace: 'Madrid, Spain · 西班牙马德里',
            marketValue: '€120M',
            image: '🇪🇸',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/rodri/profil/spieler/357564',
                baike: 'https://baike.baidu.com/item/罗德里戈·埃尔南德斯',
                wikipedia: 'https://en.wikipedia.org/wiki/Rodri_(footballer,_born_1996)'
            },
            ratings: {
                'dribbling': 82, 'passing': 92, 'shooting': 75,
                'tackling': 88, 'heading': 80, 'ball-control': 88,
                'sprint-speed': 70, 'acceleration': 68, 'stamina': 88,
                'strength': 86, 'jumping': 82, 'agility': 72,
                'positioning': 92, 'vision': 90, 'decision-making': 94,
                'aggression': 75, 'leadership': 90,
                'overlapping': 55, 'recovery-runs': 72, 'crossing-accuracy': 60, 'one-on-one-defense': 85
            },
            description: '三冠王中场基石，大心脏进球先生，欧冠决赛制胜球英雄',
            keyStrengths: ['组织能力', '大场面进球', '防守覆盖', '领导力', '传球精准'],
            developmentTips: '学习他的战术理解和节奏控制，他是现代后腰的标杆',
            honours: ['英超冠军', '欧冠冠军', '世俱杯冠军', '欧冠最佳球员'],
            careerStats: {
                appearances: '400+',
                goals: '30+',
                assists: '40+'
            }
        },
        {
            id: 'rice',
            name: '赖斯',
            nameEn: 'Declan Rice',
            club: 'Arsenal · 阿森纳',
            country: 'England · 英格兰',
            position: 'DM',
            style: 'complete',
            height: 188,
            weight: 80,
            dateOfBirth: '1999-01-14',
            birthPlace: 'London, England · 英格兰伦敦',
            marketValue: '€110M',
            image: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/declan-rice/profil/spieler/356863',
                baike: 'https://baike.baidu.com/item/德克兰·赖斯',
                wikipedia: 'https://en.wikipedia.org/wiki/Declan_Rice'
            },
            ratings: {
                'dribbling': 78, 'passing': 80, 'shooting': 70,
                'tackling': 85, 'heading': 75, 'ball-control': 80,
                'sprint-speed': 80, 'acceleration': 82, 'stamina': 90,
                'strength': 85, 'jumping': 78, 'agility': 75,
                'positioning': 85, 'vision': 78, 'decision-making': 84,
                'aggression': 78, 'leadership': 85,
                'overlapping': 60, 'recovery-runs': 80, 'crossing-accuracy': 65, 'one-on-one-defense': 82
            },
            description: '大英铁腰，阿森纳亿元先生，英格兰国家队核心',
            keyStrengths: ['覆盖面积', '防守', '后插上', '精神力', '领导力'],
            developmentTips: '学习他的跑动和防守意识，他是英格兰足球的新希望',
            honours: ['英超冠军', '欧协杯冠军', '西汉姆联年度最佳球员'],
            careerStats: {
                appearances: '300+',
                goals: '20+',
                assists: '25+'
            }
        },
        {
            id: 'casemiro',
            name: '卡塞米罗',
            nameEn: 'Carlos Henrique Casimiro',
            club: 'Manchester United · 曼联',
            country: 'Brazil · 巴西',
            position: 'DM',
            style: 'defensive',
            height: 185,
            weight: 84,
            dateOfBirth: '1992-02-23',
            birthPlace: 'São José dos Campos, Brazil · 巴西圣若泽杜斯坎普斯',
            marketValue: '€40M',
            image: '🇧🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/casemiro/profil/spieler/135528',
                baike: 'https://baike.baidu.com/item/卡塞米罗',
                wikipedia: 'https://en.wikipedia.org/wiki/Casemiro'
            },
            ratings: {
                'dribbling': 72, 'passing': 78, 'shooting': 65,
                'tackling': 92, 'heading': 85, 'ball-control': 76,
                'sprint-speed': 70, 'acceleration': 68, 'stamina': 90,
                'strength': 90, 'jumping': 88, 'agility': 70,
                'positioning': 90, 'vision': 75, 'decision-making': 86,
                'aggression': 88, 'leadership': 90,
                'overlapping': 50, 'recovery-runs': 75, 'crossing-accuracy': 55, 'one-on-one-defense': 88
            },
            description: '胖虎，皇马欧冠三连冠的中场防守基石，拦截机器',
            keyStrengths: ['防守拦截', '身体对抗', '头球得分', '精神属性', '大赛气质'],
            developmentTips: '学习他如何用身体和防守意识保护防线，是后腰位置的教科书',
            honours: ['欧冠冠军×5', '西甲冠军×3', '英格兰联赛杯', '美洲杯冠军'],
            careerStats: {
                appearances: '550+',
                goals: '50+',
                assists: '40+'
            }
        },

        // 中前卫/组织核心
        {
            id: 'kevin-de-bruyne',
            name: '德布劳内',
            nameEn: 'Kevin De Bruyne',
            club: 'Manchester City · 曼城',
            country: 'Belgium · 比利时',
            position: 'CM',
            style: 'attacking',
            height: 181,
            weight: 76,
            dateOfBirth: '1991-06-28',
            birthPlace: 'Drenthe, Belgium · 比利时德龙恩',
            marketValue: '€65M',
            image: '🇧🇪',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/kevin-de-bruyne/profil/spieler/88755',
                baike: 'https://baike.baidu.com/item/凯文·德布劳内',
                wikipedia: 'https://en.wikipedia.org/wiki/Kevin_De_Bruyne'
            },
            ratings: {
                'dribbling': 88, 'passing': 99, 'shooting': 87,
                'tackling': 58, 'heading': 64, 'ball-control': 92,
                'sprint-speed': 76, 'acceleration': 78, 'stamina': 88,
                'strength': 78, 'jumping': 66, 'agility': 80,
                'positioning': 85, 'vision': 99, 'decision-making': 95,
                'aggression': 68, 'leadership': 90,
                'overlapping': 70, 'recovery-runs': 65, 'crossing-accuracy': 94, 'one-on-one-defense': 55
            },
            description: '世界第一中场，传球是魔法，曼城的中场大脑',
            keyStrengths: ['传球视野', '助攻能力', '远射', '大心脏', '创造力'],
            developmentTips: '学习他的传球和视野，他是进攻型中场的天花板',
            honours: ['英超冠军×5', '欧冠冠军', '世俱杯冠军', '英超最佳球员×2'],
            careerStats: {
                appearances: '550+',
                goals: '100+',
                assists: '180+'
            }
        },
        {
            id: 'modric',
            name: '莫德里奇',
            nameEn: 'Luka Modrić',
            club: 'Real Madrid · 皇家马德里',
            country: 'Croatia · 克罗地亚',
            position: 'CM',
            style: 'complete',
            height: 172,
            weight: 66,
            dateOfBirth: '1985-09-09',
            birthPlace: 'Zadar, Croatia · 克罗地亚扎达尔',
            marketValue: '€20M',
            image: '🇭🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/luka-modric/profil/spieler/32366',
                baike: 'https://baike.baidu.com/item/卢卡·莫德里奇',
                wikipedia: 'https://en.wikipedia.org/wiki/Luka_Modri%C4%87'
            },
            ratings: {
                'dribbling': 90, 'passing': 95, 'shooting': 78,
                'tackling': 75, 'heading': 55, 'ball-control': 95,
                'sprint-speed': 75, 'acceleration': 78, 'stamina': 90,
                'strength': 65, 'jumping': 60, 'agility': 92,
                'positioning': 85, 'vision': 94, 'decision-making': 92,
                'aggression': 70, 'leadership': 90,
                'overlapping': 65, 'recovery-runs': 75, 'crossing-accuracy': 78, 'one-on-one-defense': 72
            },
            description: '魔笛，打破梅罗垄断金球奖的中场大师，克罗地亚民族英雄',
            keyStrengths: ['中场组织', '技术细腻', '体能充沛', '领导力', '大场面表现'],
            developmentTips: '学习他如何在高龄依然保持顶级状态，职业态度是关键',
            honours: ['金球奖', '欧冠冠军×5', '西甲冠军×3', '世界杯亚军'],
            careerStats: {
                appearances: '700+',
                goals: '80+',
                assists: '120+'
            }
        },
        {
            id: 'bellingham',
            name: '贝林厄姆',
            nameEn: 'Jude Bellingham',
            club: 'Real Madrid · 皇家马德里',
            country: 'England · 英格兰',
            position: 'CM',
            style: 'complete',
            height: 186,
            weight: 75,
            dateOfBirth: '2003-06-29',
            birthPlace: 'Stourbridge, England · 英格兰斯托布里奇',
            marketValue: '€150M',
            image: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/jude-bellingham/profil/spieler/581678',
                baike: 'https://baike.baidu.com/item/祖德·贝林厄姆',
                wikipedia: 'https://en.wikipedia.org/wiki/Jude_Bellingham'
            },
            ratings: {
                'dribbling': 88, 'passing': 85, 'shooting': 82,
                'tackling': 78, 'heading': 75, 'ball-control': 90,
                'sprint-speed': 86, 'acceleration': 88, 'stamina': 90,
                'strength': 80, 'jumping': 78, 'agility': 88,
                'positioning': 82, 'vision': 84, 'decision-making': 84,
                'aggression': 78, 'leadership': 80,
                'overlapping': 75, 'recovery-runs': 80, 'crossing-accuracy': 72, 'one-on-one-defense': 76
            },
            description: '英格兰超级新星，17岁踢英冠19岁过亿身价，皇马的未来中场核心',
            keyStrengths: ['全能中场', '后插上得分', '盘带突破', '年轻潜力', '职业心态'],
            developmentTips: '学习他年少成名却依然脚踏实地的职业态度',
            honours: ['西班牙超级杯', '德甲冠军×2', '德国杯冠军'],
            careerStats: {
                appearances: '180+',
                goals: '35+',
                assists: '30+'
            }
        },

        // 攻击型中场
        {
            id: 'odegaard',
            name: '厄德高',
            nameEn: 'Martin Ødegaard',
            club: 'Arsenal · 阿森纳',
            country: 'Norway · 挪威',
            position: 'AM',
            style: 'attacking',
            height: 178,
            weight: 68,
            dateOfBirth: '1998-12-17',
            birthPlace: 'Drammen, Norway · 挪威德拉门',
            marketValue: '€100M',
            image: '🇳🇴',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/martin-odegaard/profil/spieler/316043',
                baike: 'https://baike.baidu.com/item/马丁·厄德高',
                wikipedia: 'https://en.wikipedia.org/wiki/Martin_%C3%98degaard'
            },
            ratings: {
                'dribbling': 85, 'passing': 90, 'shooting': 80,
                'tackling': 55, 'heading': 58, 'ball-control': 88,
                'sprint-speed': 78, 'acceleration': 80, 'stamina': 84,
                'strength': 65, 'jumping': 62, 'agility': 85,
                'positioning': 88, 'vision': 90, 'decision-making': 90,
                'aggression': 60, 'leadership': 92,
                'overlapping': 65, 'recovery-runs': 60, 'crossing-accuracy': 78, 'one-on-one-defense': 52
            },
            description: '枪手新队长，天才中场，挪威足球的新希望',
            keyStrengths: ['技术', '视野', '领导力', '冷静', '创造力'],
            developmentTips: '学习他的组织能力和领导力，他是年轻球员的榜样',
            honours: ['英超冠军', '社区盾冠军', '阿森纳年度最佳球员'],
            careerStats: {
                appearances: '350+',
                goals: '60+',
                assists: '70+'
            }
        },
        {
            id: 'foden',
            name: '福登',
            nameEn: 'Phil Foden',
            club: 'Manchester City · 曼城',
            country: 'England · 英格兰',
            position: 'AM',
            style: 'attacking',
            height: 171,
            weight: 65,
            dateOfBirth: '2000-05-28',
            birthPlace: 'Stockport, England · 英格兰斯托克波特',
            marketValue: '€115M',
            image: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/phil-foden/profil/spieler/418560',
                baike: 'https://baike.baidu.com/item/菲尔·福登',
                wikipedia: 'https://en.wikipedia.org/wiki/Phil_Foden'
            },
            ratings: {
                'dribbling': 90, 'passing': 86, 'shooting': 82,
                'tackling': 42, 'heading': 48, 'ball-control': 94,
                'sprint-speed': 85, 'acceleration': 92, 'stamina': 85,
                'strength': 60, 'jumping': 62, 'agility': 94,
                'positioning': 82, 'vision': 85, 'decision-making': 84,
                'aggression': 58, 'leadership': 70,
                'overlapping': 75, 'recovery-runs': 60, 'crossing-accuracy': 78, 'one-on-one-defense': 40
            },
            description: '斯托克波特伊涅斯塔，曼城太子，英格兰金童',
            keyStrengths: ['盘带丝滑', '灵活', '终结', '本土青训', '大赛气质'],
            developmentTips: '学习他的盘带和无球跑动，他是曼城青训的骄傲',
            honours: ['英超冠军×5', '欧冠冠军', '世俱杯冠军', '英超最佳年轻球员'],
            careerStats: {
                appearances: '300+',
                goals: '70+',
                assists: '60+'
            }
        },
        {
            id: 'bruno-fernandes',
            name: '布鲁诺·费尔南德斯',
            nameEn: 'Bruno Fernandes',
            club: 'Manchester United · 曼联',
            country: 'Portugal · 葡萄牙',
            position: 'AM',
            style: 'attacking',
            height: 179,
            weight: 69,
            dateOfBirth: '1994-09-08',
            birthPlace: 'Maia, Portugal · 葡萄牙马亚',
            marketValue: '€65M',
            image: '🇵🇹',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/bruno-fernandes/profil/spieler/264040',
                baike: 'https://baike.baidu.com/item/布鲁诺·费尔南德斯',
                wikipedia: 'https://en.wikipedia.org/wiki/Bruno_Fernandes_(footballer)'
            },
            ratings: {
                'dribbling': 82, 'passing': 88, 'shooting': 86,
                'tackling': 60, 'heading': 70, 'ball-control': 85,
                'sprint-speed': 75, 'acceleration': 76, 'stamina': 88,
                'strength': 70, 'jumping': 72, 'agility': 80,
                'positioning': 84, 'vision': 88, 'decision-making': 84,
                'aggression': 78, 'leadership': 82,
                'overlapping': 70, 'recovery-runs': 72, 'crossing-accuracy': 82, 'one-on-one-defense': 58
            },
            description: 'B费，曼联中场发动机，进球助攻两双的狂人',
            keyStrengths: ['远射得分', '传球创造力', '点球专家', '大赛气质', '领导能力'],
            developmentTips: '学习他的射门技术和后插上时机选择',
            honours: ['英格兰联赛杯', '葡萄牙联赛杯冠军×2', '欧国联亚军'],
            careerStats: {
                appearances: '450+',
                goals: '120+',
                assists: '100+'
            }
        },

        // 左边锋
        {
            id: 'saka',
            name: '萨卡',
            nameEn: 'Bukayo Saka',
            club: 'Arsenal · 阿森纳',
            country: 'England · 英格兰',
            position: 'RW',
            style: 'complete',
            height: 178,
            weight: 65,
            dateOfBirth: '2001-09-05',
            birthPlace: 'London, England · 英格兰伦敦',
            marketValue: '€130M',
            image: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/bukayo-saka/profil/spieler/433176',
                baike: 'https://baike.baidu.com/item/布卡约·萨卡',
                wikipedia: 'https://en.wikipedia.org/wiki/Bukayo_Saka'
            },
            ratings: {
                'dribbling': 88, 'passing': 82, 'shooting': 80,
                'tackling': 60, 'heading': 60, 'ball-control': 88,
                'sprint-speed': 88, 'acceleration': 90, 'stamina': 90,
                'strength': 70, 'jumping': 68, 'agility': 90,
                'positioning': 82, 'vision': 80, 'decision-making': 82,
                'aggression': 65, 'leadership': 80,
                'overlapping': 80, 'recovery-runs': 70, 'crossing-accuracy': 82, 'one-on-one-defense': 58
            },
            description: '枪手太子，大英未来之星，阿森纳的宝藏男孩',
            keyStrengths: ['突破', '传中', '精神属性', '年轻', '职业态度'],
            developmentTips: '学习他的盘带和心理素质，他是年轻球员的楷模',
            honours: ['英超冠军', '英格兰年度最佳球员', '阿森纳年度最佳'],
            careerStats: {
                appearances: '250+',
                goals: '50+',
                assists: '60+'
            }
        },
        {
            id: 'salah',
            name: '萨拉赫',
            nameEn: 'Mohamed Salah',
            club: 'Liverpool · 利物浦',
            country: 'Egypt · 埃及',
            position: 'RW',
            style: 'attacking',
            height: 175,
            weight: 71,
            dateOfBirth: '1992-06-15',
            birthPlace: 'Nagrig, Egypt · 埃及纳格里格',
            marketValue: '€65M',
            image: '🇪🇬',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/mohamed-salah/profil/spieler/148455',
                baike: 'https://baike.baidu.com/item/穆罕默德·萨拉赫',
                wikipedia: 'https://en.wikipedia.org/wiki/Mohamed_Salah'
            },
            ratings: {
                'dribbling': 92, 'passing': 80, 'shooting': 92,
                'tackling': 50, 'heading': 70, 'ball-control': 90,
                'sprint-speed': 95, 'acceleration': 96, 'stamina': 88,
                'strength': 78, 'jumping': 72, 'agility': 92,
                'positioning': 90, 'vision': 80, 'decision-making': 88,
                'aggression': 65, 'leadership': 85,
                'overlapping': 75, 'recovery-runs': 60, 'crossing-accuracy': 78, 'one-on-one-defense': 48
            },
            description: '埃及梅西，利物浦国王，非洲足球的代表人物',
            keyStrengths: ['速度', '射门', '终结', '大心脏', '逆足能力'],
            developmentTips: '学习他的射门和门前嗅觉，他是现代前锋的完美模板',
            honours: ['英超冠军', '欧冠冠军', '世俱杯冠军', '英超金靴×3'],
            careerStats: {
                appearances: '600+',
                goals: '300+',
                assists: '150+'
            }
        },
        {
            id: 'messi',
            name: '梅西',
            nameEn: 'Lionel Messi',
            club: 'Inter Miami · 国际迈阿密',
            country: 'Argentina · 阿根廷',
            position: 'RW',
            style: 'attacking',
            height: 170,
            weight: 72,
            dateOfBirth: '1987-06-24',
            birthPlace: 'Rosario, Argentina · 阿根廷罗萨里奥',
            marketValue: '€35M',
            image: '🇦🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/lionel-messi/profil/spieler/28003',
                baike: 'https://baike.baidu.com/item/利昂内尔·梅西',
                wikipedia: 'https://en.wikipedia.org/wiki/Lionel_Messi'
            },
            ratings: {
                'dribbling': 99, 'passing': 96, 'shooting': 98,
                'tackling': 40, 'heading': 70, 'ball-control': 99,
                'sprint-speed': 90, 'acceleration': 98, 'stamina': 85,
                'strength': 68, 'jumping': 70, 'agility': 99,
                'positioning': 92, 'vision': 98, 'decision-making': 98,
                'aggression': 65, 'leadership': 92,
                'overlapping': 75, 'recovery-runs': 65, 'crossing-accuracy': 90, 'one-on-one-defense': 50
            },
            description: 'GOAT，足球史上最伟大的球员，世界杯冠军，八座金球奖得主',
            keyStrengths: ['盘带过人', '传球视野', '射门精准', '任意球', '大赛气质'],
            developmentTips: '学习他对足球的热爱和极致追求，他是足球艺术的代名词',
            honours: ['世界杯冠军', '金球奖×8', '欧冠冠军×4', '西甲冠军×10'],
            careerStats: {
                appearances: '900+',
                goals: '800+',
                assists: '350+'
            }
        },
        {
            id: 'neymar',
            name: '内马尔',
            nameEn: 'Neymar Jr',
            club: 'Al-Hilal · 利雅得新月',
            country: 'Brazil · 巴西',
            position: 'LW',
            style: 'attacking',
            height: 175,
            weight: 68,
            dateOfBirth: '1992-02-05',
            birthPlace: 'Mogi das Cruzes, Brazil · 巴西莫吉达斯克鲁塞斯',
            marketValue: '€40M',
            image: '🇧🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/neymar/profil/spieler/68290',
                baike: 'https://baike.baidu.com/item/内马尔·达·席尔瓦·桑托斯·儒尼奥尔',
                wikipedia: 'https://en.wikipedia.org/wiki/Neymar'
            },
            ratings: {
                'dribbling': 98, 'passing': 88, 'shooting': 88,
                'tackling': 45, 'heading': 65, 'ball-control': 97,
                'sprint-speed': 90, 'acceleration': 94, 'stamina': 80,
                'strength': 65, 'jumping': 70, 'agility': 96,
                'positioning': 82, 'vision': 88, 'decision-making': 86,
                'aggression': 70, 'leadership': 80,
                'overlapping': 85, 'recovery-runs': 70, 'crossing-accuracy': 84, 'one-on-one-defense': 48
            },
            description: '巴西足球的天才，桑巴足球的最后代表，球场上的艺术家',
            keyStrengths: ['盘带技术', '突破能力', '传球创造力', '任意球', '想象力'],
            developmentTips: '学习他的创造力和敢于冒险的精神，足球是艺术也是娱乐',
            honours: ['欧冠冠军', '西甲冠军×2', '法甲冠军×5', '联合会杯冠军'],
            careerStats: {
                appearances: '600+',
                goals: '450+',
                assists: '250+'
            }
        },
        {
            id: 'sane',
            name: '萨内',
            nameEn: 'Leroy Sané',
            club: 'Bayern Munich · 拜仁慕尼黑',
            country: 'Germany · 德国',
            position: 'LW',
            style: 'attacking',
            height: 184,
            weight: 75,
            dateOfBirth: '1996-01-11',
            birthPlace: 'Essen, Germany · 德国埃森',
            marketValue: '€60M',
            image: '🇩🇪',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/leroy-sane/profil/spieler/296180',
                baike: 'https://baike.baidu.com/item/勒鲁瓦·萨内',
                wikipedia: 'https://en.wikipedia.org/wiki/Leroy_San%C3%A9'
            },
            ratings: {
                'dribbling': 88, 'passing': 82, 'shooting': 80,
                'tackling': 45, 'heading': 65, 'ball-control': 86,
                'sprint-speed': 94, 'acceleration': 92, 'stamina': 85,
                'strength': 72, 'jumping': 70, 'agility': 90,
                'positioning': 78, 'vision': 80, 'decision-making': 78,
                'aggression': 68, 'leadership': 70,
                'overlapping': 82, 'recovery-runs': 75, 'crossing-accuracy': 80, 'one-on-one-defense': 48
            },
            description: '德国飞翼，曼城瓜帅时期的边路利器，左脚技术出众',
            keyStrengths: ['速度突破', '内切射门', '盘带技术', '传球视野', '创造力'],
            developmentTips: '学习他如何利用速度和内切创造机会',
            honours: ['英超冠军×2', '德甲冠军×4', '德国杯冠军×2', '社区盾冠军×2'],
            careerStats: {
                appearances: '350+',
                goals: '80+',
                assists: '100+'
            }
        },

        // 前锋/中锋
        {
            id: 'haaland',
            name: '哈兰德',
            nameEn: 'Erling Haaland',
            club: 'Manchester City · 曼城',
            country: 'Norway · 挪威',
            position: 'ST',
            style: 'complete',
            height: 195,
            weight: 94,
            dateOfBirth: '2000-07-21',
            birthPlace: 'Leeds, England · 英格兰利兹',
            marketValue: '€180M',
            image: '🇳🇴',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/erling-haaland/profil/spieler/418560',
                baike: 'https://baike.baidu.com/item/埃尔林·哈兰德',
                wikipedia: 'https://en.wikipedia.org/wiki/Erling_Haaland'
            },
            ratings: {
                'dribbling': 80, 'passing': 65, 'shooting': 99,
                'tackling': 35, 'heading': 95, 'ball-control': 84,
                'sprint-speed': 94, 'acceleration': 93, 'stamina': 85,
                'strength': 97, 'jumping': 96, 'agility': 78,
                'positioning': 95, 'vision': 68, 'decision-making': 88,
                'aggression': 82, 'leadership': 75,
                'overlapping': 40, 'recovery-runs': 50, 'crossing-accuracy': 55, 'one-on-one-defense': 30
            },
            description: '进球机器，不是人类的怪物，足球世界的新物种',
            keyStrengths: ['终结', '头球', '速度', '身体碾压', '门前嗅觉'],
            developmentTips: '学习他的门前嗅觉和身体利用，他重新定义了前锋位置',
            honours: ['英超冠军', '欧冠冠军', '世俱杯冠军', '英超金靴×2', '欧冠金靴'],
            careerStats: {
                appearances: '280+',
                goals: '260+',
                assists: '50+'
            }
        },
        {
            id: 'nunez',
            name: '努涅斯',
            nameEn: 'Darwin Núñez',
            club: 'Liverpool · 利物浦',
            country: 'Uruguay · 乌拉圭',
            position: 'ST',
            style: 'attacking',
            height: 187,
            weight: 79,
            dateOfBirth: '1999-06-24',
            birthPlace: 'Artigas, Uruguay · 乌拉圭阿蒂加斯',
            marketValue: '€60M',
            image: '🇺🇾',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/darwin-nunez/profil/spieler/479074',
                baike: 'https://baike.baidu.com/item/达尔文·努涅斯',
                wikipedia: 'https://en.wikipedia.org/wiki/Darwin_N%C3%BA%C3%B1ez'
            },
            ratings: {
                'dribbling': 85, 'passing': 68, 'shooting': 78,
                'tackling': 45, 'heading': 85, 'ball-control': 80,
                'sprint-speed': 92, 'acceleration': 94, 'stamina': 88,
                'strength': 85, 'jumping': 90, 'agility': 82,
                'positioning': 80, 'vision': 70, 'decision-making': 75,
                'aggression': 85, 'leadership': 70,
                'overlapping': 60, 'recovery-runs': 70, 'crossing-accuracy': 65, 'one-on-one-defense': 40
            },
            description: '乌拉圭疯子，跑不死的前锋，红军的新箭头',
            keyStrengths: ['疯跑', '对抗', '头球', '斗志', '速度'],
            developmentTips: '学习他的斗志和跑动，他的拼搏精神值得所有球员学习',
            honours: ['社区盾冠军', '本菲卡最佳射手', '乌拉圭国脚'],
            careerStats: {
                appearances: '200+',
                goals: '100+',
                assists: '30+'
            }
        },
        {
            id: 'jesus',
            name: '热苏斯',
            nameEn: 'Gabriel Jesus',
            club: 'Arsenal · 阿森纳',
            country: 'Brazil · 巴西',
            position: 'ST',
            style: 'attacking',
            height: 175,
            weight: 73,
            dateOfBirth: '1997-04-03',
            birthPlace: 'São Paulo, Brazil · 巴西圣保罗',
            marketValue: '€60M',
            image: '🇧🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/gabriel-jesus/profil/spieler/356651',
                baike: 'https://baike.baidu.com/item/加布里埃尔·热苏斯',
                wikipedia: 'https://en.wikipedia.org/wiki/Gabriel_Jesus'
            },
            ratings: {
                'dribbling': 88, 'passing': 80, 'shooting': 78,
                'tackling': 50, 'heading': 70, 'ball-control': 88,
                'sprint-speed': 85, 'acceleration': 88, 'stamina': 88,
                'strength': 75, 'jumping': 72, 'agility': 90,
                'positioning': 82, 'vision': 78, 'decision-making': 82,
                'aggression': 75, 'leadership': 78,
                'overlapping': 70, 'recovery-runs': 65, 'crossing-accuracy': 75, 'one-on-one-defense': 48
            },
            description: '巴西前锋，技术与斗志兼具，枪手的前场多面手',
            keyStrengths: ['盘带', '串联', '跑动', '巴西技术', '适应性'],
            developmentTips: '学习他的技术和串联能力，他是现代前锋的典范',
            honours: ['英超冠军×4', '美洲杯冠军', '奥运金牌'],
            careerStats: {
                appearances: '350+',
                goals: '100+',
                assists: '60+'
            }
        },
        {
            id: 'kane',
            name: '凯恩',
            nameEn: 'Harry Kane',
            club: 'Bayern Munich · 拜仁慕尼黑',
            country: 'England · 英格兰',
            position: 'ST',
            style: 'complete',
            height: 188,
            weight: 85,
            dateOfBirth: '1993-07-28',
            birthPlace: 'London, England · 英格兰伦敦',
            marketValue: '€100M',
            image: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/harry-kane/profil/spieler/132098',
                baike: 'https://baike.baidu.com/item/哈里·凯恩',
                wikipedia: 'https://en.wikipedia.org/wiki/Harry_Kane'
            },
            ratings: {
                'dribbling': 82, 'passing': 86, 'shooting': 96,
                'tackling': 50, 'heading': 90, 'ball-control': 84,
                'sprint-speed': 78, 'acceleration': 76, 'stamina': 85,
                'strength': 85, 'jumping': 88, 'agility': 78,
                'positioning': 92, 'vision': 82, 'decision-making': 88,
                'aggression': 75, 'leadership': 88,
                'overlapping': 55, 'recovery-runs': 70, 'crossing-accuracy': 70, 'one-on-one-defense': 50
            },
            description: '英格兰队长，热刺队史射手王，全能中锋的标杆',
            keyStrengths: ['射门终结', '头球得分', '做球能力', '点球专家', '领导力'],
            developmentTips: '学习他的全面性，既能得分又能串联球队',
            honours: ['德甲冠军', '德国杯冠军', '德甲金靴', '世界杯金靴', '英超金靴×3'],
            careerStats: {
                appearances: '550+',
                goals: '350+',
                assists: '80+'
            }
        },
        {
            id: 'mbappe',
            name: '姆巴佩',
            nameEn: 'Kylian Mbappé',
            club: 'Real Madrid · 皇家马德里',
            country: 'France · 法国',
            position: 'ST',
            style: 'attacking',
            height: 178,
            weight: 73,
            dateOfBirth: '1998-12-20',
            birthPlace: 'Paris, France · 法国巴黎',
            marketValue: '€180M',
            image: '🇫🇷',
            links: {
                transfermarkt: 'https://www.transfermarkt.com/kylian-mbappe/profil/spieler/342229',
                baike: 'https://baike.baidu.com/item/基利安·姆巴佩',
                wikipedia: 'https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9'
            },
            ratings: {
                'dribbling': 94, 'passing': 84, 'shooting': 94,
                'tackling': 45, 'heading': 78, 'ball-control': 92,
                'sprint-speed': 98, 'acceleration': 99, 'stamina': 90,
                'strength': 82, 'jumping': 80, 'agility': 94,
                'positioning': 90, 'vision': 84, 'decision-making': 90,
                'aggression': 78, 'leadership': 88,
                'overlapping': 80, 'recovery-runs': 85, 'crossing-accuracy': 78, 'one-on-one-defense': 50
            },
            description: '法国超级巨星，世界杯冠军得主，新一代球王的有力竞争者',
            keyStrengths: ['速度突破', '射门终结', '心理素质', '大赛气质', '领导力'],
            developmentTips: '学习他如何将速度和技术完美结合，是现代前锋的教科书',
            honours: ['世界杯冠军', '法甲冠军×6', '法国杯冠军×3', '世界杯金靴'],
            careerStats: {
                appearances: '400+',
                goals: '280+',
                assists: '110+'
            }
        }
    ],

    calculateSimilarity(userRatings, player) {
        const ratingKeys = [
            'dribbling', 'passing', 'shooting', 'tackling', 'heading', 'ball-control',
            'sprint-speed', 'acceleration', 'stamina', 'strength', 'jumping', 'agility',
            'positioning', 'vision', 'decision-making', 'aggression',
            'overlapping', 'recovery-runs', 'crossing-accuracy', 'one-on-one-defense'
        ];

        let totalDiff = 0;
        let validCount = 0;

        ratingKeys.forEach(key => {
            if (userRatings[key] !== undefined && player.ratings[key] !== undefined) {
                const diff = Math.abs(userRatings[key] - player.ratings[key]);
                totalDiff += diff;
                validCount++;
            }
        });

        if (validCount === 0) return 0;

        const similarity = Math.max(0, 100 - (totalDiff / validCount) * 2);
        return Math.round(similarity);
    },

    findMatchingPlayers(userProfile, count = 3) {
        const userRatings = userProfile.technicalRatings || {};

        const playersWithSimilarity = this.players.map(player => {
            const similarity = this.calculateSimilarity(userRatings, player);
            let positionBonus = 0;
            if (userProfile.positions && userProfile.positions.includes(player.position)) positionBonus = 12;
            const heightDiff = Math.abs(player.height - (userProfile.height || 175));
            const heightBonus = Math.max(0, 6 - heightDiff / 10);
            const finalSimilarity = Math.min(100, similarity + positionBonus + heightBonus);
            return { ...player, similarity: Math.round(finalSimilarity) };
        });

        playersWithSimilarity.sort((a, b) => b.similarity - a.similarity);
        return playersWithSimilarity.slice(0, count);
    },

    determineUserStyle(ratings) {
        const attackingScore = (ratings['overlapping'] || 50) + (ratings['crossing-accuracy'] || 50) + (ratings['dribbling'] || 50) + (ratings['vision'] || 50);
        const defensiveScore = (ratings['tackling'] || 50) + (ratings['one-on-one-defense'] || 50) + (ratings['positioning'] || 50);
        if (attackingScore - defensiveScore > 30) return 'attacking';
        if (defensiveScore - attackingScore > 30) return 'defensive';
        return 'complete';
    },

    getDevelopmentTips(userProfile, matchedPlayer) {
        const userRatings = userProfile.technicalRatings || {};
        const playerRatings = matchedPlayer.ratings;
        const tips = [];
        const ratingKeys = [
            { key: 'tackling', name: '防守抢断' },
            { key: 'passing', name: '传球能力' },
            { key: 'crossing-accuracy', name: '传中精准度' },
            { key: 'stamina', name: '体能耐力' },
            { key: 'strength', name: '身体力量' },
            { key: 'one-on-one-defense', name: '一对一防守' },
            { key: 'overlapping', name: '插上助攻' },
            { key: 'vision', name: '球场视野' },
            { key: 'positioning', name: '位置感' }
        ];

        const gaps = ratingKeys.map(item => {
            const userVal = userRatings[item.key] || 50;
            const playerVal = playerRatings[item.key] || 70;
            return {
                ...item,
                gap: playerVal - userVal,
                userValue: userVal,
                targetValue: playerVal
            };
        }).filter(g => g.gap > 5)
          .sort((a, b) => b.gap - a.gap)
          .slice(0, 3);

        gaps.forEach(gap => {
            tips.push({
                area: gap.name,
                userValue: gap.userValue,
                targetValue: gap.targetValue,
                tip: this.getSpecificTip(gap.key, gap.userValue, gap.targetValue)
            });
        });

        return tips;
    },

    getSpecificTip(key, userVal, targetVal) {
        const tips = {
            'tackling': '练习防守站位和铲球时机，多看防守教学',
            'passing': '加强传球练习，提高短传和长传的精准度',
            'crossing-accuracy': '在边路多进行传中练习，找队友配合',
            'stamina': '增加有氧训练，提高持续作战能力',
            'strength': '进行力量训练，重点是下肢和核心力量',
            'one-on-one-defense': '多进行一对一防守练习',
            'overlapping': '练习插上助攻的时机选择',
            'vision': '多看高水平比赛，提高观察能力',
            'positioning': '加强防守站位的意识训练'
        };
        return tips[key] || '继续保持训练';
    },

    getRadarData(ratings) {
        return [
            { axis: '技术', value: this.average([ratings['dribbling'], ratings['passing'], ratings['ball-control']]) },
            { axis: '进攻', value: this.average([ratings['shooting'], ratings['overlapping'], ratings['crossing-accuracy'], ratings['vision']]) },
            { axis: '防守', value: this.average([ratings['tackling'], ratings['one-on-one-defense'], ratings['positioning']]) },
            { axis: '速度', value: this.average([ratings['sprint-speed'], ratings['acceleration'], ratings['agility']]) },
            { axis: '身体', value: this.average([ratings['strength'], ratings['jumping']]) },
            { axis: '体能', value: this.average([ratings['stamina'], ratings['recovery-runs']]) }
        ];
    },

    average(values) {
        const valid = values.filter(v => v !== undefined);
        if (valid.length === 0) return 50;
        return Math.round(valid.reduce((a, b) => a + b, 0) / valid.length);
    }
};
