// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)



// import { Menu, MenuItem, Submenu } from '@tauri-apps/api/menu';
//
// const fileSubmenu = await Submenu.new({
//     text: 'File',
//     items: [
//         await MenuItem.new({
//             id: 'new',
//             text: 'New',
//             action: () => {
//                 console.log('New clicked');
//             },
//         }),
//         await MenuItem.new({
//             id: 'open',
//             text: 'Open',
//             action: () => {
//                 console.log('Open clicked');
//             },
//         }),
//         await MenuItem.new({
//             id: 'save_as',
//             text: 'Save As...',
//             action: () => {
//                 console.log('Save As clicked');
//             },
//         }),
//     ],
// });
//
// const editSubmenu = await Submenu.new({
//     text: 'Edit',
//     items: [
//         await MenuItem.new({
//             id: 'undo',
//             text: 'Undo',
//             action: () => {
//                 console.log('Undo clicked');
//             },
//         }),
//         await MenuItem.new({
//             id: 'redo',
//             text: 'Redo',
//             action: () => {
//                 console.log('Redo clicked');
//             },
//         }),
//     ],
// });
//
// const menu = await Menu.new({
//     items: [
//         fileSubmenu,
//         editSubmenu,
//         await MenuItem.new({
//             id: 'quit',
//             text: 'Quit',
//             action: () => {
//                 console.log('Quit pressed');
//             },
//         }),
//     ],
// });
//
// await menu.setAsAppMenu();
//








app.mount('#app')
