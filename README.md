六角學院 Vue 樣板
這是六角學院的 Vue 樣板，是基於 Vite 所建立的專案。

Node.js 版本建議為：18.17.1 以上

安裝與使用
以下將會引導你如何安裝此專案到你的電腦上。

取得專案
git clone https://github.com/hexschool/vite-template.git
移動到專案資料夾
cd vite-template
環境變數
請將 .env.example 複製一份並命名為 .env，並將裡面的環境變數設定為你的值。

cp .env.example .env
安裝套件
npm install
啟動開發環境
npm run dev
打包專案
npm run build
部署專案
npm run deploy
套件
以下是已經安裝在專案中的套件。

axios (^1.6.5)
bootstrap (^5.3.2)
bootstrap-icons (^1.11.3)
dotenv (^16.3.1)
pinia (^2.1.7)
vue (^3.3.11)
vue-router (^4.2.5)
@vitejs/plugin-vue (^4.5.2)
eslint (^8.49.0)
eslint-config-standard (^^17.1.0)
eslint-import-resolver-alias (^1.1.2)
eslint-plugin-import (^2.29.1)
eslint-plugin-n (^16.6.2)
eslint-plugin-promise (^6.1.1)
eslint-plugin-vue (^9.20.1)
gh-pages (^6.1.1)
sass (^1.69.7)
vite (^5.0.10)
vite-plugin-eslint (^1.8.1)
資料夾結構
.vscode：Visual Studio Code 的設定檔
dist：打包後的檔案
public：公開的靜態檔案
src：專案的程式碼
assets：靜態檔案
components：元件
router：路由
store：狀態管理
views：頁面
App.vue：根元件
main.js：進入點
.env.example：環境變數範本
.eslintrc.js：ESLint 設定檔
.gitignore：Git 忽略檔案
.nvmrc：Node.js 版本
index.html：進入點 HTML
package-lock.json：套件版本鎖定
package.json：專案資訊
README.md：專案說明
vite.config.js：Vite 設定檔
gh-pages 部署說明
內建預設是使用 gh-pages 進行部署，因此只需要在專案根目錄下執行以下指令即可。

npm run deploy
（請記得將 .env 中的 REPOSITORY_NAME 改為你的專案名稱即可。）
 

https://wameny10814.github.io/VueProject/#/


《星空奇遇》 - 這是一部關於太空冒險和外星生命的科幻小說，講述一群勇敢的宇航員在未知星系中的探索之旅。 單價：NT$280。
《幻夜之城》 - 這是一本奇幻小說，描述一個充滿魔法和神秘的城市，裡面藏著許多神奇的秘密和冒險。 單價：NT$320。
《時光之門》 - 一部關於時間旅行和命運的科幻小說，主人公通過一個神秘的門進入不同的時間線，改變歷史。 單價：NT$300。
《夢境迷宮》 - 這是一本心理驚悚小說，描述主角在一個充滿幻夢和恐懼的迷宮中尋找真相的故事。 單價：NT$350。
《幻想之林》 - 一本充滿魔法和神秘的奇幻小說，講述主角在神秘森林中尋找失落寶藏的冒險故事。 單價：NT$290。
《魔法學院》 - 一本關於年輕巫師學徒在魔法學院學習和冒險的奇幻冒險小說。 單價：NT$330。
《未來之戰》 - 一本關於人類與外星生物之間爆發的未來戰爭的科幻小說，充滿了戰鬥和戰略。 單價：NT$310。
《幻夢之島》 - 一部描述一個充滿魔法和奇幻生物的島嶼的冒險故事，充滿了未知的危險和挑戰。 單價：NT$340。
《失落的王國》 - 一個充滿謎團和冒險的奇幻故事，主角要尋找失落王國的遺跡並解開其中的秘密。 單價：NT$320。
《時空漩渦》 - 一本關於平行宇宙和時空漩渦的科幻小說，主角要穿越不同的時空線解開一個神秘事件的真相。 單價：NT$360。
