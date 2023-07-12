const { BrowserWindow, Menu } = require('electron')
const path = require('path')

let wallpaper = null

// 创建壁纸窗口
function createWallpaper() {

    wallpaper = new BrowserWindow({
        width: 1250,
        height: 768,
        minWidth: 800,
        minHeight: 600,
        icon: path.join(__dirname, '../../../assets/app_128.ico'),
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    })

    Menu.setApplicationMenu(null)

    // 加载本地文件
    wallpaper.loadFile(path.join(__dirname, '../../renderer/pages/wallpaper/wallpaper.html'))

    // 监听closed事件后执行 
    wallpaper.on('closed', () => { wallpaper = null })

    return wallpaper
}

module.exports = createWallpaper