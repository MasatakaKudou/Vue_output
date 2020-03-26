// ローカルストレージAPIの使用
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  // saveで格納したデータを取り出している
  fetch: function () {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    // todos内の要素を1つずつ取り出してtodoとしている
    todos.forEach(function (todo, index) {
      // indexが0からの連番が設定されるので、todo.idに設定している
      todo.id = index
    })
    // todosの長さ、つまりリストの件数をtodoStorage.uidとして保持している
    todoStorage.uid = todos.length
    return todos
  },
  // localStorageにtodosをJSON形式で格納する、これによってブラウザをリロードしてもデータを保持しておける
  save: function (todos) {
    // key(STORAGE_KEY)とvalue(JSON文字列に変換したtodos)をペアにしている
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

// ルートインスタンスを作成
const app = new Vue({
  // DOM要素のオブジェクトかCSSセレクタで指定
  el: '#app',
  // 利用するデータを定義、プロパティと呼ばれる
  data: {
    // データが何もない時でも配列として認識されるようにするため
    todos: []
  },
  // データの変更やサーバーにHTTPリクエストを送る際に用いる
  methods: {
  }
})