export default function hitTestRectangle(ball, window) {
  if (ball.x + ball.radius >= window.right || ball.x - ball.radius <= window.left || ball.y - ball.radius <= window.top || ball.y + ball.radius >= window.bottom) {
    return true
  }
}
