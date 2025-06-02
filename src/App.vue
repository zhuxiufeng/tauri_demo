<template>
    <el-container style="padding: 40px;">
        <el-card>
            <h2>📝 输入内容并保存到文件</h2>
            <el-input v-model="text" placeholder="请输入内容" />
            <el-button type="primary" @click="saveToFile" style="margin-top: 10px;">保存</el-button>
            <el-divider />
            <p>📁 文件内容：</p>
            <el-alert v-if="fileContent" type="success" :title="fileContent" />
        </el-card>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api/core'


const text = ref('')
const fileContent = ref('')

const saveToFile = async () => {
    const content = await invoke('write_to_file', { content: text.value })
    fileContent.value = content
}
</script>
