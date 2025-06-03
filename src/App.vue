<template>
    <div class="app-container">
        <!-- 顶部菜单栏 -->
        <div class="menu-bar">
            <el-button text icon="Plus" @click="onNew">新建</el-button>
            <el-button text icon="FolderOpened" @click="onOpen">打开</el-button>
            <el-button text icon="Download" @click="onSaveAs">另存为</el-button>
        </div>

        <!-- 主内容区域 -->
        <el-container class="content-container">
            <!-- 你原来的内容 -->
            <div class="content-box">
                <h2 class="title">📝 输入内容并保存到文件</h2>
                <el-input v-model="text" placeholder="请输入内容" clearable />
                <el-button type="primary" @click="saveToFile" class="save-button">保存</el-button>
                <el-divider />
                <p class="file-label">📁 文件内容：</p>
                <el-alert
                    v-if="fileContent"
                    type="success"
                    :title="fileContent"
                    show-icon
                    class="file-alert"
                />
            </div>
        </el-container>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {invoke} from '@tauri-apps/api/core'
import {Menu, MenuItem, Submenu} from '@tauri-apps/api/menu';

const text = ref('')
const fileContent = ref('')

const saveToFile = async () => {
    fileContent.value = await invoke('write_to_file', {content: text.value})
}


onMounted(async () => {
    const fileSubmenu = await Submenu.new({
        text: 'File',
        items: [
            await MenuItem.new({
                id: 'new',
                text: 'New',
                action: () => {
                    console.log('New clicked');
                },
            }),
            await MenuItem.new({
                id: 'open',
                text: 'Open',
                action: () => {
                    console.log('Open clicked');
                },
            }),
            await MenuItem.new({
                id: 'save_as',
                text: 'Save As...',
                action: () => {
                    console.log('Save As clicked');
                },
            }),
        ],
    });

    const editSubmenu = await Submenu.new({
        text: 'Edit',
        items: [
            await MenuItem.new({
                id: 'undo',
                text: 'Undo',
                action: () => {
                    console.log('Undo clicked');
                },
            }),
            await MenuItem.new({
                id: 'redo',
                text: 'Redo',
                action: () => {
                    console.log('Redo clicked');
                },
            }),
        ],
    });

    const menu = await Menu.new({
        items: [
            fileSubmenu,
            editSubmenu,
            await MenuItem.new({
                id: 'quit',
                text: 'Quit',
                action: () => {
                    console.log('Quit pressed');
                },
            }),
        ],
    });

    await menu.setAsAppMenu();
});

</script>
<style>
body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #f5f7fa;
}

.container {
    padding: 40px;
    display: flex;
    justify-content: center;
}

.content-box {
    max-width: 480px;
    width: 100%;
}

.title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 16px;
}

.save-button {
    margin-top: 12px;
    width: 100%;
}

.file-label {
    margin: 12px 0 6px;
    font-weight: 500;
}

.file-alert {
    border-radius: 10px;
    font-size: 14px;
}
</style>
