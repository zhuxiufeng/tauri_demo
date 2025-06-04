<template>
    <div class="app-container">
        <!-- 顶部菜单栏 -->
        <div class="menu-bar">
            <el-button text icon="Plus" @click="onNew">新建</el-button>
            <el-divider direction="vertical" />
            <el-button text icon="FolderOpened" @click="onOpen">打开</el-button>
            <el-divider direction="vertical" />
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

const onNew = () => console.log('新建 clicked')
const onOpen = () => console.log('打开 clicked')
const onSaveAs = () => console.log('另存为 clicked')
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
.menu-bar {
    display: flex;
    padding: 12px 24px;
    background-color: white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
    /*gap: 12px;*/
    align-items: center;
}

.content-container {
    display: flex;
    justify-content: center;
    padding: 40px 16px;
}

.content-box {
    background-color: white;
    padding: 24px 32px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    max-width: 520px;
    width: 100%;
}
.menu-bar .el-divider--vertical {
    margin: 0 8px;
}



</style>
