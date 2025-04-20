let audio = null

function playMp3(text) {
  const url = `https://api.relingo.net/api/getAzureTts?text=${text}&voice=en-US-AndrewNeural`
  if (audio) {
    audio.pause()
  }
  audio = new Audio(url)
  audio.play()
}
// playMp3('hello google')

// 为所有带有 data-relingo-block 属性的元素添加播放按钮
function addPlayButtonsToRelingoBlocks() {
  // 获取所有带有 data-relingo-block 属性的元素
  const relingoBlocks = document.querySelectorAll('[data-relingo-block]')

  // 遍历每个元素
  relingoBlocks.forEach((block) => {
    block.style.position = 'relative'
    // 创建播放按钮
    const playButton = document.createElement('span')
    playButton.textContent = '🔊'
    playButton.style.display = 'inline-block'
    playButton.style.cursor = 'pointer'

    // 添加点击事件监听器
    playButton.addEventListener('click', (event) => {
      // 获取元素的文本内容
      const text = block.innerText.trim().slice(2)
      if (text) {
        // 调用 playMp3 函数播放文本
        playMp3(text)
      }
      // 阻止事件冒泡
      event.stopPropagation()

      // 阻止默认事件
      event.preventDefault()
    })

    // 将按钮插入到元素之前
    block.insertBefore(playButton, block.firstChild)
  })
}

addPlayButtonsToRelingoBlocks()

// // 页面加载完成后执行
// document.addEventListener('DOMContentLoaded', addPlayButtonsToRelingoBlocks)

// // 如果页面是动态加载的，可以提供一个手动触发的方法
// function refreshRelingoPlayButtons() {
//   addPlayButtonsToRelingoBlocks()
// }

// getVioceUrl('hello interview')

// 生成一个链接地址，可以添加到收藏夹，点击后异步加载这个 js 文件

// javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='//cdn.jsdelivr.net/gh/shengxinjing/it-roadmap/play.js';void(0);
