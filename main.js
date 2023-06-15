
function main(){
  let videoId = 'M7lc1UVf-VE';  //動画ID
  let videoWidth  = '640';  //動画横サイズ
  let videoHeight = '360';  //動画縦サイズ
  const btn = document.querySelector('#btn');
  const inp = document.querySelector('#inp');

  let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  // #player にiframeplayerを作成
  let player;
  function onYouTubeIframeAPIReady() {
    videoId = inp.value;
    player = new YT.Player('player', {
      height: videoHeight,
      width: videoWidth,
      videoId: videoId,
      playerlets: {
        autoplay: 1,  //自動再生する
      },
    });
  }
  
  btn.addEventListener('click', onYouTubeIframeAPIReady)
};
document.addEventListener('DOMContentLoaded', main);