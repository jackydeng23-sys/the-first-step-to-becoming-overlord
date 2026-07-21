const UserProfile = {
    levelToScore: {
        1: 20,
        2: 40,
        3: 60,
        4: 80,
        5: 95
    },

    collectFromForm() {
        const basicInfo = {
            age: parseInt(document.getElementById('age').value),
            height: parseInt(document.getElementById('height').value),
            weight: parseFloat(document.getElementById('weight').value)
        };

        const preferredFootInput = document.querySelector('input[name="preferred-foot"]:checked');
        const preferredFoot = preferredFootInput ? preferredFootInput.value : null;

        const positions = [];
        document.querySelectorAll('input[name="position"]:checked').forEach(cb => {
            positions.push(cb.value);
        });

        const experience = parseInt(document.getElementById('experience').value);
        const matchesWeek = parseInt(document.getElementById('matches-week').value);

        const technicalSkills = [];
        document.querySelectorAll('#football-info-form input[type="checkbox"]:checked:not([name="position"])').forEach(cb => {
            technicalSkills.push(cb.value);
        });

        const injuryHistory = document.getElementById('injury-history').value;

        const technicalRatings = this.collectRatings();

        return {
            ...basicInfo,
            preferredFoot,
            positions,
            experience,
            matchesWeek,
            technicalSkills,
            injuryHistory,
            technicalRatings
        };
    },

    collectRatings() {
        const ratings = {};

        const ratingMapping = {
            'speed': ['sprint-speed', 'acceleration'],
            'dribbling': ['dribbling', 'ball-control'],
            'passing': ['passing', 'vision'],
            'shooting': ['shooting'],
            'tackling': ['tackling', 'positioning', 'one-on-one-defense'],
            'stamina': ['stamina', 'recovery-runs'],
            'strength': ['strength', 'jumping'],
            'heading': ['heading'],
            'vision': ['vision', 'decision-making'],
            'aggression': ['aggression']
        };

        Object.keys(ratingMapping).forEach(questionName => {
            const input = document.querySelector(`input[name="${questionName}"]:checked`);
            const value = input ? parseInt(input.value) : 3;
            const score = this.levelToScore[value];

            ratingMapping[questionName].forEach(key => {
                ratings[key] = score;
            });
        });

        const allRequired = [
            'dribbling', 'passing', 'shooting', 'tackling', 'heading', 'ball-control',
            'sprint-speed', 'acceleration', 'stamina', 'strength', 'jumping', 'agility',
            'positioning', 'vision', 'decision-making', 'aggression', 'leadership',
            'overlapping', 'recovery-runs', 'crossing-accuracy', 'one-on-one-defense'
        ];

        allRequired.forEach(key => {
            if (ratings[key] === undefined) {
                ratings[key] = 60;
            }
        });

        return ratings;
    },

    fillForm(profile) {
        if (!profile) return;

        if (profile.age) document.getElementById('age').value = profile.age;
        if (profile.height) document.getElementById('height').value = profile.height;
        if (profile.weight) document.getElementById('weight').value = profile.weight;
        if (profile.experience) document.getElementById('experience').value = profile.experience;
        if (profile.matchesWeek) document.getElementById('matches-week').value = profile.matchesWeek;
        if (profile.injuryHistory) document.getElementById('injury-history').value = profile.injuryHistory;

        if (profile.preferredFoot) {
            const radio = document.querySelector(`input[name="preferred-foot"][value="${profile.preferredFoot}"]`);
            if (radio) radio.checked = true;
        }

        if (profile.positions) {
            profile.positions.forEach(pos => {
                const checkbox = document.querySelector(`input[name="position"][value="${pos}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }

        if (profile.technicalSkills) {
            profile.technicalSkills.forEach(skill => {
                const checkbox = document.querySelector(`#football-info-form input[type="checkbox"][value="${skill}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }

        if (profile.technicalRatings) {
            this.fillRatings(profile.technicalRatings);
        }
    },

    fillRatings(scores) {
        const questions = ['speed', 'dribbling', 'passing', 'shooting', 'tackling', 'stamina', 'strength', 'heading', 'vision', 'aggression'];
        const questionMapping = {
            'speed': ['sprint-speed'],
            'dribbling': ['dribbling'],
            'passing': ['passing'],
            'shooting': ['shooting'],
            'tackling': ['tackling'],
            'stamina': ['stamina'],
            'strength': ['strength'],
            'heading': ['heading'],
            'vision': ['vision'],
            'aggression': ['aggression']
        };

        questions.forEach(qName => {
            const keys = questionMapping[qName];
            let avgScore = keys.reduce((s, k) => s + (scores[k] || 60), 0) / keys.length;

            let level = 3;
            if (avgScore <= 30) level = 1;
            else if (avgScore <= 50) level = 2;
            else if (avgScore <= 70) level = 3;
            else if (avgScore <= 87) level = 4;
            else level = 5;

            const radio = document.querySelector(`input[name="${qName}"][value="${level}"]`);
            if (radio) radio.checked = true;
        });
    },

    calculateBMI(weight, height) {
        const heightM = height / 100;
        return (weight / (heightM * heightM)).toFixed(1);
    },

    getBMICategory(bmi) {
        if (bmi < 18.5) return { category: 'Underweight · 偏瘦', color: '#f59e0b', description: 'Need to build muscle mass · 需要增加肌肉量' };
        if (bmi < 24) return { category: 'Normal · 正常', color: '#10b981', description: 'Healthy weight range · 体重在健康范围内' };
        if (bmi < 28) return { category: 'Overweight · 超重', color: '#f59e0b', description: 'Control body fat percentage · 建议控制体脂' };
        return { category: 'Obese · 肥胖', color: '#ef4444', description: 'Need to lose weight · 需要减脂' };
    },

    getIdealWeightRange(height) {
        const heightM = height / 100;
        return {
            min: Math.round(18.5 * heightM * heightM),
            max: Math.round(24 * heightM * heightM),
            optimal: Math.round(21 * heightM * heightM)
        };
    },

    getPositionRequirements(positions) {
        const requirements = {
            'GK': { name: 'Goalkeeper · 门将', keyAttributes: [
                { name: 'Reflexes · 反应', importance: 10, description: 'Quick reactions are key · 快速反应是关键' },
                { name: 'Positioning · 位置感', importance: 9, description: 'Good starting position · 良好站位' },
                { name: 'Passing · 传球', importance: 8, description: 'Play from back · 从后场发起' }],
                injuryRisks: ['Knee · 膝盖', 'Shoulder · 肩膀', 'Wrist · 手腕']
            },
            'CB': {
                name: 'Center Back · 中后卫',
                keyAttributes: [
                    { name: 'Strength · 力量', importance: 10, description: 'Physical battles · 身体对抗' },
                    { name: 'Heading · 头球', importance: 9, description: 'Win aerial duels · 争顶' },
                    { name: 'Positioning · 位置感', importance: 9, description: 'Defensive awareness · 防守意识' }
                ],
                injuryRisks: ['Knee · 膝盖', 'Shoulder · 肩膀', 'Lower Back · 腰部']
            },
            'LB': {
                name: 'Left Back · 左后卫',
                keyAttributes: [
                    { name: 'Stamina · 耐力', importance: 10, description: 'Up and down the flank · 上下往返' },
                    { name: 'Pace · 速度', importance: 9, description: 'Recovery pace · 回追' },
                    { name: 'Crossing · 传中', importance: 7, description: 'Overlap attacks · 插上助攻' }
                ],
                injuryRisks: ['Knee · 膝盖', 'Ankle · 脚踝', 'Hamstring · 大腿']
            },
            'RB': {
                name: 'Right Back · 右后卫',
                keyAttributes: [
                    { name: 'Stamina · 耐力', importance: 10, description: 'Up and down the flank · 上下往返' },
                    { name: 'Pace · 速度', importance: 9, description: 'Recovery pace · 回追' },
                    { name: 'Strength · 力量', importance: 8, description: 'Physical strength · 身体对抗' }
                ],
                injuryRisks: ['Knee · 膝盖', 'Ankle · 脚踝', 'Hamstring · 大腿']
            },
            'DM': {
                name: 'Defensive Midfielder · 防守中场',
                keyAttributes: [
                    { name: 'Positioning · 位置感', importance: 10, description: 'Shield the back four · 保护防线' },
                    { name: 'Tackling · 抢断', importance: 9, description: 'Win the ball · 赢回球权' }
                ],
                injuryRisks: ['Knee · 膝盖', 'Ankle · 脚踝']
            },
            'CM': {
                name: 'Central Midfielder · 中场',
                keyAttributes: [
                    { name: 'Stamina · 耐力', importance: 10, description: 'Cover every blade · 覆盖全场' },
                    { name: 'Passing · 传球', importance: 9, description: 'Control tempo · 掌控节奏' }
                ],
                injuryRisks: ['Knee · 膝盖', 'Ankle · 脚踝']
            },
            'LW': {
                name: 'Left Winger · 左边锋',
                keyAttributes: [
                    { name: 'Pace · 速度', importance: 10, description: 'Terrifying pace · 恐怖速度' },
                    { name: 'Dribbling · 盘带', importance: 9, description: 'Defenders nightmare · 后卫噩梦' }
                ],
                injuryRisks: ['Ankle · 脚踝', 'Hamstring · 大腿', 'Groin · 腹股沟']
            },
            'RW': {
                name: 'Right Winger · 右边锋',
                keyAttributes: [
                    { name: 'Pace · 速度', importance: 10, description: 'Terrifying pace · 恐怖速度' },
                    { name: 'Dribbling · 盘带', importance: 9, description: 'Defenders nightmare · 后卫噩梦' }
                ],
                injuryRisks: ['Ankle · 脚踝', 'Hamstring · 大腿', 'Groin · 腹股沟']
            },
            'CF': {
                name: 'Center Forward · 中锋',
                keyAttributes: [
                    { name: 'Finishing · 射门', importance: 10, description: 'Clinical in box · 禁区终结者' },
                    { name: 'Heading · 头球', importance: 9, description: 'Aerial dominance · 空中霸主' },
                    { name: 'Strength · 力量', importance: 9, description: 'Hold up play · 支点作用' }
                ],
                injuryRisks: ['Knee · 膝盖', 'Ankle · 脚踝', 'Shoulder · 肩膀']
            },
            'ST': {
                name: 'Striker · 射手',
                keyAttributes: [
                    { name: 'Finishing · 射门', importance: 10, description: 'Goal machine · 进球机器' },
                    { name: 'Positioning · 位置感', importance: 9, description: 'Off-ball runs · 无球跑动' }
                ],
                injuryRisks: ['Knee · 膝盖', 'Ankle · 脚踝']
            }
        };

        const reqs = (positions && positions.length > 0) ? positions : ['RB'];
        return reqs.map(pos => requirements[pos] || requirements['RB']);
    },

    generateAnalysis(profile) {
        const bmi = this.calculateBMI(profile.weight, profile.height);
        const bmiCategory = this.getBMICategory(bmi);
        const idealWeight = this.getIdealWeightRange(profile.height);
        const positionRequirements = this.getPositionRequirements(profile.positions);

        const strengths = [];
        const weaknesses = [];
        const improvements = [];

        if (bmi < 18.5) {
            weaknesses.push('Underweight · 偏瘦');
            improvements.push({
                priority: 1,
                title: 'Build muscle mass · 增肌增重',
                description: `Target ${idealWeight.optimal} kg (Current ${profile.weight} kg) · 目标体重${idealWeight.optimal}kg (当前${profile.weight}kg)`,
                type: 'nutrition'
            });
        } else if (bmi >= 24) {
            weaknesses.push('Overweight · 超重');
            improvements.push({
                priority: 1,
                title: 'Control body fat · 控制体脂',
                description: 'Reduce body fat, increase muscle mass · 减少体脂，增加肌肉',
                type: 'nutrition'
            });
        } else {
            strengths.push('Healthy weight · 体重在理想范围内');
        }

        if (profile.technicalRatings) {
            const ratings = profile.technicalRatings;

            if (ratings['stamina'] >= 70) strengths.push('Good Stamina · 耐力基础不错');
            else {
                weaknesses.push('Stamina needs work · 耐力需要提升');
                improvements.push({
                    priority: 2,
                    title: 'Build Stamina · 提升耐力',
                    description: 'Aerobic training for 90 minutes · 加强有氧训练，提高90分钟比赛能力',
                    type: 'cardio'
                });
            }

            if (ratings['strength'] >= 70) strengths.push('Good Strength · 力量不错');
            else {
                weaknesses.push('Strength needs work · 力量不足');
                improvements.push({
                    priority: 1,
                    title: 'Build Strength · 增加力量',
                    description: 'Focus on leg & core work · 重点加强下肢和核心力量',
                    type: 'strength'
                });
            }

            if (ratings['acceleration'] >= 75) strengths.push('Explosive · 爆发力出色');
        }

        if (profile.injuryHistory && profile.injuryHistory.length > 20) {
            weaknesses.push('Injury prone · 有受伤历史');
            improvements.push({
                priority: 2,
                title: 'Injury prevention · 预防受伤',
                description: 'Flexibility work, proper recovery · 加强灵活性训练，注意恢复',
                type: 'prehab'
            });
        }

        let matchedPlayers = [];
        if (profile.technicalRatings) {
            matchedPlayers = PlayerDatabase.findMatchingPlayers(profile, 3);
        }

        return {
            bmi: parseFloat(bmi),
            bmiCategory,
            idealWeight,
            positionRequirements,
            strengths,
            weaknesses,
            improvements,
            matchedPlayers,
            technicalRatings: profile.technicalRatings
        };
    },

    generateRadarChart(ratings, width = 300, height = 300) {
        const radarData = PlayerDatabase.getRadarData(ratings);
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 30;

        const points = radarData.map((item, idx) => {
            const angle = (Math.PI * 2 * idx / radarData.length) - Math.PI / 2;
            const r = (item.value / 100) * radius;
            return { x: centerX + r * Math.cos(angle), y: centerY + r * Math.sin(angle), ...item };
        });

        let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;

        for (let level = 1; level <= 5; level++) {
            const r = (level / 5) * radius;
            const levelPoints = radarData.map((_, idx) => {
                const angle = (Math.PI * 2 * idx / radarData.length) - Math.PI / 2;
                return `${centerX + r * Math.cos(angle)},${centerY + r * Math.sin(angle)}`;
            }).join(' ');
            svg += `<polygon points="${levelPoints}" fill="none" stroke="#6CABDD" stroke-width="1" opacity="0.3"/>`;
        }

        radarData.forEach((_, idx) => {
            const angle = (Math.PI * 2 * idx / radarData.length) - Math.PI / 2;
            svg += `<line x1="${centerX}" y1="${centerY}" x2="${centerX + radius * Math.cos(angle)}" y2="${centerY + radius * Math.sin(angle)}" stroke="#6CABDD" stroke-width="1" opacity="0.4"/>`;
        });

        const dataPoints = points.map(p => `${p.x},${p.y}`).join(' ');
        svg += `<polygon points="${dataPoints}" fill="rgba(108, 171, 221, 0.35)" stroke="#6CABDD" stroke-width="3"/>`;

        points.forEach(p => svg += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="#1C2C5B"/>`);

        radarData.forEach((item, idx) => {
            const angle = (Math.PI * 2 * idx / radarData.length) - Math.PI / 2;
            const labelR = radius + 22;
            const x = centerX + labelR * Math.cos(angle);
            const y = centerY + labelR * Math.sin(angle) + 5;
            svg += `<text x="${x}" y="${y}" text-anchor="middle" font-size="11.5" fill="#1C2C5B" font-weight="700">${item.axis}</text>`;
        });

        svg += '</svg>';
        return svg;
    },

    average(values) {
        const valid = values.filter(v => v !== undefined);
        if (valid.length === 0) return 50;
        return Math.round(valid.reduce((s, v) => s + v, 0) / valid.length);
    },

    generateRatingBar(value, max = 99) {
        const percentage = Math.max(0, Math.min(100, (value / max) * 100));
        let color = '#6CABDD';
        if (value >= 80) color = '#10b981';
        else if (value >= 60) color = '#FFC659';
        else if (value >= 40) color = '#f97316';
        else color = '#ef4444';

        return `
            <div class="rating-bar-container">
                <div class="rating-bar-fill" style="width: ${percentage}%; background: linear-gradient(90deg, ${color} 0%, ${color}dd 100%);">
                    <span class="rating-bar-value">${value}</span>
                </div>
            </div>
        `;
    },

    renderAnalysis(profile, analysis) {
        const container = document.getElementById('analysis-results');

        let html = `
            <div class="accordion-section">
                <div class="accordion-header active" data-accordion="overview">
                    <div class="accordion-header-title">
                        📊 Physical Overview · 身体数据概览
                    </div>
                    <div class="accordion-arrow">▼</div>
                </div>
                <div class="accordion-content active" data-accordion-content="overview">
                    <div class="stat-grid">
                        <div class="stat-card">
                            <div class="stat-value">${analysis.bmi}</div>
                            <div class="stat-label">BMI Index</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" style="background: linear-gradient(135deg, ${analysis.bmiCategory.color} 0%, ${analysis.bmiCategory.color}cc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${analysis.bmiCategory.category}</div>
                            <div class="stat-label">Weight Status</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${analysis.idealWeight.min}-${analysis.idealWeight.max} kg</div>
                            <div class="stat-label">Ideal Range</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${analysis.idealWeight.optimal} kg</div>
                            <div class="stat-label">Target Weight</div>
                        </div>
                    </div>
                    <p style="color: var(--text-secondary); margin-top: 12px; font-weight: 500;">${analysis.bmiCategory.description}</p>
                </div>
            </div>
        `;

        if (analysis.technicalRatings) {
            html += `
                <div class="accordion-section">
                    <div class="accordion-header" data-accordion="radar">
                        <div class="accordion-header-title">
                            📈 Ability Radar · 能力雷达图
                        </div>
                        <div class="accordion-arrow">▼</div>
                    </div>
                    <div class="accordion-content" data-accordion-content="radar">
                        <div style="display: flex; justify-content: center; margin: 8px 0;">
                            ${this.generateRadarChart(analysis.technicalRatings, 340, 340)}
                        </div>
                    </div>
                </div>

                <div class="accordion-section">
                    <div class="accordion-header" data-accordion="ratings">
                        <div class="accordion-header-title">
                            ⚽ Detailed Ratings · 详细能力评分
                        </div>
                        <div class="accordion-arrow">▼</div>
                    </div>
                    <div class="accordion-content" data-accordion-content="ratings">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 18px;">
            `;

            const displayList = [
                { key: 'dribbling', name: 'Dribbling · 盘带' },
                { key: 'passing', name: 'Passing · 传球' },
                { key: 'shooting', name: 'Shooting · 射门' },
                { key: 'tackling', name: 'Tackling · 抢断' },
                { key: 'heading', name: 'Heading · 头球' },
                { key: 'strength', name: 'Strength · 力量' },
                { key: 'stamina', name: 'Stamina · 耐力' },
                { key: 'vision', name: 'Vision · 视野' },
                { key: 'positioning', name: 'Positioning · 位置感' }
            ];

            displayList.forEach(item => {
                const value = analysis.technicalRatings[item.key] || 60;
                html += `
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                            <span style="font-weight: 600; color: var(--primary-dark);">${item.name}</span>
                            <span style="font-weight: 800; color: var(--primary-color);">${value}</span>
                        </div>
                        ${this.generateRatingBar(value)}
                    </div>
                `;
            });

            html += `</div></div></div>`;
        }

        analysis.positionRequirements.forEach((posReq, idx) => {
            html += `
                <div class="accordion-section">
                    <div class="accordion-header" data-accordion="position-${idx}">
                        <div class="accordion-header-title">
                            ⚽ ${posReq.name} Position Requirements · ${posReq.name} 位置要求
                        </div>
                        <div class="accordion-arrow">▼</div>
                    </div>
                    <div class="accordion-content" data-accordion-content="position-${idx}">
                        <div class="exercise-list">
            `;
            posReq.keyAttributes.forEach(attr => {
                html += `
                    <div class="exercise-item">
                        <div class="exercise-info">
                            <div class="exercise-name">${attr.name}</div>
                            <div class="exercise-meta">${attr.description}</div>
                        </div>
                        <div class="exercise-intensity">Importance · ${attr.importance}/10</div>
                    </div>
                `;
            });
            html += `
                        </div>
                        <div style="margin-top: 16px; padding: 14px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; border: 2px solid #f59e0b;">
                            <strong>⚠️ Common Injuries · 常见受伤部位：</strong> ${posReq.injuryRisks.join(' · ')}
                        </div>
                    </div>
                </div>
            `;
        });

        if (analysis.matchedPlayers && analysis.matchedPlayers.length > 0) {
            html += `
                <div class="accordion-section">
                    <div class="accordion-header" data-accordion="players">
                        <div class="accordion-header-title">
                            ⭐ Similar Players · 球星模板匹配
                        </div>
                        <div class="accordion-arrow">▼</div>
                    </div>
                    <div class="accordion-content" data-accordion-content="players">
                        <p style="color: var(--text-secondary); margin-bottom: 18px;">Players like you · 根据你的技术特点，找到以下相似的球星模板：</p>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px;">
            `;

            analysis.matchedPlayers.forEach(player => {
                const style = { 'attacking': 'Attacking · 进攻型', 'defensive': 'Defensive · 防守型', 'complete': 'Complete · 全能型' }[player.style] || 'Complete · 全能型';
                let extraInfo = '';
                if (player.dateOfBirth) {
                    extraInfo += `<p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 8px;"><strong>Birthdate · 生日:</strong> ${player.dateOfBirth}`;
                    if (player.birthPlace) extraInfo += `<br><strong>Birthplace · 出生地:</strong> ${player.birthPlace}`;
                    if (player.marketValue) extraInfo += `<br><strong>Market Value · 身价:</strong> ${player.marketValue}`;
                    extraInfo += '</p>';
                }
                if (player.careerStats) {
                    extraInfo += `<p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 6px;"><strong>Career · 生涯:</strong> ${player.careerStats.appearances} appearances · ${player.careerStats.goals}+ goals`;
                    if (player.careerStats.assists) extraInfo += ` · ${player.careerStats.assists}+ assists`;
                    extraInfo += '</p>';
                }
                if (player.honours && player.honours.length > 0) {
                    extraInfo += `<p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 6px;"><strong>Honours · 荣誉:</strong> ${player.honours.join(' · ')}</p>`;
                }
                let linksHtml = '';
                if (player.links) {
                    linksHtml += '<div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border-color); display: flex; gap: 10px; flex-wrap: wrap;">';
                    if (player.links.transfermarkt) linksHtml += `<a href="${player.links.transfermarkt}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: linear-gradient(135deg, #1C2C5B 0%, #2D3F70 100%); color: white; border-radius: 10px; font-size: 0.85rem; font-weight: 700; text-decoration: none;">📊 Transfermarkt</a>`;
                    if (player.links.baike) linksHtml += `<a href="${player.links.baike}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: linear-gradient(135deg, #e4393c 0%, #c42f32 100%); color: white; border-radius: 10px; font-size: 0.85rem; font-weight: 700; text-decoration: none;">📚 百度百科</a>`;
                    if (player.links.wikipedia) linksHtml += `<a href="${player.links.wikipedia}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: linear-gradient(135deg, #6CABDD 0%, #4a94c9 100%); color: white; border-radius: 10px; font-size: 0.85rem; font-weight: 700; text-decoration: none;">🌐 Wikipedia</a>`;
                    linksHtml += '</div>';
                }
                html += `
                    <div class="player-card">
                        <div class="player-header">
                            <span class="player-emoji">${player.image}</span>
                            <div style="flex: 1;">
                                <div class="player-name">${player.name}</div>
                                <div class="player-club">${player.club}</div>
                            </div>
                            <div class="player-similarity">${player.similarity}% Match</div>
                        </div>
                        <div class="player-style">${style}</div>
                        <p class="player-desc">${player.description}</p>
                        ${extraInfo}
                        <div style="margin-top: 14px;">
                            <strong>Key Strengths · 核心优势：</strong>
                            <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 8px;">
                                ${player.keyStrengths.map(s => `<span style="background: rgba(108,171,221,0.2); padding: 6px 14px; border-radius: 16px; font-size: 0.8rem; font-weight: 700; color: var(--primary-dark);">${s}</span>`).join('')}
                            </div>
                        </div>
                        ${linksHtml}
                        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 12px; font-style: italic;">💡 ${player.developmentTips}</p>
                    </div>
                `;
            });
            html += `</div></div></div>`;

            const bestMatch = analysis.matchedPlayers[0];
            const tips = PlayerDatabase.getDevelopmentTips(profile, bestMatch);

            html += `
                <div class="accordion-section">
                    <div class="accordion-header" data-accordion="tips">
                        <div class="accordion-header-title">
                            🎯 Development Tips · 发展建议（模板：${bestMatch.name}）
                        </div>
                        <div class="accordion-arrow">▼</div>
                    </div>
                    <div class="accordion-content" data-accordion-content="tips">
                        <div class="exercise-list">
            `;

            tips.forEach((tip, i) => {
                const colors = ['#ef4444', '#FFC659', '#6CABDD'];
                html += `
                    <div class="exercise-item" style="border-left-color: ${colors[i % colors.length]};">
                        <div class="exercise-info">
                            <div class="exercise-name">P${i + 1} · Improve ${tip.area}</div>
                            <div class="exercise-meta">
                                Current · 当前 ${tip.userValue} → Target · 目标 ${tip.targetValue}
                                <br><span style="color: var(--text-secondary); font-size: 0.9rem;">${tip.tip}</span>
                            </div>
                        </div>
                    </div>
                `;
            });

            html += `</div></div></div>`;
        }

        if (analysis.strengths.length > 0 || analysis.weaknesses.length > 0) {
            html += `
                <div class="accordion-section">
                    <div class="accordion-header" data-accordion="summary">
                        <div class="accordion-header-title">
                            📋 Summary · 优势与不足
                        </div>
                        <div class="accordion-arrow">▼</div>
                    </div>
                    <div class="accordion-content" data-accordion-content="summary">
            `;

            if (analysis.strengths.length > 0) {
                html += `
                    <div class="alert alert-success">
                        <span>✅</span>
                        <div>
                            <strong>Your Strengths · 你的优势：</strong>
                            <ul style="margin-top: 10px; margin-left: 22px; font-weight: 500;">
                                ${analysis.strengths.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }

            if (analysis.weaknesses.length > 0) {
                html += `
                    <div class="alert alert-warning">
                        <span>⚠️</span>
                        <div>
                            <strong>Areas to Improve · 需要提升的地方：</strong>
                            <ul style="margin-top: 10px; margin-left: 22px; font-weight: 500;">
                                ${analysis.weaknesses.map(w => `<li>${w}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }

            html += `</div></div>`;
        }

        html += `
            <div class="accordion-section">
                <div class="accordion-header" data-accordion="priorities">
                    <div class="accordion-header-title">
                        🏋️ Training Priorities · 训练重点
                    </div>
                    <div class="accordion-arrow">▼</div>
                </div>
                <div class="accordion-content" data-accordion-content="priorities">
                    <div class="exercise-list">
        `;

        analysis.improvements.forEach((imp, i) => {
            const colors = ['#ef4444', '#FFC659', '#6CABDD'];
            html += `
                <div class="exercise-item" style="border-left-color: ${colors[i % colors.length]};">
                    <div class="exercise-info">
                        <div class="exercise-name">P${i + 1} · ${imp.title}</div>
                        <div class="exercise-meta">${imp.description}</div>
                    </div>
                </div>
            `;
        });

        html += `
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 24px;">
                <button class="btn btn-primary btn-large" onclick="App.switchTab('plan');">
                    View Training Plan · 查看训练计划 →
                </button>
            </div>
        `;

        container.innerHTML = html;
        this.bindAccordionEvents();
    },

    bindAccordionEvents() {
        const headers = document.querySelectorAll('.accordion-header');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const accordionId = header.dataset.accordion;
                const content = document.querySelector(`[data-accordion-content="${accordionId}"]`);

                // 只切换当前点击的这个手风琴
                header.classList.toggle('active');
                content.classList.toggle('active');
            });
        });
    }
};
