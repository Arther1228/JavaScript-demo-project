// 获取 canvas 元素
const ctx = document.getElementById('workChart').getContext('2d');

// 初始化数据
const startYear = 2014;
const endYear = 2024;
const years = []; // 年份标签
const workChanges = [6, 7, 10, 12, 14, 15, 16, 17, 17.5, 18]; // 你提供的数据
let currentIndex = 0; // 当前数据的索引

// 初始化图表
const workChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years, // 初始为空
        datasets: [{
            label: '变化',
            data: [], // 初始为空
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        animation: {
            duration: 2000, // 每次更新的动画持续 2 秒
            easing: 'easeInOutQuad', // 缓动函数
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: '10年变化'
            }
        }
    }
});

// 逐年添加数据
const interval = setInterval(() => {
    if (currentIndex >= workChanges.length) {
        clearInterval(interval); // 停止定时器
        return;
    }

    // 添加新一年的数据
    years.push((startYear + currentIndex + '年').toString()); // 年份从 2014 年开始
    workChart.data.datasets[0].data.push(workChanges[currentIndex]); // 添加对应的工作变化数据

    // 更新图表
    workChart.update();

    currentIndex++;
}, 2000); // 每 2 秒添加一年数据