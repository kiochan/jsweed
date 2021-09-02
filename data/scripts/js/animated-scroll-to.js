//@title: 移动到页面指定位置
//@tag: animation, scroll, package
//@package: animated-scroll-to
import animateScrollTo from "animated-scroll-to";

// 这个将会在完成动画的时候返回一个 Promise
animateScrollTo(500).then((hasScrolledToPosition) => {
  // 当动画结束的时候 callback 会被调用

  if (hasScrolledToPosition) {
    // 如果真的移动到了指定位置
  } else {
    // 如果因为某些原因没有移动到的话
    // 会执行这里
  }
});
