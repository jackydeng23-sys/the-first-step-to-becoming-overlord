/**
 * 训练计划生成模块
 * 支持自定义周训练计划
 */

const TrainingPlan = {
    // 不同训练分类的训练动作库
    exerciseLibrary: {
        lower: [ // 下肢力量
            {
                name: '深蹲',
                sets: 4,
                reps: 12,
                rest: '90秒',
                description: '双脚与肩同宽，腰背挺直，下蹲至大腿平行地面',
                intensity: 'high',
                focus: ['股四头肌', '臀部', '核心']
            },
            {
                name: '罗马尼亚硬拉',
                sets: 4,
                reps: 10,
                rest: '90秒',
                description: '手持哑铃/杠铃，腰背挺直，屈髋向后，感受大腿后侧拉伸',
                intensity: 'high',
                focus: ['大腿后侧', '臀部', '下背']
            },
            {
                name: '箭步蹲',
                sets: 3,
                reps: '10/腿',
                rest: '60秒',
                description: '向前跨步下蹲，膝盖不超过脚尖',
                intensity: 'medium',
                focus: ['腿部', '平衡', '核心']
            },
            {
                name: '小腿提踵',
                sets: 3,
                reps: 20,
                rest: '45秒',
                description: '站在台阶边缘，提起脚跟再缓慢放下',
                intensity: 'low',
                focus: ['小腿']
            },
            {
                name: '侧向弓步',
                sets: 3,
                reps: '10/腿',
                rest: '60秒',
                description: '向侧方跨步下蹲，锻炼侧向移动能力',
                intensity: 'medium',
                focus: ['大腿内侧', '臀部', '侧向稳定性']
            },
            {
                name: '保加利亚分腿蹲',
                sets: 3,
                reps: '8-10/腿',
                rest: '75秒',
                description: '后脚放在台阶上，增强单腿力量',
                intensity: 'high',
                focus: ['单腿力量', '平衡', '臀部']
            }
        ],
        upper: [ // 上肢力量
            {
                name: '俯卧撑',
                sets: 4,
                reps: '8-15',
                rest: '60秒',
                description: '如果困难可以做膝跪俯卧撑',
                intensity: 'medium',
                focus: ['胸部', '三头肌', '肩膀']
            },
            {
                name: '俯身划船',
                sets: 3,
                reps: '12/侧',
                rest: '60秒',
                description: '俯身哑铃划船，锻炼背阔肌',
                intensity: 'medium',
                focus: ['背部', '二头肌', '核心']
            },
            {
                name: '平板支撑',
                sets: 4,
                reps: '30-60秒',
                rest: '45秒',
                description: '保持身体成一条直线，核心收紧',
                intensity: 'medium',
                focus: ['核心', '稳定性']
            },
            {
                name: '侧平板',
                sets: 3,
                reps: '20秒/侧',
                rest: '45秒',
                description: '侧身撑住，锻炼侧腹',
                intensity: 'medium',
                focus: ['侧腹', '核心稳定性']
            },
            {
                name: '臀桥',
                sets: 4,
                reps: 15,
                rest: '45秒',
                description: '平躺，抬起臀部，感受臀部收缩',
                intensity: 'low',
                focus: ['臀部', '下背', '核心']
            },
            {
                name: '俄式转体',
                sets: 3,
                reps: '20/侧',
                rest: '45秒',
                description: '坐姿转体，可手持哑铃，锻炼核心旋转力量',
                intensity: 'medium',
                focus: ['旋转力量', '核心']
            }
        ],
        core: [ // 核心专项
            {
                name: '平板支撑',
                sets: 4,
                reps: '45-60秒',
                rest: '45秒',
                description: '核心静态收缩',
                intensity: 'medium',
                focus: ['核心', '躯干稳定性']
            },
            {
                name: '悬垂举腿',
                sets: 3,
                reps: 10,
                rest: '60秒',
                description: '悬垂在单杠上举腿到髋',
                intensity: 'high',
                focus: ['下腹', '屈髋']
            },
            {
                name: '侧平板支撑',
                sets: 3,
                reps: '30秒/侧',
                rest: '45秒',
                description: '单侧支撑',
                intensity: 'medium',
                focus: ['侧腹', '抗扭转']
            },
            {
                name: '鸟狗式',
                sets: 3,
                reps: '10/侧',
                rest: '30秒',
                description: '四点支撑交替伸展，锻炼核心稳定性',
                intensity: 'low',
                focus: ['核心', '稳定性']
            }
        ],
        full: [ // 全身
            {
                name: '深蹲跳',
                sets: 3,
                reps: '8-10',
                rest: '90秒',
                description: '深蹲后向上跳起，锻炼爆发力',
                intensity: 'high',
                focus: ['爆发力', '腿部', '弹跳']
            },
            {
                name: '俯卧撑击掌',
                sets: 3,
                reps: '5-10',
                rest: '60秒',
                description: '俯卧撑推起后击掌，增强上肢爆发力',
                intensity: 'high',
                focus: ['上肢爆发力', '胸部']
            },
            {
                name: '保加利亚分腿蹲',
                sets: 3,
                reps: '8-10/腿',
                rest: '75秒',
                description: '后脚放在板凳上，增强单腿力量',
                intensity: 'high',
                focus: ['单腿力量', '平衡']
            },
            {
                name: '登山者',
                sets: 4,
                reps: '30秒',
                rest: '45秒',
                description: '平板姿势快速交替提膝',
                intensity: 'high',
                focus: ['核心', '心肺', '协调性']
            },
            {
                name: '壶铃摇摆',
                sets: 3,
                reps: 12,
                rest: '60秒',
                description: '用臀部发力摆动壶铃',
                intensity: 'medium',
                focus: ['臀部', '大腿后侧', '核心']
            }
        ],
        cardio: [ // 耐力有氧
            {
                name: '持续慢跑',
                duration: '20-30分钟',
                pace: '中等强度',
                description: '保持匀速慢跑，锻炼基础耐力',
                intensity: 'medium',
                focus: ['心肺耐力', '全身耐力']
            },
            {
                name: '间歇跑',
                description: '冲刺30秒 + 慢跑60秒，重复10次',
                intensity: 'high',
                focus: ['速度耐力', '爆发力']
            },
            {
                name: '有氧自行车',
                duration: '30分钟',
                intensity: 'medium',
                description: '固定自行车有氧',
                intensity: 'medium',
                focus: ['心肺', '腿部']
            },
            {
                name: '持续游泳',
                duration: '20-30分钟',
                intensity: 'medium',
                description: '游泳有氧对膝关节友好',
                intensity: 'medium',
                focus: ['全身', '心肺']
            }
        ],
        recovery: [ // 恢复灵活性
            {
                name: '泡沫轴放松',
                duration: '15分钟',
                description: '泡沫轴滚腿背，放松紧张肌肉',
                intensity: 'low',
                focus: ['肌肉放松', '筋膜']
            },
            {
                name: '全身静态拉伸',
                duration: '10-15分钟',
                description: '每个动作拉伸保持30-60秒',
                intensity: 'low',
                focus: ['柔韧性', '恢复']
            },
            {
                name: '轻松散步',
                duration: '20-30分钟',
                intensity: 'low',
                description: '低强度活动促进血液循环',
                intensity: 'low',
                focus: ['恢复']
            },
            {
                name: '瑜伽',
                duration: '30分钟',
                intensity: 'low',
                description: '拉伸+呼吸，提高柔韧性',
                intensity: 'low',
                focus: ['柔韧性', '身心放松']
            }
        ],
        football: [ // 足球专项
            {
                name: '传球练习',
                duration: '15分钟',
                description: '短传+长传练习',
                focus: ['传球精度', '脚法']
            },
            {
                name: '带球绕桩',
                duration: '15分钟',
                description: '绕标志桶运球，提高盘带',
                focus: ['盘带', '控球']
            },
            {
                name: '防守站位一对一',
                duration: '15分钟',
                description: '和队友练习一对一防守站位',
                focus: ['防守站位', '一对一']
            },
            {
                name: '边路传中练习',
                duration: '15分钟',
                description: '从边路插上完成传中',
                focus: ['插上时机', '传中精准度']
            },
            {
                name: '回追冲刺练习',
                duration: '10分钟',
                description: '反复进行回追后的冲刺跑',
                focus: ['回追速度', '耐力']
            }
        ]
    },

    /**
     * 生成自定义训练计划
     */
    /**
     * 生成自定义训练计划
     * profile: 用户档案，analysis: 分析结果，customConfig: 自定义配置 [{dayName: '周一', category: 'lower'}, ...]
     */
    generate(profile, analysis, customConfig) {
        // customConfig = [{day: '周一', category: 'lower'}, ...]
        const weeks = [];

        for (let w = 1; w <= 4; w++) { // 4周训练
            const week = {
                week: w,
                theme: this.getWeekTheme(w),
                days: []
            };

            customConfig.forEach(config => {
                const exercises = this.getExercisesForCategory(config.category);
                const day = {
                    dayName: config.dayName,
                    category: config.category,
                    exercises: exercises
                };
                week.days.push(day);
            });

            weeks.push(week);
        }

        return {
            weeks,
            goal: {
                targetWeight: this.calculateTargetWeight(customConfig),
                focus: this.getTrainingFocus(customConfig)
            }
        };
    },

    getWeekTheme(weekNum) {
        const themes = ['基础建立', '强度提升', '能力突破', '巩固提高'];
        return themes[weekNum - 1] || '继续进步';
    },

    getExercisesForCategory(category) {
        const libraryMap = {
            lower: this.exerciseLibrary.lower,
            upper: this.exerciseLibrary.upper,
            core: this.exerciseLibrary.core,
            full: this.exerciseLibrary.full,
            cardio: this.exerciseLibrary.cardio,
            recovery: this.exerciseLibrary.recovery,
            football: this.exerciseLibrary.football
        };
        return libraryMap[category] || [];
    },

    calculateTargetWeight(config) {
        // 简单根据训练频次和力量训练天数估算目标增重
        let hasStrength = config.filter(d =>
            d.category === 'lower' || d.category === 'upper' || d.category === 'core' || d.category === 'full'
        ).length;
        return hasStrength > 0 ? '增肌' : '保持';
    },

    getTrainingFocus(config) {
        const categories = config.map(d => d.category);
        if (categories.includes('cardio') && categories.includes('lower')) {
            return '增肌+耐力';
        }
        if (categories.includes('recovery')) {
            return '康复提高';
        }
        return '混合训练';
    },

    /**
     * 渲染训练计划到页面，一天一页标签切换式
     */
    render(plan) {
        const container = document.getElementById('plan-results');
        let html = `
            <div class="card">
                <h3>🎯 Training Goal · 训练目标</h3>
                <p style="color: var(--text-secondary);">${plan.goal.targetWeight} - ${plan.goal.focus}</p>
            </div>
        `;

        plan.weeks.forEach((week, weekIdx) => {
            html += `
                <div class="weekly-plan-section">
                    <h4>📅 Week ${week.week} · ${week.theme}</h4>
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

                if (day.exercises.length > 0) {
                    html += `<div class="exercise-list">`;
                    day.exercises.forEach(ex => {
                        html += `
                            <div class="exercise-item">
                                <div class="exercise-info">
                                    <div class="exercise-name">${ex.name}</div>
                                    <div class="exercise-meta">
                                        ${ex.sets ? `${ex.sets} × ${ex.reps}` : ''}
                                        ${ex.duration ? `${ex.duration}` : ''}
                                        ${ex.rest ? ` | 休息 ${ex.rest}` : ''}
                                    </div>
                                    ${ex.description ? `<p class="exercise-desc">${ex.description}</p>` : ''}
                                    ${ex.focus ? `<div class="exercise-focus">💪 ${ex.focus.join(' · ')}</div>` : ''}
                                </div>
                            </div>
                        `;
                    });
                    html += `</div>`;
                }
                html += `</div>`;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
            <div style="text-align: center; margin-top: 24px;">
                <button class="btn btn-primary btn-large" onclick="App.switchTab('track');">
                    📈 Go to Tracker · 去训练追踪
                </button>
            </div>
        `;

        container.innerHTML = html;
        this.bindTabEvents();
        return html;
    },

    getDefaultOpenDay(totalDays) {
        // 安全地返回一个有效的索引，总是返回第一天 (0)
        // 避免索引越界问题
        return 0;
    },

    /**
     * 渲染后绑定标签切换事件
     */
    bindTabEvents() {
        document.querySelectorAll('.daily-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const weekIdx = tab.dataset.week;
                const dayIdx = tab.dataset.day;
                const weekContainer = tab.closest('.weekly-plan-section');
                const isAlreadyActive = tab.classList.contains('active');

                // 关闭同一周的所有标签和内容
                weekContainer.querySelectorAll('.daily-tab').forEach(t => t.classList.remove('active'));
                weekContainer.querySelectorAll('.daily-tab-content').forEach(c => c.classList.remove('active'));

                // 如果之前不是激活状态，才激活当前；否则就是折叠了
                if (!isAlreadyActive) {
                    tab.classList.add('active');
                    weekContainer.querySelector(`.daily-tab-content[data-week="${weekIdx}"][data-day="${dayIdx}"]`).classList.add('active');
                }
            });
        });
    }
};

