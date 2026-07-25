/**
 * 专业训练计划系统
 * 包含：周期框架 + 位置专项 + 模块选择
 */

const TrainingPlan = {

    // ============ 专业动作库 ============
    exerciseLibrary: {
        // ============ 热身激活模块 ============
        warmup: [
            {
                name: '原地高抬腿',
                target: '髋屈肌、股四头肌',
                duration: '45秒',
                tips: ['大腿抬到与地面平行', '步频快', '身体保持直立'],
                level: '基础'
            },
            {
                name: '侧向滑步',
                target: '髋外展肌、下肢灵活性',
                duration: '30秒/侧',
                tips: ['保持低重心', '重心在两脚之间', '滑步不要交叉'],
                level: '基础'
            },
            {
                name: '后踢腿跑',
                target: '腘绳肌、髋屈肌',
                duration: '45秒',
                tips: ['脚跟尽量踢到臀部', '保持节奏', '上身稳定'],
                level: '基础'
            },
            {
                name: '弓步走转体',
                target: '臀部、核心、胸椎',
                duration: '12步/侧',
                tips: ['前腿弓步时转体', '手臂打开', '后腿尽量蹬直'],
                level: '基础'
            },
            {
                name: '虫爬',
                target: '核心、胸椎、腘绳肌',
                duration: '8次/侧',
                tips: ['手尽量前伸', '脚尽量蹬直', '核心收紧'],
                level: '进阶'
            }
        ],

        // ============ 力量模块 - 下肢 ============
        lowerStrength: [
            {
                name: '杠铃深蹲',
                target: '股四头肌、臀部、核心',
                sets: 4, reps: 8-12, rest: '90秒',
                tips: ['腰背挺直', '膝盖与脚尖方向一致', '蹲到大腿平行地面'],
                mistakes: ['弯腰', '膝盖内扣', '蹲得太浅'],
                level: '进阶'
            },
            {
                name: '罗马尼亚硬拉',
                target: '臀部、腘绳肌、下背',
                sets: 4, reps: '8-10', rest: '90秒',
                tips: ['膝盖微屈不锁死', '屈髋向后，感受拉扯感', '用臀部发力站起'],
                mistakes: ['弯腰用手拉', '膝盖完全打直', '杠铃离身体太远'],
                level: '进阶'
            },
            {
                name: '箭步蹲',
                target: '单腿力量、平衡、臀部',
                sets: 3, reps: '10/腿', rest: '60秒',
                tips: ['前腿膝盖不超过脚尖', '身体保持直立', '重心均匀分布'],
                mistakes: ['身体前倾过多', '前腿膝盖内扣', '步幅太小'],
                level: '基础'
            },
            {
                name: '保加利亚分腿蹲',
                target: '单腿力量、平衡、爆发力',
                sets: 3, reps: '8-10/腿', rest: '75秒',
                tips: ['后脚放于凳子/台阶', '前腿膝盖与脚尖同方向', '身体保持中立'],
                mistakes: ['身体过度前倾', '前腿压力过大', '后脚放得太高'],
                level: '挑战'
            },
            {
                name: '腘绳肌弯举',
                target: '腘绳肌',
                sets: 3, reps: '12-15', rest: '45秒',
                tips: ['动作控制，不要甩动', '感受大腿后侧收紧', '顶峰收缩1秒'],
                mistakes: ['动作太快借惯性', '身体借力'],
                level: '基础'
            },
            {
                name: '小腿提踵',
                target: '小腿三头肌',
                sets: 3, reps: '15-20', rest: '45秒',
                tips: ['动作顶端停留1秒', '下放时充分拉伸', '保持身体直立'],
                mistakes: ['弯腰驼背', '动作幅度过小'],
                level: '基础'
            }
        ],

        // ============ 力量模块 - 上肢 ============
        upperStrength: [
            {
                name: '俯卧撑',
                target: '胸肌、三头肌、肩膀',
                sets: 4, reps: '8-15', rest: '60秒',
                tips: ['身体成一条直线', '核心收紧', '下去时胸部接近地面'],
                mistakes: ['塌腰/撅屁股', '手臂张太开', '头向前伸'],
                level: '基础'
            },
            {
                name: '俯身哑铃划船',
                target: '背阔肌、二头肌、上背',
                sets: 3, reps: '12/侧', rest: '60秒',
                tips: ['腰背挺直，身体成45度', '用背部发力', '肘关节往后夹'],
                mistakes: ['弯腰驼背', '用手臂甩动', '身体旋转借力'],
                level: '进阶'
            },
            {
                name: '哑铃肩推',
                target: '三角肌、上胸',
                sets: 3, reps: '10-12', rest: '60秒',
                tips: ['坐直，背部贴紧凳子', '推起时手臂不锁死', '控制下放'],
                mistakes: ['借力挺腰', '推起太快', '手臂锁死'],
                level: '进阶'
            },
            {
                name: '二头弯举',
                target: '肱二头肌',
                sets: 3, reps: '12-15', rest: '45秒',
                tips: ['上臂贴紧身体', '用二头肌发力', '顶峰收缩1秒'],
                mistakes: ['上臂摆动', '身体借力晃动'],
                level: '基础'
            },
            {
                name: '三头绳索下压',
                target: '肱三头肌',
                sets: 3, reps: '12-15', rest: '45秒',
                tips: ['上臂贴紧身体', '用三头肌发力', '顶端收紧1秒'],
                mistakes: ['上臂离开身体', '身体借力'],
                level: '基础'
            }
        ],

        // ============ 力量模块 - 核心 ============
        coreStrength: [
            {
                name: '平板支撑',
                target: '整个核心、躯干稳定',
                sets: 4, duration: '45-60秒', rest: '45秒',
                tips: ['身体成一条直线', '核心收紧', '不要憋气'],
                mistakes: ['塌腰', '撅屁股', '头后仰'],
                level: '基础'
            },
            {
                name: '侧平板支撑',
                target: '侧腹、腹斜肌',
                sets: 3, duration: '30秒/侧', rest: '45秒',
                tips: ['身体成一条直线', '上面的手臂上伸或放胯部', '髋部不要塌'],
                mistakes: ['髋部下塌', '身体前倾'],
                level: '基础'
            },
            {
                name: '死虫',
                target: '深层核心、下背稳定',
                sets: 3, reps: '8/侧', rest: '45秒',
                tips: ['下背贴紧地面', '动作控制，不要太快', '对侧手脚同时动'],
                mistakes: ['下背离开地面', '动作太快'],
                level: '基础'
            },
            {
                name: '悬垂举腿',
                target: '下腹、屈髋肌',
                sets: 3, reps: '8-10', rest: '60秒',
                tips: ['不要摆动身体', '用腹部发力抬腿', '动作控制'],
                mistakes: ['摆动借惯性', '只抬大腿不抬小腿'],
                level: '挑战'
            },
            {
                name: '鸟狗式',
                target: '核心稳定、下背、平衡',
                sets: 3, reps: '10/侧', rest: '30秒',
                tips: ['动作缓慢控制', '对侧手脚伸展', '身体保持稳定不旋转'],
                mistakes: ['动作太快', '身体旋转', '下背塌'],
                level: '基础'
            }
        ],

        // ============ 爆发力模块 ============
        power: [
            {
                name: '箱跳',
                target: '腿部爆发力、弹跳',
                sets: 3, reps: '6-8', rest: '90秒',
                tips: ['用摆臂发力带起', '轻盈落地', '落地时膝盖缓冲'],
                mistakes: ['跳得太高超出能力', '落地太重', '弯腰弓背'],
                level: '进阶'
            },
            {
                name: '深蹲跳',
                target: '腿部爆发力、弹跳',
                sets: 3, reps: '8-10', rest: '90秒',
                tips: ['下蹲到大腿平行', '用臀部发力跳起', '轻盈落地缓冲'],
                mistakes: ['跳得过高但控制差', '落地重', '膝盖内扣'],
                level: '进阶'
            },
            {
                name: '药球旋转投掷',
                target: '旋转爆发力、核心',
                sets: 3, reps: '8/侧', rest: '60秒',
                tips: ['下半身稳定', '用核心旋转发力', '眼睛看着球出手方向'],
                mistakes: ['只用手臂甩', '下半身旋转太多'],
                level: '进阶'
            },
            {
                name: '快速俯卧撑击掌',
                target: '上肢爆发力',
                sets: 3, reps: '5-8', rest: '60秒',
                tips: ['推起时发力爆发', '击掌后快速稳定', '轻盈落地'],
                mistakes: ['动作失控', '落地太重'],
                level: '挑战'
            },
            {
                name: '快速伸缩复合弓步',
                target: '单腿爆发力',
                sets: 3, reps: '6/腿', rest: '75秒',
                tips: ['快速切换腿', '用摆臂协调', '轻盈落地'],
                mistakes: ['动作太慢', '落地太重'],
                level: '挑战'
            }
        ],

        // ============ 全身训练模块 ============
        fullBody: [
            {
                name: '高翻',
                target: '全身爆发力、后链肌群',
                sets: 3, reps: '4-6', rest: '2分钟',
                tips: ['学习正确技术', '杠铃贴近身体', '用髋部发力'],
                mistakes: ['用手臂拉', '腰背不直'],
                level: '挑战'
            },
            {
                name: '哑铃抓举',
                target: '全身爆发力、协调性',
                sets: 3, reps: '4/侧', rest: '2分钟',
                tips: ['学习正确技术', '快速发力', '动作连贯'],
                mistakes: ['动作脱节', '只用手臂'],
                level: '挑战'
            },
            {
                name: '壶铃摆动',
                target: '臀部、腘绳肌、核心',
                sets: 3, reps: '12-15', rest: '60秒',
                tips: ['用臀部发力摆动', '不要弯腰', '动作连贯'],
                mistakes: ['用手臂甩', '弯腰弓背', '膝盖锁死'],
                level: '基础'
            },
            {
                name: '登山者',
                target: '核心、心肺、协调性',
                sets: 4, duration: '30秒', rest: '45秒',
                tips: ['保持平板姿势', '脚快速交替', '核心收紧'],
                mistakes: ['塌腰/撅屁股', '动作不协调'],
                level: '基础'
            }
        ],

        // ============ 有氧耐力模块 ============
        cardio: [
            {
                name: '持续慢跑',
                target: '有氧耐力、心肺功能',
                duration: '20-30分钟',
                pace: '中等强度（可以说话但不能唱歌）',
                tips: ['保持稳定节奏', '呼吸均匀', '姿势放松'],
                level: '基础'
            },
            {
                name: '间歇跑',
                target: '速度耐力、冲刺能力',
                description: '冲刺30秒 + 慢跑60秒，重复10次',
                tips: ['冲刺用全力', '慢跑恢复充分', '注意热身'],
                level: '进阶'
            },
            {
                name: '椭圆机有氧',
                target: '有氧耐力、对膝盖友好',
                duration: '30分钟',
                pace: '中等强度',
                tips: ['姿势直立', '全脚踩住踏板', '动作连贯'],
                level: '基础'
            },
            {
                name: '游泳有氧',
                target: '全身有氧、对关节最友好',
                duration: '20-30分钟',
                pace: '中等强度',
                tips: ['呼吸节奏稳定', '动作舒展'],
                level: '基础'
            },
            {
                name: '划船机有氧',
                target: '有氧耐力、后链肌群',
                duration: '25分钟',
                tips: ['用腿部发力', '动作连贯', '核心收紧'],
                level: '基础'
            }
        ],

        // ============ 恢复放松模块 ============
        recovery: [
            {
                name: '泡沫轴滚大腿',
                target: '股四头肌、大腿前侧',
                duration: '60秒',
                tips: ['找到紧张点停留', '缓慢滚动', '呼吸放松'],
                level: '基础'
            },
            {
                name: '泡沫轴滚臀部',
                target: '臀部、梨状肌',
                duration: '60秒/侧',
                tips: ['侧身滚', '找到紧张点停留', '可以稍微压一点'],
                level: '基础'
            },
            {
                name: '泡沫轴滚上背',
                target: '上背、胸椎',
                duration: '60秒',
                tips: ['来回滚动', '可以张开手臂', '呼吸放松'],
                level: '基础'
            },
            {
                name: '股四头肌静态拉伸',
                target: '大腿前侧',
                duration: '30秒/侧',
                tips: ['站稳或者扶墙', '脚跟往臀部贴', '身体保持直立'],
                level: '基础'
            },
            {
                name: '腘绳肌静态拉伸',
                target: '大腿后侧',
                duration: '30秒/侧',
                tips: ['一条腿伸直', '身体往前倾感受拉扯', '不要驼背'],
                level: '基础'
            },
            {
                name: '臀部静态拉伸',
                target: '臀部、髋外旋肌',
                duration: '30秒/侧',
                tips: ['盘腿或者放凳子上', '身体往前倾', '感受拉伸'],
                level: '基础'
            },
            {
                name: '胸部静态拉伸',
                target: '胸部、三角肌前束',
                duration: '30秒',
                tips: ['扶墙或门框', '身体往前倾', '感受胸部拉伸'],
                level: '基础'
            },
            {
                name: '婴儿式放松',
                target: '整个背部、髋部',
                duration: '60秒',
                tips: ['膝盖尽量打开', '大脚趾相触', '额头贴地'],
                level: '基础'
            }
        ],

        // ============ 位置专项模块 ============
        positionSpecific: {
            'GK': [
                {
                    name: '横向滑步',
                    tips: '低重心，快速左右移动，每组30秒',
                    focus: '横向移动、速度'
                },
                {
                    name: '连续扑救模拟',
                    tips: '快速左右移动扑救，每组10次',
                    focus: '反应速度、爆发力'
                },
                {
                    name: '原地快速碎步',
                    tips: '快速小碎步，每组30秒',
                    focus: '步法频率、启动速度'
                },
                {
                    name: '坐起接球',
                    tips: '坐地快速起身接球，每组8次',
                    focus: '快速起身、二次反应'
                }
            ],
            'CB': [
                {
                    name: '后退跑转冲刺',
                    tips: '后退5米后转体冲刺5米，每组8次',
                    focus: '回追转身、加速'
                },
                {
                    name: '头球顶球练习',
                    tips: '顶固定球或队友抛球，每组10次',
                    focus: '头球技术、颈部力量'
                },
                {
                    name: '防守站位滑步',
                    tips: '面对假想对手滑步，每组45秒',
                    focus: '防守脚步、位置感'
                },
                {
                    name: '对抗下转身',
                    tips: '轻对抗下模拟拿球转身，每组8次',
                    focus: '转身摆脱、对抗能力'
                }
            ],
            'LB': [
                {
                    name: '插上 + 回追折返',
                    tips: '边线插上10米，快速回追，每组10次',
                    focus: '往返能力、耐力'
                },
                {
                    name: '边路45度传中',
                    tips: '下底或45度传中，每组10次',
                    focus: '传中精度、步法'
                },
                {
                    name: '1v1 防守脚步',
                    tips: '面对假想边锋滑步，每组45秒',
                    focus: '横向移动、重心控制'
                },
                {
                    name: '套边插上配合',
                    tips: '套边 + 传中，每组8次',
                    focus: '插上时机、配合意识'
                }
            ],
            'RB': [
                {
                    name: '插上 + 回追折返',
                    tips: '边线插上10米，快速回追，每组10次',
                    focus: '往返能力、耐力'
                },
                {
                    name: '边路45度传中',
                    tips: '下底或45度传中，每组10次',
                    focus: '传中精度、步法'
                },
                {
                    name: '1v1 防守脚步',
                    tips: '面对假想边锋滑步，每组45秒',
                    focus: '横向移动、重心控制'
                },
                {
                    name: '套边插上配合',
                    tips: '套边 + 传中，每组8次',
                    focus: '插上时机、配合意识'
                }
            ],
            'LWB': [
                {
                    name: '连续上下往返',
                    tips: '从边线到禁区线往返，每组12次',
                    focus: '耐力、往返能力'
                },
                {
                    name: '45度传中 + 下底传中',
                    tips: '两种传中交替，每组各8次',
                    focus: '传中精度、变化'
                },
                {
                    name: '变向内切 + 传球',
                    tips: '边路变向内切后传球，每组8次',
                    focus: '内切技术、视野'
                },
                {
                    name: '滑步防守 + 快速插上',
                    tips: '防守滑步后快速插上，每组8次',
                    focus: '攻防转换、爆发力'
                }
            ],
            'RWB': [
                {
                    name: '连续上下往返',
                    tips: '从边线到禁区线往返，每组12次',
                    focus: '耐力、往返能力'
                },
                {
                    name: '45度传中 + 下底传中',
                    tips: '两种传中交替，每组各8次',
                    focus: '传中精度、变化'
                },
                {
                    name: '变向内切 + 传球',
                    tips: '边路变向内切后传球，每组8次',
                    focus: '内切技术、视野'
                },
                {
                    name: '滑步防守 + 快速插上',
                    tips: '防守滑步后快速插上，每组8次',
                    focus: '攻防转换、爆发力'
                }
            ],
            'DM': [
                {
                    name: '连续转身摆脱',
                    tips: '模拟接球转身摆脱，每组8次',
                    focus: '转身技术、灵活性'
                },
                {
                    name: '10米冲刺 × 多组',
                    tips: '原地启动冲刺10米，每组10次',
                    focus: '短距离冲刺、启动速度'
                },
                {
                    name: '原地摆腿传球',
                    tips: '左右脚传球练习，每组20次',
                    focus: '传球技术、脚感'
                },
                {
                    name: '护球对抗模拟',
                    tips: '轻对抗下护球，每组30秒',
                    focus: '对抗能力、护球技术'
                },
                {
                    name: '视野扫描练习',
                    tips: '模拟接球前转头观察，每组10次',
                    focus: '视野意识、观察习惯'
                }
            ],
            'CM': [
                {
                    name: '连续转身摆脱',
                    tips: '模拟接球转身摆脱，每组8次',
                    focus: '转身技术、灵活性'
                },
                {
                    name: '10米冲刺 × 多组',
                    tips: '原地启动冲刺10米，每组10次',
                    focus: '短距离冲刺、启动速度'
                },
                {
                    name: '原地摆腿传球',
                    tips: '左右脚传球练习，每组20次',
                    focus: '传球技术、脚感'
                },
                {
                    name: '护球对抗模拟',
                    tips: '轻对抗下护球，每组30秒',
                    focus: '对抗能力、护球技术'
                },
                {
                    name: '视野扫描练习',
                    tips: '模拟接球前转头观察，每组10次',
                    focus: '视野意识、观察习惯'
                }
            ],
            'LM': [
                {
                    name: '30米反复冲刺',
                    tips: '边线冲刺30米，走回来，重复10次',
                    focus: '速度耐力、冲刺能力'
                },
                {
                    name: '内切步频练习',
                    tips: '边路内切步频练习，每组8次',
                    focus: '内切技术、步频'
                },
                {
                    name: '变向过人组合',
                    tips: '假动作 + 变向过人，每组8次',
                    focus: '过人技术、灵活性'
                },
                {
                    name: '传中准度训练',
                    tips: '各种位置传中，每组10次',
                    focus: '传中精度'
                },
                {
                    name: '射门衔接步',
                    tips: '接球后射门衔接，每组8次',
                    focus: '衔接技术、射门时机'
                }
            ],
            'RM': [
                {
                    name: '30米反复冲刺',
                    tips: '边线冲刺30米，走回来，重复10次',
                    focus: '速度耐力、冲刺能力'
                },
                {
                    name: '内切步频练习',
                    tips: '边路内切步频练习，每组8次',
                    focus: '内切技术、步频'
                },
                {
                    name: '变向过人组合',
                    tips: '假动作 + 变向过人，每组8次',
                    focus: '过人技术、灵活性'
                },
                {
                    name: '传中准度训练',
                    tips: '各种位置传中，每组10次',
                    focus: '传中精度'
                },
                {
                    name: '射门衔接步',
                    tips: '接球后射门衔接，每组8次',
                    focus: '衔接技术、射门时机'
                }
            ],
            'AM': [
                {
                    name: '连续转身摆脱',
                    tips: '接球转身+过人组合，每组8次',
                    focus: '转身技术、过人衔接'
                },
                {
                    name: '视野扫描 + 传球',
                    tips: '模拟接球前观察后传球，每组10次',
                    focus: '视野、传球决策'
                },
                {
                    name: '远射练习',
                    tips: '各种位置远射，每组10次',
                    focus: '射门精度、力量'
                },
                {
                    name: '直传球练习',
                    tips: '传威胁球练习，每组10次',
                    focus: '传球精度、时机把握'
                }
            ],
            'LW': [
                {
                    name: '30米反复冲刺',
                    tips: '边线冲刺30米，走回来，重复10次',
                    focus: '速度耐力、冲刺能力'
                },
                {
                    name: '内切步频练习',
                    tips: '边路内切步频练习，每组8次',
                    focus: '内切技术、步频'
                },
                {
                    name: '变向过人组合',
                    tips: '假动作 + 变向过人，每组8次',
                    focus: '过人技术、灵活性'
                },
                {
                    name: '传中准度训练',
                    tips: '各种位置传中，每组10次',
                    focus: '传中精度'
                },
                {
                    name: '射门衔接步',
                    tips: '接球后射门衔接，每组8次',
                    focus: '衔接技术、射门时机'
                }
            ],
            'RW': [
                {
                    name: '30米反复冲刺',
                    tips: '边线冲刺30米，走回来，重复10次',
                    focus: '速度耐力、冲刺能力'
                },
                {
                    name: '内切步频练习',
                    tips: '边路内切步频练习，每组8次',
                    focus: '内切技术、步频'
                },
                {
                    name: '变向过人组合',
                    tips: '假动作 + 变向过人，每组8次',
                    focus: '过人技术、灵活性'
                },
                {
                    name: '传中准度训练',
                    tips: '各种位置传中，每组10次',
                    focus: '传中精度'
                },
                {
                    name: '射门衔接步',
                    tips: '接球后射门衔接，每组8次',
                    focus: '衔接技术、射门时机'
                }
            ],
            'CF': [
                {
                    name: '弹跳争顶练习',
                    tips: '跳跃争顶练习，每组10次',
                    focus: '弹跳、时机把握'
                },
                {
                    name: '禁区射门练习',
                    tips: '各种位置射门，每组15次',
                    focus: '射门精度、终结能力'
                },
                {
                    name: '支点护球 + 传球',
                    tips: '护球后回做传球，每组8次',
                    focus: '支点能力、配合意识'
                },
                {
                    name: '反越位冲刺',
                    tips: '反越位冲刺练习，每组8次',
                    focus: '时机把握、启动速度'
                },
                {
                    name: '头球攻门练习',
                    tips: '各种位置头球射门，每组10次',
                    focus: '头球技术、精度'
                }
            ],
            'ST': [
                {
                    name: '弹跳争顶练习',
                    tips: '跳跃争顶练习，每组10次',
                    focus: '弹跳、时机把握'
                },
                {
                    name: '禁区射门练习',
                    tips: '各种位置射门，每组15次',
                    focus: '射门精度、终结能力'
                },
                {
                    name: '支点护球 + 传球',
                    tips: '护球后回做传球，每组8次',
                    focus: '支点能力、配合意识'
                },
                {
                    name: '反越位冲刺',
                    tips: '反越位冲刺练习，每组8次',
                    focus: '时机把握、启动速度'
                },
                {
                    name: '头球攻门练习',
                    tips: '各种位置头球射门，每组10次',
                    focus: '头球技术、精度'
                }
            ]
        }
    },

    // ============ 周期框架 ============
    cycleFrameworks: {
        foundation: {
            name: '基础建立期',
            weekRange: 'Week 1-4',
            intensity: '中低',
            focus: '动作模式学习、核心稳定性建立',
            exerciseLevel: '基础'
        },
        build: {
            name: '强度提升期',
            weekRange: 'Week 5-8',
            intensity: '中高',
            focus: '增加负荷、强化专项',
            exerciseLevel: '基础/进阶'
        },
        peak: {
            name: '能力突破期',
            weekRange: 'Week 9-12',
            intensity: '高',
            focus: '高强度、复合动作',
            exerciseLevel: '进阶/挑战'
        },
        taper: {
            name: '巩固调整期',
            weekRange: 'Week 13-16',
            intensity: '中',
            focus: '技术精雕、恢复调整',
            exerciseLevel: '基础/进阶'
        }
    },

    // ============ 训练计划生成 ============
    generate: function(profile, analysis, customConfig) {
        // 根据用户选择，决定周期阶段
        // 简化版本：前4周基础建立，后4周强度提升
        const weeks = [];

        for (let w = 1; w <= 8; w++) {
            const cyclePhase = w <= 4 ? 'foundation' : 'build';
            const week = {
                week: w,
                theme: this.cycleFrameworks[cyclePhase].name,
                phase: cyclePhase,
                days: []
            };

            // 为每天生成训练内容
            customConfig.forEach(config => {
                if (config.category !== 'none') {
                    const dayPlan = this.generateDayPlan(
                        config.dayName,
                        config.category,
                        cyclePhase,
                        profile
                    );
                    week.days.push(dayPlan);
                }
            });

            weeks.push(week);
        }

        return {
            weeks: weeks,
            goal: {
                targetWeight: this.calculateTargetWeight(customConfig),
                focus: this.getTrainingFocus(customConfig)
            }
        };
    },

    generateDayPlan: function(dayName, category, cyclePhase, profile) {
        const modules = [];

        // ============ 1. 热身激活模块 ============
        const warmupExercises = this.exerciseLibrary.warmup.slice(0, 4);
        modules.push({
            title: '🔥 热身激活',
            duration: '10-15分钟',
            exercises: warmupExercises
        });

        // ============ 2. 主课模块 ============
        const mainExercises = this.getMainExercises(category, cyclePhase);
        modules.push({
            title: '💪 主课训练',
            exercises: mainExercises
        });

        // ============ 3. 爆发力模块（可选，强度提升期加入）==========
        if (cyclePhase !== 'taper' && category === 'full') {
            const powerExercises = this.exerciseLibrary.power.slice(0, 2);
            modules.push({
                title: '⚡ 爆发力训练',
                optional: true,
                exercises: powerExercises
            });
        }

        // ============ 4. 位置专项模块 ============
        const positionExercises = this.getPositionExercises(profile);
        if (positionExercises.length > 0) {
            modules.push({
                title: '🎯 位置专项',
                exercises: positionExercises
            });
        }

        // ============ 5. 恢复放松模块 ============
        const recoveryExercises = this.exerciseLibrary.recovery.slice(0, 5);
        modules.push({
            title: '🧘 恢复放松',
            exercises: recoveryExercises
        });

        return {
            dayName: dayName,
            category: category,
            modules: modules
        };
    },

    getMainExercises: function(category, cyclePhase) {
        let exercises = [];

        switch(category) {
            case 'lower':
                exercises = this.exerciseLibrary.lowerStrength.slice(0, 4);
                break;
            case 'upper':
                exercises = [
                    ...this.exerciseLibrary.upperStrength.slice(0, 3),
                    ...this.exerciseLibrary.coreStrength.slice(0, 2)
                ];
                break;
            case 'core':
                exercises = this.exerciseLibrary.coreStrength;
                break;
            case 'full':
                exercises = [
                    ...this.exerciseLibrary.lowerStrength.slice(0, 2),
                    ...this.exerciseLibrary.fullBody.slice(0, 2)
                ];
                break;
            case 'cardio':
                exercises = this.exerciseLibrary.cardio.slice(0, 2);
                break;
            case 'recovery':
                exercises = this.exerciseLibrary.recovery;
                break;
            case 'football':
                exercises = this.exerciseLibrary.cardio.slice(0, 2);
                break;
        }

        return exercises;
    },

    getPositionExercises: function(profile) {
        if (!profile || !profile.positions || profile.positions.length === 0) {
            return [];
        }

        const mainPosition = profile.positions[0];
        // 映射到我们有专项的位置
        const positionMap = {
            'GK': 'GK',
            'CB': 'CB',
            'LB': 'LB', 'LWB': 'LB',
            'RB': 'RB', 'RWB': 'RB',
            'DM': 'DM', 'CM': 'CM', 'AM': 'AM',
            'LM': 'LM', 'LW': 'LW',
            'RM': 'RM', 'RW': 'RW',
            'CF': 'CF', 'ST': 'ST'
        };

        const mappedPosition = positionMap[mainPosition] || 'CM';
        return this.exerciseLibrary.positionSpecific[mappedPosition] || [];
    },

    getDefaultOpenDay: function(totalDays) {
        return 0;
    },

    calculateTargetWeight: function(config) {
        const strengthDays = config.filter(d =>
            ['lower', 'upper', 'core', 'full'].includes(d.category)
        ).length;
        if (strengthDays >= 3) return '增肌';
        if (strengthDays >= 1) return '保持/塑形';
        return '保持';
    },

    getTrainingFocus: function(config) {
        const categories = config.map(d => d.category);
        const hasStrength = ['lower', 'upper', 'full'].some(c => categories.includes(c));
        const hasCardio = categories.includes('cardio');
        const hasFootball = categories.includes('football');

        if (hasStrength && hasCardio) return '综合能力提升';
        if (hasStrength) return '力量提升';
        if (hasCardio) return '耐力提升';
        if (hasFootball) return '足球专项';
        return '综合训练';
    },

    // ============ 渲染训练计划 ============
    render: function(plan) {
        const container = document.getElementById('plan-results');

        let html = `
            <div class="card">
                <h3>🎯 训练目标 · Training Goal</h3>
                <p style="color: var(--text-secondary);">
                    ${plan.goal.targetWeight} · ${plan.goal.focus}
                </p>
                <p style="color: var(--text-secondary); margin-top: 10px; font-size: 0.9rem;">
                    💡 提示：你可以根据当天状态调整模块，感觉累就跳过爆发力模块
                </p>
            </div>
        `;

        plan.weeks.forEach((week, weekIdx) => {
            html += `
                <div class="weekly-plan-section">
                    <h4>📅 ${week.theme} · ${week.weekRange || (week.week <= 4 ? '基础建立期' : '强度提升期')}</h4>
                    <div class="daily-tabs">
            `;

            // 渲染标签按钮
            week.days.forEach((day, dayIdx) => {
                const isActive = weekIdx === 0 && dayIdx === this.getDefaultOpenDay(week.days.length) ? ' active' : '';
                html += `
                    <button class="daily-tab${isActive}" data-week="${weekIdx}" data-day="${dayIdx}">
                        ${day.dayName}
                    </button>
                `;
            });

            html += `</div><div class="daily-tab-contents">`;

            // 渲染内容区
            week.days.forEach((day, dayIdx) => {
                const isActive = weekIdx === 0 && dayIdx === this.getDefaultOpenDay(week.days.length) ? ' active' : '';
                html += `<div class="daily-tab-content${isActive}" data-week="${weekIdx}" data-day="${dayIdx}">`;

                // 渲染每个模块
                day.modules.forEach(module => {
                    html += `
                        <div class="training-module">
                            <h5 class="module-title">${module.title}${module.optional ? '<span class="optional-badge"> (可选)</span>' : ''}${module.duration ? `<span style="font-size: 0.9rem; font-weight: normal; margin-left: 10px; color: var(--text-secondary);">${module.duration}</span>` : ''}</h5>
                            <div class="exercise-list">
                    `;

                    module.exercises.forEach(exercise => {
                        html += this.renderExercise(exercise);
                    });

                    html += `
                            </div>
                        </div>
                    `;
                });

                html += `</div>`;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
            <div style="text-align: center; margin-top: 24px;">
                <button class="btn btn-primary btn-large" onclick="App.switchTab('track')">
                    📈 前往训练追踪 · Go to Tracker
                </button>
            </div>
        `;

        container.innerHTML = html;
        this.bindTabEvents();
        return html;
    },

    renderExercise: function(exercise) {
        let metaParts = [];
        if (exercise.sets) metaParts.push(`${exercise.sets} 组`);
        if (exercise.reps) metaParts.push(`× ${exercise.reps} 次`);
        if (exercise.duration) metaParts.push(exercise.duration);
        if (exercise.rest) metaParts.push(`休息 ${exercise.rest}`);
        if (exercise.pace) metaParts.push(exercise.pace);

        const meta = metaParts.join(' · ');

        const levelColors = {
            '基础': 'background: rgba(16, 185, 129, 0.15); color: #059669;',
            '进阶': 'background: rgba(245, 158, 11, 0.15); color: #d97706;',
            '挑战': 'background: rgba(239, 68, 68, 0.15); color: #dc2626;'
        };

        const levelBadge = exercise.level ? `
            <span class="exercise-level-badge" style="${levelColors[exercise.level] || ''}">
                ${exercise.level}
            </span>
        ` : '';

        const focusBadge = exercise.focus ? `
            <span style="background: rgba(108, 171, 221, 0.15); color: #1e40af; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; margin-left: 10px;">
                🎯 ${exercise.focus}
            </span>
        ` : '';

        let tipsHtml = '';
        if (exercise.tips) {
            if (Array.isArray(exercise.tips)) {
                tipsHtml = `
                    <ul style="margin-top: 10px; color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        ${exercise.tips.map(tip => `<li>✅ ${tip}</li>`).join('')}
                    </ul>
                `;
            } else {
                tipsHtml = `<p style="margin-top: 10px; color: var(--text-secondary); font-size: 0.9rem;">💡 ${exercise.tips}</p>`;
            }
        }

        let mistakesHtml = '';
        if (exercise.mistakes && exercise.mistakes.length > 0) {
            mistakesHtml = `
                <p style="margin-top: 8px; color: #dc2626; font-size: 0.85rem;">
                    ❌ 常见错误：${exercise.mistakes.join(' · ')}
                </p>
            `;
        }

        let descriptionHtml = exercise.description ? `
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 8px;">
                ${exercise.description}
            </p>
        ` : '';

        let targetHtml = exercise.target ? `
            <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 6px;">
                📌 目标：${exercise.target}
            </p>
        ` : '';

        return `
            <div class="exercise-item">
                <div class="exercise-info">
                    <div class="exercise-name" style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                        ${exercise.name}
                        ${levelBadge}
                        ${focusBadge}
                    </div>
                    ${meta ? `<div class="exercise-meta">${meta}</div>` : ''}
                    ${targetHtml}
                    ${tipsHtml}
                    ${mistakesHtml}
                    ${descriptionHtml}
                </div>
            </div>
        `;
    },

    // ============ 标签事件绑定 ============
    bindTabEvents: function() {
        document.querySelectorAll('.daily-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const weekIdx = tab.dataset.week;
                const dayIdx = tab.dataset.day;
                const weekContainer = tab.closest('.weekly-plan-section');
                const isAlreadyActive = tab.classList.contains('active');

                weekContainer.querySelectorAll('.daily-tab').forEach(t => t.classList.remove('active'));
                weekContainer.querySelectorAll('.daily-tab-content').forEach(c => c.classList.remove('active'));

                if (!isAlreadyActive) {
                    tab.classList.add('active');
                    weekContainer.querySelector(`.daily-tab-content[data-week="${weekIdx}"][data-day="${dayIdx}"]`).classList.add('active');
                }
            });
        });
    }
};
