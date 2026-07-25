/**
 * 数据存储模块
 * 使用 localStorage 存储用户数据
 */

const DataStore = {
    KEYS: {
        USER_PROFILE: 'fitness_user_profile',
        WORKOUT_LOGS: 'fitness_workout_logs',
        TRAINING_PLAN: 'fitness_training_plan',
        SAVED_PROFILES: 'fitness_saved_profiles',
        SAVED_PLANS: 'fitness_saved_plans',
        LAST_SESSION: 'fitness_last_session',
        USER_ANALYSIS: 'fitness_user_analysis',
        LAST_PLAN_CONFIG: 'fitness_last_plan_config'
    },

    /**
     * 保存数据到 localStorage
     */
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('保存数据失败:', error);
            return false;
        }
    },

    /**
     * 从 localStorage 读取数据
     */
    load(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            if (data === null) {
                return defaultValue;
            }
            return JSON.parse(data);
        } catch (error) {
            console.error('读取数据失败:', error);
            return defaultValue;
        }
    },

    /**
     * 删除数据
     */
    remove(key) {
        localStorage.removeItem(key);
    },

    /**
     * 保存用户档案
     */
    saveUserProfile(profile) {
        return this.save(this.KEYS.USER_PROFILE, {
            ...profile,
            updatedAt: new Date().toISOString()
        });
    },

    /**
     * 加载用户档案
     */
    loadUserProfile() {
        return this.load(this.KEYS.USER_PROFILE, null);
    },

    /**
     * 保存训练计划
     */
    saveTrainingPlan(plan) {
        return this.save(this.KEYS.TRAINING_PLAN, {
            ...plan,
            createdAt: new Date().toISOString()
        });
    },

    /**
     * 加载训练计划
     */
    loadTrainingPlan() {
        return this.load(this.KEYS.TRAINING_PLAN, null);
    },

    /**
     * 保存训练日志
     */
    saveWorkoutLog(log) {
        const logs = this.loadWorkoutLogs();
        logs.push({
            ...log,
            id: Date.now(),
            createdAt: new Date().toISOString()
        });
        return this.save(this.KEYS.WORKOUT_LOGS, logs);
    },

    /**
     * 加载训练日志
     */
    loadWorkoutLogs() {
        return this.load(this.KEYS.WORKOUT_LOGS, []);
    },

    /**
     * 获取指定日期的训练记录
     */
    getWorkoutByDate(date) {
        const logs = this.loadWorkoutLogs();
        return logs.filter(log => log.date === date);
    },

    /**
     * 标记日期的训练完成
     */
    markWorkoutComplete(date, completed = true) {
        // 确保日期格式统一 (YYYY-MM-DD)
        let dateStr = date;
        if (dateStr.includes('T')) {
            dateStr = dateStr.split('T')[0];
        }

        const logs = this.loadWorkoutLogs();
        const existingIndex = logs.findIndex(log => {
            let logDate = log.date;
            if (logDate.includes('T')) {
                logDate = logDate.split('T')[0];
            }
            return logDate === dateStr;
        });

        if (existingIndex >= 0) {
            logs[existingIndex].completed = completed;
            logs[existingIndex].completedAt = new Date().toISOString();
        } else {
            logs.push({
                date: dateStr,
                completed,
                completedAt: new Date().toISOString()
            });
        }

        return this.save(this.KEYS.WORKOUT_LOGS, logs);
    },

    /**
     * 获取每周完成统计
     */
    getWeeklyStats() {
        const logs = this.loadWorkoutLogs();
        const now = new Date();
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        weekStart.setHours(0, 0, 0, 0);

        let completed = 0;
        let total = 0;

        logs.forEach(log => {
            // 处理日期字符串，兼容不同格式
            let dateStr = log.date;
            if (dateStr.includes('T')) {
                dateStr = dateStr.split('T')[0];
            }
            const logDate = new Date(dateStr);
            logDate.setHours(0, 0, 0, 0);

            if (logDate >= weekStart) {
                total++;
                if (log.completed) completed++;
            }
        });

        return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
    },

    /**
     * 清除所有数据
     */
    clearAll() {
        Object.values(this.KEYS).forEach(key => this.remove(key));
    },

    // ========== 新增：归档保存 ==========

    /**
     * 保存已命名档案到归档
     */
    saveProfileArchive(profileName, profileData) {
        const archives = this.loadProfileArchives();
        archives.push({
            name: profileName,
            data: profileData,
            savedAt: new Date().toISOString()
        });
        return this.save(this.KEYS.SAVED_PROFILES, archives);
    },

    /**
     * 加载所有已归档档案
     */
    loadProfileArchives() {
        return this.load(this.KEYS.SAVED_PROFILES, []);
    },

    /**
     * 删除归档中的一个档案
     */
    deleteProfileArchive(index) {
        const archives = this.loadProfileArchives();
        archives.splice(index, 1);
        return this.save(this.KEYS.SAVED_PROFILES, archives);
    },

    // ========== 新增：训练计划存档 ==========

    /**
     * 保存已命名训练计划到归档
     */
    savePlanArchive(planName, planConfig) {
        const archives = this.loadPlanArchives();
        archives.push({
            name: planName,
            config: planConfig,
            savedAt: new Date().toISOString()
        });
        return this.save(this.KEYS.SAVED_PLANS, archives);
    },

    /**
     * 加载所有已归档训练计划
     */
    loadPlanArchives() {
        return this.load(this.KEYS.SAVED_PLANS, []);
    },

    /**
     * 删除归档中的一个训练计划
     */
    deletePlanArchive(index) {
        const archives = this.loadPlanArchives();
        archives.splice(index, 1);
        return this.save(this.KEYS.SAVED_PLANS, archives);
    },

    // ========== 会话状态管理 ==========

    saveLastSession(sessionData) {
        return this.save(this.KEYS.LAST_SESSION, {
            ...sessionData,
            savedAt: new Date().toISOString()
        });
    },

    loadLastSession() {
        return this.load(this.KEYS.LAST_SESSION, null);
    },

    saveUserAnalysis(analysis) {
        return this.save(this.KEYS.USER_ANALYSIS, analysis);
    },

    loadUserAnalysis() {
        return this.load(this.KEYS.USER_ANALYSIS, null);
    },

    saveLastPlanConfig(config) {
        return this.save(this.KEYS.LAST_PLAN_CONFIG, config);
    },

    loadLastPlanConfig() {
        return this.load(this.KEYS.LAST_PLAN_CONFIG, null);
    },

    clearLastSession() {
        this.remove(this.KEYS.LAST_SESSION);
    }
};
