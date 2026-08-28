# 创建dashboard.html文件的脚本 - 第一部分
content = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Icepak学习平台 - 仪表板</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <h1>Icepak学习平台</h1>
        <nav>
            <ul>
                <li><a href="#dashboard" class="nav-link active" data-target="dashboard">仪表板</a></li>
                <li><a href="#setup" class="nav-link" data-target="setup">设置模块</a></li>
                <li><a href="#fluid" class="nav-link" data-target="fluid">流体模块</a></li>
                <li><a href="#materials" class="nav-link" data-target="materials">材料库</a></li>
                <li><a href="#logic" class="nav-link" data-target="logic">逻辑关系</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- 仪表板页面 -->
        <section id="dashboard" class="active">
            <h2>欢迎使用Icepak学习平台</h2>
            <p>本平台用于学习和练习Icepak的设置与操作，包括各功能背后的逻辑关系。</p>
            
            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <h3>快速开始</h3>
                    <p>选择左侧导航栏中的模块进行学习和操作</p>
                </div>
                <div class="dashboard-card">
                    <h3>热管理系统设置</h3>
                    <p>学习如何配置热管理相关参数</p>
                </div>
                <div class="dashboard-card">
                    <h3>流体分析模块</h3>
                    <p>掌握流体流动和传热分析的原理</p>
                </div>
                <div class="dashboard-card">
                    <h3>材料属性查询</h3>
                    <p>查询和使用各种材料的热物理属性</p>
                </div>
            </div>
        </section>

        <!-- 设置模块 -->
        <section id="setup">
            <h2>热管理系统设置</h2>
            <div class="setup-form">
                <div class="form-group">
                    <label for="temperature">温度设置</label>
                    <input type="range" id="temperature" min="0" max="100" value="25">
                    <span id="temperature-value">25°C</span>
                </div>
                
                <div class="form-group">
                    <label for="pressure">压力设置</label>
                    <input type="range" id="pressure" min="0" max="1000" value="1013">
                    <span id="pressure-value">1013 Pa</span>
                </div>
                
                <div class="form-group">
                    <label for="flow-rate">流体流量</label>
                    <input type="range" id="flow-rate" min="0" max="100" value="50">
                    <span id="flow-rate-value">50 L/min</span>
                </div>
                
                <button id="simulate-btn">运行模拟</button>
            </div>
            
            <div id="simulation-results" style="display: none;">
                <h3>模拟结果</h3>
                <div class="text-output" id="results-text">
                    <!-- 模拟结果将显示在这里 -->
                </div>
            </div>
        </section>'''

with open('c:\\Users\\jxu67\\OneDrive - kochind.com\\vide coding exercise\\2_Icepak_Learning_Hub\\pages\\dashboard.html', 'w', encoding='utf-8') as f:
    f.write(content)
    
print("dashboard.html 文件创建完成")