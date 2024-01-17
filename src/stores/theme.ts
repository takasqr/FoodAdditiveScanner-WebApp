import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {

  // なるべく内部で宣言する
  enum Mode {
    Light,
    Dark,
    System
  }

  function setTheme(mode: Mode) {

    // ローカルストレージを更新
    switch (mode) {
      case Mode.Light:
        localStorage.theme = 'light'
        break
      case Mode.Dark:
        localStorage.theme = 'dark'
        break
      case Mode.System:
        localStorage.removeItem('theme')
        break
    }

    // クラスを更新
    switch (mode) {
      case Mode.Light:

        document.documentElement.classList.remove('dark')
        break
      case Mode.Dark:

        document.documentElement.classList.add('dark')
        break
      case Mode.System:

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        break
    }

  }

  function setLight() {
    setTheme(Mode.Light)
  }

  function setDark() {
    setTheme(Mode.Dark)
  }

  function setSystem() {
    setTheme(Mode.System)
  }

  // 初回読み込み用
  // ローカルストレージを元に設定
  function setup() {

    if (localStorage.theme === 'dark') {
      setDark()
    } else if (localStorage.theme === 'light') {
      setLight()
    } else {
      setSystem()
    }
  }

  return { setLight, setDark, setSystem, setup }
})
