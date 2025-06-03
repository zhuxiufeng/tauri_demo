<template>
    <el-container class="container">
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
</template>

<script setup>
import {ref} from 'vue'
import {invoke} from '@tauri-apps/api/core'

const text = ref('')
const fileContent = ref('')

const saveToFile = async () => {
    fileContent.value = await invoke('write_to_file', {content: text.value})
}
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
