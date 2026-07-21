/**
 * 主程序文件 - 支持档案保存和自定义计划
 */

const App = {
    profile: null,
    analysis: null,
    plan: null,

    init() {
        this.setupTabs();
        this.setupBackToTop();
        this.setupProfileActions();
        this.setupGenerateButton();
        this.setupPlanActions(); // 设置训练计划存档操作
        this.initCustomPlanConfig();
        this.loadSavedProfiles(); // 加载历史档案列表，默认空
        this.loadSavedPlans(); // 加载历史训练计划列表
        this.bindProfileLoadEvents();
        this.bindPlanLoadEvents(); // 绑定训练计划加载事件
    },

    setupTabs() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchTab(btn.dataset.tab);
            });
        });
    },

    setupBackToTop() {
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    setupProfileActions() {
        // 保存当前档案
        document.getElementById('save-current-profile').addEventListener('click', () => {
            this.saveCurrentProfile();
        });

        // 清空当前表单
        document.getElementById('clear-current-profile').addEventListener('click', () => {
            this.clearCurrentProfile();
        });

        // 保存并生成分析按钮
        document.getElementById('save-profile-btn').addEventListener('click', () => {
            this.saveAndAnalyze();
        });
    },

    /**
     * 保存档案并生成分析
     */
    saveAndAnalyze() {
        this.profile = UserProfile.collectFromForm();
        if (!this.profile) {
            this.showNotification('❌ 请填写完整个人信息', 'warning');
            return;
        }

        // 保存到 localStorage
        DataStore.saveUserProfile(this.profile);

        // 生成分析并渲染
        this.analysis = UserProfile.generateAnalysis(this.profile);
        UserProfile.renderAnalysis(this.profile, this.analysis);

        this.switchTab('analysis');
        this.showNotification('✅ 分析已生成！', 'success');
    },

    saveCurrentProfile() {
        const profile = UserProfile.collectFromForm();
        if (!profile) {
            this.showNotification('❌ 请先填写个人信息', 'warning');
            return;
        }

        // 弹出让用户输入名称
        const name = prompt('🏋️ 请给这份档案起个名字：');
        if (!name || name.trim().length === 0) {
            return;
        }

        if (DataStore.saveProfileArchive(name.trim(), profile)) {
            this.showNotification(`✅ 已保存档案 "${name}"`, 'success');
            this.loadSavedProfiles();
        } else {
            this.showNotification('❌ 保存失败', 'error');
        }
    },

    clearCurrentProfile() {
        // 清空基本信息
        ['age', 'height', 'weight', 'experience', 'matches-week'].forEach(id => {
            document.getElementById(id).value = '';
        });

        // 清空惯用脚
        document.querySelectorAll('input[name="preferred-foot"]').forEach(radio => {
            radio.checked = false;
        });

        // 清空所有多选框
        document.querySelectorAll('input[name="position"]').forEach(cb => {
            cb.checked = false;
        });
        document.querySelectorAll('#football-info-form input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });

        // 清空所有评分单选框 - 不选中任何选项
        const ratingNames = ['speed', 'dribbling', 'passing', 'shooting', 'tackling', 'stamina', 'strength', 'heading', 'vision', 'aggression'];
        ratingNames.forEach(name => {
            document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
                radio.checked = false;
            });
        });

        // 清空伤病历史
        document.getElementById('injury-history').value = '';

        this.profile = null;
        this.analysis = null;
        document.getElementById('analysis-results').innerHTML = `<div class="placeholder">👆 请先填写个人档案。</div>`;
        document.getElementById('plan-results').innerHTML = `<div class="placeholder">👆 先完成上方配置，再生成训练计划。</div>`;
        this.loadSavedProfiles();
        this.showNotification('🗑️ 表单已清空', 'info');
    },

    loadProfile(index) {
        const archives = DataStore.loadProfileArchives();
        const archive = archives[index];
        UserProfile.fillForm(archive.data);
        this.profile = archive.data;
        this.showNotification(`📂 已加载档案 "${archive.name}"`, 'success');
    },

    deleteProfile(index) {
        const archives = DataStore.loadProfileArchives();
        const {name} = archives[index];
        if (confirm(`😮 确认删除 "${name}" 吗？`)) {
            DataStore.deleteProfileArchive(index);
            this.loadSavedProfiles();
            this.showNotification(`🗑️ 已删除 "${name}"`, 'success');
        }
    },

    loadSavedProfiles() {
        const container = document.getElementById('saved-profiles-list');
        const archives = DataStore.loadProfileArchives();

        if (archives.length === 0) {
            container.innerHTML = `<div class="placeholder" style="padding: 20px;">📝 暂无保存，添加一份吧</div>`;
            return;
        }

        container.innerHTML = '';
        archives.forEach((archive, index) => {
            const div = document.createElement('div');
            div.className = 'saved-profile-item';
            div.innerHTML = `
                <span class="saved-profile-name">${archive.name}</span>
                <div class="saved-profile-actions">
                    <button class="btn btn-primary load-saved" data-index="${index}">📂 载入</button>
                    <button class="btn delete-saved" style="background: #ef4444; color: white;" data-index="${index}">🗑️ 删除</button>
                </div>
            `;
            container.appendChild(div);
        });
    },

    // ========== 训练计划存档相关 ==========

    setupPlanActions() {
        // 保存当前计划配置
        document.getElementById('save-current-plan').addEventListener('click', () => {
            this.saveCurrentPlan();
        });
    },

    saveCurrentPlan() {
        // 收集当前配置
        const config = this.collectPlanConfig();
        if (!config || config.length === 0) {
            this.showNotification('⚠️ 请先配置训练计划', 'warning');
            return;
        }

        const name = prompt('🏋️ 请给这个训练计划起个名字：');
        if (!name || name.trim().length === 0) {
            return;
        }

        if (DataStore.savePlanArchive(name.trim(), config)) {
            this.showNotification(`✅ 已保存计划 "${name}"`, 'success');
            this.loadSavedPlans();
        } else {
            this.showNotification('❌ 保存失败', 'error');
        }
    },

    collectPlanConfig() {
        const config = [];
        document.querySelectorAll('#training-days-row select').forEach(select => {
            const dayName = select.dataset.day;
            const category = select.value;
            config.push({ dayName, category });
        });
        return config;
    },

    loadSavedPlans() {
        const container = document.getElementById('saved-plans-list');
        const archives = DataStore.loadPlanArchives();

        if (archives.length === 0) {
            container.innerHTML = `<div class="placeholder" style="padding: 20px;">📝 暂无保存，添加一份吧</div>`;
            return;
        }

        container.innerHTML = '';
        archives.forEach((archive, index) => {
            const div = document.createElement('div');
            div.className = 'saved-profile-item';
            div.innerHTML = `
                <span class="saved-profile-name">${archive.name}</span>
                <div class="saved-profile-actions">
                    <button class="btn btn-primary load-plan" data-index="${index}">📂 载入</button>
                    <button class="btn delete-plan" style="background: #ef4444; color: white;" data-index="${index}">🗑️ 删除</button>
                </div>
            `;
            container.appendChild(div);
        });
    },

    bindPlanLoadEvents() {
        document.getElementById('saved-plans-list').addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('load-plan')) {
                const index = parseInt(target.dataset.index);
                this.loadPlan(index);
            } else if (target.classList.contains('delete-plan')) {
                const index = parseInt(target.dataset.index);
                this.deletePlan(index);
            }
        });
    },

    loadPlan(index) {
        const archives = DataStore.loadPlanArchives();
        const archive = archives[index];
        if (!archive) return;

        // 把存档的配置应用到下拉框
        const configMap = {};
        archive.config.forEach(item => {
            configMap[item.dayName] = item.category;
        });

        document.querySelectorAll('#training-days-row select').forEach(select => {
            const dayName = select.dataset.day;
            if (configMap[dayName]) {
                select.value = configMap[dayName];
            }
        });

        this.showNotification(`📂 已加载计划 "${archive.name}"`, 'success');
    },

    deletePlan(index) {
        const archives = DataStore.loadPlanArchives();
        const { name } = archives[index];
        if (confirm(`😮 确认删除 "${name}" 吗？`)) {
            DataStore.deletePlanArchive(index);
            this.loadSavedPlans();
            this.showNotification(`🗑️ 已删除 "${name}"`, 'success');
        }
    },

    /**
     * 初始化自定义计划配置界面
     * 生成一周七天的下拉选择
     */
    initCustomPlanConfig() {
        const container = document.getElementById('training-days-row');
        const daysOfWeek = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        const categories = [
            { value: 'none', label: '无训练' },
            { value: 'lower', label: '下肢力量' },
            { value: 'upper', label: '上肢力量' },
            { value: 'core', label: '核心专项' },
            { value: 'full', label: '全身训练' },
            { value: 'cardio', label: '耐力有氧' },
            { value: 'recovery', label: '恢复放松' },
            { value: 'football', label: '足球专项' }
        ];

        let html = '';
        daysOfWeek.forEach(day => {
            let options = categories.map(cat =>
                `<option value="${cat.value}">${cat.label}</option>`
            ).join('');
            // 默认周六足球专项，其他根据情况设置
            const defaultValue = day === '周六' ? 'football' : (day === '周日' ? 'recovery' : 'none');
            html += `
                <div class="custom-day-select">
                    <label style="font-size: 0.85rem; margin-bottom: 6px; display: block;">${day}</label>
                    <select data-day="${day}">
                        ${categories.map(cat =>
                            `<option value="${cat.value}" ${cat.value === defaultValue ? 'selected' : ''}>${cat.label}</option>`
                        ).join('')}
                    </select>
                </div>
            `;
        });
        container.innerHTML = html;
    },

    /**
     * 绑定生成按钮事件
     */
    setupGenerateButton() {
        document.getElementById('generate-custom-plan').addEventListener('click', () => {
            this.generateCustomPlan();
        });
    },

    /**
     * 绑定已保存档案列表的事件代理
     */
    bindProfileLoadEvents() {
        document.getElementById('saved-profiles-list').addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('load-saved')) {
                const index = parseInt(target.dataset.index);
                this.loadProfile(index);
            } else if (target.classList.contains('delete-saved')) {
                const index = parseInt(target.dataset.index);
                this.deleteProfile(index);
            }
        });
    },

    /**
     * 收集自定义配置并生成训练计划
     */
    generateCustomPlan() {
        this.profile = UserProfile.collectFromForm();
        if (!this.profile) {
            this.showNotification('⚠️ 请先填写个人信息', 'warning');
            return;
        }

        // 收集自定义配置
        const customConfig = [];
        document.querySelectorAll('#training-days-row select').forEach(select => {
            const dayName = select.dataset.day;
            const category = select.value;
            if (category !== 'none') {
                customConfig.push({ dayName, category });
            }
        });

        if (customConfig.length === 0) {
            this.showNotification('⚠️ 请至少选择一天训练', 'warning');
            return;
        }

        // 生成分析和计划
        this.analysis = UserProfile.generateAnalysis(this.profile);
        UserProfile.renderAnalysis(this.profile, this.analysis);
        this.plan = TrainingPlan.generate(this.profile, this.analysis, customConfig);
        TrainingPlan.render(this.plan);
        this.switchTab('plan');
        this.showNotification('✅ 训练计划已生成！', 'success');
    },

    switchTab(tabId) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    showNotification(message, type) {
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#6CABDD',
        };

        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 18px 26px;
            background: linear-gradient(135deg, ${colors[type]} 0%, ${colors[type]}cc 100%);
            color: ${type === 'warning' || type === 'info' ? '#1C2C5B' : 'white'};
            border-radius: 16px;
            font-weight: 700;
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
            z-index: 99999;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 4000);
    },

    // ========== 训练追踪功能 ==========

    /**
     * 渲染训练追踪日历
     */
    renderTrainingTracker() {
        const container = document.getElementById('track-content');
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();

        // 获取统计
        const stats = DataStore.getWeeklyStats();

        let html = `
            <div class="card">
                <h3>📊 Weekly Progress · 本周进度</h3>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${stats.percentage}%"></div>
                </div>
                <p style="text-align: center; font-size: 1.15rem; font-weight: 700; color: var(--primary-dark);">
                    ${stats.completed} / ${stats.total} (${stats.percentage}%)
                </p>
            </div>

            <div class="card track-calendar">
                <h3>🗓️ Training Calendar · 训练日历</h3>
                <div class="day-grid">
                    <div class="day-name">日</div>
                    <div class="day-name">一</div>
                    <div class="day-name">二</div>
                    <div class="day-name">三</div>
                    <div class="day-name">四</div>
                    <div class="day-name">五</div>
                    <div class="day-name">六</div>
        `;

        // 获取当月第一天是星期几
        const firstDay = new Date(year, month, 1);
        const startingDay = firstDay.getDay(); // 0 = 周日
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // 获取已完成的日期
        const logs = DataStore.loadWorkoutLogs();
        const completedDates = new Set(
            logs.filter(l => l.completed).map(l => l.date.split('T')[0])
        );

        // 填充前面的空格
        for (let i = 0; i < startingDay; i++) {
            html += `<div></div>`;
        }

        // 填充日期
        const todayStr = today.toISOString().split('T')[0];
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isToday = dateStr === todayStr;
            const isCompleted = completedDates.has(dateStr);
            const classes = `day-card ${isCompleted ? 'completed' : ''} ${isToday ? 'today' : ''}`;
            const dayName = ['日', '一', '二', '三', '四', '五', '六'][(startingDay + day - 1) % 7];

            html += `
                <div class="${classes}" data-date="${dateStr}">
                    <div class="day-name">${dayName}</div>
                    <div class="day-number">${day}</div>
                </div>
            `;
        }

        html += `
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <p style="color: var(--text-secondary);">
                        点击日期标记训练完成 · Click date to mark as completed
                    </p>
                </div>
            </div>

            <div class="card">
                <h3>💡 Tips · 提示</h3>
                <ul style="color: var(--text-secondary); line-height: 1.8; margin-left: 20px;">
                    <li>每天训练完成后记得标记，帮你坚持习惯</li>
                    <li>系统会自动统计本周完成率</li>
                    <li>数据保存在本地，不会丢失</li>
                </ul>
            </div>
        `;

        container.innerHTML = html;

        // 绑定点击事件
        container.querySelectorAll('.day-card').forEach(card => {
            if (card.dataset.date) {
                card.addEventListener('click', () => {
                    this.toggleDateCompletion(card);
                    this.renderTrainingTracker(); // 重新渲染更新进度
                });
            }
        });
    },

    /**
     * 切换日期完成状态
     */
    toggleDateCompletion(card) {
        const date = card.dataset.date;
        const isCompleted = card.classList.contains('completed');
        DataStore.markWorkoutComplete(date, !isCompleted);

        if (isCompleted) {
            card.classList.remove('completed');
            this.showNotification(`❌ 已取消标记 ${date}`, 'info');
        } else {
            card.classList.add('completed');
            this.showNotification(`✅ ${date} 训练完成！`, 'success');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
    // 切换标签时重新渲染追踪日历
    document.querySelector('.tab-btn[data-tab="track"]').addEventListener('click', () => {
        App.renderTrainingTracker();
    });
});
