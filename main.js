const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({  })
    win.loadURL('https://artemisa.unbosque.edu.co/serviciosacademicos/EspacioFisico/Interfas/EspaciosFisicosAsigandosReporte.php')
    
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})