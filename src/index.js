console.log('Main file here!')
import './main.scss'
import logo from './webpack.png'
const app = document.getElementById('app')

const img = document.createElement('img')
img.src = logo
img.className = 'logo'

app.appendChild(img)