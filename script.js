// 获取页面上的元素
const input = document.getElementById('taskInput'); // 假设你的输入框 ID 是 taskInput
const button = document.getElementById('addBtn');   // 假设你的按钮 ID 是 addBtn
const list = document.getElementById('taskList');   // 假设你的列表容器 ID 是 taskList

// 定义添加任务的函数
function addTask() {
    const taskText = input.value; // 获取输入框的内容

    if (taskText === '') {
        alert("请输入任务内容哦！"); // 如果没输入就提醒一下
        return;
    }

    // 创建一个新的列表项 (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // 给新任务添加一点简单的样式（可选）
    li.style.padding = "10px";
    li.style.borderBottom = "1px solid #eee";
    li.style.cursor = "pointer";

    // 点击任务可以标记为完成（删除线效果）
    li.onclick = function() {
        li.style.textDecoration = "line-through";
        li.style.color = "#888";
    };

    // 把新任务加到列表里
    list.appendChild(li);

    // 清空输入框
    input.value = '';
}

// 监听按钮的点击事件
button.addEventListener('click', addTask);

// 也可以监听回车键，按回车也能添加
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
